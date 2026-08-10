# Module 05 - Configuring PostgreSQL

**Hoc phan:** 02 - Installation Configuration and Security

## Ket qua dau ra

Configure PostgreSQL through postgresql.conf, extensions, logging, WAL, vacuum, planner and checkpoints.

## Project

Lab: Tune a local PostgreSQL instance for logging, memory, autovacuum and checkpoint visibility.

## Noi dung nho

- [01-PostgresqlConf-PgSettings](01-PostgresqlConf-PgSettings/)
- [02-ConfigurationFileIncludes-SharedBuffers](02-ConfigurationFileIncludes-SharedBuffers/)
- [03-WorkMem-Vacuums](03-WorkMem-Vacuums/)
- [04-Autovacuum-BackgroundWriter](04-Autovacuum-BackgroundWriter/)
- [05-LoggingCollector-PgStatStatements](05-LoggingCollector-PgStatStatements/)
- [06-ConnectionLimits-TemporaryFilesLogging](06-ConnectionLimits-TemporaryFilesLogging/)

## Danh sach bai hoc

### [01-PostgresqlConf-PgSettings](01-PostgresqlConf-PgSettings/)

- [postgresql.conf](01-PostgresqlConf-PgSettings/001 - postgresql.conf.md)
- [ALTER SYSTEM](01-PostgresqlConf-PgSettings/002 - ALTER SYSTEM.md)
- [Reload vs Restart](01-PostgresqlConf-PgSettings/003 - Reload vs Restart.md)
- [SHOW Settings](01-PostgresqlConf-PgSettings/004 - SHOW Settings.md)
- [pg_settings](01-PostgresqlConf-PgSettings/005 - pg_settings.md)

### [02-ConfigurationFileIncludes-SharedBuffers](02-ConfigurationFileIncludes-SharedBuffers/)

- [Configuration File Includes](02-ConfigurationFileIncludes-SharedBuffers/006 - Configuration File Includes.md)
- [Adding Extra Extensions](02-ConfigurationFileIncludes-SharedBuffers/007 - Adding Extra Extensions.md)
- [Reporting Logging and Statistics](02-ConfigurationFileIncludes-SharedBuffers/008 - Reporting Logging and Statistics.md)
- [Resource Usage](02-ConfigurationFileIncludes-SharedBuffers/009 - Resource Usage.md)
- [shared_buffers](02-ConfigurationFileIncludes-SharedBuffers/010 - shared_buffers.md)

### [03-WorkMem-Vacuums](03-WorkMem-Vacuums/)

- [work_mem](03-WorkMem-Vacuums/011 - work_mem.md)
- [maintenance_work_mem](03-WorkMem-Vacuums/012 - maintenance_work_mem.md)
- [effective_cache_size](03-WorkMem-Vacuums/013 - effective_cache_size.md)
- [Write-ahead Log Configuration](03-WorkMem-Vacuums/014 - Write-ahead Log Configuration.md)
- [Vacuums](03-WorkMem-Vacuums/015 - Vacuums.md)

### [04-Autovacuum-BackgroundWriter](04-Autovacuum-BackgroundWriter/)

- [Autovacuum](04-Autovacuum-BackgroundWriter/016 - Autovacuum.md)
- [Replication Settings](04-Autovacuum-BackgroundWriter/017 - Replication Settings.md)
- [Query Planner Settings](04-Autovacuum-BackgroundWriter/018 - Query Planner Settings.md)
- [Checkpoints](04-Autovacuum-BackgroundWriter/019 - Checkpoints.md)
- [Background Writer](04-Autovacuum-BackgroundWriter/020 - Background Writer.md)

### [05-LoggingCollector-PgStatStatements](05-LoggingCollector-PgStatStatements/)

- [Logging Collector](05-LoggingCollector-PgStatStatements/021 - Logging Collector.md)
- [log_min_duration_statement](05-LoggingCollector-PgStatStatements/022 - log_min_duration_statement.md)
- [log_line_prefix](05-LoggingCollector-PgStatStatements/023 - log_line_prefix.md)
- [track_io_timing](05-LoggingCollector-PgStatStatements/024 - track_io_timing.md)
- [pg_stat_statements Extension](05-LoggingCollector-PgStatStatements/025 - pg_stat_statements Extension.md)

### [06-ConnectionLimits-TemporaryFilesLogging](06-ConnectionLimits-TemporaryFilesLogging/)

- [Connection Limits](06-ConnectionLimits-TemporaryFilesLogging/026 - Connection Limits.md)
- [Timeout Settings](06-ConnectionLimits-TemporaryFilesLogging/027 - Timeout Settings.md)
- [Temporary Files Logging](06-ConnectionLimits-TemporaryFilesLogging/028 - Temporary Files Logging.md)

