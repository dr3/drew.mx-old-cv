(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,n){"use strict";n.r(t);n(34);var a=n(186),i=n.n(a),o=n(0),r=n.n(o),l=n(156),s=n(164),c=n.n(s),d=n(161),u=n(187),m=n.n(u),h=(n(170),"#125ad5"),p=Object(l.b)(["font-family:Times;"]),g=l.c.span.withConfig({displayName:"Heading__StyledName",componentId:"sc-1n1oh5g-0"})(["font-size:3.75rem;",";display:block;"],p),b=l.c.span.withConfig({displayName:"Heading__StyledTitle",componentId:"sc-1n1oh5g-1"})(["font-size:2.25rem;",";display:block;color:",";"],p,h),f=l.c.h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-1n1oh5g-2"})(["border:none;font-weight:normal;"]),w=function(e){var t=e.name,n=e.title;return r.a.createElement(f,null,r.a.createElement(g,null,t),r.a.createElement(b,null,n))},y=(n(75),n(56),n(35),l.c.div.withConfig({displayName:"Details__Wrapper",componentId:"n21v49-0"})(["align-self:center;margin-top:2.4375rem;"])),v=l.c.div.withConfig({displayName:"Details__DetailWrapper",componentId:"n21v49-1"})(["text-align:right;font-size:0.9375rem;"]),k=l.c.span.withConfig({displayName:"Details__Label",componentId:"n21v49-2"})(["color:",";font-size:0.75rem;"],h),I=function(e){var t=e.values;return r.a.createElement(y,null,t&&t.map(function(e){var t=e.label,n=e.text;return r.a.createElement(v,{key:t||n},t&&r.a.createElement(k,null,t,": "),n&&r.a.createElement("span",null,n))}))},C=l.c.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1y7wkde-0"})(["@media print,(min-width:47rem){display:grid;grid-template-columns:4fr 1fr;grid-column-gap:1rem;}"]),S=function(e){var t=e.name,n=e.title,a=e.userDetails;return r.a.createElement(C,null,r.a.createElement(w,{name:t,title:n}),r.a.createElement(I,{values:a}))},B=l.c.p.withConfig({displayName:"Section__SectionTitle",componentId:"sc-99h4ly-0"})(["color:",";font-weight:bold;@media screen and (max-width:47rem){&::before{content:'';position:absolute;height:4px;border:none;background:",";left:0;right:0;top:0.5rem;}& span{background-color:white;position:relative;padding-right:1rem;}}"],h,h),E=l.c.div.withConfig({displayName:"Section__StyledRow",componentId:"sc-99h4ly-1"})(["position:relative;@media print,(min-width:47rem){display:grid;grid-template-columns:1fr 6fr;grid-column-gap:1rem;}"]),x=l.c.div.withConfig({displayName:"Section__StyledLine",componentId:"sc-99h4ly-2"})(["height:4px;background-color:",";margin-top:0.5rem;@media screen and (max-width:47rem){display:none;}"],h),N=l.c.div.withConfig({displayName:"Section__RowLabel",componentId:"sc-99h4ly-3"})(["text-align:right;margin-bottom:0.8125rem;@media screen and (max-width:47rem){font-weight:bold;text-align:initial;margin:0;}"]),A=l.c.p.withConfig({displayName:"Section__SubsectionTitle",componentId:"sc-99h4ly-4"})(["margin:0;font-weight:bold;"]),_=function(e){var t=e.label,n=e.children;return r.a.createElement(E,null,r.a.createElement(N,null,t),r.a.createElement("div",null,n))},W=function(e){var t=e.title,n=e.subsections,a=r.a.createElement(x,null);return r.a.createElement("div",null,r.a.createElement(_,{label:a},r.a.createElement(B,null,r.a.createElement("span",null,t))),n&&n.map(function(e){var t=e.label,n=e.title,a=e.body;return r.a.createElement(_,{label:t,key:t||n||a[0]},n&&r.a.createElement(A,null,n),a&&a.map(function(e){return r.a.createElement("p",{key:e},e)}))}))},j=l.c.div.withConfig({displayName:"Wrapper",componentId:"tnu170-0"})(["max-width:57rem;margin:0 auto;line-height:1.35rem;",";color:black;padding:0 1rem;text-align:justify;"],p);function D(){var e=i()(["\n  @page {\n    size: auto;\n    margin: 0mm 0mm 0mm 0mm;\n  }\n"]);return D=function(){return e},e}n.d(t,"query",function(){return H});var T=Object(l.a)(D()),H=(t.default=function(e){var t=e.data,n=Object(d.a)(["site","siteMetadata","title"],t),a=Object(d.a)(["site","siteMetadata","title"],t);return r.a.createElement(j,null,r.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:"CV | "+n}),r.a.createElement(T,null),r.a.createElement(S,m.a),m.a.sections&&m.a.sections.map(function(e){return r.a.createElement(W,Object.assign({key:e.title},e))}))},"3998338720")},161:function(e,t,n){"use strict";t.a=function(e,t){return e.reduce(function(e,t){return e&&e[t]?e[t]:null},t)}},170:function(e,t,n){var a=n(25).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(14)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},186:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}},187:function(e,t){e.exports={name:"Drew McMillan",title:"Curriculum Vitae",userDetails:[{label:"Based in",text:"Marlybone, London"},{label:"Currently at",text:"BBC News"},{label:"Email",text:"hello@mcmill.co.uk"},{label:"Website",text:"drew.mx"}],sections:[{title:"About Me",subsections:[{body:["Currently working to scale a React application across BBC World Service, I am very a enthusiastic developer with hands on experience working on websites used by millions of users a month. I have experience with the full process of developing robust web applications from analysis and design though to development, testing and deploying.","Achieving a 1st in computer science in 2018, I have a large number of both technical and personal skills. I am very adaptable to new infrastructures and languages, quickly being able to develop new features and improve existing code. I have a wide range of personal skills such as time keeping, team work to ensure that I can develop effective software and write quality code.","Over the next few years I hope to continue to build both my technical and personal skills, mentoring others to become better developers themselves while continuing to force myself a strong career in software engineering. I hope that what you read will put me in good stride to become an excellent member, and senior software engineer, of your team."]}]},{title:"Key Skills",subsections:[{label:"Creating effective software",body:["Analysing product requirements I can lead decision making and development to meet the requirements in a timely and suitable manor. Understanding available technologies quickly I can lead others, weighing all opinions, to create effective software that is performant, scalable and accessible"]},{label:"Adapting quickly",body:["When working in an agile team you can often move to a new software system when a new epic is begun. I am very strong at quickly understanding the new and unknown infrastructure, and developing within it. I strive to develop my skills as fast as possible and frequently explore new technologies to explore how they can be used to help serve our audience."]},{label:"Code analysis and review",body:["Being a code owner of our primary applications, I have repeatedly shown I can give constructive feedback on others’ code, foresee future issues that may arise and rapidly come up with solutions to fix them. Dealing with legacy code bases I can analyse which areas are suitable to reuse and weigh the cost of redevelopment to ensure we deliver the best product possible","Code reviews can be an important part of an engineers development. With a strong focus on helping others grow as a developer, I aim to provide good feedback during code reviews so that others can not only correct their code, but also learn from the process as much as possible."]},{label:"Teamwork and Personal Skills",body:["While I am currently a mid level developer, I have shown my ability to lead both team and application development. Having recently develivered successfully with a relatively inexperienced team, guiding their development and teaching where needed to grow both the team and myself."]},{label:"Applying best practices",body:["Constantly learning best practices, I am able to best solve problems using suitable technology to deliver user value. Using CD and versioning to deliver faster, ensuring best practices are followed in HTML semantics, React Js and caching are just a few of the many ways I have shown my ability to understand and apply technologies when suitable"]}]},{title:"Employment",subsections:[{label:"November 2018 – Now",title:"Software Engineer - BBC News",body:["Working with the latest in full stack Javascript to build the future of BBC article pages in ReactJS. Current work can be found at https://github.com/bbc/simorgh and https://github.com/bbc/psammead which are entirely opensource.","Key Project -","Simorgh - Originally on the core Articles team, I have become a central member of the Simorgh project. At its core it is an Isomorphic React application that serves articles, and now frontpages to users both in the UK and around the world. Delivering twice in just a few months, I have shown throughout this project not only strong technical ability but also leadership and the ability to mentor others. The second deliverable, BBC World Service Frontpages were delivered with a team inexperienced on the codebase. Through regular code reviews and many workshop sessions I helped guide us to delivering very rapidly."]},{label:"September 2017 – Nov 2018",title:"Junior Software Engineer - BBC News",body:["Working on the front page of BBC news (bbc.co.uk/news) as well as a number of other pages such as topic pages and market data. Working part time (Sept 2017 -> June 2018) during my studies, and full time after that, to develop new features and improving existing code to be more reusable. Writing e2e and unit tests to ensure that our sites maintain functionality with a quickly changing codebase."]},{label:"August 2016 – August 2017",title:"Trainee Web Developer - BBC News",body:["Part of a technical team to produce new features, improvements and whole new sections of the BBC News website. I worked alongside journalists, project and product managers, designers, business analysts, testers and other developers. Working directly on the output of one of the world’s most successful news websites to a global audience of 100s of millions."]}]},{title:"Technical Interests",subsections:[{label:"Full Stack Web Development",body:["Developing across all layers of web infrastructure to develop great products, especially with JavaScript. Implementing from the front end, following UX designs to create a great user experience, to the backend designing strong infrastructure with concerns for performance, security and usability."]},{label:"Performance",body:["In competitive market user load times of a couple seconds can mean a large amount of the audience leave your site. I have a keen and growing interest in reducing this using methods such as caching, JavaScript bundling and developing to avoid bottlenecks, such as blocking JavaScript, where possible."]}]},{title:"Education",subsections:[{label:"2014 - 2018",title:"Computer Science @ Aberystwyth University – 1st",body:["In June 2018 I graduated with a 1st class degree in 'BSC Computer Science (with integrated year in industry)'","In my final year, apart from full stack web, I had a strong interest in Machine learning and Computer Vision and how it can be used to improve our understanding of the real world."]},{label:"2007 - 2014",title:"Stratford upon Avon School",body:["A Levels in Maths, Business Studies and ICT. AS Level in Physics. 12 GCSE's ranging from A* to B - A in Maths and Science and a B in English"]}]},{title:"References",subsections:[{title:"Benjamin Hobbs - Software Engineering Manager (Web)",body:["ZONE 6B BBC, BBC Broadcasting House, Portland Pl, W1A1AA benjamin.hobbs@bbc.co.uk"]},{title:"Amy Walker - Software Engineering Team Lead (News Web)",body:["ZONE 6B BBC, BBC Broadcasting House, Portland Pl, W1A1AA amy.walker01@bbc.co.uk"]}]},{title:"A copy of this CV can be found at https://drew.mx/cv"}]}}}]);
//# sourceMappingURL=component---src-pages-cv-jsx-1864a8841c18b3da00c4.js.map