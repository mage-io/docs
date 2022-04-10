---
sidebar_position: 1
---

# Builds
![Builds Page](/img/builds/page.png)
The Builds page lets the user create a code build for the configured application. The build section is where the configuration done so far gets converted into actual, production-ready code.
To begin with Build creation, there are three prerequisites from the user:
1. The Service is selected from the dropdown Menu.
2. The configuration which the user wants to build is already **Saved** using the Save button on the editor page. 
NOTE: If the user fails to save the configuration, mage will not generate any build for the latest changes.
3. The user has defined the Builds configurations (in the side panel) appropriately. Mage uses this configuration to identify the repository to create merge request, and also to authenticate itself while pushing code to the repository.

Once configured, the user can click on the **New** button to create a new build. Provide a meaningful "Tag" for the build in order to identify the merge request appropriately in the repository, and then submit the request.

Every build is effectively a step where mage generates code for the service based on the configurations so far. As we create a new build, we provide a tag name which queues a job to the mage's build framework. Mage constantly looks for newly created builds and generates the code for this build accordingly. Once the build is created and code is ready, Mage creates a Merge request in the configured repository using the credentials provided.

## Build Stages
Every build progress through multiple stages of build creation and the status is always highlighted on the mage dashboard corresponding to the build.
1. **TRIGGERED** - Every build starts with a status as "Triggered" which highlights that the build has been successfully registered by Mage and is queued for build creation.
2. **RUNNING** - A Running status means that the build is now enqueued by one of the code builders and is being currently processed.
3. **SUCCESS** - A success status shows up at the end of the build when the build creation step is complete and a build is successfully created. Users can expect a Merge request with the "tag" name used before being created in the configured repository once the build status shows as Success.
4. **FAILURE** - A failure status means that the build failed due to some misconfiguration of the application. If the status shows as failure, check your build configurations again and make sure you haven't missed any database configuration and applications are actually saved in the editor section as per expectation and documentation.

## Restrictions
Currently, mage is only capable of supporting repositories which are hosted on Gitlab (either self hosted or public gitlab).
