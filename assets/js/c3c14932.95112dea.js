"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6622],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},630:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],d={sidebar_position:5},s="Arbitrary Function",c={unversionedId:"Editor/Components/arbitrary_function",id:"Editor/Components/arbitrary_function",title:"Arbitrary Function",description:"Introduction",source:"@site/docs/Editor/Components/arbitrary_function.md",sourceDirName:"Editor/Components",slug:"/Editor/Components/arbitrary_function",permalink:"/docs/docs/Editor/Components/arbitrary_function",editUrl:"https://github.com/mage-io/docs/blob/master/docs/Editor/Components/arbitrary_function.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/docs/docs/Editor/Components/Redis"},next:{title:"Look Aside Cache",permalink:"/docs/docs/Editor/Components/Look Aside Cache"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Technical specification",id:"technical-specification",level:2},{value:"How To use",id:"how-to-use",level:2},{value:"Step 1: Creating connection",id:"step-1-creating-connection",level:3},{value:"Step 2: Adding inputs and outputs",id:"step-2-adding-inputs-and-outputs",level:3},{value:"Step 3: Linking dependencies",id:"step-3-linking-dependencies",level:3},{value:"Step 4: Adding node.js logic",id:"step-4-adding-nodejs-logic",level:3},{value:"Further Read",id:"further-read",level:2}],p={toc:u};function h(e){var t=e.components,d=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"arbitrary-function"},"Arbitrary Function"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Arbitrary Function",src:n(7233).Z,width:"1218",height:"527"}),"\nMage provides high level modules for solving most common problems but every application requires its own set of business logics to solve their needs. To tackle this, Mage provides a high level code injection mechanism using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Arbitrary function")," module. The module is capable of running node.js (javascript) code and connect to several connected modules at will."),(0,r.kt)("h2",{id:"technical-specification"},"Technical specification"),(0,r.kt)("p",null,'The arbitrary function module can be treated as a "hook" in the developed microservice and provides a mechanism to inject code at runtime. Along with providing the capability to inject code, Arbitrary function module also solves a few problems to ease the developer\'s pain.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The module connects to iits neighnours automatically at the start and therefore provides a map of ",(0,r.kt)("inlineCode",{parentName:"li"},"gRPC")," connection pool, which can be used for communicating to nearby modules. This map can be used in any method code by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"service_clients.<service_name>.<method_name>(args...)"),". Therefore, the hassle of opening, closing, maintaining connections is completely eliminated and the user can focus on building the business logic."),(0,r.kt)("li",{parentName:"ol"},"Any npm dependency, if required, can be added as a list of npm dependencies in the dependency list area. Each of these dependencies will be ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install <dep>")," before starting the module."),(0,r.kt)("li",{parentName:"ol"},"The code added is provided in Javascript in order to make it easy for all developers to quickly develop and scale.")),(0,r.kt)("h2",{id:"how-to-use"},"How To use"),(0,r.kt)("p",null,"The Arbitrary function module, like all the other modules needs to be added to the canvas, have it's connections and parameters defined, and connected to several other services. Once done, the module properties can be modified to add the required logic."),(0,r.kt)("h3",{id:"step-1-creating-connection"},"Step 1: Creating connection"),(0,r.kt)("p",null,"The Arbitrary function module requires user to add connection methods. These are the methods required for specifying any request flow. Additionally, since Arbitrary function module is fully customizable, the user can add the required request and response and these arguments would be made available for use inside the module's javascript code."),(0,r.kt)("h3",{id:"step-2-adding-inputs-and-outputs"},"Step 2: Adding inputs and outputs"),(0,r.kt)("p",null,"For every method that we create, we have the capability to add method input and output. These request and response params can be used while defining the code for arbitrary method service, and the module can follow these for service layer contract. In other words, the request and response arguments act like the method interface arguments which can be used to pass information to the arbitrary method module, and return response back from the module.\nTo provide these arguments, simply expand any connection method and add the desired fields, along with their field types."),(0,r.kt)("h3",{id:"step-3-linking-dependencies"},"Step 3: Linking dependencies"),(0,r.kt)("p",null,"All the dependent modules which need to be connected should be connected to the output of arbitrary function module. Then, during runtime, the module will allow all of these clients to get automatically connected at its start and the connections can be used by the users by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"service_clients.<service_name>")," inside every function."),(0,r.kt)("p",null,"For example, if an arbitrary function component (",(0,r.kt)("inlineCode",{parentName:"p"},"arb1"),") is connected to an SQL module (",(0,r.kt)("inlineCode",{parentName:"p"},"user_data"),") and ElasticSearch module (",(0,r.kt)("inlineCode",{parentName:"p"},"search_db"),") and these have the following methods defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"user_data :\n1. GetUserData(user string, id int64)(*entity.User)\n2. SetUser(user string, id int64, name string)\n\nsearch_db :\n1. SearchUser(user_id string)string\n")),(0,r.kt)("p",null,"Then these methods can be easily accessed inside the code builder's function by calling them as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const entity = service_clients.userData.GetUserData(user, id);\nservice_clients.userData.SetUser(user, id, name);\nconst searchJSON = service_clients.searchDb.SearchUser(user);\n")),(0,r.kt)("h3",{id:"step-4-adding-nodejs-logic"},"Step 4: Adding node.js logic"),(0,r.kt)("p",null,"To configure any method, check the configuration section in the module drawer.\n",(0,r.kt)("img",{alt:"Configure methods",src:n(721).Z,width:"1256",height:"589"}),"\nThe method configuration contains a list of methods which have already been created. To add custom javascript logic for any method, simply expand the module and add custom code in the development area accordingly.\nAs explained above, these methods already have ",(0,r.kt)("inlineCode",{parentName:"p"},"service_clients")," already available. The dependencies added in the dependency section can be used by simply adding imports in the code such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"let obj = await import('fs');\nlet res = fs.ReadFileSync('obj', 'data');\n")),(0,r.kt)("h2",{id:"further-read"},"Further Read"),(0,r.kt)("p",null,"The module follows standard nodejs development practices and therefore can help users write pretty-much anything that javascript and node generally support. To make the most use out of the Arbitrary function module, it is important for any developer to understand javascript in detail, and read about how npm works."))}h.isMDXComponent=!0},7233:function(e,t,n){t.Z=n.p+"assets/images/arbitrary-0878ce2a698576960b3f33fed2c57b8d.png"},721:function(e,t,n){t.Z=n.p+"assets/images/config-4c4e4e3d3b1650501101bf16a22e0373.png"}}]);