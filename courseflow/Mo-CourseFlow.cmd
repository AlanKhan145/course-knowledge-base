@echo off
rem Bấm đúp để mở CourseFlow: bật web (nếu chưa chạy), ghi log vào .start.log, mở trình duyệt.
chcp 65001 >nul
cd /d "%~dp0"

powershell -NoProfile -Command "if (Get-NetTCPConnection -LocalPort 3210 -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
if %errorlevel%==0 goto open

if not exist ".next\BUILD_ID" (
  echo Dang build lan dau, vui long cho vai phut...
  call npm run build >> .build.log 2>&1
)

echo Dang bat CourseFlow, log ghi vao .start.log ...
start "CourseFlow server" /min cmd /c "npm start >> .start.log 2>&1"

powershell -NoProfile -Command "for ($i=0; $i -lt 120; $i++) { try { Invoke-WebRequest -UseBasicParsing http://localhost:3210 -TimeoutSec 5 | Out-Null; exit 0 } catch { Start-Sleep 2 } }; exit 1"

:open
start "" http://localhost:3210
