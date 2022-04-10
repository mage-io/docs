---
sidebar_position: 1
---

# Components
A component is the smallest unit of logical code that a service can effectively use. Every component has a single type of responsibility. The components section is divided into five sections, each having their own set of components which can be used in mage.
- **Network** - These are the components which are used for reading user input. There are two ways in which a user can read input from end user - gRPC based input and http based input. For every service, we can have just one http network component and one gRPC component. These modules serve as the “entry point” for the application.
- **Storage** - Every service most probably need to have a data store from which it can read and write data. This is exactly what Storage components provide. The storage components are specially curated to connect with various data sources such as MongoDB, SQL, Redis, File Storage (S3), etc. The components can be used in isolation, or they can be combined with strategies like Look-Aside Cache.
- **Strategies** - There are some well known “design patterns” in the software Industry which users often use to make their applications more scalable. For example, a user might want to have faster data retrieval for which they’ll expect to read data from a partial cache like redis and if no data is found, they’ll want to switch to primary database like SQL. This strategy is very common and is known as “Look Aside Cache”. With mage’s strategies, we can connect such components together and we should be able to provide this integration seamlessly.
- **Message Queue** - Many a times, users need to connect to a message broker such as Kafka, SQS, etc. for sending messages asynchronously. This is provided by Mage in different flavors using the message Queue functionality.
- **Middlewares** - We often feel the need to apply common logic such as monitoring, logging, authentication, authorization, etc. for several services. For this reason, we have a separate section called Middleware which can be clubbed with the Orchestrator module to provide all the common functionalities for a microservice.

To take a deeper dive into what these individual components are capable of doing, do check the document for specific modules, or by clicking one of the links below:
- Network modules
    - Orchestrator
    - gRPC
    - HTTP
- Storage Modules
    - MongoDB
    - SQL
    - File Storage (S3)
    - Elastic Search
    - Redis
- Strategies
    - Look Aside cache
- Message Queue
    - Kafka
- Middlewares
    - Logging
    - Monitoring
