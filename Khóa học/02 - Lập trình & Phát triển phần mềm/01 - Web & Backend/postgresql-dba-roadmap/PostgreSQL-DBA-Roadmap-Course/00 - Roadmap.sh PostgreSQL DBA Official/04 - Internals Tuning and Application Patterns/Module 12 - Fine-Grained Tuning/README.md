# Module 12 - Fine-Grained Tuning

**Hoc phan:** 04 - Internals Tuning and Application Patterns

## Ket qua dau ra

Tune PostgreSQL settings, storage parameters and workloads for OLTP, OLAP and HTAP environments.

## Project

Lab: Compare OLTP and OLAP tuning profiles and justify each setting change.

## Noi dung nho

- [01-PerUserSettings-IndexFillfactor](01-PerUserSettings-IndexFillfactor/)
- [02-AutovacuumPerTable-HTAP](02-AutovacuumPerTable-HTAP/)
- [03-ConnectionHeavyWorkload-MixedWorkload](03-ConnectionHeavyWorkload-MixedWorkload/)
- [04-ANALYZE-PlannerStatistics](04-ANALYZE-PlannerStatistics/)
- [05-DefaultStatisticsTarget-ParallelWorkers](05-DefaultStatisticsTarget-ParallelWorkers/)

## Danh sach bai hoc

### [01-PerUserSettings-IndexFillfactor](01-PerUserSettings-IndexFillfactor/)

- [Per-User Settings](01-PerUserSettings-IndexFillfactor/001 - Per-User Settings.md)
- [Per-Database Settings](01-PerUserSettings-IndexFillfactor/002 - Per-Database Settings.md)
- [Storage Parameters](01-PerUserSettings-IndexFillfactor/003 - Storage Parameters.md)
- [Table Fillfactor](01-PerUserSettings-IndexFillfactor/004 - Table Fillfactor.md)
- [Index Fillfactor](01-PerUserSettings-IndexFillfactor/005 - Index Fillfactor.md)

### [02-AutovacuumPerTable-HTAP](02-AutovacuumPerTable-HTAP/)

- [Autovacuum Per Table](02-AutovacuumPerTable-HTAP/006 - Autovacuum Per Table.md)
- [Workload-Dependent Tuning](02-AutovacuumPerTable-HTAP/007 - Workload-Dependent Tuning.md)
- [OLTP](02-AutovacuumPerTable-HTAP/008 - OLTP.md)
- [OLAP](02-AutovacuumPerTable-HTAP/009 - OLAP.md)
- [HTAP](02-AutovacuumPerTable-HTAP/010 - HTAP.md)

### [03-ConnectionHeavyWorkload-MixedWorkload](03-ConnectionHeavyWorkload-MixedWorkload/)

- [Connection-heavy Workload](03-ConnectionHeavyWorkload-MixedWorkload/011 - Connection-heavy Workload.md)
- [Write-heavy Workload](03-ConnectionHeavyWorkload-MixedWorkload/012 - Write-heavy Workload.md)
- [Read-heavy Workload](03-ConnectionHeavyWorkload-MixedWorkload/013 - Read-heavy Workload.md)
- [Batch Workload](03-ConnectionHeavyWorkload-MixedWorkload/014 - Batch Workload.md)
- [Mixed Workload](03-ConnectionHeavyWorkload-MixedWorkload/015 - Mixed Workload.md)

### [04-ANALYZE-PlannerStatistics](04-ANALYZE-PlannerStatistics/)

- [ANALYZE](04-ANALYZE-PlannerStatistics/016 - ANALYZE.md)
- [VACUUM](04-ANALYZE-PlannerStatistics/017 - VACUUM.md)
- [VACUUM FULL](04-ANALYZE-PlannerStatistics/018 - VACUUM FULL.md)
- [REINDEX](04-ANALYZE-PlannerStatistics/019 - REINDEX.md)
- [Planner Statistics](04-ANALYZE-PlannerStatistics/020 - Planner Statistics.md)

### [05-DefaultStatisticsTarget-ParallelWorkers](05-DefaultStatisticsTarget-ParallelWorkers/)

- [default_statistics_target](05-DefaultStatisticsTarget-ParallelWorkers/021 - default_statistics_target.md)
- [effective_io_concurrency](05-DefaultStatisticsTarget-ParallelWorkers/022 - effective_io_concurrency.md)
- [random_page_cost](05-DefaultStatisticsTarget-ParallelWorkers/023 - random_page_cost.md)
- [parallel_workers](05-DefaultStatisticsTarget-ParallelWorkers/024 - parallel_workers.md)

