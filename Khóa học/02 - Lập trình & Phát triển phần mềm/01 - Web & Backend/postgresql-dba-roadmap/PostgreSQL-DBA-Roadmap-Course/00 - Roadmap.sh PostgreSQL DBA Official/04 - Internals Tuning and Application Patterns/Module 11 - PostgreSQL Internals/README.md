# Module 11 - PostgreSQL Internals

**Hoc phan:** 04 - Internals Tuning and Application Patterns

## Ket qua dau ra

Understand PostgreSQL internals enough to reason about vacuum, memory, storage, locks and system catalogs.

## Project

Lab: Create an internals notebook explaining a query from client connection to storage access.

## Noi dung nho

- [01-ProcessesAndMemory-BackgroundProcesses](01-ProcessesAndMemory-BackgroundProcesses/)
- [02-VacuumProcessing-SystemCatalog](02-VacuumProcessing-SystemCatalog/)
- [03-TOASTStorage-Snapshots](03-TOASTStorage-Snapshots/)
- [04-TupleVisibility-Bloat](04-TupleVisibility-Bloat/)
- [05-Freeze-WraparoundRisk](05-Freeze-WraparoundRisk/)

## Danh sach bai hoc

### [01-ProcessesAndMemory-BackgroundProcesses](01-ProcessesAndMemory-BackgroundProcesses/)

- [Processes and Memory Architecture](01-ProcessesAndMemory-BackgroundProcesses/001 - Processes and Memory Architecture.md)
- [Postmaster Process](01-ProcessesAndMemory-BackgroundProcesses/002 - Postmaster Process.md)
- [Backend Process](01-ProcessesAndMemory-BackgroundProcesses/003 - Backend Process.md)
- [Shared Memory](01-ProcessesAndMemory-BackgroundProcesses/004 - Shared Memory.md)
- [Background Processes](01-ProcessesAndMemory-BackgroundProcesses/005 - Background Processes.md)

### [02-VacuumProcessing-SystemCatalog](02-VacuumProcessing-SystemCatalog/)

- [Vacuum Processing](02-VacuumProcessing-SystemCatalog/006 - Vacuum Processing.md)
- [Buffer Management](02-VacuumProcessing-SystemCatalog/007 - Buffer Management.md)
- [Lock Management](02-VacuumProcessing-SystemCatalog/008 - Lock Management.md)
- [Physical Storage and File Layout](02-VacuumProcessing-SystemCatalog/009 - Physical Storage and File Layout.md)
- [System Catalog](02-VacuumProcessing-SystemCatalog/010 - System Catalog.md)

### [03-TOASTStorage-Snapshots](03-TOASTStorage-Snapshots/)

- [TOAST Storage](03-TOASTStorage-Snapshots/011 - TOAST Storage.md)
- [Visibility Map](03-TOASTStorage-Snapshots/012 - Visibility Map.md)
- [Free Space Map](03-TOASTStorage-Snapshots/013 - Free Space Map.md)
- [Transaction IDs](03-TOASTStorage-Snapshots/014 - Transaction IDs.md)
- [Snapshots](03-TOASTStorage-Snapshots/015 - Snapshots.md)

### [04-TupleVisibility-Bloat](04-TupleVisibility-Bloat/)

- [Tuple Visibility](04-TupleVisibility-Bloat/016 - Tuple Visibility.md)
- [WAL Records](04-TupleVisibility-Bloat/017 - WAL Records.md)
- [Commit Log](04-TupleVisibility-Bloat/018 - Commit Log.md)
- [Autovacuum Internals](04-TupleVisibility-Bloat/019 - Autovacuum Internals.md)
- [Bloat](04-TupleVisibility-Bloat/020 - Bloat.md)

### [05-Freeze-WraparoundRisk](05-Freeze-WraparoundRisk/)

- [Freeze](05-Freeze-WraparoundRisk/021 - Freeze.md)
- [Wraparound Risk](05-Freeze-WraparoundRisk/022 - Wraparound Risk.md)

