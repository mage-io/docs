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

## Common Behaviors
Since components are building blocks for the application, they behave in similar fashion but are capable of performing different actions and can be configured differently.

### Adding components to canvas
For adding a component to the canvas, a user can select the component from the left panel. In the name dialog box, we can define any identifier for the component which must be unique across all the services created so far.

Once added, the component becomes available in the microservice and is ready for further use.

### Connecting components
While the components themselves provide a lot of functionality individually, the core capability of Mage comes from connecting these components together and enhancing their capabilities.
For this purpose, every component is capable of doing one or both of these items:
1. Accepting input and returning response bfor any request.
2. Generating another request to other components based on the information received in input.

For example, the gRPC component is responsible for reading user input, and therefore doesn't have any Mage input connection. Meanwhile, the SQL module currently only supports Reading/Writing data to database, and therefore doesn't have any outgoing connection.

For connection purposes and routing requests appropriately, mage mages use of "Connections" section from the [configuration section](#configuring-a-component). These connections are modelled as gRPC methods in the generated code and allows the modules generated to communicate amongst themselves with ease.
### Configuring a component
All components can be configured separately in order to define their behaviors. For example, SQL might need confiurations for whether the request is Read/Write/Update/Delete whereas we might need to define the order of lookup in look-aside cache. In order to provide these configurations, a user can double-click on the module added to canvas and use the side bar to configure these components.

The sidebar shows two sections:
1. **Connections** - These are common for all components and show the input/output which can be expected from the component.
2. **Configuration** - These are component-specific configurations which are used for defining the selected component's behavior.
### Removing a component
To Remove a component, simply double click and open the sidebar. At the bottom of the sidebar, a user can find a button "Remove" which allows the user to remove the component from canvas.
When a component gets removed, all of it's connected configurations and its neighbouring configurations also get removed.
## Further Instructions
To take a deeper dive into what these individual components are capable of doing, do check the document for specific modules, or by clicking one of the links below:
- Network modules
    - [Orchestrator](./Orchestrator)
    - [gRPC](./gRPC%20Connector)
    - [HTTP](./HTTP%20Connector)
- Storage Modules
    - [MongoDB](./MongoDB)
    - [SQL](./SQL)
    - [File Storage (S3)](./File%20Storage)
    - [Elastic Search](./Elastic%20Search)
    - [Redis](./Redis)
- Strategies
    - [Look Aside cache](./Look%20Aside%20Cache)
- Message Queue
    - Kafka (Coming Soon...)
- Middlewares
    - Logging (Coming Soon...)
    - Rate Limiting (Coming Soon...)
    - [Monitoring](./Monitoring)
