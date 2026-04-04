import{m as Be,R as n,j as e,ac as ae,ad as re,ae as le,af as ie,ah as We,c as Ae,g as Oe,a2 as P,I as Fe,B as x,M as he,ai as Ue,aj as He,H as ue,J as be,K as ye,ak as F,a7 as Ve,al as Qe,am as Ge,an as Ke,ao as Xe,ap as Ye,aq as qe,i as Je,z as Ze,A as es}from"./index-CsOP4H3f.js";import{f as h}from"./SimCardsAccessDialog-mC1wIUT3.js";import{S as ve}from"./separator-DOs-DImi.js";import{h as we}from"./html2canvas.esm-BfYXEYrK.js";import{C as ss}from"./circle-check-big-DooajqX_.js";import{P as ts}from"./printer-Cfc3EArz.js";import{D as as}from"./download-B7709DLU.js";import"./select-9pLpISkd.js";const xs=({isOpen:Ne,onClose:M,transaction:s,onPrint:rs,onDelete:U,onComplete:H,fullNameDisplay:V,managerPhone:je,userId:ke})=>{const{toast:o}=Be(),Ce=(V==null?void 0:V.trim())||"الحساب الرئيسي",m=ke??void 0,T=String(je||"").trim(),Se=n.useMemo(()=>{try{const t=m?`receiptNoteEnabled_${m}`:"receiptNoteEnabled",a=localStorage.getItem(t)??localStorage.getItem("receiptNoteEnabled");return a===null?!0:a==="true"}catch{return!0}},[m]),[$e,z]=n.useState(!1),[Q,L]=n.useState(""),[G,_]=n.useState(!1),[de,w]=n.useState(""),[ne,oe]=n.useState(!1),[Ee,C]=n.useState(!1),[K,S]=n.useState(""),[X,$]=n.useState(!1),[ce,b]=n.useState(""),Y=n.useRef(null),[me,pe]=n.useState(!1),[y,q]=n.useState(""),[Ie,D]=n.useState(!1),[xe,R]=n.useState(""),[fe,J]=n.useState(!1);if(n.useEffect(()=>{(s==null?void 0:s.commission)!=null?R(String(s.commission)):R(""),D(!1),J(!1)},[s==null?void 0:s.id]),n.useEffect(()=>{if(!(s!=null&&s.receiver_msisdn))return;const t=f=>{let d=String(f||"").replace(/[^0-9]/g,"");return d.startsWith("20")&&(d="0"+d.slice(2)),d.startsWith("0")?d:/^(10|11|12|15)/.test(d)?"0"+d:d},a=m||"default",r=localStorage.getItem(`sim1Number_${a}`)||localStorage.getItem("sim1Number"),l=localStorage.getItem(`sim2Number_${a}`)||localStorage.getItem("sim2Number"),i=t(s.receiver_msisdn);r&&t(r)===i?q("SIM 1"):l&&t(l)===i?q("SIM 2"):q("")},[s,m]),!s)return null;const Pe=async()=>{if(!m){o({title:"لا يمكن تعديل العمولة",description:"يجب أن تكون مسجلاً الدخول لتعديل العمولة.",variant:"destructive"});return}const t=xe.replace(/[^\d.]/g,""),a=t?Number(t):0;if(isNaN(a)||a<0){o({title:"قيمة غير صحيحة",description:"يرجى إدخال رقم صحيح للعمولة.",variant:"destructive"});return}try{J(!0),await Ve.updateTransactionCommission(m,s.id,a),s.commission=a,D(!1),o({title:"تم تحديث العمولة",description:"تم تعديل العمولة في كل التقارير المرتبطة بهذه المعاملة."})}catch(r){console.error("Failed to update commission:",r),o({title:"فشل تعديل العمولة",description:(r==null?void 0:r.message)||"حدث خطأ أثناء تحديث العمولة.",variant:"destructive"})}finally{J(!1)}},Me=t=>{switch(t){case"completed":return e.jsx(P,{className:"bg-green-100 dark:bg-green-900/50 text-green-900 dark:text-green-200 border-green-200 dark:border-green-700",children:"مكتملة"});case"pending":return e.jsx(P,{className:"bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700",children:"قيد المراجعة"});case"failed":return e.jsx(P,{className:"bg-red-100 dark:bg-red-900/50 text-red-900 dark:text-red-200 border-red-200 dark:border-red-700",children:"فاشلة"});default:return e.jsx(P,{className:"bg-gray-100 dark:bg-slate-600 text-gray-800 dark:text-slate-200 border-gray-200 dark:border-slate-500",children:t})}},ge=t=>t==="transfer"?"تحويل":"سحب",Z=(()=>{const t=s,a=String((t==null?void 0:t.description)||""),r=String((t==null?void 0:t.title)||"");if(a.includes("تحويل مكنه")||a.includes("تحويل مكينه")||a.includes("machine transfer")||r.includes("تحويل مكنه")||r.includes("تحويل مكينه"))return"تحويل مكينه";if(String((t==null?void 0:t.txnType)||"").toLowerCase()==="sales"||String((t==null?void 0:t.type)||"").toLowerCase()==="sales"||r.includes("إيصال مبيعات")||String((t==null?void 0:t.senderMsisdn)||"")==="مبيعات")return"مبيعات";if(s.type==="atm_withdraw")return"سحب ATM";const l=r||ge(s.type),i=String((t==null?void 0:t.provider)||"").toLowerCase(),f=String((t==null?void 0:t.note)||"").toLowerCase(),d=i.includes("vodafone")?"vf-cash":i.includes("instapay")?"instapay":"",j=f.includes("vodafone")?"vf-cash":f.includes("instapay")?"instapay":"",v=d||j;return l==="سحب"&&v?`سحب ${v}`:l==="إيصال تحويل مكينه"?"تحويل مكينه":l})(),Te=t=>new Date(t).toLocaleString("ar-EG",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),ee=t=>{if((t==null?void 0:t.totalCharged)!==void 0&&(t==null?void 0:t.totalCharged)!==null)return Number(t.totalCharged)||0;const a=Number((t==null?void 0:t.commission)||0),r=Number((t==null?void 0:t.fee)||0),l=Number(t.amount||0),i=t==null?void 0:t.commissionMode,f=(t==null?void 0:t.type)||"transfer";return String(f)==="withdraw"||String(f)==="atm_withdraw"||i==="add"?l+a+r:l},ze=ee(s),Le=t=>{switch(t){case"completed":return"مكتملة";case"pending":return"قيد المراجعة";case"failed":return"فاشلة";default:return t}},_e=async()=>{var t,a;try{const r=Le(s.status),l=Z,i=(s==null?void 0:s.shopName)||"غير محدد",f=(s==null?void 0:s.cashierName)||"",d=s.reference||s.id,j=new Date(s.createdAt).toLocaleString("ar-EG"),v=h(s.amount),B=h(s.commission||0),W=h((s==null?void 0:s.fee)||0),se=h(ee(s)),A=String(s.note||"").trim(),O=(()=>{try{const u=m?`receiptNoteEnabled_${m}`:"receiptNoteEnabled",I=localStorage.getItem(u)??localStorage.getItem("receiptNoteEnabled");return I===null?!0:I==="true"}catch{return!0}})(),g="#000000",te=`
        <div class="receipt-root" style="font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif; background: #fff; direction: rtl; box-sizing:border-box;">
          <div class="receipt-print-brand" dir="ltr" style="text-align:center; margin:0 0 10px 0; padding:0 0 10px 0; border-bottom:1px solid #cbd5e1;">
            <span style="font-size:19px; font-weight:800; letter-spacing:0.04em; color:${g};">cashy link</span>
          </div>
          <div style="text-align: center; margin-bottom: 20px; border-bottom: 2px solid ${g}; padding-bottom: 16px;">
            <h1 style="color: ${g}; margin: 0 0 6px 0; font-size: 26px;">إيصال ${l}</h1>
            <p style="color: #666; font-size: 14px; margin: 0;">رقم المرجع: ${d}</p>
            <p style="color: #888; font-size: 13px; margin: 6px 0 0 0;">${j}</p>
          </div>

          <div style="background: #f8fafc; border-radius: 12px; padding: 12px 10px; margin-bottom: 16px;">
            <h3 style="color: #1e293b; margin: 0 0 12px 0; font-size: 16px;">معلومات المحل</h3>
            <div class="rp-row">
              <span class="rp-lab">اسم المحل:</span>
              <span class="rp-val" style="color: #1e293b;">${i}</span>
            </div>
            ${f?`<div class="rp-row">
              <span class="rp-lab">الكاشير:</span>
              <span class="rp-val" style="color:#1e293b;">${f}</span>
            </div>`:""}
          </div>

          <div style="background: #fff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 12px 10px;">
            <h3 style="color: #1e293b; margin: 0 0 12px 0; font-size: 16px;">تفاصيل المعاملة</h3>

            <div class="rp-row rp-row--line">
              <span class="rp-lab">نوع المعاملة:</span>
              <span class="rp-val" style="color:${g}; font-weight:600;">${l}</span>
            </div>

            <div class="rp-row rp-row--line">
              <span class="rp-lab">الحالة:</span>
              <span class="rp-val" style="color:${s.status==="completed"?"#16a34a":s.status==="pending"?"#ca8a04":"#dc2626"}; font-weight:600;">${r}</span>
            </div>
            ${String((s==null?void 0:s.txnType)||"").toLowerCase()==="sales"||String((s==null?void 0:s.type)||"").toLowerCase()==="sales"?`
            <div class="rp-row rp-row--line">
              <span class="rp-lab">المنتج:</span>
              <span class="rp-val" style="font-weight:600; color:#1e293b;">${(s==null?void 0:s.saleProductName)||"منتج"}</span>
            </div>
            <div class="rp-row">
              <span class="rp-lab">الكمية:</span>
              <span class="rp-val" style="font-weight:600; color:#1e293b;">${(s==null?void 0:s.saleQuantity)??""}</span>
            </div>
            `:""}

            <div class="rp-row">
              <span class="rp-lab">من:</span>
              <span class="rp-val">${Z.includes("تحويل مكينه")?s.senderName||"ماكينة":`<span dir="ltr" class="rp-val--mono">${s.sender_msisdn}</span>`}</span>
            </div>
            ${s!=null&&s.senderName?`<div class="rp-row">
              <span class="rp-lab">اسم الراسل:</span>
              <span class="rp-val">${s.senderName}</span>
            </div>`:""}
            <div class="rp-row">
              <span class="rp-lab">إلى:</span>
              <div class="rp-val rp-val--inline">
                ${y?`<span style="background:${y==="SIM 1"?"#eff6ff":"#f3e8ff"}; color:${y==="SIM 1"?"#1d4ed8":"#7e22ce"}; padding:2px 6px; border-radius:4px; font-size:11px; margin-inline-end:6px; border:1px solid ${y==="SIM 1"?"#bfdbfe":"#e9d5ff"}; font-weight:bold;">${y}</span>`:""}
                <span dir="ltr" class="rp-val--mono">${s.receiver_msisdn}</span>
              </div>
            </div>

            <div class="rp-row">
              <span class="rp-lab">المبلغ:</span>
              <span class="rp-val" style="font-weight:600;"><span dir="ltr" class="rp-val--mono">${v}</span>&nbsp;جنيه</span>
            </div>
            ${s.commission>0?`<div class="rp-row">
              <span class="rp-lab">العمولة:</span>
              <span class="rp-val"><span dir="ltr" class="rp-val--mono">${B}</span>&nbsp;جنيه</span>
            </div>`:""}
            ${((s==null?void 0:s.fee)||0)>0?`<div class="rp-row">
              <span class="rp-lab">الرسوم:</span>
              <span class="rp-val"><span dir="ltr" class="rp-val--mono">${W}</span>&nbsp;جنيه</span>
            </div>`:""}

            <div class="rp-row rp-row--total">
              <span class="rp-lab" style="font-weight:700; font-size:16px;">الإجمالي:</span>
              <span class="rp-val" style="color:${g}; font-weight:700; font-size:16px;"><span dir="ltr" class="rp-val--mono">${se}</span>&nbsp;جنيه</span>
            </div>
          </div>
          ${O&&A?`
          <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:12px; margin-top:12px; display:flex; gap:8px;">
            <div style="color:${g};">🗒️</div>
            <div style="color:${g}; font-size:13px; word-break:break-word;">${A}</div>
          </div>
          `:""}
          <div class="receipt-print-footer" style="margin-top: 16px; font-size: 13px; color: #475569; border-top: 1px solid #e2e8f0; padding-top: 10px; padding-bottom: 4px; text-align: center;">
            ${T?`
            <div>
              في حالة وجود أي شكوى برجاء التواصل مع مدير المحل على رقم: <span style="direction:ltr; unicode-bidi:embed; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${T}</span>
            </div>
            `:""}
            <div class="receipt-print-site" dir="ltr" style="margin-top:8px; font-size:11px; line-height:1.4; color:${g}; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; letter-spacing:0.02em;">cashy-link.com</div>
          </div>
        </div>
      `,E=`
        <!DOCTYPE html>
        <html>
          <head>
            <title>إيصال المعاملة - ${d}</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body { margin: 0; padding: 0; background: #f8fafc; }
              /* هامش الصفحة: يبعد المحتوى عن حافة الورق غير القابلة للطباعة على الطابعات الحرارية */
              @page { size: 80mm auto; margin: 2mm 3mm 3mm; }
              @media print {
                body {
                  margin: 0 auto;
                  padding: 0;
                  background: white;
                  -webkit-print-color-adjust: exact;
                  print-color-adjust: exact;
                }
              }
              .receipt-root {
                width: 100%;
                max-width: 72mm;
                margin: 0 auto;
                padding: 2mm 1.5mm 4mm;
                box-sizing: border-box;
              }
              /* شبكة بدل space-between: في RTL القيم تُحاذى نحو «البداية» أي بعيداً عن الحافة اليسرى */
              .receipt-root .rp-row {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(0, max-content);
                gap: 6px 8px;
                align-items: center;
                margin-bottom: 8px;
              }
              .receipt-root .rp-row--line {
                padding: 6px 0;
                border-bottom: 1px solid #f1f5f9;
              }
              .receipt-root .rp-row--total {
                margin-top: 10px;
                margin-bottom: 0;
                padding-top: 8px;
                border-top: 1px solid #e2e8f0;
              }
              .receipt-root .rp-lab {
                font-weight: 600;
                color: #475569;
                text-align: start;
              }
              .receipt-root .rp-val {
                text-align: start;
                min-width: 0;
                max-width: 100%;
                word-break: break-word;
                overflow-wrap: anywhere;
              }
              .receipt-root .rp-val--mono {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                unicode-bidi: isolate;
              }
              .receipt-root .rp-val--inline {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
              }
              .receipt-print-brand,
              .receipt-print-footer,
              .receipt-print-site {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .receipt-print-footer {
                break-inside: avoid;
                page-break-inside: avoid;
              }
              .receipt-root, .receipt-root * { color: ${g} !important; }
            </style>
          </head>
          <body dir="rtl">
            ${te}
          </body>
        </html>
      `,k=typeof window<"u"&&window.electronAPI;if(k!=null&&k.printReceipt){let u={kind:"receipt"};try{const I=(localStorage.getItem("cashyReceiptPrinterName")||"").trim();I&&(u={kind:"receipt",deviceName:I,silent:!0})}catch{}await k.printReceipt(E,u);return}const N=window.open("","_blank");if(N){N.document.write(E),N.document.close(),N.print();return}const c=document.createElement("iframe");c.style.cssText="position:fixed;width:0;height:0;border:0;visibility:hidden;",document.body.appendChild(c);const p=(t=c.contentWindow)==null?void 0:t.document;p&&(p.open(),p.write(E),p.close(),(a=c.contentWindow)==null||a.print()),setTimeout(()=>document.body.removeChild(c),1e3)}catch{}},De=async()=>{var t;try{const a=s.type==="transfer"?s.receiver_msisdn:s.sender_msisdn,r=Qe(a);if(!Ge(r)){o({title:"رقم واتساب غير صالح",description:`الرقم: ${a}`,duration:3e3});return}const l=Y.current;if(!l){o({title:"لم يتم العثور على الإيصال",description:"أعد فتح الإيصال ثم حاول المشاركة",duration:3e3});return}try{await((t=document.fonts)==null?void 0:t.ready)}catch{}const i=1080,f=Math.max(2,Math.ceil(window.devicePixelRatio||1)),d=await we(l,{scale:f,useCORS:!0,allowTaint:!0,backgroundColor:"#ffffff",width:l.scrollWidth,height:l.scrollHeight,scrollX:0,scrollY:0});let j=d;try{const c=d.height/d.width,p=document.createElement("canvas");p.width=i,p.height=Math.round(i*c);const u=p.getContext("2d");u&&(u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(d,0,0,p.width,p.height),j=p)}catch{}const v=await new Promise(c=>j.toBlob(c,"image/png"));if(!v){o({title:"تعذر إنشاء الصورة",description:"حدث خطأ أثناء إنشاء صورة الإيصال",duration:3e3});return}const B=`receipt-${s.reference||s.id}.png`,W=new File([v],B,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[W]}))try{await navigator.share({files:[W],title:"صورة إيصال",text:"صورة إيصال المعاملة"})}catch{}const se=Ke(),A=`public/receipts/${B}`,O=Xe(se,A);await Ye(O,v,{contentType:"image/png"});const g=await qe(O),te=ge(s.type),E=s.reference||s.id,k=ee(s),N=`إيصال ${te} - الإجمالي: ${k} جنيه - المرجع: ${E||""}`;try{const c=`${N}
${g}`,p=Je(r,c);window.open(p,"_blank")}catch{}try{await Ze(es,"sendWhatsAppImage")({to:r,imageUrl:g,caption:N}),o({title:"تم فتح واتساب وإرسال الصورة تلقائيًا",description:"تم فتح المحادثة مع المستفيد وسيصله الإيصال أيضًا",duration:3e3})}catch{o({title:"تعذر إرسال الصورة عبر واتساب تلقائيًا",description:"تم فتح المحادثة؛ تحقق من إعدادات Cloud API لإرسال تلقائي",duration:4e3})}}catch{o({title:"حدث خطأ أثناء المشاركة",description:"جرّب مجدداً",duration:3e3})}},Re=async()=>{try{const t=Y.current;if(!t){o({title:"تعذّر حفظ الإيصال",description:"لم يتم العثور على محتوى الإيصال",duration:3e3});return}const r=(await we(t,{scale:2,useCORS:!0,backgroundColor:"#ffffff"})).toDataURL("image/png"),l=`receipt-${s.reference||s.id}.png`,i=document.createElement("a");i.href=r,i.download=l,document.body.appendChild(i),i.click(),document.body.removeChild(i),o({title:"تم حفظ الإيصال",description:`تم حفظ الصورة: ${l}`,duration:2e3})}catch{o({title:"فشل حفظ الإيصال",description:"حدث خطأ أثناء حفظ الصورة",duration:3e3})}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:"@media print { .receipt-no-print { display: none !important; } }"}}),e.jsx(ae,{open:Ne,onOpenChange:M,children:e.jsxs(re,{className:"max-w-md md:max-w-sm w-full mx-auto overflow-hidden md:scale-[0.95] lg:scale-[0.9] bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100",dir:"rtl",children:[e.jsx(le,{className:"text-center",children:e.jsxs(ie,{className:"flex items-center justify-center gap-2 text-xl md:text-lg font-bold text-gray-900 dark:text-slate-100",children:[e.jsx(We,{className:"h-6 w-6"}),"إيصال المعاملة",e.jsx("span",{className:"font-extrabold tracking-tight text-xl md:text-lg opacity-95",dir:"ltr",children:"cashy link"})]})}),e.jsx("div",{ref:Y,children:e.jsx(Ae,{className:"overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800",children:e.jsxs(Oe,{className:"p-5 md:p-4 space-y-5 md:space-y-4 break-words text-[14px] bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900",children:[e.jsx("div",{className:"text-center pb-3 border-b border-gray-200 dark:border-slate-600",children:e.jsx("span",{dir:"ltr",className:"font-extrabold tracking-tight text-lg text-gray-900 dark:text-slate-100",children:"cashy link"})}),e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx("h3",{className:"text-xl md:text-lg font-extrabold tracking-tight text-gray-900 dark:text-slate-100",children:Ce}),e.jsx("p",{className:"text-sm text-gray-700 dark:text-slate-300",children:"إيصال العملية"}),e.jsx("p",{className:"text-base font-semibold text-gray-900 dark:text-slate-100",children:Z}),e.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[Me(s.status),(s==null?void 0:s.shopName)&&e.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-800 text-[11px] font-medium text-gray-700 dark:text-slate-200",children:["المحل: ",s.shopName]}),(s==null?void 0:s.cashierName)&&e.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-gray-100 dark:bg-slate-800 text-[11px] font-medium text-gray-700 dark:text-slate-200",children:["الكاشير: ",s.cashierName]})]})]}),e.jsx(ve,{className:"my-2 dark:bg-slate-600"}),e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"رقم المعاملة"}),e.jsx("span",{className:"text-base font-mono break-all text-gray-900 dark:text-slate-100",dir:"ltr",children:s.id})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"من"}),e.jsx("span",{className:"text-base font-mono break-all text-gray-900 dark:text-slate-100",dir:"ltr",children:s.sender_msisdn})]}),(s==null?void 0:s.senderName)&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"اسم الراسل"}),e.jsx("span",{className:"text-base text-gray-900 dark:text-slate-100",children:s.senderName})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"إلى"}),e.jsxs("div",{className:"flex items-center gap-2",children:[y&&e.jsx(P,{variant:"outline",className:`${y==="SIM 1"?"bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-600":"bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200 border-purple-200 dark:border-purple-600"} h-5 px-1.5 text-[10px]`,children:y}),e.jsx("span",{className:"text-base font-mono break-all text-gray-900 dark:text-slate-100",dir:"ltr",children:s.receiver_msisdn})]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"المبلغ"}),e.jsxs("span",{className:"text-lg font-bold text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono",children:h(s.amount)})," جنيه"]})]}),s.commission!=null&&s.commission>=0&&e.jsxs("div",{className:"flex justify-between items-center gap-2",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"العمولة"}),Ie?e.jsxs("div",{className:"flex items-center gap-1 receipt-no-print",children:[e.jsx(Fe,{type:"number",value:xe,onChange:t=>R(t.target.value),className:"h-7 w-24 text-sm text-right"}),e.jsx(x,{size:"xs",className:"h-7 px-2 text-[11px]",onClick:Pe,disabled:fe,children:fe?"جارٍ الحفظ...":"حفظ"}),e.jsx(x,{size:"xs",variant:"ghost",className:"h-7 px-2 text-[11px]",onClick:()=>{D(!1),R(s.commission!=null?String(s.commission):"")},children:"إلغاء"})]}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-base text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono",children:h(s.commission||0)})," جنيه"]}),e.jsx(x,{size:"xs",variant:"ghost",className:"h-6 px-2 text-[11px] receipt-no-print",onClick:()=>D(!0),children:"تعديل"})]})]}),((s==null?void 0:s.fee)||0)>0&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"الرسوم"}),e.jsxs("span",{className:"text-base text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono",children:h(s.fee||0)})," جنيه"]})]}),!(String((s==null?void 0:s.txnType)||"").toLowerCase()==="sales"||String((s==null?void 0:s.type)||"").toLowerCase()==="sales")&&(s.type==="transfer"||s.type==="withdraw"||s.type==="atm_withdraw"||s.type==="machine_withdrawal")&&(()=>{const a=s.type==="withdraw"||s.type==="atm_withdraw"||s.type==="machine_withdrawal"?"قبل السحب":"قبل التحويل";return e.jsxs("div",{className:"receipt-no-print",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:["رصيد النقدية ",a]}),e.jsxs("span",{className:"text-base font-semibold text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono",children:h(Number(s.balanceBeforeCash??s.cashBalanceBefore??0))})," جنيه"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:["رصيد المحفظة ",a]}),e.jsxs("span",{className:"text-base font-semibold text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono",children:h(Number(s.balanceBeforeWallet??s.walletBalanceBefore??0))})," جنيه"]})]})]})})(),(String((s==null?void 0:s.txnType)||"").toLowerCase()==="sales"||String((s==null?void 0:s.type)||"").toLowerCase()==="sales")&&e.jsxs("div",{className:"receipt-no-print flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"رصيد النقدية قبل الإضافة"}),e.jsxs("span",{className:"text-base font-semibold text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono",children:h(Number(s.balanceBeforeCash??s.cashBalanceBefore??0))})," جنيه"]})]}),(String((s==null?void 0:s.txnType)||"").toLowerCase()==="sales"||String((s==null?void 0:s.type)||"").toLowerCase()==="sales")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"المنتج"}),e.jsx("span",{className:"text-base font-semibold text-gray-900 dark:text-slate-100",children:(s==null?void 0:s.saleProductName)||"منتج"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"الكمية"}),e.jsx("span",{className:"text-base font-semibold text-gray-900 dark:text-slate-100",children:(s==null?void 0:s.saleQuantity)??""})]})]}),e.jsx(ve,{className:"my-1 dark:bg-slate-600"}),e.jsxs("div",{className:"flex justify-between items-center font-bold text-lg md:text-base",children:[e.jsx("span",{className:"text-base text-gray-900 dark:text-slate-100",children:"الإجمالي"}),e.jsxs("span",{className:"text-xl font-extrabold text-gray-900 dark:text-slate-100",dir:"ltr",children:[e.jsx("span",{className:"font-mono text-xl",children:h(ze)})," جنيه"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"التاريخ"}),e.jsx("span",{className:"text-base text-gray-900 dark:text-slate-100",children:Te(s.createdAt)})]}),s.reference&&e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-sm font-medium text-gray-700 dark:text-slate-300",children:"المرجع"}),e.jsx("span",{className:"text-base font-mono break-all text-gray-900 dark:text-slate-100",dir:"ltr",children:s.reference})]})]}),Se&&String(s.note||"").trim()&&e.jsxs("div",{className:"p-3 rounded-md border flex gap-2 bg-gray-50 dark:bg-slate-700/50 border-gray-200 dark:border-slate-600",children:[e.jsx(he,{className:"h-4 w-4 text-gray-900 dark:text-slate-100 shrink-0"}),e.jsx("div",{className:"text-sm break-words text-gray-900 dark:text-slate-100",children:String(s.note||"").trim()})]}),e.jsxs("div",{className:"pt-2 mt-2 border-t dark:border-slate-600 text-xs text-center text-gray-900 dark:text-slate-200",children:[T&&e.jsxs("div",{children:["في حالة وجود أي شكوى برجاء التواصل مع مدير المحل على رقم: ",e.jsx("span",{dir:"ltr",className:"font-mono",children:T})]}),e.jsx("a",{href:"https://cashy-link.com",target:"_blank",rel:"noopener noreferrer",dir:"ltr",className:"block mt-1 hover:underline font-mono text-gray-900 dark:text-slate-200",children:"cashy-link.com"})]})]})})}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 pt-3",children:[U&&e.jsx(x,{onClick:()=>{w(""),L(""),_(!1),z(!0)},variant:"destructive",size:"sm","aria-label":"حذف الإيصال",title:"حذف الإيصال",className:"w-full h-9 px-2 justify-center",children:e.jsx(Ue,{className:"h-4 w-4"})}),H&&String(s.status||"").toLowerCase()!=="pending"&&e.jsxs(x,{onClick:()=>{b(""),S(""),$(!1),C(!0)},className:"w-full h-9 px-3 bg-emerald-600 hover:bg-emerald-700 text-white",size:"sm",children:[e.jsx(ss,{className:"h-4 w-4 mr-1"}),"إكمال المعاملة"]}),e.jsx(x,{onClick:De,className:"w-full h-9 px-2 bg-green-600 hover:bg-green-700 text-white justify-center",size:"sm","aria-label":"مشاركة عبر واتساب",title:"مشاركة عبر واتساب",children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx(x,{onClick:_e,className:"w-full h-9 px-2 bg-blue-600 hover:bg-blue-700 text-white justify-center",size:"sm","aria-label":"طباعة الإيصال",title:"طباعة الإيصال",children:e.jsx(ts,{className:"h-4 w-4"})}),e.jsx(x,{onClick:Re,variant:"outline",size:"sm","aria-label":"حفظ الإيصال",title:"حفظ الإيصال",className:"w-full h-9 px-2 justify-center",children:e.jsx(as,{className:"h-4 w-4"})}),e.jsx(x,{onClick:M,variant:"outline",size:"sm","aria-label":"إغلاق",title:"إغلاق",className:"w-full h-9 px-2 justify-center",children:e.jsx(He,{className:"h-4 w-4"})})]})]})}),e.jsx(ae,{open:$e,onOpenChange:z,children:e.jsxs(re,{className:"sm:max-w-md",dir:"rtl",children:[e.jsx(le,{children:e.jsxs(ie,{className:"flex items-center gap-2 text-center justify-center",children:[e.jsx(ue,{className:"h-5 w-5 text-red-600"}),"تأكيد حذف المعاملة"]})}),e.jsx("div",{className:"text-center text-sm text-gray-600 dark:text-slate-300 mb-4",children:"أدخل الرقم السري لتأكيد حذف هذه المعاملة"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"deletePin",className:"text-right block",children:"الرقم السري الرئيسي"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"deletePin",type:G?"text":"password",autoComplete:"off",value:Q,onChange:t=>L(t.target.value),placeholder:"أدخل الرقم السري",className:"pr-10 w-full border rounded-md h-10 px-3",dir:"ltr"}),e.jsx("button",{type:"button",onClick:()=>_(!G),className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:G?e.jsx(be,{className:"h-4 w-4"}):e.jsx(ye,{className:"h-4 w-4"})})]})]}),de&&e.jsx("div",{className:"flex items-center gap-2 text-red-600 text-sm",children:de}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx(x,{type:"button",variant:"outline",className:"flex-1",onClick:()=>{z(!1),L(""),w(""),_(!1)},disabled:ne,children:"إلغاء"}),e.jsx(x,{type:"button",className:"flex-1 bg-red-600 hover:bg-red-700",disabled:ne,onClick:async()=>{w(""),oe(!0);try{if(!await F.hasMasterPin(m)){w("الرقم السري غير مُعيَّن، يرجى تعيينه أولاً"),o({title:"الرقم السري غير مُعيَّن",description:"يرجى تعيين الرقم السري من إدارة الأرقام السرية قبل الحذف.",variant:"destructive"});return}if(!Q){w("يرجى إدخال الرقم السري");return}if(!await F.verifyMasterPin(Q,m)){w("الرقم السري غير صحيح"),o({title:"رقم سري غير صحيح",description:"تعذر تنفيذ الحذف بسبب رقم سري خاطئ.",variant:"destructive"});return}try{U&&s&&U(s.id),z(!1),L(""),w(""),_(!1),M()}catch{}}finally{oe(!1)}},children:"تأكيد الحذف"})]})]})]})}),e.jsx(ae,{open:Ee,onOpenChange:t=>{t?C(!0):(C(!1),S(""),b(""),$(!1))},children:e.jsxs(re,{className:"sm:max-w-md",dir:"rtl",children:[e.jsx(le,{children:e.jsxs(ie,{className:"flex items-center gap-2 text-center justify-center",children:[e.jsx(ue,{className:"h-5 w-5 text-emerald-600"}),"تأكيد إكمال المعاملة"]})}),e.jsx("div",{className:"text-center text-sm text-gray-600 dark:text-slate-300 mb-4",children:"أدخل الرقم السري لتأكيد إكمال هذه المعاملة المؤجلة"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"completePin",className:"text-right block",children:"الرقم السري الرئيسي"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:"completePin",type:X?"text":"password",autoComplete:"off",value:K,onChange:t=>S(t.target.value),onKeyDown:t=>{var a;t.key==="Enter"&&(t.preventDefault(),(a=document.getElementById("confirm-complete-btn"))==null||a.click())},placeholder:"أدخل الرقم السري",className:"pr-10 w-full border rounded-md h-10 px-3",dir:"ltr"}),e.jsx("button",{type:"button",onClick:()=>$(!X),className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",children:X?e.jsx(be,{className:"h-4 w-4"}):e.jsx(ye,{className:"h-4 w-4"})})]})]}),ce&&e.jsx("div",{className:"flex items-center gap-2 text-red-600 text-sm",children:ce}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx(x,{type:"button",variant:"outline",className:"flex-1",onClick:()=>{C(!1),S(""),b(""),$(!1)},disabled:me,children:"إلغاء"}),e.jsx(x,{id:"confirm-complete-btn",type:"button",className:"flex-1 bg-emerald-600 hover:bg-emerald-700",disabled:me,onClick:async()=>{b(""),pe(!0);try{if(!await F.hasMasterPin(m)){b("الرقم السري غير مُعيَّن، يرجى تعيينه أولاً"),o({title:"الرقم السري غير مُعيَّن",description:"يرجى تعيين الرقم السري من إدارة الأرقام السرية قبل الإكمال.",variant:"destructive"});return}if(!K){b("يرجى إدخال الرقم السري");return}if(!await F.verifyMasterPin(K,m)){b("الرقم السري غير صحيح"),o({title:"رقم سري غير صحيح",description:"تعذر تنفيذ الإكمال بسبب رقم سري خاطئ.",variant:"destructive"});return}try{H&&s&&H(s.id),C(!1),S(""),b(""),$(!1),M()}catch{}}finally{pe(!1)}},children:"تأكيد الإكمال"})]})]})]})})]})};export{xs as default};
//# sourceMappingURL=ReceiptModal-HLc67Pnb.js.map
