---
sidebar_position: 1
---

# Build
Once the have created the final configuration in the editor page and has saved the state using the **"Save"** button, the user can proceed to the Builds page to create a new build for the service.
Every build is effectively a step where mage generates code for the service based on the configurations so far. As we create a new build, we provide a tag name which queues a job to the mage's build framework. Mage constantly looks for newly created builds and generates the code for this build accordingly. Once the build is created and code is ready, Mage creates a Merge request in the configured repository using the credentials provided.
Currently, mage is only capable of supporting repositories which are hosted on Gitlab (either self hosted or public gitlab).
