(function(c,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(c=typeof globalThis<"u"?globalThis:c||self,r(c.Vue3WebComponentWrapper={},c.Vue))})(this,function(c,r){"use strict";var G=Object.defineProperty;var q=(c,r,m)=>r in c?G(c,r,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[r]=m;var f=(c,r,m)=>(q(c,typeof r!="symbol"?r+"":r,m),m);/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const m=Object.assign,A=Array.isArray,D=e=>typeof e=="string",V=e=>{const a=Object.create(null);return t=>a[t]||(a[t]=e(t))},H=/-(\w)/g,g=V(e=>e.replace(H,(a,t)=>t?t.toUpperCase():"")),$=/\B([A-Z])/g,y=V(e=>e.replace($,"-$1").toLowerCase()),j=e=>{const a=D(e)?Number(e):NaN;return isNaN(a)?e:a};/*! @__NO_SIDE_EFFECTS__ */function L(e,a,t){const s=r.defineComponent(e);class o extends N{constructor(i){super(s,i,a,t)}}return f(o,"def",s),o}const B=typeof HTMLElement<"u"?HTMLElement:class{};class N extends B{constructor(t,s={},o={shadowRoot:!0},n){super();f(this,"_instance",null);f(this,"_connected",!1);f(this,"_resolved",!1);f(this,"_numberProps",null);f(this,"_styles");f(this,"_slots",{});f(this,"_ob",null);this._def=t,this._props=s,this._config=o,this._root&&n?n(this._createVNode(),this._root):(this._config.shadowRoot!==!1&&this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}get _root(){return this._config.shadowRoot?this.shadowRoot:this}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,r.nextTick(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),r.render(null,this._root),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let o=0;o<this.attributes.length;o++)this._setAttr(this.attributes[o].name);this._ob=new MutationObserver(o=>{for(const n of o)this._setAttr(n.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(o,n=!1)=>{const{props:i}=o,d=this._collectNestedStyles(o);let b;if(i&&!A(i))for(const p in i){const h=i[p];(h===Number||h&&h.type===Number)&&(p in this._props&&(this._props[p]=j(this._props[p])),(b||(b=Object.create(null)))[g(p)]=!0)}if(this._numberProps=b,n&&this._resolveProps(o),!this._config.shadowRoot){this._slots={};for(const p of Array.from(this.children)){const h=p.getAttribute("slot")||"default";this._slots[h]||(this._slots[h]=[]),this._slots[h].push(r.h(p.tagName.toLowerCase(),{},p.innerHTML))}this.replaceChildren()}this._applyStyles(d),this._update()},s=this._def.__asyncLoader;s?s().then(o=>t(o,!0)):t(this._def)}_resolveProps(t){const{props:s}=t,o=A(s)?s:Object.keys(s||{});for(const n of Object.keys(this))n[0]!=="_"&&o.includes(n)&&this._setProp(n,this[n],!0,!1);for(const n of o.map(g))Object.defineProperty(this,n,{get(){return this._getProp(n)},set(i){this._setProp(n,i)}})}_setAttr(t){let s=this.hasAttribute(t)?this.getAttribute(t):void 0;const o=g(t);this._numberProps&&this._numberProps[o]&&(s=j(s)),this._setProp(o,s,!1)}_getProp(t){return this._props[t]}_setProp(t,s,o=!0,n=!0){s!==this._props[t]&&(this._props[t]=s,n&&this._instance&&this._update(),o&&(s===!0?this.setAttribute(y(t),""):typeof s=="string"||typeof s=="number"?this.setAttribute(y(t),s+""):s||this.removeAttribute(y(t))))}_update(){r.render(this._createVNode(),this._root)}_createVNode(){const t=r.createVNode(this._def,m({},this._props),this._slots);return this._instance||(t.ce=s=>{this._instance=s,s.isCE=!0;const o=(i,d)=>{this.dispatchEvent(new CustomEvent(i,{detail:d}))};s.emit=(i,...d)=>{o(i,d),y(i)!==i&&o(y(i),d)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof N){s.parent=n._instance,s.provides=n._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(s=>{const o=document.createElement("style");o.textContent=s,this._root.prepend(o)})}_collectNestedStyles(t){let s=t.styles??[];return t.components&&Object.values(t.components).forEach(o=>{s=s.concat(this._collectNestedStyles(o))}),s}}const C=e=>{for(;(e==null?void 0:e.nodeType)!==1;){if(!e.parentElement)throw new Error("No parent element found, the rootComponent must be wrapped in a HTML element (e.g. <template><div> app content </div></template>)");e=e.parentElement}return e};function M(e){return"on"+e.charAt(0).toUpperCase()+e.slice(1)}function K(e){return typeof e=="string"?e.replace(/:root/g,":host"):Array.isArray(e)?e.map(a=>a.replace(/:root/g,":host")):e}const T=({rootComponent:e,plugins:a,cssFrameworkStyles:t,VueDefineCustomElement:s,h:o,createApp:n,getCurrentInstance:i,elementName:d,disableRemoveStylesOnUnmount:b,disableShadowDOM:p,replaceRootWithHostInCssFramework:h})=>{const P=p?L:s,U=h?K(t):t;return P({name:"vue-custom-element-root-component",styles:[U],props:{...e.props,modelValue:{type:[String,Number,Boolean,Array,Object]}},emits:e==null?void 0:e.emits,setup(W,{slots:z}){var R;const S=[...(e==null?void 0:e.emits)||[],"update:modelValue"],_=n();if(_.component("app-root",e),e.provide){const l=typeof e.provide=="function"?e.provide():e.provide;Object.keys(l).forEach(u=>{_.provide(u,l[u])})}_.mixin({mounted(){var u,w,O;if(((w=(u=this.$)==null?void 0:u.type)==null?void 0:w.name)==="vue-custom-element-root-component")return;const l=v=>{v!=null&&v.length&&(this.__style=document.createElement("style"),this.__style.innerText=v.join().replace(/\n/g,""),C(this.$el).append(this.__style))};if(l((O=this.$)==null?void 0:O.type.styles),this.$options.components)for(const v of Object.values(this.$options.components))l(v.styles)},unmounted(){var l;b||(l=this.__style)==null||l.remove()}}),_.use(a);const E=i();if(Object.assign(E.appContext,_._context),Object.assign(E.provides,_._context.provides),process.env.NODE_ENV==="development"&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__){const l=document.querySelector(d);_._container=l,_._instance=E;const u={Comment:Symbol("v-cmt"),Fragment:Symbol("v-fgt"),Static:Symbol("v-stc"),Text:Symbol("v-txt")};window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("app:init",_,_.version,u),window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue=_}const k=S==null?void 0:S.reduce((l,u)=>{const w=M(u);return l[w]=O=>{E.emit(u,O)},l},{}),F=(R=e==null?void 0:e.namedSlots)==null?void 0:R.reduce((l,u)=>(l[u]=()=>o("slot",{name:u}),l),{});return()=>o(e,{...W,...k},{default:()=>o("slot"),...F,...z})}},p&&{shadowRoot:!1})},x=({elementName:e,rootComponent:a,plugins:t,cssFrameworkStyles:s,VueDefineCustomElement:o,h:n,createApp:i,getCurrentInstance:d,disableRemoveStylesOnUnmount:b=!1,disableShadowDOM:p=!1,replaceRootWithHostInCssFramework:h=!1})=>{if(!a){console.warn("No root component provided. Please provide a root component to create a web component.");return}if(!e){console.warn("No element name provided. Please provide an element name to create a web component.");return}if(!o){console.warn("No VueDefineCustomElement provided. Please provide a VueDefineCustomElement to create a web component.");return}if(!n){console.warn("No h provided. Please provide an h to create a web component.");return}if(!i){console.warn("No createApp provided. Please provide a createApp to create a web component.");return}if(!d){console.warn("No getCurrentInstance provided. Please provide a getCurrentInstance to create a web component.");return}const P=T({rootComponent:a,plugins:t,cssFrameworkStyles:s,VueDefineCustomElement:o,h:n,createApp:i,getCurrentInstance:d,elementName:e,disableRemoveStylesOnUnmount:b,disableShadowDOM:p,replaceRootWithHostInCssFramework:h});customElements.define(e,P)};c.createWebComponent=x,c.default=x,c.defineCustomElement=T,c.defineCustomElementSFC=L,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
