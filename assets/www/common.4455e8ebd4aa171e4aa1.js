(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(e,t,i){"use strict";i.d(t,"a",(function(){return createColorClasses})),i.d(t,"b",(function(){return getClassMap})),i.d(t,"c",(function(){return hostContext})),i.d(t,"d",(function(){return openURL}));const hostContext=(e,t)=>null!==t.closest(e),createColorClasses=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,getClassMap=e=>{const t={};return(e=>{if(void 0!==e)return(Array.isArray(e)?e:e.split(" ")).filter((e=>null!=e)).map((e=>e.trim())).filter((e=>""!==e));return[]})(e).forEach((e=>t[e]=!0)),t},n=/^[a-z][a-z0-9+\-.]*:/,openURL=async(e,t,i,r)=>{if(null!=e&&"#"!==e[0]&&!n.test(e)){const n=document.querySelector("ion-router");if(n)return null!=t&&t.preventDefault(),n.push(e,i,r)}return!1}},WwyG:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("L3Fv"),r=i("iCrd"),a=i("PM4H"),c=i("fXoL");let s=(()=>{class CoreUserParticipantsPageModule{}return CoreUserParticipantsPageModule.ɵmod=c.wc({type:CoreUserParticipantsPageModule}),CoreUserParticipantsPageModule.ɵinj=c.vc({factory:function CoreUserParticipantsPageModule_Factory(e){return new(e||CoreUserParticipantsPageModule)},imports:[[n.a,a.a]]}),CoreUserParticipantsPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&c.kd(s,{declarations:[r.a],imports:[n.a,a.a]}))},YyYz:function(e,t,i){"use strict";i.d(t,"a",(function(){return CoreMainMenuDeepLinkManager}));var n=i("mrSG"),r=i("vnm2"),a=i("ULAo"),c=i("GBcW"),s=i("pHTc");class CoreMainMenuDeepLinkManager{constructor(){const e=s.a.getRouteParam("urlToOpen"),t=s.a.getRouteParam("redirectPath");(e||t)&&(this.pendingRedirect={redirectPath:t,redirectOptions:s.a.getRouteParam("redirectOptions"),urlToOpen:e})}hasDeepLinkToTreat(){var e,t;return!!(null===(e=this.pendingRedirect)||void 0===e?void 0:e.urlToOpen)||!!(null===(t=this.pendingRedirect)||void 0===t?void 0:t.redirectPath)}treatLink(){this.pendingRedirect&&(this.pendingRedirect.redirectPath?this.treatPath(this.pendingRedirect.redirectPath,this.pendingRedirect.redirectOptions):this.pendingRedirect.urlToOpen&&this.treatUrlToOpen(this.pendingRedirect.urlToOpen),delete this.pendingRedirect)}treatPath(e,t={}){const i=t.params,n=e.match(/^course\/(\d+)\/?$/);n?(null==i?void 0:i.course)?a.a.openCourse(i.course,t):c.a.getAndOpenCourse(Number(n[1]),i):s.a.navigateToSitePath(e,Object.assign(Object.assign({},t),{preferCurrentTab:!1}))}treatUrlToOpen(e){var t;return Object(n.a)(this,void 0,void 0,(function*(){const i=yield r.a.getFirstValidActionFor(e);(null===(t=null==i?void 0:i.sites)||void 0===t?void 0:t[0])&&i.action(i.sites[0])}))}}},Zcj0:function(e,t,i){"use strict";i.d(t,"a",(function(){return createButtonActiveGesture}));var n=i("wEJo"),r=i("qULd"),a=i("KF81");const createButtonActiveGesture=(e,t)=>{let i,c;const activateButtonAtPoint=(e,n,r)=>{if("undefined"==typeof document)return;const a=document.elementFromPoint(e,n);if(!a||!t(a))return clearActiveButton(),void 0;a!==i&&(clearActiveButton(),setActiveButton(a,r))},setActiveButton=(e,t)=>{i=e,c||(c=i);const r=i;Object(n.f)((()=>r.classList.add("ion-activated"))),t()},clearActiveButton=(e=!1)=>{if(!i)return;const t=i;Object(n.f)((()=>t.classList.remove("ion-activated"))),e&&c!==i&&i.click(),i=void 0};return Object(a.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>activateButtonAtPoint(e.currentX,e.currentY,r.a),onMove:e=>activateButtonAtPoint(e.currentX,e.currentY,r.b),onEnd:()=>{clearActiveButton(!0),Object(r.e)(),c=void 0}})}},dQ3M:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i("L3Fv"),r=i("C1x5"),a=i("EOS8"),c=i("ho2i"),s=i("rxSe"),o=i("fXoL");let l=(()=>{class CoreMainMenuComponentsModule{}return CoreMainMenuComponentsModule.ɵmod=o.wc({type:CoreMainMenuComponentsModule}),CoreMainMenuComponentsModule.ɵinj=o.vc({factory:function CoreMainMenuComponentsModule_Factory(e){return new(e||CoreMainMenuComponentsModule)},imports:[[n.a,c.a]]}),CoreMainMenuComponentsModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&o.kd(l,{declarations:[r.a,a.a,s.a],imports:[n.a,c.a],exports:[r.a,a.a,s.a]}))},h3R7:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={bubbles:{dur:1e3,circles:9,fn:(e,t,i)=>{const n=e*t/i-e+"ms",r=2*Math.PI*t/i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,i)=>{const n=t/i,r=e*n-e+"ms",a=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/i-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/i-e+"ms"}})}}},iCrd:function(e,t,i){"use strict";i.d(t,"a",(function(){return U}));var n=i("mrSG"),r=i("nvXB"),a=i("3LXp"),c=i("pHTc"),s=i("EoRH"),o=i("46ml"),l=i("4pns"),u=i("bFG1"),p=i("xtzZ"),_=i("baaQ"),d=i("fXoL"),g=i("nt/U"),f=i("TEn/"),h=i("9zps"),m=i("PgjG"),P=i("ofXK"),C=i("xpMl"),y=i("r8G5"),v=i("FeAf"),M=i("hMzs"),b=i("sYmb"),I=i("lAaw");function CoreUserParticipantsPage_core_empty_box_7_Template(e,t){1&e&&(d.zc(0,"core-empty-box",8),d.Pc(1,"translate")),2&e&&d.Vc("message",d.Qc(1,1,"core.user.noparticipants"))}function CoreUserParticipantsPage_core_empty_box_8_Template(e,t){1&e&&(d.zc(0,"core-empty-box",9),d.Pc(1,"translate")),2&e&&d.Vc("message",d.Qc(1,1,"core.noresults"))}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_4_Template(e,t){if(1&e&&(d.Cc(0),d.pd(1),d.Pc(2,"coreTimeAgo"),d.Bc()),2&e){const e=d.Oc(3).$implicit;d.lc(1),d.rd("",d.Qc(2,1,e.lastcourseaccess)," ")}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_5_Template(e,t){1&e&&(d.Cc(0),d.pd(1),d.Pc(2,"translate"),d.Bc()),2&e&&(d.lc(1),d.qd(d.Qc(2,1,"core.never")))}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_Template(e,t){if(1&e&&(d.Ec(0,"p"),d.Ec(1,"strong"),d.pd(2),d.Pc(3,"translate"),d.Dc(),d.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_4_Template,3,3,"ng-container",6),d.nd(5,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_5_Template,3,3,"ng-container",6),d.Dc()),2&e){const e=d.Oc(2).$implicit;d.lc(2),d.rd("",d.Qc(3,3,"core.user.lastcourseaccess"),": "),d.lc(2),d.Vc("ngIf",e.lastcourseaccess),d.lc(1),d.Vc("ngIf",!e.lastcourseaccess)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_4_Template(e,t){if(1&e&&(d.Cc(0),d.pd(1),d.Pc(2,"coreTimeAgo"),d.Bc()),2&e){const e=d.Oc(3).$implicit;d.lc(1),d.qd(d.Qc(2,1,e.lastaccess))}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_5_Template(e,t){1&e&&(d.Cc(0),d.pd(1),d.Pc(2,"translate"),d.Bc()),2&e&&(d.lc(1),d.qd(d.Qc(2,1,"core.never")))}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_Template(e,t){if(1&e&&(d.Ec(0,"p"),d.Ec(1,"strong"),d.pd(2),d.Pc(3,"translate"),d.Dc(),d.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_4_Template,3,3,"ng-container",6),d.nd(5,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_5_Template,3,3,"ng-container",6),d.Dc()),2&e){const e=d.Oc(2).$implicit;d.lc(2),d.rd("",d.Qc(3,3,"core.lastaccess"),": "),d.lc(2),d.Vc("ngIf",e.lastaccess),d.lc(1),d.Vc("ngIf",!e.lastaccess)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_Template(e,t){if(1&e&&(d.Cc(0),d.Ec(1,"p",13),d.pd(2),d.Dc(),d.nd(3,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_Template,6,5,"p",6),d.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_Template,6,5,"p",6),d.Bc()),2&e){const e=d.Oc().$implicit;d.lc(2),d.qd(e.fullname),d.lc(1),d.Vc("ngIf",void 0!==e.lastcourseaccess),d.lc(1),d.Vc("ngIf",void 0===e.lastcourseaccess&&void 0!==e.lastaccess)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_4_Template(e,t){if(1&e&&(d.Cc(0),d.Ec(1,"p",13),d.zc(2,"core-format-text",14),d.Dc(),d.Bc()),2&e){const e=d.Oc().$implicit,t=d.Oc(2);d.lc(2),d.Vc("text",e.fullname)("highlight",t.searchQuery)("filter",!1)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_Template(e,t){if(1&e){const e=d.Fc();d.Ec(0,"ion-item",11),d.Mc("click",(function CoreUserParticipantsPage_ion_list_9_ion_item_1_Template_ion_item_click_0_listener(){d.fd(e);const i=t.$implicit;return d.Oc(2).participants.select(i)})),d.zc(1,"core-user-avatar",12),d.Ec(2,"ion-label"),d.nd(3,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_Template,5,3,"ng-container",6),d.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_4_Template,3,3,"ng-container",6),d.Dc(),d.Dc()}if(2&e){const e=t.$implicit,i=d.Oc(2);d.mc("aria-current",i.participants.getItemAriaCurrent(e))("aria-label",e.fullname),d.lc(1),d.Vc("user",e)("linkProfile",!1)("checkOnline",!0),d.lc(2),d.Vc("ngIf",!i.searchQuery),d.lc(1),d.Vc("ngIf",i.searchQuery)}}function CoreUserParticipantsPage_ion_list_9_Template(e,t){if(1&e&&(d.Ec(0,"ion-list"),d.nd(1,CoreUserParticipantsPage_ion_list_9_ion_item_1_Template,5,7,"ion-item",10),d.Dc()),2&e){const e=d.Oc();d.lc(1),d.Vc("ngForOf",e.participants.items)}}let U=(()=>{class CoreUserParticipantsPage{constructor(){this.searchQuery=null,this.searchInProgress=!1,this.searchEnabled=!1,this.fetchMoreParticipantsFailed=!1;try{this.courseId=c.a.getRequiredRouteNumberParam("courseId"),this.participants=new CoreUserParticipantsManager(_.a.getOrCreateSource(p.a,[this.courseId]),CoreUserParticipantsPage)}catch(e){return a.a.showErrorModal(e),c.a.back(),void 0}}ngOnInit(){return Object(n.a)(this,void 0,void 0,(function*(){this.searchEnabled=yield l.a.canSearchParticipantsInSite()}))}ngAfterViewInit(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.fetchInitialParticipants(),yield this.participants.start(this.splitView)}))}ionViewDidEnter(){return Object(n.a)(this,void 0,void 0,(function*(){yield this.participants.start()}))}ngOnDestroy(){this.participants.destroy()}clearSearch(){return Object(n.a)(this,void 0,void 0,(function*(){if(null===this.searchQuery)return;const e=_.a.getOrCreateSource(p.a,[this.courseId]);this.searchQuery=null,this.searchInProgress=!1,this.participants.setSource(e),yield this.fetchInitialParticipants()}))}search(e){return Object(n.a)(this,void 0,void 0,(function*(){r.a.closeKeyboard();const t=_.a.getOrCreateSource(p.a,[this.courseId,e]);this.searchInProgress=!0,this.searchQuery=e,this.participants.setSource(t),yield this.fetchInitialParticipants(),this.searchInProgress=!1}))}refreshParticipants(e){return Object(n.a)(this,void 0,void 0,(function*(){yield u.a.ignoreErrors(l.a.invalidateParticipantsList(this.courseId)),yield u.a.ignoreErrors(this.fetchParticipants(!0)),null==e||e.complete()}))}fetchMoreParticipants(e){return Object(n.a)(this,void 0,void 0,(function*(){try{yield this.fetchParticipants(!1)}catch(e){a.a.showErrorModalDefault(e,"Error loading more participants"),this.fetchMoreParticipantsFailed=!0}e()}))}fetchInitialParticipants(){return Object(n.a)(this,void 0,void 0,(function*(){try{yield this.fetchParticipants(!0)}catch(e){a.a.showErrorModalDefault(e,"Error loading participants"),this.participants.reset()}}))}fetchParticipants(e){return Object(n.a)(this,void 0,void 0,(function*(){e?yield this.participants.reload():yield this.participants.load(),this.fetchMoreParticipantsFailed=!1}))}}return CoreUserParticipantsPage.ɵfac=function CoreUserParticipantsPage_Factory(e){return new(e||CoreUserParticipantsPage)},CoreUserParticipantsPage.ɵcmp=d.sc({type:CoreUserParticipantsPage,selectors:[["page-core-user-participants"]],viewQuery:function CoreUserParticipantsPage_Query(e,t){var i;(1&e&&d.ud(o.a,!0),2&e)&&(d.dd(i=d.Nc())&&(t.splitView=i.first))},decls:11,vars:13,consts:[["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],["autocorrect","off","searchArea","CoreUserParticipants",3,"disabled","spellcheck","lengthCheck","onSubmit","onClear"],[3,"hideUntil"],["icon","far-user",3,"message",4,"ngIf"],["icon","fas-magnifying-glass",3,"message",4,"ngIf"],[4,"ngIf"],[3,"enabled","error","action"],["icon","far-user",3,"message"],["icon","fas-magnifying-glass",3,"message"],["class","ion-text-wrap","button","","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",1,"ion-text-wrap",3,"click"],["slot","start",3,"user","linkProfile","checkOnline"],[1,"item-heading"],[3,"text","highlight","filter"]],template:function CoreUserParticipantsPage_Template(e,t){1&e&&(d.Ec(0,"ion-content"),d.Ec(1,"core-split-view"),d.Ec(2,"ion-refresher",0),d.Mc("ionRefresh",(function CoreUserParticipantsPage_Template_ion_refresher_ionRefresh_2_listener(e){return t.refreshParticipants(e.target)})),d.zc(3,"ion-refresher-content",1),d.Pc(4,"translate"),d.Dc(),d.Ec(5,"core-search-box",2),d.Mc("onSubmit",(function CoreUserParticipantsPage_Template_core_search_box_onSubmit_5_listener(e){return t.search(e)}))("onClear",(function CoreUserParticipantsPage_Template_core_search_box_onClear_5_listener(){return t.clearSearch()})),d.Dc(),d.Ec(6,"core-loading",3),d.nd(7,CoreUserParticipantsPage_core_empty_box_7_Template,2,3,"core-empty-box",4),d.nd(8,CoreUserParticipantsPage_core_empty_box_8_Template,2,3,"core-empty-box",5),d.nd(9,CoreUserParticipantsPage_ion_list_9_Template,2,1,"ion-list",6),d.Ec(10,"core-infinite-loading",7),d.Mc("action",(function CoreUserParticipantsPage_Template_core_infinite_loading_action_10_listener(e){return t.fetchMoreParticipants(e)})),d.Dc(),d.Dc(),d.Dc(),d.Dc()),2&e&&(d.lc(2),d.Vc("disabled",!t.participants.loaded||t.searchInProgress),d.lc(1),d.Wc("pullingText",d.Qc(4,11,"core.pulltorefresh")),d.lc(2),d.Vc("disabled",t.searchInProgress)("spellcheck",!1)("lengthCheck",1),d.lc(1),d.Vc("hideUntil",t.participants.loaded),d.lc(1),d.Vc("ngIf",t.participants.empty&&!t.searchInProgress&&!t.searchQuery),d.lc(1),d.Vc("ngIf",t.participants.empty&&!t.searchInProgress&&t.searchQuery),d.lc(1),d.Vc("ngIf",!t.participants.empty),d.lc(1),d.Vc("enabled",t.participants.loaded&&!t.participants.completed)("error",t.fetchMoreParticipantsFailed))},directives:[g.a,f.v,o.a,f.bb,f.cb,h.a,m.a,P.t,C.a,y.a,f.P,P.s,f.I,v.a,f.O,M.a],pipes:[b.d,I.a],encapsulation:2}),CoreUserParticipantsPage})();class CoreUserParticipantsManager extends s.a{logActivity(){return Object(n.a)(this,void 0,void 0,(function*(){yield l.a.logParticipantsView(this.getSource().COURSE_ID)}))}}},nFEd:function(e,t,i){"use strict";i.d(t,"a",(function(){return AddonModForumDiscussionsSwipeManager}));var n=i("eoiU");class AddonModForumDiscussionsSwipeManager extends n.a{skipItemInSwipe(e){return this.getSource().isNewDiscussionForm(e)}}},q3im:function(e,t,i){"use strict";i.r(t),i.d(t,"CoreGradesCourseLazyModule",(function(){return o}));var n=i("tyNb"),r=i("wxbA"),a=i("OzlW"),c=i("fXoL");const s=[{path:"",component:r.a}];let o=(()=>{class CoreGradesCourseLazyModule{}return CoreGradesCourseLazyModule.ɵmod=c.wc({type:CoreGradesCourseLazyModule}),CoreGradesCourseLazyModule.ɵinj=c.vc({factory:function CoreGradesCourseLazyModule_Factory(e){return new(e||CoreGradesCourseLazyModule)},imports:[[n.m.forChild(s),a.a]]}),CoreGradesCourseLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&c.kd(o,{imports:[n.m,a.a]}))},qULd:function(e,t,i){"use strict";i.d(t,"a",(function(){return hapticSelectionStart})),i.d(t,"b",(function(){return hapticSelectionChanged})),i.d(t,"c",(function(){return hapticSelection})),i.d(t,"d",(function(){return hapticImpact})),i.d(t,"e",(function(){return hapticSelectionEnd}));const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:i})},notification(e){const t=this.getEngine();if(!t)return;const i=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},hapticSelection=()=>{n.selection()},hapticSelectionStart=()=>{n.selectionStart()},hapticSelectionChanged=()=>{n.selectionChanged()},hapticSelectionEnd=()=>{n.selectionEnd()},hapticImpact=e=>{n.impact(e)}},spDm:function(e,t,i){"use strict";i.d(t,"a",(function(){return attachComponent})),i.d(t,"b",(function(){return detachComponent}));var n=i("W6o/");const attachComponent=async(e,t,i,r,a)=>{if(e)return e.attachViewToDom(t,i,a,r);if("string"!=typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof i?t.ownerDocument&&t.ownerDocument.createElement(i):i;return r&&r.forEach((e=>c.classList.add(e))),a&&Object.assign(c,a),t.appendChild(c),await new Promise((e=>Object(n.c)(c,e))),c},detachComponent=(e,t)=>{if(t){if(e){return e.removeViewFromDom(t.parentElement,t)}t.remove()}return Promise.resolve()}},xtzZ:function(e,t,i){"use strict";i.d(t,"a",(function(){return CoreUserParticipantsSource}));var n=i("mrSG"),r=i("CvRw"),a=i("4pns");class CoreUserParticipantsSource extends r.a{constructor(e,t=null){super(),this.COURSE_ID=e,this.SEARCH_QUERY=t}static getSourceId(e,t=null){return`participants-${e}-${t=null!=t?t:"__empty__"}`}getItemPath(e){return e.id.toString()}getItemQueryParams(){return{search:this.SEARCH_QUERY}}loadPageItems(e){return Object(n.a)(this,void 0,void 0,(function*(){if(this.SEARCH_QUERY){const{participants:t,canLoadMore:i}=yield a.a.searchParticipants(this.COURSE_ID,this.SEARCH_QUERY,!0,e,a.b.PARTICIPANTS_LIST_LIMIT);return{items:t,hasMoreItems:i}}const{participants:t,canLoadMore:i}=yield a.a.getParticipants(this.COURSE_ID,e*a.b.PARTICIPANTS_LIST_LIMIT,a.b.PARTICIPANTS_LIST_LIMIT);return{items:t,hasMoreItems:i}}))}getPageLength(){return a.b.PARTICIPANTS_LIST_LIMIT}}}}]);