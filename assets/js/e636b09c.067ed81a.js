"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1443],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},c="Components",l={unversionedId:"Editor/Components/components",id:"Editor/Components/components",title:"Components",description:"A component is the smallest unit of logical code that a service can effectively use. Every component has a single type of responsibility. The components section is divided into five sections, each having their own set of components which can be used in mage.",source:"@site/docs/Editor/Components/components.md",sourceDirName:"Editor/Components",slug:"/Editor/Components/",permalink:"/docs/docs/Editor/Components/",editUrl:"https://github.com/mage-io/docs/blob/master/docs/Editor/Components/components.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Editor Section",permalink:"/docs/docs/Editor/"},next:{title:"Orchestrator",permalink:"/docs/docs/Editor/Components/Orchestrator"}},p={},u=[{value:"Common Behaviors",id:"common-behaviors",level:2},{value:"Adding components to canvas",id:"adding-components-to-canvas",level:3},{value:"Connecting components",id:"connecting-components",level:3},{value:"Configuring a component",id:"configuring-a-component",level:3},{value:"Connections",id:"connections",level:4},{value:"Configurations",id:"configurations",level:4},{value:"Further Read",id:"further-read",level:4},{value:"Removing a component",id:"removing-a-component",level:3},{value:"Further Instructions",id:"further-instructions",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"components"},"Components"),(0,i.kt)("p",null,"A component is the smallest unit of logical code that a service can effectively use. Every component has a single type of responsibility. The components section is divided into five sections, each having their own set of components which can be used in mage."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Network")," - These are the components which are used for reading user input. There are two ways in which a user can read input from end user - gRPC based input and http based input. For every service, we can have just one http network component and one gRPC component. These modules serve as the \u201centry point\u201d for the application."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Storage")," - Every service most probably need to have a data store from which it can read and write data. This is exactly what Storage components provide. The storage components are specially curated to connect with various data sources such as MongoDB, SQL, Redis, File Storage (S3), etc. The components can be used in isolation, or they can be combined with strategies like Look-Aside Cache."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Strategies")," - There are some well known \u201cdesign patterns\u201d in the software Industry which users often use to make their applications more scalable. For example, a user might want to have faster data retrieval for which they\u2019ll expect to read data from a partial cache like redis and if no data is found, they\u2019ll want to switch to primary database like SQL. This strategy is very common and is known as \u201cLook Aside Cache\u201d. With mage\u2019s strategies, we can connect such components together and we should be able to provide this integration seamlessly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Message Queue")," - Many a times, users need to connect to a message broker such as Kafka, SQS, etc. for sending messages asynchronously. This is provided by Mage in different flavors using the message Queue functionality."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Middlewares")," - We often feel the need to apply common logic such as monitoring, logging, authentication, authorization, etc. for several services. For this reason, we have a separate section called Middleware which can be clubbed with the Orchestrator module to provide all the common functionalities for a microservice.")),(0,i.kt)("h2",{id:"common-behaviors"},"Common Behaviors"),(0,i.kt)("p",null,"Since components are building blocks for the application, they behave in similar fashion but are capable of performing different actions and can be configured differently."),(0,i.kt)("h3",{id:"adding-components-to-canvas"},"Adding components to canvas"),(0,i.kt)("p",null,"For adding a component to the canvas, a user can select the component from the left panel. In the name dialog box, we can define any identifier for the component which must be unique across all the services created so far."),(0,i.kt)("p",null,"Once added, the component becomes available in the microservice and is ready for further use."),(0,i.kt)("h3",{id:"connecting-components"},"Connecting components"),(0,i.kt)("p",null,"While the components themselves provide a lot of functionality individually, the core capability of Mage comes from connecting these components together and enhancing their capabilities.\nFor this purpose, every component is capable of doing one or both of these items:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Accepting input and returning response bfor any request."),(0,i.kt)("li",{parentName:"ol"},"Generating another request to other components based on the information received in input.")),(0,i.kt)("p",null,"For example, the gRPC component is responsible for reading user input, and therefore doesn't have any Mage input connection. Meanwhile, the SQL module currently only supports Reading/Writing data to database, and therefore doesn't have any outgoing connection."),(0,i.kt)("p",null,'For connection purposes and routing requests appropriately, mage mages use of "Connections" section from the ',(0,i.kt)("a",{parentName:"p",href:"#configuring-a-component"},"configuration section"),". These connections are modelled as gRPC methods in the generated code and allows the modules generated to communicate amongst themselves with ease."),(0,i.kt)("h3",{id:"configuring-a-component"},"Configuring a component"),(0,i.kt)("p",null,"All components can be configured separately in order to define their behaviors. For example, SQL might need confiurations for whether the request is Read/Write/Update/Delete whereas we might need to define the order of lookup in look-aside cache. In order to provide these configurations, a user can double-click on the module added to canvas and use the side bar to configure these components."),(0,i.kt)("p",null,"The sidebar shows two sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Connections")," - These are common for all components and show the input/output which can be expected from the component."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configuration")," - These are component-specific configurations which are used for defining the selected component's behavior.")),(0,i.kt)("h4",{id:"connections"},"Connections"),(0,i.kt)("p",null,"Connections are a defining property of every component and these allow the components to interact with each other. A connection can be thought of as a mechanism to interact with any component. An analogy to connections in mage could be what functions do in a language - they help you abstract some logic by reading arguments and returning data accordingly. Similarly, in case of components, connections allow the components to receive information from the end user and take actions according to the input."),(0,i.kt)("p",null,"The default behavior for all components in Mage is to allow the user to Create a connection method, and then define it's input/output arguments. As we set these arguments, the component becomes ready to accept traffic from any other component (and in some cases like gRPC, it becomes capable of accepting external traffic).\nSome components do not directly allow editing parts of connections like request/response or even the connection name, but instead derive them based on the configurations provided. For Example, ",(0,i.kt)("em",{parentName:"p"},"SQL")," component allows users to provide arguments based the configuration provided in the configuration section, but still needs the user to create connection method."),(0,i.kt)("h4",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"For most of the components in mage, the user is also allowed to provide a configuration for the endpoints/databases/queries, etc. for the component. This allows the user to modify the behavior for every method and the component. This section also allows the user to define various properties for each method which enhances the response for every method allows users to curate every method based on their need.\nFor example, ",(0,i.kt)("em",{parentName:"p"},"SQL")," component allows the user to define what arguments would be used in the where clause, what is the response type expected, whether the request is read write update or delete, or if user just wants to substitute a raw query with arguments."),(0,i.kt)("p",null,"Splitting configurations and connections separately allows mage to isolate responsibiilities of every component, meanwhile allowing other components to interact with the current component and greatly enhancing the component's abilities. While connections allow users to simply define input/output for the component, configurations allow the user to define behavior for all the connections."),(0,i.kt)("h4",{id:"further-read"},"Further Read"),(0,i.kt)("p",null,"Check individual components' documentation on what the connections and configurations mean for the component, and how they can be used to modify the component's behavior."),(0,i.kt)("h3",{id:"removing-a-component"},"Removing a component"),(0,i.kt)("p",null,'To Remove a component, simply double click and open the sidebar. At the bottom of the sidebar, a user can find a button "Remove" which allows the user to remove the component from canvas.\nWhen a component gets removed, all of it\'s connected configurations and its neighbouring configurations also get removed.'),(0,i.kt)("h2",{id:"further-instructions"},"Further Instructions"),(0,i.kt)("p",null,"To take a deeper dive into what these individual components are capable of doing, do check the document for specific modules, or by clicking one of the links below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Orchestrator"},"Orchestrator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./gRPC%20Connector"},"gRPC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./HTTP%20Connector"},"HTTP")))),(0,i.kt)("li",{parentName:"ul"},"Storage Modules",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./MongoDB"},"MongoDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./SQL"},"SQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./File%20Storage"},"File Storage (S3)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Elastic%20Search"},"Elastic Search")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Redis"},"Redis")))),(0,i.kt)("li",{parentName:"ul"},"Strategies",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Look%20Aside%20Cache"},"Look Aside cache")))),(0,i.kt)("li",{parentName:"ul"},"Message Queue",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kafka (Coming Soon...)"))),(0,i.kt)("li",{parentName:"ul"},"Middlewares",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Logging (Coming Soon...)"),(0,i.kt)("li",{parentName:"ul"},"Rate Limiting (Coming Soon...)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Monitoring"},"Monitoring"))))))}d.isMDXComponent=!0}}]);