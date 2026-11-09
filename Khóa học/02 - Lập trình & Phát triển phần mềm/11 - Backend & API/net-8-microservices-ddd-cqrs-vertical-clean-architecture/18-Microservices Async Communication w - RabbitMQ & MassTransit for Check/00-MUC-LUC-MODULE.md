# 18. Microservices Async Communication w/ RabbitMQ & MassTransit for Checkout Order

**Khóa học:** .NET 8 Microservices: DDD, CQRS, Vertical/Clean Architecture
**Số mục nội dung:** 36

| STT | Bài học / hoạt động | Loại |
|---:|---|---|
| 001 | [Introduction - Microservices Async Communication w/ RabbitMQ & MassTransit](UD255-S18-L001-Introduction.md) | `VIDEO_LECTURE` |
| 002 | [Microservices Asynchronous Communication](UD255-S18-L002-Microservices.md) | `VIDEO_LECTURE` |
| 003 | [Benefits of Asynchronous Communication](UD255-S18-L003-Benefits-of.md) | `VIDEO_LECTURE` |
| 004 | [Challenges of Asynchronous Communication](UD255-S18-L004-Challenges-of.md) | `VIDEO_LECTURE` |
| 005 | [Fan-Out Publish/Subscribe Messaging Pattern](UD255-S18-L005-Fan-Out-Publish.md) | `VIDEO_LECTURE` |
| 006 | [Event-Driven Microservices Architecture](UD255-S18-L006-Event-Driven.md) | `VIDEO_LECTURE` |
| 007 | [What is RabbitMQ and Main Components of RabbitMQ (Producer, Queue, Consumer..)](UD255-S18-L007-What-is-RabbitMQ.md) | `VIDEO_LECTURE` |
| 008 | [RabbitMQ Exchange Types: Direct, Fanout, Topic, and Headers](UD255-S18-L008-RabbitMQ-Exchange.md) | `VIDEO_LECTURE` |
| 009 | [Domain Analysis of Async Communication between Basket and Ordering Microservices](UD255-S18-L009-Domain-Analysis-of.md) | `VIDEO_LECTURE` |
| 010 | [Technical Analysis of Async Communication between Basket and Ordering ms](UD255-S18-L010-Technical-Analysis.md) | `VIDEO_LECTURE` |
| 011 | [Steps of Developing Async Communication between Basket and Ordering Microservice](UD255-S18-L011-Steps-of.md) | `VIDEO_LECTURE` |
| 012 | [Create BuildingBlocks.Messaging Shared Class Library for Common Async connection](UD255-S18-L012-Create.md) | `VIDEO_LECTURE` |
| 013 | [Develop BasketCheckout Event in BuildingBlocks.Messaging Shared Class Library](UD255-S18-L013-Develop.md) | `VIDEO_LECTURE` |
| 014 | [Develop MassTransit Extention Methods to Register RabbitMQ connection into DI](UD255-S18-L014-Develop.md) | `VIDEO_LECTURE` |
| 015 | [Develop MassTransit Extention Methods to Register RabbitMQ connection into DI -2](UD255-S18-L015-Develop.md) | `VIDEO_LECTURE` |
| 016 | [Publish BasketCheckout Event from Basket Microservices](UD255-S18-L016-Publish.md) | `VIDEO_LECTURE` |
| 017 | [Develop BasketCheckout Feature Folder to Expose POST Endpoint and Publish Event](UD255-S18-L017-Develop.md) | `VIDEO_LECTURE` |
| 018 | [Develop Basket Checkout Handler Method to Publish event to RabbitMQ-MassTransit](UD255-S18-L018-Develop-Basket.md) | `VIDEO_LECTURE` |
| 019 | [Dual-write Problem and Outbox Pattern](UD255-S18-L019-Dual-write-Problem.md) | `VIDEO_LECTURE` |
| 020 | [Ordering Microservices to Subscribe-Consume BasketCheckout event from RabbitMQ](UD255-S18-L020-Ordering.md) | `VIDEO_LECTURE` |
| 021 | [Register MassTransit RabbitMQ packages into Ordering.Application DI](UD255-S18-L021-Register.md) | `VIDEO_LECTURE` |
| 022 | [OrderCreated Integration Event: How Domain Event leads to Integration Event](UD255-S18-L022-OrderCreated.md) | `VIDEO_LECTURE` |
| 023 | [Develop Basket Checkout Event Consumer integration event handler class](UD255-S18-L023-Develop-Basket.md) | `VIDEO_LECTURE` |
| 024 | [Develop Basket Checkout Event Consumer integration event handler class - 2](UD255-S18-L024-Develop-Basket.md) | `VIDEO_LECTURE` |
| 025 | [Saga Pattern for Distributed Transactions](UD255-S18-L025-Saga-Pattern-for.md) | `VIDEO_LECTURE` |
| 026 | [Publish OrderCreated Integration event for Order Fullfiment microservices](UD255-S18-L026-Publish.md) | `VIDEO_LECTURE` |
| 027 | [Aspnet Feature Management Develop Feature Flag for OrderCreated Event](UD255-S18-L027-Aspnet-Feature.md) | `VIDEO_LECTURE` |
| 028 | [Setup RabbitMQ for Async Communication using Docker-compose file](UD255-S18-L028-Setup-RabbitMQ-for.md) | `VIDEO_LECTURE` |
| 029 | [Run Docker-Compose on Visual Studio to setup RabbitMQ on Docker](UD255-S18-L029-Run-Docker-Compose.md) | `VIDEO_LECTURE` |
| 030 | [TEST- Publish BasketCheckout Event in Basket.API Microservices](UD255-S18-L030-TEST-Publish.md) | `VIDEO_LECTURE` |
| 031 | [TEST- Subscribe/Consume BasketCheckout Event in Ordering.API Microservices](UD255-S18-L031-TEST-Subscribe.md) | `VIDEO_LECTURE` |
| 032 | [TEST- Set OrderFullfilment feature = false. Re-Test Publish - Subscribe/Consume](UD255-S18-L032-TEST-Set.md) | `VIDEO_LECTURE` |
| 033 | [Containerize and Configure Basket, Ordering and RabbitMQ Containers](UD255-S18-L033-Containerize-and.md) | `VIDEO_LECTURE` |
| 034 | [Containerize and Orchestrate Ordering microservices with Docker & Docker-Compose](UD255-S18-L034-Containerize-and.md) | `VIDEO_LECTURE` |
| 035 | [TEST- Docker-Compose Microservices - Publish/Subscribe BasketCheckout Event](UD255-S18-L035-TEST-Docker.md) | `VIDEO_LECTURE` |
| 036 | [Decoupling the Checkout: An Asynchronous Architecture Review](UD255-S18-L036-Decoupling-the.md) | `ROLE_PLAY` |
