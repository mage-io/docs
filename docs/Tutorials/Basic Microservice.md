---
sidebar_position: 1
---

# Basic Microservice

## Step by step guide
The guide below allows any user to create a new sample microservice in less than 3 minutes!

### Basic Setup
1. Login to [Amyst](https://console.amyst.co).

![login](/img/tutorials/basic_microservice/step_1.png)

2. Create a new Microservice.

![login](/img/tutorials/basic_microservice/step_2.png)

Once new service is created, Amyst will automatically take to the editor page.

![editor_page](/img/tutorials/basic_microservice/step_3.png)

### Adding Components
1. Add components required for building your microservice, for ex. ([gRPC](/docs/docs/Editor/Components/gRPC%20Connector) and [SQL](/docs/docs/Editor/Components/SQL))

<p align="center">
<img src="/docs/img/tutorials/basic_microservice/step_4.png" style={{height:"200px"}} />&nbsp;&nbsp;&nbsp;&nbsp;
<img src="/docs/img/tutorials/basic_microservice/step_5.png" style={{height:"200px"}} />
</p>

2. Create links between the components, such as gRPC's output to SQL's input.
<p align="center"><img src="/docs/img/tutorials/basic_microservice/step_6.png" style={{height:"300px"}} /></p>

### Infrastructure Management

Some components such as SQL require configurations like username, password, table schema, etc.

1. Configure your SQL database by navigating to [infrastructure management](/docs/docs/Infrastructure%20Management) page.

<p align="center">
<img src="/docs/img/tutorials/basic_microservice/step_7.png" style={{height:"200px"}} /> &nbsp;&nbsp;&nbsp;&nbsp;

<img src="/docs/img/tutorials/basic_microservice/step_8.png" style={{height:"200px"}} />

<img src="/docs/img/tutorials/basic_microservice/step_9.png" style={{height:"300px"}} />
</p>

2. Click on configure to create table Schema and add Metadata.

![schema_create](/img/tutorials/basic_microservice/step_10.png)

<p align="center"><img src="/docs/img/tutorials/basic_microservice/step_11.png" style={{height:"400px"}} /></p>

3. After completing schema and metadata creation, Save the infrastructure by clicking on save button on top.

<p align="center"><img src="/docs/img/tutorials/basic_microservice/step_12.png" style={{width:"200px"}} /></p>

### Enhance Components

Navigate back to editor page to finish the final service setup.

<p align="center"><img src="/docs/img/tutorials/basic_microservice/step_13.png" style={{width:"400px"}} /></p>


#### Enhance SQL component
1. Create the required methods for SQL component by double clicking the component.

<p align="center">

<img src="/docs/img/tutorials/basic_microservice/step_14.png" style={{height:"300px"}} />

<img src="/docs/img/tutorials/basic_microservice/step_15.png" style={{height:"300px"}} />

<img src="/docs/img/tutorials/basic_microservice/step_17.png" style={{width:"600px"}} />

</p>

2. Define the behavior of the methods created for SQL by clicking on the configure button.

![configure_endpoint_sql](/img/tutorials/basic_microservice/step_20.png)

![read_config_complete](/img/tutorials/basic_microservice/step_21.png)

#### Enhance gRPC component

1. Similar to SQL, configure gRPC component by creating a method.

<p align="center">

<img src="/docs/img/tutorials/basic_microservice/step_22.png" style={{height:"300px"}} />

<img src="/docs/img/tutorials/basic_microservice/step_23.png" style={{height:"300px"}} />

<img src="/docs/img/tutorials/basic_microservice/step_24.png" style={{width:"600px"}} />

</p>

2. Provide connection configuration for gRPC by clicking Configure.

![read_config_complete](/img/tutorials/basic_microservice/step_26.png)

![read_config_complete](/img/tutorials/basic_microservice/step_27.png)

### Create Build

1. Once service building is complete, click on Save button on top right.
2. Navigate to builds page from the sidebar.
3. In the builds page, configure the build target appropriately and create a new build.

![read_config_complete](/img/tutorials/basic_microservice/step_28.png)

### Final Result
Once the build is complete and your service is ready, the code is generated and delivered in your own repository. The code is generated in Go, which allows the services to run with high efficiency and throughput. The services are gRPC compatible and therefore, can be integrated with any language (ex: Java, Python, JavaScript, etc.).

![overview_build](/img/tutorials/basic_microservice/step_29.png)

![generated_code](/img/tutorials/basic_microservice/step_30.png)


<p align="center"><h1>Thank you!</h1></p>


