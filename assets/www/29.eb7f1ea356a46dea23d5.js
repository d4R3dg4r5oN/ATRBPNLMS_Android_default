(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"2ACH":function(e,t,o){"use strict";o.d(t,"a",(function(){return AddonCompetencyCourseCompetenciesSource}));var n=o("mrSG"),s=o("CvRw"),i=o("bFG1"),r=o("FBtE"),c=o("qjHM");class AddonCompetencyCourseCompetenciesSource extends s.a{constructor(e,t){super(),this.COURSE_ID=e,this.USER_ID=t}static getSourceId(e,t){return`${e}-${t||"current-user"}`}getItemPath(e){return String(e.competency.id)}load(){const e=Object.create(null,{load:{get:()=>super.load}});return Object(n.a)(this,void 0,void 0,(function*(){!this.dirty&&this.courseCompetencies||(yield this.loadCourseCompetencies()),yield e.load.call(this)}))}invalidateCache(){return Object(n.a)(this,void 0,void 0,(function*(){yield i.a.ignoreErrors(r.a.invalidateCourseCompetencies(this.COURSE_ID,this.USER_ID))}))}loadPageItems(){return Object(n.a)(this,void 0,void 0,(function*(){if(!this.courseCompetencies)throw new Error("Can't load competencies without course data");return{items:this.courseCompetencies.competencies}}))}loadCourseCompetencies(){return Object(n.a)(this,void 0,void 0,(function*(){[this.courseCompetencies,this.user]=yield Promise.all([r.a.getCourseCompetencies(this.COURSE_ID,this.USER_ID),c.a.getProfile(this.USER_ID)])}))}}},TZ7a:function(e,t,o){"use strict";o.r(t),o.d(t,"AddonCompetencyCourseContentsLazyModule",(function(){return d}));var n=o("tyNb"),s=o("9DI8"),i=o("y5rm"),r=o("fXoL");const c=[{path:"",component:s.a}];let d=(()=>{class AddonCompetencyCourseContentsLazyModule{}return AddonCompetencyCourseContentsLazyModule.ɵmod=r.wc({type:AddonCompetencyCourseContentsLazyModule}),AddonCompetencyCourseContentsLazyModule.ɵinj=r.vc({factory:function AddonCompetencyCourseContentsLazyModule_Factory(e){return new(e||AddonCompetencyCourseContentsLazyModule)},imports:[[n.m.forChild(c),i.a]]}),AddonCompetencyCourseContentsLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.kd(d,{imports:[n.m,i.a]}))}}]);