(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{342:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return o});var a=function(e){return[e.lastName,e.firstName,e.middleName].filter(function(e){return!!e}).join(" ")},n=function(e){if(!e)return"";var t="";return e.firstName&&(t+=e.firstName.charAt(0)),e.middleName&&e.middleName.split(" ").forEach(function(e){return t+=e.charAt(0)}),t?e.lastName+" "+t:e.lastName},o=function(e){var t=e.authors.map(n).join(", ");return e.year&&(t+=" (".concat(e.year,")")),t+=", "+e.topic,e.publication&&(t+=", "+e.publication),e.url&&(t+=" , "+e.url),t+=" | "+e.sourceType.name}},345:function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return n}),r.d(t,"d",function(){return o}),r.d(t,"c",function(){return c});var a="#9f3a38",n="#fff6f6",o="#2c662d",c="#f8f8f9"},347:function(e,t,r){"use strict";var a=r(16),n=r(631),o=r(60),c=r(64),s=r(62),i=r(61),u=r(63),l=r(0),m=r(142),d=r(657),p=(r(355),{showingSidebar:!1}),h=r(39),f=r(11),b=function(e){function t(){var e,r;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state=p,r.renderWithContext=function(e){var t=r.props,a=t.className,n=void 0===a?"":a,o=t.style,c=t.currentProject,s=t.title,i=t.match.path,u=t.showSideBarTrigger,p=e.onShowClicked,h=e.minWidth600,b=e.showSidebar,E=!h||!b;return l.createElement("div",{className:"".concat(n," src-components-header"),style:o},l.createElement("div",{className:"top"},u&&E&&l.createElement("a",{className:"sidebar-trigger item",onClick:p},l.createElement(m.a,{name:"content"})),l.createElement("div",{className:"title"},s)),c&&l.createElement("div",{className:"bottom"},i===f.e?l.createElement("span",{className:"project-title"},c.title):l.createElement(d.a,{to:Object(f.k)(),className:"project-title"},c.title)))},r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.createElement(h.a,null,this.renderWithContext)}}]),t}(l.Component),E=r(120),v=Object(a.graphql)(E.a,{props:function(e){return e.data}});t.a=Object(a.compose)(n.a,v)(b)},352:function(e,t,r){"use strict";var a=r(451),n=r(16),o=r(51),c=r(60),s=r(64),i=r(62),u=r(61),l=r(63),m=r(0),d=r.n(m),p=r(651),h=r(619),f=r(618),b=r(142),E=r(657),v=r(119),g=r.n(v),S=(r(492),{modalState:{newTag:!1,newSource:!1,tagList:!1}}),O=r(39),j=r(11),y=r(36),C=r(25),k=r(8),T=r.n(k),N=r(14),w=r(635),F=r(648),A=r(638),x=r(632),M=r(652),I=r(644),R=r(4),_=r(5),q=r.n(_),W=r(85);function B(){var e=Object(R.a)(["\n  mutation CreateTag($tag: CreateTagInput!) {\n    createTag(tag: $tag) {\n      ...TagFrag\n    }\n  }\n\n  ","\n"]);return B=function(){return e},e}var U=q()(B(),W.a),Q=r(124),L={text:"",formError:void 0,submitting:!1,submitSuccess:!1},$=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state=L,r.renderErrorOrSuccess=function(){var e=r.state,t=e.formError,a=e.submitSuccess;return t?d.a.createElement(I.a,{icon:!0,error:!0},d.a.createElement(b.a,{name:"ban"}),d.a.createElement(I.a.Content,null,d.a.createElement(I.a.Header,null,"An error has occurred"),t.message)):a?d.a.createElement(I.a,{error:!0,success:!0,content:"Tag created successfully!"}):void 0},r.reset=Object(N.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.props.dismissModal();case 1:case"end":return e.stop()}},e,this)})),r.handleFocus=function(){return r.setState({formError:void 0,submitSuccess:!1})},r.handleChange=function(e){return function(t){var a=t.target;r.setState(function(t){return g()(t,Object(o.a)({},e,{$set:a.value}))})}},r.handleSubmit=function(e){return Object(N.a)(T.a.mark(function t(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.setState({submitting:!0}),t.next=4,e();case 4:r.setState({submitSuccess:!0,submitting:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r.setState({formError:t.t0,submitting:!1});case 10:case"end":return t.stop()}},t,this,[[0,7]])}))},r.writeTagsToCache=function(){var e=Object(N.a)(T.a.mark(function e(t,a){var n,o,c,s;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.data){e.next=3;break}return e.abrupt("return");case 3:if(o=n.createTag,!r.props.onTagCreated){e.next=8;break}r.props.onTagCreated(o),e.next=9;break;case 8:return e.abrupt("return");case 9:c={query:Q.a},e.prev=10,s=t.readQuery(c),t.writeQuery(Object(C.a)({},c,{data:g()(s,{tags:{$push:[o]}})})),e.next=20;break;case 15:if(e.prev=15,e.t0=e.catch(10),!e.t0.message.startsWith("Can't find field tags on object")){e.next=19;break}return e.abrupt("return");case 19:throw e.t0;case 20:case"end":return e.stop()}},e,this,[[10,15]])}));return function(t,r){return e.apply(this,arguments)}}(),r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.open,a=t.style,o=this.state,c=o.text,s=o.question,i=o.formError,u=o.submitting,l=o.submitSuccess;return d.a.createElement(A.a,{style:Object(C.a)({},a||{},{background:"#fff"}),basic:!0,size:"small",dimmer:"inverted",open:r,onClose:this.reset},d.a.createElement(M.a,{icon:"quote left",content:"Subject matter of quote"}),d.a.createElement(A.a.Content,null,this.renderErrorOrSuccess(),d.a.createElement(w.a,null,d.a.createElement(w.a.Field,{control:x.a,name:"tag",placeholder:"Tag text",label:"Tag text",fluid:!0,onChange:this.handleChange("text"),onFocus:this.handleFocus,error:!!i}),d.a.createElement(w.a.Field,{control:x.a,name:"question",placeholder:"Question",label:"Question",fluid:!0,onChange:this.handleChange("question"),onFocus:this.handleFocus,error:!!i})),d.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px"}},d.a.createElement(F.a,{id:"tag-modal-close",basic:!0,color:"red",onClick:this.reset,disabled:u},d.a.createElement(b.a,{name:"remove"})," Dismiss"),d.a.createElement(n.Mutation,{mutation:U,variables:{tag:{text:c,question:s}},update:this.writeTagsToCache},function(t){return d.a.createElement(F.a,{id:"tag-modal-submit",color:"green",inverted:!0,disabled:!!i||c.length<2||u||l,onClick:e.handleSubmit(t),loading:u},d.a.createElement(b.a,{name:"checkmark"})," Ok")}))))}}]),t}(d.a.Component),P=r(445),D=r(631),H=r(630),G=r(639),z=(r(588),r(361)),V=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).renderTags=function(e){var t=e.loading,a=e.data,n=e.error;if(n)return d.a.createElement("div",{className:"error-container",onClick:r.props.dismissModal},n.message);if(t)return d.a.createElement(H.a,{active:!0});var o=a?a.tags:null;return o&&o.length?d.a.createElement(G.a,{divided:!0,relaxed:!0},o.map(r.renderTag)):d.a.createElement(I.a,{className:"no-resources-message"},d.a.createElement(I.a.Content,null,'No tags for "current project"'))},r.renderTag=function(e){if(e){var t=e.id,a=e.text,n=e.question;return d.a.createElement(G.a.Item,{key:t,id:t,onClick:r.navigateTo(t)},d.a.createElement(G.a.Content,null,d.a.createElement("div",null,a),n&&d.a.createElement("div",{style:{paddingLeft:"10%",fontStyle:"italic"}},n)))}},r.resetModal=function(){r.props.dismissModal()},r.navigateTo=function(e){return function(){r.resetModal(),r.props.history.push(Object(j.n)(e))}},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.open;return d.a.createElement(z.d,{query:Q.a},function(r){return d.a.createElement(A.a,{className:"src-components-tags-modal",basic:!0,dimmer:"inverted",open:t,onClose:e.resetModal},d.a.createElement(A.a.Content,null,d.a.createElement("div",{id:"tag-list-modal-close",className:"modal-close",onClick:e.props.dismissModal},"\xd7"),e.renderTags(r)))})}}]),t}(d.a.Component),Y=Object(D.a)(V),K=(r(590),r(342)),J=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).renderSources=function(){var e=r.props,t=e.error,a=e.dismissModal;if(t)return d.a.createElement("div",{className:"error-container",onClick:a},t.message);if(r.props.loading)return d.a.createElement(H.a,{active:!0});var n=r.props,o=n.sources,c=n.currentProject;return o&&o.length?d.a.createElement(G.a,{divided:!0,relaxed:!0},o.map(r.renderSource)):d.a.createElement(I.a,{className:"no-resources-message"},d.a.createElement(I.a.Content,null,"No sources for ",' "'.concat(c&&c.title,'"')))},r.renderSource=function(e){if(e)return d.a.createElement(G.a.Item,{key:e.id,className:"list-item",onClick:r.navigateTo(e.id)},d.a.createElement(G.a.Content,null,Object(K.b)(e)))},r.resetModal=function(){r.props.dismissModal()},r.navigateTo=function(e){return function(){r.resetModal(),r.props.history.push(Object(j.m)(e))}},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return d.a.createElement(A.a,{id:"sources-modal",basic:!0,open:this.props.open,onClose:this.resetModal,dimmer:"inverted",className:"src-components-sources-modal"},d.a.createElement(A.a.Content,null,d.a.createElement("div",{id:"sources-modal-close",className:"modal-close",onClick:this.props.dismissModal},"\xd7"),this.renderSources()))}}]),t}(d.a.Component),X=r(125),Z=r(120),ee=function(e){return e?Object(C.a)({},e,{display:"".concat(Object(K.b)(e)," | ").concat(e.sourceType.name)}):{}},te=Object(n.graphql)(X.a,{props:function(e){var t=e.data;if(!t||!t.sources)return t;var r=t.sources;return Object(C.a)({},t,{sources:function(e){return e?e.map(ee):[]}(r)})},options:function(e){var t=e.currentProject;return{variables:{source:{projectId:t&&t.id||"0"}}}}}),re=Object(n.graphql)(Z.a,{props:function(e){return e.data}}),ae=Object(n.compose)(D.a,re,te)(J),ne=r(444),oe=r(126),ce=r(343),se=r(183),ie=r.n(se),ue={initialFormValues:{name:""},graphQlError:void 0,submitting:!1,submitSuccess:!1},le=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state=ue,r.validate=function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var o=a[n],c=r["validate".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))](e[o].trim());if(c)return t[o]=c,t}return t},r.validateName=function(e){return e?e.length<2?"Too short":"":"Enter source name"},r.renderErrorOrSuccess=function(){var e=r.state,t=e.graphQlError,a=e.submitSuccess;return t?d.a.createElement(I.a,{icon:!0,error:!0},d.a.createElement(b.a,{name:"ban"}),d.a.createElement(I.a.Content,null,d.a.createElement(I.a.Header,null,"An error has occurred"),t.message)):a?d.a.createElement(I.a,{error:!0,success:!0,content:"Source created successfully!"}):void 0},r.onResetClicked=function(e){return function(){e(),r.props.dismissModal()}},r.submit=function(){var e=Object(N.a)(T.a.mark(function e(t,a){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setSubmitting(!0),e.prev=1,e.next=4,r.props.createSourceType&&r.props.createSourceType(t.name.trim());case 4:r.setState({submitSuccess:!0}),a.resetForm(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),a.setSubmitting(!1),r.setState({graphQlError:e.t0});case 12:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t,r){return e.apply(this,arguments)}}(),r.renderForm=function(e){var t=e.handleReset,a=e.dirty,n=e.isSubmitting,o=e.errors,c=e.handleSubmit,s=!a||n||!ie()(o);return d.a.createElement(w.a,{onSubmit:c},[["Source Name","name"]].map(function(e){var t=Object(oe.a)(e,2),a=t[0],n=t[1];return d.a.createElement(ce.a,{key:n,name:n,render:r.renderInput(a)})}),d.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px"}},d.a.createElement(F.a,{id:"source-type-modal-close",basic:!0,color:"red",onClick:r.onResetClicked(t),disabled:n,type:"button"},d.a.createElement(b.a,{name:"remove"})," Dismiss"),d.a.createElement(F.a,{id:"source-type-modal-submit",color:"green",inverted:!0,disabled:s,loading:n,type:"submit"},d.a.createElement(b.a,{name:"checkmark"})," Ok")))},r.renderInput=function(e){return function(t){var a=t.field,n=t.form,o=a.name,c=n.errors[o],s=!!c,i=n.touched[o];return d.a.createElement("div",null,d.a.createElement(w.a.Field,Object.assign({control:x.a,placeholder:e,autoComplete:"off",label:e,id:o,error:s,onBlur:r.handleFormControlBlur(o,n),onFocus:r.handleFocus},a)),s&&i&&d.a.createElement(I.a,{style:{display:"block",padding:"0.5em",marginBottom:"1em",marginTop:"-10px"},error:!0,header:c}))}},r.handleFormControlBlur=function(e,t){return function(){t.setFieldTouched(e,!0)}},r.handleFocus=function(){r.setState({graphQlError:void 0,submitSuccess:!1})},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,r=e.style;return d.a.createElement(A.a,{style:Object(C.a)({},r||{},{background:"#fff"}),basic:!0,size:"small",dimmer:"inverted",open:t,onClose:this.onResetClicked(function(){return null})},d.a.createElement(M.a,{icon:"user",content:"Source Type Details"}),d.a.createElement(A.a.Content,null,this.renderErrorOrSuccess(),d.a.createElement(ce.b,{initialValues:this.state.initialFormValues,enableReinitialize:!0,onSubmit:this.submit,render:this.renderForm,validate:this.validate})))}}]),t}(d.a.Component),me=r(46);function de(){var e=Object(R.a)(["\n  mutation CreateSourceType($sourceType: CreateSourceTypeInput!) {\n    sourceType(sourceType: $sourceType) {\n      ...SourceTypeFrag\n    }\n  }\n\n  ","\n"]);return de=function(){return e},e}var pe=q()(de(),me.b),he=r(140),fe=r(76),be=Object(n.graphql)(fe.a,{props:function(e){return e.data}}),Ee=Object(n.graphql)(pe,{props:function(e){var t=e.mutate;if(e.ownProps.user)return{createSourceType:function(e){return t({variables:{sourceType:{name:e}},update:function(e,t){var r=t.data;if(r){var a=r.sourceType;if(!a){var n=e.readQuery({query:he.a}),o=g()(n,{sourceTypes:{$push:[a]}});e.writeQuery({query:he.a,data:o})}}}})}}}}),ve=Object(n.compose)(be,Ee)(le),ge=[j.b,j.i],Se=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(r=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state=S,r.context=void 0,r.renderSideBar=function(e){r.context=e;var t=e.onShowClicked,a=e.minWidth600,n="src-components-app-sidebar";a&&(n+=" pushable-min-width-600"),e.showSidebar&&(n+=" pushable-showing-sidebar");var o=r.props,c=o.match.path,s=o.currentProject;return m.createElement(p.a.Pushable,{as:h.a,className:n},m.createElement(p.a,{as:f.a,animation:"overlay",icon:"labeled",onHide:r.hideSidebar,vertical:!0,visible:e.showSidebar},a&&m.createElement("a",{className:"sidebar-trigger-sidebar item",onClick:t},m.createElement(b.a,{name:"content"})),s&&c!==j.e?m.createElement(f.a.Item,{as:E.a,to:Object(j.k)(),onClick:r.hideSidebar,className:"home-menu"},m.createElement(b.a,{name:"quote right"}),m.createElement("span",null,"Home")):void 0,c!==j.c?m.createElement(f.a.Item,{as:E.a,to:j.c,onClick:r.hideSidebar},m.createElement(b.a,{name:"gem"}),m.createElement("span",null,"Projects")):void 0,s&&c!==j.f?m.createElement(f.a.Item,{as:E.a,to:j.f,onClick:r.hideSidebar},m.createElement(b.a,{name:"search"}),m.createElement("span",null,"Search")):void 0,s&&m.createElement(f.a.Item,{onClick:r.toggleModalState(y.b.NEW_SOURCE,!0)},m.createElement(b.a,{name:"user"}),m.createElement("span",null,"New Source")),s&&m.createElement(f.a.Item,{onClick:r.toggleModalState(y.b.NEW_AUTHOR,!0)},m.createElement(b.a,{name:"user"}),m.createElement("span",null,"New Author")),s&&m.createElement(f.a.Item,{onClick:r.toggleModalState(y.b.NEW_TAG,!0)},m.createElement(b.a,{name:"tag"}),m.createElement("span",null,"New Tag")),s&&m.createElement(f.a.Item,{onClick:r.toggleModalState(y.b.NEW_SOURCE_TYPE,!0)},m.createElement(b.a,{name:"tree"}),m.createElement("span",null,"New Source Type")),s&&m.createElement(f.a.Item,{onClick:r.toggleModalState(y.b.TAG_LIST,!0)},m.createElement(b.a,{name:"numbered list"}),m.createElement("span",null,"List Tags")),s&&m.createElement(f.a.Item,{onClick:r.toggleModalState(y.b.SOURCE_LIST,!0)},m.createElement(b.a,{name:"numbered list"}),m.createElement("span",null,"List Sources")),ge.includes(c)?void 0:m.createElement(f.a.Item,{onClick:r.logout(r.hideSidebar)},m.createElement(b.a,{name:"sign-out"}),m.createElement("span",null,"Logout"))),m.createElement(p.a.Pusher,{style:{height:"100%"}},r.props.children),r.state.modalState[y.b.NEW_TAG]&&m.createElement($,{open:r.state.modalState[y.b.NEW_TAG],dismissModal:r.toggleModalState(y.b.NEW_TAG,!1),style:{marginTop:0},onTagCreated:r.props.onTagCreated}),r.state.modalState[y.b.NEW_SOURCE]&&m.createElement(P.a,{open:r.state.modalState[y.b.NEW_SOURCE],dismissModal:r.toggleModalState(y.b.NEW_SOURCE,!1),style:{marginTop:0}}),r.state.modalState[y.b.NEW_SOURCE_TYPE]&&m.createElement(ve,{open:r.state.modalState[y.b.NEW_SOURCE_TYPE],dismissModal:r.toggleModalState(y.b.NEW_SOURCE_TYPE,!1),style:{marginTop:0}}),r.state.modalState[y.b.SOURCE_LIST]&&m.createElement(ae,{open:r.state.modalState[y.b.SOURCE_LIST],dismissModal:r.toggleModalState(y.b.SOURCE_LIST,!1)}),r.state.modalState[y.b.TAG_LIST]&&m.createElement(Y,{open:r.state.modalState[y.b.TAG_LIST],dismissModal:r.toggleModalState(y.b.TAG_LIST,!1)}),r.state.modalState[y.b.NEW_AUTHOR]&&m.createElement(ne.a,{open:r.state.modalState[y.b.NEW_AUTHOR],modal:!0,dismissModal:r.toggleModalState(y.b.NEW_AUTHOR,!1)}))},r.logout=function(e){return function(){e(),r.props.history.replace(j.b)}},r.toggleModalState=function(e,t){return function(){t&&r.context&&r.hideSidebar(),r.setState(function(e){return g()(e,{modalState:{$set:S.modalState}})}),r.setState(function(r){return g()(r,{modalState:Object(o.a)({},e,{$set:t})})})}},r.hideSidebar=function(){if(r.context){var e=r.context,t=e.minWidth600,a=e.onHide;if(t)return;a()}},r}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.createElement(O.a,null,this.renderSideBar)}}]),t}(m.Component),Oe=r(133),je=Object(n.graphql)(Z.a,{props:function(e){return e.data}});t.a=Object(n.compose)(a.a,Oe.a,je)(Se)},355:function(e,t,r){},361:function(e,t,r){"use strict";r.d(t,"d",function(){return i}),r.d(t,"a",function(){return u}),r.d(t,"b",function(){return l}),r.d(t,"c",function(){return m});var a=r(60),n=r(62),o=r(61),c=r(63),s=r(16),i=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),t}(s.Query),u=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),t}(s.Query),l=(s.Query,function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),t}(s.Query)),m=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),t}(s.Query);s.Query},444:function(e,t,r){"use strict";var a,n,o=r(8),c=r.n(o),s=r(14),i=r(25),u=r(16),l=r(119),m=r.n(l),d=r(126),p=r(60),h=r(64),f=r(62),b=r(61),E=r(63),v=r(0),g=r.n(v),S=r(648),O=r(638),j=r(632),y=r(652),C=r(644),k=r(142),T=r(635),N=r(343),w=r(183),F=r.n(w),A=(r(592),r(51));!function(e){e.LAST_NAME="lastName",e.FIRST_NAME="firstName",e.MIDDLE_NAMES="middleName"}(n||(n={}));var x={initialFormOutput:(a={},Object(A.a)(a,n.LAST_NAME,""),Object(A.a)(a,n.FIRST_NAME,""),Object(A.a)(a,n.MIDDLE_NAMES,""),a),graphQlError:void 0,submitting:!1,createdAuthors:[]},M=r(342),I=r(445),R=function(e){function t(e){var r;Object(p.a)(this,t),(r=Object(f.a)(this,Object(b.a)(t).call(this,e))).contentRef=g.a.createRef(),r.renderContent=function(){return g.a.createElement("div",null,r.renderError(),g.a.createElement(N.b,{initialValues:r.state.initialFormOutput,enableReinitialize:!0,onSubmit:r.submit,render:r.renderForm,validate:r.validate}))},r.validate=function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var o=a[n],c=r["validate".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))](e[o]);if(c)return t[o]=c,t}return t},r.validateLastName=function(e){return e?e.length<2?"Too short":"":"Enter last name"},r.validateFirstName=function(e){return""},r.validateMiddleName=function(e){return""},r.renderError=function(){var e=r.state.graphQlError;if(e)return g.a.createElement(C.a,{icon:!0,error:!0},g.a.createElement(k.a,{name:"ban"}),g.a.createElement(C.a.Content,null,g.a.createElement(C.a.Header,null,"An error has occurred"),e.message))},r.onResetClicked=function(e){return function(){e(),r.props.dismissModal()}},r.submit=function(){var e=Object(s.a)(c.a.mark(function e(t,a){var n,o,s,i,u,l,m,d;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setSubmitting(!0),n=r.state.author,o=r.props,s=o.onAuthorCreated,i=o.createAuthor,u=o.authorUpdate,e.prev=3,n){e.next=12;break}return e.next=7,i&&i(r.eliminateEmptyFields(t));case 7:(l=e.sent)&&l.data&&l.data.createAuthor&&(m=l.data.createAuthor,s?s(m):r.handleAuthorCreated(m)),a.resetForm(),e.next=19;break;case 12:return e.next=14,u&&u(n.id,r.prepFormForUpdate(t));case 14:if(!((d=e.sent)&&d.data&&d.data.updateAuthor)){e.next=19;break}return s&&s(d.data.updateAuthor),r.props.dismissModal(),e.abrupt("return");case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(3),a.setSubmitting(!1),r.setState({graphQlError:e.t0});case 25:case"end":return e.stop()}},e,this,[[3,21]])}));return function(t,r){return e.apply(this,arguments)}}(),r.renderForm=function(e){var t=e.handleReset,a=e.dirty,o=e.isSubmitting,c=e.errors,s=e.handleSubmit,i=!a||o,u=i||!F()(c);return g.a.createElement("div",null,g.a.createElement(T.a,{onSubmit:s},[["Last Name",n.LAST_NAME],["First Name",n.FIRST_NAME],["Middle Names",n.MIDDLE_NAMES]].map(function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];return g.a.createElement(N.a,{key:n,name:n,render:r.renderInput(a)})}),g.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"20px"}},g.a.createElement(S.a,{id:"author-modal-close",basic:!0,color:"red",onClick:r.onResetClicked(t),disabled:o,type:"button"},g.a.createElement(k.a,{name:"remove"})," Dismiss"),g.a.createElement(S.a,{id:"author-modal-reset",color:"olive",basic:!0,disabled:i,onClick:t,type:"button"},g.a.createElement(k.a,{name:"repeat"})," Reset"),g.a.createElement(S.a,{id:"author-modal-submit",color:"green",inverted:!0,disabled:u,loading:o,type:"submit"},g.a.createElement(k.a,{name:"checkmark"})," Ok"))))},r.renderInput=function(e){return function(t){var a=t.field,n=t.form,o=a.name,c=n.errors[o],s=!!c,i=n.touched[o];return g.a.createElement("div",null,g.a.createElement(T.a.Field,Object.assign({control:j.a,placeholder:e,autoComplete:"off",label:e,id:o,error:s,onBlur:r.handleFormControlBlur(o,n),onFocus:r.handleFocus},a)),s&&i&&g.a.createElement(C.a,{style:{display:"block",padding:"0.5em",marginBottom:"1em",marginTop:"-10px"},error:!0,header:c}))}},r.handleFormControlBlur=function(e,t){return function(){t.setFieldTouched(e,!0)}},r.handleFocus=function(){r.setState({graphQlError:void 0})},r.eliminateEmptyFields=function(e){for(var t={},r=Object.entries(e),a=0;a<r.length;a++){var n=r[a],o=Object(d.a)(n,2),c=o[0],s=o[1];s&&(s=s.trim())&&(t[c]=s)}return t},r.prepFormForUpdate=function(e){for(var t={},r=Object.entries(e),a=0;a<r.length;a++){var n=r[a],o=Object(d.a)(n,2),c=o[0],s=o[1];t[c]=s.trim()||null}return t},r.initStateWithAuthor=function(e){var t={};Object.values(n).forEach(function(r){var a=e[r];t[r]=a||""}),r.state=m()(r.state,{initialFormOutput:{$set:t},author:{$set:e}})},r.renderAuthorCreated=function(){var e=r.state.createdAuthors,t=e.length;if(t)return g.a.createElement(C.a,{success:!0},g.a.createElement(C.a.Header,{className:"authors-display-header"},g.a.createElement("span",{className:"label"},"New author",1===t?"":"s"," (",t,"):"),g.a.createElement(S.a,{compact:!0,className:"go-create-source",onClick:r.showCreateSourceModal},"Create source?")),g.a.createElement("ol",{className:"authors-list"},e.map(r.renderAuthor)))},r.renderAuthor=function(e){return g.a.createElement("li",{key:e.id},Object(M.a)(e))},r.showCreateSourceModal=function(){return r.setState({showSourceModal:!0})},r.handleAuthorCreated=function(e){r.setState(function(t){return m()(t,{createdAuthors:{$push:[e]}})}),r.contentRef.current&&(r.contentRef.current.scrollTop=0)},r.state=m()(x,{open:{$set:e.open}});var a=e.author;return a&&r.initStateWithAuthor(a),r}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.style,r=e.modal,a=this.state,n=a.open,o=a.showSourceModal,c=a.createdAuthors;return o&&c.length?g.a.createElement(I.a,{open:!0,authors:c}):r?g.a.createElement(O.a,{style:Object(i.a)({},t||{},{background:"#fff"}),className:"src-components-new-author-modal",basic:!0,size:"small",dimmer:"inverted",open:n,onClose:this.onResetClicked(function(){return null})},g.a.createElement("div",{className:"new-author-content",ref:this.contentRef},g.a.createElement(O.a.Content,null,this.renderAuthorCreated(),g.a.createElement(y.a,{icon:"user",content:"Author Details"}),this.renderContent()))):this.renderContent()}}]),t}(g.a.Component),_=r(4),q=r(5),W=r.n(q),B=r(84);function U(){var e=Object(_.a)(["\n  mutation CreateAuthor($author: CreateAuthorInput!) {\n    createAuthor(author: $author) {\n      ...AuthorFrag\n    }\n  }\n\n  ","\n"]);return U=function(){return e},e}var Q=W()(U(),B.b),L=r(141),$=r(76),P=r(120);function D(){var e=Object(_.a)(["\n  mutation AuthorUpdate($author: UpdateAuthorInput!) {\n    updateAuthor(author: $author) {\n      ...AuthorFrag\n    }\n  }\n\n  ","\n"]);return D=function(){return e},e}var H=W()(D(),B.a),G=Object(u.graphql)(Q,{props:function(e){var t=e.mutate,r=e.ownProps,a=r.currentProject,n=r.user;if(a&&n){var o=a.id;return{createAuthor:function(e){return t({variables:{author:Object(i.a)({},e,{projectId:o,userId:n.id})},update:function(){var e=Object(s.a)(c.a.mark(function e(t,r){var a,n,s,u,l,d;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.data){e.next=3;break}return e.abrupt("return");case 3:if(n=a.createAuthor){e.next=6;break}return e.abrupt("return");case 6:s={query:L.a,variables:{author:{projectId:o}}},e.prev=7,u=t.readQuery(s),l=m()(u,{authors:{$push:[n]}}),t.writeQuery(Object(i.a)({},s,{data:l})),e.next=19;break;case 13:if(e.prev=13,e.t0=e.catch(7),d='Can\'t find field authors({"author":{"projectId":"'.concat(o,'"}})'),!e.t0.message.startsWith(d)){e.next=18;break}return e.abrupt("return");case 18:throw e.t0;case 19:case"end":return e.stop()}},e,this,[[7,13]])}));return function(t,r){return e.apply(this,arguments)}}()})}}}}}),z=Object(u.graphql)($.a,{props:function(e){return e.data}}),V=Object(u.graphql)(P.a,{props:function(e){return e.data}}),Y=Object(u.graphql)(H,{props:function(e){var t=e.mutate;return{authorUpdate:function(e,r){return t({variables:{author:Object(i.a)({id:e},r)}})}}}});t.a=Object(u.compose)(V,z,G,Y)(R)},445:function(e,t,r){"use strict";var a=r(25),n=r(631),o=r(16),c=r(343),s=r(119),i=r.n(s),u=r(8),l=r.n(u),m=r(14),d=r(60),p=r(64),h=r(62),f=r(61),b=r(63),E=r(0),v=r.n(E),g=r(635),S=r(648),O=r(142),j=r(652),y=r(644),C=r(632),k=r(638),T=r(640),N=r(183),w=r.n(N),F=r(342),A=r(447),x=r(448),M=r(11),I=r(340),R=r.n(I),_=r(341),q=r.n(_),W=r(345);R.a.setup(q()());var B={modal:{marginTop:0,background:"#fff"},form:{height:"100%",overflowX:"hidden",overflowY:"auto",paddingRight:10},fieldWrapper:{marginBottom:"1em"},formButtonsContainer:{display:"flex",marginBottom:"15px"},submitButton:{margin:"0 15px"},successCard:{backgroundColor:"#fcfff5",boxShadow:"0 0 0 1px #a3c293 inset, 0 0 0 0 transparent",margin:"auto"},errorMessage:{position:"relative",top:-10,color:W.b}},U=B.modal,Q=R.a.createStyleSheet(B).attach().classes,L={sourceType:null,authors:[],topic:"",publication:"",url:"",year:""},$={open:!0},P={handleSubmit:function(){var e=Object(m.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),mapPropsToValues:function(e){var t=(e.authors||[]).map(function(e){return Object(a.a)({},e,{fullName:Object(F.a)(e)})});return Object(a.a)({},L,{authors:t})},enableReinitialize:!0,validate:function(e){var t={};return e.sourceType?e.authors&&e.authors.length?e.topic&&e.topic.trim()||(t.topic="Enter source topic according to author(s)"):t.authors="Select at least one author":t.sourceType="Select a source type",t}},D=function(e){function t(){var e,r;Object(d.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state=$,r.submit=Object(m.a)(l.a.mark(function e(){var t,a,n,o,c,s,i,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props,a=t.createSource,n=t.values,o=t.setSubmitting,c=t.resetForm,a){e.next=4;break}return r.setState({formError:{message:"You have not selected a project"}}),e.abrupt("return");case 4:return o(!0),e.prev=5,e.next=8,a(n);case 8:if(s=e.sent,o(!1),c(),s){e.next=13;break}return e.abrupt("return");case 13:if(i=s.data){e.next=16;break}return e.abrupt("return");case 16:u=i.createSource,r.setState({source:u}),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(5),r.setState({formError:e.t0}),o(!1);case 24:case"end":return e.stop()}},e,this,[[5,20]])})),r.renderForm=function(){var e=r.props,t=e.handleReset,a=e.dirty,n=e.isSubmitting,o=e.errors,s=!a||n,i=s||!w()(o);return v.a.createElement(g.a,{className:Q.form,onSubmit:r.submit},v.a.createElement(c.a,{name:"sourceType",render:r.renderSourceTypeControl}),v.a.createElement(c.a,{name:"authors",render:r.renderAuthorsControl}),[{name:"topic"},{name:"year"},{name:"publication"},{name:"url"}].map(r.renderTextControl),v.a.createElement("div",{className:Q.formButtonsContainer},v.a.createElement(S.a,{id:"source-modal-close",basic:!0,color:"red",onClick:r.resetModal,disabled:n,type:"button"},v.a.createElement(O.a,{name:"remove"})," Dismiss"),v.a.createElement(S.a,{id:"source-modal-submit",style:B.submitButton,color:"green",disabled:i,loading:n},v.a.createElement(O.a,{name:"checkmark"})," Ok"),v.a.createElement(S.a,{basic:!0,color:"red",onClick:t,disabled:s},v.a.createElement(O.a,{name:"remove"})," Reset")))},r.resetModal=Object(m.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.setState($);case 2:r.dismissModal();case 3:case"end":return e.stop()}},e,this)})),r.renderErrorOrSuccess=function(){var e=r.state,t=e.formError,a=e.source;return t?v.a.createElement(y.a,{icon:!0,error:!0},v.a.createElement(O.a,{name:"ban"}),v.a.createElement(y.a.Content,null,v.a.createElement(y.a.Header,null,"An error has occurred"),t.message)):a?v.a.createElement(T.a,{style:B.successCard},v.a.createElement(T.a.Content,null,v.a.createElement(T.a.Header,{style:{color:"#a3c293"}},"Success"),v.a.createElement(T.a.Description,null,Object(F.b)(a)),v.a.createElement(T.a.Content,{extra:!0},v.a.createElement("div",{className:"ui two buttons"},v.a.createElement(S.a,{basic:!0,color:"green",onClick:r.goToSource(a.id)},"Go to source"),v.a.createElement(S.a,{basic:!0,color:"red",onClick:r.resetModal},"Dismiss"))))):void 0},r.handleFocus=function(){return r.setState({formError:void 0,source:void 0})},r.renderSourceTypeControl=function(e){var t=e.field,a=t.name,n=t.value,o=e.form,c=o.errors[a],s=!!c,i=o.touched[a];return v.a.createElement("div",{className:Q.fieldWrapper},v.a.createElement(g.a.Field,{control:A.a,label:"Select source type",error:s,selectError:s,name:a,value:n,onFocus:r.handleFocus,handleBlur:r.handleFormControlBlur(a,o),handleChange:r.handleControlChange(a,o)}),r.renderFieldError(s&&i,c))},r.renderAuthorsControl=function(e){var t=e.field,a=t.name,n=t.value,o=e.form,c=o.errors[a],s=!!c,i=o.touched[a];return v.a.createElement("div",{className:Q.fieldWrapper},v.a.createElement(g.a.Field,{control:x.a,label:"Select authors",error:s,selectError:s,onFocus:r.handleFocus,name:a,value:n,handleBlur:r.handleFormControlBlur(a,o),handleChange:r.handleControlChange(a,o)}),r.renderFieldError(s&&i,c))},r.renderTextControl=function(e){var t=e.name,a=e.label;return a=a||t.charAt(0).toUpperCase()+t.slice(1),v.a.createElement(c.a,{key:t,name:t,render:r.renderTextControlFormik(a)})},r.renderTextControlFormik=function(e){return function(t){var a=t.field,n=t.form,o=a.name,c=n.errors[o],s=!!c,i=n.touched[o];return v.a.createElement("div",{className:Q.fieldWrapper},v.a.createElement(g.a.Field,Object.assign({control:C.a,placeholder:e,label:e,id:o,error:s,autoComplete:"off",onFocus:r.handleFocus},a)),r.renderFieldError(s&&i,c))}},r.renderFieldError=function(e,t){return e?v.a.createElement("div",{className:Q.errorMessage}," ",t," "):void 0},r.handleFormControlBlur=function(e,t){return function(){t.setFieldTouched(e,!0)}},r.handleControlChange=function(e,t){return function(r){return t.setFieldValue(e,r)}},r.goToSource=function(e){return Object(m.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.setState($);case 2:r.dismissModal(),r.props.history.push(Object(M.m)(e));case 4:case"end":return t.stop()}},t,this)}))},r.dismissModal=function(){var e=r.props.dismissModal;e?e():r.setState({open:!1})},r}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.open,r=e.style,n=e.dismissModal?t:this.state.open;return v.a.createElement(k.a,{style:Object(a.a)({},r||{},U),basic:!0,size:"small",dimmer:"inverted",open:n,onClose:this.resetModal},this.renderErrorOrSuccess(),v.a.createElement(j.a,{icon:"user",content:"Create quote source"}),v.a.createElement(k.a.Content,null,this.renderForm()))}}]),t}(v.a.Component),H=r(4),G=r(5),z=r.n(G),V=r(70);function Y(){var e=Object(H.a)(["\n  mutation CreateSource($source: CreateSourceInput!) {\n    createSource(source: $source) {\n      ...SourceFullFrag\n    }\n  }\n  ","\n"]);return Y=function(){return e},e}var K=z()(Y(),V.b),J=r(125),X=r(120),Z=Object(o.graphql)(X.a,{props:function(e){return e.data}}),ee=Object(o.graphql)(K,{props:function(e){var t=e.mutate;if(t){var r=e.ownProps.currentProject;if(r){var n=r.id;return{createSource:function(e){var r={source:{sourceTypeId:e.sourceType&&e.sourceType.id||"0",authorIds:e.authors.map(function(e){return e.id}),topic:e.topic.trim(),publication:e.publication.trim()||null,url:e.url.trim()||null,year:e.year.trim()||null,projectId:n}};return t({variables:r,update:function(e,t){var r=t.data;if(r){var o=r.createSource;if(o){var c={query:J.a,variables:{source:{projectId:n}}};try{var s=e.readQuery(c),u=i()(s,{sources:{$push:[o]}});e.writeQuery(Object(a.a)({},c,{data:u}))}catch(l){if(!l.message.startsWith('Can\'t find field sources({"source":{"projectId":"'.concat(n,'"}})')))throw l}}}}})}}}}}});t.a=Object(o.compose)(Z,n.a,ee,Object(c.c)(P))(D)},447:function(e,t,r){"use strict";var a=r(60),n=r(64),o=r(62),c=r(61),s=r(63),i=r(370),u=r(0),l=r.n(u),m=r(361),d=r(140),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.value,a=e.selectError,n=e.handleChange,o=e.handleBlur;return l.a.createElement(m.b,{query:d.a},function(e){var c=e.data,s=[];return c&&(s=c.sourceTypes),l.a.createElement(i.a,{className:"".concat(a?"error":""),id:t,name:t,placeholder:"Select source type",options:s,onChange:n,onBlur:o,value:r,labelKey:"name",valueKey:"id"})})}}]),t}(l.a.Component);t.a=p},448:function(e,t,r){"use strict";var a=r(16),n=r(120),o=r(25),c=r(60),s=r(64),i=r(62),u=r(61),l=r(63),m=r(370),d=r(0),p=r.n(d),h=r(361),f=r(141),b=r(342),E=r(56),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.value,a=e.selectError,n=e.handleChange,c=e.handleBlur,s=e.loading,i=e.currentProject;return s||!i?p.a.createElement(E.a,null):p.a.createElement(h.a,{query:f.a,variables:{author:{projectId:i.id}}},function(e){var s=e.data,i=(s&&s.authors||[]).reduce(function(e,t){return t&&e.push(Object(o.a)({},t,{fullName:Object(b.a)(t)})),e},[]);return p.a.createElement(m.a,{className:"".concat(a?"error":""),id:t,name:t,placeholder:"Select authors",options:i,multi:!0,autoBlur:!0,onChange:n,onBlur:c,value:r,labelKey:"fullName",valueKey:"id"})})}}]),t}(p.a.Component),g=Object(a.graphql)(n.a,{props:function(e){return e.data}});t.a=g(v)},492:function(e,t,r){},588:function(e,t,r){},590:function(e,t,r){},592:function(e,t,r){}}]);
//# sourceMappingURL=./2.8cfc0eb1.chunk.js-4f96a15fc698d7d01e95ad93ced508a1.map