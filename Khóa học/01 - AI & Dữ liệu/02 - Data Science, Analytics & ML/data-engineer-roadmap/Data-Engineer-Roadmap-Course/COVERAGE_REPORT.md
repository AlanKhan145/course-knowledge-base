# Coverage Report

This report maps the generated course back to the scraped roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\data-engineer.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\cdf3f70c-c134-45bd-a945-353c1e6de4fe\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/data-engineer

## Generated Coverage

- Phases: 5
- Modules: 13
- Lessons: 347

## Roadmap Topic Mapping

### Module 01 - Data Engineering Overview

- Phase: 01 - Foundation and Core Skills
- Outcome: Understand the Data Engineer role, the end-to-end data lifecycle and the systems a data platform must support.
- Project: Mini project: Draw an end-to-end data platform diagram from source systems to BI and ML consumers.
- Lesson count: 21

#### Role and Career Context

- What is a Data Engineer?
- Data Engineer Responsibilities
- Data Generation
- Data Storage
- Data Ingestion
- Data Processing
- Data Serving
- Analytics / BI / ML / AI Consumers

#### Data Platform Flow

- Source Systems
- Raw Data
- Clean Data
- Curated Data
- Warehouse Consumers
- Dashboard Consumers
- Machine Learning Consumers

#### Roadmap Strategy

- Six Month Learning Plan
- Project-first Learning
- Must-have Data Engineer Skills
- Should-have Data Engineer Skills
- Nice-to-have Data Engineer Skills
- Portfolio Outcomes

### Module 02 - Programming Foundation

- Phase: 01 - Foundation and Core Skills
- Outcome: Use Python, Git, Linux, networking basics and core data structures to build reliable data tools.
- Project: Mini project: CSV/API -> Python cleanup -> PostgreSQL load with reproducible environment and Git history.
- Lesson count: 54

#### Python Roadmap

- Python Syntax
- Functions
- Classes and Objects
- File Handling
- Exception Handling
- Package Management
- Virtual Environment
- Pandas Basics
- API Requests with requests
- JSON / CSV / Parquet

#### Languages and Data Structures

- Python
- Java
- Scala
- Go
- Array / List
- HashMap / Dictionary
- Set
- Stack / Queue
- Tree Basics
- Graph Basics
- Sorting
- Big-O Notation

#### Git and GitHub

- git init
- git clone
- git add
- git commit
- git push
- git pull
- git branch
- git merge

#### Linux Basics

- Shell Navigation
- cat / grep / find
- chmod / chown
- ps / top
- df / du
- ssh / scp
- crontab

#### Networking Fundamentals

- HTTP / HTTPS
- DNS
- TCP / UDP
- IP Address and Port
- API
- REST
- Authentication
- Firewall Basics

#### Distributed Systems Basics

- Scale Up vs Scale Out
- Replication
- Partitioning
- Fault Tolerance
- Consistency
- Availability
- CAP Theorem
- Leader / Follower
- Consensus Basics

### Module 03 - SQL and Database Fundamentals

- Phase: 02 - Storage, Modeling and Architecture
- Outcome: Query, design and optimize relational databases that serve operational and analytical workloads.
- Project: Mini project: Build a PostgreSQL sales database and write analytical SQL with CTEs and window functions.
- Lesson count: 22

#### SQL Core

- SELECT
- WHERE
- GROUP BY
- HAVING
- JOIN
- Subquery
- CTE
- Window Functions

#### Relational Database Fundamentals

- Index
- Transaction
- ACID
- Primary Key
- Foreign Key
- Constraints
- Query Plan
- Query Optimization

#### Relational Database Tools

- PostgreSQL
- MySQL
- MariaDB
- Amazon Aurora
- Oracle Database
- Microsoft SQL Server

### Module 04 - Data Modeling

- Phase: 02 - Storage, Modeling and Architecture
- Outcome: Model data for OLTP systems, OLAP systems, warehouses, marts and NoSQL stores.
- Project: Mini project: Convert an ecommerce OLTP schema into star schema tables for sales analytics.
- Lesson count: 28

#### Database Fundamentals

- Data Normalization
- Data Modeling Techniques
- OLTP vs OLAP
- CAP Theorem for Databases
- Slowly Changing Dimension
- Horizontal Scaling
- Vertical Scaling

#### Dimensional Modeling

- Fact Table
- Dimension Table
- Star Schema
- Snowflake Schema
- Grain
- Surrogate Key
- Data Mart
- Sales Analytics Model

#### NoSQL Databases

- MongoDB
- Elasticsearch
- Cosmos DB
- CouchDB
- Cassandra
- BigTable
- HBase
- Neo4j
- Neptune
- Redis
- Memcached
- DynamoDB
- Choosing the Right Database

### Module 05 - Data Warehouse and Data Lake

- Phase: 02 - Storage, Modeling and Architecture
- Outcome: Design analytical storage using warehouses, lakes, lakehouses and modern data architecture patterns.
- Project: Mini project: Raw CSV -> Data Lake -> Clean Parquet -> Data Warehouse analytical model.
- Lesson count: 24

#### Data Warehouse

- Data Warehouse
- Warehouse Architecture
- Fact and Dimension Tables
- Google BigQuery
- Snowflake
- Amazon Redshift
- Metrics Layer
- Semantic Model

#### Data Lake

- Data Lake
- Object Storage
- Raw Zone
- Clean Zone
- Curated Zone
- Parquet
- ORC
- Partitioning in Data Lake
- Schema Evolution

#### Lakehouse and Modern Architecture

- Lakehouse Architecture
- Databricks Delta Lake
- Onehouse
- Data Mesh
- Data Fabric
- Data Hub
- Metadata-first Architecture

### Module 06 - Cloud Data Engineering

- Phase: 03 - Cloud, Ingestion and Pipelines
- Outcome: Map data engineering workloads onto AWS, Azure and Google Cloud managed services.
- Project: Mini project: Design one cloud data platform using object storage, managed database, ETL service and warehouse.
- Lesson count: 22

#### Cloud Architecture

- Compute
- Storage
- Database Services
- Networking
- IAM
- Serverless
- Managed Services
- Cost Awareness

#### AWS Data Services

- Amazon EC2
- Amazon S3
- Amazon RDS
- AWS Glue
- Amazon Redshift

#### Azure Data Services

- Azure Virtual Machines
- Azure Blob Storage
- Azure SQL Database
- Azure Data Factory

#### Google Cloud Data Services

- Compute Engine
- Google Cloud Storage
- Cloud SQL
- Dataflow
- BigQuery

### Module 07 - ETL and ELT Pipelines

- Phase: 03 - Cloud, Ingestion and Pipelines
- Outcome: Build batch, streaming, realtime and hybrid ingestion pipelines with validation, scheduling and recovery.
- Project: Mini project: API -> Airflow -> PostgreSQL -> dbt transform -> Dashboard-ready tables.
- Lesson count: 24

#### Ingestion Types

- Batch Ingestion
- Streaming Ingestion
- Realtime Ingestion
- Hybrid Ingestion
- Source Connector
- Sink Connector

#### Pipeline Design

- ETL
- ELT
- Extract
- Transform
- Load
- Data Validation
- Retry Strategy
- Idempotency
- Scheduling
- Pipeline Monitoring
- Pipeline Logging
- Backfill

#### Pipeline Tools

- Apache Airflow
- dbt
- Luigi
- Prefect
- DAG Design
- Data Quality Check

### Module 08 - Big Data Processing

- Phase: 04 - Big Data and Platform Operations
- Outcome: Process large data sets with cluster computing, Hadoop fundamentals and Apache Spark.
- Project: Mini project: Process partitioned Parquet data with Spark SQL and document partition/shuffle behavior.
- Lesson count: 25

#### Cluster Computing

- Cluster Computing
- Distributed File Systems
- Job Scheduling
- Resource Management
- Kubernetes for Compute
- Apache Hadoop YARN

#### Hadoop Ecosystem

- HDFS
- NameNode
- DataNode
- Block Replication
- Fault Tolerance in HDFS
- MapReduce
- YARN

#### Apache Spark

- Apache Spark
- RDD
- DataFrame
- Spark SQL
- Spark Streaming
- Structured Streaming
- Partition in Spark
- Shuffle
- Cache and Persist
- Spark Job / Stage / Task
- Spark Optimization
- Join Strategy

### Module 09 - Streaming and Messaging Systems

- Phase: 04 - Big Data and Platform Operations
- Outcome: Design messaging and streaming systems using Kafka, queues, topics, partitions and consumers.
- Project: Mini project: Kafka Producer -> Kafka Topic -> Spark Streaming -> MongoDB/PostgreSQL sink.
- Lesson count: 23

#### Messaging Concepts

- Message Queue
- Stream
- Async vs Sync Communication
- Message vs Stream
- Producer
- Consumer
- Broker
- Topic
- Partition
- Offset
- Consumer Group

#### Messaging Tools

- Apache Kafka
- RabbitMQ
- AWS SQS
- AWS SNS
- Kafka Topic Design
- Consumer Lag

#### Streaming Reliability

- Idempotent Consumer
- Dead Letter Queue
- Backpressure
- Schema Registry
- Kafka to Data Lake
- Kafka to Warehouse

### Module 10 - Docker, Kubernetes and CI CD

- Phase: 04 - Big Data and Platform Operations
- Outcome: Package, orchestrate and deploy data services and pipelines with Docker, Kubernetes and CI/CD.
- Project: Mini project: Containerize an ingestion app and run it with Docker Compose plus a CI test workflow.
- Lesson count: 27

#### Docker

- Docker Image
- Container
- Dockerfile
- Docker Compose
- Docker Volume
- Docker Network
- Environment Variables

#### Kubernetes

- Pod
- Deployment
- Service
- ConfigMap
- Secret
- Ingress
- Job / CronJob
- Helm Basics
- Google Cloud GKE
- AWS EKS

#### CI CD

- GitHub Actions
- GitLab CI
- CircleCI
- ArgoCD
- Build Pipeline
- Test Pipeline
- Deploy Pipeline
- Staging and Production
- Secret Management
- Rollback

### Module 11 - Monitoring and Testing

- Phase: 05 - Serving, Security and Portfolio
- Outcome: Monitor pipeline health, data freshness and data quality while testing code and end-to-end flows.
- Project: Mini project: Add data quality checks, pipeline metrics and alert rules to one ETL project.
- Lesson count: 24

#### Observability

- Metrics
- Logs
- Traces
- Alerting
- Dashboard
- SLA / SLO / SLI
- Prometheus
- Datadog
- Sentry
- New Relic

#### Data Pipeline Monitoring

- Pipeline Failure Monitoring
- Data Freshness Monitoring
- Data Quality Monitoring
- Lineage Monitoring
- Cost Monitoring
- Backfill Tracking

#### Testing

- Unit Testing
- Integration Testing
- End-to-End Testing
- Functional Testing
- A/B Testing
- Load Testing
- Smoke Testing
- Data Quality Testing

### Module 12 - Security and Data Governance

- Phase: 05 - Serving, Security and Portfolio
- Outcome: Protect data platforms with access control, encryption, masking, governance and compliance practices.
- Project: Mini project: Write a security and governance plan for a data lake and warehouse platform.
- Lesson count: 20

#### Core Security

- Authentication vs Authorization
- Encryption
- Tokenization
- Data Masking
- Data Obfuscation
- Private Data and PII
- IAM Policy
- Secrets Handling

#### Data Governance

- Data Quality
- Data Lineage
- Metadata Management
- Data Interoperability
- Privacy
- Data Catalog
- Access Policy

#### Regulations

- GDPR
- ECPA
- EU AI Act
- Compliance Checklist
- Audit Trail

### Module 13 - Capstone Project Data Platform

- Phase: 05 - Serving, Security and Portfolio
- Outcome: Build a portfolio-grade data platform that connects ingestion, streaming, processing, storage, serving and monitoring.
- Project: Capstone: API + logs -> Kafka -> Spark -> Data Lake -> dbt/Warehouse -> BI dashboard.
- Lesson count: 33

#### Six Month Roadmap

- Month 1 Foundation
- Month 2 Database and Data Modeling
- Month 3 Data Warehouse and Data Lake
- Month 4 ETL and ELT Pipeline
- Month 5 Big Data and Streaming
- Month 6 Cloud DevOps and Governance

#### Capstone Architecture

- API Data Source
- Log Data Source
- Kafka Ingestion Layer
- Spark Processing Layer
- S3 or GCS Data Lake
- dbt Transformation Layer
- Warehouse Serving Layer
- Power BI Dashboard
- Streamlit Dashboard

#### Capstone Deliverables

- Architecture Diagram
- Data Contracts
- Local Docker Compose
- Cloud Deployment Plan
- Monitoring Plan
- Security Plan
- Data Quality Report
- README and Portfolio Story

#### Optimized Learning Order

- Advanced SQL and PostgreSQL
- Data Modeling and Warehouse
- Airflow
- dbt
- Spark Optimization
- Kafka Streaming Advanced
- Cloud Data Services
- Docker and CI CD
- Terraform
- Data Quality Monitoring Governance
