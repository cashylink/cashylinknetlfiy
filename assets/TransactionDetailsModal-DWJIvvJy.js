import{j as e,af as S,ag as z,ah as D,ai as k,as as T,c as m,d as p,F as P,g as h,a3 as A,U as x,P as b,O as E,B as c,at as G,C as y}from"./index-CZwBW8vR.js";import{f as l}from"./SimCardsAccessDialog-DcM4jv_g.js";import{B as u}from"./badge-DziRw6yR.js";import{D as j}from"./dollar-sign-CQHak9ia.js";import{C as L}from"./calendar-DdlfWvl7.js";import{P as R}from"./printer-1f8tOea1.js";import{C as B}from"./users-_xFOxS2A.js";import{C as F}from"./circle-check-big-DUSZXsZt.js";import"./select-C1gLQVXw.js";const q=({isOpen:N,onClose:n,transaction:s,onDelete:w})=>{if(!s)return null;const v=t=>{switch(t){case"completed":return e.jsx(F,{className:"h-5 w-5 text-green-500"});case"pending":return e.jsx(y,{className:"h-5 w-5 text-yellow-500"});case"failed":return e.jsx(B,{className:"h-5 w-5 text-red-500"});default:return e.jsx(y,{className:"h-5 w-5 text-gray-500"})}},f=t=>{switch(t){case"completed":return"مكتملة";case"pending":return"قيد الانتظار";case"failed":return"فاشلة";default:return"غير معروف"}},g=t=>{switch(t){case"withdraw":return"سحب";case"send":return"إرسال";case"receive":return"استقبال";default:return"تحويل"}},$=()=>{const t=!!s.senderNumber,a=!!s.senderName,i=t?"الرقم المرسل:":a?"الرقم الراسل:":"رقم المحفظة:",r=t?s.senderNumber:a?s.senderName:s.senderPhone,o=`
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 500px; margin: 0 auto; padding: 30px; background: #fff;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px;">
          <h1 style="color: #2563eb; margin-bottom: 5px; font-size: 28px;">إيصال المعاملة</h1>
          <p style="color: #666; font-size: 16px; margin: 0;">رقم المرجع: ${s.transactionReference||s.id}</p>
          <p style="color: #888; font-size: 14px; margin: 5px 0 0 0;">${new Date().toLocaleString("ar-EG")}</p>
        </div>
        
        <!-- Shop Info -->
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">معلومات المحل</h3>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-weight: 600; color: #475569;">اسم المحل:</span>
            <span style="color: #1e293b;">${s.merchantShopName||s.shopName||"غير محدد"}</span>
          </div>
        </div>
        
        <!-- Transaction Details -->
        <div style="background: #fff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">تفاصيل المعاملة</h3>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
            <span style="font-weight: 600; color: #475569;">نوع المعاملة:</span>
            <span style="color: #2563eb; font-weight: 600;">${g(s.type)}</span>
          </div>
          
          <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
            <span style="font-weight: 600; color: #475569;">الحالة:</span>
            <span style="color: ${s.status==="completed"?"#16a34a":s.status==="pending"?"#ca8a04":"#dc2626"}; font-weight: 600;">
              ${f(s.status)}
            </span>
          </div>

          ${s!=null&&s.cashierName?`
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">الكاشير:</span>
              <span style="color: #1e293b;">${s.cashierName}</span>
            </div>
          `:""}
          
          ${s.type!=="withdraw"?`
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">${i}</span>
              <span style="color: #1e293b;">${r}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">الرقم المستقبل:</span>
              <span style="color: #1e293b;">${s.receiverNumber||s.receiverPhone}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">المبلغ المحول:</span>
              <span style="color: #2563eb; font-weight: bold; font-size: 16px;">${l(s.transferredAmount||s.amount)} جنيه</span>
            </div>
          `:`
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">رقم المحفظة:</span>
              <span style="color: #1e293b;">${s.senderPhone}</span>
            </div>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">المبلغ المسحوب:</span>
              <span style="color: #dc2626; font-weight: bold; font-size: 16px;">${l(s.withdrawnAmountDetailed||s.withdrawnAmount||s.amount)} جنيه</span>
            </div>
          `}
          
          ${s.commission?`
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">العمولة:</span>
              <span style="color: #f59e0b; font-weight: 600;">${l(s.commission||0)} جنيه</span>
            </div>
          `:""}
          ${s.commission?`
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">الربح:</span>
              <span style="color: #16a34a; font-weight: 600;">${l(s.commission||0)} جنيه</span>
            </div>
          `:""}
          ${s!=null&&s.fee&&Number(s.fee)>0?`
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 8px 0; border-bottom: 1px solid #f1f5f9;">
              <span style="font-weight: 600; color: #475569;">الرسوم:</span>
              <span style="color: #64748b; font-weight: 600;">${l(s.fee||0)} جنيه</span>
            </div>
          `:""}
          
          <div style="display: flex; justify-content: space-between; padding: 8px 0;">
            <span style="font-weight: 600; color: #475569;">التاريخ والوقت:</span>
            <span style="color: #1e293b;">${s.createdAt.toLocaleString("ar-EG")}</span>
          </div>
        </div>
        
        <!-- Total Amount -->
        <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); border-radius: 12px; padding: 20px; margin-bottom: 20px; text-align: center;">
          <h3 style="color: white; margin: 0 0 10px 0; font-size: 16px;">إجمالي المبلغ</h3>
          <p style="color: white; font-size: 24px; font-weight: bold; margin: 0;">
            ${s.type==="withdraw"?"-":""}${l(s.amount)} جنيه
          </p>
        </div>
        
        
        
        
        <!-- Footer -->
        <div style="text-align: center; color: #64748b; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 5px 0;">شكراً لاستخدام خدماتنا</p>
          <p style="margin: 0;">تم إنشاء الإيصال في: ${new Date().toLocaleString("ar-EG")}</p>
        </div>
      </div>
    `,d=window.open("","_blank");d&&(d.document.write(`
        <html>
          <head>
            <title>إيصال المعاملة - ${s.transactionReference||s.id}</title>
            <meta charset="UTF-8">
            <style>
              body { 
                margin: 0; 
                padding: 20px; 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: #f8fafc;
              }
              @media print {
                body { 
                  margin: 0; 
                  background: white;
                }
              }
            </style>
          </head>
          <body>
            ${o}
          </body>
        </html>
      `),d.document.close(),d.print())},C=()=>{window.confirm("هل أنت متأكد من حذف هذه المعاملة؟ لا يمكن التراجع عن هذا الإجراء.")&&(w(s.id),n())};return e.jsx(S,{open:N,onOpenChange:n,children:e.jsxs(z,{className:"w-[92vw] sm:w-auto sm:max-w-2xl max-h-[90vh] overflow-y-auto",children:[e.jsx(D,{children:e.jsxs(k,{className:"flex items-center gap-2 text-xl",children:[e.jsx(T,{className:"h-6 w-6 text-blue-600"}),"إيصال المعاملة المفصل"]})}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(m,{className:"bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200",children:e.jsxs(p,{className:"text-center pb-2",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[v(s.status),e.jsx(u,{variant:s.status==="completed"?"default":"secondary",className:"text-sm",children:f(s.status)})]}),e.jsxs("h3",{className:"text-2xl font-bold text-blue-600",children:[s.type==="withdraw"?"-":"",l(s.amount)," جنيه"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:["رقم المرجع: ",s.transactionReference||s.id]})]})}),e.jsxs(m,{children:[e.jsx(p,{className:"pb-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{className:"h-5 w-5 text-green-600"}),e.jsx("h4",{className:"font-semibold text-lg",children:"معلومات المحل"})]})}),e.jsxs(h,{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"اسم المحل:"}),e.jsx("span",{className:"text-gray-900",children:s.merchantShopName||s.shopName||"غير محدد"})]}),(s==null?void 0:s.cashierName)&&e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"الكاشير:"}),e.jsx("span",{className:"text-gray-900",children:s.cashierName})]})]})]}),e.jsxs(m,{children:[e.jsx(p,{className:"pb-3",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"h-5 w-5 text-blue-600"}),e.jsx("h4",{className:"font-semibold text-lg",children:"تفاصيل المعاملة"})]})}),e.jsx(h,{className:"space-y-3",children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-blue-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-blue-700",children:"نوع المعاملة:"}),e.jsx(u,{variant:"outline",className:"bg-blue-100 text-blue-800",children:g(s.type)})]}),s.type!=="withdraw"?e.jsxs(e.Fragment,{children:[(()=>{const t=!!s.senderNumber,a=!!s.senderName,i=t?"الرقم المرسل:":a?"الرقم الراسل:":"رقم المحفظة:",r=t?s.senderNumber:a?s.senderName:s.senderPhone,o=t?x:b;return e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{className:"h-4 w-4 text-gray-500"}),e.jsx("span",{className:"font-medium text-gray-700",children:i})]}),e.jsx("span",{className:"text-gray-900 font-mono",children:r})]})})(),e.jsx("div",{className:"flex items-center justify-center p-2",children:e.jsx(E,{className:"h-6 w-6 text-blue-500"})}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-green-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 text-green-500"}),e.jsx("span",{className:"font-medium text-green-700",children:"الرقم المستقبل:"})]}),e.jsx("span",{className:"text-green-900 font-mono",children:s.receiverNumber||s.receiverPhone})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-blue-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"h-4 w-4 text-blue-500"}),e.jsx("span",{className:"font-medium text-blue-700",children:"المبلغ المحول:"})]}),e.jsxs("span",{className:"text-blue-900 font-bold text-lg",children:[l(s.transferredAmount||s.amount)," جنيه"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-gray-500"}),e.jsx("span",{className:"font-medium text-gray-700",children:"رقم المحفظة:"})]}),e.jsx("span",{className:"text-gray-900 font-mono",children:s.senderPhone})]}),(s==null?void 0:s.senderName)&&e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 text-gray-500"}),e.jsx("span",{className:"font-medium text-gray-700",children:"اسم صاحب المحفظة:"})]}),e.jsx("span",{className:"text-gray-900",children:s.senderName})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-red-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"h-4 w-4 text-red-500"}),e.jsx("span",{className:"font-medium text-red-700",children:"المبلغ المسحوب:"})]}),e.jsxs("span",{className:"text-red-900 font-bold text-lg",children:[l(s.withdrawnAmountDetailed||s.withdrawnAmount||s.amount)," جنيه"]})]})]}),s.commission&&e.jsxs("div",{className:"flex items-center justify-between p-3 bg-yellow-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-yellow-700",children:"العمولة:"}),e.jsxs("span",{className:"text-yellow-900 font-semibold",children:[s.commission," جنيه"]})]}),s.commission&&e.jsxs("div",{className:"flex items-center justify-between p-3 bg-green-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-green-700",children:"الربح:"}),e.jsxs("span",{className:"text-green-900 font-semibold",children:[s.commission," جنيه"]})]}),(s==null?void 0:s.fee)&&Number(s.fee)>0&&e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsx("span",{className:"font-medium text-gray-700",children:"الرسوم:"}),e.jsxs("span",{className:"text-gray-900 font-semibold",children:[s.fee," جنيه"]})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(L,{className:"h-4 w-4 text-gray-500"}),e.jsx("span",{className:"font-medium text-gray-700",children:"التاريخ والوقت:"})]}),e.jsx("span",{className:"text-gray-900",children:s.createdAt.toLocaleString("ar-EG")})]})]})})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(c,{onClick:$,className:"flex-1 bg-blue-600 hover:bg-blue-700 text-white",size:"lg",children:[e.jsx(R,{className:"h-5 w-5 mr-2"}),"طباعة الإيصال"]}),e.jsxs(c,{onClick:C,variant:"destructive",className:"flex-1",size:"lg",children:[e.jsx(G,{className:"h-5 w-5 mr-2"}),"حذف المعاملة"]})]}),e.jsx(c,{onClick:n,variant:"outline",className:"w-full",size:"lg",children:"إغلاق الإيصال"})]})]})})};export{q as default};
//# sourceMappingURL=TransactionDetailsModal-DWJIvvJy.js.map
