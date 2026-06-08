export type Lang = "ru" | "en";

export const SITE = {
  name: {
    ru: "Тойганбаева Б.Б.",
    en: "Toiganbayeva B.B.",
  },
  phone: "+7 705 170 2277",
  phoneHref: "+77051702277",
  whatsappHref: "https://wa.me/77051702277",
  email: "toyganbaeva760@gmail.com",
  license: "16007655",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=76.945%2C43.225%2C76.965%2C43.240&layer=mapnik&marker=43.2325%2C76.9555",
  mapLink: "https://2gis.kz/almaty/firm/g/76.9555%2C43.2325",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=43.2325,76.9555",
  googleRouteLink: "https://www.google.com/maps/dir/?api=1&destination=43.2325,76.9555",
  coords: { lat: 43.2325, lng: 76.9555 },
} as const;

export const t = {
  nav: {
    home: { ru: "Главная", en: "Home" },
    about: { ru: "О нотариусе", en: "About" },
    services: { ru: "Услуги", en: "Services" },
    reviews: { ru: "Отзывы", en: "Reviews" },
    contact: { ru: "Контакты", en: "Contact" },
    cta: { ru: "Связаться", en: "Get in touch" },
  },
  hero: {
    eyebrow: { ru: "Частный нотариус · Алматы", en: "Private Notary · Almaty" },
    title: { ru: "Ваш нотариус\nв центре Алматы", en: "Your notary\nin the heart of Almaty" },
    subtitle: {
      ru: "Тойганбаева Баглана Булатовна. Профессиональные нотариальные услуги — быстро, надёжно и с вниманием к каждому клиенту.",
      en: "Toiganbayeva Baglana Bulatovna. Professional notarial services — fast, reliable and attentive to every client.",
    },
    whatsapp: { ru: "Написать в WhatsApp", en: "Message on WhatsApp" },
    call: { ru: "Позвонить", en: "Call now" },
  },
  trust: {
    title: { ru: "Почему выбирают нас", en: "Why clients choose us" },
    items: [
      {
        k: "license",
        title: { ru: "Лицензированный нотариус", en: "Licensed Notary" },
        desc: {
          ru: "Государственная лицензия № 16007655 Министерства юстиции РК.",
          en: "State license No. 16007655 from the Ministry of Justice of Kazakhstan.",
        },
      },
      {
        k: "experience",
        title: { ru: "9+ лет опыта", en: "9+ Years Experience" },
        desc: {
          ru: "Практика с 2016 года и сотни успешно оформленных дел.",
          en: "In practice since 2016 with hundreds of cases handled.",
        },
      },
      {
        k: "location",
        title: { ru: "Центр Алматы", en: "Central Almaty" },
        desc: {
          ru: "БЦ «Koktem Towers» на пр. Достык — удобная парковка.",
          en: "Koktem Towers on Dostyk Avenue — convenient parking.",
        },
      },
      {
        k: "fast",
        title: { ru: "Быстрое обслуживание", en: "Fast Service" },
        desc: {
          ru: "Оперативное оформление документов без лишних ожиданий.",
          en: "Prompt processing of documents without unnecessary waiting.",
        },
      },
    ],
  },
  services: {
    eyebrow: { ru: "Все нотариальные действия", en: "All notarial actions" },
    title: { ru: "Услуги", en: "Services" },
    intro: {
      ru: "Полный спектр нотариальных услуг для физических и юридических лиц.",
      en: "A full range of notarial services for individuals and businesses.",
    },
    items: [
      {
        k: "poa",
        title: { ru: "Доверенности", en: "Powers of Attorney" },
        desc: {
          ru: "На управление и распоряжение недвижимостью, автомобилем, представление интересов в судах и организациях, получение пенсии и др.",
          en: "For managing real estate and vehicles, representation in courts and institutions, receiving pension and more.",
        },
      },
      {
        k: "realestate",
        title: { ru: "Сделки", en: "Real Estate Transactions" },
        desc: {
          ru: "Договоры купли-продажи, дарения недвижимого и движимого имущества, ценных бумаг, отчуждения долей, ренты и пожизненного содержания.",
          en: "Sale, gift and exchange contracts for real estate, movable property, securities, share transfers, annuities and life maintenance.",
        },
      },
      {
        k: "consent",
        title: { ru: "Согласия на сделки", en: "Transaction Consents" },
        desc: {
          ru: "Согласия супругов на покупку, продажу, дарение и залог недвижимости, согласия на отчуждение доли в ТОО и иные нотариальные согласия.",
          en: "Spousal consents for the purchase, sale, gift and pledge of real estate, consents to transfer a share in an LLP (TOO), and other notarial consents.",
        },
      },
      {
        k: "corporate",
        title: { ru: "Для юридических лиц", en: "Corporate Documents" },
        desc: {
          ru: "Заверение заявлений в органы государственных доходов, решений участников ТОО, заверение устава и учредительных документов.",
          en: "Certification of applications to the State Revenue authorities, LLP (TOO) participant resolutions, charter and founding documents.",
        },
      },
      {
        k: "inheritance",
        title: { ru: "Завещания", en: "Inheritance Documents" },
        desc: {
          ru: "Распоряжение имуществом гражданина на случай смерти, оформление наследственных дел.",
          en: "Disposition of a citizen's property in case of death and handling of inheritance matters.",
        },
      },
      {
        k: "child",
        title: { ru: "Согласия детям", en: "Child Travel Consents" },
        desc: {
          ru: "Согласия на выезд несовершеннолетних за границу, сопровождение по РК, из образовательных учреждений и детских садов.",
          en: "Consents for minors traveling abroad, escort within Kazakhstan, from schools and kindergartens.",
        },
      },
      {
        k: "evidence",
        title: { ru: "Обеспечение доказательств", en: "Notarial Certifications" },
        desc: {
          ru: "Заверение скриншотов, переписки по электронной почте и WhatsApp, осмотр вещественных доказательств.",
          en: "Certification of screenshots, email and WhatsApp correspondence, inspection of physical evidence.",
        },
      },
      {
        k: "translation",
        title: { ru: "Бюро переводов", en: "Certified Translations" },
        desc: {
          ru: "Переводы любых документов на все языки мира, нотариально заверенные переводы паспортов и свидетельств.",
          en: "Translation of any documents into all languages, notarized translations of passports and certificates.",
        },
      },
    ],
  },
  about: {
    eyebrow: { ru: "О нотариусе", en: "About the notary" },
    title: { ru: "Тойганбаева\nБаглана Булатовна", en: "Toiganbayeva\nBaglana Bulatovna" },
    body: {
      ru: [
        "Нотариус Баглана Тойганбаева оказывает профессиональные нотариальные услуги в самом центре Алматы.",
        "Здесь вы можете быстро и надёжно заверить различные документы, включая доверенности, договоры и заявления.",
        "С опытом и вниманием к каждому клиенту нотариус обеспечивает оперативное обслуживание и комфортное взаимодействие.",
        "Офис удобно расположен в центре города, рядом с ключевыми транспортными развязками, а для клиентов предусмотрена удобная парковка.",
      ],
      en: [
        "Notary Baglana Toiganbayeva provides professional notarial services in the very center of Almaty.",
        "Here you can quickly and reliably certify various documents, including powers of attorney, contracts and applications.",
        "With experience and attention to every client, the notary ensures prompt service and a comfortable experience.",
        "The office is conveniently located in the city center, near key transport hubs, with convenient parking for clients.",
      ],
    },
    licenseCard: {
      heading: { ru: "Нотариус города Алматы", en: "Notary of the City of Almaty" },
      issued: {
        ru: "Государственная лицензия № 16007655, выдана Министерством юстиции Республики Казахстан 11 мая 2016 года.",
        en: "State license No. 16007655, issued by the Ministry of Justice of the Republic of Kazakhstan on May 11, 2016.",
      },
    },
    license: {
      eyebrow: { ru: "Лицензия и верификация", en: "License & Verification" },
      title: { ru: "Государственная лицензия", en: "State License" },
      trustText: {
        ru: "Оригинал лицензии нотариуса доступен для ознакомления.",
        en: "Original notary license available for verification.",
      },
      numberLabel: { ru: "Номер лицензии", en: "License number" },
      number: "16007655",
      dateLabel: { ru: "Дата выдачи", en: "Issue date" },
      date: { ru: "11 мая 2016 г.", en: "May 11, 2016" },
      authorityLabel: { ru: "Кем выдана", en: "Issuing authority" },
      authority: {
        ru: "Министерство юстиции Республики Казахстан",
        en: "Ministry of Justice of the Republic of Kazakhstan",
      },
      activityLabel: { ru: "Вид деятельности", en: "Licensed activity" },
      activity: { ru: "Нотариальная деятельность", en: "Notarial activity" },
      viewButton: { ru: "Открыть оригинал лицензии", en: "View Original License" },
      previewAlt: {
        ru: "Государственная лицензия нотариуса Тойганбаевой Б.Б. № 16007655, Министерство юстиции РК",
        en: "State notary license No. 16007655 of Toiganbayeva B.B., Ministry of Justice of Kazakhstan",
      },
      modalTitle: { ru: "Оригинал лицензии", en: "Original License" },
      download: { ru: "Скачать оригинал (PDF)", en: "Download original (PDF)" },
      zoomHint: { ru: "Нажмите на изображение для увеличения", en: "Tap the image to zoom" },
      close: { ru: "Закрыть", en: "Close" },
    },
  },
  reviews: {
    eyebrow: { ru: "Что говорят клиенты", en: "What clients say" },
    title: { ru: "Отзывы клиентов", en: "Client Reviews" },
    items: [
      {
        name: "Azamat D.",
        date: { ru: "29 мая 2025", en: "May 29, 2025" },
        text: {
          ru: "Баглана просто топ нотариус! Профессионально, быстро. Всем советую.",
          en: "Baglana is simply a top notary! Professional and fast. I recommend her to everyone.",
        },
      },
      {
        name: "Оксана Шарипова",
        date: { ru: "15 апреля 2025", en: "April 15, 2025" },
        text: {
          ru: "Хочу выразить огромную благодарность нотариусу Тойганбаевой Б.Б. Процесс оформления документов был быстрым и профессиональным. Однозначно рекомендую для любых юридических нужд.",
          en: "Huge thanks to notary Toiganbayeva. The document process was fast and professional. I highly recommend her for any legal needs.",
        },
      },
      {
        name: "Айжана Джамбулова",
        date: { ru: "8 апреля 2025", en: "April 8, 2025" },
        text: {
          ru: "Очень грамотный нотариус. На 5+ знает свою работу. Очень помогла мне разобраться в моём сложном деле, очень внимательная. Спасибо!",
          en: "A very competent notary who knows her work perfectly. She helped me figure out a complicated case and was very attentive. Thank you!",
        },
      },
      {
        name: "Alan Ishzhanov",
        date: { ru: "16 мая 2024", en: "May 16, 2024" },
        text: {
          ru: "Обращался по поводу перерегистрации автотранспорта. Нотариус всё чётко объяснил, показал правила и быстро оформили сделку. Офис 10/10.",
          en: "I came about re-registering a vehicle. The notary explained everything clearly and we completed the deal quickly. The office is 10/10.",
        },
      },
      {
        name: "CHina MujCHina",
        date: { ru: "16 мая 2024", en: "May 16, 2024" },
        text: {
          ru: "Здесь услуги оказались дешевле, меня полностью проконсультировали. Даже когда услуга не понадобилась, помогали дальше. Спасибо большое!",
          en: "The services here were more affordable and I was fully advised. Even when I no longer needed the service, they kept helping. Thank you!",
        },
      },
      {
        name: "Gulnura Nurtaeva",
        date: { ru: "17 августа 2024", en: "August 17, 2024" },
        text: {
          ru: "Быстро и по разумным ценам услуги нотариуса, очень приятный офис.",
          en: "Fast notary services at reasonable prices, and a very pleasant office.",
        },
      },
    ],
  },
  contact: {
    eyebrow: { ru: "Как нас найти", en: "How to find us" },
    title: { ru: "Контакты", en: "Contact" },
    directions: {
      heading: { ru: "Как добраться", en: "Getting here" },
      openMaps: { ru: "Открыть в Google Maps", en: "Open in Google Maps" },
      buildRoute: { ru: "Построить маршрут", en: "Build route" },
      copyAddress: { ru: "Копировать адрес", en: "Copy address" },
      copied: { ru: "Адрес скопирован", en: "Address copied" },
    },
    findUs: {
      title: { ru: "Как нас найти", en: "How to Find Us" },
      description: {
        ru: "Посмотрите короткое видео, чтобы быстро найти вход и офис нотариуса в Koktem Towers.",
        en: "Watch the short video to quickly find the entrance and notary office inside Koktem Towers.",
      },
      buildRoute: { ru: "Построить маршрут", en: "Build Route" },
      playLabel: { ru: "Смотреть видео", en: "Play video" },
      note: {
        ru: "Если у вас возникли сложности с поиском офиса, позвоните нам, и мы поможем.",
        en: "If you have difficulty finding the office, please call us and we will assist you.",
      },
    },
    address: {
      ru: 'г. Алматы, пр. Достык 180, БЦ "Koktem Towers", офис 11',
      en: 'Almaty, 180 Dostyk Ave, Koktem Towers Business Center, office 11',
    },
    hoursTitle: { ru: "Режим работы", en: "Working hours" },
    hours: {
      ru: ["Ежедневно: 10:00 — 18:00", "Суббота — по предварительной записи", "Воскресенье — выходной"],
      en: ["Daily: 10:00 — 18:00", "Saturday — by appointment", "Sunday — closed"],
    },
    formName: { ru: "Имя", en: "Name" },
    formPhone: { ru: "Телефон", en: "Phone" },
    formSubmit: { ru: "Отправить", en: "Send" },
    formNote: {
      ru: "Оставьте заявку — мы перезвоним и проконсультируем.",
      en: "Leave a request — we'll call you back and advise.",
    },
    sent: { ru: "Спасибо! Мы скоро свяжемся с вами.", en: "Thank you! We'll contact you soon." },
  },
  credentials: {
    eyebrow: { ru: "Гарантии и доверие", en: "Credentials & Trust" },
    title: { ru: "Почему вы можете доверять", en: "Why you can trust us" },
    intro: {
      ru: "Документально подтверждённая квалификация и репутация, проверенная сотнями клиентов.",
      en: "Documented qualifications and a reputation verified by hundreds of clients.",
    },
    stats: [
      { value: "9+", label: { ru: "лет опыта", en: "years of experience" } },
      { value: "5000+", label: { ru: "заверенных документов", en: "documents notarized" } },
      { value: "98%", label: { ru: "довольных клиентов", en: "client satisfaction" } },
      { value: "5.0★", label: { ru: "средний рейтинг", en: "average rating" } },
    ],
    points: [
      {
        ru: "Государственная лицензия Министерства юстиции РК № 16007655.",
        en: "State license No. 16007655 from the Ministry of Justice of Kazakhstan.",
      },
      {
        ru: "Все нотариальные действия в соответствии с законодательством Республики Казахстан.",
        en: "All notarial acts in full compliance with the laws of Kazakhstan.",
      },
      {
        ru: "Конфиденциальность и юридическая чистота каждого документа.",
        en: "Confidentiality and legal integrity of every document.",
      },
      {
        ru: "Офис в центре Алматы с удобной парковкой.",
        en: "Office in central Almaty with convenient parking.",
      },
    ],
    guaranteesTitle: { ru: "Наши гарантии", en: "Our guarantees" },
    guarantees: [
      {
        title: { ru: "Юридическая чистота", en: "Legal integrity" },
        desc: {
          ru: "Каждый документ проверяется на соответствие закону.",
          en: "Every document is checked for full legal compliance.",
        },
      },
      {
        title: { ru: "Полная конфиденциальность", en: "Full confidentiality" },
        desc: {
          ru: "Ваши данные и документы под защитой нотариальной тайны.",
          en: "Your data and documents are protected by notarial secrecy.",
        },
      },
      {
        title: { ru: "Оформление в день обращения", en: "Same-day processing" },
        desc: {
          ru: "Большинство документов готовы за 15–30 минут.",
          en: "Most documents are ready within 15–30 minutes.",
        },
      },
    ],
  },
  gallery: {
    eyebrow: { ru: "Офис и расположение", en: "Office & Location" },
    title: { ru: "Современный офис в БЦ «Koktem Towers»", en: "A modern office in Koktem Towers" },
    intro: {
      ru: "Комфортное пространство в центре города, где каждого клиента ждёт внимательное обслуживание.",
      en: "A comfortable space in the city center where every client receives attentive service.",
    },
  },
  faq: {
    eyebrow: { ru: "Частые вопросы", en: "Frequently asked" },
    title: { ru: "Вопросы и ответы", en: "Questions & Answers" },
    items: [
      {
        q: { ru: "Сколько стоит нотариальное заверение?", en: "How much does notarization cost?" },
        a: {
          ru: "Стоимость зависит от вида нотариального действия и устанавливается в соответствии с государственными тарифами Республики Казахстан. Точную сумму мы назовём после уточнения вашего запроса — напишите в WhatsApp или позвоните, консультация бесплатна.",
          en: "The cost depends on the type of notarial act and follows the state tariffs of the Republic of Kazakhstan. We'll quote the exact amount once we understand your request — message us on WhatsApp or call, the consultation is free.",
        },
      },
      {
        q: { ru: "Какие документы нужны?", en: "What documents are required?" },
        a: {
          ru: "В большинстве случаев достаточно удостоверения личности (паспорта или ID-карты). Для сделок и доверенностей могут понадобиться правоустанавливающие документы на имущество и данные второй стороны. Если не уверены — напишите нам, и мы заранее подскажем полный список.",
          en: "In most cases your ID (passport or ID card) is enough. Transactions and powers of attorney may require property title documents and the other party's details. If you're unsure, message us and we'll send the full list in advance.",
        },
      },
      {
        q: { ru: "Могут ли обратиться иностранные граждане?", en: "Can foreigners use your services?" },
        a: {
          ru: "Да. Мы работаем с иностранными гражданами и обеспечиваем нотариально заверенные переводы документов на любые языки. При себе достаточно иметь паспорт; при необходимости поможем с переводом на месте.",
          en: "Yes. We work with foreign nationals and provide notarized translations of documents into any language. You only need your passport; if required, we can arrange translation on the spot.",
        },
      },
      {
        q: { ru: "Нужно ли записываться заранее?", en: "Do I need an appointment?" },
        a: {
          ru: "В будние дни мы принимаем без записи с 10:00 до 18:00. В субботу — только по предварительной записи. Чтобы не ждать, рекомендуем записаться через форму или WhatsApp.",
          en: "On weekdays we accept walk-ins from 10:00 to 18:00. Saturdays are by appointment only. To avoid waiting, we recommend booking through the form or WhatsApp.",
        },
      },
      {
        q: { ru: "Сколько времени занимает оформление?", en: "How long does the process take?" },
        a: {
          ru: "Большинство стандартных документов оформляются в день обращения, часто за 15–30 минут. Сложные сделки и переводы обсуждаются индивидуально, но мы всегда работаем оперативно.",
          en: "Most standard documents are completed the same day, often within 15–30 minutes. Complex transactions and translations are discussed individually, but we always work promptly.",
        },
      },
      {
        q: { ru: "Какие документы нужны для оформления доверенности?", en: "What documents are needed for a power of attorney?" },
        a: {
          ru: "Достаточно удостоверения личности (паспорта или ID-карты) и данных лица, на которое оформляется доверенность. Для отдельных видов доверенностей могут потребоваться правоустанавливающие документы на имущество.",
          en: "You'll need your ID (passport or ID card) and the details of the person the power of attorney is issued to. Some types may require property title documents.",
        },
      },
      {
        q: { ru: "Нужно ли записываться заранее?", en: "Do I need to make an appointment in advance?" },
        a: {
          ru: "В будние дни мы принимаем без записи с 10:00 до 18:00. В субботу приём только по предварительной записи. Рекомендуем позвонить или написать в WhatsApp, чтобы уточнить время.",
          en: "On weekdays we accept walk-ins from 10:00 to 18:00. Saturdays are by appointment only. We recommend calling or messaging on WhatsApp to confirm a time.",
        },
      },
      {
        q: { ru: "Делаете ли вы нотариально заверенные переводы?", en: "Do you provide notarized translations?" },
        a: {
          ru: "Да. Мы выполняем переводы любых документов на все языки мира с нотариальным заверением — паспорта, свидетельства, договоры и другие документы.",
          en: "Yes. We provide translations of any documents into all languages with notarial certification — passports, certificates, contracts and more.",
        },
      },
      {
        q: { ru: "Можно ли заверить переписку из WhatsApp или электронной почты?", en: "Can you certify WhatsApp or email correspondence?" },
        a: {
          ru: "Да, мы обеспечиваем доказательства: заверение скриншотов, переписки по электронной почте и в мессенджерах, осмотр вещественных доказательств для суда.",
          en: "Yes, we secure evidence: certification of screenshots, email and messenger correspondence, and inspection of physical evidence for court.",
        },
      },
      {
        q: { ru: "Сколько времени занимает оформление?", en: "How long does processing take?" },
        a: {
          ru: "Большинство стандартных документов оформляются в день обращения. Сложные сделки и переводы обсуждаются индивидуально, но мы всегда работаем оперативно.",
          en: "Most standard documents are completed the same day. Complex transactions and translations are discussed individually, but we always work promptly.",
        },
      },
      {
        q: { ru: "Где находится офис и есть ли парковка?", en: "Where is the office and is there parking?" },
        a: {
          ru: 'Офис расположен в БЦ «Koktem Towers», пр. Достык 180, офис 11, в центре Алматы. Для клиентов предусмотрена удобная парковка.',
          en: "The office is in Koktem Towers, 180 Dostyk Avenue, office 11, in central Almaty. Convenient parking is available for clients.",
        },
      },
    ],
  },
  booking: {
    eyebrow: { ru: "Запись на приём", en: "Book an appointment" },
    title: { ru: "Запишитесь на консультацию", en: "Schedule a consultation" },
    intro: {
      ru: "Оставьте заявку — нотариус свяжется с вами, ответит на вопросы и подберёт удобное время.",
      en: "Leave a request — the notary will contact you, answer questions and find a convenient time.",
    },
    serviceLabel: { ru: "Услуга", en: "Service" },
    dateLabel: { ru: "Желаемая дата", en: "Preferred date" },
    timeLabel: { ru: "Удобное время", en: "Preferred time" },
    emailLabel: { ru: "Email", en: "Email" },
    commentLabel: { ru: "Комментарий", en: "Comment" },
    commentPlaceholder: {
      ru: "Кратко опишите вашу задачу (необязательно)",
      en: "Briefly describe your request (optional)",
    },
    emailPlaceholder: { ru: "you@example.com", en: "you@example.com" },
    timeAny: { ru: "Любое время", en: "Any time" },
    namePlaceholder: { ru: "Ваше имя", en: "Your name" },
    phonePlaceholder: { ru: "+7 ___ ___ __ __", en: "+7 ___ ___ __ __" },
    selectService: { ru: "Выберите услугу", en: "Select a service" },
    submit: { ru: "Записаться на приём", en: "Book appointment" },
    submitWhatsApp: { ru: "Отправить в WhatsApp", en: "Send via WhatsApp" },
    sending: { ru: "Отправляем…", en: "Sending…" },
    callInstead: { ru: "или позвоните напрямую", en: "or call directly" },
    orDivider: { ru: "или", en: "or" },
    validation: {
      name: { ru: "Укажите ваше имя", en: "Please enter your name" },
      phone: { ru: "Укажите корректный номер телефона", en: "Please enter a valid phone number" },
      email: { ru: "Укажите корректный email", en: "Please enter a valid email" },
      service: { ru: "Выберите услугу", en: "Please select a service" },
    },
    success: {
      title: { ru: "Заявка отправлена!", en: "Request sent!" },
      body: {
        ru: "Спасибо! Нотариус свяжется с вами в ближайшее время, чтобы подтвердить запись.",
        en: "Thank you! The notary will contact you shortly to confirm your appointment.",
      },
      again: { ru: "Отправить ещё одну заявку", en: "Send another request" },
    },
    errorMsg: {
      ru: "Не удалось отправить заявку. Попробуйте WhatsApp или позвоните нам.",
      en: "Couldn't send the request. Please try WhatsApp or call us.",
    },
    benefits: [
      { ru: "Ответ в течение 15 минут", en: "Reply within 15 minutes" },
      { ru: "Бесплатная первичная консультация", en: "Free initial consultation" },
      { ru: "Удобное время приёма", en: "Convenient appointment time" },
    ],
  },
  footer: {
    rights: { ru: "Все права защищены.", en: "All rights reserved." },
    tagline: { ru: "Частный нотариус · Алматы", en: "Private Notary · Almaty" },
  },
} as const;
