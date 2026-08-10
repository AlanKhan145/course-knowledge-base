# Module 08 - Replication Pooling and High Availability

**Hoc phan:** 03 - Backup HA Monitoring and Automation

## Ket qua dau ra

Operate replication, connection pooling, HA clusters, Kubernetes deployment and service discovery.

## Project

Lab: Design a HA PostgreSQL architecture with streaming replication, PgBouncer and failover notes.

## Noi dung nho

- [01-StreamingReplication-SynchronousReplication](01-StreamingReplication-SynchronousReplication/)
- [02-AsynchronousReplication-SessionPooling](02-AsynchronousReplication-SessionPooling/)
- [03-TransactionPooling-SimpleStatefulSetup](03-TransactionPooling-SimpleStatefulSetup/)
- [04-HelmOperators-PersistentVolumes](04-HelmOperators-PersistentVolumes/)
- [05-PodDisruptionBudget-Etcd](05-PodDisruptionBudget-Etcd/)
- [06-VirtualIP-HealthChecks](06-VirtualIP-HealthChecks/)

## Danh sach bai hoc

### [01-StreamingReplication-SynchronousReplication](01-StreamingReplication-SynchronousReplication/)

- [Streaming Replication](01-StreamingReplication-SynchronousReplication/001 - Streaming Replication.md)
- [Logical Replication](01-StreamingReplication-SynchronousReplication/002 - Logical Replication.md)
- [Replication Slots](01-StreamingReplication-SynchronousReplication/003 - Replication Slots.md)
- [WAL Sender and Receiver](01-StreamingReplication-SynchronousReplication/004 - WAL Sender and Receiver.md)
- [Primary and Standby](01-StreamingReplication-SynchronousReplication/005 - Primary and Standby.md)
- [Synchronous Replication](01-StreamingReplication-SynchronousReplication/006 - Synchronous Replication.md)

### [02-AsynchronousReplication-SessionPooling](02-AsynchronousReplication-SessionPooling/)

- [Asynchronous Replication](02-AsynchronousReplication-SessionPooling/007 - Asynchronous Replication.md)
- [Replication Lag](02-AsynchronousReplication-SessionPooling/008 - Replication Lag.md)
- [Failover Basics](02-AsynchronousReplication-SessionPooling/009 - Failover Basics.md)
- [Switchover Basics](02-AsynchronousReplication-SessionPooling/010 - Switchover Basics.md)
- [PgBouncer](02-AsynchronousReplication-SessionPooling/011 - PgBouncer.md)
- [Session Pooling](02-AsynchronousReplication-SessionPooling/012 - Session Pooling.md)

### [03-TransactionPooling-SimpleStatefulSetup](03-TransactionPooling-SimpleStatefulSetup/)

- [Transaction Pooling](03-TransactionPooling-SimpleStatefulSetup/013 - Transaction Pooling.md)
- [Statement Pooling](03-TransactionPooling-SimpleStatefulSetup/014 - Statement Pooling.md)
- [PgBouncer Alternatives](03-TransactionPooling-SimpleStatefulSetup/015 - PgBouncer Alternatives.md)
- [Connection Storms](03-TransactionPooling-SimpleStatefulSetup/016 - Connection Storms.md)
- [Pool Sizing](03-TransactionPooling-SimpleStatefulSetup/017 - Pool Sizing.md)
- [Simple Stateful Setup](03-TransactionPooling-SimpleStatefulSetup/018 - Simple Stateful Setup.md)

### [04-HelmOperators-PersistentVolumes](04-HelmOperators-PersistentVolumes/)

- [Helm Operators](04-HelmOperators-PersistentVolumes/019 - Helm Operators.md)
- [Patroni](04-HelmOperators-PersistentVolumes/020 - Patroni.md)
- [Patroni Alternatives](04-HelmOperators-PersistentVolumes/021 - Patroni Alternatives.md)
- [Kubernetes Deployment](04-HelmOperators-PersistentVolumes/022 - Kubernetes Deployment.md)
- [StatefulSet](04-HelmOperators-PersistentVolumes/023 - StatefulSet.md)
- [Persistent Volumes](04-HelmOperators-PersistentVolumes/024 - Persistent Volumes.md)

### [05-PodDisruptionBudget-Etcd](05-PodDisruptionBudget-Etcd/)

- [Pod Disruption Budget](05-PodDisruptionBudget-Etcd/025 - Pod Disruption Budget.md)
- [Disaster Recovery Topology](05-PodDisruptionBudget-Etcd/026 - Disaster Recovery Topology.md)
- [HAProxy](05-PodDisruptionBudget-Etcd/027 - HAProxy.md)
- [Consul](05-PodDisruptionBudget-Etcd/028 - Consul.md)
- [KeepAlived](05-PodDisruptionBudget-Etcd/029 - KeepAlived.md)
- [Etcd](05-PodDisruptionBudget-Etcd/030 - Etcd.md)

### [06-VirtualIP-HealthChecks](06-VirtualIP-HealthChecks/)

- [Virtual IP](06-VirtualIP-HealthChecks/031 - Virtual IP.md)
- [Service Discovery](06-VirtualIP-HealthChecks/032 - Service Discovery.md)
- [Read Write Split](06-VirtualIP-HealthChecks/033 - Read Write Split.md)
- [Health Checks](06-VirtualIP-HealthChecks/034 - Health Checks.md)

