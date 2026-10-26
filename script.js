/**
 * ==========================================================================
 * Student Hub Jordan - منصة الخدمات الطلابية المتكاملة
 * ملف جافاسكريبت الرئيسي (script.js)
 * كود منظم، معياري، وسهل القراءة لمبتدئي ومحترفي جافاسكريبت
 * ==========================================================================
 */

// التأكد من تحميل شجرة الـ DOM بالكامل قبل بدء التنفيذ
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

/* ==========================================================================
   1. البيانات التجريبية الأولية (Initial Mock Datasets)
   ========================================================================== */
const INITIAL_DATA = {
  // الكتب الجامعية التجريبية
  books: [
    {
      id: 'book-1',
      title: 'حساب التفاضل والتكامل المتقدم (Calculus)',
      courseName: 'تفاضل وتكامل 2 (MATH 102)',
      major: 'كلية الهندسة والذكاء الاصطناعي',
      university: 'جامعة البلقاء التطبيقية - المركز (السلط)',
      condition: 'ممتاز',
      price: 12,
      sellerName: 'أحمد الزعبي',
      sellerPhone: '0791234567',
      location: 'السلط - مجمع الكليات الهندسية',
      description: 'كتاب أصلي بحالة ممتازة وخالٍ من الخرابيش، يشمل حلول تمارين السنوات السابقة ودفتر تلخيص معتمد هدية.',
      coverTheme: 'theme-eng',
      createdAt: '2026-10-20',
      isUserBook: false
    },
    {
      id: 'book-2',
      title: 'هياكل البيانات والخوارزميات (Data Structures)',
      courseName: 'هياكل بيانات (CS 211)',
      major: 'تكنولوجيا المعلومات وهندسة البرمجيات',
      university: 'جامعة البلقاء التطبيقية - المركز (السلط)',
      condition: 'جيد جداً',
      price: 10,
      sellerName: 'سارة الخصاونة',
      sellerPhone: '0788765432',
      location: 'كلية الأمير عبد الله بن غازي للـ IT',
      description: 'نسخة مترجمة ومزودة بشروحات C++ وJava مع شروحات لأهم خوارزميات الفرز والبحث.',
      coverTheme: 'theme-cs',
      createdAt: '2026-10-22',
      isUserBook: false
    },
    {
      id: 'book-3',
      title: 'مقدمة في علم التشريح وعلم وظائف الأعضاء',
      courseName: 'تشريح وفيزيولوجيا 1 (MED 101)',
      major: 'العلوم الطبية التطبيقية والتمريض',
      university: 'جامعة البلقاء التطبيقية - كلية الحصن',
      condition: 'جيد',
      price: 15,
      sellerName: 'حمزة النجار',
      sellerPhone: '0775551234',
      location: 'محيط كلية الحصن الجامعية - إربد',
      description: 'أطلس ملون وممتاز لطلاب التمريض والمختبرات الطبية، يحتوي ملاحظات مهمة لامتحانات الشامل.',
      coverTheme: 'theme-med',
      createdAt: '2026-10-21',
      isUserBook: false
    },
    {
      id: 'book-4',
      title: 'مبادئ إدارة الأعمال والتسويق الحديث',
      courseName: 'إدارة أعمال 101',
      major: 'الأعمال والعلوم المالية والمصرفية',
      university: 'جامعة البلقاء التطبيقية - المركز (السلط)',
      condition: 'مجاني للإعارة',
      price: 0,
      sellerName: 'لجين العواملة',
      sellerPhone: '0799887766',
      location: 'بوابة البلقاء التطبيقية الرئيسية',
      description: 'مبادرة إعارة مجانية للطلبة المستجدين لتمكينهم من دراسة المادة بدون تكاليف، بشرط إعادته نهاية الفصل.',
      coverTheme: 'theme-biz',
      createdAt: '2026-10-24',
      isUserBook: false
    },
    {
      id: 'book-5',
      title: 'التصميم الرقمي والأنظمة المنطقية (Digital Logic)',
      courseName: 'منطق رقمي (CPE 230)',
      major: 'هندسة الحاسوب والكهرباء',
      university: 'جامعة البلقاء - كلية الهندسة التكنولوجية (البوليتكنك)',
      condition: 'ممتاز',
      price: 8,
      sellerName: 'عمر القضاة',
      sellerPhone: '0790112233',
      location: 'ماركا الشمالية - البوليتكنك',
      description: 'كتاب شامل يشمل ملخصات تبسيط الدوائر المنطقية ومخططات Karnaugh Map واسئلة امتحانات سابقة.',
      coverTheme: 'theme-eng',
      createdAt: '2026-10-25',
      isUserBook: false
    },
    {
      id: 'book-6',
      title: 'مبادئ الكيمياء العامة والفيزيائية',
      courseName: 'كيمياء عامة 1 (CHEM 101)',
      major: 'العلوم الأساسية والزراعة التكنولوجية',
      university: 'جامعة البلقاء التطبيقية - المركز (السلط)',
      condition: 'جيد جداً',
      price: 9,
      sellerName: 'رند الحديدي',
      sellerPhone: '0781239988',
      location: 'كلية الزراعة التكنولوجية - السلط',
      description: 'طبعة حديثة باللغة الإنجليزية مع شروحات عربية مبسطة وجداول التفاعلات والحلول.',
      coverTheme: 'theme-science',
      createdAt: '2026-10-25',
      isUserBook: false
    }
  ],

  // فرص التدريب الميداني للطلبة
  internships: [
    {
      id: 'intern-1',
      company: 'مجموعة زين الأردن (ZINC)',
      role: 'متدرب تطوير برمجيات وحلول الويب',
      category: 'تكنولوجيا المعلومات والبرمجيات',
      location: 'عمان - مجمع الملك حسين للأعمال',
      duration: '3 أشهر (تدريب صيفي / فصلي)',
      stipend: '150 د.أ شهرياً + شهادة تدريب معتمدة',
      deadline: '2026-11-15',
      description: 'فرصة متميزة للالتحاق بفرق العمل الرقمية لتطوير خدمات الموبايل والويب باستخدام أحدث التقنيات السحابية.',
      skills: ['JavaScript', 'React', 'REST APIs', 'Git'],
      requirements: 'طالب في السنة الثالثة أو الرابعة في تخصصات الحاسوب أو هندسة البرمجيات بمعدل جيد فما فوق.',
      workType: 'دوام كامل في الموقع'
    },
    {
      id: 'intern-2',
      company: 'دار العمران للاستشارات الهندسية',
      role: 'متدرب هندسة مدنية وتخطيط مشاريع',
      category: 'الهندسة والتصاميم',
      location: 'السلط / عمان',
      duration: '4 أشهر (معتمد من نقابة المهندسين)',
      stipend: 'مكافأة شهرية مجزية وبدل مواصلات',
      deadline: '2026-11-20',
      description: 'تدريب ميداني وإشراف على مشاريع البنية التحتية والإنشاءات والتحليل الإنشائي باستخدام البرمجيات الهندسية.',
      skills: ['AutoCAD', 'Revit', 'إدارة المشاريع', 'السلامة العامة'],
      requirements: 'تخصص هندسة مدنية أو عمارة أو إدارة تشييد في جامعة البلقاء التطبيقية أو الجامعات الرسمية.',
      workType: 'ميداني ومكتبي'
    },
    {
      id: 'intern-3',
      company: 'أكاديمية أورنج للبرمجة (Orange Jordan)',
      role: 'تدريب مكثف في الذكاء الاصطناعي وتحليل البيانات',
      category: 'تكنولوجيا المعلومات والبرمجيات',
      location: 'عن بعد / هجين (عمان)',
      duration: '6 أشهر منحة تدريبية كاملة',
      stipend: 'منحة مجانية بالكامل + دعم مشروعات التخرج',
      deadline: '2026-12-01',
      description: 'برنامج تدريبي تطبيقي يركز على تعلم الآلة وبناء النماذج الذكية بمساعدة مرشدين تقنيين وشركاء دوليين.',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'SQL'],
      requirements: 'اجتياز اختبار القبول الأساسي والشغف بالتقنيات الحديثة.',
      workType: 'تدريب هجين'
    },
    {
      id: 'intern-4',
      company: 'أدوية الحكمة (Hikma Pharmaceuticals)',
      role: 'متدرب جودة ومختبرات تصنيع دوائي',
      category: 'العلوم الطبية والصيدلانية',
      location: 'السلط (المدينة الصناعية)',
      duration: '3 أشهر',
      stipend: '120 د.أ شهرياً + وجبة ومواصلات مؤمنة',
      deadline: '2026-11-10',
      description: 'تطبيق عملي داخل أحدث المختبرات لضمان الجودة ومطابقة معايير التصنيع الدوائي الصارم.',
      skills: ['Good Lab Practices', 'التحليل المخبري', 'التوثيق الدقيق'],
      requirements: 'طلبة الصيدلة، التحاليل الطبية، الكيمياء، أو الهندسة الكيميائية.',
      workType: 'في الموقع'
    },
    {
      id: 'intern-5',
      company: 'البنك العربي (Arab Bank Fintech Lab)',
      role: 'متدرب تحليل مالي وتكنولوجيا مالية',
      category: 'الأعمال والمالية',
      location: 'عمان - الشميساني',
      duration: '2 شهرين',
      stipend: '100 د.أ شهرياً',
      deadline: '2026-11-30',
      description: 'استكشاف حلول المدفوعات الرقمية والأتمتة البنكية والخدمات المصرفية عبر الهاتف المحمول.',
      skills: ['Excel المتقدم', 'التحليل المالي', 'التفكير النقدي'],
      requirements: 'طلبة كليات الأعمال، المحاسبة، نظم المعلومات الإدارية والمالية.',
      workType: 'في الموقع'
    }
  ],

  // السكنات الطلابية التجريبية
  housing: [
    {
      id: 'house-1',
      title: 'سكن روابي السلط الجامعي الفاخر (شباب)',
      rent: 110,
      period: 'شهرياً',
      category: 'طلاب (ذكور)',
      location: 'السلط - بجانب البوابة الشمالية للبلقاء',
      distance: '3 دقائق مشياً على الأقدام من الحرم الجامعي',
      image: '/src/assets/images/housing_student_room_1793034365040.jpg',
      features: ['إنترنت فايبر سريع', 'مفروش بالكامل', 'تدفئة وتكييف', 'حارس 24 ساعة', 'شامل الماء والكهرباء'],
      description: 'غرف فردية ومزدوجة مهيأة للدراسة الهادئة، إطلالة جبلية رائعة على مدينة السلط القديمة ومرافق خدمات مكتملة.',
      contactPhone: '0795554321',
      supervisor: 'أبو طارق - مشرف السكن'
    },
    {
      id: 'house-2',
      title: 'سكن أزهار البلقاء للطالبات (طالبات)',
      rent: 125,
      period: 'شهرياً',
      category: 'طالبات (إناث)',
      location: 'السلط - شارع الستين الرئيسي',
      distance: '5 دقائق بالباص الداخلي المخصص للطالبات',
      image: '/src/assets/images/campus_balqa_hub_1793034351024.jpg',
      features: ['أمن ومشرفة مقيمة', 'كاميرات مراقبة', 'غسالات ومطبخ مجهز', 'صالة مذاكرة هادئة', 'باص خاص للجامعة'],
      description: 'بيئة آمنة ونظيفة ومثالية للطالبات مع إشراف تربوي على مدار الساعة، قريبة من المطاعم والخدمات.',
      contactPhone: '0786667890',
      supervisor: 'أم محمد - إدارة السكن'
    },
    {
      id: 'house-3',
      title: 'استوديو مستقل حديث ومفروش (فردي)',
      rent: 160,
      period: 'شهرياً',
      category: 'استوديو مستقل',
      location: 'السلط - حي السلالم الراقي',
      distance: '8 دقائق سيراً على الأقدام من كلية الأعمال والعلوم',
      image: '/src/assets/images/housing_student_room_1793034365040.jpg',
      features: ['مطبخ أمريكي خاص', 'حمام مستقل', 'طاقة شمسية', 'موقف سيارات', 'هدوء تام'],
      description: 'مناسب لطلبة الدراسات العليا أو الطلاب الراغبين بالاستقلالية التامة مع كامل الأجهزة الكهربائية.',
      contactPhone: '0772223344',
      supervisor: 'المهندس خلدون'
    },
    {
      id: 'house-4',
      title: 'شقة طلابية مشتركة واقتصادية',
      rent: 75,
      period: 'شهرياً لكل سرير',
      category: 'طلاب (ذكور)',
      location: 'السلط - بالقرب من مجمع السيرفيس القديم',
      distance: '10 دقائق بالحافلة إلى جامعة البلقاء',
      image: '/src/assets/images/campus_balqa_hub_1793034351024.jpg',
      features: ['سعر اقتصادي جداً', 'غرف مشتركة واسعة', 'قريب من محطة الحافلات والمطاعم'],
      description: 'خيار اقتصادي ممتاز للطلبة المغتربين، يتوفر سرير بغرفة ثنائية مع تدفئة وإنترنت مشترك.',
      contactPhone: '0793338877',
      supervisor: 'سامر الحياري'
    }
  ],

  // الإعلانات والأخبار الجامعية
  announcements: [
    {
      id: 'ann-1',
      title: 'بدء فترة السحب والإضافة للفصل الدراسي الأول',
      type: 'official',
      badge: 'إعلان رسمي',
      date: 'منذ يومين',
      content: 'تعلن وحدة القبول والتسجيل في جامعة البلقاء التطبيقية عن بدء فترة تعديل الجداول إلكترونياً عبر البوابة الأكاديمية.'
    },
    {
      id: 'ann-2',
      title: 'معرض الكتاب والمبادرات الطلابية في الحرم الرئيسي بالسلط',
      type: 'event',
      badge: 'فعالية جامعية',
      date: 'اليوم',
      content: 'ينظم النادي الطلابي معرضاً لتبادل الكتب ومستلزمات الدراسة أمام مبنى الرئاسة يوم الثلاثاء القادم.'
    },
    {
      id: 'ann-3',
      title: 'فتح باب التقديم لبرنامج التدريب الصيفي الوطني 2026',
      type: 'opportunity',
      badge: 'فرصة تدريب',
      date: 'منذ 4 أيام',
      content: 'تنسيق مشترك بين وزارة الاقتصاد الرقمي والجامعات الأردنية لدعم 500 فرصة تدريبية لطلبة كليات تكنولوجيا المعلومات.'
    }
  ],

  // بنك الأسئلة للاختبار الذاتي (Quiz Bank)
  quizQuestions: [
    {
      id: 'q-1',
      question: 'ما هو التعقيد الزمني (Time Complexity) لخوارزمية البحث الثنائي (Binary Search) في أسوأ الحالات؟',
      type: 'mcq',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correctIndex: 2,
      explanation: 'البحث الثنائي يقسم مصفوفة البحث إلى النصف في كل خطوة، لذلك تعقيده الزمني هو O(log n).'
    },
    {
      id: 'q-2',
      question: 'هل المفتاح الأساسي (Primary Key) في قواعد البيانات العلائقية يمكن أن يحتوي على قيم فارغة (NULL)؟',
      type: 'tf',
      options: ['صحيح (True)', 'خطأ (False)'],
      correctIndex: 1,
      explanation: 'خطأ؛ من شروط المفتاح الأساسي الإلزامية أن يكون فريداً وألا يقبل قيمة فارغة (NOT NULL).'
    },
    {
      id: 'q-3',
      question: 'في منهجية البرمجة كائنية التوجه (OOP)، ما هو المبدأ الذي يسمح للكائن باتخاذ أشكال متعددة؟',
      type: 'mcq',
      options: ['التغليف (Encapsulation)', 'تعدد الأشكال (Polymorphism)', 'الوراثة (Inheritance)', 'التجريد (Abstraction)'],
      correctIndex: 1,
      explanation: 'تعدد الأشكال (Polymorphism) يتيح استخدام نفس اسم الدالة مع تصرفات مختلفة حسب نوع الكائن.'
    },
    {
      id: 'q-4',
      question: 'بروتوكول HTTPS يقوم بتشفير البيانات المنقولة بين المتصفح والخادم باستخدام طبقة TLS/SSL.',
      type: 'tf',
      options: ['صحيح (True)', 'خطأ (False)'],
      correctIndex: 0,
      explanation: 'صحيح؛ HTTPS يوفر الحماية والسرية للبيانات المنقولة بواسطة شهادات الأمان الرقمية.'
    },
    {
      id: 'q-5',
      question: 'أي من هياكل البيانات التالية يعمل بمبدأ الوارد أولاً يخرج أولاً (FIFO)؟',
      type: 'mcq',
      options: ['المكدس (Stack)', 'الطابور (Queue)', 'الشجرة الثنائية (Binary Tree)', 'الجدول المجزأ (Hash Table)'],
      correctIndex: 1,
      explanation: 'الطابور (Queue) يعمل وفق نمط FIFO (First In, First Out) مثل طوابير الانتظار الواقعية.'
    }
  ]
};

/* ==========================================================================
   2. مدير التخزين المحلي (Storage Manager)
   يدير حفظ البيانات واستعادتها بأمان دون الحاجة لأي Backend
   ========================================================================== */
const StorageManager = {
  KEYS: {
    BOOKS: 'student_hub_books_v1',
    FAVORITES: 'student_hub_favorites_v1',
    APPLICATIONS: 'student_hub_applications_v1',
    ACTIVE_UNI: 'student_hub_active_university_v1'
  },

  // استرجاع البيانات مع بذر البيانات الأولية تلقائياً إذا كانت فارغة
  getBooks() {
    try {
      const data = localStorage.getItem(this.KEYS.BOOKS);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('LocalStorage error reading books, falling back to initial data.', e);
    }
    this.saveBooks(INITIAL_DATA.books);
    return INITIAL_DATA.books;
  },

  saveBooks(books) {
    try {
      localStorage.setItem(this.KEYS.BOOKS, JSON.stringify(books));
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }
  },

  getFavorites() {
    try {
      const data = localStorage.getItem(this.KEYS.FAVORITES);
      return data ? JSON.parse(data) : { books: [], internships: [], housing: [] };
    } catch (e) {
      return { books: [], internships: [], housing: [] };
    }
  },

  saveFavorites(favs) {
    try {
      localStorage.setItem(this.KEYS.FAVORITES, JSON.stringify(favs));
    } catch (e) {
      console.error('LocalStorage error saving favorites:', e);
    }
  },

  getApplications() {
    try {
      const data = localStorage.getItem(this.KEYS.APPLICATIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveApplication(appItem) {
    const apps = this.getApplications();
    apps.unshift(appItem);
    try {
      localStorage.setItem(this.KEYS.APPLICATIONS, JSON.stringify(apps));
    } catch (e) {
      console.error('LocalStorage error saving application:', e);
    }
  },

  // إعادة ضبط البيانات الافتراضية
  resetAll() {
    try {
      localStorage.removeItem(this.KEYS.BOOKS);
      localStorage.removeItem(this.KEYS.FAVORITES);
      localStorage.removeItem(this.KEYS.APPLICATIONS);
      this.saveBooks(INITIAL_DATA.books);
    } catch (e) {
      console.error('Reset error:', e);
    }
  }
};

/* ==========================================================================
   3. حالة التطبيق المركزية (App State)
   ========================================================================== */
const AppState = {
  currentView: 'dashboard',
  selectedUniversity: 'جامعة البلقاء التطبيقية - المركز (السلط)',
  books: [],
  favorites: { books: [], internships: [], housing: [] },
  applications: [],
  filters: {
    books: { search: '', university: 'all', condition: 'all', sort: 'newest' },
    internships: { search: '', category: 'all', location: 'all' },
    housing: { search: '', location: 'all', priceRange: 'all', type: 'all' }
  },
  uploadedPdf: null,
  activeQuizIndex: 0,
  quizAnswers: {},
  quizScore: 0,
  isQuizSubmitted: false,
  pendingDeleteId: null,
  editingBookId: null
};

/* ==========================================================================
   4. المحرك الرئيسي للتطبيق (Main App Controller)
   ========================================================================== */
const App = {
  init() {
    // تحميل البيانات من التخزين المحلي
    AppState.books = StorageManager.getBooks();
    AppState.favorites = StorageManager.getFavorites();
    AppState.applications = StorageManager.getApplications();

    // ربط مستمعي الأحداث
    this.bindEvents();

    // إعداد واجهة لوحة التحكم كبداية
    this.navigate('dashboard');
    this.updateStats();
    this.renderAnnouncements();
    this.renderBooks();
    this.renderInternships();
    this.renderHousing();
    this.renderFavoritesAndApplications();
  },

  /* ربط كافة عناصر الواجهة والأزرار */
  bindEvents() {
    // أزرار التنقل الرئيسية
    document.querySelectorAll('.nav-link, .module-card, [data-nav-target]').forEach(elem => {
      elem.addEventListener('click', (e) => {
        const target = elem.getAttribute('data-nav-target') || elem.getAttribute('href')?.replace('#', '');
        if (target) {
          e.preventDefault();
          this.navigate(target);
          // إغلاق القائمة المتنقلة إن كانت مفتوحة
          document.getElementById('mobile-drawer')?.classList.remove('open');
        }
      });
    });

    // زر القائمة المتنقلة (الهامبرغر)
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });
    }

    // محدد الجامعة في الهيدر
    const uniSelect = document.getElementById('global-uni-select');
    if (uniSelect) {
      uniSelect.addEventListener('change', (e) => {
        AppState.selectedUniversity = e.target.value;
        showToast(`تم تبديل الحرم الجامعي النشط إلى: ${e.target.value}`, 'info');
        this.updateStats();
      });
    }

    // فلاتر وبحث قسم الكتب
    const bookSearchInput = document.getElementById('book-search-input');
    const bookUniFilter = document.getElementById('book-uni-filter');
    const bookConditionFilter = document.getElementById('book-condition-filter');
    const bookSortFilter = document.getElementById('book-sort-filter');

    if (bookSearchInput) {
      bookSearchInput.addEventListener('input', (e) => {
        AppState.filters.books.search = e.target.value.trim().toLowerCase();
        this.renderBooks();
      });
    }
    if (bookUniFilter) {
      bookUniFilter.addEventListener('change', (e) => {
        AppState.filters.books.university = e.target.value;
        this.renderBooks();
      });
    }
    if (bookConditionFilter) {
      bookConditionFilter.addEventListener('change', (e) => {
        AppState.filters.books.condition = e.target.value;
        this.renderBooks();
      });
    }
    if (bookSortFilter) {
      bookSortFilter.addEventListener('change', (e) => {
        AppState.filters.books.sort = e.target.value;
        this.renderBooks();
      });
    }

    // زر إضافة كتاب جديد
    const openAddBookBtn = document.getElementById('btn-open-add-book');
    const headerAddBookBtn = document.getElementById('btn-header-add-book');
    if (openAddBookBtn) openAddBookBtn.addEventListener('click', () => this.openBookModal(null));
    if (headerAddBookBtn) headerAddBookBtn.addEventListener('click', () => this.openBookModal(null));

    // نموذج حفظ أو تعديل الكتاب
    const bookForm = document.getElementById('book-form');
    if (bookForm) {
      bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSaveBook();
      });
    }

    // فلاتر فرص التدريب
    const internSearch = document.getElementById('intern-search-input');
    const internCategory = document.getElementById('intern-category-filter');
    const internLocation = document.getElementById('intern-location-filter');

    if (internSearch) {
      internSearch.addEventListener('input', (e) => {
        AppState.filters.internships.search = e.target.value.trim().toLowerCase();
        this.renderInternships();
      });
    }
    if (internCategory) {
      internCategory.addEventListener('change', (e) => {
        AppState.filters.internships.category = e.target.value;
        this.renderInternships();
      });
    }
    if (internLocation) {
      internLocation.addEventListener('change', (e) => {
        AppState.filters.internships.location = e.target.value;
        this.renderInternships();
      });
    }

    // نموذج التقديم على التدريب
    const applyForm = document.getElementById('internship-apply-form');
    if (applyForm) {
      applyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleInternshipApplication();
      });
    }

    // فلاتر السكن الطلابي
    const housingLocation = document.getElementById('housing-location-filter');
    const housingPrice = document.getElementById('housing-price-filter');
    const housingType = document.getElementById('housing-type-filter');

    if (housingLocation) {
      housingLocation.addEventListener('change', (e) => {
        AppState.filters.housing.location = e.target.value;
        this.renderHousing();
      });
    }
    if (housingPrice) {
      housingPrice.addEventListener('change', (e) => {
        AppState.filters.housing.priceRange = e.target.value;
        this.renderHousing();
      });
    }
    if (housingType) {
      housingType.addEventListener('change', (e) => {
        AppState.filters.housing.type = e.target.value;
        this.renderHousing();
      });
    }

    // مساعد الدراسة بالذكاء الاصطناعي - المحادثة
    const chatInput = document.getElementById('ai-chat-input');
    const chatSendBtn = document.getElementById('ai-chat-send-btn');
    if (chatSendBtn && chatInput) {
      chatSendBtn.addEventListener('click', () => this.handleSendMessage());
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleSendMessage();
      });
    }

    // المحفزات الجاهزة للمحادثة (Quick Prompts)
    document.querySelectorAll('.quick-prompt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-prompt');
        if (text && chatInput) {
          chatInput.value = text;
          this.handleSendMessage();
        }
      });
    });

    // مساعد الدراسة - رفع ملف الـ PDF
    const pdfFileInput = document.getElementById('pdf-file-input');
    const pdfDropzone = document.getElementById('pdf-dropzone');
    const removePdfBtn = document.getElementById('btn-remove-pdf');

    if (pdfDropzone && pdfFileInput) {
      pdfDropzone.addEventListener('click', () => pdfFileInput.click());

      pdfDropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        pdfDropzone.classList.add('dragover');
      });
      pdfDropzone.addEventListener('dragleave', () => {
        pdfDropzone.classList.remove('dragover');
      });
      pdfDropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        pdfDropzone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.handlePdfFileSelected(e.dataTransfer.files[0]);
        }
      });

      pdfFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handlePdfFileSelected(e.target.files[0]);
        }
      });
    }

    if (removePdfBtn) {
      removePdfBtn.addEventListener('click', () => {
        AppState.uploadedPdf = null;
        if (pdfFileInput) pdfFileInput.value = '';
        document.getElementById('file-info-bar')?.classList.remove('active');
        document.getElementById('summary-result-box')?.classList.remove('active');
        document.getElementById('quiz-container')?.classList.remove('active');
        showToast('تمت إزالة الملف المحدد', 'info');
      });
    }

    // أزرار توليد الملخص وتوليد الاختبار
    const btnGenSummary = document.getElementById('btn-generate-summary');
    const btnGenQuiz = document.getElementById('btn-generate-quiz');

    if (btnGenSummary) {
      btnGenSummary.addEventListener('click', () => this.handleGenerateSummary());
    }
    if (btnGenQuiz) {
      btnGenQuiz.addEventListener('click', () => this.handleGenerateQuiz());
    }

    // تبويبات صفحة المفضلة وطلباتي
    document.querySelectorAll('.saved-tab-btn').forEach(tabBtn => {
      tabBtn.addEventListener('click', () => {
        document.querySelectorAll('.saved-tab-btn').forEach(b => b.classList.remove('active'));
        tabBtn.classList.add('active');
        const targetTab = tabBtn.getAttribute('data-tab');
        document.querySelectorAll('.saved-tab-content').forEach(c => c.style.display = 'none');
        const targetContent = document.getElementById(`tab-content-${targetTab}`);
        if (targetContent) targetContent.style.display = 'block';
      });
    });

    // إغلاق النوافذ المنبثقة بالنقر على الخلفية أو أزرار الإغلاق
    document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(elem => {
      elem.addEventListener('click', (e) => {
        if (e.target === elem || elem.classList.contains('modal-close-btn')) {
          this.closeAllModals();
        }
      });
    });

    // إغلاق النوافذ بواسطة مفتاح Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    // نافذة تأكيد الحذف
    const confirmDeleteBtn = document.getElementById('btn-confirm-delete');
    if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener('click', () => {
        if (AppState.pendingDeleteId) {
          this.deleteBook(AppState.pendingDeleteId);
          this.closeAllModals();
        }
      });
    }

    // زر استعادة البيانات التجريبية الافتراضية
    const resetDataBtn = document.getElementById('btn-reset-demo-data');
    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        if (confirm('هل ترغب بإعادة ضبط كافة البيانات والكتب التجريبية إلى حالتها الأصلية؟')) {
          StorageManager.resetAll();
          AppState.books = StorageManager.getBooks();
          AppState.favorites = StorageManager.getFavorites();
          AppState.applications = StorageManager.getApplications();
          this.renderBooks();
          this.renderInternships();
          this.renderHousing();
          this.renderFavoritesAndApplications();
          this.updateStats();
          showToast('تمت إعادة ضبط البيانات بنجاح', 'success');
        }
      });
    }
  },

  /* التنقل بين الأقسام الرئيسية */
  navigate(viewId) {
    AppState.currentView = viewId;

    // تحديث أزرار التنقل النشطة
    document.querySelectorAll('.nav-link').forEach(link => {
      const target = link.getAttribute('data-nav-target') || link.getAttribute('href')?.replace('#', '');
      if (target === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // إظهار القسم المطلوب وإخفاء الباقي
    document.querySelectorAll('.view-section').forEach(sec => {
      if (sec.id === `view-${viewId}`) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });

    // التمرير لأعلى الصفحة بنعومة
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // إعادة رسم القسم المختار إذا لزم
    if (viewId === 'saved') {
      this.renderFavoritesAndApplications();
    }
  },

  /* تحديث بطاقات الإحصائيات في الصفحة الرئيسية */
  updateStats() {
    const statBooks = document.getElementById('stat-books-count');
    const statIntern = document.getElementById('stat-intern-count');
    const statHousing = document.getElementById('stat-housing-count');
    const statApps = document.getElementById('stat-apps-count');

    if (statBooks) statBooks.textContent = AppState.books.length + '+';
    if (statIntern) statIntern.textContent = INITIAL_DATA.internships.length;
    if (statHousing) statHousing.textContent = INITIAL_DATA.housing.length;
    if (statApps) statApps.textContent = AppState.applications.length;
  },

  /* ==========================================================================
     إدارة قسم الكتب الجامعية (Books Module)
     ========================================================================== */
  renderBooks() {
    const container = document.getElementById('books-grid-container');
    const emptyState = document.getElementById('books-empty-state');
    if (!container) return;

    const { search, university, condition, sort } = AppState.filters.books;

    // تطبيق عمليات الفلترة والبحث
    let filtered = AppState.books.filter(book => {
      const matchSearch = !search ||
        book.title.toLowerCase().includes(search) ||
        book.courseName.toLowerCase().includes(search) ||
        book.major.toLowerCase().includes(search) ||
        book.description.toLowerCase().includes(search);

      const matchUni = (university === 'all') || (book.university.includes(university));
      const matchCondition = (condition === 'all') || (book.condition === condition);

      return matchSearch && matchUni && matchCondition;
    });

    // تطبيق الترتيب
    if (sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else {
      // الأحدث
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    container.innerHTML = filtered.map(book => {
      const isFav = AppState.favorites.books.includes(book.id);
      const isFree = book.price === 0 || book.condition === 'مجاني للإعارة';
      const priceText = isFree ? 'مجاناً للإعارة' : `${book.price} د.أ`;
      const priceClass = isFree ? 'free' : '';

      return `
        <article class="book-card" data-book-id="${book.id}">
          <div class="book-card-cover ${book.coverTheme || 'theme-eng'}">
            <div class="book-cover-top">
              <span class="book-cover-code">${escapeHtml(book.courseName.split(' ')[0] || 'كتاب جامعي')}</span>
              <span class="book-cover-price ${priceClass} tabular-nums">${priceText}</span>
            </div>
            <div class="book-cover-major">${escapeHtml(book.major)}</div>
          </div>
          <div class="book-card-body">
            <div>
              <h3 class="book-title">${escapeHtml(book.title)}</h3>
              <p class="book-course-name">${escapeHtml(book.courseName)}</p>
              <div class="book-meta-row">
                <span class="book-condition-pill">${escapeHtml(book.condition)}</span>
                <span>·</span>
                <span>${escapeHtml(book.university)}</span>
              </div>
              <p class="book-desc-snippet">${escapeHtml(book.description)}</p>
            </div>
            <div>
              <div class="book-seller-info">
                <span>المعلن: <strong>${escapeHtml(book.sellerName)}</strong></span>
                <span>${escapeHtml(book.location)}</span>
              </div>
              <div class="book-card-actions">
                <button class="btn-primary btn-details" onclick="App.openBookDetails('${book.id}')">
                  عرض التفاصيل
                </button>
                <button class="btn-secondary" title="${isFav ? 'إزالة من المفضلة' : 'حفظ للمفضلة'}" onclick="App.toggleFavorite('books', '${book.id}')">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#e11d48' : 'none'}" stroke="${isFav ? '#e11d48' : 'currentColor'}" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                ${book.isUserBook ? `
                  <button class="btn-secondary" title="تعديل الإعلان" onclick="App.openBookModal('${book.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </button>
                  <button class="btn-outline-danger" title="حذف الإعلان" onclick="App.confirmDeleteBook('${book.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  /* فتح نافذة إضافة / تعديل كتاب */
  openBookModal(bookId = null) {
    AppState.editingBookId = bookId;
    const modal = document.getElementById('book-form-modal');
    const titleElem = document.getElementById('book-modal-title');
    const form = document.getElementById('book-form');

    if (!modal || !form) return;

    if (bookId) {
      const book = AppState.books.find(b => b.id === bookId);
      if (book) {
        titleElem.textContent = 'تعديل إعلان الكتاب';
        document.getElementById('input-book-title').value = book.title;
        document.getElementById('input-book-course').value = book.courseName;
        document.getElementById('input-book-major').value = book.major;
        document.getElementById('input-book-university').value = book.university;
        document.getElementById('input-book-condition').value = book.condition;
        document.getElementById('input-book-price').value = book.price;
        document.getElementById('input-book-seller').value = book.sellerName;
        document.getElementById('input-book-phone').value = book.sellerPhone;
        document.getElementById('input-book-location').value = book.location;
        document.getElementById('input-book-desc').value = book.description;
        document.getElementById('input-book-theme').value = book.coverTheme || 'theme-eng';
      }
    } else {
      titleElem.textContent = 'إضافة كتاب جامعي جديد للتبادل أو البيع';
      form.reset();
      document.getElementById('input-book-university').value = AppState.selectedUniversity;
    }

    modal.classList.add('open');
  },

  /* معالجة حفظ أو تعديل الكتاب في التخزين المحلي */
  handleSaveBook() {
    const title = document.getElementById('input-book-title').value.trim();
    const courseName = document.getElementById('input-book-course').value.trim();
    const major = document.getElementById('input-book-major').value.trim();
    const university = document.getElementById('input-book-university').value;
    const condition = document.getElementById('input-book-condition').value;
    const price = parseFloat(document.getElementById('input-book-price').value) || 0;
    const sellerName = document.getElementById('input-book-seller').value.trim();
    const sellerPhone = document.getElementById('input-book-phone').value.trim();
    const location = document.getElementById('input-book-location').value.trim();
    const description = document.getElementById('input-book-desc').value.trim();
    const coverTheme = document.getElementById('input-book-theme').value || 'theme-eng';

    if (!title || !courseName || !sellerName || !sellerPhone) {
      showToast('يرجى ملء الحقول الإلزامية المطلوبة (اسم الكتاب، المادة، اسم المعلن، ورقم الهاتف)', 'error');
      return;
    }

    if (AppState.editingBookId) {
      // تعديل كتاب حالي
      const index = AppState.books.findIndex(b => b.id === AppState.editingBookId);
      if (index !== -1) {
        AppState.books[index] = {
          ...AppState.books[index],
          title, courseName, major, university, condition, price,
          sellerName, sellerPhone, location, description, coverTheme
        };
        showToast('تم تعديل إعلان الكتاب بنجاح!', 'success');
      }
    } else {
      // إضافة كتاب جديد
      const newBook = {
        id: 'book-' + Date.now(),
        title, courseName, major, university, condition, price,
        sellerName, sellerPhone, location, description, coverTheme,
        createdAt: new Date().toISOString().split('T')[0],
        isUserBook: true
      };
      AppState.books.unshift(newBook);
      showToast('تم نشر إعلان كتابك بنجاح وحفظه محلياً!', 'success');
    }

    StorageManager.saveBooks(AppState.books);
    this.closeAllModals();
    this.renderBooks();
    this.updateStats();
  },

  /* طلب تأكيد حذف كتاب */
  confirmDeleteBook(bookId) {
    AppState.pendingDeleteId = bookId;
    const book = AppState.books.find(b => b.id === bookId);
    const deleteModal = document.getElementById('delete-confirm-modal');
    const msg = document.getElementById('delete-modal-msg');
    if (deleteModal && msg && book) {
      msg.textContent = `هل أنت متأكد من حذف إعلان الكتاب "${book.title}"؟ لا يمكن التراجع عن هذا الإجراء.`;
      deleteModal.classList.add('open');
    }
  },

  /* حذف الكتاب فعلياً */
  deleteBook(bookId) {
    AppState.books = AppState.books.filter(b => b.id !== bookId);
    AppState.favorites.books = AppState.favorites.books.filter(id => id !== bookId);
    StorageManager.saveBooks(AppState.books);
    StorageManager.saveFavorites(AppState.favorites);
    this.renderBooks();
    this.renderFavoritesAndApplications();
    this.updateStats();
    showToast('تم حذف إعلان الكتاب بنجاح', 'success');
  },

  /* عرض تفاصيل الكتاب في نافذة منبثقة */
  openBookDetails(bookId) {
    const book = AppState.books.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.getElementById('book-details-modal');
    const body = document.getElementById('book-details-body');
    if (!modal || !body) return;

    const isFree = book.price === 0 || book.condition === 'مجاني للإعارة';
    const priceText = isFree ? 'مجاناً للإعارة' : `${book.price} دينار أردني`;

    body.innerHTML = `
      <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem;">
          <div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary-900);">${escapeHtml(book.title)}</h3>
            <p style="color: var(--primary-700); font-weight: 700; margin-top: 0.25rem;">${escapeHtml(book.courseName)}</p>
          </div>
          <span style="font-size: 1.25rem; font-weight: 800; background: #fff; padding: 0.35rem 0.85rem; border-radius: var(--radius-md); color: var(--primary-800); border: 1px solid var(--border-subtle);">
            ${priceText}
          </span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; margin-bottom: 1.25rem; font-size: 0.9rem;">
        <div><strong>التخصص:</strong> ${escapeHtml(book.major)}</div>
        <div><strong>الجامعة / الكلية:</strong> ${escapeHtml(book.university)}</div>
        <div><strong>حالة الكتاب:</strong> <span class="book-condition-pill">${escapeHtml(book.condition)}</span></div>
        <div><strong>مكان التسليم:</strong> ${escapeHtml(book.location)}</div>
        <div><strong>تاريخ الإعلان:</strong> ${escapeHtml(book.createdAt)}</div>
        <div><strong>اسم المعلن:</strong> ${escapeHtml(book.sellerName)}</div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-secondary);">وصف وملاحظات الكتاب:</h4>
        <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-main); background: #fff; padding: 0.85rem; border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
          ${escapeHtml(book.description || 'لا توجد ملاحظات إضافية.')}
        </p>
      </div>

      <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 0.85rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: #1e40af;">
        💡 نصيحة أمان للطلبة: يُفضل إجراء عملية المقابلة واستلام الكتاب في الأماكن العامة المأهولة داخل الحرم الجامعي (مكتبة الجامعة، مجمع القاعات، أو الكافتيريا).
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="tel:${book.sellerPhone}" class="btn-primary" style="flex: 1; text-align: center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          اتصال بالمعلن (${book.sellerPhone})
        </a>
        <a href="https://wa.me/962${book.sellerPhone.replace(/^0/, '')}" target="_blank" rel="noopener" class="btn-secondary" style="flex: 1; text-align: center; background-color: #ecfdf5; border-color: #a7f3d0; color: #065f46;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          تواصل عبر واتساب
        </a>
      </div>
    `;

    modal.classList.add('open');
  },

  /* ==========================================================================
     إدارة قسم فرص التدريب (Internships Module)
     ========================================================================== */
  renderInternships() {
    const container = document.getElementById('internships-grid-container');
    const emptyState = document.getElementById('internships-empty-state');
    if (!container) return;

    const { search, category, location } = AppState.filters.internships;

    const filtered = INITIAL_DATA.internships.filter(intern => {
      const matchSearch = !search ||
        intern.company.toLowerCase().includes(search) ||
        intern.role.toLowerCase().includes(search) ||
        intern.description.toLowerCase().includes(search);

      const matchCategory = (category === 'all') || (intern.category.includes(category));
      const matchLocation = (location === 'all') || (intern.location.includes(location));

      return matchSearch && matchCategory && matchLocation;
    });

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    container.innerHTML = filtered.map(intern => {
      const isFav = AppState.favorites.internships.includes(intern.id);
      const isApplied = AppState.applications.some(app => app.opportunityId === intern.id);

      return `
        <article class="internship-card" data-intern-id="${intern.id}">
          <div>
            <div class="internship-top">
              <div>
                <h3 class="internship-role">${escapeHtml(intern.role)}</h3>
                <p class="internship-company">${escapeHtml(intern.company)}</p>
              </div>
              <div class="company-badge-box">
                ${escapeHtml(intern.company.substring(0, 2))}
              </div>
            </div>

            <div class="internship-meta-tags">
              <span class="meta-tag-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${escapeHtml(intern.location)}
              </span>
              <span class="meta-tag-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${escapeHtml(intern.duration)}
              </span>
              <span class="meta-tag-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                آخر موعد: ${escapeHtml(intern.deadline)}
              </span>
            </div>

            <p class="internship-desc">${escapeHtml(intern.description)}</p>

            <div class="internship-skills">
              ${intern.skills.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('')}
            </div>
          </div>

          <div class="internship-footer">
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">المكافأة والبدل:</span>
              <span class="stipend-amount">${escapeHtml(intern.stipend)}</span>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button class="btn-secondary" title="${isFav ? 'إزالة من المفضلة' : 'حفظ للمفضلة'}" onclick="App.toggleFavorite('internships', '${intern.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#e11d48' : 'none'}" stroke="${isFav ? '#e11d48' : 'currentColor'}" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button class="btn-primary" onclick="App.openInternshipDetails('${intern.id}')">
                ${isApplied ? 'تم التقديم ✓' : 'تفاصيل والتقديم'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  /* تفاصيل فرصة التدريب والتقديم */
  openInternshipDetails(internId) {
    const intern = INITIAL_DATA.internships.find(i => i.id === internId);
    if (!intern) return;

    const modal = document.getElementById('internship-details-modal');
    const body = document.getElementById('internship-details-body');
    if (!modal || !body) return;

    const isApplied = AppState.applications.some(app => app.opportunityId === intern.id);

    body.innerHTML = `
      <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary-900);">${escapeHtml(intern.role)}</h3>
        <p style="color: var(--primary-700); font-weight: 700; font-size: 1.05rem;">${escapeHtml(intern.company)}</p>
        <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
          📍 ${escapeHtml(intern.location)} · ⏱ ${escapeHtml(intern.duration)} · 💼 ${escapeHtml(intern.workType)}
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--primary-800);">وصف الفرصة ومهام المتدرب:</h4>
        <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${escapeHtml(intern.description)}</p>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--primary-800);">المتطلبات والشروط:</h4>
        <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${escapeHtml(intern.requirements)}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--primary-800);">المهارات المرغوبة:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          ${intern.skills.map(s => `<span class="skill-chip">${escapeHtml(s)}</span>`).join('')}
        </div>
      </div>

      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 0.8rem; color: #166534; display: block;">المكافأة التقديرية:</span>
          <strong style="color: #15803d; font-size: 1.1rem;">${escapeHtml(intern.stipend)}</strong>
        </div>
        <div style="text-align: left;">
          <span style="font-size: 0.8rem; color: #166534; display: block;">الموعد النهائي للتقديم:</span>
          <strong style="color: #15803d;">${escapeHtml(intern.deadline)}</strong>
        </div>
      </div>

      <div>
        ${isApplied ? `
          <div style="text-align: center; padding: 1rem; background-color: #dbeafe; color: #1e40af; border-radius: var(--radius-md); font-weight: 700;">
            لقد قمت بالتقديم على هذه الفرصة مسبقاً بنجاح! يمكنك متابعة حالة طلبك في قسم "المفضلة وطلباتي".
          </div>
        ` : `
          <button class="btn-primary" style="width: 100%; padding: 0.85rem;" onclick="App.openApplyModal('${intern.id}')">
            التقديم الآن على هذه الفرصة التدريبية
          </button>
        `}
      </div>
    `;

    modal.classList.add('open');
  },

  /* فتح نافذة نموذج التقديم */
  openApplyModal(internId) {
    const intern = INITIAL_DATA.internships.find(i => i.id === internId);
    if (!intern) return;

    this.closeAllModals();
    const modal = document.getElementById('apply-form-modal');
    const headerText = document.getElementById('apply-modal-target-title');
    const targetInput = document.getElementById('apply-intern-id');

    if (modal && headerText && targetInput) {
      headerText.textContent = `${intern.role} لدى ${intern.company}`;
      targetInput.value = intern.id;
      modal.classList.add('open');
    }
  },

  /* معالجة إرسال طلب التقديم محلياً */
  handleInternshipApplication() {
    const internId = document.getElementById('apply-intern-id').value;
    const studentName = document.getElementById('apply-name').value.trim();
    const studentId = document.getElementById('apply-student-id').value.trim();
    const university = document.getElementById('apply-uni').value;
    const major = document.getElementById('apply-major').value.trim();
    const gpa = document.getElementById('apply-gpa').value.trim();
    const phone = document.getElementById('apply-phone').value.trim();
    const email = document.getElementById('apply-email').value.trim();
    const notes = document.getElementById('apply-notes').value.trim();

    if (!studentName || !studentId || !phone || !major) {
      showToast('يرجى ملء الحقول الإلزامية في نموذج التقديم', 'error');
      return;
    }

    const intern = INITIAL_DATA.internships.find(i => i.id === internId);

    const applicationItem = {
      id: 'app-' + Date.now(),
      opportunityId: internId,
      company: intern?.company || 'شركة تدريب',
      role: intern?.role || 'فرصة تدريب',
      studentName,
      studentId,
      university,
      major,
      gpa,
      phone,
      email,
      notes,
      appliedAt: new Date().toLocaleDateString('ar-JO', { year: 'numeric', month: 'short', day: 'numeric' }),
      status: 'قيد المراجعة الأولية'
    };

    StorageManager.saveApplication(applicationItem);
    AppState.applications = StorageManager.getApplications();

    this.closeAllModals();
    this.renderInternships();
    this.renderFavoritesAndApplications();
    this.updateStats();

    showToast(`تهانينا يا ${studentName}! تم تسجيل طلب تدريبك بنجاح محلياً (رقم الطلب: ${applicationItem.id})`, 'success');
  },

  /* ==========================================================================
     إدارة قسم السكن الطلابي (Housing Module)
     ========================================================================== */
  renderHousing() {
    const container = document.getElementById('housing-grid-container');
    const emptyState = document.getElementById('housing-empty-state');
    if (!container) return;

    const { location, priceRange, type } = AppState.filters.housing;

    const filtered = INITIAL_DATA.housing.filter(item => {
      const matchLocation = (location === 'all') || item.location.includes(location);
      const matchType = (type === 'all') || item.category.includes(type);

      let matchPrice = true;
      if (priceRange === 'under-100') matchPrice = item.rent < 100;
      else if (priceRange === '100-150') matchPrice = item.rent >= 100 && item.rent <= 150;
      else if (priceRange === 'above-150') matchPrice = item.rent > 150;

      return matchLocation && matchType && matchPrice;
    });

    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    container.innerHTML = filtered.map(item => {
      const isFav = AppState.favorites.housing.includes(item.id);

      return `
        <article class="housing-card" data-house-id="${item.id}">
          <div class="housing-image-frame">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
            <div class="housing-price-tag tabular-nums">${item.rent} د.أ / شهرياً</div>
            <button class="housing-fav-btn ${isFav ? 'active' : ''}" title="${isFav ? 'إزالة من المفضلة' : 'حفظ للمفضلة'}" onclick="App.toggleFavorite('housing', '${item.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? '#e11d48' : 'none'}" stroke="${isFav ? '#e11d48' : 'currentColor'}" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div class="housing-body">
            <div>
              <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary-700); margin-bottom: 0.25rem;">
                ${escapeHtml(item.category)}
              </div>
              <h3 class="housing-title">${escapeHtml(item.title)}</h3>
              <p class="housing-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${escapeHtml(item.location)}
              </p>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                🚶 ${escapeHtml(item.distance)}
              </p>

              <div class="housing-features-row">
                ${item.features.slice(0, 3).map(f => `<span class="housing-feature-badge">${escapeHtml(f)}</span>`).join('')}
                ${item.features.length > 3 ? `<span class="housing-feature-badge">+${item.features.length - 3}</span>` : ''}
              </div>
            </div>

            <div class="housing-footer">
              <span style="font-size: 0.82rem; color: var(--text-muted);">بإشراف: ${escapeHtml(item.supervisor)}</span>
              <button class="btn-primary" onclick="App.openHousingDetails('${item.id}')">
                عرض التفاصيل
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  /* تفاصيل السكن الطلابي */
  openHousingDetails(houseId) {
    const item = INITIAL_DATA.housing.find(h => h.id === houseId);
    if (!item) return;

    const modal = document.getElementById('housing-details-modal');
    const body = document.getElementById('housing-details-body');
    if (!modal || !body) return;

    body.innerHTML = `
      <div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 1.25rem; height: 220px;">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary-700);">${escapeHtml(item.category)}</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--primary-900);">${escapeHtml(item.title)}</h3>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">📍 ${escapeHtml(item.location)}</p>
        </div>
        <div style="text-align: left;">
          <span style="font-size: 1.35rem; font-weight: 900; color: var(--primary-800); display: block;" class="tabular-nums">${item.rent} د.أ</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(item.period)}</span>
        </div>
      </div>

      <div style="background: var(--bg-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.9rem;">
        <strong>القرب من الجامعة:</strong> ${escapeHtml(item.distance)}
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--primary-800);">مزايا وخدمات السكن:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${item.features.map(f => `<span class="housing-feature-badge" style="background: #e0f2fe; color: #0369a1; font-weight: 600;">✓ ${escapeHtml(f)}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.4rem; color: var(--primary-800);">الوصف الكامل:</h4>
        <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">${escapeHtml(item.description)}</p>
      </div>

      <div class="transparency-banner warning" style="margin-bottom: 1.5rem;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <div>
          <strong>تنويه استرشادي:</strong> هذا العرض مخصص لأغراض توضيح المنصة الطلابية التجريبية. لا تقم بتحويل أي عربون أو مبالغ مالية قبل المعاينة الشخصية الميدانية بحضور ولي الأمر أو مشرف الجامعة.
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem;">
        <a href="tel:${item.contactPhone}" class="btn-primary" style="flex: 1; text-align: center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          اتصال بالمشرف (${item.supervisor})
        </a>
      </div>
    `;

    modal.classList.add('open');
  },

  /* ==========================================================================
     إدارة المفضلة والطلبات (Favorites & Applications Module)
     ========================================================================== */
  toggleFavorite(category, itemId) {
    if (!AppState.favorites[category]) {
      AppState.favorites[category] = [];
    }

    const index = AppState.favorites[category].indexOf(itemId);
    if (index === -1) {
      AppState.favorites[category].push(itemId);
      showToast('تمت الإضافة إلى قائمتك المفضلة بنجاح', 'success');
    } else {
      AppState.favorites[category].splice(index, 1);
      showToast('تمت الإزالة من المفضلة', 'info');
    }

    StorageManager.saveFavorites(AppState.favorites);

    // إعادة رسم القسم المناسب
    if (category === 'books') this.renderBooks();
    else if (category === 'internships') this.renderInternships();
    else if (category === 'housing') this.renderHousing();

    if (AppState.currentView === 'saved') {
      this.renderFavoritesAndApplications();
    }
  },

  renderFavoritesAndApplications() {
    // 1. الكتب المفضلة
    const favBooksContainer = document.getElementById('fav-books-container');
    if (favBooksContainer) {
      const favBooks = AppState.books.filter(b => AppState.favorites.books.includes(b.id));
      if (favBooks.length === 0) {
        favBooksContainer.innerHTML = '<div class="empty-state-desc" style="text-align:center; padding:2rem;">لم تقم بحفظ أي كتب للمفضلة حتى الآن.</div>';
      } else {
        favBooksContainer.innerHTML = `
          <div class="books-grid">
            ${favBooks.map(book => `
              <div class="book-card">
                <div class="book-card-cover ${book.coverTheme || 'theme-eng'}" style="height: 100px;">
                  <span class="book-cover-price tabular-nums">${book.price === 0 ? 'مجاناً' : book.price + ' د.أ'}</span>
                  <span class="book-cover-major">${escapeHtml(book.major)}</span>
                </div>
                <div class="book-card-body">
                  <h4 class="book-title">${escapeHtml(book.title)}</h4>
                  <p class="book-course-name">${escapeHtml(book.courseName)}</p>
                  <div class="book-card-actions" style="margin-top: 1rem;">
                    <button class="btn-primary" style="flex:1;" onclick="App.openBookDetails('${book.id}')">التفاصيل</button>
                    <button class="btn-outline-danger" onclick="App.toggleFavorite('books', '${book.id}')">إزالة</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    // 2. فرص التدريب المفضلة
    const favInternContainer = document.getElementById('fav-internships-container');
    if (favInternContainer) {
      const favInterns = INITIAL_DATA.internships.filter(i => AppState.favorites.internships.includes(i.id));
      if (favInterns.length === 0) {
        favInternContainer.innerHTML = '<div class="empty-state-desc" style="text-align:center; padding:2rem;">لا توجد فرص تدريب في المفضلة.</div>';
      } else {
        favInternContainer.innerHTML = `
          <div class="internships-grid">
            ${favInterns.map(intern => `
              <div class="internship-card">
                <h4 class="internship-role">${escapeHtml(intern.role)}</h4>
                <p class="internship-company">${escapeHtml(intern.company)}</p>
                <p style="font-size:0.85rem; color:var(--text-muted); margin:0.5rem 0;">${escapeHtml(intern.location)}</p>
                <div style="display:flex; gap:0.5rem; margin-top:1rem;">
                  <button class="btn-primary" style="flex:1;" onclick="App.openInternshipDetails('${intern.id}')">التفاصيل</button>
                  <button class="btn-outline-danger" onclick="App.toggleFavorite('internships', '${intern.id}')">إزالة</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    // 3. السكنات المفضلة
    const favHousingContainer = document.getElementById('fav-housing-container');
    if (favHousingContainer) {
      const favHouses = INITIAL_DATA.housing.filter(h => AppState.favorites.housing.includes(h.id));
      if (favHouses.length === 0) {
        favHousingContainer.innerHTML = '<div class="empty-state-desc" style="text-align:center; padding:2rem;">لا توجد سكنات محفوظة في المفضلة.</div>';
      } else {
        favHousingContainer.innerHTML = `
          <div class="housing-grid">
            ${favHouses.map(house => `
              <div class="housing-card">
                <div style="height:120px; overflow:hidden;">
                  <img src="${house.image}" style="width:100%; height:100%; object-fit:cover;" />
                </div>
                <div class="housing-body">
                  <h4 class="housing-title">${escapeHtml(house.title)}</h4>
                  <p style="font-size:0.85rem; color:var(--primary-700);">${escapeHtml(house.location)}</p>
                  <p style="font-weight:800; margin:0.5rem 0;">${house.rent} د.أ / شهرياً</p>
                  <div style="display:flex; gap:0.5rem;">
                    <button class="btn-primary" style="flex:1;" onclick="App.openHousingDetails('${house.id}')">التفاصيل</button>
                    <button class="btn-outline-danger" onclick="App.toggleFavorite('housing', '${house.id}')">إزالة</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    // 4. طلبات التقديم المرسلة
    const appsContainer = document.getElementById('my-applications-container');
    if (appsContainer) {
      if (AppState.applications.length === 0) {
        appsContainer.innerHTML = '<div class="empty-state-desc" style="text-align:center; padding:2rem;">لم تقم بتقديم أي طلب تدريب حتى الآن. يمكنك استعراض فرص التدريب المتاحة والتقديم بنقرة واحدة!</div>';
      } else {
        appsContainer.innerHTML = `
          <div class="applications-table-wrap">
            <table class="custom-table">
              <thead>
                <tr>
                  <th>المسمى التدريبي</th>
                  <th>الشركة / المؤسسة</th>
                  <th>اسم المتقدم</th>
                  <th>تاريخ التقديم</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                ${AppState.applications.map(app => `
                  <tr>
                    <td><strong>${escapeHtml(app.role)}</strong></td>
                    <td>${escapeHtml(app.company)}</td>
                    <td>${escapeHtml(app.studentName)} (${escapeHtml(app.major)})</td>
                    <td>${escapeHtml(app.appliedAt)}</td>
                    <td><span class="status-badge reviewing">${escapeHtml(app.status)}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }
    }
  },

  /* ==========================================================================
     إدارة قسم مساعد الدراسة بالذكاء الاصطناعي (AI Study Assistant)
     ========================================================================== */
  handleSendMessage() {
    const input = document.getElementById('ai-chat-input');
    const text = input ? input.value.trim() : '';
    if (!text) return;

    input.value = '';
    const messagesWindow = document.getElementById('ai-messages-window');
    if (!messagesWindow) return;

    // إضافة رسالة الطالب
    const userMsgElem = document.createElement('div');
    userMsgElem.className = 'chat-bubble user';
    userMsgElem.textContent = text;
    messagesWindow.appendChild(userMsgElem);
    messagesWindow.scrollTop = messagesWindow.scrollHeight;

    // محاكاة استجابة المساعد الذكي
    setTimeout(() => {
      const reply = this.generateAiResponse(text);
      const botMsgElem = document.createElement('div');
      botMsgElem.className = 'chat-bubble assistant';
      botMsgElem.innerHTML = reply;
      messagesWindow.appendChild(botMsgElem);
      messagesWindow.scrollTop = messagesWindow.scrollHeight;
    }, 450);
  },

  /* توليد الرد الإرشادي للمحادثة الذكية */
  generateAiResponse(query) {
    const q = query.toLowerCase();

    if (q.includes('جدول') || q.includes('امتحان') || q.includes('تنظيم') || q.includes('وقت')) {
      return `
        <strong>💡 خطة مقترحة لتنظيم وقت الامتحانات في جامعة البلقاء:</strong><br>
        1. <strong>تقنية البومودورو (25/5):</strong> ادرس 25 دقيقة بتركيز تام ثم استرح 5 دقائق.<br>
        2. <strong>تقسيم المادة وفق مخرجات التعلم:</strong> ابدأ بالمفاهيم التي تشكل 40% من علامة الامتحان.<br>
        3. <strong>حل أسئلة السنوات السابقة:</strong> مفيد جداً لفهم أسلوب أسئلة الدكاترة في كليات الهندسة والـ IT.<br>
        <em>هل ترغب بأن نولد لك اختباراً تجريبياً لمادتك الآن؟</em>
      `;
    }

    if (q.includes('تدريب') || q.includes('ميداني') || q.includes('ساعات')) {
      return `
        <strong>📋 تعليمات التدريب الميداني لطلبة البلقاء:</strong><br>
        - يُشترط عادةً إتمام 90 ساعة معتمدة بنجاح للبدء بالتدريب الميداني.<br>
        - يمكنك تصفح قسم <strong>"فرص التدريب"</strong> في المنصة لاختيار شركة معتمدة وتقديم طلبك مباشرة.<br>
        - احرص على تصديق كتاب التدريب من عمادة كليتك قبل البدء بالدوام في الشركة.
      `;
    }

    if (q.includes('مشروع تخرج') || q.includes('تخرج') || q.includes('فكرة')) {
      return `
        <strong>🎓 نصائح لاختيار فكرة مشروع تخرج ناجحة:</strong><br>
        1. اختر مشكلة واقعية تواجه المجتمع أو القطاع الصناعي في الأردن (مثل أتمتة المياه، حلول النقل الذكي، أو التجارة الإلكترونية).<br>
        2. تأكد من توفر البيانات وأدوات التطوير قبل تثبيت الفكرة مع المشرف.<br>
        3. احرص على بناء نسخة أولية (MVP) في الفصل الأول لتسهيل استكمال المشروع في الفصل الثاني.
      `;
    }

    return `
      أهلاً بك يا زميلي الطالب في جامعة البلقاء التطبيقية والجامعات الأردنية! 🌟<br>
      بصفتي مساعدك الأكاديمي المحلي، أنا هنا لمساعدتك في فهم المواد، تنظيم الدراسة، وتجهيز أسئلة المراجعة.<br>
      يمكنك أيضاً <strong>رفع ملف PDF</strong> للمادة من العمود المجاور لتوليد ملخص شامل واختبار تدريبي فوري!
    `;
  },

  /* اختيار ملف PDF */
  handlePdfFileSelected(file) {
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
      showToast('يرجى اختيار ملف بصيغة PDF صالحة', 'error');
      return;
    }

    AppState.uploadedPdf = {
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' ميغابايت',
      type: file.type,
      lastModified: new Date(file.lastModified).toLocaleDateString('ar-JO')
    };

    const fileInfoBar = document.getElementById('file-info-bar');
    const fileNameElem = document.getElementById('file-name-display');
    const fileSizeElem = document.getElementById('file-size-display');

    if (fileInfoBar && fileNameElem && fileSizeElem) {
      fileNameElem.textContent = AppState.uploadedPdf.name;
      fileSizeElem.textContent = AppState.uploadedPdf.size;
      fileInfoBar.classList.add('active');
    }

    showToast(`تم اختيار الملف "${file.name}" بنجاح. يمكنك الآن توليد الملخص أو الاختبار!`, 'success');
  },

  /* توليد ملخص دراسي تجريبي */
  handleGenerateSummary() {
    if (!AppState.uploadedPdf) {
      showToast('يرجى اختيار ملف PDF أولاً من جهازك للبدء بالتلخيص', 'error');
      return;
    }

    const summaryBox = document.getElementById('summary-result-box');
    const summaryList = document.getElementById('summary-points-list');
    const summaryTargetTitle = document.getElementById('summary-doc-title');

    if (!summaryBox || !summaryList) return;

    summaryTargetTitle.textContent = `ملخص دراسي استرشادي لملف: ${AppState.uploadedPdf.name}`;

    summaryList.innerHTML = `
      <li><strong>1. الفكرة الرئيسية والمحور العام:</strong> يغطي هذا الملف المبادئ الجوهرية للمادة الدراسية، مع التركيز على المفاهيم الأساسية والتطبيقات الهندسية والحاسوبية المتسقة مع الخطة الدراسية لجامعة البلقاء التطبيقية.</li>
      <li><strong>2. المصطلحات الأساسية المعتمدة:</strong> يشمل تعريفات حاسمة في منهجيات العمل، معايير التصميم، والتحليل المنطقي المتكرر في أسئلة الامتحانات النصفية والنهائية.</li>
      <li><strong>3. القواعد والمعادلات المحورية:</strong> تسليط الضوء على كيفية اشتقاق وتطبيق النماذج الرياضية والبرمجية بكفاءة عالية مع أمثلة تطبيقية محلولة.</li>
      <li><strong>4. نصيحة للمراجعة والامتحان:</strong> ركز على المقارنة بين الأنظمة المختلفة وخصائص كل هيكلية، واحرص على حل التمارين في نهاية كل فصل.</li>
    `;

    summaryBox.classList.add('active');
    summaryBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast('تم إعداد الملخص الدراسي التجريبي بنجاح!', 'success');
  },

  /* توليد الاختبار التفاعلي الذاتي (Quiz) */
  handleGenerateQuiz() {
    if (!AppState.uploadedPdf) {
      showToast('يرجى اختيار ملف PDF أولاً لتوليد أسئلة الاختبار التفاعلي', 'error');
      return;
    }

    AppState.activeQuizIndex = 0;
    AppState.quizAnswers = {};
    AppState.quizScore = 0;
    AppState.isQuizSubmitted = false;

    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
      quizContainer.classList.add('active');
      this.renderQuizQuestion();
      quizContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      showToast('تم تجهيز أسئلة الاختبار التجريبي (5 أسئلة للمراجعة الذاتية)', 'success');
    }
  },

  /* رسم السؤال الحالي في الاختبار */
  renderQuizQuestion() {
    const qIndex = AppState.activeQuizIndex;
    const questions = INITIAL_DATA.quizQuestions;
    const q = questions[qIndex];

    const currentElem = document.getElementById('quiz-current-num');
    const totalElem = document.getElementById('quiz-total-num');
    const qTextElem = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options-container');
    const feedbackBox = document.getElementById('quiz-feedback-box');
    const scoreBox = document.getElementById('quiz-score-summary');
    const activeQuestionBox = document.getElementById('quiz-active-question-box');

    if (!qTextElem || !optionsContainer) return;

    if (scoreBox) scoreBox.classList.remove('active');
    if (activeQuestionBox) activeQuestionBox.style.display = 'block';

    if (currentElem) currentElem.textContent = qIndex + 1;
    if (totalElem) totalElem.textContent = questions.length;
    qTextElem.textContent = q.question;

    if (feedbackBox) {
      feedbackBox.className = 'quiz-feedback-box';
      feedbackBox.innerHTML = '';
    }

    // رسم الخيارات
    optionsContainer.innerHTML = q.options.map((opt, i) => {
      return `
        <button class="quiz-option-btn" onclick="App.handleAnswerQuiz(${i})">
          <span style="font-weight:700; margin-left:0.5rem;">${String.fromCharCode(65 + i)}.</span>
          ${escapeHtml(opt)}
        </button>
      `;
    }).join('');
  },

  /* التحقق من إجابة الطالب الفورية */
  handleAnswerQuiz(selectedIndex) {
    const qIndex = AppState.activeQuizIndex;
    const questions = INITIAL_DATA.quizQuestions;
    const q = questions[qIndex];

    // تعطيل الأزرار لمنع النقر المتكرر
    const btns = document.querySelectorAll('.quiz-option-btn');
    btns.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === q.correctIndex;
    if (isCorrect) {
      AppState.quizScore++;
    }

    // تلوين الإجابات
    btns.forEach((btn, idx) => {
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    // إظهار التغذية الراجعة والتصحيح
    const feedbackBox = document.getElementById('quiz-feedback-box');
    if (feedbackBox) {
      feedbackBox.className = `quiz-feedback-box active ${isCorrect ? 'success' : 'error'}`;
      feedbackBox.innerHTML = `
        <strong>${isCorrect ? 'إجابة صحيحة وممتازة! ✓' : 'إجابة غير دقيقة ✗'}</strong><br>
        <span>${escapeHtml(q.explanation)}</span>
        <div style="margin-top:0.75rem;">
          <button class="btn-primary" style="padding:0.4rem 0.85rem; font-size:0.85rem;" onclick="App.nextQuizQuestion()">
            ${qIndex < questions.length - 1 ? 'الانتقال للسؤال التالي →' : 'عرض النتيجة النهائية 🏆'}
          </button>
        </div>
      `;
    }
  },

  nextQuizQuestion() {
    const questions = INITIAL_DATA.quizQuestions;
    if (AppState.activeQuizIndex < questions.length - 1) {
      AppState.activeQuizIndex++;
      this.renderQuizQuestion();
    } else {
      // إظهار بطاقة النتيجة النهائية
      const activeQuestionBox = document.getElementById('quiz-active-question-box');
      const scoreBox = document.getElementById('quiz-score-summary');
      const scoreNum = document.getElementById('quiz-final-score');
      const scoreMsg = document.getElementById('quiz-final-msg');

      if (activeQuestionBox) activeQuestionBox.style.display = 'none';
      if (scoreBox && scoreNum && scoreMsg) {
        scoreNum.textContent = `${AppState.quizScore} / ${questions.length}`;
        const pct = (AppState.quizScore / questions.length) * 100;
        if (pct >= 80) {
          scoreMsg.textContent = 'أداء متميز ورائع جداً! أنت مستعد تماماً لاختبار المادة الجامعية. 🌟';
        } else if (pct >= 50) {
          scoreMsg.textContent = 'أداء جيد، نوصيك بإعادة مراجعة المفاهيم والملخص لتحقيق العلامة الكاملة. 📚';
        } else {
          scoreMsg.textContent = 'بداية جيدة للتعلم، ننصحك بقراءة المادة ومحاولة الاختبار مرة أخرى. 💪';
        }
        scoreBox.classList.add('active');
      }
    }
  },

  /* ==========================================================================
     إدارة قسم الإعلانات والفرص الجامعية في الرئيسية
     ========================================================================== */
  renderAnnouncements() {
    const list = document.getElementById('announcements-list-container');
    if (!list) return;

    list.innerHTML = INITIAL_DATA.announcements.map(ann => {
      let badgeClass = 'badge-official';
      if (ann.type === 'event') badgeClass = 'badge-event';
      if (ann.type === 'opportunity') badgeClass = 'badge-opportunity';

      return `
        <div class="announcement-item">
          <span class="announcement-badge ${badgeClass}">${escapeHtml(ann.badge)}</span>
          <div class="announcement-content">
            <h4>${escapeHtml(ann.title)}</h4>
            <p>${escapeHtml(ann.content)}</p>
            <div class="announcement-meta">${escapeHtml(ann.date)}</div>
          </div>
        </div>
      `;
    }).join('');
  },

  /* إغلاق كافة النوافذ المنبثقة المفتوحة */
  closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.classList.remove('open');
    });
    AppState.pendingDeleteId = null;
    AppState.editingBookId = null;
  }
};

/* ==========================================================================
   5. نظام الإشعارات المنبثقة الخفيفة (Toast Notification System)
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;

  let icon = 'ℹ️';
  if (type === 'success') icon = '✓';
  if (type === 'error') icon = '⚠️';

  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   6. دالة تعقيم النصوص لتفادي ثغرات XSS
   ========================================================================== */
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   7. مخطط الربط المستقبلي مع Google Gemini API (Future AI Blueprint)
   يمكن للمطور تفعيل هذه الدالة لاحقاً عند توفير مفتاح API خادم خلفي
   ========================================================================== */
/**
 * async function callGeminiApiForSummary(pdfTextContent, apiKey) {
 *   // نقطة تكامل مستقبلية مع Google Gemini 2.5 Flash
 *   // const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
 *   //   method: 'POST',
 *   //   headers: { 'Content-Type': 'application/json' },
 *   //   body: JSON.stringify({
 *   //     contents: [{ parts: [{ text: `لخص هذا المحتوى الأكاديمي لطلاب جامعة البلقاء: \n${pdfTextContent}` }] }]
 *   //   })
 *   // });
 *   // const data = await response.json();
 *   // return data.candidates[0].content.parts[0].text;
 * }
 */
