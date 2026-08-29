Khóa học: Server-Side Game Developer
Module 1: Tổng quan Server-Side Game Development
Bài 1. Server-side game là gì?
Vai trò của server trong game online/multiplayer
Phân biệt client-side và server-side game development
Server xử lý gì: đăng nhập, matchmaking, room, combat, inventory, leaderboard, chat, persistence
Kiến trúc cơ bản: Client → Gateway/API → Game Server → Database/Cache/Queue
Bài 2. Các loại game server
Turn-based server
Real-time authoritative server
Lobby/matchmaking server
Chat server
World server / zone server
Backend service cho game mobile
Bài 3. Kỹ năng cần có
Network programming
Concurrency/multithreading
Database/cache
Cloud/container
Message queue
Observability/debugging
Security
Module 2: Networking Foundation
Bài 4. IP Protocol
IP là gì?
Datagram construction
IP addressing
Routing
IPv4 vs IPv6
Reliability ở tầng IP
Link capacity
Transaction flow qua mạng
Bài 5. ARP, DNS, DHCP
ARP dùng để ánh xạ IP sang MAC
DNS dùng để phân giải domain
DHCP cấp IP động
Luồng kết nối từ domain game server đến địa chỉ IP
Bài 6. TLS & Security
TLS trong game backend
SSL/TLS handshake cơ bản
Khi nào dùng TLS cho game server
Bảo vệ login, payment, API, account data
Module 3: TCP
Bài 7. TCP Fundamentals
TCP là gì?
Connection-oriented protocol
Reliable transmission
Ordered delivery
Flow control
Congestion control
Bài 8. TCP Segment Structure
Segment structure
Checksum
Max segment size
Window scaling
Timestamp
Selective ACK
Out-of-band data
Bài 9. TCP trong game server
Khi nào dùng TCP trong game?
Dùng cho login, inventory, payment, chat, lobby
Ưu điểm: ổn định, reliable
Nhược điểm: latency, head-of-line blocking
Bài 10. TCP Vulnerability
Denial of Service
Connection hijacking
Max segment size vulnerability
Cách giảm rủi ro trong game backend
Module 4: UDP
Bài 11. UDP Fundamentals
UDP là gì?
Datagram
Packet structure
Checksum
Không đảm bảo reliability
Không đảm bảo ordered delivery
Bài 12. UDP trong real-time game
Vì sao game real-time hay dùng UDP?
Giảm latency
Gửi state update liên tục
Dùng cho movement, position, aim, combat state
Tự xây reliability layer khi cần
Bài 13. UDP Reliability tự xây
Sequence number
ACK/NACK
Snapshot interpolation
Client prediction
Server reconciliation
Packet loss handling
Module 5: TCP vs UDP
Bài 14. So sánh TCP và UDP
Reliable vs unreliable
Ordered vs unordered
Heavy vs lightweight
Packet vs datagram
Streaming vs broadcast
Bài 15. Chọn protocol cho từng hệ thống game
Login: TCP/HTTPS
Chat: TCP/WebSocket
Matchmaking: HTTP/gRPC
Real-time movement: UDP
Leaderboard: REST/gRPC
Telemetry: queue/event streaming
Module 6: Socket Programming
Bài 16. Socket Programming cơ bản
Socket là gì?
Client socket và server socket
Port, address, descriptor
Connection lifecycle
Bài 17. BSD Socket & Winsock
BSD Socket API
Winsock trên Windows
Cross-platform networking
Blocking vs non-blocking socket
Bài 18. Byte Manipulation
Byte order
Endianness
Buffer
Binary protocol
Address conversion
Bài 19. Xây TCP echo server
Tạo server socket
Bind/listen/accept
Receive/send
Close connection
Bài 20. Xây UDP game packet server
Tạo UDP socket
Receive datagram
Parse packet
Broadcast state
Module 7: Programming Languages cho Game Server
Bài 21. C/C++
Hiệu năng cao
Memory management
Dùng cho engine/server low-level
Phù hợp real-time server
Bài 22. C#
.NET server
Async-await
Actor model với Akka.NET
Phù hợp backend service và game server toolchain
Bài 23. Java
JVM ecosystem
Akka
Concurrency
Enterprise backend/game platform
Bài 24. Go
Goroutine
Channel
Network service nhẹ
Phù hợp microservices/game backend
Bài 25. Erlang
Fault tolerance
Actor/concurrent system
Dùng cho hệ thống chat, realtime, telecom-style backend
Bài 26. JavaScript/TypeScript
Node.js backend
WebSocket server
Real-time web game
Matchmaking/API service
Module 8: Serialization & Network Protocol Design
Bài 27. Serialization là gì?
Chuyển object thành data gửi qua network
Text format vs binary format
Schema-based vs schema-less
Bài 28. JSON, XML, YAML, TOML
JSON cho API/game config
XML trong hệ thống legacy
YAML/TOML cho config
Ưu/nhược điểm khi dùng trong game backend
Bài 29. Protobuf
Schema definition
Binary serialization
Backward compatibility
Dùng với gRPC
Phù hợp game backend hiệu năng cao
Bài 30. Thiết kế packet format
Packet header
Message type
Payload
Sequence number
Timestamp
Checksum
Module 9: Programming Techniques
Bài 31. Design Patterns
Singleton
Factory
Strategy
Observer
Command
State pattern trong game logic
Bài 32. Test-Driven Development
Unit test game logic
Integration test API
Load test server
Mock network/database
Bài 33. Dependency Injection
Tách service layer
Dễ test
Dễ thay thế database/cache/queue
Bài 34. Dump Analysis
Crash dump
Memory dump
Thread dump
Debug production issue
Bài 35. Functional Programming
Pure function trong game rule
Immutable state
Event transformation
Giảm bug trong logic phức tạp
Module 10: Multithreading & Concurrency
Bài 36. Threading cơ bản
Process vs thread
Thread lifecycle
Context switching
Race condition
Deadlock
Bài 37. Synchronization
Mutex
Semaphore
Spinlock
Barrier
Condition variable
Thread local storage
Bài 38. Coroutine, Future, Promise, Channel
Coroutine
Future & Promise
Channel
Async task pipeline
Khi nào dùng async thay vì thread
Bài 39. Platform Threading
Windows threading
pthread
Thread pool
Fiber
Sharding workload
Bài 40. Game server concurrency model
One thread per connection
Event loop
Worker pool
Actor model
Sharded world simulation
Module 11: Asynchronous Network I/O
Bài 41. Reactor Pattern
Event loop
Non-blocking I/O
select
poll
epoll
kqueue
WSA Poll
Bài 42. Proactor Pattern
Completion-based I/O
IOCP
io_uring
Registered I/O
Bài 43. Task-Based Concurrency
Task-based programming
Goroutine trong Go
Async-await trong C#
Concurrency trong Java
Thread Building Blocks trong C++
Bài 44. Reactive Model
Reactive programming
OORP
FRP
Synchrony
Determinism
Update process
Module 12: Actor Model
Bài 45. Actor Model là gì?
Actor
Mailbox
Message passing
Isolation
Fault tolerance
Bài 46. Actor model trong game server
Player actor
Room actor
Match actor
Zone actor
Chat actor
Bài 47. Akka và Akka.NET
Akka cho Java/JVM
Akka.NET cho C#
Supervision
Distributed actor
Cluster
Module 13: Database cho Game Backend
Bài 48. Database Fundamentals
Persistent data
Transaction
Index
Query
Consistency
Latency
Bài 49. RDBMS
PostgreSQL
MySQL
MS SQL
Schema design
ACID transaction
Dùng cho account, payment, inventory, orders
Bài 50. NoSQL
MongoDB
DynamoDB
Cassandra
Couchbase
Dùng cho profile, event data, scalable document/key-value data
Bài 51. Key-Value Store
Redis
Memcached
Cache session
Leaderboard
Rate limit
Matchmaking queue
Bài 52. ORM & DAL
ORM là gì?
Data Access Layer
Repository pattern
Migration
Query optimization
Module 14: RPC, REST và API Design
Bài 53. REST API
Resource-based API
HTTP method
Status code
Versioning
Pagination
Authentication
Bài 54. gRPC
Protobuf schema
Unary call
Streaming
Service-to-service communication
Khi nào dùng gRPC trong game backend
Bài 55. RPC vs REST
RPC phù hợp internal service
REST phù hợp public API/mobile client
gRPC phù hợp microservices hiệu năng cao
REST dễ debug hơn
Bài 56. API cho game backend
Auth API
Player profile API
Inventory API
Matchmaking API
Leaderboard API
Store/payment API
Module 15: Message Queues & Event Streaming
Bài 57. Message Queue là gì?
Producer
Consumer
Topic/queue
Retry
Dead letter queue
At-least-once delivery
Bài 58. RabbitMQ
Queue-based messaging
Routing
Worker processing
Dùng cho job async, email, notification
Bài 59. Apache Kafka
Event streaming
Topic partition
Consumer group
High-throughput logging
Telemetry, analytics, player event pipeline
Bài 60. Event-driven game backend
Player action event
Match result event
Economy transaction event
Anti-cheat event
Analytics event
Module 16: Cloud Infrastructure
Bài 61. Cloud cho game server
Vì sao game backend cần cloud?
Region
Latency
Auto scaling
Load balancing
High availability
Bài 62. AWS
EC2
ECS/EKS
RDS
ElastiCache
S3
CloudWatch
Bài 63. GCP
Compute Engine
GKE
Cloud SQL
Memorystore
Pub/Sub
Cloud Monitoring
Bài 64. Azure
VM
AKS
Azure SQL
Redis Cache
Service Bus
Monitor
Bài 65. Serverless
Function-based backend
Dùng cho webhook, scheduled job, event processing
Giới hạn với real-time game server
Module 17: Containerization & Deployment
Bài 66. Docker
Docker image
Container
Dockerfile
Build/run/push image
Environment variables
Bài 67. Docker Compose
Chạy local stack
Game server + database + Redis + queue
Network trong compose
Volume
Bài 68. Kubernetes
Pod
Deployment
Service
Ingress
ConfigMap/Secret
Horizontal Pod Autoscaler
Bài 69. Deploy game server
Blue-green deployment
Rolling update
Health check
Graceful shutdown
Session draining
Module 18: Data Clustering & Analytics
Bài 70. Data clustering trong game
Gom nhóm người chơi
Phân tích hành vi
Retention cohort
Matchmaking segmentation
Bài 71. Apache Spark
Batch processing
Distributed data processing
Player telemetry
Economy analytics
Fraud/cheat signal processing
Module 19: AI/ML cho Game Backend
Bài 72. AI/ML use cases
Matchmaking thông minh
Dynamic difficulty
Anti-cheat detection
Churn prediction
Recommendation system
Bài 73. Cloud ML
Amazon ML
Azure ML
ML pipeline
Model serving
Online/offline inference
Bài 74. Deep Learning
TensorFlow
PyTorch
Training vs inference
Model deployment trong backend game
Module 20: Capstone Projects
Project 1: TCP Lobby Server
Đăng nhập giả lập
Tạo room
Join/leave room
Chat trong room
Broadcast message
Project 2: UDP Real-Time Movement Server
Client gửi input
Server authoritative position
Tick loop
Snapshot broadcast
Packet loss simulation
Project 3: Matchmaking Service
REST/gRPC API
Queue người chơi
Ghép trận theo rank/region
Redis cache
Kafka event log
Project 4: Game Backend Microservices
Auth service
Player profile service
Inventory service
Match service
Leaderboard service
PostgreSQL + Redis + Kafka
Docker Compose deployment
Project 5: Cloud-Native Game Backend
Containerize services
Deploy lên Kubernetes
Health check
Autoscaling
Logging/monitoring
Load test