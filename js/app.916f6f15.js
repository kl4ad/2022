(function(){var e={5362:function(e,t,n){"use strict";var i=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",fixed:"",height:"8",dark:"",color:"#4b296b"},scopedSlots:e._u([{key:"img",fn:function(t){var i=t.props;return[n("v-img",e._b({},"v-img",i,!1))]}},{key:"extension",fn:function(){return[n("v-tabs",[n("v-app-bar-nav-icon",{on:{click:function(t){return e.$vuetify.goTo("#main_id")}}}),n("v-tab",{on:{click:function(t){return e.$vuetify.goTo("#abstract_id")}}},[e._v(" Abstract")]),n("v-tab",{on:{click:function(t){return e.$vuetify.goTo("#motivation_id")}}},[e._v(" Motivation")]),n("v-tab",{on:{click:function(t){return e.$vuetify.goTo("#detailed_description_id")}}},[e._v(" Detailed Description")]),n("v-tab",{on:{click:function(t){return e.$vuetify.goTo("#speakers_id")}}},[e._v(" Speakers")]),n("v-tab",{on:{click:function(t){return e.$vuetify.goTo("#tutorial_program_id")}}},[e._v(" Tutorial Program")]),n("v-tab",{on:{click:function(t){return e.$vuetify.goTo("#references_id")}}},[e._v(" References")])],1)]},proxy:!0}])}),n("v-main",[n("LandingPage")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:"",about:"",id:"main_id"}},[i("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("v-parallax",{staticClass:"start-image",staticStyle:{"max-width":"1980px"},attrs:{height:"325",src:n(8467)}},[i("v-row",{staticClass:"mt-2",attrs:{align:"start",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("h1",{staticClass:"text-h1 font-weight-thin mb-4"},[e._v(" KL4AD ")]),i("h4",{staticClass:"heading-text text-h4 subheading"},[i("span",[e._v("Knowledge-Infused Learning for Autonomous Driving")])]),i("h5",{staticClass:"heading-text text-h5 subheading"},[e._v(" ISWC'22 Tutorial ")])])],1)],1)],1),i("v-row",{staticClass:"pt-8",attrs:{"no-gutters":"",align:"center",justify:"center",about:"",id:"abstract_id"}},[i("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v(" Abstract ")])]),i("v-row",{staticClass:"pa-8",attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("p",{staticClass:"text-justify"},[i("b",[e._v("Autonomous Driving (AD)")]),e._v(" is considered as a testbed for tackling many hard AI problems. Despite the recent advancements in the field, AD is still far from achieving full autonomy due to core technical problems inherent in AD. The emerging field of neuro-symbolic AI and the methods for "),i("b",[e._v("knowledge-infused learning")]),e._v(" are showing exciting ways of leveraging external knowledge within machine/deep learning solutions, with the potential benefits for interpretability, explainability, robustness, and transferability. In this tutorial, we will examine the use of knowledge-infused learning for three core state-of-the-art technical achievements within the AD domain. With a collaborative team from both academia and industry, we will demonstrate recent innovations using real-world datasets. ")])]),i("v-row",{staticClass:"pt-8",attrs:{"no-gutters":"",align:"center",justify:"center",about:"",id:"motivation_id"}},[i("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v(" Motivation ")])]),i("v-row",{staticClass:"pa-8",attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("p",{staticClass:"text-justify"},[e._v(" To realize the vision of autonomous driving, the automotive industry is investing heavily into core AI technologies and deploying fleets of vehicles across the world to collect massive amounts of data, including – but not limited to – video, LIDAR, and RADAR. To manage these vast amounts of data, companies are beginning to experiment with the use of KGs, which are capable of representing meaningful relations between entities in the world while helping to enable the principles of FAIR data – i.e. findability, accessibility, interoperability, and re-use. Simultaneously, current research into the emerging topic of "),i("b",[e._v("knowledge-infused learning [1] -- or more generally, neuro-symbolic AI ")]),e._v(", which is often dubbed as the "),i("b",[e._v(" 3rd wave of AI [2]")]),e._v(" -- is showing new and exciting uses for KGs in AI applications. Knowledge-infused learning proposes intuitive ways of leveraging knowledge graphs within machine/deep learning solutions. This infusion of knowledge has been shown to improve the predictive capabilities of ML/DL while providing great potential for improving interpretability, explainability, robustness, and transferability. For these reasons, knowledge-infused learning holds much promise for helping to meet the complex technical challenges of autonomous driving (AD). In this tutorial, we will focus on three distinct technical innovations that leverage knowledge-infused learning. ")])]),i("v-row",{staticClass:"pt-8",attrs:{"no-gutters":"",align:"center",justify:"center",about:"",id:"detailed_description_id"}},[i("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v(" Detailed Description ")])]),i("v-row",{staticClass:"pa-8",attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("p",{staticClass:"text-justify"},[e._v(" We seek to provide an overview of knowledge-infused learning, an examination of its use for autonomous driving, and three deep dives into current state-of-the-art technical achievements. Specifically, the tutorial will consist of 5 interconnected lecture modules; two 30 mins introductory modules followed by three 40 mins modules for each application. The audience is expected to have a basic understanding of deep/machine learning, semantic technologies (e.g., RDF, OWL, linked open data) and semantic embedding approaches. We aim to guide attendees through a high-level tour of the knowledge-infused learning methods, basic familiarity into open-domain autonomous driving datasets/challenges, and the process of solving domain problems using neuro-symbolic AI methods. We'll be covering the following modules in this tutorial. ")]),i("ul",[i("li",[i("b",[e._v("Knowledge-infused Learning (KL): ")]),e._v(" KL a form of neuro-symbolic AI is a novel paradigm that seeks to incorporate a variety of explicit (symbolic) knowledge into a data-driven statistical AI framework that supports advancement in machine intelligence. Utilizing knowledge and data in deep learning models to enable learning from lower-level syntactic and lexical features from data through statistical (deep) learning as well as higher-level concepts from knowledge. Using knowledge also allows greater transparency in the decision-making, and enables explanations that users need for informed decision making. Recently, researchers have categorized the recent approaches into a continuum that comprises of three stages; namely, shallow, semi-deep, and deep infusion. We will provide a detailed overview for each stage of knowledge infusion with examples across several application domains. ("),i("i",[e._v("See relevant resources:")]),e._v(" [1])")]),i("br"),i("li",[i("b",[e._v("Applications for Autonomous Driving: ")]),e._v(" Despite recent advancements, AD is still far from ready to meet full level-5 autonomy requirements. The primary obstacle is the "),i("i",[e._v("open-world")]),e._v(" environment in which the autonomous vehicle must operate. Navigating this environment requires making informed decisions and taking actions within novel and complex situations. While machine learning, in general, and autonomous driving, in particular, have had much success in "),i("i",[e._v("closed-world")]),e._v(" environments with lots of experiential training data, the challenges posed by an open-world environment are yet to be resolved. Additionally, the full autonomy of self-driving and its widespread usage poses a new set of non-technical challenges, including user acceptance, accountability, explainability, and conformance to legal, ethical, and societal boundaries. We believe that knowledge-infused learning -- through an integration of domain knowledge and machine learning -- is a potent tool to overcome such challenges. ("),i("i",[e._v("See relevant resources:")]),e._v(" [3])")]),i("br"),i("li",[i("b",[e._v("Knowledge-based Entity Prediction (KEP) for Improved Machine Perception: ")]),e._v(" "),i("img",{attrs:{src:n(443),align:"right",width:"330",height:"200"}}),e._v(" Machine perception is one of the key technical problems in AD where detecting and recognizing objects/events in a scene (i.e. environmental perception) is a critical task. This, however, is particularly challenging as there are several reasons why an entity could go unrecognized. This includes, but not limited to, sensor failure, occlusion, low resolution (e.g., from weather), or errors in computer vision models. For example, consider the case where an ego vehicle driving through a residential neighborhood and detects only a ball on the road (partial observation) and could contain unrecognized entities such as "),i("i",[e._v("Child")]),e._v(" in the scene. Knowledge-based entity prediction (KEP) is a novel task that aims to address this issue by leveraging relational knowledge from heterogeneous sources in predicting potentially unrecognized entities. We will show how an innovative knowledge-infused learning approach can be developed for KEP and demonstrate its usefulness considering two high-quality, large-scale real AD datasets. ("),i("i",[e._v("See relevant resources:")]),e._v(" [4,5])")]),i("br"),i("li",[i("b",[e._v("Leveraging Commonsense for Explainable Scene Clustering: ")]),e._v(" The task of scene clustering refers to clustering a given set of scenes and assigning descriptive label(s) to each cluster. For example, a cluster may be described as "),i("i",[e._v("accident")]),e._v(" scenes with a crashed vehicle, a police car, and an ambulance. Using scenes represented in a knowledge graph, and enriched with commonsense knowledge, it may be possible to automatically generate explanations for semantic clusters. In this tutorial, we will demonstrate how an innovative approach can be developed for explainable scene clustering along with the process of leveraging relevant commonsense knowledge for this task. ("),i("i",[e._v("See relevant resources:")]),e._v(" [6])")]),i("br"),i("li",[i("b",[e._v("Learning Visual Models for Road Sign Recognition using a Knowledge Graph as a Trainer: ")]),e._v(" "),i("img",{attrs:{src:n(8664),align:"right",width:"370",height:"150"}}),e._v(" The task of recognizing and understanding road signs is an important feature of autonomous driving. Current technology for road sign recognition (RSR) is mainly based on computer vision (CV) algorithms that solely depend on image data distribution of the training domain. Such models, however, tend to fail when applied to a target domain (e.g., road signs from China) that differs from their source domain (e.g. road signs from Germany). Knowledge graph neural network (KG-NN) is a novel neuro-symbolic approach to address the problem of transfer learning by using image-data-invariant auxiliary knowledge. We will show how this technology can be applied to enable transfer learning for the RSR task. ("),i("i",[e._v("See relevant resources:")]),e._v(" [7])")])])]),i("v-row",{staticClass:"pt-8",attrs:{"no-gutters":"",align:"center",justify:"center",about:"",id:"speakers_id"}},[i("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v(" Speakers ")])]),i("v-row",{staticClass:"pb-8",attrs:{align:"center",justify:"center","no-gutters":""}},[e._l(e.authors,(function(e,t){return[i("biography-card",{key:t,attrs:{person:e}})]}))],2),i("v-row",{staticClass:"pt-8",attrs:{"no-gutters":"",align:"center",justify:"center",about:"",id:"tutorial_program_id"}},[i("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v(" Tutorial Program ")])]),i("v-row",{staticClass:"pb-8 pr-8 pl-8",attrs:{align:"center",justify:"center","no-gutters":""}},[i("v-timeline",e._l(e.programItems,(function(t,n){return i("v-timeline-item",{key:n,attrs:{color:t.color,small:""},scopedSlots:e._u([{key:"opposite",fn:function(){return[i("span",{class:"headline font-weight-bold "+t.color+"--text",domProps:{textContent:e._s(t.time)}})]},proxy:!0}],null,!0)},[i("div",{staticClass:"py-4"},[i("h2",{class:"headline font-weight-light mb-4 "+t.color+"--text"},[e._v(" "+e._s(t.title)+" ")]),i("div",[e._v(" "+e._s(t.description)+" ")])])])})),1)],1),i("v-row",{staticClass:"pt-8",attrs:{"no-gutters":"",align:"center",justify:"center",about:"",id:"references_id"}},[i("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[e._v(" References ")])]),i("v-row",{staticClass:"pa-8",attrs:{"no-gutters":"",align:"center",justify:"center"}},[i("p",{staticClass:"text-justify"},[i("ol",[i("li",[e._v(' Sheth, A., Gaur, M., Kursuncu, U., Wickramarachchi, R.: "Shades of knowledge- infused learning for enhancing deep learning". in IEEE Internet Computing (2019)')]),i("li",[e._v('Garcez, A.d., Lamb, L.C.: Neurosymbolic "AI: The 3rd wave". arXiv preprint arXiv:2012.05876 (2020)')]),i("li",[e._v("Henson, C., Wickramarachchi, R.: "),i("a",{attrs:{href:"https://www.bosch.com/stories/knowledge-infused-learning-for-autonomous-driving/",target:"_blank"}},[e._v(' "Introduction to knowledge-infused learning for autonomous driving" ')]),e._v(" (June 2021)")]),i("li",[e._v(' Wickramarachchi, R., Henson, C., Sheth, A.: "Knowledge-infused Learning for Entity Prediction in Driving Scenes". in Frontiers in Big Data 4, 759110 (2021)')]),i("li",[e._v(' Wickramarachchi, R., Henson, C., Sheth, A. "Knowledge-based Entity Prediction for Improved Machine Perception in Autonomous Systems". in IEEE Intelligent Systems (2022), doi: 10.1109/MIS.2022.3181015. ')]),i("li",[e._v('Chowdhury, S.N., Wickramarachchi, R., Gad-Elrab, M.H., Stepanova, D., Henson, C.: "Towards leveraging commonsense knowledge for autonomous driving". in International Semantic Web Conference (ISWC) (2021)')]),i("li",[e._v(' Monka, S., Halilaj, L., Schmid, S., Rettinger, A.: "Learning visual models using a knowledge graph as a trainer. in International Semantic Web Conference (ISWC) (2021)')])])])]),i("v-row",{staticClass:"pa-8",attrs:{"no-gutters":"",align:"center",justify:"center"}})],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-img",{attrs:{src:e.imagePath,height:"200px"}}),n("v-card-title",[e._v(" "+e._s(e.person.name)+" ")]),n("v-card-subtitle",[e._v(" "+e._s(e.person.company)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"orange lighten-2",text:""}},[e._v(" Biography ")]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[n("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-divider"),n("v-card-text",[e._v(" "+e._s(e.person.biography)+" ")])],1)])],1)},c=[],d={name:"BiographyCard",props:["person"],data(){return{randomInt:0,show:!1}},computed:{imagePath(){let e=null;try{e=n(7173)("./"+this.person.imagePath)}catch{e="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"}return e}},mounted(){},methods:{}},g=d,u=n(3736),h=n(3453),p=n.n(h),m=n(680),f=n(26),v=n(7118),b=n(1418),y=n(5827),w=n(6428),k=n(7047),C=n(9762),I=(0,u.Z)(g,l,c,!1,null,"8118d3c8",null),x=I.exports;p()(I,{VBtn:m.Z,VCard:f.Z,VCardActions:v.h7,VCardSubtitle:v.Qq,VCardText:v.ZB,VCardTitle:v.EB,VDivider:b.Z,VExpandTransition:y.Fx,VIcon:w.Z,VImg:k.Z,VSpacer:C.Z});var A={components:{BiographyCard:x},name:"LandingPage",data:()=>({authors:[{name:"Ruwan Wickramarachchi",imagePath:"Ruwan.jpeg",company:"AI Institute - University of South Carolina",logo_path:"",biography:"Ruwan Wickramarachchi is a Ph.D. student at the AI Institute, University of South Carolina. His dissertation research focuses on introducing expressive knowledge representation and knowledge-infused learning techniques to improve machine perception and context understanding in autonomous systems. He has co-organized several tutorials on Neurosymbolic-AI, particularly at U.S. Semantic Technologies Symposium (US2TS), and ACM Hypertext (HT). Contact him at: ruwan@email.sc.edu"},{name:"Cory Henson",imagePath:"Cory.jpeg",company:"Bosch Research",logo_path:"",biography:"Cory Henson is a lead research scientist at the Bosch Research and Technology Center in Pittsburgh, PA. His research focuses on the application of knowledge representation and neuro-symbolic AI to enable autonomous driving. He also holds an Adjunct Faculty position at Wright State University. Cory has organized several workshops at ISWC on the topic of Semantic Sensor Networks. Contact him at: cory.henson@us.bosch.com"},{name:"Sebastian Monka",imagePath:"Sebastian2.jpg",company:"Bosch Research and Trier University",logo_path:"",biography:"Sebastian Monka is a research scientist at Bosch Research in Renningen, Germany, and a Ph.D. candidate at Trier University. His dissertation research focuses on using neuro-symbolic AI and graph neural networks for transfer learning; i.e. the ability to apply ML models to different but related problems. Specifically, this technology has been applied to improving perception systems for autonomous driving. Contact him at: sebastian.monka@de.bosch.com"},{name:"Daria Stepanova",imagePath:"Daria.jpeg",company:"Bosch Center for Artificial Intelligence",logo_path:"",biography:"Daria Stepanova is a research scientist at Bosch Center for Artificial Intelligence, Renningen, Germany. Her research interests include neuro-symbolic AI, logic programming, as well as reasoning over knowledge graphs. Previously Daria was a senior researcher at Max Plank Institute for Informatics (Germany), where she was heading a group on Semantic Data. She has delivered several talks at international events in the Semantic Web domain and has served as session chair for ESWC. Contact her at: daria.stepanova@de.bosch.com"},{name:"Amit Sheth",imagePath:"Amit2.jpeg",company:"AI Institute - University of South Carolina",logo_path:"",biography:"Amit Sheth is the founding director of the AI Institute, University of South Carolina (AIISC). His current core research includes knowledge-infused learning and explanationability. He is a fellow of IEEE, AAAI, AAAS, and ACM. He has co-organized >100 international events and tutorials, and is among the top 50 computer scientists in the USA. He has founded three companies by licensing his university research outcomes, including the first Semantic Web company in 1999 that pioneered technology similar to what is found today in Google Semantic Search and KG. Contact him at: amit@sc.edu"}],programItems:[{color:"red",title:"Introduction to Knowledge-infused Learning",description:""},{color:"purple",title:"Applications for Autonomous Driving",description:""},{color:"green",title:"Knowledge-based Entity Prediction (KEP) ",description:""},{color:"orange",title:"Commonsense for Explainable Scene Clustering ",description:""},{color:"blue",title:"Road Sign Recognition using a KG as a Trainer",description:""}]})},S=A,R=n(2102),W=n(9846),Z=n(2622),E=n(2877),P=n(2865),j=n(6996),V=(0,u.Z)(S,r,s,!1,null,null,null),T=V.exports;p()(V,{VCol:R.Z,VContainer:W.Z,VParallax:Z.Z,VRow:E.Z,VTimeline:P.Z,VTimelineItem:j.Z});var G={name:"App",components:{LandingPage:T},data:()=>({})},B=G,D=n(7524),U=n(3583),z=n(5206),N=n(7877),K=n(4227),Q=n(9848),M=(0,u.Z)(B,a,o,!1,null,null,null),O=M.exports;p()(M,{VApp:D.Z,VAppBar:U.Z,VAppBarNavIcon:z.Z,VImg:k.Z,VMain:N.Z,VTab:K.Z,VTabs:Q.Z});var L=n(1910);i.Z.use(L.Z);var Y=new L.Z({});i.Z.config.productionTip=!1,new i.Z({vuetify:Y,render:e=>e(O)}).$mount("#app")},7173:function(e,t,n){var i={"./Amit.jpeg":4984,"./Amit2.jpeg":7789,"./Cory copy.jpeg":2723,"./Cory.jpeg":2208,"./Daria.jpeg":2271,"./Ruwan.jpeg":6516,"./Sebastian.jpg":5119,"./Sebastian2.jpg":4397,"./Title.png":8467,"./iswc-logo-light2.png":3953,"./kep.png":443,"./logo.png":6949,"./logo.svg":9574,"./road_signs.png":8664};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id=7173},9574:function(e,t,n){"use strict";e.exports=n.p+"img/logo.4d6033c9.svg"},4984:function(e,t,n){"use strict";e.exports=n.p+"img/Amit.d90d73b8.jpeg"},7789:function(e,t,n){"use strict";e.exports=n.p+"img/Amit2.d25aa98b.jpeg"},2723:function(e,t,n){"use strict";e.exports=n.p+"img/Cory copy.30f38783.jpeg"},2208:function(e,t,n){"use strict";e.exports=n.p+"img/Cory.d0fe089d.jpeg"},2271:function(e,t,n){"use strict";e.exports=n.p+"img/Daria.e736f23b.jpeg"},6516:function(e,t,n){"use strict";e.exports=n.p+"img/Ruwan.27356738.jpeg"},5119:function(e,t,n){"use strict";e.exports=n.p+"img/Sebastian.02a7472e.jpg"},4397:function(e,t,n){"use strict";e.exports=n.p+"img/Sebastian2.d9b25bc4.jpg"},8467:function(e,t,n){"use strict";e.exports=n.p+"img/Title.f948844f.png"},3953:function(e,t,n){"use strict";e.exports=n.p+"img/iswc-logo-light2.3723c969.png"},443:function(e,t,n){"use strict";e.exports=n.p+"img/kep.69026256.png"},6949:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},8664:function(e,t,n){"use strict";e.exports=n.p+"img/road_signs.7544fa5b.png"}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],o=e[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/2022/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunkKL4AD"]=self["webpackChunkKL4AD"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5362)}));i=n.O(i)})();
//# sourceMappingURL=app.916f6f15.js.map