(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{xJFJ:function(e,t,o){"use strict";o.r(t),o.d(t,"AddonModImscpLazyModule",(function(){return k}));var n=o("tyNb"),c=o("L3Fv"),i=o("yVD4"),d=o("ghUQ"),a=o("LrfP"),s=o("fXoL"),r=o("TEn/"),l=o("4JiN"),m=o("hMzs"),u=o("nt/U"),p=o("sYmb");let I=(()=>{class AddonModImscpIndexPage extends d.a{}return AddonModImscpIndexPage.ɵfac=function AddonModImscpIndexPage_Factory(e){return h(e||AddonModImscpIndexPage)},AddonModImscpIndexPage.ɵcmp=s.sc({type:AddonModImscpIndexPage,selectors:[["page-addon-mod-imscp-index"]],viewQuery:function AddonModImscpIndexPage_Query(e,t){var o;(1&e&&s.ud(a.a,!0),2&e)&&(s.dd(o=s.Nc())&&(t.activityComponent=o.first))},features:[s.ic],decls:11,vars:8,consts:[["collapsible",""],["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","end"],[1,"limited-width"],[3,"module","courseId","dataRetrieved"]],template:function AddonModImscpIndexPage_Template(e,t){1&e&&(s.Ec(0,"ion-header",0),s.Ec(1,"ion-toolbar"),s.Ec(2,"ion-buttons",1),s.zc(3,"ion-back-button",2),s.Pc(4,"translate"),s.Dc(),s.Ec(5,"ion-title"),s.Ec(6,"h1"),s.zc(7,"core-format-text",3),s.Dc(),s.Dc(),s.zc(8,"ion-buttons",4),s.Dc(),s.Dc(),s.Ec(9,"ion-content",5),s.Ec(10,"addon-mod-imscp-index",6),s.Mc("dataRetrieved",(function AddonModImscpIndexPage_Template_addon_mod_imscp_index_dataRetrieved_10_listener(e){return t.updateData(e)})),s.Dc(),s.Dc()),2&e&&(s.lc(3),s.Vc("text",s.Qc(4,6,"core.back")),s.lc(4),s.Vc("text",t.title)("contextInstanceId",null==t.module?null:t.module.id)("courseId",t.courseId),s.lc(3),s.Vc("module",t.module)("courseId",t.courseId))},directives:[r.C,l.b,r.Ab,r.m,r.h,r.i,r.yb,m.a,u.a,r.v,a.a],pipes:[p.d],encapsulation:2}),AddonModImscpIndexPage})();const h=s.Gc(I);var f=o("mrSG"),g=o("BaYo"),_=o("93ts"),M=o("ULAo"),v=o("zbKZ"),b=o("GGba"),w=o("pHTc"),y=o("3LXp"),A=o("vuGA"),P=o("bFG1"),V=o("j3ag"),x=o("oIyK"),D=o("Z23Z"),E=o("ofXK"),O=o("PgjG"),T=o("ACYt"),L=o("3CSS"),H=o("qNqN"),z=o("/BoF"),F=o("3jOR");function AddonModImscpViewPage_ion_button_9_Template(e,t){if(1&e){const e=s.Fc();s.Ec(0,"ion-button",9),s.Mc("click",(function AddonModImscpViewPage_ion_button_9_Template_ion_button_click_0_listener(){s.fd(e);return s.Oc().showToc()})),s.Pc(1,"translate"),s.zc(2,"ion-icon",10),s.Dc()}2&e&&s.mc("aria-label",s.Qc(1,1,"addon.mod_imscp.toc"))}function AddonModImscpViewPage_ion_card_12_Template(e,t){if(1&e&&(s.Ec(0,"ion-card",11),s.Ec(1,"ion-item"),s.zc(2,"ion-icon",12),s.Ec(3,"ion-label"),s.zc(4,"span",13),s.Dc(),s.Dc(),s.Dc()),2&e){const e=s.Oc();s.lc(4),s.Vc("innerHTML",e.warning,s.gd)}}function AddonModImscpViewPage_core_iframe_13_Template(e,t){if(1&e&&s.zc(0,"core-iframe",14),2&e){const e=s.Oc();s.Vc("src",e.src)("showFullscreenOnToolbar",!0)("autoFullscreenOnRotate",!0)}}function AddonModImscpViewPage_core_navigation_bar_14_Template(e,t){if(1&e){const e=s.Fc();s.Ec(0,"core-navigation-bar",15),s.Mc("action",(function AddonModImscpViewPage_core_navigation_bar_14_Template_core_navigation_bar_action_0_listener(t){s.fd(e);return s.Oc().loadItem(t)})),s.Dc()}if(2&e){const e=s.Oc();s.Vc("items",e.navigationItems)}}let C=(()=>{class AddonModImscpViewPage{constructor(){this.title="",this.src="",this.warning="",this.navigationItems=[],this.loaded=!1,this.items=[]}ngOnInit(){try{this.cmId=w.a.getRequiredRouteNumberParam("cmId"),this.courseId=w.a.getRequiredRouteNumberParam("courseId"),this.initialItemHref=w.a.getRouteParam("initialHref")}catch(e){return y.a.showErrorModal(e),w.a.back(),void 0}this.fetchContent()}fetchContent(e=!1){return Object(f.a)(this,void 0,void 0,(function*(){try{const{module:t,imscp:o}=yield this.loadImscpData();this.title=o.name;const n=yield this.downloadResourceIfNeeded(t,e),c=yield M.a.getModuleContents(t,this.courseId);if(this.items=D.a.createItemList(c),this.items.length&&(this.initialItemHref&&this.items.some((e=>e.href===this.initialItemHref))&&(this.currentHref=this.initialItemHref),void 0===this.currentHref)){const e=yield D.a.getLastItemViewed(o.id);this.currentHref=void 0!==e?e:this.items[0].href}if(void 0===this.currentHref)throw new _.a("Empty TOC");try{yield this.loadItemHref(this.currentHref)}catch(e){return y.a.showErrorModalDefault(e,"addon.mod_imscp.deploymenterror",!0),void 0}if(null==n?void 0:n.failed){const e=A.a.getErrorMessageFromError(n.error)||n.error;this.warning=V.I.instant("core.errordownloadingsomefiles")+(e?" "+e:"")}else this.warning=""}catch(e){y.a.showErrorModalDefault(e,"core.course.errorgetmodule",!0)}finally{this.loaded=!0}}))}loadImscpData(){return Object(f.a)(this,void 0,void 0,(function*(){return this.module=yield M.a.getModule(this.cmId,this.courseId),this.imscp=yield D.a.getImscp(this.courseId,this.cmId),{module:this.module,imscp:this.imscp}}))}downloadResourceIfNeeded(e,t=!1){var o;return Object(f.a)(this,void 0,void 0,(function*(){const n={failed:!1};let c=!1;if((yield v.a.getModuleStatus(e,this.courseId,void 0,t))!==g.a.DOWNLOADED)try{yield v.a.downloadModule(e,this.courseId),c=!0}catch(e){n.failed=!0,n.error=e}if(!(null===(o=e.contents)||void 0===o?void 0:o.length)||t&&!c){const o=t&&b.a.isOnline();try{yield M.a.loadModuleContents(e,void 0,void 0,!1,o)}catch(t){if(o&&!e.contents)yield M.a.loadModuleContents(e);else if(!e.contents)throw t}}return n}))}doRefresh(e){return Object(f.a)(this,void 0,void 0,(function*(){yield P.a.ignoreErrors(Promise.all([D.a.invalidateContent(this.cmId,this.courseId),v.a.invalidateCourseUpdates(this.courseId)])),yield P.a.ignoreErrors(this.fetchContent(!0)),null==e||e.complete()}))}loadItemHref(e){return Object(f.a)(this,void 0,void 0,(function*(){if(!this.module)return;const t=yield D.a.getIframeSrc(this.module,e);this.currentHref=e,this.navigationItems=this.items.map((e=>({item:e,current:e.href==this.currentHref,enabled:!!e.href}))),this.src&&t==this.src?(this.src="",setTimeout((()=>{this.src=t}))):this.src=t,this.imscp&&D.a.storeLastItemViewed(this.imscp.id,e,this.courseId)}))}loadItem(e){this.loadItemHref(e.href)}showToc(){return Object(f.a)(this,void 0,void 0,(function*(){const e=yield y.a.openSideModal({component:x.a,componentProps:{items:this.items,selected:this.currentHref}});e&&this.loadItemHref(e)}))}}return AddonModImscpViewPage.ɵfac=function AddonModImscpViewPage_Factory(e){return new(e||AddonModImscpViewPage)},AddonModImscpViewPage.ɵcmp=s.sc({type:AddonModImscpViewPage,selectors:[["page-addon-mod-imscp-view"]],decls:15,vars:11,consts:[["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","end"],["aria-haspopup","true",3,"click",4,"ngIf"],[3,"hideUntil"],["class","core-warning-card",4,"ngIf"],[3,"src","showFullscreenOnToolbar","autoFullscreenOnRotate",4,"ngIf"],["collapsible-footer","","appearOnBottom","",3,"items","action",4,"ngIf"],["aria-haspopup","true",3,"click"],["name","fas-bookmark","slot","icon-only","aria-hidden","true"],[1,"core-warning-card"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"],[3,"innerHTML"],[3,"src","showFullscreenOnToolbar","autoFullscreenOnRotate"],["collapsible-footer","","appearOnBottom","",3,"items","action"]],template:function AddonModImscpViewPage_Template(e,t){1&e&&(s.Ec(0,"ion-header"),s.Ec(1,"ion-toolbar"),s.Ec(2,"ion-buttons",0),s.zc(3,"ion-back-button",1),s.Pc(4,"translate"),s.Dc(),s.Ec(5,"ion-title"),s.Ec(6,"h1"),s.zc(7,"core-format-text",2),s.Dc(),s.Dc(),s.Ec(8,"ion-buttons",3),s.nd(9,AddonModImscpViewPage_ion_button_9_Template,3,3,"ion-button",4),s.Dc(),s.Dc(),s.Dc(),s.Ec(10,"ion-content"),s.Ec(11,"core-loading",5),s.nd(12,AddonModImscpViewPage_ion_card_12_Template,5,1,"ion-card",6),s.nd(13,AddonModImscpViewPage_core_iframe_13_Template,1,3,"core-iframe",7),s.Dc(),s.nd(14,AddonModImscpViewPage_core_navigation_bar_14_Template,1,1,"core-navigation-bar",8),s.Dc()),2&e&&(s.lc(3),s.Vc("text",s.Qc(4,9,"core.back")),s.lc(4),s.Vc("text",t.title)("contextInstanceId",t.cmId)("courseId",t.courseId),s.lc(2),s.Vc("ngIf",t.loaded),s.lc(2),s.Vc("hideUntil",t.loaded),s.lc(1),s.Vc("ngIf",t.warning),s.lc(1),s.Vc("ngIf",t.loaded),s.lc(1),s.Vc("ngIf",t.loaded&&t.navigationItems.length>1))},directives:[r.C,r.Ab,r.m,r.h,r.i,r.yb,m.a,E.t,u.a,r.v,O.a,T.a,r.l,r.D,L.a,r.n,r.I,r.O,H.a,z.a,F.a],pipes:[p.d],encapsulation:2}),AddonModImscpViewPage})();const R=[{path:":courseId/:cmId",component:I},{path:":courseId/:cmId/view",component:C}];let k=(()=>{class AddonModImscpLazyModule{}return AddonModImscpLazyModule.ɵmod=s.wc({type:AddonModImscpLazyModule}),AddonModImscpLazyModule.ɵinj=s.vc({factory:function AddonModImscpLazyModule_Factory(e){return new(e||AddonModImscpLazyModule)},imports:[[n.m.forChild(R),c.a,i.a]]}),AddonModImscpLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&s.kd(k,{declarations:[I,C],imports:[n.m,c.a,i.a]}))}}]);