(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{JpIC:function(n,t,o){"use strict";o.d(t,"a",(function(){return u}));var e=o("mrSG"),i=o("bFG1"),c=o("j3ag"),r=o("mv9v"),a=o("3LXp"),s=o("fXoL"),l=o("TEn/"),g=o("ACYt"),_=o("3CSS"),d=o("nt/U"),p=o("ofXK"),m=o("hMzs"),C=o("sYmb");function CoreLoginSiteHelpComponent_ng_container_12_p_8_Template(n,t){if(1&n&&(s.Ec(0,"p"),s.pd(1),s.Dc()),2&n){const n=s.Oc().$implicit;s.lc(1),s.qd(n.answer.text)}}function CoreLoginSiteHelpComponent_ng_container_12_p_9_Template(n,t){if(1&n&&s.zc(0,"p",4),2&n){const n=s.Oc().$implicit;s.Vc("innerHTML",n.answer.text,s.gd)}}function CoreLoginSiteHelpComponent_ng_container_12_core_format_text_10_Template(n,t){if(1&n&&s.zc(0,"core-format-text",11),2&n){const n=s.Oc().$implicit;s.Vc("text",n.answer.text)("filter",!1)}}function CoreLoginSiteHelpComponent_ng_container_12_Template(n,t){if(1&n){const n=s.Fc();s.Cc(0),s.Ec(1,"ion-item",5),s.Mc("click",(function CoreLoginSiteHelpComponent_ng_container_12_Template_ion_item_click_1_listener(){s.fd(n);const o=t.$implicit;return s.Oc().toggle(o)})),s.zc(2,"ion-icon",6),s.Ec(3,"ion-label"),s.Ec(4,"h2"),s.pd(5),s.Dc(),s.Dc(),s.Dc(),s.Ec(6,"ion-item",7),s.Ec(7,"ion-label"),s.nd(8,CoreLoginSiteHelpComponent_ng_container_12_p_8_Template,2,1,"p",8),s.nd(9,CoreLoginSiteHelpComponent_ng_container_12_p_9_Template,1,1,"p",9),s.nd(10,CoreLoginSiteHelpComponent_ng_container_12_core_format_text_10_Template,1,2,"core-format-text",10),s.Dc(),s.Dc(),s.Bc()}if(2&n){const n=t.$implicit,o=s.Oc();s.lc(1),s.mc("aria-expanded",o.isOpen(n))("aria-controls","question-"+n.id+"-answer"),s.lc(1),s.qc("expandable-status-icon-expanded",o.isOpen(n)),s.lc(3),s.qd(n.text),s.lc(1),s.nc(n.answer.class+" ion-text-wrap core-login-site-help--answer"),s.qc("open",o.isOpen(n)),s.Vc("id","question-"+n.id+"-answer")("tabindex",o.isOpen(n)?null:-1),s.mc("inert",o.isOpen(n)?null:"true"),s.lc(2),s.Vc("ngIf","text"===n.answer.format),s.lc(1),s.Vc("ngIf","safe-html"===n.answer.format),s.lc(1),s.Vc("ngIf","unsafe-html"===n.answer.format)}}let u=(()=>{class CoreLoginSiteHelpComponent{constructor(n){var t;this.el=n,this.questions=[],this.hydrated=!1,this.promises=[];const o=c.I.instant("core.login.faqsetupsitelinktitle"),e=i.a.canScanQR(),a=r.b.FAQ_URL_IMAGE_HTML,s=r.b.FAQ_QRCODE_IMAGE_HTML,l=`<a href="${r.c}" title="${o}">${r.c}</a>`,g=[{text:c.I.instant("core.login.faqwhatisurlquestion"),answer:{text:c.I.instant("core.login.faqwhatisurlanswer",{$image:a}),format:f.SafeHTML,class:"core-login-faqwhatisurlanswer"}},{text:c.I.instant("core.login.faqcannotfindmysitequestion"),answer:{text:c.I.instant("core.login.faqcannotfindmysiteanswer"),format:f.Text}},{text:c.I.instant("core.login.faqcantloginquestion"),answer:{text:c.I.instant("core.login.faqcantloginanswer"),format:f.SafeHTML}},e&&{text:c.I.instant("core.login.faqwhereisqrcode"),answer:{text:c.I.instant("core.login.faqwhereisqrcodeanswer",{$image:s}),format:f.SafeHTML,class:"core-login-faqwhereisqrcodeanswer"}},{text:c.I.instant("core.login.faqsetupsitequestion"),answer:{text:c.I.instant("core.login.faqsetupsiteanswer",{$link:l}),format:f.UnsafeHTML}},{text:c.I.instant("core.login.faqtestappquestion"),answer:{text:c.I.instant("core.login.faqtestappanswer"),format:f.SafeHTML}}];for(const n of g)n&&this.questions.push(Object.assign(Object.assign({},n),{id:this.questions.length+1,answer:Object.assign(Object.assign({},n.answer),{class:null!==(t=n.answer.class)&&void 0!==t?t:""})}))}ngAfterViewInit(){return Object(e.a)(this,void 0,void 0,(function*(){const n=Array.from(this.el.nativeElement.querySelectorAll(".core-login-site-help--answer"));yield Promise.all(n.map((n=>Object(e.a)(this,void 0,void 0,(function*(){yield this.track(i.a.waitFor((()=>0!==n.clientHeight))),yield this.track(a.a.waitForImages(n)),n.style.setProperty("--height",`${n.clientHeight}px`)}))))),this.hydrated=!0}))}ngOnDestroy(){this.promises.forEach((n=>n.cancel()))}isOpen(n){return this.openQuestion===n.id}toggle(n){if(n.id===this.openQuestion)return delete this.openQuestion,void 0;this.openQuestion=n.id}close(){c.w.dismiss()}track(n){const remove=()=>{const t=this.promises.indexOf(n);-1!==t&&this.promises.splice(t,1)};return this.promises.push(n),n.then(remove).catch(remove),n}}return CoreLoginSiteHelpComponent.ɵfac=function CoreLoginSiteHelpComponent_Factory(n){return new(n||CoreLoginSiteHelpComponent)(s.yc(s.r))},CoreLoginSiteHelpComponent.ɵcmp=s.sc({type:CoreLoginSiteHelpComponent,selectors:[["core-login-site-help"]],hostVars:2,hostBindings:function CoreLoginSiteHelpComponent_HostBindings(n,t){2&n&&s.qc("hydrated",t.hydrated)},decls:17,vars:10,consts:[["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","fas-xmark","aria-hidden","true"],[4,"ngFor","ngForOf"],[3,"innerHTML"],["button","","sticky","true","role","heading","detail","false",1,"ion-text-wrap","divider",3,"click"],["name","fas-chevron-right","flip-rtl","","slot","start","aria-hidden","true",1,"expandable-status-icon"],[3,"id","tabindex"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"text","filter",4,"ngIf"],[3,"text","filter"]],template:function CoreLoginSiteHelpComponent_Template(n,t){1&n&&(s.Ec(0,"ion-header"),s.Ec(1,"ion-toolbar"),s.Ec(2,"ion-title"),s.Ec(3,"h1"),s.pd(4),s.Pc(5,"translate"),s.Dc(),s.Dc(),s.Ec(6,"ion-buttons",0),s.Ec(7,"ion-button",1),s.Mc("click",(function CoreLoginSiteHelpComponent_Template_ion_button_click_7_listener(){return t.close()})),s.Pc(8,"translate"),s.zc(9,"ion-icon",2),s.Dc(),s.Dc(),s.Dc(),s.Dc(),s.Ec(10,"ion-content"),s.Ec(11,"ion-list"),s.nd(12,CoreLoginSiteHelpComponent_ng_container_12_Template,11,15,"ng-container",3),s.Ec(13,"ion-item"),s.Ec(14,"ion-label"),s.zc(15,"p",4),s.Pc(16,"translate"),s.Dc(),s.Dc(),s.Dc(),s.Dc()),2&n&&(s.lc(4),s.qd(s.Qc(5,4,"core.login.help")),s.lc(3),s.mc("aria-label",s.Qc(8,6,"core.close")),s.lc(5),s.Vc("ngForOf",t.questions),s.lc(3),s.Vc("innerHTML",s.Qc(16,8,"core.login.faqmore"),s.gd))},directives:[l.C,l.Ab,l.yb,l.m,g.a,l.l,l.D,_.a,d.a,l.v,l.P,p.s,l.I,l.O,p.t,m.a],pipes:[C.d],styles:["[_nghost-%COMP%]   .core-login-faqwhatisurlanswer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50px}[_nghost-%COMP%]   .core-login-faqwhereisqrcodeanswer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:220px;margin-top:5px;margin-bottom:5px}[_nghost-%COMP%]:not(.hydrated)   .core-login-site-help--answer[_ngcontent-%COMP%]{opacity:0;max-width:100%;position:absolute;pointer-events:none}.hydrated[_nghost-%COMP%]   .core-login-site-help--answer[_ngcontent-%COMP%]{height:0;transition:height .2s ease-in-out}.hydrated[_nghost-%COMP%]   .core-login-site-help--answer.open[_ngcontent-%COMP%]{height:var(--height)}"]}),CoreLoginSiteHelpComponent})();var f=function(n){return n.Text="text",n.SafeHTML="safe-html",n.UnsafeHTML="unsafe-html",n}({})},R5ZM:function(n,t,o){"use strict";o.d(t,"a",(function(){return _}));var e=o("mrSG"),i=o("mv9v"),c=o("9+EE"),r=o("fXoL"),a=o("ofXK"),s=o("ACYt"),l=o("TEn/"),g=o("3CSS");function CoreLoginMethodsComponent_ng_container_0_ion_button_1_ion_icon_1_Template(n,t){if(1&n&&r.zc(0,"ion-icon",4),2&n){const n=r.Oc().$implicit;r.Vc("name",n.icon)}}function CoreLoginMethodsComponent_ng_container_0_ion_button_1_Template(n,t){if(1&n&&(r.Ec(0,"ion-button",2),r.Mc("click",(function CoreLoginMethodsComponent_ng_container_0_ion_button_1_Template_ion_button_click_0_listener(){return t.$implicit.action()})),r.nd(1,CoreLoginMethodsComponent_ng_container_0_ion_button_1_ion_icon_1_Template,1,1,"ion-icon",3),r.Ec(2,"ion-label"),r.pd(3),r.Dc(),r.Dc()),2&n){const n=t.$implicit;r.Vc("fill","outline"),r.mc("aria-label",n.name),r.lc(1),r.Vc("ngIf",n.icon),r.lc(2),r.qd(n.name)}}function CoreLoginMethodsComponent_ng_container_0_Template(n,t){if(1&n&&(r.Cc(0),r.nd(1,CoreLoginMethodsComponent_ng_container_0_ion_button_1_Template,4,4,"ion-button",1),r.Bc()),2&n){const n=r.Oc();r.lc(1),r.Vc("ngForOf",n.loginMethods)}}let _=(()=>{class CoreLoginMethodsComponent{ngOnInit(){return Object(e.a)(this,void 0,void 0,(function*(){this.loginMethods=yield i.a.getLoginMethods();const n=c.c.getCurrentSite(),t=yield i.a.getDefaultLoginMethod();(null==n?void 0:n.isLoggedOut())&&t&&(yield t.action())}))}}return CoreLoginMethodsComponent.ɵfac=function CoreLoginMethodsComponent_Factory(n){return new(n||CoreLoginMethodsComponent)},CoreLoginMethodsComponent.ɵcmp=r.sc({type:CoreLoginMethodsComponent,selectors:[["core-login-methods"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","ion-text-wrap ion-margin","expand","block",3,"fill","click",4,"ngFor","ngForOf"],["expand","block",1,"ion-text-wrap","ion-margin",3,"fill","click"],["slot","start",3,"name",4,"ngIf"],["slot","start",3,"name"]],template:function CoreLoginMethodsComponent_Template(n,t){1&n&&r.nd(0,CoreLoginMethodsComponent_ng_container_0_Template,2,1,"ng-container",0),2&n&&r.Vc("ngIf",null==t.loginMethods?null:t.loginMethods.length)},directives:[a.t,a.s,s.a,l.l,l.O,l.D,g.a],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.ios[_ngcontent-%COMP%]{--inner-border-width:0 0 1px 0}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"]}),CoreLoginMethodsComponent})()},RiDC:function(n,t,o){"use strict";o.d(t,"a",(function(){return L}));var e=o("mrSG"),i=o("3LXp"),c=o("9+EE"),r=o("mv9v"),a=o("pHTc"),s=o("tS8V"),l=o("MUy3"),g=o("j3ag"),_=o("fXoL"),d=o("TEn/"),p=o("ACYt"),m=o("3CSS"),C=o("ofXK"),u=o("nt/U"),f=o("PgjG"),O=o("yNDK"),h=o("hMzs"),M=o("iSJP"),b=o("NcPy"),P=o("sYmb");function CoreLoginSitesComponent_ion_button_11_Template(n,t){if(1&n){const n=_.Fc();_.Ec(0,"ion-button",1),_.Mc("click",(function CoreLoginSitesComponent_ion_button_11_Template_ion_button_click_0_listener(){_.fd(n);return _.Oc().toggleDelete()})),_.Pc(1,"translate"),_.zc(2,"ion-icon",14),_.Dc()}2&n&&_.mc("aria-label",_.Qc(1,1,"core.login.toggleremove"))}function CoreLoginSitesComponent_ion_card_15_ng_container_16_Template(n,t){1&n&&_.Ac(0)}const _c0=function(n){return{$a:n}},_c1=function(n){return{sites:n}};function CoreLoginSitesComponent_ion_card_15_Template(n,t){if(1&n&&(_.Ec(0,"ion-card"),_.Ec(1,"ion-item-divider",15),_.Ec(2,"ion-label"),_.Ec(3,"h2"),_.zc(4,"core-format-text",16),_.Dc(),_.Ec(5,"p"),_.Ec(6,"a",17),_.pd(7),_.Dc(),_.Dc(),_.Dc(),_.Dc(),_.Ec(8,"ion-item",18),_.Ec(9,"ion-avatar",0),_.zc(10,"img",19),_.Pc(11,"translate"),_.Dc(),_.Ec(12,"ion-label"),_.Ec(13,"p",20),_.pd(14),_.Dc(),_.Dc(),_.zc(15,"ion-icon",21),_.Dc(),_.nd(16,CoreLoginSitesComponent_ion_card_15_ng_container_16_Template,1,0,"ng-container",22),_.Dc()),2&n){const n=_.Oc(),t=_.ed(25);_.lc(4),_.Vc("text",n.accountsList.currentSite.siteName)("siteId",n.accountsList.currentSite.id),_.lc(2),_.Vc("href",n.accountsList.currentSite.siteUrl,_.id),_.lc(1),_.qd(n.accountsList.currentSite.siteUrlWithoutProtocol),_.lc(3),_.Wc("alt",_.Rc(11,10,"core.pictureof",_.ad(13,_c0,n.accountsList.currentSite.fullName))),_.Vc("src",n.accountsList.currentSite.avatar,_.id)("siteId",n.accountsList.currentSite.id),_.lc(4),_.qd(n.accountsList.currentSite.fullName),_.lc(2),_.Vc("ngTemplateOutlet",t)("ngTemplateOutletContext",_.ad(15,_c1,n.accountsList.sameSite))}}function CoreLoginSitesComponent_ion_card_16_ion_item_divider_1_Template(n,t){if(1&n&&(_.Ec(0,"ion-item-divider",15),_.Ec(1,"ion-label"),_.Ec(2,"h2"),_.zc(3,"core-format-text",16),_.Dc(),_.Ec(4,"p"),_.Ec(5,"a",24),_.pd(6),_.Dc(),_.Dc(),_.Dc(),_.Dc()),2&n){const n=_.Oc().$implicit;_.lc(3),_.Vc("text",n[0].siteName)("siteId",n[0].id),_.lc(2),_.Vc("href",n[0].siteUrl,_.id),_.lc(1),_.qd(n[0].siteUrlWithoutProtocol)}}function CoreLoginSitesComponent_ion_card_16_ng_container_2_Template(n,t){1&n&&_.Ac(0)}function CoreLoginSitesComponent_ion_card_16_Template(n,t){if(1&n&&(_.Ec(0,"ion-card"),_.nd(1,CoreLoginSitesComponent_ion_card_16_ion_item_divider_1_Template,7,4,"ion-item-divider",23),_.nd(2,CoreLoginSitesComponent_ion_card_16_ng_container_2_Template,1,0,"ng-container",22),_.Dc()),2&n){const n=t.$implicit;_.Oc();const o=_.ed(25);_.lc(1),_.Vc("ngIf",n[0]),_.lc(1),_.Vc("ngTemplateOutlet",o)("ngTemplateOutletContext",_.ad(3,_c1,n))}}const _c2=function(n){return{count:n}};function CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_badge_7_Template(n,t){if(1&n&&(_.Ec(0,"ion-badge",3),_.Ec(1,"span",29),_.pd(2),_.Dc(),_.Ec(3,"span",12),_.pd(4),_.Pc(5,"translate"),_.Dc(),_.Dc()),2&n){const n=_.Oc().$implicit;_.Vc("@coreShowHideAnimation",void 0),_.lc(2),_.qd(n.badge),_.lc(2),_.qd(_.Rc(5,3,"core.login.sitebadgedescription",_.ad(6,_c2,n.badge)))}}function CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_button_8_Template(n,t){if(1&n){const n=_.Fc();_.Ec(0,"ion-button",30),_.Mc("click",(function CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_button_8_Template_ion_button_click_0_listener(t){_.fd(n);const o=_.Oc().$implicit;return _.Oc(2).deleteSite(t,o)})),_.Pc(1,"translate"),_.zc(2,"ion-icon",31),_.Dc()}2&n&&(_.Vc("@coreSlideInOut","fromRight"),_.mc("aria-label",_.Qc(1,2,"core.login.removeaccount")))}function CoreLoginSitesComponent_ng_template_24_ion_item_0_Template(n,t){if(1&n){const n=_.Fc();_.Ec(0,"ion-item",26),_.Mc("click",(function CoreLoginSitesComponent_ng_template_24_ion_item_0_Template_ion_item_click_0_listener(o){_.fd(n);const e=t.$implicit;return _.Oc(2).login(o,e.id)})),_.Ec(1,"ion-avatar",0),_.zc(2,"img",19),_.Pc(3,"translate"),_.Dc(),_.Ec(4,"ion-label"),_.Ec(5,"p",20),_.pd(6),_.Dc(),_.Dc(),_.nd(7,CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_badge_7_Template,6,8,"ion-badge",27),_.nd(8,CoreLoginSitesComponent_ng_template_24_ion_item_0_ion_button_8_Template,3,4,"ion-button",28),_.Dc()}if(2&n){const n=t.$implicit,o=_.Oc(2);_.lc(2),_.Wc("alt",_.Rc(3,6,"core.pictureof",_.ad(9,_c0,n.fullName))),_.Vc("src",n.avatar,_.id)("siteId",n.id),_.lc(4),_.qd(n.fullName),_.lc(1),_.Vc("ngIf",!o.showDelete&&n.badge),_.lc(1),_.Vc("ngIf",o.showDelete)}}function CoreLoginSitesComponent_ng_template_24_Template(n,t){if(1&n&&_.nd(0,CoreLoginSitesComponent_ng_template_24_ion_item_0_Template,9,11,"ion-item",25),2&n){_.Vc("ngForOf",t.sites)}}let L=(()=>{class CoreLoginSitesComponent{constructor(){this.accountsList={sameSite:[],otherSites:[],count:0},this.showDelete=!1,this.loaded=!1,this.currentSiteId=c.c.getRequiredCurrentSite().getId()}ngOnInit(){return Object(e.a)(this,void 0,void 0,(function*(){this.accountsList=yield r.a.getAccountsList(this.currentSiteId),this.loaded=!0}))}add(n){return Object(e.a)(this,void 0,void 0,(function*(){yield this.close(n,!0),yield r.a.goToAddSite(!0,!0)}))}deleteSite(n,t){return Object(e.a)(this,void 0,void 0,(function*(){n.stopPropagation();let o=t.siteName||"";o=yield s.a.formatText(o,{clean:!0,singleLine:!0,filter:!1},[],t.id);try{yield i.a.showDeleteConfirm("core.login.confirmdeletesite",{sitename:o})}catch(n){return}try{yield r.a.deleteAccountFromList(this.accountsList,t),this.showDelete=!1}catch(n){i.a.showErrorModalDefault(n,"core.login.errordeletesite",!0)}}))}login(n,t){return Object(e.a)(this,void 0,void 0,(function*(){yield this.close(n,!0),yield a.a.navigateToSiteHome({preferCurrentTab:!1,siteId:t})}))}toggleDelete(){this.showDelete=!this.showDelete}close(n,t=!1){return Object(e.a)(this,void 0,void 0,(function*(){n.preventDefault(),n.stopPropagation(),yield g.w.dismiss(t)}))}}return CoreLoginSitesComponent.ɵfac=function CoreLoginSitesComponent_Factory(n){return new(n||CoreLoginSitesComponent)},CoreLoginSitesComponent.ɵcmp=_.sc({type:CoreLoginSitesComponent,selectors:[["core-login-sites"]],decls:26,vars:16,consts:[["slot","start"],["fill","clear",3,"click"],["name","arrow-back","slot","icon-only","aria-hidden","true"],["slot","end"],["fill","clear",3,"click",4,"ngIf"],[3,"hideUntil"],[1,"core-sitelist"],[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","fixed","core-fab","","vertical","bottom","horizontal","end"],[3,"click"],["name","fas-plus","aria-hidden","true"],[1,"sr-only"],["siteList",""],["slot","icon-only","name","fas-pen","aria-hidden","true"],["sticky","true",1,"core-sitelist-sitename"],["clean","true",3,"text","siteId"],["core-link","","autoLogin","yes",3,"href"],["detail","false"],["core-external-content","","onError","this.src='assets/img/user-avatar.png'",3,"src","siteId","alt"],[1,"item-heading"],["color","success","name","fas-check"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["sticky","true","class","core-sitelist-sitename",4,"ngIf"],["core-link","","autoLogin","no",3,"href"],["button","","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",3,"click"],["slot","end",4,"ngIf"],["slot","end","fill","clear","color","danger",3,"click",4,"ngIf"],["aria-hidden","true"],["slot","end","fill","clear","color","danger",3,"click"],["name","fas-trash","slot","icon-only","aria-hidden","true"]],template:function CoreLoginSitesComponent_Template(n,t){1&n&&(_.Ec(0,"ion-header"),_.Ec(1,"ion-toolbar"),_.Ec(2,"ion-buttons",0),_.Ec(3,"ion-button",1),_.Mc("click",(function CoreLoginSitesComponent_Template_ion_button_click_3_listener(n){return t.close(n)})),_.Pc(4,"translate"),_.zc(5,"ion-icon",2),_.Dc(),_.Dc(),_.Ec(6,"ion-title"),_.Ec(7,"h1"),_.pd(8),_.Pc(9,"translate"),_.Dc(),_.Dc(),_.Ec(10,"ion-buttons",3),_.nd(11,CoreLoginSitesComponent_ion_button_11_Template,3,3,"ion-button",4),_.Dc(),_.Dc(),_.Dc(),_.Ec(12,"ion-content"),_.Ec(13,"core-loading",5),_.Ec(14,"ion-list",6),_.nd(15,CoreLoginSitesComponent_ion_card_15_Template,17,17,"ion-card",7),_.nd(16,CoreLoginSitesComponent_ion_card_16_Template,3,5,"ion-card",8),_.Dc(),_.Dc(),_.Ec(17,"ion-fab",9),_.Ec(18,"ion-fab-button",10),_.Mc("click",(function CoreLoginSitesComponent_Template_ion_fab_button_click_18_listener(n){return t.add(n)})),_.Pc(19,"translate"),_.zc(20,"ion-icon",11),_.Ec(21,"span",12),_.pd(22),_.Pc(23,"translate"),_.Dc(),_.Dc(),_.Dc(),_.Dc(),_.nd(24,CoreLoginSitesComponent_ng_template_24_Template,1,1,"ng-template",null,13,_.od)),2&n&&(_.lc(3),_.mc("aria-label",_.Qc(4,8,"core.back")),_.lc(5),_.qd(_.Qc(9,10,"core.mainmenu.switchaccount")),_.lc(3),_.Vc("ngIf",t.accountsList.count>1),_.lc(2),_.Vc("hideUntil",t.loaded),_.lc(2),_.Vc("ngIf",t.accountsList.currentSite),_.lc(1),_.Vc("ngForOf",t.accountsList.otherSites),_.lc(2),_.mc("aria-label",_.Qc(19,12,"core.login.add")),_.lc(4),_.qd(_.Qc(23,14,"core.login.add")))},directives:[d.C,d.Ab,d.m,p.a,d.l,d.D,m.a,d.yb,C.t,u.a,d.v,f.a,d.P,C.s,d.x,O.a,d.y,d.n,d.J,d.O,h.a,M.a,d.I,d.g,b.a,C.A,d.k],pipes:[P.d],styles:["ion-list.core-sitelist[_ngcontent-%COMP%]   .core-sitelist-sitename[_ngcontent-%COMP%]{border-bottom:1px solid var(--stroke)}ion-list.core-sitelist[_ngcontent-%COMP%]   .core-sitelist-sitename[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}"],data:{animation:[l.a.SLIDE_IN_OUT,l.a.SHOW_HIDE]}}),CoreLoginSitesComponent})()},ho2i:function(n,t,o){"use strict";o.d(t,"a",(function(){return g}));var e=o("L3Fv"),i=o("m2Ry"),c=o("JpIC"),r=o("RiDC"),a=o("R5ZM"),s=o("uI1u"),l=o("fXoL");let g=(()=>{class CoreLoginComponentsModule{}return CoreLoginComponentsModule.ɵmod=l.wc({type:CoreLoginComponentsModule}),CoreLoginComponentsModule.ɵinj=l.vc({factory:function CoreLoginComponentsModule_Factory(n){return new(n||CoreLoginComponentsModule)},imports:[[e.a]]}),CoreLoginComponentsModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&l.kd(g,{declarations:[s.a,i.a,c.a,r.a,a.a],imports:[e.a],exports:[s.a,i.a,c.a,r.a,a.a]}))},m2Ry:function(n,t,o){"use strict";o.d(t,"a",(function(){return m}));var e=o("BBqZ"),i=o("bFG1"),c=o("mv9v"),r=o("j3ag"),a=o("fXoL"),s=o("TEn/"),l=o("ACYt"),g=o("3CSS"),_=o("nt/U"),d=o("ofXK"),p=o("sYmb");function CoreLoginSiteOnboardingComponent_div_19_Template(n,t){if(1&n){const n=a.Fc();a.Ec(0,"div",7),a.Ec(1,"ion-button",9),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_19_Template_ion_button_click_1_listener(t){a.fd(n);return a.Oc().skip(t)})),a.pd(2),a.Pc(3,"translate"),a.Dc(),a.Ec(4,"ion-button",9),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_19_Template_ion_button_click_4_listener(t){a.fd(n);return a.Oc().next(t)})),a.pd(5),a.Pc(6,"translate"),a.Dc(),a.Dc()}2&n&&(a.lc(2),a.rd(" ",a.Qc(3,2,"core.login.onboardingimalearner")," "),a.lc(3),a.rd(" ",a.Qc(6,4,"core.login.onboardingimaneducator")," "))}function CoreLoginSiteOnboardingComponent_div_20_Template(n,t){if(1&n){const n=a.Fc();a.Ec(0,"div",7),a.Ec(1,"p",10),a.pd(2),a.Pc(3,"translate"),a.Dc(),a.Ec(4,"ion-button",9),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_20_Template_ion_button_click_4_listener(t){a.fd(n);return a.Oc().skip(t)})),a.pd(5),a.Pc(6,"translate"),a.Dc(),a.Ec(7,"ion-button",11),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_20_Template_ion_button_click_7_listener(t){a.fd(n);return a.Oc().next(t)})),a.pd(8),a.Pc(9,"translate"),a.Dc(),a.Dc()}2&n&&(a.lc(2),a.rd(" ",a.Qc(3,3,"core.login.onboardingtoconnect")," "),a.lc(3),a.rd(" ",a.Qc(6,5,"core.login.onboardingialreadyhaveasite")," "),a.lc(3),a.rd(" ",a.Qc(9,7,"core.login.onboardingineedasite")," "))}function CoreLoginSiteOnboardingComponent_div_21_Template(n,t){if(1&n){const n=a.Fc();a.Ec(0,"div",7),a.Ec(1,"ul",12),a.Ec(2,"li"),a.zc(3,"ion-icon",13),a.pd(4),a.Pc(5,"translate"),a.Dc(),a.Ec(6,"li"),a.zc(7,"ion-icon",13),a.pd(8),a.Pc(9,"translate"),a.Dc(),a.Ec(10,"li"),a.zc(11,"ion-icon",13),a.pd(12),a.Pc(13,"translate"),a.Dc(),a.Dc(),a.Ec(14,"ion-button",11),a.Mc("click",(function CoreLoginSiteOnboardingComponent_div_21_Template_ion_button_click_14_listener(t){a.fd(n);return a.Oc().gotoWeb(t)})),a.pd(15),a.Pc(16,"translate"),a.Dc(),a.Dc()}2&n&&(a.lc(4),a.rd(" ",a.Qc(5,4,"core.login.onboardingcreatemanagecourses")," "),a.lc(4),a.rd(" ",a.Qc(9,6,"core.login.onboardingenrolmanagestudents")," "),a.lc(4),a.rd(" ",a.Qc(13,8,"core.login.onboardingprovidefeedback")," "),a.lc(3),a.rd(" ",a.Qc(16,10,"core.login.onboardinggetstarted")," "))}let m=(()=>{class CoreLoginSiteOnboardingComponent{constructor(){this.step=0}next(n){n.stopPropagation(),this.step++}previous(n){n.stopPropagation(),0==this.step?r.w.dismiss():this.step--}skip(n){n.stopPropagation(),this.saveOnboardingDone(),r.w.dismiss()}gotoWeb(n){n.stopPropagation(),this.saveOnboardingDone(),i.a.openInBrowser(c.c,{showBrowserWarning:!1}),r.w.dismiss()}saveOnboardingDone(){e.a.set(c.b.ONBOARDING_DONE,1)}}return CoreLoginSiteOnboardingComponent.ɵfac=function CoreLoginSiteOnboardingComponent_Factory(n){return new(n||CoreLoginSiteOnboardingComponent)},CoreLoginSiteOnboardingComponent.ɵcmp=a.sc({type:CoreLoginSiteOnboardingComponent,selectors:[["core-login-site-onboarding"]],decls:22,vars:15,consts:[["slot","start"],["fill","clear",3,"click"],["slot","icon-only","name","fas-arrow-left","aria-hidden","true"],["slot","end"],[1,"ion-padding"],[1,"ion-text-center","ion-padding","core-login-site-logo"],["src","assets/img/login_logo.png","role","presentation","alt","",1,"avatar-full","login-logo"],[1,"core-login-onboarding-step"],["class","core-login-onboarding-step",4,"ngIf"],["expand","block","fill","outline",1,"ion-margin-bottom",3,"click"],[1,"core-login-onboarding-text"],["expand","block",1,"ion-margin-bottom",3,"click"],[1,"core-login-onboarding-text","ion-text-start"],["name","far-circle-check","aria-hidden","true"]],template:function CoreLoginSiteOnboardingComponent_Template(n,t){1&n&&(a.Ec(0,"ion-header"),a.Ec(1,"ion-toolbar"),a.Ec(2,"ion-buttons",0),a.Ec(3,"ion-button",1),a.Mc("click",(function CoreLoginSiteOnboardingComponent_Template_ion_button_click_3_listener(n){return t.previous(n)})),a.Pc(4,"translate"),a.zc(5,"ion-icon",2),a.Dc(),a.Dc(),a.zc(6,"ion-title"),a.Ec(7,"ion-buttons",3),a.Ec(8,"ion-button",1),a.Mc("click",(function CoreLoginSiteOnboardingComponent_Template_ion_button_click_8_listener(n){return t.skip(n)})),a.Pc(9,"translate"),a.pd(10),a.Pc(11,"translate"),a.Dc(),a.Dc(),a.Dc(),a.Dc(),a.Ec(12,"ion-content",4),a.Ec(13,"div"),a.Ec(14,"div",5),a.zc(15,"img",6),a.Dc(),a.Ec(16,"h1",7),a.pd(17),a.Pc(18,"translate"),a.Dc(),a.nd(19,CoreLoginSiteOnboardingComponent_div_19_Template,7,6,"div",8),a.nd(20,CoreLoginSiteOnboardingComponent_div_20_Template,10,9,"div",8),a.nd(21,CoreLoginSiteOnboardingComponent_div_21_Template,17,12,"div",8),a.Dc(),a.Dc()),2&n&&(a.lc(3),a.mc("aria-label",a.Qc(4,7,"core.back")),a.lc(5),a.mc("aria-label",a.Qc(9,9,"core.skip")),a.lc(2),a.rd(" ",a.Qc(11,11,"core.skip")," "),a.lc(7),a.rd(" ",a.Qc(18,13,"core.login.onboardingwelcome")," "),a.lc(2),a.Vc("ngIf",0==t.step),a.lc(1),a.Vc("ngIf",1==t.step),a.lc(1),a.Vc("ngIf",2==t.step))},directives:[s.C,s.Ab,s.m,l.a,s.l,s.D,g.a,s.yb,_.a,s.v,d.t],pipes:[p.d],styles:["[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]{padding:10px 20px;text-align:center;margin:0 auto}@media (min-width:768px){[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]{max-width:80%}}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:30px;list-style-type:none;-webkit-padding-start:10px;padding-inline-start:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%]{margin-top:20px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:22px}","[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.ios[_ngcontent-%COMP%]{--inner-border-width:0 0 1px 0}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"]}),CoreLoginSiteOnboardingComponent})()},uI1u:function(n,t,o){"use strict";o.d(t,"a",(function(){return d}));var e=o("mrSG"),i=o("51eS"),c=o("fXoL"),r=o("TEn/"),a=o("3CSS"),s=o("ofXK"),l=o("ACYt"),g=o("sYmb");function CoreLoginExceededAttemptsComponent_ion_button_6_Template(n,t){if(1&n){const n=c.Fc();c.Ec(0,"ion-button",3),c.Mc("click",(function CoreLoginExceededAttemptsComponent_ion_button_6_Template_ion_button_click_0_listener(){c.fd(n);return c.Oc().contactSupport()})),c.pd(1),c.Pc(2,"translate"),c.Dc()}2&n&&(c.lc(1),c.rd(" ",c.Qc(2,1,"core.contactsupport")," "))}const _=["*"];let d=(()=>{class CoreLoginExceededAttemptsComponent{constructor(){this.canContactSupport=!1}ngOnInit(){this.canContactSupport=this.supportConfig.canContactSupport()}contactSupport(){return Object(e.a)(this,void 0,void 0,(function*(){yield i.a.contact({supportConfig:this.supportConfig,subject:this.supportSubject})}))}}return CoreLoginExceededAttemptsComponent.ɵfac=function CoreLoginExceededAttemptsComponent_Factory(n){return new(n||CoreLoginExceededAttemptsComponent)},CoreLoginExceededAttemptsComponent.ɵcmp=c.sc({type:CoreLoginExceededAttemptsComponent,selectors:[["core-login-exceeded-attempts"]],inputs:{supportConfig:"supportConfig",supportSubject:"supportSubject"},ngContentSelectors:_,decls:7,vars:1,consts:[[1,"core-danger-card"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"],["fill","outline","color","medium",3,"click",4,"ngIf"],["fill","outline","color","medium",3,"click"]],template:function CoreLoginExceededAttemptsComponent_Template(n,t){1&n&&(c.Uc(),c.Ec(0,"ion-card",0),c.Ec(1,"ion-item"),c.zc(2,"ion-icon",1),c.Ec(3,"ion-label"),c.Ec(4,"p"),c.Tc(5),c.Dc(),c.nd(6,CoreLoginExceededAttemptsComponent_ion_button_6_Template,3,3,"ion-button",2),c.Dc(),c.Dc(),c.Dc()),2&n&&(c.lc(6),c.Vc("ngIf",t.canContactSupport))},directives:[r.n,r.I,r.D,a.a,r.O,s.t,l.a,r.l],pipes:[g.d],styles:["[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:0;margin-right:0;margin-top:16px}"]}),CoreLoginExceededAttemptsComponent})()}}]);