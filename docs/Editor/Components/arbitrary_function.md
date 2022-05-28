---
sidebar_position: 5
---

# Arbitrary Function
## Introduction
![Arbitrary Function](/img/editor/components/arbitrary/arbitrary.png)
Mage provides high level modules for solving most common problems but every application requires its own set of business logics to solve their needs. To tackle this, Mage provides a high level code injection mechanism using the `Arbitrary function` module. The module is capable of running node.js (javascript) code and connect to several connected modules at will.

## Technical specification
The arbitrary function module can be treated as a "hook" in the developed microservice and provides a mechanism to inject code at runtime. Along with providing the capability to inject code, Arbitrary function module also solves a few problems to ease the developer's pain.
1. The module connects to iits neighnours automatically at the start and therefore provides a map of `gRPC` connection pool, which can be used for communicating to nearby modules. This map can be used in any method code by calling `service_clients.<service_name>.<method_name>(args...)`. Therefore, the hassle of opening, closing, maintaining connections is completely eliminated and the user can focus on building the business logic.
2. Any npm dependency, if required, can be added as a list of npm dependencies in the dependency list area. Each of these dependencies will be `npm install <dep>` before starting the module.
3. The code added is provided in Javascript in order to make it easy for all developers to quickly develop and scale.

## How To use
The Arbitrary function module, like all the other modules needs to be added to the canvas, have it's connections and parameters defined, and connected to several other services. Once done, the module properties can be modified to add the required logic.

### Step 1: Creating connection
The Arbitrary function module requires user to add connection methods. These are the methods required for specifying any request flow. Additionally, since Arbitrary function module is fully customizable, the user can add the required request and response and these arguments would be made available for use inside the module's javascript code.

### Step 2: Adding inputs and outputs
For every method that we create, we have the capability to add method input and output. These request and response params can be used while defining the code for arbitrary method service, and the module can follow these for service layer contract. In other words, the request and response arguments act like the method interface arguments which can be used to pass information to the arbitrary method module, and return response back from the module.
To provide these arguments, simply expand any connection method and add the desired fields, along with their field types.

### Step 3: Linking dependencies
All the dependent modules which need to be connected should be connected to the output of arbitrary function module. Then, during runtime, the module will allow all of these clients to get automatically connected at its start and the connections can be used by the users by calling `service_clients.<service_name>` inside every function.

For example, if an arbitrary function component (`arb1`) is connected to an SQL module (`user_data`) and ElasticSearch module (`search_db`) and these have the following methods defined:
```
user_data :
1. GetUserData(user string, id int64)(*entity.User)
2. SetUser(user string, id int64, name string)

search_db :
1. SearchUser(user_id string)string
```
Then these methods can be easily accessed inside the code builder's function by calling them as follows:
```
const entity = service_clients.userData.GetUserData(user, id);
service_clients.userData.SetUser(user, id, name);
const searchJSON = service_clients.searchDb.SearchUser(user);
```

### Step 4: Adding node.js logic
To configure any method, check the configuration section in the module drawer.
![Configure methods](/img/editor/components/arbitrary/config.png)
The method configuration contains a list of methods which have already been created. To add custom javascript logic for any method, simply expand the module and add custom code in the development area accordingly.
As explained above, these methods already have `service_clients` already available. The dependencies added in the dependency section can be used by simply adding imports in the code such as:
```
let obj = await import('fs');
let res = fs.ReadFileSync('obj', 'data');
```


## Further Read
The module follows standard nodejs development practices and therefore can help users write pretty-much anything that javascript and node generally support. To make the most use out of the Arbitrary function module, it is important for any developer to understand javascript in detail, and read about how npm works.
