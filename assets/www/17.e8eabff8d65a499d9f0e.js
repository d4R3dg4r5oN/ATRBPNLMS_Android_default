(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{vrJe:function(e,i,t){"use strict";t.r(i),t.d(i,"FreemiumSubscriptionLazyModule",(function(){return A}));var n=t("tyNb"),s=t("L3Fv"),r=t("fXoL"),o=t("ofXK"),c=t("TEn/"),u=t("3CSS"),a=t("sYmb");function FreemiumSubscriptionFeatureEnabledComponent_ion_item_0_Template(e,i){if(1&e&&(r.Ec(0,"ion-item",2),r.Ec(1,"ion-label"),r.Ec(2,"h2"),r.pd(3),r.Pc(4,"translate"),r.Dc(),r.Ec(5,"p"),r.pd(6),r.Pc(7,"translate"),r.Dc(),r.Dc(),r.zc(8,"ion-icon",3),r.Dc()),2&e){const e=r.Oc();r.lc(3),r.qd(r.Qc(4,2,"freemium.feature_"+e.feature)),r.lc(3),r.qd(r.Qc(7,4,"freemium.subscriptionfeature_enabled"))}}function FreemiumSubscriptionFeatureEnabledComponent_ion_item_1_p_5_Template(e,i){if(1&e&&(r.Ec(0,"p",8),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e){const e=r.Oc(2);r.lc(1),r.rd(" ",r.Qc(2,1,"freemium.subscriptionfeature_exceeded_"+e.feature)," ")}}function FreemiumSubscriptionFeatureEnabledComponent_ion_item_1_p_6_Template(e,i){1&e&&(r.Ec(0,"p"),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e&&(r.lc(1),r.qd(r.Qc(2,1,"freemium.subscriptionfeature_disabled")))}const _c0=function(e){return{"text-danger":e}};function FreemiumSubscriptionFeatureEnabledComponent_ion_item_1_Template(e,i){if(1&e&&(r.Ec(0,"ion-item",4),r.Ec(1,"ion-label"),r.Ec(2,"h2"),r.pd(3),r.Pc(4,"translate"),r.Dc(),r.nd(5,FreemiumSubscriptionFeatureEnabledComponent_ion_item_1_p_5_Template,3,3,"p",5),r.nd(6,FreemiumSubscriptionFeatureEnabledComponent_ion_item_1_p_6_Template,3,3,"p",6),r.Dc(),r.zc(7,"ion-icon",7),r.Dc()),2&e){const e=r.Oc();r.Vc("ngClass",r.ad(6,_c0,e.configured)),r.lc(3),r.qd(r.Qc(4,4,"freemium.feature_"+e.feature)),r.lc(2),r.Vc("ngIf",e.configured),r.lc(1),r.Vc("ngIf",!e.configured)}}let m=(()=>{class FreemiumSubscriptionFeatureEnabledComponent{}return FreemiumSubscriptionFeatureEnabledComponent.ɵfac=function FreemiumSubscriptionFeatureEnabledComponent_Factory(e){return new(e||FreemiumSubscriptionFeatureEnabledComponent)},FreemiumSubscriptionFeatureEnabledComponent.ɵcmp=r.sc({type:FreemiumSubscriptionFeatureEnabledComponent,selectors:[["freemium-subscription-feature-enabled"]],inputs:{feature:"feature",enabled:"enabled",configured:"configured"},decls:2,vars:2,consts:[["class","ion-text-wrap",4,"ngIf"],["class","ion-text-wrap",3,"ngClass",4,"ngIf"],[1,"ion-text-wrap"],["color","success","name","fas-check","slot","end"],[1,"ion-text-wrap",3,"ngClass"],["class","feature-exceeded",4,"ngIf"],[4,"ngIf"],["color","danger","name","fas-times","slot","end"],[1,"feature-exceeded"]],template:function FreemiumSubscriptionFeatureEnabledComponent_Template(e,i){1&e&&(r.nd(0,FreemiumSubscriptionFeatureEnabledComponent_ion_item_0_Template,9,6,"ion-item",0),r.nd(1,FreemiumSubscriptionFeatureEnabledComponent_ion_item_1_Template,8,8,"ion-item",1)),2&e&&(r.Vc("ngIf",i.enabled),r.lc(1),r.Vc("ngIf",!i.enabled))},directives:[o.t,c.I,c.O,c.D,u.a,o.q],pipes:[a.d],styles:[".feature-exceeded[_ngcontent-%COMP%]{color:var(--danger);font-style:italic}"]}),FreemiumSubscriptionFeatureEnabledComponent})();var l=t("TKc2");function FreemiumSubscriptionFeatureLimitsComponent_span_5_Template(e,i){if(1&e&&(r.Ec(0,"span"),r.pd(1),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.sd("(",e.used,"/",e.max,")")}}function FreemiumSubscriptionFeatureLimitsComponent_core_progress_bar_6_Template(e,i){if(1&e&&r.zc(0,"core-progress-bar",4),2&e){const e=r.Oc();r.Vc("progress",e.usage)}}const feature_limits_c0=function(e){return{overflowCount:e}};function FreemiumSubscriptionFeatureLimitsComponent_p_7_Template(e,i){if(1&e&&(r.Ec(0,"p",5),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.rd(" ",r.Rc(2,1,"freemium.subscriptionfeature_exceeded_"+e.feature,r.ad(4,feature_limits_c0,e.usageOverflow))," ")}}const _c1=function(e){return{limit:e}};function FreemiumSubscriptionFeatureLimitsComponent_p_8_Template(e,i){if(1&e&&(r.Ec(0,"p"),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.rd(" ",r.Rc(2,1,"freemium.subscriptionfeature_limited",r.ad(4,_c1,e.limits))," ")}}function FreemiumSubscriptionFeatureLimitsComponent_p_9_Template(e,i){1&e&&(r.Ec(0,"p"),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e&&(r.lc(1),r.qd(r.Qc(2,1,"freemium.subscriptionfeature_unlimited")))}const _c2=function(e){return{"used-up":e}},p=["*"];let d=(()=>{class FreemiumSubscriptionFeatureLimitsComponent{constructor(){this.showExceededMessage=!0,this.usageIsKnown=!1}ngOnChanges(){return this.limits?"number"==typeof this.limits?(delete this.used,delete this.usage,this.max=this.limits,this.usageIsKnown=!1,this.usageOverflow=null,void 0):(this.used=this.limits[0],this.max=this.limits[1],this.usage=Math.min(100,100*this.used/this.max),this.usageIsKnown=!0,this.usageOverflow=this.max<this.used?this.used-this.max:null,void 0):(delete this.used,delete this.max,delete this.usage,this.usageIsKnown=!1,this.usageOverflow=null,void 0)}}return FreemiumSubscriptionFeatureLimitsComponent.ɵfac=function FreemiumSubscriptionFeatureLimitsComponent_Factory(e){return new(e||FreemiumSubscriptionFeatureLimitsComponent)},FreemiumSubscriptionFeatureLimitsComponent.ɵcmp=r.sc({type:FreemiumSubscriptionFeatureLimitsComponent,selectors:[["freemium-subscription-feature-limits"]],inputs:{feature:"feature",limits:"limits",showExceededMessage:"showExceededMessage"},features:[r.jc],ngContentSelectors:p,decls:11,vars:11,consts:[[1,"ion-text-wrap",3,"ngClass"],[4,"ngIf"],[3,"progress",4,"ngIf"],["class","feature-exceeded",4,"ngIf"],[3,"progress"],[1,"feature-exceeded"]],template:function FreemiumSubscriptionFeatureLimitsComponent_Template(e,i){1&e&&(r.Uc(),r.Ec(0,"ion-item",0),r.Ec(1,"ion-label"),r.Ec(2,"h2"),r.pd(3),r.Pc(4,"translate"),r.nd(5,FreemiumSubscriptionFeatureLimitsComponent_span_5_Template,2,2,"span",1),r.Dc(),r.nd(6,FreemiumSubscriptionFeatureLimitsComponent_core_progress_bar_6_Template,1,1,"core-progress-bar",2),r.nd(7,FreemiumSubscriptionFeatureLimitsComponent_p_7_Template,3,6,"p",3),r.nd(8,FreemiumSubscriptionFeatureLimitsComponent_p_8_Template,3,6,"p",1),r.nd(9,FreemiumSubscriptionFeatureLimitsComponent_p_9_Template,3,3,"p",1),r.Tc(10),r.Dc(),r.Dc()),2&e&&(r.Vc("ngClass",r.ad(9,_c2,100===i.usage)),r.lc(3),r.rd(" ",r.Qc(4,7,"freemium.feature_"+i.feature)," "),r.lc(2),r.Vc("ngIf",i.usageIsKnown),r.lc(1),r.Vc("ngIf",i.usageIsKnown),r.lc(1),r.Vc("ngIf",i.usageIsKnown&&i.usageOverflow&&i.showExceededMessage),r.lc(1),r.Vc("ngIf",!i.usageIsKnown&&i.limits),r.lc(1),r.Vc("ngIf",!i.limits))},directives:[c.I,o.q,c.O,o.t,l.a],pipes:[a.d],styles:[".used-up[_ngcontent-%COMP%], .used-up[_ngcontent-%COMP%]   .core-progress-text[_ngcontent-%COMP%]{color:var(--danger)!important}.core-progress-text[_ngcontent-%COMP%]{right:0!important}.feature-exceeded[_ngcontent-%COMP%]{color:var(--danger);font-style:italic;text-align:right}"]}),FreemiumSubscriptionFeatureLimitsComponent})(),f=(()=>{class FreemiumSubscriptionComponentsModule{}return FreemiumSubscriptionComponentsModule.ɵmod=r.wc({type:FreemiumSubscriptionComponentsModule}),FreemiumSubscriptionComponentsModule.ɵinj=r.vc({factory:function FreemiumSubscriptionComponentsModule_Factory(e){return new(e||FreemiumSubscriptionComponentsModule)},imports:[[s.a]]}),FreemiumSubscriptionComponentsModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.kd(f,{declarations:[m,d],imports:[s.a],exports:[m,d]}));var b=t("mrSG"),g=t("wd/R"),_=t.n(g),h=t("ULAo"),F=t("fjkH"),S=t("K1b7"),C=t("F0ag"),P=t("NEyy"),E=t("EMNV"),I=t("BaYo"),v=t("bFG1"),T=t("j3ag"),w=t("pHTc"),D=t("/A5c"),y=t("nt/U"),L=t("PgjG"),O=t("ACYt"),x=t("iSJP");function FreemiumSubscriptionPage_p_19_span_1_Template(e,i){if(1&e&&(r.Ec(0,"span",13),r.pd(1),r.Dc()),2&e){const e=r.Oc(2);r.lc(1),r.rd(" ",e.site.subscription.name," ")}}function FreemiumSubscriptionPage_p_19_span_2_Template(e,i){if(1&e&&(r.Ec(0,"span",13),r.pd(1),r.Dc()),2&e){const e=r.Oc(2);r.lc(1),r.rd(" ",e.planNames[e.site.subscription.plan]," ")}}const subscription_c0=function(e){return{"text-danger":e}};function FreemiumSubscriptionPage_p_19_span_3_Template(e,i){if(1&e&&(r.Ec(0,"span",14),r.pd(1),r.Dc()),2&e){const e=r.Oc(2);r.Vc("ngClass",r.ad(2,subscription_c0,e.subscriptionHasExpired)),r.lc(1),r.rd(" ",e.expirationNotice," ")}}function FreemiumSubscriptionPage_p_19_Template(e,i){if(1&e&&(r.Ec(0,"p",10),r.nd(1,FreemiumSubscriptionPage_p_19_span_1_Template,2,1,"span",11),r.nd(2,FreemiumSubscriptionPage_p_19_span_2_Template,2,1,"span",11),r.nd(3,FreemiumSubscriptionPage_p_19_span_3_Template,2,4,"span",12),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.Vc("ngIf",e.site.subscription.name),r.lc(1),r.Vc("ngIf",!e.site.subscription.name),r.lc(1),r.Vc("ngIf",e.expirationNotice)}}function FreemiumSubscriptionPage_p_20_span_1_Template(e,i){if(1&e&&(r.Ec(0,"span",13),r.pd(1),r.Dc()),2&e){const e=r.Oc(2);r.lc(1),r.rd(" ",e.site.subscription.name," ")}}function FreemiumSubscriptionPage_p_20_span_2_Template(e,i){if(1&e&&(r.Ec(0,"span",13),r.pd(1),r.Dc()),2&e){const e=r.Oc(2);r.lc(1),r.rd(" ",e.planNames[e.site.subscription.plan]," ")}}function FreemiumSubscriptionPage_p_20_span_3_Template(e,i){if(1&e&&(r.Ec(0,"span",13),r.pd(1),r.Dc()),2&e){const e=r.Oc(2);r.lc(1),r.rd(" ",e.planNames.free," ")}}function FreemiumSubscriptionPage_p_20_Template(e,i){if(1&e&&(r.Ec(0,"p",10),r.nd(1,FreemiumSubscriptionPage_p_20_span_1_Template,2,1,"span",11),r.nd(2,FreemiumSubscriptionPage_p_20_span_2_Template,2,1,"span",11),r.nd(3,FreemiumSubscriptionPage_p_20_span_3_Template,2,1,"span",11),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.Vc("ngIf",e.subscriptionIsActive&&e.site.subscription.name),r.lc(1),r.Vc("ngIf",e.subscriptionIsActive&&!e.site.subscription.name),r.lc(1),r.Vc("ngIf",!e.subscriptionIsActive)}}function FreemiumSubscriptionPage_ion_button_21_Template(e,i){if(1&e){const e=r.Fc();r.Ec(0,"ion-button",15),r.Mc("click",(function FreemiumSubscriptionPage_ion_button_21_Template_ion_button_click_0_listener(){r.fd(e);return r.Oc().upgradePlan()})),r.zc(1,"ion-icon",16),r.pd(2),r.Pc(3,"translate"),r.Dc()}2&e&&(r.lc(2),r.rd(" ",r.Qc(3,1,"freemium.subscriptionplan_upgrade")," "))}function FreemiumSubscriptionPage_p_22_Template(e,i){if(1&e&&(r.Ec(0,"p"),r.pd(1),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.rd(" ",e.site.subscription.description," ")}}function FreemiumSubscriptionPage_p_23_Template(e,i){1&e&&(r.Ec(0,"p"),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e&&(r.lc(1),r.rd(" ",r.Qc(2,1,"freemium.subscriptionplandescription")," "))}function FreemiumSubscriptionPage_p_24_a_1_Template(e,i){if(1&e&&(r.Ec(0,"a",18),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e){const e=r.Oc(2);r.Vc("href",e.site.subscription.informationUrl,r.id)("showBrowserWarning",!1),r.lc(1),r.rd(" ",r.Qc(2,3,"freemium.subscriptionplanlearnmore")," ")}}function FreemiumSubscriptionPage_p_24_a_2_Template(e,i){if(1&e&&(r.Ec(0,"a",18),r.pd(1),r.Pc(2,"translate"),r.Dc()),2&e){const e=r.Oc(2);r.Vc("href",e.appServicesUrl,r.id)("showBrowserWarning",!1),r.lc(1),r.rd(" ",r.Qc(2,3,"freemium.subscriptionplanlearnmore")," ")}}function FreemiumSubscriptionPage_p_24_Template(e,i){if(1&e&&(r.Ec(0,"p"),r.nd(1,FreemiumSubscriptionPage_p_24_a_1_Template,3,5,"a",17),r.nd(2,FreemiumSubscriptionPage_p_24_a_2_Template,3,5,"a",17),r.Dc()),2&e){const e=r.Oc();r.lc(1),r.Vc("ngIf",e.site.subscription.informationUrl&&e.subscriptionIsActive),r.lc(1),r.Vc("ngIf",!e.site.subscription.informationUrl||!e.subscriptionIsActive)}}function FreemiumSubscriptionPage_ion_item_divider_25_Template(e,i){1&e&&(r.Ec(0,"ion-item-divider"),r.Ec(1,"ion-label"),r.pd(2),r.Pc(3,"translate"),r.Dc(),r.Dc()),2&e&&(r.lc(2),r.qd(r.Qc(3,1,"freemium.subscriptiondetails")))}function FreemiumSubscriptionPage_freemium_subscription_feature_limits_27_Template(e,i){if(1&e){const e=r.Fc();r.Ec(0,"freemium-subscription-feature-limits",19),r.Ec(1,"ion-button",20),r.Mc("click",(function FreemiumSubscriptionPage_freemium_subscription_feature_limits_27_Template_ion_button_click_1_listener(){r.fd(e);return r.Oc().manageStorage()})),r.zc(2,"ion-icon",21),r.pd(3),r.Pc(4,"translate"),r.Dc(),r.Dc()}if(2&e){const e=r.Oc();r.Vc("limits",e.features.coursesdownload)("showExceededMessage",!1),r.lc(3),r.rd(" ",r.Qc(4,3,"addon.storagemanager.managedownloads")," ")}}function FreemiumSubscriptionPage_ng_container_28_Template(e,i){if(1&e&&(r.Cc(0),r.zc(1,"freemium-subscription-feature-limits",22),r.zc(2,"freemium-subscription-feature-limits",23),r.zc(3,"freemium-subscription-feature-limits",24),r.zc(4,"freemium-subscription-feature-limits",25),r.zc(5,"freemium-subscription-feature-enabled",26),r.zc(6,"freemium-subscription-feature-enabled",27),r.zc(7,"freemium-subscription-feature-enabled",28),r.zc(8,"freemium-subscription-feature-enabled",29),r.zc(9,"freemium-subscription-feature-enabled",30),r.zc(10,"freemium-subscription-feature-enabled",31),r.Bc()),2&e){const e=r.Oc();r.lc(1),r.Vc("limits",e.features.custommenuitems),r.lc(1),r.Vc("limits",e.features.customlanguagestrings),r.lc(1),r.Vc("limits",e.features.disabledfeatures),r.lc(1),r.Vc("limits",e.features.pushnotificationsdevices),r.lc(1),r.Vc("enabled",e.features.remotethemes)("configured",e.areRemoteThemesConfigured),r.lc(1),r.Vc("enabled",e.features.sitelogo)("configured",e.isSiteLogoConfigured),r.lc(1),r.Vc("enabled",e.features.multimediapushnotifications),r.lc(1),r.Vc("enabled",e.features.qrlogin),r.lc(1),r.Vc("enabled",e.features.biometriclogin),r.lc(1),r.Vc("enabled",e.features.autologout)}}let M=(()=>{class FreemiumSubscriptionPage{constructor(){this.loaded=!1,this.planNames={[D.d.Free]:"Free",[D.d.Pro]:"Pro",[D.d.Premium]:"Premium",[D.d.BMA]:"BMA"},this.appServicesUrl=I.a.CONFIG.appServicesUrl,this.isManuallyRefreshing=!1,this.site=E.a.getCurrentSite()}ngOnInit(){return Object(b.a)(this,void 0,void 0,(function*(){if(this.planNames[D.d.Free]=T.I.instant("freemium.subscriptionplan_free"),this.site.isAdmin())try{yield this.refreshSiteInfo()}catch(e){}this.siteObserver=F.b.on(F.b.SITE_UPDATED,(()=>Object(b.a)(this,void 0,void 0,(function*(){if(!this.isManuallyRefreshing){this.loaded=!1;try{yield this.initializeSiteProperties()}finally{this.loaded=!0}}}))),this.site.id),this.courseStatusObserver=F.b.on(F.b.COURSE_STATUS_CHANGED,(()=>Object(b.a)(this,void 0,void 0,(function*(){this.features&&(this.features.coursesdownload=yield this.getCoursesDownloadLimits())}))));try{yield this.initializeSiteProperties()}finally{this.loaded=!0}}))}ngOnDestroy(){this.siteObserver&&this.siteObserver.off(),this.courseStatusObserver&&this.courseStatusObserver.off()}upgradePlan(){v.a.openInBrowser(this.appServicesUrl,{showBrowserWarning:!1})}manageStorage(){w.a.navigateToSitePath("storage")}refresh(e){return Object(b.a)(this,void 0,void 0,(function*(){this.isManuallyRefreshing=!0,yield this.refreshSiteInfo();try{yield this.initializeSiteProperties()}finally{this.isManuallyRefreshing=!1,null==e||e.complete()}}))}refreshSiteInfo(){return Object(b.a)(this,void 0,void 0,(function*(){try{const e=yield E.a.getSite(this.site.id);yield e.removeCachedSubscription()}catch(e){}yield E.a.updateSiteInfo(this.site.id)}))}initializeSiteProperties(){var e;return Object(b.a)(this,void 0,void 0,(function*(){const i={[S.b.CoursesDownload]:null,[S.b.RemoteThemes]:null,[S.b.DisabledFeatures]:null,[S.b.CustomLanguageStrings]:null,[S.b.CustomMenuItems]:null,[S.b.CustomModuleIcons]:null,[S.b.MultimediaPushNotifications]:null,[S.b.PushNotificationsDevices]:null,[S.b.SiteLogo]:null,[S.b.QRLogin]:null,[S.b.BiometricLogin]:null,[S.b.AutoLogout]:null};i.coursesdownload=yield this.getCoursesDownloadLimits(),this.userIsAdmin=this.site.isAdmin(),this.userIsAdmin?(yield this.initializeAdminFeatures(i),this.expirationNotice=this.site.subscription.hasValidUntil()?this.site.subscription.hasExpired()?T.I.instant("freemium.subscriptionplan_expired"):T.I.instant("freemium.subscriptionplan_validuntil",{date:_()(this.site.subscription.validUntil).calendar()}):"",this.subscriptionHasExpired=this.site.subscription.hasExpired(),this.areRemoteThemesConfigured=this.site.hasInfo("mobilecssurl"),this.isSiteLogoConfigured=yield this.site.hasSiteLogoConfigured(),this.showUpsell=!!(!1===i.remotethemes&&this.areRemoteThemesConfigured||!1===i.sitelogo&&this.isSiteLogoConfigured||i.coursesdownload&&i.coursesdownload[0]>i.coursesdownload[1]||i.custommenuitems&&i.custommenuitems[0]>i.custommenuitems[1]||i.customlanguagestrings&&i.customlanguagestrings[0]>i.customlanguagestrings[1]||i.disabledfeatures&&i.disabledfeatures[0]>(null===(e=i.custommenuitems)||void 0===e?void 0:e[1])),delete this.subscriptionIsActive):(this.subscriptionIsActive=this.site.subscription.isActive(),delete this.showUpsell,delete this.expirationNotice,delete this.subscriptionHasExpired,delete this.areRemoteThemesConfigured),this.features=i}))}initializeAdminFeatures(e){return Object(b.a)(this,void 0,void 0,(function*(){const i=this.site.subscription.getFeatureLimit(S.b.CustomMenuItems);if(null!==i){const t=yield C.a.getUnrestrictedCustomMenuItemsFromSite(this.site.id);e[S.b.CustomMenuItems]=[t.length,i]}const t=this.site.subscription.getFeatureLimit(S.b.CustomLanguageStrings);if(null!==t){const i=this.site.getUnrestrictedStoredConfig("tool_mobile_customlangstrings");if(i){const n=P.a.parseStringsConfigValue(i),s=Object.values(n).map((e=>e.length));e[S.b.CustomLanguageStrings]=[Math.max(...s),t]}else e[S.b.CustomLanguageStrings]=[0,t]}const n=this.site.subscription.getFeatureLimit(S.b.DisabledFeatures);if(null!==n){const i=this.site.getUnrestrictedStoredConfig("tool_mobile_disabledfeatures");if(i){const t=P.a.parseFeaturesConfigValue(i);e[S.b.DisabledFeatures]=[t.length,n]}else e[S.b.DisabledFeatures]=[0,n]}e[S.b.PushNotificationsDevices]=this.site.subscription.getFeatureLimit(S.b.PushNotificationsDevices),e[S.b.RemoteThemes]=this.site.subscription.isFeatureEnabled(S.b.RemoteThemes),e[S.b.MultimediaPushNotifications]=this.site.subscription.isFeatureEnabled(S.b.MultimediaPushNotifications),e[S.b.SiteLogo]=this.site.subscription.isFeatureEnabled(S.b.SiteLogo),e[S.b.QRLogin]=this.site.subscription.isFeatureEnabled(S.b.QRLogin),e[S.b.BiometricLogin]=this.site.subscription.isFeatureEnabled(S.b.BiometricLogin),e[S.b.AutoLogout]=this.site.subscription.isFeatureEnabled(S.b.AutoLogout)}))}getCoursesDownloadLimits(){return Object(b.a)(this,void 0,void 0,(function*(){const e=this.site.subscription.getFeatureLimit(S.b.CoursesDownload);if(null===e)return null;return[(yield h.a.getDownloadedCourseIds()).length,e]}))}}return FreemiumSubscriptionPage.ɵfac=function FreemiumSubscriptionPage_Factory(e){return new(e||FreemiumSubscriptionPage)},FreemiumSubscriptionPage.ɵcmp=r.sc({type:FreemiumSubscriptionPage,selectors:[["page-freemium-subscription"]],decls:29,vars:24,consts:[["slot","start"],[3,"text"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[1,"ion-text-wrap"],["class","margin-bottom-md",4,"ngIf"],["expand","block","class","ion-margin-vertical",3,"click",4,"ngIf"],[4,"ngIf"],["feature","coursesdownload",3,"limits","showExceededMessage",4,"ngIf"],[1,"margin-bottom-md"],["class","font-bold font-lg",4,"ngIf"],["class","font-sm font-italic",3,"ngClass",4,"ngIf"],[1,"font-bold","font-lg"],[1,"font-sm","font-italic",3,"ngClass"],["expand","block",1,"ion-margin-vertical",3,"click"],["name","fas-arrow-up","slot","start","aria-hidden","true"],["core-link","",3,"href","showBrowserWarning",4,"ngIf"],["core-link","",3,"href","showBrowserWarning"],["feature","coursesdownload",3,"limits","showExceededMessage"],["expand","block","fill","outline",1,"item-button",3,"click"],["name","fas-archive","slot","start","aria-hidden","true"],["feature","custommenuitems",3,"limits"],["feature","customlanguagestrings",3,"limits"],["feature","disabledfeatures",3,"limits"],["feature","pushnotificationsdevices",3,"limits"],["feature","remotethemes",3,"enabled","configured"],["feature","sitelogo",3,"enabled","configured"],["feature","multimediapushnotifications",3,"enabled"],["feature","qrlogin",3,"enabled"],["feature","biometriclogin",3,"enabled"],["feature","autologout",3,"enabled"]],template:function FreemiumSubscriptionPage_Template(e,i){1&e&&(r.Ec(0,"ion-header"),r.Ec(1,"ion-toolbar"),r.Ec(2,"ion-buttons",0),r.zc(3,"ion-back-button",1),r.Pc(4,"translate"),r.Dc(),r.Ec(5,"ion-title"),r.pd(6),r.Pc(7,"translate"),r.Dc(),r.Dc(),r.Dc(),r.Ec(8,"ion-content"),r.Ec(9,"ion-refresher",2),r.Mc("ionRefresh",(function FreemiumSubscriptionPage_Template_ion_refresher_ionRefresh_9_listener(e){return i.refresh(e.target)})),r.zc(10,"ion-refresher-content",3),r.Pc(11,"translate"),r.Dc(),r.Ec(12,"core-loading",4),r.Ec(13,"ion-item-group"),r.Ec(14,"ion-item",5),r.Ec(15,"ion-label"),r.Ec(16,"h2"),r.pd(17),r.Pc(18,"translate"),r.Dc(),r.nd(19,FreemiumSubscriptionPage_p_19_Template,4,3,"p",6),r.nd(20,FreemiumSubscriptionPage_p_20_Template,4,3,"p",6),r.nd(21,FreemiumSubscriptionPage_ion_button_21_Template,4,3,"ion-button",7),r.nd(22,FreemiumSubscriptionPage_p_22_Template,2,1,"p",8),r.nd(23,FreemiumSubscriptionPage_p_23_Template,3,3,"p",8),r.nd(24,FreemiumSubscriptionPage_p_24_Template,3,2,"p",8),r.Dc(),r.Dc(),r.nd(25,FreemiumSubscriptionPage_ion_item_divider_25_Template,4,3,"ion-item-divider",8),r.Ec(26,"core-loading",4),r.nd(27,FreemiumSubscriptionPage_freemium_subscription_feature_limits_27_Template,5,5,"freemium-subscription-feature-limits",9),r.nd(28,FreemiumSubscriptionPage_ng_container_28_Template,11,12,"ng-container",8),r.Dc(),r.Dc(),r.Dc(),r.Dc()),2&e&&(r.lc(3),r.Vc("text",r.Qc(4,16,"core.back")),r.lc(3),r.qd(r.Qc(7,18,"freemium.subscription")),r.lc(3),r.Vc("disabled",!i.features),r.lc(1),r.Wc("pullingText",r.Qc(11,20,"core.pulltorefresh")),r.lc(2),r.Vc("hideUntil",i.loaded),r.lc(5),r.qd(r.Qc(18,22,"freemium.subscriptionplan")),r.lc(2),r.Vc("ngIf",i.userIsAdmin),r.lc(1),r.Vc("ngIf",!i.userIsAdmin),r.lc(1),r.Vc("ngIf",i.showUpsell),r.lc(1),r.Vc("ngIf",i.site.subscription.description&&(i.subscriptionIsActive||i.userIsAdmin)),r.lc(1),r.Vc("ngIf",!(i.site.subscription.description&&(i.subscriptionIsActive||i.userIsAdmin))),r.lc(1),r.Vc("ngIf",null!==i.site.subscription.informationUrl||!i.subscriptionIsActive),r.lc(1),r.Vc("ngIf",i.userIsAdmin),r.lc(1),r.Vc("hideUntil",i.features),r.lc(1),r.Vc("ngIf",i.features),r.lc(1),r.Vc("ngIf",i.features&&i.userIsAdmin))},directives:[c.C,c.Ab,c.m,c.h,c.i,c.yb,y.a,c.v,c.bb,c.cb,L.a,c.K,c.I,c.O,o.t,o.q,O.a,c.l,c.D,u.a,x.a,c.J,d,m],pipes:[a.d],encapsulation:2}),FreemiumSubscriptionPage})();const V=[{path:"",component:M}];let A=(()=>{class FreemiumSubscriptionLazyModule{}return FreemiumSubscriptionLazyModule.ɵmod=r.wc({type:FreemiumSubscriptionLazyModule}),FreemiumSubscriptionLazyModule.ɵinj=r.vc({factory:function FreemiumSubscriptionLazyModule_Factory(e){return new(e||FreemiumSubscriptionLazyModule)},imports:[[n.m.forChild(V),s.a,f]]}),FreemiumSubscriptionLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.kd(A,{declarations:[M],imports:[n.m,s.a,f]}))}}]);