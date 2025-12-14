import{J as o,K as r,y as s,i as c,ay as g,az as d,aA as y,H as u,aB as f}from"./index-Dosh6Hoe.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=o("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=o("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]),i=s(c,"siteContent","branding");async function l(){var a;try{const n=await r(i);return n.exists()?n.data()||{}:{}}catch(n){return n&&typeof n=="object"&&(n.code==="permission-denied"||(a=n.message)!=null&&a.includes("Missing or insufficient permissions"))?(console.warn("brandingService: read branding config denied for public page"),{}):(console.warn("brandingService: failed to read branding config",n),{})}}async function p(a){const n={...a,updatedAt:Date.now()};await u(i,n,{merge:!0})}async function x(a){const n=`branding/logo_${Date.now()}_${a.name}`,e=g(f,n);await d(e,a);const t=await y(e);return await p({logoUrl:t}),t}async function b(){return(await l()).logoUrl}export{w as M,m as S,l as a,b as g,p as s,x as u};
//# sourceMappingURL=brandingService-Bxfz1yqW.js.map
