
// قاعدة بيانات مؤقتة متكاملة
const DB = {
    adminPhone: "249963534622",
    pointValue: 5000, // قيمة النقطة الواحدة بالجنيه
    
    // بيانات النقاط
    points: {
        "000": { name: "أحمد", points: 12, totalSpent: 125000 },
        "0001": { name: "سارة", points: 3, totalSpent: 50 },
         "0002": { name: "عوض", points: 3, totalSpent: 50 }
    },
    
    // بيانات التتبع
    orders: {
        "000": { service: "تصميم موقع احترافي", status: "قيد التنفيذ", note: "جاري العمل على التصميم" },
        "0002": { service: "تزويد متابعين", status: "تم التسليم", note: "تمت الزيادة بنجاح" }
    }, 
"0001": { service: "تزويد متابعين", status: "تم التسليم", note: "تمت الزيادة بنجاح" }
};

// قائمة الخدمات
const SERVICES = [
    { id: 1, title: "تزويد متابعين إنستغرام و فيسبوك", desc: "1000 متابع حقيقي - ضمان 30 يوم", price: 3000 },
    { id: 2, title: "تصميم موقع احترافي", desc: "موقع متجاوب صفحات متعددة", price: 10000 },
    { id: 3, title: "مونتاج 5 فيديوهات ريلز", desc: "تحرير احترافي شامل إضافة النصوص والتأثيرات", price: 2000 }, { id: 3, title: "بوتات للقروبات", desc: "بوتات تساعدك في إدارة قروباتك واتساب و فيسبوك", price: 5000 }
];

// عرض الخدمات في الصفحة الرئيسية
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if(!container) return;

    container.innerHTML = SERVICES.map(item => `
        <div class="card">
            <h3>${item.title}</h3>
            <p style="color: #64748b; font-size: 0.9rem; margin: 10px 0;">${item.desc}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 15px;">
                <strong style="color: var(--primary);">${item.price.toLocaleString('ar-SA')} ج.س</strong>
                <a href="payment.html?service=${encodeURIComponent(item.title)}&price=${item.price}" class="btn-primary">اطلب الآن</a>
            </div>
        </div>
    `).join('');
}

// دالة تتبع الطلبات
function trackOrder() {
    let input = document.getElementById('trackInput').value.trim();
    let resultBox = document.getElementById('trackResult');
    let order = DB.orders[input];

    if(!resultBox) return;

    if(order) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
            <div style="text-align:right; margin-top:15px; background:#f1f5f9; padding:15px; border-radius:8px;">
                <p><b>الخدمة:</b> ${order.service}</p>
                <p><b>الحالة:</b> <span style="background:var(--primary); color:white; padding:2px 8px; border-radius:4px;">${order.status}</span></p>
                <p><b>ملاحظات:</b> ${order.note}</p>
            </div>
        `;
    } else {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `<p style="color:red; margin-top:10px;"> احم شطة بلحم يا مكنة ماف طلبات بالنمرة دي</p>`;
    }
}

document.addEventListener('DOMContentLoaded', renderServices);
