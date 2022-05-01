---
sidebar_position: 4
---

# SQL Module
## Introduction
SQL component is a standalone data sourcing component which is capable of connecting to a SQL data store and fetching data for the user. The SQL component supports configurable and parameterized Read, Write, Update, Delete operations. 

For advance use-cases, the SQL component also supports a Raw-Query functionality which allows users to define a custom query to meet their use case.

## Technical specification
The SQL component provides the ability to connect to a configured SQL data store and fetch data from the source.

The SQL component abstracts the tedious querying and caching process from end users and allows users to get rid of hassles like maintaining connection pools, connection handling (closing and opening correctly), transactions, preventing SQL injection, query caching, etc. and exposes a clean RPC interface from the component.

## How To use
To begin using SQL component, start with creating a connection method, configure the connection method to define its properties and then connecting SQL component further with other applications in order to enhance their capability.
### Step 1: Creating connection
To add any functionality in SQL, first create a method under connections section. The method name will serve as an identifier while defining its behavior and also when connecting SQL with other components.
### Step 2: Configuring endpoints
To configure any endpoint, click on the corresponding method name. This will expand the components' configuration section.
![Configure method](/img//editor/components/sql/method_configure.png)

### Properties and usage
In general, SQL provides certain pre-defined behaviors which users can use to their own benefits. The individual properties have been explained below:
![Input top](/img/editor/components/sql/query_input.png)
1. **Query Type**: Defines whether the request will be of type `Read`, `Insert`, `Update`, `Delete` or `Raw`. While Read, Insert, Update and Delete are self explanatory, choosing `Raw` enables the user to gain complete control on the query by defining a `gorm` based raw query which can be parameterized using the input arguments provided in the `Request` section.
2. **Schema Type**: Defines the table/schema from which the data is being read, modified, persisted or deleted.
3. **Query String**: This section is only available when user chooses `Raw` query type. User can add the query which they wish to parameterize in this section.
4. **Request Section**: Request section contains the arguments which the user provides in the API request. Based on these, the input arguments of the component are decided which then define the behavior of the component during runtime.
![Where and Set](/img/editor/components/sql/where_set_section.png)
    
- **Where Clause**: This is available only when the request type is `Read` or `Update` or `Delete`. The arguments provided are effectively connected to the `where` clause of the SQL query.
- **Set Clause**: This is available only when the request type is `Insert` or `Update`. The arguments effectively go under the `SET` section or the `INSERT VALUES` section of the SQL query. For inserts, any arguments which are not added are treated as null/default value.
- **Raw Query Placeholders**: All input arguments which the raw query requires can be configured under this section.

5. **Response Section**: Response section provides how the data needs to be returned.
![Response](/img/editor/components/sql/response.png)

- **Multi-Return**: Whether the user needs a list of responses or just needs one response from the database.
- **Return Type**: Whether the user needs actual data, or just the count of records in the response.

> The response section is not always applicable and can be left to arbitrary values for certain query types. For Example, the `multi-return` does not hold any value for the `Delete` query type. In future versions, these unused arguments will be removed to provide a cleaner user experience.

## Inputs and Outputs
The inputs and outputs for every method are based on what the user has configured in the configuration section.
- Input arguments are derived from the Input section configured for the endpoint. These will be based on the fields selected/added for the request.
- Output parameters are derived from the response configuration. When choosing multi-return, the response type is a list of data. Otherwise, a single response object is returned. If we choose response type as data, the entire entity for the schema chosen is returned. Instead, if we choose "Count" as the return type, an integer denoting the count of response is returned.

## Configuring Data sources
Every SQL component requires a database to be configured and connected. To configure the database connection arguments appropriately, add the database connection properties and schema in the Infra management section.

Once the infrastructure section is configured appropriately and saved, the database will be available in the data sources drop down under the configuration section for the component.

Similarly, the schemas available for the component are derived from the data source chosen and are automatically populated based on the configuration provided under the infrastructure management page and the data source chosen.

For more details on how to configure data sources, visit the [Infrastructure Management](/docs/docs/Infrastructure%20Management) section.

