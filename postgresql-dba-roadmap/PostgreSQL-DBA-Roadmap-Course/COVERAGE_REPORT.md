# Coverage Report

This report maps the generated course back to the scraped PostgreSQL DBA roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\postgresql-dba.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\a825e6d3-8e4d-413e-bfb1-711edcdf8246\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/postgresql-dba

## Generated Coverage

- Phases: 5
- Modules: 15
- Lessons: 391

## Roadmap Topic Mapping

### Module 01 - Introduction to PostgreSQL DBA

- Phase: 01 - RDBMS Foundations and SQL
- Outcome: Understand what PostgreSQL is, how it compares with other database systems and what a modern DBA owns.
- Project: Mini project: Write a DBA responsibility map for one PostgreSQL-backed application.
- Lesson count: 14

#### Introduction

- What are Relational Databases?
- RDBMS Benefits
- RDBMS Limitations
- PostgreSQL vs Other RDBMS
- PostgreSQL vs NoSQL Databases
- PostgreSQL DBA Role
- Modern DBA Responsibilities
- Production Database Risk
- DBA Learning Lab Setup

#### Roadmap Context

- MongoDB Roadmap
- Backend Roadmap
- DevOps Roadmap
- PostgreSQL Community
- DBA Career Portfolio

### Module 02 - Basic RDBMS Concepts

- Phase: 01 - RDBMS Foundations and SQL
- Outcome: Master the object model, relational model and core database concepts that PostgreSQL operations depend on.
- Project: Mini project: Model a small inventory database and document objects, relations and constraints.
- Lesson count: 26

#### Object Model

- Queries
- Data Types
- Rows
- Columns
- Tables
- Schemas
- Databases
- Objects and Ownership

#### Relational Model

- Domains
- Attributes
- Tuples
- Relations
- Constraints
- NULL
- Primary Keys
- Foreign Keys
- Unique Constraints
- Check Constraints

#### High-Level Database Concepts

- ACID
- MVCC
- Transactions
- Write-ahead Log
- Query Processing
- Isolation Levels
- Locks
- Deadlocks

### Module 03 - Installation and Setup

- Phase: 02 - Installation Configuration and Security
- Outcome: Install PostgreSQL locally or in the cloud, connect with psql and manage server processes safely.
- Project: Lab: Run PostgreSQL with Docker and a package manager, then connect using psql and verify service state.
- Lesson count: 22

#### Installation Options

- Using Docker
- Package Managers
- Source Installation Overview
- Deployment in Cloud
- Data Directory
- PostgreSQL Port
- Environment Variables
- Initial Database Cluster

#### psql and Client Access

- Connect using psql
- Connection String
- psql Meta Commands
- psql Variables
- psql Output Formatting
- Client Authentication Failure
- Database User vs OS User

#### Managing Postgres

- Using systemd
- Using pg_ctl
- Using pg_ctlcluster
- Start Stop Restart Reload
- PostgreSQL Logs Location
- PostgreSQL Service Health Check
- Safe Shutdown

### Module 04 - Learn SQL

- Phase: 01 - RDBMS Foundations and SQL
- Outcome: Write SQL for schema design, data modification, analysis, import/export and advanced query patterns.
- Project: Lab: Build an ecommerce schema, load sample data with COPY and answer reporting questions using advanced SQL.
- Lesson count: 37

#### DDL Queries

- CREATE SCHEMA
- CREATE TABLE
- ALTER TABLE
- DROP TABLE
- PostgreSQL Data Types
- Constraints in DDL
- Indexes in DDL
- Schema Ownership

#### DML Queries

- SELECT
- INSERT
- UPDATE
- DELETE
- Filtering Data
- Ordering Data
- Joining Tables
- Modifying Data Safely
- RETURNING Clause
- UPSERT with ON CONFLICT

#### Import Export

- Using COPY
- COPY FROM
- COPY TO
- CSV Import
- CSV Export
- Bulk Load Staging Table
- Data Load Validation

#### Advanced SQL Topics

- Transactions in SQL
- Subqueries
- Grouping
- CTE
- Recursive CTE
- Lateral Join
- Set Operations
- Aggregate Functions
- Window Functions
- PL/pgSQL
- Procedures and Functions
- Triggers

### Module 05 - Configuring PostgreSQL

- Phase: 02 - Installation Configuration and Security
- Outcome: Configure PostgreSQL through postgresql.conf, extensions, logging, WAL, vacuum, planner and checkpoints.
- Project: Lab: Tune a local PostgreSQL instance for logging, memory, autovacuum and checkpoint visibility.
- Lesson count: 28

#### PostgreSQL Configuration

- postgresql.conf
- ALTER SYSTEM
- Reload vs Restart
- SHOW Settings
- pg_settings
- Configuration File Includes
- Adding Extra Extensions
- Reporting Logging and Statistics

#### Core Config Areas

- Resource Usage
- shared_buffers
- work_mem
- maintenance_work_mem
- effective_cache_size
- Write-ahead Log Configuration
- Vacuums
- Autovacuum
- Replication Settings
- Query Planner Settings
- Checkpoints
- Background Writer

#### Operational Configuration

- Logging Collector
- log_min_duration_statement
- log_line_prefix
- track_io_timing
- pg_stat_statements Extension
- Connection Limits
- Timeout Settings
- Temporary Files Logging

### Module 06 - Security

- Phase: 02 - Installation Configuration and Security
- Outcome: Secure PostgreSQL with roles, privileges, authentication, SSL, row-level security and OS-level controls.
- Project: Lab: Create least-privilege roles, configure pg_hba.conf rules and add RLS to a tenant table.
- Lesson count: 26

#### Privileges

- Object Privileges
- GRANT
- REVOKE
- Default Privileges
- Schema Privileges
- Table Privileges
- Sequence Privileges
- Function Privileges
- Privilege Audit

#### Authentication Models

- Roles
- Users and Groups
- pg_hba.conf
- Authentication Methods
- Password Encryption
- SCRAM-SHA-256
- SSL Settings
- Client Certificates
- Network Access Rules

#### Advanced Security

- Row-Level Security
- RLS Policies
- Security Definer Functions
- Data Masking Concepts
- SELinux
- Secrets Management
- Backup Encryption
- Security Incident Checklist

### Module 07 - Backup Recovery and Validation

- Phase: 03 - Backup HA Monitoring and Automation
- Outcome: Design, run and validate logical and physical backup/restore strategies for PostgreSQL.
- Project: Lab: Back up and restore a database using pg_dump/pg_restore plus a base backup strategy document.
- Lesson count: 24

#### Built-in Backup Tools

- pg_dump
- pg_dumpall
- pg_restore
- pg_basebackup
- Logical Backup
- Physical Backup
- Point-in-Time Recovery
- Archive Mode
- Restore Drill

#### Third-party Backup Tools

- Barman
- WAL-G
- pgBackRest
- pg_probackup
- check_pgbackrest
- Backup Retention
- Backup Compression
- Backup Encryption

#### Validation

- Backup Validation Procedures
- Restore Test Schedule
- RPO
- RTO
- Recovery Runbook
- Backup Monitoring
- Backup Failure Alerting

### Module 08 - Replication Pooling and High Availability

- Phase: 03 - Backup HA Monitoring and Automation
- Outcome: Operate replication, connection pooling, HA clusters, Kubernetes deployment and service discovery.
- Project: Lab: Design a HA PostgreSQL architecture with streaming replication, PgBouncer and failover notes.
- Lesson count: 34

#### Replication

- Streaming Replication
- Logical Replication
- Replication Slots
- WAL Sender and Receiver
- Primary and Standby
- Synchronous Replication
- Asynchronous Replication
- Replication Lag
- Failover Basics
- Switchover Basics

#### Connection Pooling

- PgBouncer
- Session Pooling
- Transaction Pooling
- Statement Pooling
- PgBouncer Alternatives
- Connection Storms
- Pool Sizing

#### Cluster Management

- Simple Stateful Setup
- Helm Operators
- Patroni
- Patroni Alternatives
- Kubernetes Deployment
- StatefulSet
- Persistent Volumes
- Pod Disruption Budget
- Disaster Recovery Topology

#### Load Balancing and Discovery

- HAProxy
- Consul
- KeepAlived
- Etcd
- Virtual IP
- Service Discovery
- Read Write Split
- Health Checks

### Module 09 - Monitoring Capacity and Automation

- Phase: 03 - Backup HA Monitoring and Automation
- Outcome: Monitor PostgreSQL health, plan capacity and automate repeatable DBA operations.
- Project: Lab: Build a monitoring checklist with key PostgreSQL metrics, capacity signals and alert thresholds.
- Lesson count: 26

#### Monitoring Tools

- Prometheus
- Zabbix
- check_pgactivity
- temBoard
- check_pgbackrest
- pg_stat_activity Monitoring
- pg_stat_statements Monitoring
- Alert Routing

#### Capacity Planning

- Resource Usage
- Provisioning
- Capacity Planning
- CPU Capacity
- Memory Capacity
- Disk Capacity
- IOPS Planning
- Connection Capacity
- Growth Forecasting

#### Learn to Automate

- Shell Scripts
- Any Programming Language
- Cron Jobs
- Runbooks as Code
- Ansible
- Salt
- Puppet
- Chef
- Idempotent DBA Tasks

### Module 10 - Application Skills and Data Patterns

- Phase: 04 - Internals Tuning and Application Patterns
- Outcome: Support application teams with migrations, data loading, partitioning, sharding, normalization and queue patterns.
- Project: Lab: Review a migration and schema design for operational risk, locks, rollback and performance.
- Lesson count: 19

#### Migrations

- Practical Migration Patterns
- Migration Antipatterns
- Migration Related Tools
- Zero-downtime Migration
- Backward Compatible Schema Changes
- Lock-aware DDL
- Migration Rollback Plan

#### Data and Processing

- Bulk Loading
- Processing Data
- Data Partitioning
- Range Partitioning
- List Partitioning
- Hash Partitioning
- Sharding Patterns
- Normalization
- Normal Forms
- Queues
- Patterns and Antipatterns
- PgQ

### Module 11 - PostgreSQL Internals

- Phase: 04 - Internals Tuning and Application Patterns
- Outcome: Understand PostgreSQL internals enough to reason about vacuum, memory, storage, locks and system catalogs.
- Project: Lab: Create an internals notebook explaining a query from client connection to storage access.
- Lesson count: 22

#### Low-Level Internals

- Processes and Memory Architecture
- Postmaster Process
- Backend Process
- Shared Memory
- Background Processes
- Vacuum Processing
- Buffer Management
- Lock Management
- Physical Storage and File Layout
- System Catalog
- TOAST Storage
- Visibility Map
- Free Space Map

#### Transaction Internals

- Transaction IDs
- Snapshots
- Tuple Visibility
- WAL Records
- Commit Log
- Autovacuum Internals
- Bloat
- Freeze
- Wraparound Risk

### Module 12 - Fine-Grained Tuning

- Phase: 04 - Internals Tuning and Application Patterns
- Outcome: Tune PostgreSQL settings, storage parameters and workloads for OLTP, OLAP and HTAP environments.
- Project: Lab: Compare OLTP and OLAP tuning profiles and justify each setting change.
- Lesson count: 24

#### Fine-Grained Settings

- Per-User Settings
- Per-Database Settings
- Storage Parameters
- Table Fillfactor
- Index Fillfactor
- Autovacuum Per Table
- Workload-Dependent Tuning

#### Workload Tuning

- OLTP
- OLAP
- HTAP
- Connection-heavy Workload
- Write-heavy Workload
- Read-heavy Workload
- Batch Workload
- Mixed Workload

#### Planner and Maintenance Tuning

- ANALYZE
- VACUUM
- VACUUM FULL
- REINDEX
- Planner Statistics
- default_statistics_target
- effective_io_concurrency
- random_page_cost
- parallel_workers

### Module 13 - Troubleshooting Techniques

- Phase: 05 - Troubleshooting Optimization and Portfolio
- Outcome: Investigate PostgreSQL incidents using OS tools, profiling tools, logs, system views and query analysis.
- Project: Lab: Build a troubleshooting runbook for slow query, high CPU, high IO, lock wait and replication lag.
- Lesson count: 42

#### Operating System Tools

- top
- sysstat
- iotop
- vmstat
- iostat
- free
- df and du
- Network Checks

#### Profiling Tools

- gdb
- strace
- ebpf
- perf-tools
- Core Dumps
- Profiling Safety

#### Log Analysis

- pgBadger
- pgCluu
- awk
- grep
- sed
- Slow Query Logs
- Lock Wait Logs
- Checkpoint Logs

#### PostgreSQL System Views and Tools

- pg_stat_activity
- pg_stat_statements
- pg_locks
- pg_stat_database
- pg_stat_bgwriter
- pg_stat_replication
- pgcenter

#### Query Analysis

- EXPLAIN
- EXPLAIN ANALYZE
- Buffers in EXPLAIN
- Depesz
- PEV2
- Tensor
- explain.dalibo.com
- Plan Regression

#### Techniques

- USE Method
- RED Method
- Golden Signals
- Incident Timeline
- Post-incident Review

### Module 14 - SQL Optimization Techniques

- Phase: 05 - Troubleshooting Optimization and Portfolio
- Outcome: Optimize schema, queries and indexes using design patterns, anti-patterns and PostgreSQL index types.
- Project: Lab: Optimize a slow reporting query using EXPLAIN, indexes and query rewrite notes.
- Lesson count: 22

#### Design Patterns and Antipatterns

- Schema Design Patterns
- Schema Design Antipatterns
- SQL Query Patterns
- SQL Query Antipatterns
- N+1 Query Pattern
- Unbounded Query
- Implicit Cast Problems
- Function on Indexed Column
- Missing WHERE Clause
- Over-indexing

#### Indexes and Use Cases

- B-Tree
- GiST
- Hash
- SP-GiST
- GIN
- BRIN
- Partial Index
- Expression Index
- Covering Index
- Multi-column Index
- Index Selectivity
- Index Maintenance Cost

### Module 15 - Community Contribution and DBA Capstone

- Phase: 05 - Troubleshooting Optimization and Portfolio
- Outcome: Complete a DBA portfolio and learn how to participate in PostgreSQL community development.
- Project: Capstone: Build a PostgreSQL production operations runbook with labs for setup, security, backup, HA, monitoring and tuning.
- Lesson count: 25

#### Get Involved in Development

- Mailing Lists
- Reviewing Patches
- Writing Patches
- Reading PostgreSQL Documentation
- Following Release Notes
- Testing Beta Versions

#### 10 Phase Learning Plan

- Phase 1 RDBMS SQL Basics
- Phase 2 Installation psql Docker Service Management
- Phase 3 Advanced SQL
- Phase 4 Configuration WAL Vacuum Planner Checkpoints
- Phase 5 Security Roles Privileges pg_hba SSL RLS
- Phase 6 Backup Restore Replication Pooling
- Phase 7 Monitoring Troubleshooting Query Analysis
- Phase 8 HA Cluster Kubernetes Load Balancing
- Phase 9 Internals Tuning Workload Optimization
- Phase 10 SQL Optimization Indexes Contribution

#### DBA Portfolio Deliverables

- Docker PostgreSQL Lab
- SQL Fundamentals Lab
- Security Lab
- Backup Restore Lab
- Replication HA Design
- Monitoring Dashboard Checklist
- Troubleshooting Runbook
- Query Optimization Case Study
- Production Readiness Checklist
