// بيانات الصور لكل فئة
const categoryImages = {
    'reception': [
        'images/reception1.jpg', 'images/reception2.jpg', 'images/reception3.jpg', 'images/reception4.jpg',
        'images/reception5.jpg', 'images/reception6.jpg', 'images/reception7.jpg', 'images/reception8.jpg',
        'images/reception9.jpg', 'images/reception10.jpg', 'images/reception11.jpg', 'images/reception12.jpg',
        'images/reception13.jpg', 'images/reception14.jpg', 'images/reception15.jpg', 'images/reception16.jpg',
        'images/reception17.jpg', 'images/reception18.jpg', 'images/reception19.jpg', 'images/reception20.jpg',
        'images/reception21.jpg', 'images/reception22.jpg', 'images/reception23.jpg', 'images/reception24.jpg','images/reception25.jpg'
        ,'images/reception26.jpg','images/reception27.jpg','images/reception28.jpg','images/reception29.jpg','images/reception30.jpg'
        ,'images/reception31.jpg','images/reception32.jpg','images/reception33.jpg','reception34.jpg','reception35.jpg','reception36.jpg'
        ,'reception37.jpg','reception38.jpg','reception39.jpg','reception40.jpg','reception41.jpg','reception42.jpg','reception43.jpg','reception44.jpg'
        ,'reception45.jpg','reception46.jpg'
    ],
    'fela-k': [
        'images/oqto1.jpg', 'images/oqto2.jpg', 'images/oqto3.jpg', 'images/oqto4.jpg',
        'images/oqto5.jpg', 'images/oqto6.jpg', 'images/oqto7.jpg', 'images/oqto8.jpg',
        'images/oqto9.jpg', 'images/oqto10.jpg'
    ],
    'fela_3': [
        'images/Screenshot1.jpg', 'images/Screenshot2.jpg', 'images/Screenshot3.jpg', 'images/Screenshot4.jpg',
        'images/Screenshot5.jpg', 'images/Screenshot6.jpg', 'images/Screenshot7.jpg', 'images/Screenshot8.jpg',
        'images/Screenshot9.jpg', 'images/Screenshot10.jpg', 'images/Screenshot11.jpg', 'images/Screenshot12.jpg',
        'images/Screenshot13.jpg', 'images/Screenshot14.jpg', 'images/Screenshot15.jpg', 'images/Screenshot16.jpg',
        'images/Screenshot17.jpg', 'images/Screenshot18.jpg', 'images/Screenshot19.jpg'
    ],

    'bab': [
        'images/bab1.jpg', 'images/bab2.jpg', 'images/bab3.jpg', 'images/bab4.jpg',
        'images/bab5.jpg', 'images/bab6.jpg', 'images/bab7.jpg', 'images/bab8.jpg'
    ], 

    'gardn': [
        'images/gardnt1.jpg', 'images/gardn2.jpg', 'images/gardn3.jpg', 'images/gardn4.jpg',
        'images/gardn5.jpg', 'images/gardn6.jpg', 'images/gardn7.jpg', 'images/gardn8.jpg'
    ],

    'srer': [
        'images/srer1.jpg', 'images/srer2.jpg', 'images/srer3.jpg', 'images/srer4.jpg',
        'images/srer5.jpg'
    ],
    
   
    'master-bedroom': [
        'images/master1.jpg', 'images/master2.jpg', 'images/master3.jpg', 'images/master4.jpg',
        'images/master5.jpg', 'images/master6.jpg', 'images/master7.jpg', 'images/master8.jpg',
        'images/master9.jpg', 'images/master10.jpg',  'images/master12.jpg',
        'images/master13.jpg', 'images/master14.jpg', 'images/master15.jpg', 'images/master16.jpg',
        'images/master17.jpg', 'images/master18.jpg', 'images/master19.jpg', 'images/master20.jpg'
        , 'images/master21.jpg', 'images/master22.jpg', 'images/master23.jpg', 'images/master24.jpg'
        , 'master25.jpg', 'master27.jpg', 'master26.jpg', 'master28.jpg', 'master29.jpg', 'master30.jpg', 'master31.jpg'
        , 'master32.jpg', 'master33.jpg', 'master34.jpg', 'master35.jpg', 'master36.jpg', 'master37.jpg', 'master38.jpg'
        , 'master39.jpg', 'master40.jpg'
    ],
    'boys-room': [
        'images/boy1.jpg', 'images/boy2.jpg', 'images/boy3.jpg', 'images/boy4.jpg',
        'images/boy5.jpg', 'images/boy6.jpg', 'images/boy7.jpg', 'images/boy8.jpg',
        'images/boy9.jpg', 'images/boy10.jpg', 'images/boy11.jpg', 'images/boy12.jpg', 'images/boy13.jpg'
        , 'boy14.jpg', 'boy15.jpg', 'boy16.jpg', 'boy17.jpg', 'boy18.jpg'
    ],
    'girls-room': [
        'images/girl1.jpg', 'images/girl2.jpg', 'images/girl3.jpg', 'images/girl4.jpg',
        'images/girl5.jpg', 'images/girl6.jpg', 'images/girl7.jpg'
        , 'images/girl8.jpg', 'images/girl9.jpg', 'images/girl10.jpg', 'girl11.jpg'
        , 'girl12.jpg', 'girl13.jpg', 'girl14.jpg', 'girl15.jpg'
    ],
    'small-bathroom': [
        'images/small1.jpg', 'images/small2.jpg', 'images/small3.jpg', 'images/small4.jpg',
        'images/small5.jpg', 'images/small6.jpg', 'images/small7.jpg', 'images/small8.jpg',
        'images/small9.jpg','images/small10.jpg','images/small11.jpg','small12.jpg'
        ,'small13.jpg','small14.jpg','small15.jpg','small16.jpg','small17.jpg','small18.jpg'
    ],
    'large-bathroom': [
        'images/big1.jpg',
        'images/big2.jpg',
        'images/big3.jpg',
        'images/big4.jpg',
        'images/big5.jpg',
        'images/big6.jpg',
        'images/big7.jpg', 
        'images/big8.jpg',
        'images/big9.jpg',
        'images/big10.jpg',
        'images/big11.jpg',
        'images/big12.jpg',
        'images/big13.jpg',
        'big14.jpg',
        'big15.jpg',
        'big16.jpg',
        'big17.jpg',
        'big18.jpg',
        'big19.jpg',
        'big20.jpg',
        'big21.jpg',
        'big22.jpg',
        'big23.jpg',
        'big24.jpg'
    ],
    'kitchen': [
        'images/kichin1.jpg', 'images/kichin2.jpg', 'images/kichin3.jpg', 'images/kichin4.jpg',
        'images/kichin5.jpg', 'images/kichin6.jpg', 'images/kichin7.jpg', 'images/kichin8.jpg',
        'images/kichin9.jpg', 'images/kichin10.jpg', 'images/kichin11.jpg', 'images/kichin12.jpg',
        'images/kichin13.jpg', 'images/kichin14.jpg', 'images/kichin15.jpg', 'images/kichin16.jpg',
        'images/kichin17.jpg','images/kitchin18.jpg','images/kichin19.jpg','images/kitchin20.jpg'
        ,'kitchin21.jpg','kitchin22.jpg','kitchin23.jpg','kitchin24.jpg','kitchin25.jpg','kitchin26.jpg','kitchin27.jpg','kitchin28.jpg','kitchin29.jpg','kitchin30.jpg'
    ]
};

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ==================== Form Validation ====================
const formValidation = {
    name: (value) => {
        if (!value) return "اسم العميل مطلوب";
        if (value.length < 3) return "يجب أن يكون الاسم 3 أحرف على الأقل";
        return null;
    },
    phone: (value) => {
        if (!value) return "رقم الهاتف مطلوب";
        if (!/^[0-9\s\-\+\(\)]{10,}$/.test(value)) return "رقم الهاتف غير صحيح";
        return null;
    },
    how: (value) => !value ? "يرجى اختيار المصدر" : null,
    location: (value) => !value ? "نوع المكان مطلوب" : null,
    area: (value) => !value ? "المنطقة مطلوبة" : null,
    floor: (value) => !value ? "الدور مطلوب" : null,
    apartment: (value) => !value ? "حالة الشقة مطلوبة" : null,
    designType: (value) => !value ? "نوع التصميم مطلوب" : null,
    'floor-type': (value) => !value ? "نوع الأرضيات مطلوب" : null,
    'designs-available': (value) => !value ? "هذا الحقل مطلوب" : null,
    electricity: (value) => !value ? "نظام الكهرباء مطلوب" : null,
    plumbing: (value) => !value ? "نظام السباكة مطلوب" : null,
    'customer-location': (value) => !value ? "مكان إقامة العميل مطلوب" : null,
    'unit-area': (value) => !value ? "مساحة الوحدة مطلوبة" : null,
    'paint-type': (value) => !value ? "نوع الأصباغ مطلوب" : null,
    'scope-type': (value) => !value ? "يرجى اختيار نوع رفع الكفاءة" : null,
};

// ==================== Tabs field mapping ====================
// اي الحقول اللي لازم تتأكد منها قبل ما ننتقل من تاب لتاني
const tabFieldIds = {
    'tab-client': ['name', 'phone', 'how', 'location', 'area', 'unit-area', 'apartment', 'scope-type'],
    'tab-inputs': ['paint-type', 'floor', 'designType', 'floor-type', 'designs-available', 'electricity', 'plumbing', 'customer-location'],
};

// ==================== Toast Notification ====================
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(toast);

    const style = document.createElement('style');
    if (!document.getElementById('toast-styles')) {
        style.id = 'toast-styles';
        style.textContent = `
            .toast-notification {
                position: fixed;
                top: 24px;
                left: 24px;
                padding: 16px 24px;
                border-radius: 8px;
                color: white;
                z-index: 50;
                animation: slideIn 0.3s ease-out;
                display: flex;
                align-items: center;
                gap: 12px;
                max-width: 400px;
            }
            
            .toast-success {
                background: linear-gradient(135deg, #d4af37 0%, #fdb813 100%);
            }
            
            .toast-error {
                background: #dc2626;
            }
            
            .toast-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .toast-icon {
                font-size: 20px;
                font-weight: bold;
            }
            
            .toast-notification p {
                margin: 0;
                font-weight: 600;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==================== Form Error Display ====================
function showFieldError(fieldName, errorMessage) {
    const field = document.querySelector(`#${fieldName}`);
    if (!field) return;

    const parent = field.closest('.form-group');
    if (!parent) return;

    const existingError = parent.querySelector('.form-error');
    if (existingError) existingError.remove();

    if (errorMessage) {
        const errorEl = document.createElement('span');
        errorEl.className = 'form-error';
        errorEl.textContent = errorMessage;
        parent.appendChild(errorEl);

        field.style.borderColor = '#dc2626';
        field.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
    } else {
        field.style.borderColor = 'var(--border)';
        field.style.boxShadow = '';
    }
}

// ==================== Form Validation On Change ====================
function setupFieldValidation() {
    const formFields = document.querySelectorAll('.form-group input, .form-group select');
    
    formFields.forEach(field => {
        field.addEventListener('change', function() {
            const fieldName = this.id;
            const fieldValue = this.value;
            
            if (formValidation[fieldName]) {
                const error = formValidation[fieldName](fieldValue);
                showFieldError(fieldName, error);
            }
        });

        field.addEventListener('blur', function() {
            const fieldName = this.id;
            const fieldValue = this.value;
            
            if (formValidation[fieldName]) {
                const error = formValidation[fieldName](fieldValue);
                if (error) {
                    showFieldError(fieldName, error);
                }
            }
        });
    });
}

// ==================== Tabs Navigation ====================
function validateTabFields(tabId) {
    const fieldIds = tabFieldIds[tabId] || [];
    let isValid = true;

    fieldIds.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field || field.disabled) return;

        const fieldValue = field.value;
        if (formValidation[fieldId]) {
            const error = formValidation[fieldId](fieldValue);
            if (error) {
                showFieldError(fieldId, error);
                isValid = false;
            } else {
                showFieldError(fieldId, null);
            }
        }
    });

    if (tabId === 'tab-client' && !validateWorksSelection()) isValid = false;
    if (tabId === 'tab-inputs' && !validateTileKind()) isValid = false;

    return isValid;
}

function switchToTab(tabId) {
    // تفعيل زرار التاب المطلوب في الشريط العلوي
    document.querySelectorAll('.survey-tab').forEach(tabBtn => {
        tabBtn.classList.toggle('active', tabBtn.getAttribute('data-tab') === tabId);
    });

    // اظهار البانل المطلوب واخفاء الباقي
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === tabId);
    });

    // نمرر لأعلى الفورم عشان المستخدم يشوف التاب الجديد
    const surveySection = document.getElementById('survey');
    if (surveySection) {
        surveySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function setupTabsNavigation() {
    // الضغط على شريط التابس نفسه
    document.querySelectorAll('.survey-tab').forEach(tabBtn => {
        tabBtn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            const currentActivePanel = document.querySelector('.tab-panel.active');

            // لو رايح لتاب قدام، لازم يتأكد من صحة بيانات التاب الحالي الأول
            const tabsOrder = ['tab-client', 'tab-inputs'];
            const currentIndex = tabsOrder.indexOf(currentActivePanel.id);
            const targetIndex = tabsOrder.indexOf(targetTab);

            if (targetIndex > currentIndex) {
                if (!validateTabFields(currentActivePanel.id)) {
                    showToast('يرجى تعبئة الحقول المطلوبة أولاً', 'error');
                    return;
                }
            }

            switchToTab(targetTab);
        });
    });

    // زراير التالي
    document.querySelectorAll('.tab-next-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const currentPanel = this.closest('.tab-panel');
            const nextTab = this.getAttribute('data-next');

            if (!validateTabFields(currentPanel.id)) {
                showToast('يرجى تعبئة الحقول المطلوبة أولاً', 'error');
                return;
            }

            switchToTab(nextTab);
        });
    });

    // زراير السابق
    document.querySelectorAll('.tab-prev-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const prevTab = this.getAttribute('data-prev');
            switchToTab(prevTab);
        });
    });
}

// ==================== Display Category Images ====================
function displayCategoryImages(category) {
    const gallery = document.getElementById('categoryGallery');
    gallery.innerHTML = '';

    const images = categoryImages[category] || [];

    images.forEach((imagePath, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <div class="gallery-image-wrapper">
                <img src="${imagePath}" alt="صورة ${index + 1}" loading="lazy">
                <div class="gallery-overlay">
                    <button class="gallery-btn" onclick="openImage('${imagePath}')">🔍 عرض</button>
                </div>
            </div>
        `;
        gallery.appendChild(item);
    });
}

// ==================== Open Image Modal ====================
function openImage(imagePath) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imagePath}" alt="صورة مكبرة">
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', function() {
        modal.remove();
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ==================== WhatsApp Form Integration ====================
document.getElementById('surveyForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        scopeType: document.getElementById('scope-type').value,
        clientName: document.getElementById('name').value,
        phoneNumber: document.getElementById('phone').value,
        how: document.getElementById('how').value,
        locationType: document.getElementById('location').value,
        area: document.getElementById('area').value,
        floor: document.getElementById('floor').value,
        apartmentState: document.getElementById('apartment').value,
        designType: document.getElementById('designType').value,
        flooring: document.getElementById('floor-type').value,
        designsAvailable: document.getElementById('designs-available').value,
        electricity: document.getElementById('electricity').value,
        plumbing: document.getElementById('plumbing').value,
        clientLocation: document.getElementById('customer-location').value,
        unitArea: document.getElementById('unit-area').value,
       paintType: document.getElementById('paint-type').value,
        kidsGender: document.getElementById('kids-gender').value,
        roomsCount: document.getElementById('rooms-count').value,
        bathroomsCount: document.getElementById('bathrooms-count').value,
        kitchensCount: document.getElementById('kitchens-count').value,
        balconiesCount: document.getElementById('balconies-count').value,
        ceilingHeight: document.getElementById('ceiling-height').value,
        finishingLevel: document.getElementById('finishing-level').value,
        plasteringScope: document.getElementById('plastering-scope').value,
        porcelainSource: document.getElementById('porcelain-source').value,
        tileSize: document.getElementById('tile-size').value,
        ceramicSource: document.getElementById('ceramic-source').value,
        gypsumRatio: document.getElementById('gypsum-ratio').value,
        kitchenTiling: document.getElementById('kitchen-tiling').value,
        colorsCount: document.getElementById('colors-count').value,
        interiorDoorType: document.getElementById('interior-door-type').value,
        interiorDoorsCount: document.getElementById('interior-doors-count').value,
        windowType: document.getElementById('window-type').value,
        glassType: document.getElementById('glass-type').value,
        windowsAreaMethod: document.getElementById('windows-area-method').value,
    };

    // أي حقل اختياري لم يتم اختياره يظهر "غير محدد" في الرسالة
    const v = (val) => (val === undefined || val === null || String(val).trim() === '') ? 'غير محدد' : val;
    // حقول الأعمال: لو العمل غير مطلوب (رفع كفاءة جزئي) تظهر "لا يوجد"
    const wv = (work, val) => isWorkActive(work) ? v(val) : 'لا يوجد';

    let hasErrors = false;
    const fieldIds = ['scope-type', 'name', 'phone', 'how', 'location', 'area', 'floor', 'apartment', 'designType', 'floor-type', 'designs-available', 'electricity', 'plumbing', 'customer-location', 'unit-area', 'paint-type'];
    
    fieldIds.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field || field.disabled) return;
        
        const fieldValue = field.value;
        if (formValidation[fieldId]) {
            const error = formValidation[fieldId](fieldValue);
            if (error) {
                showFieldError(fieldId, error);
                hasErrors = true;
            } else {
                showFieldError(fieldId, null);
            }
        }
    });

    if (!validateWorksSelection()) hasErrors = true;
    if (!validateTileKind()) hasErrors = true;

    if (hasErrors) {
        showToast('يرجى تصحيح الأخطاء المشار إليها', 'error');
        // لو فيه خطأ في تاب "بيانات العميل" نرجع له، غير كده نرجع لتاب "المدخلات"
        const worksErr = document.getElementById('works-error');
        const clientHasError = (worksErr && worksErr.style.display === 'block') || tabFieldIds['tab-client'].some(id => {
            const field = document.getElementById(id);
            return field && !field.disabled && formValidation[id] && formValidation[id](field.value);
        });
        switchToTab(clientHasError ? 'tab-client' : 'tab-inputs');
        if (!clientHasError) {
            const tileErr = document.getElementById('tile-kind-error');
            if (tileErr && tileErr.style.display === 'block') tileErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

   const message = `*طلب تسعير / تشطيب جديد* 🏗️✨

━━━━ 👤 *بيانات العميل* ━━━━
👤 *الاسم:* ${v(formData.clientName)}
📱 *رقم الهاتف:* ${v(formData.phoneNumber)}
📢 *عرفتنا من:* ${v(formData.how)}
🏢 *المكان:* ${v(formData.locationType)}
🗺️ *المنطقة:* ${v(formData.area)}
📐 *المساحة:* ${v(formData.unitArea)} متر مربع
🏠 *حالة الشقة:* ${v(formData.apartmentState)}
🔧 *رفع الكفاءة:* ${v(formData.scopeType)}${buildScopeDetails()}
🧱 *نطاق المحارة:* ${wv('plaster', formData.plasteringScope)}

━━━━ 📝 *المدخلات* ━━━━
🔢 *الدور:* ${v(formData.floor)}
🎨 *نوع التصميم:* ${v(formData.designType)}
⬜ *الأرضية:* ${wv('floors', formData.flooring)}
📋 *التصميمات المتاحة (2D/3D):* ${v(formData.designsAvailable)}
⚡ *الكهرباء:* ${wv('electricity', formData.electricity)}${buildMaterials('electricity')}
💧 *السباكة:* ${wv('plumbing', formData.plumbing)}${buildMaterials('plumbing')}
🌍 *مكان الإقامة:* ${v(formData.clientLocation)}

━━━━ 🏘️ *بيانات الشقة العامة* ━━━━
🛏️ *الغرف:* ${v(formData.roomsCount)}
🚿 *الحمامات:* ${v(formData.bathroomsCount)}
🍳 *المطابخ:* ${v(formData.kitchensCount)}
🌇 *البلكونات:* ${v(formData.balconiesCount)}
📏 *ارتفاع السقف:* ${v(formData.ceilingHeight)}

━━━━ 🧒 *بيانات الأولاد* ━━━━
👦👧 *نوع الأولاد:* ${v(formData.kidsGender)}${buildKidsDetails()}

━━━━ 🛠️ *مستوى التشطيب والحالة* ━━━━
⭐ *مستوى التشطيب:* ${v(formData.finishingLevel)}

━━━━ 🧱 *السيراميك* ━━━━
${buildTileDetails(formData, v)}
🍽️ *تبليط المطبخ:* ${wv('kitchen', formData.kitchenTiling)}

━━━━ 🏛️ *الجبس بورد* ━━━━
🏛️ *نسبة الجبس بورد:* ${wv('gypsum', formData.gypsumRatio)}${buildMaterials('gypsum')}

━━━━ 🎨 *الأصباغ* ━━━━
🖌️ *نوع الأصباغ:* ${wv('paint', formData.paintType)}
🌈 *عدد الألوان:* ${wv('paint', formData.colorsCount)}${buildMaterials('paint')}

━━━━ 🚪 *الأبواب والشبابيك* ━━━━
🚪 *نوع الأبواب الداخلية:* ${wv('doors', formData.interiorDoorType)}
🔢 *عدد الأبواب الداخلية:* ${wv('doors', formData.interiorDoorsCount)}
🪟 *نوع الشبابيك:* ${wv('windows', formData.windowType)}
🔍 *الزجاج:* ${wv('windows', formData.glassType)}
📊 *حصر مساحة الشبابيك وباب البلكونة:* ${wv('windows', formData.windowsAreaMethod)}${buildMaterials('windows')}

💰 *حجز المعاينة:* 2000 جنيه (تُسترد كاش باك عند التوقيع)`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/201121322202?text=${encodedMessage}`;
    
    setSubmitLoading(true);
    showToast('تم استلام طلبك بنجاح! جاري تحويلك إلى واتساب...', 'success');

    setTimeout(() => {
        window.open(whatsappURL, '_blank');
        setSubmitLoading(false);
        resetForm();
    }, 500);
});

// ==================== Form Loading State ====================
function setSubmitLoading(isLoading) {
    const submitBtn = document.querySelector('.submit-btn');
    if (!submitBtn) return;

    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="animate-spin">⏳</span>
            جاري الإرسال...
        `;
    } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `📱 إرسال عبر واتساب`;
    }
}

// ==================== Form Reset ====================
function resetForm() {
    const form = document.getElementById('surveyForm');
    if (form) {
        form.reset();
        document.querySelectorAll('.form-error').forEach(el => el.remove());
        document.querySelectorAll('.form-group input, .form-group select').forEach(field => {
            field.style.borderColor = 'var(--border)';
            field.style.boxShadow = '';
        });
        switchToTab('tab-client');
    }
}

// ==================== الخامات وخطوات التنفيذ (كهرباء / محارة / أصباغ) ====================
const MATERIALS = {
    electricity: {
        emoji: '🔌',
        title: 'خامات الكهرباء',
        items: [
            'لوحة رئيسية ولوحة خدمات',
            'علب الماجيك أصلية',
            'الخرطوم: محمود مصطفى',
            'السوستة: مصطفى محمود',
            'الأسلاك: سويدي - هلال',
            'سلك الدش: نحاس',
            'سلك النت: CAT 6',
        ],
    },
    plumbing: {
        emoji: '💧',
        title: 'خامات السباكة',
        items: [
            'مواسير التغذية: BR ألماني معتمد (بضمان 10 سنوات من الشركة)',
            'مواسير الصرف الداخلي: سمارت ألماني (بضمان 10 سنوات من الشركة)',
            'مواسير صرف التكييف: سمارت (بضمان 10 سنوات من الشركة)',
            'مواسير التعديل الخارجي للصرف: كاسيل (بضمان 10 سنوات من الشركة)',
            'الصندوق المعلق الدفن: جروهي وش نيكل مربع (بضمان 10 سنوات من الشركة)',
            'العزل: سيكا CMP 107',
        ],
    },
    gypsum: {
        emoji: '🏛️',
        title: 'أعمال الجبس بورد',
        items: [
            'ألواح الجبسوم بورد كناوف',
            'الشغل تحت إشراف هندسي ولوحات هندسية للأسقف',
            'التسليم بميزان ليزر',
            'ألواح جبس أخضر مقاوم للرطوبة بالحمامات',
            'ألواح جبس أحمر للمطبخ مقاوم للحرارة',
            'صاج ألفا معتمد كثافة 0.4 مم من المصنع مباشرة',
            'معجون إيزي فيل',
            'فايبر ومسامير وفيشر وجنشات درجة أولى',
        ],
    },
    windows: {
        emoji: '🪟',
        title: 'خامات الألومنيوم والشبابيك',
        items: [
            'جميع الخامات المستخدمة قطاع مصري',
            'إكسسوارات تركية بالكامل',
            'حديد تدعيم داخلي مجلفن للقطع',
            'زجاج سان جوبان 6 مم سنجل',
            'زجاج دبل 21 مم',
            'عزل حراري ومانع للأتربة',
            'ضمان 20 سنة على القطاعات',
            'ضمان 10 سنوات على الإكسسوارات',
        ],
    },
    paint: {
        emoji: '🎨',
        title: 'أعمال الأصباغ',
        items: [
            'وش سيلر مائي GLC',
            'وش سيلر حراري للأسقف الجبسون بورد',
            'من 3 إلى 4 سكاكين معجون GLC على حسب احتياج الحائط',
            'وش بطانة GLC',
            'سكينة تلقيط',
            'معالجة مبدئية للشروخ الخفيفة في الحوائط من خلال معجون معالج الشروخ الأمريكي',
        ],
    },
};

// نص الخامات اللي بيتضاف في رسالة الواتساب (لو العمل مطلوب فقط)
function buildMaterials(work) {
    const m = MATERIALS[work];
    if (!m || !isWorkActive(work)) return '';
    return `\n${m.emoji} *${m.title}:*` + m.items.map(item => `\n      ▫️ ${item}`).join('');
}

// عرض نفس الخامات كملاحظة في الفورم
function renderMaterialsNotes() {
    Object.entries(MATERIALS).forEach(([work, m]) => {
        const note = document.getElementById(`${work}-materials-note`);
        if (!note) return;
        note.innerHTML = `<strong>${m.emoji} ${m.title}:</strong><ul>` +
            m.items.map(item => `<li>${item}</li>`).join('') + '</ul>';
    });
}

// ==================== رفع الكفاءة (كلي / جزئي) ====================
// هل العمل ده مطلوب؟ (في الرفع الكلي أو قبل الاختيار: كل الأعمال مطلوبة)
function isWorkActive(work) {
    const scopeEl = document.getElementById('scope-type');
    if (!scopeEl || scopeEl.value !== 'جزئي') return true;
    const cb = document.querySelector(`.work-checkbox[value="${work}"]`);
    return !!(cb && cb.checked);
}

function buildScopeDetails() {
    const scopeEl = document.getElementById('scope-type');
    if (!scopeEl || scopeEl.value !== 'جزئي') return '';
    const names = Array.from(document.querySelectorAll('.work-checkbox:checked'))
        .map(cb => cb.closest('label').textContent.trim());
    return `\n📌 *الأعمال المطلوبة:* ${names.length ? names.join('، ') : 'لا يوجد'}`;
}

function validateWorksSelection() {
    const scopeEl = document.getElementById('scope-type');
    const errEl = document.getElementById('works-error');
    if (!scopeEl || !errEl) return true;

    if (scopeEl.value === 'جزئي' && !document.querySelector('.work-checkbox:checked')) {
        errEl.textContent = 'اختر عملاً واحداً على الأقل';
        errEl.style.display = 'block';
        return false;
    }
    errEl.style.display = 'none';
    return true;
}

function applyScope() {
    const scopeEl = document.getElementById('scope-type');
    const picker = document.getElementById('works-picker');
    if (!scopeEl || !picker) return;

    picker.classList.toggle('show', scopeEl.value === 'جزئي');

    // اخفاء/اظهار حقول كل عمل (والحقول المخفية بتتعطل عشان ما تتحسبش في التحقق)
    document.querySelectorAll('[data-work]').forEach(el => {
        const active = isWorkActive(el.dataset.work);
        el.classList.toggle('work-hidden', !active);
        el.querySelectorAll('select, input').forEach(f => { f.disabled = !active; });
        if (!active) {
            el.querySelectorAll('.form-error').forEach(err => err.remove());
            el.querySelectorAll('select, input').forEach(f => {
                f.style.borderColor = '';
                f.style.boxShadow = '';
            });
        }
    });

    // عناوين الأقسام: تختفي لو كل أعمالها مش مطلوبة
    document.querySelectorAll('[data-work-any]').forEach(title => {
        const anyActive = title.dataset.workAny.split(' ').some(isWorkActive);
        title.classList.toggle('work-hidden', !anyActive);
    });

    applyTileKind();

    // نخفي رسالة الخطأ لما يختار عمل (ماتظهرش قبل ما يحاول يكمل)
    if (scopeEl.value !== 'جزئي' || document.querySelector('.work-checkbox:checked')) {
        validateWorksSelection();
    }
}

// ==================== نوع البلاط (بورسلين / سيراميك: واحد أو الاتنين) ====================
function getTileKinds() {
    return Array.from(document.querySelectorAll('.tile-kind-checkbox:checked')).map(cb => cb.value);
}

function validateTileKind() {
    const errEl = document.getElementById('tile-kind-error');
    if (!errEl) return true;
    if (isWorkActive('floors') && getTileKinds().length === 0) {
        errEl.textContent = 'اختر بورسلين أو سيراميك أو الاتنين';
        errEl.style.display = 'block';
        return false;
    }
    errEl.style.display = 'none';
    return true;
}

// اظهار مصدر البورسلين / السيراميك حسب الاختيار (ومقاس البلاطة لو اختار أي واحد)
function applyTileKind() {
    const kinds = getTileKinds();
    document.querySelectorAll('[data-tile]').forEach(el => {
        const t = el.dataset.tile;
        const show = t === 'any' ? kinds.length > 0 : kinds.includes(t);
        el.classList.toggle('tile-hidden', !show);
        if (!show) {
            el.querySelectorAll('.form-error').forEach(err => err.remove());
            el.querySelectorAll('select, input').forEach(f => { f.value = ''; f.disabled = true; });
        } else if (isWorkActive('floors')) {
            el.querySelectorAll('select, input').forEach(f => { f.disabled = false; });
        }
    });
}

function buildTileDetails(formData, v) {
    if (!isWorkActive('floors')) return '🧱 *نوع البلاط:* لا يوجد';
    const kinds = getTileKinds();
    if (!kinds.length) return '🧱 *نوع البلاط:* غير محدد';
    const names = { porcelain: 'بورسلين', ceramic: 'سيراميك' };
    let text = `🧱 *نوع البلاط:* ${kinds.map(k => names[k]).join(' + ')}`;
    if (kinds.includes('porcelain')) text += `\n🌍 *مصدر البورسلين:* ${v(formData.porcelainSource)}`;
    if (kinds.includes('ceramic')) text += `\n🌍 *مصدر السيراميك:* ${v(formData.ceramicSource)}`;
    text += `\n◻️ *مقاس البلاطة:* ${v(formData.tileSize)}`;
    return text;
}

function setupScope() {
    const scopeEl = document.getElementById('scope-type');
    if (!scopeEl) return;

    scopeEl.addEventListener('change', applyScope);
    document.querySelectorAll('.work-checkbox').forEach(cb => cb.addEventListener('change', applyScope));
    document.querySelectorAll('.tile-kind-checkbox').forEach(cb => cb.addEventListener('change', () => {
        applyTileKind();
        validateTileKind();
    }));

    const formEl = scopeEl.closest('form');
    if (formEl) {
        formEl.addEventListener('reset', () => setTimeout(applyScope, 0));
    }
    applyScope();
}

// ==================== Kids (عدد وسن الأولاد) ====================
function getKidsAges(type) {
    return Array.from(document.querySelectorAll(`.kid-age-input[data-type="${type}"]`))
        .map(input => input.value.trim());
}

function buildKidsDetails() {
    const gender = document.getElementById('kids-gender').value;
    if (gender === 'لا يوجد') return '';

    let text = '';
    const boysVisible = gender === 'ذكر' || gender === 'ذكور وإناث';
    const girlsVisible = gender === 'أنثى' || gender === 'ذكور وإناث';

    if (boysVisible) {
        const ages = getKidsAges('boy');
        text += `\n👦 *عدد الأولاد (ذكور):* ${document.getElementById('boys-count').value}`;
        ages.forEach((age, idx) => {
            text += `\n      ▫️ سن الولد${ages.length > 1 ? ' ' + (idx + 1) : ''}: ${age || 'غير محدد'} سنة`;
        });
    }
    if (girlsVisible) {
        const ages = getKidsAges('girl');
        text += `\n👧 *عدد البنات:* ${document.getElementById('girls-count').value}`;
        ages.forEach((age, idx) => {
            text += `\n      ▫️ سن البنت${ages.length > 1 ? ' ' + (idx + 1) : ''}: ${age || 'غير محدد'} سنة`;
        });
    }
    return text;
}

function setupKidsFields() {
    const genderEl = document.getElementById('kids-gender');
    const details = document.getElementById('kids-details');
    const boysGroup = document.getElementById('boys-group');
    const girlsGroup = document.getElementById('girls-group');
    const boysInput = document.getElementById('boys-count');
    const girlsInput = document.getElementById('girls-count');
    const agesBox = document.getElementById('kids-ages');
    if (!genderEl || !details) return;

    function setCounter(input, value) {
        input.dispatchEvent(new CustomEvent('counter:set', { detail: value }));
    }

    // بيبني حقول السن (حقل لكل طفل) ويحافظ على القيم اللي اتكتبت قبل كده
    function renderAges() {
        const gender = genderEl.value;
        const old = {};
        agesBox.querySelectorAll('.kid-age-input').forEach(inp => {
            old[inp.id] = inp.value;
        });
        agesBox.innerHTML = '';

        const build = (type, count, label) => {
            for (let n = 1; n <= count; n++) {
                const id = `kid-age-${type}-${n}`;
                const group = document.createElement('div');
                group.className = 'form-group';
                group.innerHTML = `
                    <label for="${id}">سن ${label}${count > 1 ? ' ' + n : ''} (بالسنوات)</label>
                    <input type="number" id="${id}" class="kid-age-input" data-type="${type}"
                           min="0" max="25" placeholder="مثال: 6" required>
                `;
                group.querySelector('input').value = old[id] || '';
                agesBox.appendChild(group);
            }
        };

        if (gender === 'ذكر' || gender === 'ذكور وإناث') {
            build('boy', parseInt(boysInput.value, 10) || 0, 'الولد');
        }
        if (gender === 'أنثى' || gender === 'ذكور وإناث') {
            build('girl', parseInt(girlsInput.value, 10) || 0, 'البنت');
        }
    }

    function updateUI() {
        const gender = genderEl.value;
        const hasBoys = gender === 'ذكر' || gender === 'ذكور وإناث';
        const hasGirls = gender === 'أنثى' || gender === 'ذكور وإناث';

        details.classList.toggle('show', hasBoys || hasGirls);
        boysGroup.style.display = hasBoys ? '' : 'none';
        girlsGroup.style.display = hasGirls ? '' : 'none';

        setCounter(boysInput, hasBoys ? Math.max(1, parseInt(boysInput.value, 10) || 1) : 0);
        setCounter(girlsInput, hasGirls ? Math.max(1, parseInt(girlsInput.value, 10) || 1) : 0);
        renderAges();
    }

    genderEl.addEventListener('change', updateUI);
    boysInput.addEventListener('change', renderAges);
    girlsInput.addEventListener('change', renderAges);

    // بعد إعادة تعيين الفورم نرجّع الحالة الافتراضية
    const formEl = genderEl.closest('form');
    if (formEl) {
        formEl.addEventListener('reset', function() {
            setTimeout(() => {
                setCounter(boysInput, 1);
                setCounter(girlsInput, 1);
                updateUI();
            }, 0);
        });
    }

    updateUI();
}

// ==================== Counter (+/-) Fields ====================
function setupCounters() {
    document.querySelectorAll('.counter-group').forEach(group => {
        const counterId = group.getAttribute('data-counter');
        const min = parseInt(group.getAttribute('data-min'), 10) || 0;
        const max = parseInt(group.getAttribute('data-max'), 10) || 999;

        const hiddenInput = document.getElementById(counterId);
        const valueSpan = document.getElementById(`${counterId}-value`);
        const increaseBtn = group.querySelector('[data-action="increase"]');
        const decreaseBtn = group.querySelector('[data-action="decrease"]');

        if (!hiddenInput || !valueSpan) return;

        let currentValue = parseInt(hiddenInput.value, 10) || min;

        function updateDisplay() {
            valueSpan.textContent = currentValue;
            hiddenInput.value = currentValue;
            if (increaseBtn) increaseBtn.disabled = currentValue >= max;
            if (decreaseBtn) decreaseBtn.disabled = currentValue <= min;
            hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // نظبط حالة الأزرار بدايةً (حسب القيمة الافتراضية)
        if (increaseBtn) increaseBtn.disabled = currentValue >= max;
        if (decreaseBtn) decreaseBtn.disabled = currentValue <= min;

        // بعد إعادة تعيين الفورم نرجّع العدّاد لقيمته الافتراضية
        const formEl = group.closest('form');
        if (formEl) {
            const defaultValue = parseInt(hiddenInput.defaultValue, 10) || min;
            formEl.addEventListener('reset', function() {
                currentValue = defaultValue;
                valueSpan.textContent = currentValue;
                if (increaseBtn) increaseBtn.disabled = currentValue >= max;
                if (decreaseBtn) decreaseBtn.disabled = currentValue <= min;
            });
        }

        // تغيير قيمة العدّاد من الكود (مثلاً عند تغيير نوع الأولاد)
        hiddenInput.addEventListener('counter:set', function(e) {
            currentValue = e.detail;
            updateDisplay();
        });

        if (increaseBtn) {
            increaseBtn.addEventListener('click', function() {
                if (currentValue >= max) return;
                currentValue++;
                updateDisplay();
            });
        }

        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', function() {
                if (currentValue <= min) return;
                currentValue--;
                updateDisplay();
            });
        }
    });
}

// ==================== Category Button Click Handler ====================
document.addEventListener('DOMContentLoaded', function() {
    displayCategoryImages('reception');

    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            displayCategoryImages(category);
        });
    });

    setupFieldValidation();
    setupTabsNavigation();
    setupCounters();
    setupKidsFields();
    renderMaterialsNotes();
    setupScope();
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// ==================== Smooth Scroll Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Social Media Buttons ==================== 
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.wrapper .whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            showWhatsAppOptions();
        });
    }

    const tiktokBtn = document.querySelector('.wrapper .tiktok');
    if (tiktokBtn) {
        tiktokBtn.addEventListener('click', function() {
            window.open('https://www.tiktok.com/@yourusername', '_blank');
        });
    }

    const instagramBtn = document.querySelector('.wrapper .instagram');
    if (instagramBtn) {
        instagramBtn.addEventListener('click', function() {
            window.open('https://www.instagram.com/yourusername', '_blank');
        });
    }
});

// ==================== WhatsApp Numbers Selection ====================
function showWhatsAppOptions() {
    const modal = document.createElement('div');
    modal.className = 'whatsapp-modal';
    modal.innerHTML = `
        <div class="whatsapp-modal-content">
            <div class="modal-header">
                <h3>اختر رقم التواصل</h3>
                <span class="close-whatsapp-modal">&times;</span>
            </div>
            <div class="whatsapp-options">
                <button class="whatsapp-option" onclick="openWhatsApp('201125933005')">
                    <span class="whatsapp-icon">📱</span>
                    <div class="option-info">
                        <p class="option-title">المايسترو للتصميم</p>
                        <p class="option-number">201125933005</p>
                    </div>
                </button>
                <button class="whatsapp-option" onclick="openWhatsApp('201000000000')">
                    <span class="whatsapp-icon">📱</span>
                    <div class="option-info">
                        <p class="option-title">فريق المبيعات</p>
                        <p class="option-number">201000000000</p>
                    </div>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.close-whatsapp-modal').addEventListener('click', function() {
        modal.remove();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function openWhatsApp(phoneNumber) {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, '_blank');
    document.querySelector('.whatsapp-modal').remove();
}

// ==================== SCROLL TO SURVEY BUTTON ==================== 
window.addEventListener('scroll', function() {
    const scrollToSurveyBtn = document.getElementById('scrollToSurveyBtn');
    
    if (!scrollToSurveyBtn) return;
    
    if (window.scrollY > 300) {
        scrollToSurveyBtn.classList.add('show');
    } else {
        scrollToSurveyBtn.classList.remove('show');
    }
});

// Click handler for scroll to survey button
const scrollToSurveyBtn = document.getElementById('scrollToSurveyBtn');
if (scrollToSurveyBtn) {
    scrollToSurveyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const surveySection = document.getElementById('survey');
        if (surveySection) {
            surveySection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}