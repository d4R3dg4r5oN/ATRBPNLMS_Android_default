(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{k5eQ:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",(function(){return a})),n.d(e,"ion_route_redirect",(function(){return h})),n.d(e,"ion_router",(function(){return d})),n.d(e,"ion_router_link",(function(){return f}));var o=n("wEJo"),r=n("W6o/"),i=n("E/Mt"),s=n("74mu");const a=class{constructor(t){Object(o.o)(this,t),this.ionRouteDataChanged=Object(o.g)(this,"ionRouteDataChanged",7),this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length!==o.length)return this.onUpdate(t),void 0;for(const o of n)if(t[o]!==e[o])return this.onUpdate(t),void 0}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},h=class{constructor(t){Object(o.o)(this,t),this.ionRouteRedirectChanged=Object(o.g)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},c="root",u="forward",generatePath=t=>"/"+t.filter((t=>t.length>0)).join("/"),writePath=(t,e,n,o,r,i,s)=>{const a=((t,e,n)=>{let o=generatePath(t);return e&&(o="#"+o),void 0!==n&&(o+="?"+n),o})([...parsePath(e).segments,...o],n,s);r===u?t.pushState(i,"",a):t.replaceState(i,"",a)},parsePath=t=>{let e,n=[""];if(null!=t){const o=t.indexOf("?");o>-1&&(e=t.substr(o+1),t=t.substr(0,o)),n=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===n.length&&(n=[""])}return{segments:n,queryString:e}},writeNavState=async(t,e,n,o,i=!1,s)=>{try{const a=searchNavNode(t);if(o>=e.length||!a)return i;await new Promise((t=>Object(r.c)(a,t)));const h=e[o],u=await a.setRouteId(h.id,h.params,n,s);return u.changed&&(n=c,i=!0),i=await writeNavState(u.element,e,n,o+1,i,s),u.markVisible&&await u.markVisible(),i}catch(t){return console.error(t),!1}},l=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",searchNavNode=t=>{if(!t)return;if(t.matches(l))return t;const e=t.querySelector(l);return null!=e?e:void 0},findRouteRedirect=(t,e)=>e.find((e=>((t,e)=>{const{from:n,to:o}=e;if(void 0===o)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const o=n[e];if("*"===o)return!0;if(o!==t[e])return!1}return n.length===t.length})(t,e))),matchesIDs=(t,e)=>{const n=Math.min(t.length,e.length);let o=0;for(let r=0;r<n;r++){const n=t[r],i=e[r];if(n.id.toLowerCase()!==i.id)break;if(n.params){const t=Object.keys(n.params);if(t.length===i.path.length){const e=t.map((t=>`:${t}`));for(let t=0;t<e.length&&e[t].toLowerCase()===i.path[t];t++)o++}}o++}return o},matchesPath=(t,e)=>{const n=new RouterSegments(t);let o,r=!1;for(let t=0;t<e.length;t++){const i=e[t].path;if(""===i[0])r=!0;else{for(const e of i){const r=n.next();if(":"===e[0]){if(""===r)return null;o=o||[];(o[t]||(o[t]={}))[e.slice(1)]=r}else if(r!==e)return null}r=!1}}return!r||r===(""===n.next())?o?e.map(((t,e)=>({id:t.id,path:t.path,params:mergeParams(t.params,o[e]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):e:null},mergeParams=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,routerPathToChain=(t,e)=>{let n=null,o=0;for(const r of e){const e=matchesPath(t,r);if(null!==e){const t=computePriority(e);t>o&&(o=t,n=e)}}return n},computePriority=t=>{let e=1,n=1;for(const o of t)for(const t of o.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e};class RouterSegments{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const readProp=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,readRedirects=t=>Array.from(t.children).filter((t=>"ION-ROUTE-REDIRECT"===t.tagName)).map((t=>{const e=readProp(t,"to");return{from:parsePath(readProp(t,"from")).segments,to:null==e?void 0:parsePath(e)}})),readRoutes=t=>flattenRouterTree(readRouteNodes(t)),readRouteNodes=t=>Array.from(t.children).filter((t=>"ION-ROUTE"===t.tagName&&t.component)).map((t=>{const e=readProp(t,"component");return{path:parsePath(readProp(t,"url")).segments,id:e.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:readRouteNodes(t)}})),flattenRouterTree=t=>{const e=[];for(const n of t)flattenNode([],e,n);return e},flattenNode=(t,e,n)=>{if((t=t.slice()).push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0===n.children.length)return e.push(t),void 0;for(const o of n.children)flattenNode(t,e,o)},d=class{constructor(t){Object(o.o)(this,t),this.ionRouteWillChange=Object(o.g)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o.g)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(searchNavNode(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})));const t=await this.runGuards(this.getPath());if(!0!==t){if("object"==typeof t){const{redirect:e}=t,n=parsePath(e);this.setPath(n.segments,c,n.queryString),await this.writeNavStateRoot(n.segments,c)}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(r.o)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(r.o)(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let e=this.getPath();const n=await this.runGuards(e);if(!0!==n){if("object"!=typeof n)return!1;e=parsePath(n.redirect).segments}return this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,e="forward",n){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);let o=parsePath(t);const r=await this.runGuards(o.segments);if(!0!==r){if("object"!=typeof r)return!1;o=parsePath(r.redirect)}return this.setPath(o.segments,e,o.queryString),this.writeNavStateRoot(o.segments,e,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach((e=>t.push(...e.path)));const n=e.map((t=>t.id));console.debug(`%c ${generatePath(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(readRoutes(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${generatePath(e.from)}`,"font-weight: bold"," TO: ",`$c ${generatePath(e.to.segments)}`,"font-weight: bold");console.groupEnd()})(readRedirects(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await(async t=>{const e=[];let n,o=t;for(;n=searchNavNode(o),n;){const t=await n.getRouteId();if(!t)break;o=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}})(window.document.body),o=((t,e)=>{let n=null,o=0;for(const r of e){const e=matchesIDs(t,r);e>o&&(n=r,o=e)}return n?n.map(((e,n)=>({id:e.id,path:e.path,params:mergeParams(e.params,t[n]&&t[n].params)}))):null})(e,readRoutes(this.el));if(!o)return console.warn("[ion-router] no matching URL for ",e.map((t=>t.id))),!1;const r=(t=>{const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const o=n.params&&n.params[t.slice(1)];if(!o)return null;e.push(o)}else""!==t&&e.push(t);return e})(o);return r?(this.setPath(r,t),await this.safeWriteNavState(n,o,c,r,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&findRouteRedirect(t,readRedirects(this.el))&&this.writeNavStateRoot(t,c)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),c)}historyDirection(){var t;const e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,null===(t=e.document.location)||void 0===t?void 0:t.href));const n=e.history.state,o=this.lastState;return this.lastState=n,n>o||n>=o&&o>0?u:n<o?"back":c}async writeNavStateRoot(t,e,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=readRedirects(this.el),r=findRouteRedirect(t,o);let i=null;if(r){const{segments:n,queryString:o}=r.to;this.setPath(n,e,o),i=r.from,t=n}const s=readRoutes(this.el),a=routerPathToChain(t,s);return a?this.safeWriteNavState(document.body,a,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,o,r,i=0,s){const a=await this.lock();let h=!1;try{h=await this.writeNavState(t,e,n,o,r,i,s)}catch(t){console.error(t)}return a(),h}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise((t=>e=t)),void 0!==t&&await t,e}async runGuards(t=this.getPath(),e){if(void 0===e&&(e=parsePath(this.previousPath).segments),!t||!e)return!0;const n=readRoutes(this.el),o=routerPathToChain(e,n),r=o&&o[o.length-1].beforeLeave,i=!r||await r();if(!1===i||"object"==typeof i)return i;const s=routerPathToChain(t,n),a=s&&s[s.length-1].beforeEnter;return!a||a()}async writeNavState(t,e,n,o,r,i=0,s){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const a=this.routeChangeEvent(o,r);a&&this.ionRouteWillChange.emit(a);const h=await writeNavState(t,e,n,i,!1,s);return this.busy=!1,a&&this.ionRouteDidChange.emit(a),h}setPath(t,e,n){this.state++,writePath(window.history,this.root,this.useHash,t,e,this.state,n)}getPath(){return((t,e,n)=>{const o=parsePath(e).segments,r=n?t.hash.slice(1):t.pathname;return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)})(o,parsePath(r).segments)})(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,o=generatePath(t);if(this.previousPath=o,o===n)return null;return{from:n,redirectedFrom:e?generatePath(e):null,to:o}}get el(){return Object(o.k)(this)}},f=class{constructor(t){Object(o.o)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(s.d)(this.href,t,this.routerDirection,this.routerAnimation)}}render(){const t=Object(i.b)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(o.j)(o.c,{onClick:this.onClick,class:Object(s.a)(this.color,{[t]:!0,"ion-activatable":!0})},Object(o.j)("a",Object.assign({},e),Object(o.j)("slot",null)))}};f.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}]);