(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{cvIN:function(e,t,o){"use strict";o.r(t),o.d(t,"FreemiumAutoLogoutLazyModule",(function(){return P}));var n=o("L3Fv"),i=o("tyNb"),c=o("mrSG"),a=o("EMNV"),u=o("pHTc"),s=o("2Vo4"),r=o("/A5c"),l=o("QKzv"),_=o("BaYo"),d=o("bFG1"),m=o("fXoL"),g=o("TEn/"),p=o("ofXK"),f=o("nt/U"),y=o("PgjG"),S=o("3CSS"),h=o("sYmb"),D=o("llyR");const O=["timeselector"];function FreemiumAutoLogoutPage_ion_content_9_ion_item_8_Template(e,t){if(1&e&&(m.Ec(0,"ion-item",8),m.Ec(1,"ion-label"),m.pd(2),m.Pc(3,"translate"),m.Dc(),m.zc(4,"ion-radio",9),m.Dc()),2&e){const e=t.$implicit;m.lc(2),m.qd(m.Qc(3,2,e[1])),m.lc(2),m.Vc("value",e[0])}}function FreemiumAutoLogoutPage_ion_content_9_ion_item_9_ion_select_option_3_ng_container_2_Template(e,t){if(1&e&&(m.Cc(0),m.Ec(1,"p"),m.pd(2),m.Pc(3,"coreDuration"),m.Pc(4,"translate"),m.Dc(),m.Bc()),2&e){const e=m.Oc().$implicit;m.lc(2),m.sd(" ",m.Qc(3,2,e)," (",m.Qc(4,4,"freemium.autologoutdefault"),") ")}}function FreemiumAutoLogoutPage_ion_content_9_ion_item_9_ion_select_option_3_ng_container_4_Template(e,t){if(1&e&&(m.Cc(0),m.pd(1),m.Pc(2,"coreDuration"),m.Bc()),2&e){const e=m.Oc().$implicit;m.lc(1),m.rd(" ",m.Qc(2,1,e)," ")}}function FreemiumAutoLogoutPage_ion_content_9_ion_item_9_ion_select_option_3_Template(e,t){if(1&e&&(m.Ec(0,"ion-select-option",14),m.Cc(1,15),m.nd(2,FreemiumAutoLogoutPage_ion_content_9_ion_item_9_ion_select_option_3_ng_container_2_Template,5,6,"ng-container",16),m.Pc(3,"async"),m.nd(4,FreemiumAutoLogoutPage_ion_content_9_ion_item_9_ion_select_option_3_ng_container_4_Template,3,3,"ng-container",17),m.Bc(),m.Dc()),2&e){const e=t.$implicit,o=m.Oc(3);m.Vc("value",e),m.lc(1),m.Vc("ngSwitch",e),m.lc(1),m.Vc("ngSwitchCase",m.Qc(3,3,o.defaultSessionDuration$))}}function FreemiumAutoLogoutPage_ion_content_9_ion_item_9_Template(e,t){if(1&e){const e=m.Fc();m.Ec(0,"ion-item"),m.Ec(1,"ion-select",10),m.Mc("ionChange",(function FreemiumAutoLogoutPage_ion_content_9_ion_item_9_Template_ion_select_ionChange_1_listener(t){m.fd(e);return m.Oc(2).onSessionDurationChanged(t.detail.value)})),m.Pc(2,"coreDuration"),m.nd(3,FreemiumAutoLogoutPage_ion_content_9_ion_item_9_ion_select_option_3_Template,5,5,"ion-select-option",11),m.Dc(),m.Ec(4,"ion-label",12),m.pd(5),m.Pc(6,"translate"),m.zc(7,"ion-icon",13),m.Dc(),m.Dc()}if(2&e){const e=m.Oc().ngIf,t=m.Oc();m.lc(1),m.Vc("value",e.sessionDuration)("placeholder",m.Qc(2,4,t.sessionDurationOptions[0])),m.lc(2),m.Vc("ngForOf",t.sessionDurationOptions),m.lc(2),m.rd(" ",m.Qc(6,6,"freemium.change")," ")}}function FreemiumAutoLogoutPage_ion_content_9_Template(e,t){if(1&e){const e=m.Fc();m.Ec(0,"ion-content"),m.Ec(1,"core-loading",3),m.Pc(2,"async"),m.Ec(3,"div",4),m.pd(4),m.Pc(5,"translate"),m.Dc(),m.Ec(6,"ion-list",5),m.Ec(7,"ion-radio-group",6),m.Mc("ionChange",(function FreemiumAutoLogoutPage_ion_content_9_Template_ion_radio_group_ionChange_7_listener(t){m.fd(e);return m.Oc().onTypeChanged(t.detail.value)})),m.nd(8,FreemiumAutoLogoutPage_ion_content_9_ion_item_8_Template,5,4,"ion-item",7),m.Dc(),m.nd(9,FreemiumAutoLogoutPage_ion_content_9_ion_item_9_Template,8,8,"ion-item",2),m.Dc(),m.Dc(),m.Dc()}if(2&e){const e=t.ngIf,o=m.Oc();m.lc(1),m.Vc("hideUntil",m.Qc(2,5,o.loaded$)),m.lc(3),m.rd(" ",m.Qc(5,7,"freemium.autologouttitle")," "),m.lc(3),m.Vc("value",e.type),m.lc(1),m.Vc("ngForOf",o.typeOptions),m.lc(1),m.Vc("ngIf","sessionclosed"===e.type)}}let L=(()=>{class FreemiumAutoLogoutPage{constructor(){this.loaded$=new s.a(!1),this.state$=new s.a({type:r.a.NEVER}),this.typeOptions=[[r.a.NEVER,"core.never"],[r.a.APP_CLOSED,"freemium.autologoutclosingtheapp"],[r.a.SESSION_CLOSED,"freemium.autologoutcustomtime"]],this.defaultSessionDuration$=new s.a(null),this.sessionDurationOptions=[30*_.a.SECONDS_MINUTE,_.a.SECONDS_HOUR,2*_.a.SECONDS_HOUR,6*_.a.SECONDS_HOUR,12*_.a.SECONDS_HOUR,_.a.SECONDS_DAY,_.a.SECONDS_WEEK]}ngOnInit(){return Object(c.a)(this,void 0,void 0,(function*(){this.currentSite=a.a.getCurrentSite();const e=this.currentSite.subscription.autoLogout;if(!l.a.canShowPreference()||!e||e.force)return u.a.navigate("../"),void 0;e.type===r.a.SESSION_CLOSED&&this.addDefaultSessionDuration(e.sessionDuration);const t=yield l.a.getConfig(e);if(t.type!==r.a.SESSION_CLOSED)return yield this.setConfigType({type:t.type}),this.loaded$.next(!0),void 0;yield this.setConfigType({sessionDuration:t.sessionDuration,type:t.type}),this.loaded$.next(!0)}))}addDefaultSessionDuration(e){e&&!this.sessionDurationOptions.some((t=>t===e))&&(this.defaultSessionDuration$.next(e),this.sessionDurationOptions.unshift(e))}setConfigType(e){return Object(c.a)(this,void 0,void 0,(function*(){if(yield l.a.setType(e.type),e.type===r.a.SESSION_CLOSED)return yield this.setSessionClosed(e),void 0;yield d.a.ignoreErrors(l.a.deleteSessionDuration()),yield this.updateState({type:e.type})}))}setSessionClosed(e){return Object(c.a)(this,void 0,void 0,(function*(){const{sessionDuration:t,type:o}=e,n=yield l.a.getSessionDuration(this.sessionDurationOptions[0]);yield this.updateState({sessionDuration:null!=n?n:t,type:o})}))}onSessionDurationChanged(e){return Object(c.a)(this,void 0,void 0,(function*(){if(this.state$.getValue().type!==r.a.SESSION_CLOSED)return yield d.a.ignoreErrors(l.a.deleteSessionDuration()),void 0;yield l.a.setSessionDuration(e),yield l.a.refreshListeners()}))}updateState(e){return Object(c.a)(this,void 0,void 0,(function*(){this.state$.next(e),yield l.a.refreshListeners()}))}onTypeChanged(e){return Object(c.a)(this,void 0,void 0,(function*(){if(e!==r.a.SESSION_CLOSED)return yield this.setConfigType({type:e}),void 0;yield this.setConfigType({sessionDuration:this.sessionDurationOptions[0],type:e})}))}}return FreemiumAutoLogoutPage.ɵfac=function FreemiumAutoLogoutPage_Factory(e){return new(e||FreemiumAutoLogoutPage)},FreemiumAutoLogoutPage.ɵcmp=m.sc({type:FreemiumAutoLogoutPage,selectors:[["freemium-autologout-page"]],viewQuery:function FreemiumAutoLogoutPage_Query(e,t){var o;(1&e&&m.ud(O,!0),2&e)&&(m.dd(o=m.Nc())&&(t.ionSelect=o.first))},decls:11,vars:9,consts:[["slot","start"],[3,"text"],[4,"ngIf"],[3,"hideUntil"],[1,"description"],["lines","none"],[3,"value","ionChange"],["class","radio",4,"ngFor","ngForOf"],[1,"radio"],["slot","end",3,"value"],["slot","start","interface","action-sheet",3,"value","placeholder","ionChange"],[3,"value",4,"ngFor","ngForOf"],["slot","end"],["slot","icon-only","name","fas-chevron-down","aria-hidden","true"],[3,"value"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function FreemiumAutoLogoutPage_Template(e,t){1&e&&(m.Ec(0,"ion-header"),m.Ec(1,"ion-toolbar"),m.Ec(2,"ion-buttons",0),m.zc(3,"ion-back-button",1),m.Pc(4,"translate"),m.Dc(),m.Ec(5,"ion-title"),m.Ec(6,"h1"),m.pd(7),m.Pc(8,"translate"),m.Dc(),m.Dc(),m.Dc(),m.Dc(),m.nd(9,FreemiumAutoLogoutPage_ion_content_9_Template,10,9,"ion-content",2),m.Pc(10,"async")),2&e&&(m.lc(3),m.Vc("text",m.Qc(4,3,"core.back")),m.lc(4),m.qd(m.Qc(8,5,"freemium.settingsoptions_autologout")),m.lc(2),m.Vc("ngIf",m.Qc(10,7,t.state$)))},directives:[g.C,g.Ab,g.m,g.h,g.i,g.yb,p.t,f.a,g.v,y.a,g.P,g.Z,g.Ob,p.s,g.I,g.O,g.Y,g.Mb,g.lb,g.D,S.a,g.mb,p.x,p.y,p.z],pipes:[h.d,p.b,D.a],styles:[".description[_ngcontent-%COMP%]{padding:1rem}ion-select[_ngcontent-%COMP%]{--padding-start:0;--padding-top:0}ion-select[_ngcontent-%COMP%]::part(icon){display:none}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:0}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:2px;vertical-align:middle}.radio[_ngcontent-%COMP%]{margin-top:.5em}"],changeDetection:0}),FreemiumAutoLogoutPage})();const C=[{path:"",component:L}];let P=(()=>{class FreemiumAutoLogoutLazyModule{}return FreemiumAutoLogoutLazyModule.ɵmod=m.wc({type:FreemiumAutoLogoutLazyModule}),FreemiumAutoLogoutLazyModule.ɵinj=m.vc({factory:function FreemiumAutoLogoutLazyModule_Factory(e){return new(e||FreemiumAutoLogoutLazyModule)},imports:[[i.m.forChild(C),n.a]]}),FreemiumAutoLogoutLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&m.kd(P,{declarations:[L],imports:[i.m,n.a]}))}}]);