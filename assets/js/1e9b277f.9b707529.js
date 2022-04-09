"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9555],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3457:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),r=["components"],s={sidebar_position:1},l="Editor Section",c={unversionedId:"Editor/editor-page",id:"Editor/editor-page",title:"Editor Section",description:"Introduction",source:"@site/docs/Editor/editor-page.md",sourceDirName:"Editor",slug:"/Editor/editor-page",permalink:"/docs/Editor/editor-page",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Editor/editor-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/Editor/Components/categories"},next:{title:"Create a Page",permalink:"/docs/Infra Management/create-a-page"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Who can use Mage?",id:"who-can-use-mage",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Website",id:"website",level:3},{value:"Login",id:"login",level:3},{value:"Application Screens",id:"application-screens",level:3},{value:"Editor Section",id:"editor-section-1",level:3},{value:"Microservices section",id:"microservices-section",level:4},{value:"Components",id:"components",level:4},{value:"Infrastructure Management",id:"infrastructure-management",level:3},{value:"Build",id:"build",level:3},{value:"Further Information",id:"further-information",level:3}],p={toc:d};function h(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"editor-section"},"Editor Section"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mage")," is a low code programming platform developed by Code4Me Technologies Pvt. Ltd.  Truly magical, Mage enables software developers to build their applications at blazing speeds. Historically, backend development has been one of the most time-consuming and difficult part of software engineering. Any endpoint which we develop typically requires:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Some Data Transport layer such as HTTP, gRPC, etc."),(0,i.kt)("li",{parentName:"ol"},"A way to perform various middleware actions such as authentication, request/response logging, rate limiting, etc. before passing to backend."),(0,i.kt)("li",{parentName:"ol"},"Using one or more data sources (like SQL, Redis, MongoDB, ElasticSearch, etc.) to fetch data for the user."),(0,i.kt)("li",{parentName:"ol"},"Apply some sort of data manipulation strategy such as using redis as a look-aside cache, combining data from different data sources, etc."),(0,i.kt)("li",{parentName:"ol"},"Finally return data to the user.")),(0,i.kt)("p",null,"All the above-mentioned steps are expected to be with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low latency"),(0,i.kt)("li",{parentName:"ul"},"Horizontally Scalable"),(0,i.kt)("li",{parentName:"ul"},"Containerized (using technologies like docker)"),(0,i.kt)("li",{parentName:"ul"},"Free of bugs"),(0,i.kt)("li",{parentName:"ul"},"Simple to understand")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mage allows it\u2019s users to do ALL of this with a low-code UI-based approach!"),"\nWith simple changes using the UI, the users of mage are able to create a full-fledged microservice-based application that follows all the above-mentioned items. Additionally, Mage allows you to always own your code and delivers the \u201cmagic\u201d of backend code in the user's ",(0,i.kt)("strong",{parentName:"p"},"own repository"),"!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Sounds fascinating and a little far-fetched? We thought the same when we developed it but it\u2019s actually possible.")),(0,i.kt)("h2",{id:"who-can-use-mage"},"Who can use Mage?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hobbyist Software Engineers")," who are looking for tools that help them create a backend application quickly can make use of mage to develop their application with effectively no cost. We have tried and tested various examples in which a full-fledged scalable backend application could be created in less than 10 minutes! "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organizations")," that are constantly looking to innovate and churn out their software at a fast pace can use mage to develop their applications in a more scalable and robust manner. Often, the organizations have a concern about not being able to \u201cown\u201d the code. Mage lets go of that worry since we deliver the generated code right in your own git repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Software Architects")," who are looking to create a system design can now do it using Mage, which gives them a beautiful system diagram and also generates code for the design created. Isn\u2019t that cool?"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Engineering Teams")," that are short of engineers can utilize the power of Mage to develop certain portions of their application with Mage. As we bring more features to the platform, the requirement for software engineers to actively develop redundant code with decrease further."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Individual contributors")," who are looking to quickly develop an application without going through the hassles of setting up a microservice, developing data connectors, adding cache layers, etc.")),(0,i.kt)("p",null,"When we use Mage, we can let go of the responsibility of writing down redundant backend code and can only focus on gluing the business logic with the APIs that Mage develops."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"website"},"Website"),(0,i.kt)("p",null,"Mage's website can be accessed using the portal ",(0,i.kt)("a",{parentName:"p",href:"https://console.magedev.xyz"},"console.magedev.xyz"),"."),(0,i.kt)("h3",{id:"login"},"Login"),(0,i.kt)("p",null,"Mage currently supports ",(0,i.kt)("strong",{parentName:"p"},"login with Google"),". Mage does not persist any personal information on our end except your name, email, and profile photo - all of which are used to just identify the user logging in so that we can provide you your content.\nOnce the user completes the login with Google flow, he/she is navigated straight to the editor page where the user can start building the application."),(0,i.kt)("h3",{id:"application-screens"},"Application Screens"),(0,i.kt)("p",null,"Mage is primarily divided into three sections :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Editor Section"),": This is the section where a user can create the system design for the service and configure it as per requirements."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Infrastructure Management Section"),": This section allows the user to create configurations for various infrastructure components used in the application such as Databases, AWS credentials, Kubernetes configurations, scaling configurations, etc."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Builds Section"),": This section is responsible for allowing the users to view past builds and generate new builds for the saved microservice configuration. With every completed build, mage pushes a Merge request to the configured repository.")),(0,i.kt)("h3",{id:"editor-section-1"},"Editor Section"),(0,i.kt)("p",null,"The editor section is where all the ",(0,i.kt)("em",{parentName:"p"},"\u201cmagic\u201d")," in mage happens. The editor page allows users to create microservices, add micro-components to the service, connect them together and therefore create a full-fledged microservice-based backend system."),(0,i.kt)("p",null,"On the editor page a user is allowed to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new microservice (using the toolbar on top)."),(0,i.kt)("li",{parentName:"ul"},"Selectively add components by clicking them from the left Components section and adding them with a name to the editor."),(0,i.kt)("li",{parentName:"ul"},"Connecting these components in a logical manner in order that makes sense for the application."),(0,i.kt)("li",{parentName:"ul"},"Configure these components by double-clicking on every individual component in the canvas and then configuring them in the side drawer.")),(0,i.kt)("p",null,"Additionally, ",(0,i.kt)("strong",{parentName:"p"},"Mage caches your UI actions every few seconds")," and syncs the configuration snapshot so that even if the user closes the window by mistake, they are able to resume from where they left. The title bar always shows a time ticker which denotes the last time configurations were cached.\nOnce satisfied with changes, users can click on the save button on the title bar which saves the user\u2019s configuration for the selected microservice."),(0,i.kt)("h4",{id:"microservices-section"},"Microservices section"),(0,i.kt)("p",null,"The microservices dropdown provides an easy way to create a new microservice. All service-based configurations stay isolated for every microservice. Therefore, if you are working on two microservices in parallel, the two services can be developed simultaneously.\nEach microservice is built by gluing a few components together."),(0,i.kt)("h4",{id:"components"},"Components"),(0,i.kt)("p",null,"A component is the smallest unit of logical code that a service can effectively use. Every component has a single type of responsibility. The components section is divided into five sections, each having their own set of components which can be used in mage."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network")," - These are the components which are used for reading user input. There are two ways in which a user can read input from end user - gRPC based input and http based input. For every service, we can have just one http network component and one gRPC component. These modules serve as the \u201centry point\u201d for the application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage")," - Every service most probably need to have a data store from which it can read and write data. This is exactly what Storage components provide. The storage components are specially curated to connect with various data sources such as MongoDB, SQL, Redis, File Storage (S3), etc. The components can be used in isolation, or they can be combined with strategies like Look-Aside Cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Strategies")," - There are some well known \u201cdesign patterns\u201d in the software Industry which users often use to make their applications more scalable. For example, a user might want to have faster data retrieval for which they\u2019ll expect to read data from a partial cache like redis and if no data is found, they\u2019ll want to switch to primary database like SQL. This strategy is very common and is known as \u201cLook Aside Cache\u201d. With mage\u2019s strategies, we can connect such components together and we should be able to provide this integration seamlessly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Message Queue")," - Many a times, users need to connect to a message broker such as Kafka, SQS, etc. for sending messages asynchronously. This is provided by Mage in different flavors using the message Queue functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Middlewares")," - We often feel the need to apply common logic such as monitoring, logging, authentication, authorization, etc. for several services. For this reason, we have a separate section called Middleware which can be clubbed with the Orchestrator module to provide all the common functionalities for a microservice.")),(0,i.kt)("p",null,"To take a deeper dive into what these individual components are capable of doing, do check the document for specific modules, or by clicking one of the links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Orchestrator"),(0,i.kt)("li",{parentName:"ul"},"gRPC"),(0,i.kt)("li",{parentName:"ul"},"HTTP"))),(0,i.kt)("li",{parentName:"ul"},"Storage Modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MongoDB"),(0,i.kt)("li",{parentName:"ul"},"SQL"),(0,i.kt)("li",{parentName:"ul"},"File Storage (S3)"),(0,i.kt)("li",{parentName:"ul"},"Elastic Search"),(0,i.kt)("li",{parentName:"ul"},"Redis"))),(0,i.kt)("li",{parentName:"ul"},"Strategies",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Look Aside cache"))),(0,i.kt)("li",{parentName:"ul"},"Message Queue",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kafka"))),(0,i.kt)("li",{parentName:"ul"},"Middlewares",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Logging"),(0,i.kt)("li",{parentName:"ul"},"Monitoring")))),(0,i.kt)("h3",{id:"infrastructure-management"},"Infrastructure Management"),(0,i.kt)("p",null,"The infrastructure management section allows the end user to configure database connections, setup credentials for various infrastructure components and to also define slow-changing items such as Database Schema, auto-scaling options, etc for the various components being used in the service."),(0,i.kt)("h3",{id:"build"},"Build"),(0,i.kt)("p",null,"Once the have created the final configuration in the editor page and has saved the state using the ",(0,i.kt)("strong",{parentName:"p"},'"Save"')," button, the user can proceed to the Builds page to create a new build for the service.\nEvery build is effectively a step where mage generates code for the service based on the configurations so far. As we create a new build, we provide a tag name which queues a job to the mage's build framework. Mage constantly looks for newly created builds and generates the code for this build accordingly. Once the build is created and code is ready, Mage creates a Merge request in the configured repository using the credentials provided.\nCurrently, mage is only capable of supporting repositories which are hosted on Gitlab (either self hosted or public gitlab)."),(0,i.kt)("h3",{id:"further-information"},"Further Information"),(0,i.kt)("p",null,"To deep dive into how mage works visit each and every section's page individually by navigating using the sidebar (on left)."))}h.isMDXComponent=!0}}]);