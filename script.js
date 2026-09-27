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
        ,'images/reception31.jpg','images/reception32.jpg','images/reception33.jpg'
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
        , 'master25.jpg', 'master27.jpg', 'master26.jpg'
    ],
    'boys-room': [
        'images/boy1.jpg', 'images/boy2.jpg', 'images/boy3.jpg', 'images/boy4.jpg',
        'images/boy5.jpg', 'images/boy6.jpg', 'images/boy7.jpg', 'images/boy8.jpg',
        'images/boy9.jpg', 'images/boy10.jpg', 'images/boy11.jpg', 'images/boy12.jpg', 'images/boy13.jpg'
        , 'boy14.jpg', 'boy15.jpg'
    ],
    'girls-room': [
        'images/girl1.jpg', 'images/girl2.jpg', 'images/girl3.jpg', 'images/girl4.jpg',
        'images/girl5.jpg', 'images/girl6.jpg', 'images/girl7.jpg'
        , 'images/girl8.jpg', 'images/girl9.jpg', 'images/girl10.jpg', 'girl11.jpg'
        , 'girl12.jpg'
    ],
    'small-bathroom': [
        'images/small1.jpg', 'images/small2.jpg', 'images/small3.jpg', 'images/small4.jpg',
        'images/small5.jpg', 'images/small6.jpg', 'images/small7.jpg', 'images/small8.jpg',
        'images/small9.jpg','images/small10.jpg','images/small11.jpg','small12.jpg'
        ,'small13.jpg'
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
        'big17.jpg'
    ],
    'kitchen': [
        'images/kichin1.jpg', 'images/kichin2.jpg', 'images/kichin3.jpg', 'images/kichin4.jpg',
        'images/kichin5.jpg', 'images/kichin6.jpg', 'images/kichin7.jpg', 'images/kichin8.jpg',
        'images/kichin9.jpg', 'images/kichin10.jpg', 'images/kichin11.jpg', 'images/kichin12.jpg',
        'images/kichin13.jpg', 'images/kichin14.jpg', 'images/kichin15.jpg', 'images/kichin16.jpg',
        'images/kichin17.jpg','images/kitchin18.jpg','images/kichin19.jpg','images/kitchin20.jpg'
        ,'kitchin21.jpg','kitchin22.jpg'
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
};

// ==================== Tabs field mapping ====================
// اي الحقول اللي لازم تتأكد منها قبل ما ننتقل من تاب لتاني
const tabFieldIds = {
    'tab-client': ['name', 'phone', 'how', 'location', 'area', 'unit-area', 'apartment', 'paint-type'],
    'tab-inputs': ['floor', 'designType', 'floor-type', 'designs-available', 'electricity', 'plumbing', 'customer-location'],
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
        if (!field) return;

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
        kidsAge: document.getElementById('kids-age').value,
        kidsGender: document.getElementById('kids-gender').value,
    };

    let hasErrors = false;
    const fieldIds = ['name', 'phone', 'how', 'location', 'area', 'floor', 'apartment', 'designType', 'floor-type', 'designs-available', 'electricity', 'plumbing', 'customer-location', 'unit-area', 'paint-type'];
    
    fieldIds.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field) return;
        
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

    if (hasErrors) {
        showToast('يرجى تصحيح الأخطاء المشار إليها', 'error');
        // لو فيه خطأ في تاب "بيانات العميل" نرجع له، غير كده نرجع لتاب "المدخلات"
        const clientHasError = tabFieldIds['tab-client'].some(id => {
            const field = document.getElementById(id);
            return field && formValidation[id] && formValidation[id](field.value);
        });
        switchToTab(clientHasError ? 'tab-client' : 'tab-inputs');
        return;
    }

   const message = `*طلب تسعير / تشطيب جديد* 🏗️✨

👤 *الاسم:* ${formData.clientName}
📱 *رقم الهاتف:* ${formData.phoneNumber}
📢 *عرفتنا من:* ${formData.how}
🏢 *المكان:* ${formData.locationType}
🗺️ *المنطقة:* ${formData.area}
📐 *المساحة:* ${formData.unitArea} متر مربع
🔢 *الدور:* ${formData.floor}
🏠 *حالة الشقة:* ${formData.apartmentState}
🎨 *نوع التصميم:* ${formData.designType}
⬜ *الأرضية:* ${formData.flooring}
🖌️ *نوع الأصباغ:* ${formData.paintType}
📋 *التصميمات المتاحة:* ${formData.designsAvailable}
⚡ *الكهرباء:* ${formData.electricity}
💧 *السباكة:* ${formData.plumbing}
🌍 *مكان الإقامة:* ${formData.clientLocation}
🧒 *سن الأولاد:* ${formData.kidsAge}
👦👧 *نوع الأولاد:* ${formData.kidsGender}`;

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

