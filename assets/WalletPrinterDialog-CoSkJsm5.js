import{ad as k,l as S,r as p,R as y,j as e,ae as E,af as D,ag as z,ah as R,B as n,x as M}from"./index-mBSeGJ8K.js";import{T as $}from"./textarea-BSkR6eBq.js";import{h as P}from"./html2canvas.esm-BfYXEYrK.js";import{P as w}from"./printer-C-vYmUsl.js";import{W as T}from"./wallet-Li-2CV_d.js";import{A as W}from"./arrow-left-CoPISNIk.js";import{S as _}from"./square-pen-7FbzHXSb.js";import{D as L}from"./download-C_W4yx38.js";const J=({isOpen:i,onClose:v,wallets:l,initialWalletId:d})=>{const{shopName:g}=k(),{toast:h}=S(),[s,c]=p.useState(null),[m,f]=p.useState("هذا الرقم خاص بالمحل، يرجى التأكد من الرقم قبل التحويل."),[b,u]=p.useState(!1),x=p.useRef(null);y.useEffect(()=>{if(i&&d){const t=l.find(a=>a.id===d);t&&c(t)}else i&&!d&&c(null)},[i,d,l]);const j=()=>{var r;if(!s)return;const t=`
      <div style="direction: rtl; font-family: 'Cairo', sans-serif; text-align: center; width: 100%; margin: 0 auto; padding: 5px;">
        <h2 style="margin: 0 0 5px 0; font-size: 20px; font-weight: 800;">${g||"المحل"}</h2>
        <div style="margin: 10px 0; font-size: 40px; font-weight: 900; letter-spacing: 1px; line-height: 1;">${s.phone}</div>
        <p style="margin: 5px 0 15px 0; font-size: 16px; font-weight: 700;">المسجل باسم: ${s.name}</p>
        
        <div style="border-top: 2px dashed #000; margin: 10px 0;"></div>
        
        <p style="margin: 10px 0; font-size: 16px; font-weight: 700; line-height: 1.4; white-space: pre-wrap;">${m}</p>
        
        <div style="border-top: 2px dashed #000; margin: 10px 0;"></div>
        
        <p style="margin: 10px 0 5px 0; font-size: 12px; font-family: monospace; font-weight: bold;">cashy-link.com</p>
      </div>
    `,a=document.createElement("iframe");a.style.display="none",document.body.appendChild(a);const o=(r=a.contentWindow)==null?void 0:r.document;o&&(o.open(),o.write(`
        <html>
          <head>
            <title>Print Wallet</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;800;900&display=swap');
              body { 
                margin: 0; 
                padding: 0; 
                width: 76mm; /* Safe width for 80mm paper */
              }
              @page { 
                size: 80mm auto; 
                margin: 0mm; 
              }
            </style>
          </head>
          <body>
            ${t}
            <script>
              window.onload = function() {
                window.print();
                window.onafterprint = function() {
                  window.parent.document.body.removeChild(window.frameElement);
                }
              }
            <\/script>
          </body>
        </html>
      `),o.close())},N=()=>{localStorage.setItem("wallet_printer_message",m),u(!1),h({title:"تم الحفظ",description:"تم حفظ الرسالة بنجاح"})},C=async()=>{var t;if(!(!x.current||!s))try{try{await((t=document.fonts)==null?void 0:t.ready)}catch{}const o=(await P(x.current,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff"})).toDataURL("image/png"),r=document.createElement("a");r.download=`wallet-${s.phone}.png`,r.href=o,document.body.appendChild(r),r.click(),document.body.removeChild(r),h({title:"تم الحفظ",description:"تم حفظ صورة المحفظة بنجاح"})}catch(a){console.error("Error saving image:",a),h({title:"خطأ",description:"حدث خطأ أثناء حفظ الصورة",variant:"destructive"})}};return y.useEffect(()=>{const t=localStorage.getItem("wallet_printer_message");t&&f(t)},[]),e.jsx(E,{open:i,onOpenChange:t=>!t&&v(),children:e.jsxs(D,{className:"sm:max-w-md",children:[e.jsx(z,{children:e.jsxs(R,{className:"flex items-center gap-2",children:[e.jsx(w,{className:"h-5 w-5"}),"طباعة رقم المحفظة"]})}),s?e.jsxs("div",{className:"space-y-6 py-4",children:[e.jsxs(n,{variant:"ghost",size:"sm",onClick:()=>c(null),className:"mb-2 h-8 px-2",children:[e.jsx(W,{className:"h-4 w-4 ml-1"}),"عودة للقائمة"]}),e.jsxs("div",{ref:x,className:"border rounded-lg p-6 bg-white shadow-sm text-center space-y-4",children:[e.jsx("h3",{className:"font-bold text-xl",children:g||"المحل"}),e.jsxs("div",{className:"py-4 bg-gray-50 rounded-lg border border-gray-100",children:[e.jsx("div",{className:"text-4xl font-black tracking-widest font-mono text-primary",children:s.phone}),e.jsxs("div",{className:"text-lg text-gray-900 mt-2 font-bold",children:["المسجل باسم: ",s.name]})]}),e.jsx("div",{className:"relative",children:b?e.jsxs("div",{className:"space-y-2",children:[e.jsx(M,{htmlFor:"message",children:"رسالة مخصصة"}),e.jsx($,{id:"message",value:m,onChange:t=>f(t.target.value),className:"min-h-[80px] text-center font-bold text-base"}),e.jsxs(n,{size:"sm",onClick:N,className:"w-full",children:[e.jsx(_,{className:"h-3 w-3 ml-2"}),"حفظ النص"]})]}):e.jsx("div",{className:"p-3 border border-dashed rounded bg-gray-50 text-base font-bold cursor-pointer hover:bg-gray-100 transition-colors",onClick:()=>u(!0),title:"انقر للتعديل",children:m})}),e.jsx("div",{className:"pt-4 border-t border-gray-100 mt-4",children:e.jsx("p",{className:"text-xs text-gray-400 font-mono font-semibold tracking-wider",children:"cashy-link.com"})})]}),e.jsxs("div",{className:"flex flex-col gap-3 pt-2",children:[e.jsxs(n,{onClick:j,className:"w-full h-12 text-lg font-bold shadow-sm bg-slate-900 text-white hover:bg-slate-800",variant:"default",children:[e.jsx(w,{className:"h-5 w-5 ml-2"}),"طباعة الرقم (كاشير)"]}),e.jsxs(n,{onClick:C,variant:"secondary",className:"w-full h-10 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700",children:[e.jsx(L,{className:"h-4 w-4 ml-2"}),"حفظ صورة للمشاركة"]})]})]}):e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground text-center mb-2",children:"اختر المحفظة المراد طباعتها"}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1",children:[l.map(t=>e.jsxs(n,{variant:"outline",className:"justify-start h-auto py-3 px-4",onClick:()=>c(t),children:[e.jsx(T,{className:"h-4 w-4 ml-2 text-primary"}),e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("span",{className:"font-bold",children:t.name}),e.jsx("span",{className:"text-xs text-muted-foreground dir-ltr",children:t.phone})]})]},t.id)),l.length===0&&e.jsx("div",{className:"text-center py-8 text-muted-foreground border rounded-lg border-dashed",children:"لا توجد محافظ مضافة"})]})]})]})})};export{J as default};
//# sourceMappingURL=WalletPrinterDialog-CoSkJsm5.js.map
