import{J as t,K as s,x as r,i as c,ay as d,az as g,aA as y,H as u,aB as f}from"./index-ByNAQd9J.js";/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],x=t("monitor",l);/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],b=t("smartphone",p),i=r(c,"siteContent","branding");async function h(){var a;try{const n=await s(i);return n.exists()?n.data()||{}:{}}catch(n){return n&&typeof n=="object"&&(n.code==="permission-denied"||(a=n.message)!=null&&a.includes("Missing or insufficient permissions"))?(console.warn("brandingService: read branding config denied for public page"),{}):(console.warn("brandingService: failed to read branding config",n),{})}}async function w(a){const n={...a,updatedAt:Date.now()};await u(i,n,{merge:!0})}async function D(a){const n=`branding/logo_${Date.now()}_${a.name}`,e=d(f,n);await g(e,a);const o=await y(e);return await w({logoUrl:o}),o}async function _(){return(await h()).logoUrl}export{x as M,b as S,h as a,_ as g,w as s,D as u};
//# sourceMappingURL=brandingService-BsDZBAj_.js.map
