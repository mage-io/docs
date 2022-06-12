---
sidebar_position: 1
---
# Microservices
**Microservices** are a defined as a group of functionalities which are capable of performing "similar" actions.
In the world of Amyst, Microservices are a group of components connected to each other and capable of exposing a method to end user for further usage.

![Select Microservice](/img/editor/microservices/microservices.png) 

To begin using a microservice, the user can select a microservice from the dropdown on top of Editor page, or select the "New Service" button to create a new service. All service-based configurations stay isolated for every microservice. Therefore, if a person is working on two microservices in parallel, the two services can be developed simultaneously without having any issues.

All the builds in Amyst are also created per microservice, and therefore these are technically isolated from each other in all senses.

## Creating microservice
![New Microservice](/img/editor/microservices/new.png) 

To create a new microservice, click on "New Service" button in microservices section. A microservice can be identified using it's common name which must be unique amongst all microservices i.e. no two microservices in a user's space can have the same name.

## Deleting microservice
![Delete button](/img/editor/microservices/delete_button.png) 

Deleting a microservice is a destructive process i.e. all the saved data is deleted as we delete a microservice and this cannot be undone. Therefore, a user must be very careful about deleting a microservice.

![Delete button](/img/editor/microservices/delete.png) 

To delete a microservice, click on the "X" button next to the microservice and confirm on the pop-up. All the information related to a microservice's builds, component configuration, etc. gets deleted when we delete the microservice.
