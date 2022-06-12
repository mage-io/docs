---
sidebar_position: 1
---

# Orchestrator
## Introduction
![Orchestrator connection](/img/editor/components/orchestrator/components.png)
Orchestrator module allows users to enhance API endpoints by providing a common enhancement layer on top of them. When we develop API endpoints, we often require a group of APIs to have similar authentication, autorization, monitoring, etc. Using orchestrator, users can configure any module and enhance its capabilities by linking them with multiple common components called middlewares.

## Technical specification
At the heart of orchestrator lies an API orchestration engine which performs the following actions:
1. Reads the request sent by the user to orchestrator.
2. Checks any assigned request middlewares. If any middlewares are assigned to the endpoint, orchestrator forwards the request to all of these middlewares.
3. Once middleware requests are complete and no middleware has returned an error, orchestrator sends the request to the data module connected to it (for example SQL, Redis or even any other orchestrator module).
4. When the data service returns response, orchestrator checks for configured response middlewares and sends a call with the request and response (and errors, if any) to the response middleware.
5. Finally, orchestrator returns the response to end user.

## How To use
After adding the orchestrator component to canvas, we can start using orchestrator component by linking it to other modules and configuring the endpoints appropriately.

### Step 1: Creating connection
For any connection method that orchestrator needs to wrap (let's say an SQL's GetUser method), orchestrator needs to itself have another connection method. To configure this method, double click on the orchestrator component and create a new connection.

### Step 2: Linking modules
Orchestrator only provides a mechansim for orchestrating API requests. As a result, it needs to have the functionality somehow provided by external API sources. To do this, orchestrator needs to be linked to other data sources and middlewares.
1. Firstly, add all the middlewares and data sources to the canvas which need to be linked to orchestrator.
2. To link a request middleware, create a link from orchestrator's input to middleware's input. This will automatically let orchestrator understand that the linked middleware needs to be used as a request middleware.
3. To link a response middleware, create a link from orchestrator's output to middleware's input. Doing this will allow orchestrator to understand that the middleware needs to be used for response.
> <b>Note</b>: A middleware can serve as both request and response middleware. If required, we can even connect a single middleware block on both request and response sides, and orchestrator will start sending two requests to the same middleware, one when it receives the rqeuest and one when it returns the response.
4. Link all the data components which will serve as the data source for input requests.

### Step 3: Configuring endpoints
Just like other modules, we need to provide the endpoints which the module will expose and map these endpoints to their corresponding middlewares and data sources.

To configure the component, double click on the orchestrator component to open the configuration section.

![Configure methods](/img/editor/components/orchestrator/configure_methods.png)
1. Under the connections section, add all the methods which the component will expose. Orchestrator does not allow users to edit the endpoint arguments since these are derived from the connected data component automatically.

2. Under the configuration section, double click on the configure (edit) button to open the configuration section.

    - For every method created, there will be an expandable section shown. Expand the relevant endpoint and configure the sections accordingly.
    - For middlewares, we can enable/disable the request and response middlewares individually.
    - User additionally needs to map the method by selecting the desired data source and its method from the dropdowns.
    - Once all the endpoints are configured, the user can click on "Save" button to save the configuration to cache.

## Inputs and Outputs
Orchestrator inherits all connection properties (i.e. all input and output properties) from its connected data component method. Therefore, every method will follow the same request/response arguments as its connected data source.

For example, if There is a Redis component which has the following method defined:
```
GetData(userName string, roll integer) (*entity.User)
```
and the orchestrator has a method named `GetUserData` which is configured to source its data from `Redis` component's `GetData` method, the request/response for `GetUserData` will look like:
```
GetUserData(userName string, roll integer) (*entity.User)
```

## Further Read
The orchestrator component is by far one of the most versatile component since it allows asynchoronous messaging to various middlewares and data sources. Additionally, every orchestrator is also treated as a data source in Amyst, and therefore it can be stacked together in order to create a clean, modular architecture.

To understand how other data components and middlewares work, visit their respective documentation and try them on Amyst UI.
