$ErrorActionPreference = 'Stop'

$courseRoot = 'D:\Sao lưu\Udemy\Khóa học'
$outputPath = Join-Path $courseRoot 'Theo_doi_tien_do_khoa_hoc.xlsx'

function Rgb([int]$r, [int]$g, [int]$b) {
    return $r + (256 * $g) + (65536 * $b)
}

function New-2DArray([object[][]]$rows, [int]$columnCount) {
    $rowCount = $rows.Count
    $result = New-Object 'object[,]' $rowCount, $columnCount
    for ($r = 0; $r -lt $rowCount; $r++) {
        for ($c = 0; $c -lt $columnCount; $c++) {
            $result[$r, $c] = if ($c -lt $rows[$r].Count) { $rows[$r][$c] } else { $null }
        }
    }
    return ,$result
}

function Is-SkippedDirectory([string]$name) {
    return $name -match '^(?:\.|_zip_sources$|Resources?$|assets?$|media$|node_modules$|__pycache__$)' -or $name -match '^\.git$'
}

function Get-FirstHeading([string]$coursePath, [string]$fallback) {
    $readme = Join-Path $coursePath 'README.md'
    if (Test-Path -LiteralPath $readme) {
        foreach ($line in (Get-Content -LiteralPath $readme -TotalCount 100)) {
            if ($line -match '^\s*#\s+(.+?)\s*$') {
                $title = $Matches[1] -replace '\*\*', '' -replace '`', ''
                if ($title.Trim().Length -gt 0 -and $title.Trim() -notmatch '^README$') {
                    return $title.Trim()
                }
            }
        }
    }
    return $fallback
}

function Get-LessonCount([string]$modulePath) {
    $files = @(Get-ChildItem -LiteralPath $modulePath -Recurse -File -Filter '*.md' -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -notmatch '^(?:README|COURSE_INDEX|SYLLABUS)\.md$' })
    if ($files.Count -gt 0) {
        $unique = @{}
        foreach ($file in $files) {
            $key = [IO.Path]::GetFileNameWithoutExtension($file.Name) -replace '\s*-\s*Practice\s*$', ''
            $key = $key.Trim().ToLowerInvariant()
            if ($key.Length -gt 0) { $unique[$key] = $true }
        }
        if ($unique.Count -gt 0) { return $unique.Count }
    }
    return @(Get-ChildItem -LiteralPath $modulePath -Recurse -File -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -notmatch '^(?:README|COURSE_INDEX|SYLLABUS)\.md$' }).Count
}

function Find-ModuleContainers([string]$directory, [int]$depth = 0) {
    if ($depth -gt 7) { return @() }
    $children = @(Get-ChildItem -LiteralPath $directory -Directory -Force -ErrorAction SilentlyContinue |
        Where-Object { -not (Is-SkippedDirectory $_.Name) })
    $numbered = @($children | Where-Object { $_.Name -match '^\s*\d{1,3}\s*[-.]' })
    if ($numbered.Count -gt 0) {
        return @([pscustomobject]@{ Container = $directory; ModuleDirs = $numbered })
    }
    $found = @()
    foreach ($child in $children) {
        $found += Find-ModuleContainers $child.FullName ($depth + 1)
    }
    return $found
}

function Get-ModuleRows([string]$coursePath) {
    $rows = @()
    $containers = @(Find-ModuleContainers $coursePath)
    $seen = @{}

    if ($containers.Count -gt 0) {
        foreach ($container in $containers) {
            $relative = $container.Container.Substring($coursePath.Length).TrimStart('\')
            $parts = if ($relative.Length -gt 0) { @($relative.Split('\')) } else { @() }
            $prefix = if ($containers.Count -gt 1 -and $parts.Count -gt 0) { $parts[0] } else { '' }
            foreach ($module in $container.ModuleDirs) {
                if (-not $seen.ContainsKey($module.FullName)) {
                    $seen[$module.FullName] = $true
                    $moduleName = $module.Name
                    if ($prefix.Length -gt 0) { $moduleName = "$prefix — $moduleName" }
                    $rows += [pscustomobject]@{
                        Module = $moduleName
                        Lessons = Get-LessonCount $module.FullName
                        Source = $module.FullName
                    }
                }
            }
        }
        return $rows
    }

    $direct = @(Get-ChildItem -LiteralPath $coursePath -Directory -Force -ErrorAction SilentlyContinue |
        Where-Object { -not (Is-SkippedDirectory $_.Name) })
    if ($direct.Count -gt 0) {
        foreach ($module in $direct) {
            $rows += [pscustomobject]@{
                Module = $module.Name
                Lessons = Get-LessonCount $module.FullName
                Source = $module.FullName
            }
        }
        return $rows
    }

    $indexPath = Join-Path $coursePath 'COURSE_INDEX.md'
    if (-not (Test-Path -LiteralPath $indexPath)) { $indexPath = Join-Path $coursePath 'README.md' }
    if (Test-Path -LiteralPath $indexPath) {
        $numberedNames = @()
        foreach ($line in (Get-Content -LiteralPath $indexPath)) {
            if ($line -match '^\s*\d+\.\s+(.+?)\s*$') {
                $name = $Matches[1].Trim() -replace '\s*\(\s*\d+\s*bài.*?\)\s*$', ''
                if ($name.Length -gt 0) { $numberedNames += $name }
            }
        }
        foreach ($name in $numberedNames) {
            $rows += [pscustomobject]@{ Module = $name; Lessons = 0; Source = $indexPath }
        }
    }
    if ($rows.Count -eq 0) {
        $rows += [pscustomobject]@{ Module = 'Chưa có module trong thư mục — thêm thủ công'; Lessons = 0; Source = $coursePath }
    }
    return $rows
}

function Get-SafeSheetName([string]$preferred, [hashtable]$used) {
    $name = $preferred -replace '[:\\/\?\*\[\]]', '-'
    $name = $name.Trim()
    if ($name.Length -gt 31) { $name = $name.Substring(0, 31).Trim() }
    if ($name.Length -eq 0) { $name = 'Khóa học' }
    $base = $name
    $suffix = 1
    while ($used.ContainsKey($name)) {
        $tail = "-$suffix"
        $name = $base.Substring(0, [Math]::Min($base.Length, 31 - $tail.Length)) + $tail
        $suffix++
    }
    $used[$name] = $true
    return $name
}

function Set-BaseFont($range, [int]$size = 10, [bool]$bold = $false, [int]$color = 0) {
    $range.Font.Name = 'Aptos'
    $range.Font.Size = $size
    $range.Font.Bold = $bold
    if ($color -ne 0) { $range.Font.Color = $color }
}

function Style-Title($sheet, [string]$address, [string]$text, [int]$fillColor) {
    $range = $sheet.Range($address)
    $range.Merge()
    $range.Value2 = $text
    $range.Interior.Color = $fillColor
    $range.Font.Color = (Rgb 255 255 255)
    $range.Font.Name = 'Aptos Display'
    $range.Font.Size = 18
    $range.Font.Bold = $true
    $range.HorizontalAlignment = -4108
    $range.VerticalAlignment = -4108
    $range.RowHeight = 32
}

function Add-Card($sheet, [string]$labelAddress, [string]$valueAddress, [string]$label, [string]$formula, [int]$fillColor, [string]$numberFormat = 'General') {
    $labelRange = $sheet.Range($labelAddress)
    $labelRange.Merge()
    $labelRange.Value2 = $label
    $labelRange.Interior.Color = (Rgb 226 232 240)
    $labelRange.Font.Color = (Rgb 71 85 105)
    $labelRange.Font.Bold = $true
    $labelRange.Font.Size = 9
    $labelRange.HorizontalAlignment = -4108
    $labelRange.VerticalAlignment = -4108

    $valueRange = $sheet.Range($valueAddress)
    $valueRange.Merge()
    $valueRange.Formula = $formula
    $valueRange.Interior.Color = $fillColor
    $valueRange.Font.Color = (Rgb 15 23 42)
    $valueRange.Font.Bold = $true
    $valueRange.Font.Size = 18
    $valueRange.HorizontalAlignment = -4108
    $valueRange.VerticalAlignment = -4108
    $valueRange.NumberFormat = $numberFormat
    $valueRange.Borders.LineStyle = 1
    $valueRange.Borders.Color = (Rgb 203 213 225)
}

function Add-StatusValidation($range) {
    $range.Validation.Delete()
    $range.Validation.Add(3, 1, 1, 'Chưa bắt đầu,Đang học,Đã hoàn thành,Tạm dừng')
    $range.Validation.IgnoreBlank = $true
    $range.Validation.InCellDropdown = $true
    $range.Validation.ErrorTitle = 'Trạng thái không hợp lệ'
    $range.Validation.ErrorMessage = 'Chọn một trạng thái trong danh sách.'
}

function Add-DecimalValidation($range, [double]$minimum, [double]$maximum, [string]$message) {
    $range.Validation.Delete()
    $range.Validation.Add(2, 1, 1, $minimum, $maximum)
    $range.Validation.IgnoreBlank = $true
    $range.Validation.ErrorTitle = 'Giá trị không hợp lệ'
    $range.Validation.ErrorMessage = $message
}

function Add-ColorScale($range, [int]$lowColor, [int]$midColor, [int]$highColor) {
    try {
        $null = $range.FormatConditions.Delete()
        $scale = $range.FormatConditions.AddColorScale(3)
        $scale.ColorScaleCriteria.Item(1).FormatColor.Color = $lowColor
        $scale.ColorScaleCriteria.Item(2).FormatColor.Color = $midColor
        $scale.ColorScaleCriteria.Item(3).FormatColor.Color = $highColor
    } catch {
        # Conditional formatting is a visual enhancement; keep workbook creation resilient.
    }
}

function Add-Table($sheet, [string]$address, [string]$name, [string]$style = 'TableStyleMedium2') {
    try {
        $table = $sheet.ListObjects.Add(1, $sheet.Range($address), $null, 1)
        $table.Name = $name
        $table.TableStyle = $style
        return $table
    } catch {
        return $null
    }
}

function Configure-CourseSheet($sheet, $course, $moduleRows, $excel, [int]$navy, [int]$teal, [int]$yellow, [int]$borderColor, [int]$softGreen, [int]$softRed) {
    $headers = @('STT', 'Module', 'Số bài', 'Trạng thái', 'Tiến độ (%)', 'Điểm /10', 'Ngày hoàn thành', 'Ghi chú')
    $dataStart = 10
    $dataEnd = $dataStart + $moduleRows.Count - 1

    Style-Title $sheet 'A1:H1' "THEO DÕI KHÓA HỌC — $($course.Title)" $navy
    $sheet.Range('A2:H3').Font.Name = 'Aptos'
    $sheet.Range('A2:H3').Font.Size = 10
    $sheet.Range('A2:H3').Interior.Color = (Rgb 248 250 252)
    $sheet.Range('A2').Value2 = 'Mã khóa'; $sheet.Range('B2').Value2 = $course.Code
    $sheet.Range('C2').Value2 = 'Lĩnh vực'; $sheet.Range('D2').Value2 = $course.Category
    $sheet.Range('E2').Value2 = 'Chuyên ngành'; $sheet.Range('F2').Value2 = $course.Subcategory
    $sheet.Range('A3').Value2 = 'Thư mục nguồn'
    $sheet.Range('B3:H3').Merge(); $sheet.Range('B3').Value2 = $course.Path
    $sheet.Range('B3').Font.Color = (Rgb 37 99 235)
    try { $sheet.Hyperlinks.Add($sheet.Range('B3'), $course.Path) | Out-Null } catch {}
    foreach ($labelAddress in @('A2','C2','E2','A3')) {
        $sheet.Range($labelAddress).Font.Bold = $true
        $sheet.Range($labelAddress).Font.Color = (Rgb 71 85 105)
    }

    Add-Card $sheet 'A5:B5' 'A6:B7' 'TỔNG MODULE' ('=COUNTA(B' + $dataStart + ':B' + $dataEnd + ')') (Rgb 219 234 254) '0'
    Add-Card $sheet 'C5:D5' 'C6:D7' 'ĐÃ HOÀN THÀNH' ('=COUNTIF(D' + $dataStart + ':D' + $dataEnd + ',"Đã hoàn thành")') (Rgb 220 252 231) '0'
    Add-Card $sheet 'E5:F5' 'E6:F7' 'TIẾN ĐỘ TRUNG BÌNH' ('=IFERROR(AVERAGE(E' + $dataStart + ':E' + $dataEnd + '),0)') (Rgb 224 242 254) '0%'
    Add-Card $sheet 'G5:H5' 'G6:H7' 'ĐIỂM TRUNG BÌNH' ('=IFERROR(AVERAGE(F' + $dataStart + ':F' + $dataEnd + '),"")') (Rgb 254 249 195) '0.0'

    $sheet.Range('A8:H8').Merge()
    $sheet.Range('A8').Value2 = 'Nhập Trạng thái, Tiến độ và Điểm ở các ô nền vàng. Tiến độ nhập từ 0% đến 100%; điểm từ 0 đến 10.'
    $sheet.Range('A8').Font.Italic = $true
    $sheet.Range('A8').Font.Color = (Rgb 100 116 139)
    $sheet.Range('A8').Interior.Color = (Rgb 255 251 235)

    $sheet.Range('A9:H9').Value2 = (New-2DArray (,@($headers)) 8)
    $sheet.Range('A9:H9').Interior.Color = $teal
    $sheet.Range('A9:H9').Font.Color = (Rgb 255 255 255)
    $sheet.Range('A9:H9').Font.Bold = $true
    $sheet.Range('A9:H9').HorizontalAlignment = -4108
    $sheet.Range('A9:H9').VerticalAlignment = -4108
    $sheet.Range('A9:H9').WrapText = $true
    $sheet.Range('A9:H9').RowHeight = 30

    $dataRows = @()
    $index = 1
    foreach ($module in $moduleRows) {
        $dataRows += ,@($index, $module.Module, $module.Lessons, 'Chưa bắt đầu', 0, $null, $null, '')
        $index++
    }
    $sheet.Range("A$($dataStart):H$($dataEnd)").Value2 = (New-2DArray $dataRows 8)
    $sheet.Range("A$($dataStart):H$($dataEnd)").Borders.LineStyle = 1
    $sheet.Range("A$($dataStart):H$($dataEnd)").Borders.Color = $borderColor
    $sheet.Range("B$($dataStart):B$($dataEnd)").WrapText = $true
    $sheet.Range("H$($dataStart):H$($dataEnd)").WrapText = $true
    $sheet.Range("D$($dataStart):H$($dataEnd)").Interior.Color = $yellow
    $sheet.Range("A$($dataStart):A$($dataEnd)").HorizontalAlignment = -4108
    $sheet.Range("C$($dataStart):C$($dataEnd)").HorizontalAlignment = -4108
    $sheet.Range("D$($dataStart):G$($dataEnd)").HorizontalAlignment = -4108
    $sheet.Range("E$($dataStart):E$($dataEnd)").NumberFormat = '0%'
    $sheet.Range("F$($dataStart):F$($dataEnd)").NumberFormat = '0.0'
    $sheet.Range("G$($dataStart):G$($dataEnd)").NumberFormat = 'dd/mm/yyyy'
    $sheet.Range("A$($dataStart):H$($dataEnd)").VerticalAlignment = -4108
    $sheet.Range("A$($dataStart):H$($dataEnd)").RowHeight = 24

    Add-Table $sheet "A9:H$($dataEnd)" "Tbl_$($course.Code)" | Out-Null
    Add-StatusValidation $sheet.Range("D$($dataStart):D$($dataEnd)")
    Add-DecimalValidation $sheet.Range("E$($dataStart):E$($dataEnd)") 0 1 'Nhập phần trăm từ 0% đến 100%.'
    Add-DecimalValidation $sheet.Range("F$($dataStart):F$($dataEnd)") 0 10 'Nhập điểm từ 0 đến 10.'
    Add-ColorScale $sheet.Range("E$($dataStart):E$($dataEnd)") (Rgb 254 226 226) (Rgb 254 249 195) $softGreen
    Add-ColorScale $sheet.Range("F$($dataStart):F$($dataEnd)") (Rgb 254 226 226) (Rgb 254 249 195) $softGreen

    $sheet.Columns.Item('A').ColumnWidth = 6
    $sheet.Columns.Item('B').ColumnWidth = 54
    $sheet.Columns.Item('C').ColumnWidth = 10
    $sheet.Columns.Item('D').ColumnWidth = 18
    $sheet.Columns.Item('E').ColumnWidth = 14
    $sheet.Columns.Item('F').ColumnWidth = 12
    $sheet.Columns.Item('G').ColumnWidth = 16
    $sheet.Columns.Item('H').ColumnWidth = 34
    $sheet.Rows.Item(2).RowHeight = 20
    $sheet.Rows.Item(3).RowHeight = 30
    $sheet.Tab.Color = $teal
    try {
        $sheet.Activate()
        $sheet.Range('A10').Select()
        $excel.ActiveWindow.FreezePanes = $true
    } catch {}
}

function Configure-TemplateSheet($sheet, $navy, $teal, $yellow, $borderColor) {
    Style-Title $sheet 'A1:H1' 'MẪU THEO DÕI KHÓA MỚI' $navy
    $sheet.Range('A2:H3').Interior.Color = (Rgb 248 250 252)
    $sheet.Range('A2').Value2 = 'Mã khóa'; $sheet.Range('B2').Value2 = 'Cxx'
    $sheet.Range('C2').Value2 = 'Lĩnh vực'; $sheet.Range('D2').Value2 = ''
    $sheet.Range('E2').Value2 = 'Chuyên ngành'; $sheet.Range('F2').Value2 = ''
    $sheet.Range('A3').Value2 = 'Thư mục nguồn'; $sheet.Range('B3:H3').Merge()
    $sheet.Range('B3').Value2 = 'Dán đường dẫn thư mục khóa học tại đây'
    foreach ($address in @('A2','C2','E2','A3')) { $sheet.Range($address).Font.Bold = $true; $sheet.Range($address).Font.Color = (Rgb 71 85 105) }
    Add-Card $sheet 'A5:B5' 'A6:B7' 'TỔNG MODULE' '=COUNTA(B10:B209)' (Rgb 219 234 254) '0'
    Add-Card $sheet 'C5:D5' 'C6:D7' 'ĐÃ HOÀN THÀNH' '=COUNTIF(D10:D209,"Đã hoàn thành")' (Rgb 220 252 231) '0'
    Add-Card $sheet 'E5:F5' 'E6:F7' 'TIẾN ĐỘ TRUNG BÌNH' '=IFERROR(AVERAGE(E10:E209),0)' (Rgb 224 242 254) '0%'
    Add-Card $sheet 'G5:H5' 'G6:H7' 'ĐIỂM TRUNG BÌNH' '=IFERROR(AVERAGE(F10:F209),"")' (Rgb 254 249 195) '0.0'
    $sheet.Range('A8:H8').Merge(); $sheet.Range('A8').Value2 = 'Sao chép sheet này khi thêm khóa mới. Mỗi dòng là một module; nhập trạng thái, tiến độ, điểm và ngày hoàn thành.'
    $sheet.Range('A8').Font.Italic = $true; $sheet.Range('A8').Font.Color = (Rgb 100 116 139); $sheet.Range('A8').Interior.Color = (Rgb 255 251 235)
    $headers = @('STT', 'Module', 'Số bài', 'Trạng thái', 'Tiến độ (%)', 'Điểm /10', 'Ngày hoàn thành', 'Ghi chú')
    $sheet.Range('A9:H9').Value2 = (New-2DArray (,@($headers)) 8)
    $sheet.Range('A9:H9').Interior.Color = $teal; $sheet.Range('A9:H9').Font.Color = (Rgb 255 255 255); $sheet.Range('A9:H9').Font.Bold = $true; $sheet.Range('A9:H9').HorizontalAlignment = -4108; $sheet.Range('A9:H9').WrapText = $true; $sheet.Range('A9:H9').RowHeight = 30
    $blankRows = @()
    for ($i = 1; $i -le 200; $i++) { $blankRows += ,@($i, '', $null, 'Chưa bắt đầu', 0, $null, $null, '') }
    $sheet.Range('A10:H209').Value2 = (New-2DArray $blankRows 8)
    $sheet.Range('A10:H209').Borders.LineStyle = 1; $sheet.Range('A10:H209').Borders.Color = $borderColor; $sheet.Range('D10:H209').Interior.Color = $yellow; $sheet.Range('E10:E209').NumberFormat = '0%'; $sheet.Range('F10:F209').NumberFormat = '0.0'; $sheet.Range('G10:G209').NumberFormat = 'dd/mm/yyyy'
    $sheet.Range('B10:B209').WrapText = $true; $sheet.Range('H10:H209').WrapText = $true
    Add-StatusValidation $sheet.Range('D10:D209'); Add-DecimalValidation $sheet.Range('E10:E209') 0 1 'Nhập phần trăm từ 0% đến 100%.'; Add-DecimalValidation $sheet.Range('F10:F209') 0 10 'Nhập điểm từ 0 đến 10.'
    Add-ColorScale $sheet.Range('E10:E209') (Rgb 254 226 226) (Rgb 254 249 195) (Rgb 220 252 231); Add-ColorScale $sheet.Range('F10:F209') (Rgb 254 226 226) (Rgb 254 249 195) (Rgb 220 252 231)
    foreach ($pair in @(@('A',6),@('B',54),@('C',10),@('D',18),@('E',14),@('F',12),@('G',16),@('H',34))) { $sheet.Columns.Item($pair[0]).ColumnWidth = $pair[1] }
    $sheet.Tab.Color = (Rgb 148 163 184)
}

function Configure-GuideSheet($sheet, $navy, $teal) {
    Style-Title $sheet 'A1:H1' 'HƯỚNG DẪN SỬ DỤNG' $navy
    $sheet.Range('A3:H3').Merge(); $sheet.Range('A3').Value2 = 'Mục đích'; $sheet.Range('A3').Interior.Color = $teal; $sheet.Range('A3').Font.Color = (Rgb 255 255 255); $sheet.Range('A3').Font.Bold = $true
    $sheet.Range('A4:H4').Merge(); $sheet.Range('A4').Value2 = 'Workbook này theo dõi tiến độ theo khóa học và module. Các ô nền vàng là nơi nhập liệu; các ô KPI và Tổng quan tự tính bằng công thức.'; $sheet.Range('A4').WrapText = $true; $sheet.Range('A4').RowHeight = 32
    $sheet.Range('A6:H6').Merge(); $sheet.Range('A6').Value2 = 'Cách cập nhật tiến độ'; $sheet.Range('A6').Interior.Color = $teal; $sheet.Range('A6').Font.Color = (Rgb 255 255 255); $sheet.Range('A6').Font.Bold = $true
    $steps = @(
        @('1', 'Mở sheet của khóa học cần học trong danh sách tab phía dưới.'),
        @('2', 'Ở từng module, chọn Trạng thái, nhập Tiến độ (%) và Điểm /10; điền Ngày hoàn thành khi kết thúc.'),
        @('3', 'Xem sheet TỔNG QUAN để biết tiến độ toàn bộ kho và tiến độ theo từng lĩnh vực.'),
        @('4', 'Không sửa các ô KPI/công thức; chỉ sửa các ô nền vàng và cột Ghi chú.'),
        @('5', 'Điểm dùng thang 0–10; Tiến độ dùng phần trăm 0%–100%.' )
    )
    $sheet.Range('A7:B11').Value2 = (New-2DArray $steps 2); $sheet.Range('A7:A11').HorizontalAlignment = -4108; $sheet.Range('A7:A11').Font.Bold = $true; $sheet.Range('B7:B11').WrapText = $true
    $sheet.Range('A13:H13').Merge(); $sheet.Range('A13').Value2 = 'Quy ước trạng thái'; $sheet.Range('A13').Interior.Color = $teal; $sheet.Range('A13').Font.Color = (Rgb 255 255 255); $sheet.Range('A13').Font.Bold = $true
    $sheet.Range('A14:B14').Value2 = (New-2DArray @(@('Trạng thái','Ý nghĩa')) 2); $sheet.Range('A14:B14').Interior.Color = (Rgb 226 232 240); $sheet.Range('A14:B14').Font.Bold = $true
    $statusRows = @(@('Chưa bắt đầu','Chưa học module'),@('Đang học','Đang học hoặc đã học một phần'),@('Đã hoàn thành','Đã hoàn thành module'),@('Tạm dừng','Tạm thời chưa học tiếp'))
    $sheet.Range('A15:B18').Value2 = (New-2DArray $statusRows 2); $sheet.Range('A15:B18').Borders.LineStyle = 1; $sheet.Range('A15:B18').Borders.Color = (Rgb 226 232 240)
    $sheet.Range('A20:H20').Merge(); $sheet.Range('A20').Value2 = 'Thêm khóa học mới'; $sheet.Range('A20').Interior.Color = $teal; $sheet.Range('A20').Font.Color = (Rgb 255 255 255); $sheet.Range('A20').Font.Bold = $true
    $sheet.Range('A21:H23').Merge(); $sheet.Range('A21').Value2 = 'Khi thêm một thư mục khóa học mới vào kho, hãy tạo một sheet mới bằng cách sao chép MẪU_KHÓA_MỚI, đổi tên theo mã khóa và nhập các module. Khi bạn báo có khóa mới, mình sẽ tạo sheet tương ứng và cập nhật TỔNG QUAN.'; $sheet.Range('A21').WrapText = $true; $sheet.Range('A21').RowHeight = 45; $sheet.Range('A21').Interior.Color = (Rgb 255 251 235)
    $sheet.Range('A25:H25').Merge(); $sheet.Range('A25').Value2 = 'Lưu ý: file .xlsx không tự theo dõi thay đổi của thư mục Windows. Sheet MẪU_KHÓA_MỚI giúp thêm sheet mới thống nhất và không phá công thức.'; $sheet.Range('A25').WrapText = $true; $sheet.Range('A25').Font.Italic = $true; $sheet.Range('A25').Font.Color = (Rgb 100 116 139); $sheet.Range('A25').RowHeight = 32
    $sheet.Columns.Item('A').ColumnWidth = 12; $sheet.Columns.Item('B').ColumnWidth = 72; $sheet.Columns.Item('C').ColumnWidth = 14; $sheet.Columns.Item('D').ColumnWidth = 14; $sheet.Columns.Item('E').ColumnWidth = 14; $sheet.Columns.Item('F').ColumnWidth = 14; $sheet.Columns.Item('G').ColumnWidth = 14; $sheet.Columns.Item('H').ColumnWidth = 14
    $sheet.Tab.Color = (Rgb 148 163 184)
}

if (-not (Test-Path -LiteralPath $courseRoot)) { throw "Không tìm thấy thư mục: $courseRoot" }

$courses = @()
Get-ChildItem -LiteralPath $courseRoot -Directory | Sort-Object Name | ForEach-Object {
    $categoryDir = $_
    Get-ChildItem -LiteralPath $categoryDir.FullName -Directory | Sort-Object Name | ForEach-Object {
        $subcategoryDir = $_
        Get-ChildItem -LiteralPath $subcategoryDir.FullName -Directory | Sort-Object Name |
            Where-Object { -not (Is-SkippedDirectory $_.Name) } | ForEach-Object {
                $courseDir = $_
                $courses += [pscustomobject]@{
                    Category = $categoryDir.Name
                    Subcategory = $subcategoryDir.Name
                    FolderName = $courseDir.Name
                    Path = $courseDir.FullName
                    Title = Get-FirstHeading $courseDir.FullName $courseDir.Name
                }
            }
    }
}

$usedSheetNames = @{}
$courseIndex = 1
foreach ($course in $courses) {
    $course | Add-Member -NotePropertyName Code -NotePropertyValue ('C{0:D2}' -f $courseIndex)
    $course | Add-Member -NotePropertyName ModuleRows -NotePropertyValue @(Get-ModuleRows $course.Path)
    $course | Add-Member -NotePropertyName SheetName -NotePropertyValue (Get-SafeSheetName ("$($course.Code) $($course.Title)") $usedSheetNames)
    $courseIndex++
}

$navy = Rgb 31 78 121
$teal = Rgb 13 148 136
$yellow = Rgb 255 242 204
$borderColor = Rgb 203 213 225
$softGreen = Rgb 220 252 231
$softRed = Rgb 254 226 226
$softBlue = Rgb 219 234 254

$excel = $null
$workbook = $null
try {
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false
    $excel.DisplayAlerts = $false
    $excel.ScreenUpdating = $false
    try { $excel.Calculation = -4105 } catch {}
    $workbook = $excel.Workbooks.Add()
    $overview = $workbook.Worksheets.Item(1)
    $overview.Name = 'TỔNG QUAN'
    for ($i = $workbook.Worksheets.Count; $i -ge 2; $i--) { $workbook.Worksheets.Item($i).Delete() }
    $guide = $workbook.Worksheets.Add(); $guide.Name = 'HƯỚNG DẪN'
    $template = $workbook.Worksheets.Add(); $template.Name = 'MẪU_KHÓA_MỚI'

    Configure-GuideSheet $guide $navy $teal
    Configure-TemplateSheet $template $navy $teal $yellow $borderColor

    foreach ($course in $courses) {
        $courseSheet = $workbook.Worksheets.Add()
        $courseSheet.Name = $course.SheetName
        Configure-CourseSheet $courseSheet $course $course.ModuleRows $excel $navy $teal $yellow $borderColor $softGreen $softRed
    }

    $summaryStart = 12
    $summaryEnd = $summaryStart + $courses.Count - 1
    Style-Title $overview 'A1:O1' 'BẢNG THEO DÕI TIẾN ĐỘ KHÓA HỌC' $navy
    $overview.Range('A2:O2').Merge(); $overview.Range('A2').Value2 = "Kho khóa học: $courseRoot — cập nhật từ cấu trúc thư mục hiện có"; $overview.Range('A2').Font.Color = (Rgb 100 116 139); $overview.Range('A2').Font.Italic = $true
    Add-Card $overview 'A4:B4' 'A5:B6' 'TỔNG KHÓA' ('=COUNTA(B' + $summaryStart + ':B' + $summaryEnd + ')') $softBlue '0'
    Add-Card $overview 'D4:E4' 'D5:E6' 'TỔNG MODULE' ('=SUM(E' + $summaryStart + ':E' + $summaryEnd + ')') (Rgb 224 242 254) '0'
    Add-Card $overview 'G4:H4' 'G5:H6' 'MODULE ĐÃ XONG' ('=SUM(F' + $summaryStart + ':F' + $summaryEnd + ')') $softGreen '0'
    Add-Card $overview 'J4:K4' 'J5:K6' 'TIẾN ĐỘ TOÀN KHO' ('=IFERROR(AVERAGE(G' + $summaryStart + ':G' + $summaryEnd + '),0)') (Rgb 224 242 254) '0%'
    Add-Card $overview 'M4:N4' 'M5:N6' 'ĐIỂM TRUNG BÌNH' ('=IFERROR(AVERAGE(H' + $summaryStart + ':H' + $summaryEnd + '),"")') (Rgb 254 249 195) '0.0'
    $overview.Range('A8:O8').Merge(); $overview.Range('A8').Value2 = 'Cập nhật trực tiếp ở các sheet khóa học. Dùng bộ lọc ở bảng dưới để xem theo lĩnh vực, trạng thái hoặc tiến độ.'; $overview.Range('A8').Font.Color = (Rgb 71 85 105); $overview.Range('A8').Interior.Color = (Rgb 248 250 252)

    $overview.Range('A10:J10').Merge(); $overview.Range('A10').Value2 = 'DANH SÁCH KHÓA HỌC'; $overview.Range('A10').Interior.Color = $teal; $overview.Range('A10').Font.Color = (Rgb 255 255 255); $overview.Range('A10').Font.Bold = $true
    $summaryHeaders = @('Mã', 'Khóa học', 'Lĩnh vực', 'Chuyên ngành', 'Số module', 'Đã xong', 'Tiến độ TB', 'Điểm TB', 'Trạng thái', 'Sheet')
    $overview.Range('A11:J11').Value2 = (New-2DArray @($summaryHeaders) 10); $overview.Range('A11:J11').Interior.Color = $teal; $overview.Range('A11:J11').Font.Color = (Rgb 255 255 255); $overview.Range('A11:J11').Font.Bold = $true; $overview.Range('A11:J11').WrapText = $true; $overview.Range('A11:J11').RowHeight = 28
    $summaryValues = @()
    $summaryFormulas = @()
    $rowNumber = $summaryStart
    foreach ($course in $courses) {
        $summaryValues += ,@($course.Code, $course.Title, $course.Category, $course.Subcategory, $null, $null, $null, $null, $null, $course.SheetName)
        $escaped = $course.SheetName.Replace("'", "''")
        $summaryFormulas += ,@( ("='" + $escaped + "'!`$A`$6"), ("='" + $escaped + "'!`$C`$6"), ("='" + $escaped + "'!`$E`$6"), ("='" + $escaped + "'!`$G`$6"), ('=IF(E' + $rowNumber + '=0,"Chưa có module",IF(F' + $rowNumber + '=E' + $rowNumber + ',"Đã hoàn thành",IF(F' + $rowNumber + '=0,"Chưa bắt đầu","Đang học")))') )
        $rowNumber++
    }
    $overview.Range("A$($summaryStart):J$($summaryEnd)").Value2 = (New-2DArray $summaryValues 10)
    $overview.Range("E$($summaryStart):I$($summaryEnd)").Formula = (New-2DArray $summaryFormulas 5)
    $overview.Range("A$($summaryStart):J$($summaryEnd)").Borders.LineStyle = 1; $overview.Range("A$($summaryStart):J$($summaryEnd)").Borders.Color = $borderColor
    $overview.Range("B$($summaryStart):D$($summaryEnd)").WrapText = $true; $overview.Range("G$($summaryStart):G$($summaryEnd)").NumberFormat = '0%'; $overview.Range("H$($summaryStart):H$($summaryEnd)").NumberFormat = '0.0'; $overview.Range("A$($summaryStart):A$($summaryEnd)").HorizontalAlignment = -4108; $overview.Range("E$($summaryStart):I$($summaryEnd)").HorizontalAlignment = -4108; $overview.Range("A$($summaryStart):J$($summaryEnd)").VerticalAlignment = -4108
    Add-Table $overview "A11:J$($summaryEnd)" 'Tbl_CourseSummary' 'TableStyleMedium2' | Out-Null
    Add-ColorScale $overview.Range("G$($summaryStart):G$($summaryEnd)") $softRed (Rgb 254 249 195) $softGreen
    Add-ColorScale $overview.Range("H$($summaryStart):H$($summaryEnd)") $softRed (Rgb 254 249 195) $softGreen

    $overview.Range('L10:O10').Merge(); $overview.Range('L10').Value2 = 'TỔNG HỢP THEO LĨNH VỰC'; $overview.Range('L10').Interior.Color = $teal; $overview.Range('L10').Font.Color = (Rgb 255 255 255); $overview.Range('L10').Font.Bold = $true
    $overview.Range('L11:N11').Value2 = (New-2DArray @(@('Lĩnh vực','Số khóa','Tiến độ TB')) 3); $overview.Range('L11:N11').Interior.Color = (Rgb 226 232 240); $overview.Range('L11:N11').Font.Bold = $true
    $categoryNames = @($courses | Select-Object -ExpandProperty Category -Unique | Sort-Object)
    $categoryValues = @(); $categoryFormulas = @(); $catRow = 12
    foreach ($category in $categoryNames) {
        $categoryValues += ,@($category, $null, $null)
        $categoryFormulas += ,@( ('=COUNTIF($C$' + $summaryStart + ':$C$' + $summaryEnd + ',L' + $catRow + ')'), ('=IFERROR(AVERAGEIF($C$' + $summaryStart + ':$C$' + $summaryEnd + ',L' + $catRow + ',$G$' + $summaryStart + ':$G$' + $summaryEnd + '),0)') )
        $catRow++
    }
    $categoryEnd = 11 + $categoryNames.Count
    $overview.Range("L12:N$categoryEnd").Value2 = (New-2DArray $categoryValues 3); $overview.Range("M12:N$categoryEnd").Formula = (New-2DArray $categoryFormulas 2); $overview.Range("N12:N$categoryEnd").NumberFormat = '0%'; $overview.Range("L11:N$categoryEnd").Borders.LineStyle = 1; $overview.Range("L11:N$categoryEnd").Borders.Color = $borderColor; $overview.Range("L12:L$categoryEnd").WrapText = $true

    try {
        $chartObject = $overview.ChartObjects().Add(780, 55, 480, 285)
        $chart = $chartObject.Chart
        $chart.SetSourceData($overview.Range("L11:N$categoryEnd"))
        if ($chart.SeriesCollection().Count -gt 1) { $null = $chart.SeriesCollection().Item(1).Delete() }
        $chart.ChartType = 51
        $chart.HasTitle = $true
        $chart.ChartTitle.Text = 'Tiến độ trung bình theo lĩnh vực'
        $chart.HasLegend = $false
        $chart.Axes(2).MinimumScale = 0
        $chart.Axes(2).MaximumScale = 1
        $chart.Axes(2).TickLabels.NumberFormat = '0%'
    } catch {}

    $overview.Columns.Item('A').ColumnWidth = 8; $overview.Columns.Item('B').ColumnWidth = 43; $overview.Columns.Item('C').ColumnWidth = 25; $overview.Columns.Item('D').ColumnWidth = 32; $overview.Columns.Item('E').ColumnWidth = 11; $overview.Columns.Item('F').ColumnWidth = 10; $overview.Columns.Item('G').ColumnWidth = 12; $overview.Columns.Item('H').ColumnWidth = 11; $overview.Columns.Item('I').ColumnWidth = 18; $overview.Columns.Item('J').ColumnWidth = 23; $overview.Columns.Item('K').ColumnWidth = 3; $overview.Columns.Item('L').ColumnWidth = 28; $overview.Columns.Item('M').ColumnWidth = 10; $overview.Columns.Item('N').ColumnWidth = 13; $overview.Columns.Item('O').ColumnWidth = 3
    $overview.Rows.Item(2).RowHeight = 20; $overview.Tab.Color = $navy
    try { $overview.Activate(); $overview.Range('A12').Select(); $excel.ActiveWindow.FreezePanes = $true } catch {}

    try { $overview.Move($workbook.Worksheets.Item(1)) } catch {}
    try { $guide.Move($workbook.Worksheets.Item(2)) } catch {}
    try { $template.Move($workbook.Worksheets.Item(3)) } catch {}

    $excel.CalculateFull()
    $workbook.ForceFullCalculation = $true
    $workbook.SaveAs($outputPath, 51)
    Write-Output "CREATED=$outputPath"
    Write-Output "COURSES=$($courses.Count)"
    Write-Output "CATEGORIES=$($categoryNames.Count)"
    Write-Output "MODULE_ROWS=$((($courses | ForEach-Object { $_.ModuleRows.Count } | Measure-Object -Sum).Sum))"
} finally {
    if ($workbook -ne $null) {
        try { $workbook.Close($false) } catch {}
    }
    if ($excel -ne $null) {
        try { $excel.Quit() } catch {}
    }
    foreach ($obj in @($overview, $guide, $template, $workbook, $excel)) {
        if ($obj -ne $null) {
            try { [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($obj) } catch {}
        }
    }
    [GC]::Collect(); [GC]::WaitForPendingFinalizers()
}
