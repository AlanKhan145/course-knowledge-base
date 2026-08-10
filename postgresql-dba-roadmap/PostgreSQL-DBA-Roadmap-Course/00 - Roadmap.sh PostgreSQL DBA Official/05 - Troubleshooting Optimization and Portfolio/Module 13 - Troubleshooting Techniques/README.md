# Module 13 - Troubleshooting Techniques

**Hoc phan:** 05 - Troubleshooting Optimization and Portfolio

## Ket qua dau ra

Investigate PostgreSQL incidents using OS tools, profiling tools, logs, system views and query analysis.

## Project

Lab: Build a troubleshooting runbook for slow query, high CPU, high IO, lock wait and replication lag.

## Noi dung nho

- [01-Top-Free](01-Top-Free/)
- [02-DfAndDu-PerfTools](02-DfAndDu-PerfTools/)
- [03-CoreDumps-Grep](03-CoreDumps-Grep/)
- [04-Sed-PgStatStatements](04-Sed-PgStatStatements/)
- [05-PgLocks-EXPLAIN](05-PgLocks-EXPLAIN/)
- [06-EXPLAINANALYZE-ExplainDaliboCom](06-EXPLAINANALYZE-ExplainDaliboCom/)
- [07-PlanRegression-PostIncidentReview](07-PlanRegression-PostIncidentReview/)

## Danh sach bai hoc

### [01-Top-Free](01-Top-Free/)

- [top](01-Top-Free/001 - top.md)
- [sysstat](01-Top-Free/002 - sysstat.md)
- [iotop](01-Top-Free/003 - iotop.md)
- [vmstat](01-Top-Free/004 - vmstat.md)
- [iostat](01-Top-Free/005 - iostat.md)
- [free](01-Top-Free/006 - free.md)

### [02-DfAndDu-PerfTools](02-DfAndDu-PerfTools/)

- [df and du](02-DfAndDu-PerfTools/007 - df and du.md)
- [Network Checks](02-DfAndDu-PerfTools/008 - Network Checks.md)
- [gdb](02-DfAndDu-PerfTools/009 - gdb.md)
- [strace](02-DfAndDu-PerfTools/010 - strace.md)
- [ebpf](02-DfAndDu-PerfTools/011 - ebpf.md)
- [perf-tools](02-DfAndDu-PerfTools/012 - perf-tools.md)

### [03-CoreDumps-Grep](03-CoreDumps-Grep/)

- [Core Dumps](03-CoreDumps-Grep/013 - Core Dumps.md)
- [Profiling Safety](03-CoreDumps-Grep/014 - Profiling Safety.md)
- [pgBadger](03-CoreDumps-Grep/015 - pgBadger.md)
- [pgCluu](03-CoreDumps-Grep/016 - pgCluu.md)
- [awk](03-CoreDumps-Grep/017 - awk.md)
- [grep](03-CoreDumps-Grep/018 - grep.md)

### [04-Sed-PgStatStatements](04-Sed-PgStatStatements/)

- [sed](04-Sed-PgStatStatements/019 - sed.md)
- [Slow Query Logs](04-Sed-PgStatStatements/020 - Slow Query Logs.md)
- [Lock Wait Logs](04-Sed-PgStatStatements/021 - Lock Wait Logs.md)
- [Checkpoint Logs](04-Sed-PgStatStatements/022 - Checkpoint Logs.md)
- [pg_stat_activity](04-Sed-PgStatStatements/023 - pg_stat_activity.md)
- [pg_stat_statements](04-Sed-PgStatStatements/024 - pg_stat_statements.md)

### [05-PgLocks-EXPLAIN](05-PgLocks-EXPLAIN/)

- [pg_locks](05-PgLocks-EXPLAIN/025 - pg_locks.md)
- [pg_stat_database](05-PgLocks-EXPLAIN/026 - pg_stat_database.md)
- [pg_stat_bgwriter](05-PgLocks-EXPLAIN/027 - pg_stat_bgwriter.md)
- [pg_stat_replication](05-PgLocks-EXPLAIN/028 - pg_stat_replication.md)
- [pgcenter](05-PgLocks-EXPLAIN/029 - pgcenter.md)
- [EXPLAIN](05-PgLocks-EXPLAIN/030 - EXPLAIN.md)

### [06-EXPLAINANALYZE-ExplainDaliboCom](06-EXPLAINANALYZE-ExplainDaliboCom/)

- [EXPLAIN ANALYZE](06-EXPLAINANALYZE-ExplainDaliboCom/031 - EXPLAIN ANALYZE.md)
- [Buffers in EXPLAIN](06-EXPLAINANALYZE-ExplainDaliboCom/032 - Buffers in EXPLAIN.md)
- [Depesz](06-EXPLAINANALYZE-ExplainDaliboCom/033 - Depesz.md)
- [PEV2](06-EXPLAINANALYZE-ExplainDaliboCom/034 - PEV2.md)
- [Tensor](06-EXPLAINANALYZE-ExplainDaliboCom/035 - Tensor.md)
- [explain.dalibo.com](06-EXPLAINANALYZE-ExplainDaliboCom/036 - explain.dalibo.com.md)

### [07-PlanRegression-PostIncidentReview](07-PlanRegression-PostIncidentReview/)

- [Plan Regression](07-PlanRegression-PostIncidentReview/037 - Plan Regression.md)
- [USE Method](07-PlanRegression-PostIncidentReview/038 - USE Method.md)
- [RED Method](07-PlanRegression-PostIncidentReview/039 - RED Method.md)
- [Golden Signals](07-PlanRegression-PostIncidentReview/040 - Golden Signals.md)
- [Incident Timeline](07-PlanRegression-PostIncidentReview/041 - Incident Timeline.md)
- [Post-incident Review](07-PlanRegression-PostIncidentReview/042 - Post-incident Review.md)

