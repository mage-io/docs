---
sidebar_position: 1
---

# Builds
![Builds Page](/img/builds/page.png)
The Builds page lets the user create a code build for the configured application. The build section is where the configuration done so far gets converted into actual, production-ready code.
To begin with Build creation, there are three prerequisites from the user:
1. The Service is selected from the dropdown Menu.
2. The configuration which the user wants to build is already **Saved** using the Save button on the editor page. 
NOTE: If the user fails to save the configuration, Amyst will not generate any build for the latest changes.
3. The user has defined the Builds configurations (in the side panel) appropriately. Amyst uses this configuration to identify the repository to create merge request, and also to authenticate itself while pushing code to the repository.

Once configured, the user can click on the **New** button to create a new build. Provide a meaningful "Tag" for the build in order to identify the merge request appropriately in the repository, and then submit the request.

Every build is effectively a step where Amyst generates code for the service based on the configurations so far. As we create a new build, we provide a tag name which queues a job to the Amyst's build framework. Amyst constantly looks for newly created builds and generates the code for this build accordingly. Once the build is created and code is ready, Amyst creates a Merge request in the configured repository using the credentials provided.

## Build Stages
Every build progress through multiple stages of build creation and the status is always highlighted on the Amyst dashboard corresponding to the build.
1. **TRIGGERED** - Every build starts with a status as "Triggered" which highlights that the build has been successfully registered by Amyst and is queued for build creation.
2. **RUNNING** - A Running status means that the build is now enqueued by one of the code builders and is being currently processed.
3. **SUCCESS** - A success status shows up at the end of the build when the build creation step is complete and a build is successfully created. Users can expect a Merge request with the "tag" name used before being created in the configured repository once the build status shows as Success.
4. **FAILURE** - A failure status means that the build failed due to some misconfiguration of the application. If the status shows as failure, check your build configurations again and make sure you haven't missed any database configuration and applications are actually saved in the editor section as per expectation and documentation.

## Build configuration
Every build requires the user to configure certain parameters which provides Amyst with useful information to connect with your repository provider, dockerhub user, etc. The build configuration can be accessed on the builds page by expanding the builds config section on the right.
Amyst currently has following restrictions with respect to Amyst and its configurations currently:
1. Amyst only supports gitlab as its repository provider.
2. Amyst supports dockerhub as the default container registry provider.
3. User needs to create a repository in gitlab (self hosted or cloud) and provide appropriate access to the gitlab user.
4. User needs to create a personal access token for the user on gitlab. [How to create token?](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)

Following properties can be configured for Amyst builds:
1. `token_predecessor`: This is the name for the personal access token created. Example: `gitlab-user-ci-token`.
2. `gitlab_ci_token`: The value of token secret used to access gitlab. Example: `glpat-<TOKEN_VALUE>`.
3. `dockerhub_username`: Username for dockerhub where images are pushed. This is required for automated deployements and can be set to "NA" if automated deployements are not needed.
4. `file_storage_access_token`: If using S3 in any of the components, file_storage_access_token is the access token for accessing the S3 bucket. Can be left as `NA` if not required.
4. `repository_path`: The path to repository where code is expected to be pushed. Example: `mage-repo/example`.
5. `repository_provider`: The repo host base path for the gitlab repos. For cloud deployments, the value is `gitlab.com`. The final repo URL constructed is basically `https://<repository_provider>/<repository_path>`.
6. `repository_project_id`: The Project ID of the repository configured above. This can be found on the top of every gitlab project's page.
## Restrictions
Currently, Amyst is only capable of supporting repositories which are hosted on Gitlab (either self hosted or public gitlab).
