---
sidebar_position: 6
---

# Look Aside Cache
## Introduction
![Overview](/img/editor/components/look_aside_cache/overview.png)
Look-Aside cache module, as the name suggests, is a strategy module that enables the user to enhance a group of API endpoints by automatically sourcing data from a layered look-aside cache. 

Look aside caches are extremely useful when we have a read-heavy application which can have difficulty in supporting requests from one single database and require a cache layer to servce data more efficiently (for ex: using a combination of `Redis` and `SQL`).

## Technical specification
Generally, a look aside cache (LAC) combines two data sources (like `Redis` and `SQL`) to fetch the data. LACs are deployed to speed up the load times for services by combining a fast but limited (and generally temporary) data storage technology with a more resilient but slow read service like SQL.

Amyst's Look aside cache takes it one step further by providing a layered cache module for the services. The Look aside cache then loops through all the data sources one by one and fetch data from the first layer that returns the data.

## How To use
After adding the Look-aside component to canvas, we can start using it by linking other data modules to the output of the Look aside cache component.

### Step 1: Creating connection
![Overview](/img/editor/components/look_aside_cache/configure.png)
For any connection method that look-aside cache needs to wrap (let's say an SQL's GetUser method), Look-aside cache needs to itself have another connection method created. To configure this method, double click on the look-aside component and create a new connection.

### Step 2: Linking modules
Once all the methods for look aside are created, one can simply link all the data sources which would be needed for look-aside cache to confirm (i.e. all data sources for all the endpoints created).

### Step 3: Configuring endpoints
To configure the component, double click on the look-aside component to open the configuration section.

1. If you haven't added the connection yet, follow [Step 1](#step-1-creating-connection).

2. Under the configuration section, double click on the Method properties (edit) button to open the configuration section.
![Configure methods](/img/editor/components/look_aside_cache/configure_method.png)

- For every method created, there will be an expandable section shown. Expand the relevant endpoint and configure the sections accordingly.
- Select the data source and their corresponding method in order for each and every component.
    
> The order of choosing these components is important since the first method is supposed to be called first. For a typical application, we generally would want the fasted (but limited) data source to be the first data source, followed by the slower ones.


## Inputs and Outputs
Look aside cache inherits all connection properties (i.e. all input and output properties) from its connected data component methods. Therefore, every method will follow the same request/response arguments as its connected data source.

Since thera are multiple Data sources and methods configured for every method of Look-aside component, the Look-aside cache component will only source the data from the last data source in the list of data sources.

For example, if there are two data sources connected to Look-aside cache: One component called `userCache` which is a `Redis` module and another one is `userPersistence` which is an `SQL` module.
The methods for both of these are defined as below:

1. **userCache**: `GetPopularUser(userName string, roll integer) (string)`
2. **userPersistence**: `GetDataRaw(userName string, roll integer) (entity.User)`

and the look-aside cache has a method named `GetUserData` which is configured to source its data from both of these components, the look aside cache will inherit it's request and response parameters based on the `userPersistence` module and the the method will have following signature:
```
GetUserData(userName string, roll integer) (*entity.User)
```
## Further Read
Look aside cache is a very common industry pattern for implementing services. To further read more about how look aside caches can be used, refer to the following:

- [VMWare Blog](https://tanzu.vmware.com/content/blog/an-introduction-to-look-aside-vs-inline-caching-patterns#:~:text=In%20the%20look%2Daside%20caching,code%20to%20the%20cache%20servers)
- [Spring official](https://docs.spring.io/spring-boot-data-geode-build/1.1.x/reference/html5/guides/caching-look-aside.html)
- [Microsoft Docs](https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside)

## Limitations
Amyst's look aside component is currently unable to persist data back to the lower layers i.e. the responsibility to write data back to cache currently lies with the user.

While this would be resolved in upcoming features, look aside cache is currently supported in it's entirety for only read purpose and does not perform any write operation. If you need the functionality soon, do reach out to us via Discord.

Additionally, Amyst also allows only the components which have the same request/response method arguments, or use a string based request/response arguments (like Redis' response). For other modules, we need to transform the request/response to make use of Look aside cache. however, this can be done easily using the [`Arbitrary Function`](#further-read) component which allows us to write our own logic.
