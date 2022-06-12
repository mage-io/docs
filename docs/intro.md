---
sidebar_position: 1
---

# Introduction
## What is Mage?
**Mage** is a low code programming platform developed by Code4Me Technologies Pvt. Ltd.  Truly magical, Mage enables software developers to build their applications at blazing speeds. Historically, backend development has been one of the most time-consuming and difficult part of software engineering. Any endpoint which we develop typically requires:
1. Some Data Transport layer such as HTTP, gRPC, etc.
2. A way to perform various middleware actions such as authentication, request/response logging, rate limiting, etc. before passing to backend.
3. Using one or more data sources (like SQL, Redis, MongoDB, ElasticSearch, etc.) to fetch data for the user.
4. Apply some sort of data manipulation strategy such as using redis as a look-aside cache, combining data from different data sources, etc.
5. Finally return data to the user.

All the above-mentioned steps are expected to be with:
- Low latency
- Horizontally Scalable
- Containerized (using technologies like docker)
- Free of bugs
- Simple to understand

**Mage allows it’s users to do ALL of this with a low-code UI-based approach!**
With simple changes using the UI, the users of mage are able to create a full-fledged microservice-based application that follows all the above-mentioned items. Additionally, Mage allows you to always own your code and delivers the “magic” of backend code in the user's **own repository**!

*Sounds fascinating and a little far-fetched? We thought the same when we developed it but it’s actually possible.*

## Who can use Mage?
- **Hobbyist Software Engineers** who are looking for tools that help them create a backend application quickly can make use of mage to develop their application with effectively no cost. We have tried and tested various examples in which a full-fledged scalable backend application could be created in less than 10 minutes! 
- **Organizations** that are constantly looking to innovate and churn out their software at a fast pace can use mage to develop their applications in a more scalable and robust manner. Often, the organizations have a concern about not being able to “own” the code. Mage lets go of that worry since we deliver the generated code right in your own git repository.
- **Software Architects** who are looking to create a system design can now do it using Mage, which gives them a beautiful system diagram and also generates code for the design created. Isn’t that cool?
- **Engineering Teams** that are short of engineers can utilize the power of Mage to develop certain portions of their application with Mage. As we bring more features to the platform, the requirement for software engineers to actively develop redundant code with decrease further.
- **Individual contributors** who are looking to quickly develop an application without going through the hassles of setting up a microservice, developing data connectors, adding cache layers, etc.

When we use Mage, we can let go of the responsibility of writing down redundant backend code and can only focus on gluing the business logic with the APIs that Mage develops.

## Getting Started
### Website
Mage's website can be accessed using the portal [console.amyst.co](https://console.amyst.co).
### Login 
Mage currently supports **login with Google**. Mage does not persist any personal information on our end except your name, email, and profile photo - all of which are used to just identify the user logging in so that we can provide you your content.
Once the user completes the login with Google flow, he/she is navigated straight to the editor page where the user can start building the application.

### Application Screens
Mage is primarily divided into three sections :
1. **Editor Section**: This is the section where a user can create the system design for the service and configure it as per requirements.
2. **Infrastructure Management Section**: This section allows the user to create configurations for various infrastructure components used in the application such as Databases, AWS credentials, Kubernetes configurations, scaling configurations, etc.
3. **Builds Section**: This section is responsible for allowing the users to view past builds and generate new builds for the saved microservice configuration. With every completed build, mage pushes a Merge request to the configured repository.

### Infrastructure Management
The infrastructure management section allows the end user to configure database connections, setup credentials for various infrastructure components and to also define slow-changing items such as Database Schema, auto-scaling options, etc for the various components being used in the service.

### Further Information
To deep dive into how mage works visit each and every section's page individually by navigating using the sidebar (on left).
