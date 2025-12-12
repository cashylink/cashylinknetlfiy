import{b as i,B as r,v as s,am as c,an as d,ao as y,ap as g,F as l,G as u}from"./index-BsVRzvOf.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
* @license lucide-react v0.462.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h=i("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),o=s(u,"siteContent","branding");async function w(){var a;try{const n=await r(o);return n.exists()?n.data()||{}:{}}catch(n){return n&&typeof n=="object"&&(n.code==="permission-denied"||(a=n.message)!=null&&a.includes("Missing or insufficient permissions"))?(console.warn("brandingService: read branding config denied for public page"),{}):(console.warn("brandingService: failed to read branding config",n),{})}}async function m(a){const n={...a,updatedAt:Date.now()};await l(o,n,{merge:!0})}async function x(a){const n=`branding/logo_${Date.now()}_${a.name}`,e=c(d,n);await y(e,a);const t=await g(e);return await m({logoUrl:t}),t}async function b(){return(await w()).logoUrl}export{b,w as l,h as m,m as p,f as w,x};
//# sourceMappingURL=brandingService-C3FKjfeb-B084ml0j.js.map
