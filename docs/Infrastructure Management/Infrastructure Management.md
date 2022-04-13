---
sidebar_position: 1
---

# Infrastructure Management
![Page](/img/infra/page.png)
A typical Mage application requires connecting to several infrastructure components like SQL, MongoDB, Kubernetes, AWS S3, etc. For this purpose, it is important for the application to have certain credentials configured in order to fetch the data in an appropriate way. To facilitate the management of this configuration, the application uses Infrastructure management section to manage the entire application's connections.

For example, when we add an S3 module to the canvas editor page, the S3 module configuration requires us to add a Data Source which will help the application understand items like bucket id, password, etc. and would be useful in connecting to the infrastructure component. Similarly, SQL might require a connection URL and database schema. All of these are independent of the service we are configuring, and are common across the platform.

## Usage
To begin with configuring an infrastructure component **Click navbar icon (top right)** > **Infrastructure Management**.
To configure a component, click on "Add New" button and add the appropriate component type. Once you click on save, an infra component placeholder gets created. Now, click on **Configure** button to configure the component further.

## Configuration
For most of the data sources, the configuration is pretty straight-forward i.e. asking for basic application credentials like URL, password, etc. A few notable ones are applications like SQL, which allow us to also configure the Database schema. We can configure these parameters as per the needs and then click on Save button.
![Page](/img/infra/schema_management.png)
Once the user is satisfied with the infrastructure changes, they can click on Save button in the title bar which allows Mage to save Infrastructure configuration. Alternately, if the user decides to revert to previously saved state, they can do so by clicking on the Revert button located next to the Save button.

**NOTE**: Only saved configurations are available in other application pages, and therefore in order to use infrastructure configurations in other sections like editor, it is important to save the infrastrcture configuration before proceeding.
