(function(a,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(a=typeof globalThis<"u"?globalThis:a||self,r(a.Vue3WebComponentWrapper={},a.Vue))})(this,function(a,r){"use strict";var W=Object.defineProperty;var k=(a,r,b)=>r in a?W(a,r,{enumerable:!0,configurable:!0,writable:!0,value:b}):a[r]=b;var f=(a,r,b)=>(k(a,typeof r!="symbol"?r+"":r,b),b);/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const b=Object.assign,g=Array.isArray,j=e=>typeof e=="string",P=e=>{const l=Object.create(null);return t=>l[t]||(l[t]=e(t))},L=/-(\w)/g,O=P(e=>e.replace(L,(l,t)=>t?t.toUpperCase():"")),T=/\B([A-Z])/g,v=P(e=>e.replace(T,"-$1").toLowerCase()),S=e=>{const l=j(e)?Number(e):NaN;return isNaN(l)?e:l};/*! #__NO_SIDE_EFFECTS__ */function x(e,l,t){const s=r.defineComponent(e);class n extends w{constructor(i){super(s,i,l,t)}}return f(n,"def",s),n}const D=typeof HTMLElement<"u"?HTMLElement:class{};class w extends D{constructor(t,s={},n={},o){super();f(this,"_instance",null);f(this,"_connected",!1);f(this,"_resolved",!1);f(this,"_numberProps",null);f(this,"_styles");f(this,"_slots",{});f(this,"_ob",null);this._def=t,this._props=s,this._config=n,this._root&&o?o(this._createVNode(),this._root):(this._config.shadowRoot!==!1&&this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}get _root(){return this._config.shadowRoot?this.shadowRoot:this}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,r.nextTick(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),r.render(null,this._root),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver(n=>{for(const o of n)this._setAttr(o.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(n,o=!1)=>{const{props:i}=n,h=this._collectNestedStyles(n);let y;if(i&&!g(i))for(const p in i){const u=i[p];(u===Number||u&&u.type===Number)&&(p in this._props&&(this._props[p]=S(this._props[p])),(y||(y=Object.create(null)))[O(p)]=!0)}if(this._numberProps=y,o&&this._resolveProps(n),!this._config.shadowRoot){this._slots={};for(const p of Array.from(this.children)){const u=p.getAttribute("slot")||"default";this._slots[u]||(this._slots[u]=[]),this._slots[u].push(r.h(p.tagName.toLowerCase(),{},p.innerHTML))}this.replaceChildren()}this._applyStyles(h),this._update()},s=this._def.__asyncLoader;s?s().then(n=>t(n,!0)):t(this._def)}_resolveProps(t){const{props:s}=t,n=g(s)?s:Object.keys(s||{});for(const o of Object.keys(this))o[0]!=="_"&&n.includes(o)&&this._setProp(o,this[o],!0,!1);for(const o of n.map(O))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(i){this._setProp(o,i)}})}_setAttr(t){let s=this.hasAttribute(t)?this.getAttribute(t):void 0;const n=O(t);this._numberProps&&this._numberProps[n]&&(s=S(s)),this._setProp(n,s,!1)}_getProp(t){return this._props[t]}_setProp(t,s,n=!0,o=!0){s!==this._props[t]&&(this._props[t]=s,o&&this._instance&&this._update(),n&&(s===!0?this.setAttribute(v(t),""):typeof s=="string"||typeof s=="number"?this.setAttribute(v(t),s+""):s||this.removeAttribute(v(t))))}_update(){r.render(this._createVNode(),this._root)}_createVNode(){const t=r.createVNode(this._def,b({},this._props),this._slots);return this._instance||(t.ce=s=>{this._instance=s,s.isCE=!0;const n=(i,h)=>{this.dispatchEvent(new CustomEvent(i,{detail:h}))};s.emit=(i,...h)=>{n(i,h),v(i)!==i&&n(v(i),h)};let o=this;for(;o=o&&(o.parentNode||o.host);)if(o instanceof w){s.parent=o._instance,s.provides=o._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(s=>{const n=document.createElement("style");n.textContent=s,this._root.appendChild(n)})}_collectNestedStyles(t){let s=t.styles??[];return t.components&&Object.values(t.components).forEach(n=>{s=s.concat(this._collectNestedStyles(n))}),s}}const H=e=>{for(;(e==null?void 0:e.nodeType)!==1;){if(!e.parentElement)throw new Error("No parent element found, the rootComponent must be wrapped in a HTML element (e.g. <template><div> app content </div></template>)");e=e.parentElement}return e};function R(e){return"on"+e.charAt(0).toUpperCase()+e.slice(1)}const B=({rootComponent:e,plugins:l,cssFrameworkStyles:t,VueDefineCustomElement:s,h:n,createApp:o,getCurrentInstance:i,elementName:h,disableRemoveStylesOnUnmount:y,disableShadowDOM:p})=>(p?x:s)({styles:[t],props:{...e.props,modelValue:{type:[String,Number,Boolean,Array,Object]}},emits:e==null?void 0:e.emits,setup(M,{slots:$}){var V;const N=[...(e==null?void 0:e.emits)||[],"update:modelValue"],_=o();if(_.component("app-root",e),e.provide){const c=typeof e.provide=="function"?e.provide():e.provide;Object.keys(c).forEach(d=>{_.provide(d,c[d])})}_.mixin({mounted(){var d;const c=m=>{m!=null&&m.length&&(this.__style=document.createElement("style"),this.__style.innerText=m.join().replace(/\n/g,""),H(this.$el).prepend(this.__style))};if(c((d=this.$)==null?void 0:d.type.styles),this.$options.components)for(const m of Object.values(this.$options.components))c(m.styles)},unmounted(){var c;y||(c=this.__style)==null||c.remove()}}),_.use(l);const E=i();if(Object.assign(E.appContext,_._context),Object.assign(E.provides,_._context.provides),process.env.NODE_ENV==="development"&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__){const c=document.querySelector(h);_._container=c,_._instance=E;const d={Comment:Symbol("v-cmt"),Fragment:Symbol("v-fgt"),Static:Symbol("v-stc"),Text:Symbol("v-txt")};window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("app:init",_,_.version,d),window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue=_}const K=N==null?void 0:N.reduce((c,d)=>{const m=R(d);return c[m]=z=>{E.emit(d,z)},c},{}),U=(V=e==null?void 0:e.namedSlots)==null?void 0:V.reduce((c,d)=>(c[d]=()=>n("slot",{name:d}),c),{});return()=>n(e,{...M,...K},{default:()=>n("slot"),...U,...$})}},p&&{shadowRoot:!1}),A=({elementName:e,rootComponent:l,plugins:t,cssFrameworkStyles:s,VueDefineCustomElement:n,h:o,createApp:i,getCurrentInstance:h,disableRemoveStylesOnUnmount:y=!1,disableShadowDOM:p=!1})=>{if(!l){console.warn("No root component provided. Please provide a root component to create a web component.");return}if(!e){console.warn("No element name provided. Please provide an element name to create a web component.");return}if(!n){console.warn("No VueDefineCustomElement provided. Please provide a VueDefineCustomElement to create a web component.");return}if(!o){console.warn("No h provided. Please provide an h to create a web component.");return}if(!i){console.warn("No createApp provided. Please provide a createApp to create a web component.");return}if(!h){console.warn("No getCurrentInstance provided. Please provide a getCurrentInstance to create a web component.");return}const u=B({rootComponent:l,plugins:t,cssFrameworkStyles:s,VueDefineCustomElement:n,h:o,createApp:i,getCurrentInstance:h,elementName:e,disableRemoveStylesOnUnmount:y,disableShadowDOM:p});customElements.define(e,u)};a.createWebComponent=A,a.default=A,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
