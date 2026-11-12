import { ENV } from '@lib/env'

export type SiteLang = 'ru' | 'en'

export interface HeroContent {
  eyebrow: string
  title: string
  subtitle: string
  description: string
  primaryCta: string
  secondaryCta: string
  tertiaryCta: string
  note: string
}

export interface SectionIntro {
  title: string
  description: string
  link?: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface StackGroup {
  title: string
  items: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CtaContent {
  title: string
  description: string
  telegram: string
  email: string
  note?: string
}

export interface ArticleCategoryLabels {
  'all': string
  'development': string
  'ai-for-business': string
  'case-studies': string
  'guides': string
}

export interface FormContent {
  title: string
  description: string
  name: string
  namePlaceholder: string
  company: string
  companyPlaceholder: string
  task: string
  taskPlaceholder: string
  submit: string
  hint: string
  required: string
  subjectPrefix: string
  bodyIntro: string
}

export interface SiteContent {
  brand: {
    name: string
    role: string
    tagline: string
    location: string
    availability: string
  }
  meta: {
    home: { title: string, description: string }
    services: { title: string, description: string }
    cases: { title: string, description: string }
    articles: { title: string, description: string }
    about: { title: string, description: string }
    hire: { title: string, description: string }
    contact: { title: string, description: string }
    policy: { title: string, description: string }
    legal: { title: string, description: string }
  }
  home: {
    hero: HeroContent
    services: SectionIntro
    cases: SectionIntro
    process: { title: string, description: string, steps: ProcessStep[] }
    stack: { title: string, description: string, groups: StackGroup[] }
    articles: SectionIntro
    cta: CtaContent
  }
  servicesPage: {
    eyebrow: string
    title: string
    description: string
    listTitle: string
    listDescription: string
    faqTitle: string
    faqDescription: string
    faq: FaqItem[]
    cta: CtaContent
  }
  casesPage: {
    eyebrow: string
    title: string
    description: string
    allLabel: string
    industryLabel: string
    taskTypeLabel: string
    clearLabel: string
    resetLabel: string
    emptyTitle: string
    emptyDescription: string
    moreLabel: string
    cta: CtaContent
  }
  casePage: {
    back: string
    industryLabel: string
    taskTypeLabel: string
    clientLabel: string
    stackLabel: string
    resultsLabel: string
    resultsNote: string
    cta: CtaContent
  }
  articlesPage: {
    eyebrow: string
    title: string
    description: string
    categoriesTitle: string
    categories: ArticleCategoryLabels
    emptyTitle: string
    emptyDescription: string
  }
  articlePage: {
    back: string
    categoryLabel: string
    related: string
  }
  aboutPage: {
    eyebrow: string
    title: string
    description: string
    headline: string
    paragraphs: string[]
    focusTitle: string
    focus: ProcessStep[]
    skillsTitle: string
    skillsDescription: string
    expertiseTitle: string
    expertiseDescription: string
    howTitle: string
    howDescription: string
    howPoints: string[]
    hireTitle: string
    hireDescription: string
    hireCta: string
    cta: CtaContent
  }
  hirePage: {
    eyebrow: string
    title: string
    description: string
    offerTitle: string
    offerDescription: string
    offer: { label: string, value: string }[]
    lookingTitle: string
    looking: string[]
    experienceTitle: string
    experienceDescription: string
    totalLabel: string
    stackTitle: string
    stackDescription: string
    stack: StackGroup[]
    cta: CtaContent
  }
  contactPage: {
    eyebrow: string
    title: string
    description: string
    intro: string
    telegramTitle: string
    telegramDescription: string
    emailTitle: string
    emailDescription: string
    form: FormContent
    note: string
  }
  policyPage: {
    eyebrow: string
    title: string
    description: string
    updated: string
    sections: { title: string, paragraphs: string[] }[]
  }
  legalPage: {
    eyebrow: string
    title: string
    description: string
    updated: string
    sections: { title: string, paragraphs: string[] }[]
  }
}

const ru: SiteContent = {
  brand: {
    name: 'Kotovsky',
    role: 'AI-интегратор',
    tagline: 'Внедряю ИИ в бизнес-процессы',
    location: 'Екатеринбург · работаю удалённо',
    availability: 'Открыт к новым проектам',
  },
  meta: {
    home: {
      title: 'Внедрение ИИ в бизнес-процессы',
      description: 'AI-интегратор: аудит, ИИ-агенты, RAG по базе знаний, чат-боты и автоматизация процессов. Помогаю запустить ИИ в работе команды и остаюсь на поддержке.',
    },
    services: {
      title: 'Услуги',
      description: 'Аудит и стратегия внедрения ИИ, ИИ-агенты и интеграции с CRM/1С/Telegram, RAG-решения, чат- и голосовые ассистенты, автоматизация на n8n, обучение команды.',
    },
    cases: {
      title: 'Кейсы',
      description: 'Примеры проектов по внедрению ИИ: извлечение данных из документов, генерация карточек товаров и ИИ-помощник для проектной документации.',
    },
    articles: {
      title: 'Статьи',
      description: 'Заметки о внедрении ИИ в бизнес, разработке и инструментах автоматизации.',
    },
    about: {
      title: 'Обо мне',
      description: 'AI-интегратор с опытом продуктовой разработки: помогаю компаниям превращать рутину в автоматизированные процессы с помощью ИИ.',
    },
    hire: {
      title: 'Найм',
      description: 'Ищу проекты и команды, где ИИ должен приносить измеримую пользу: роли, формат работы и опыт.',
    },
    contact: {
      title: 'Контакты',
      description: 'Расскажите о задаче в Telegram, по почте или через короткую форму. Отвечу и предложу следующий шаг.',
    },
    policy: {
      title: 'Политика конфиденциальности',
      description: 'Как сайт обрабатывает персональные данные, cookie и данные веб-аналитики.',
    },
    legal: {
      title: 'Реквизиты',
      description: 'Реквизиты самозанятого: статус, ФИО и ИНН для договоров и закрывающих документов.',
    },
  },
  home: {
    hero: {
      eyebrow: 'AI-интегратор · разработка и консалтинг',
      title: 'Внедряю ИИ в бизнес-процессы и довожу идею до работающего сервиса',
      subtitle: 'Помогаю автоматизировать рутину, извлекать данные из документов и запускать ИИ-ассистентов, которые экономят время команды.',
      description: 'Беру на себя весь путь: разбираюсь в процессе, проверяю данные, собираю прототип, довожу до продакшена и остаюсь на поддержке. Один промпт процесс не заменит.',
      primaryCta: 'Заказать разработку',
      secondaryCta: 'Написать на почту',
      tertiaryCta: 'Смотреть кейсы',
      note: 'Работаю официально как самозанятый. Небольшие задачи беру от нескольких дней, полноценные внедрения от нескольких недель.',
    },
    services: {
      title: 'Чем могу помочь',
      description: 'Шесть направлений, которые чаще всего нужны бизнесу на старте работы с ИИ.',
      link: 'Все услуги',
    },
    cases: {
      title: 'Избранные кейсы',
      description: 'Небольшая выборка проектов. Результаты в описаниях приведены как примерные ориентиры, а не как гарантия.',
      link: 'Все кейсы',
    },
    process: {
      title: 'Как строится работа',
      description: 'Вы понимаете, что происходит на каждом этапе и за что платите.',
      steps: [
        {
          title: 'Аудит и цели',
          description: 'Разбираю процесс, данные и ограничения. Формулируем измеримый результат и решаем, где ИИ действительно нужен.',
        },
        {
          title: 'Прототип',
          description: 'Собираю минимальную рабочую версию на реальных данных. Проверяем качество, стоимость и сценарии использования.',
        },
        {
          title: 'Внедрение',
          description: 'Интегрирую решение с вашими системами, настраиваю мониторинг, обработку ошибок и доступы.',
        },
        {
          title: 'Поддержка',
          description: 'Передаю документацию и обучаю команду. Дальше сопровождаю решение: обновления моделей, метрики, доработки.',
        },
      ],
    },
    stack: {
      title: 'Стек и инструменты',
      description: 'Выбираю технологии под задачу, а не наоборот. Ниже то, с чем работаю чаще всего.',
      groups: [
        { title: 'Модели и AI', items: ['OpenAI', 'Anthropic', 'YandexGPT', 'GigaChat', 'Ollama', 'Whisper'] },
        { title: 'Оркестрация', items: ['n8n', 'LangChain', 'LlamaIndex', 'MCP', 'RAG'] },
        { title: 'Backend и данные', items: ['TypeScript', 'Python', 'Node.js', 'FastAPI', 'PostgreSQL', 'pgvector'] },
        { title: 'Интеграции и frontend', items: ['Bitrix24', 'amoCRM', '1С', 'Telegram Bot API', 'Astro', 'Vue', 'React'] },
      ],
    },
    articles: {
      title: 'Последние статьи',
      description: 'Пишу о практических сторонах внедрения ИИ и разработке.',
      link: 'Все статьи',
    },
    cta: {
      title: 'Обсудим вашу задачу?',
      description: 'Опишите процесс, который хочется автоматизировать. Предложу реалистичный следующий шаг и оценку по срокам.',
      telegram: 'Написать в Telegram',
      email: 'Отправить письмо',
      note: 'Отвечаю в течение рабочего дня.',
    },
  },
  servicesPage: {
    eyebrow: 'Услуги',
    title: 'ИИ, который встраивается в работу, а не в презентацию',
    description: 'Помогаю выбрать задачу, собрать решение и довести его до эксплуатации. Формат: от короткого аудита до полноценного проекта под ключ.',
    listTitle: 'Направления работы',
    listDescription: 'Можно начать с одной услуги или собрать комбинацию под ваш процесс.',
    faqTitle: 'Частые вопросы',
    faqDescription: 'Собрал то, что чаще всего спрашивают до старта проекта.',
    faq: [
      {
        question: 'С чего начать внедрение ИИ?',
        answer: 'С короткого аудита: смотрим процессы, данные и потери времени. По итогам выбираем 1–2 сценария, где ИИ даст измеримый эффект, и проверяем их на прототипе.',
      },
      {
        question: 'Сколько времени занимает проект?',
        answer: 'Аудит занимает от нескольких дней. Прототип обычно 1–3 недели. Полноценное внедрение с интеграциями и поддержкой: от нескольких недель до нескольких месяцев, в зависимости от объёма данных и систем.',
      },
      {
        question: 'Сколько это стоит?',
        answer: 'Стоимость зависит от сложности данных, количества интеграций и требований к надёжности. После короткого обсуждения даю вилку по этапам, без скрытых платежей и «сюрпризов» в середине проекта.',
      },
      {
        question: 'Можно ли работать с нашими внутренними системами?',
        answer: 'Да. Интегрирую решения с CRM, 1С, Bitrix24, amoCRM, Telegram и внутренними API. Если готового коннектора нет, делаю прослойку и описываю её поддержку.',
      },
      {
        question: 'Что с безопасностью данных?',
        answer: 'По умолчанию: минимум передаваемых данных, разграничение доступов, логирование действий и возможность развернуть модель локально или в вашем облаке. Конкретная схема согласуется до старта.',
      },
      {
        question: 'Нужно ли соблюдать 152-ФЗ?',
        answer: 'Если в данных есть персональные данные, да. Закладываю обработку по требованиям закона: согласия, сроки хранения, обезличивание и хранение на территории РФ там, где это обязательно. Юридическую оценку лучше делать вместе с вашим юристом.',
      },
      {
        question: 'Что будет после запуска?',
        answer: 'Передаю документацию и обучаю команду. Дальше идёт поддержка по договорённости: мониторинг качества, обновление моделей и промптов, доработки под новые сценарии.',
      },
      {
        question: 'Вы гарантируете, что ИИ не будет ошибаться?',
        answer: 'Нет, и никто не может. Поэтому проектирую решение с проверками, ограничениями и понятным сценарием, когда человек подтверждает результат. Задача в том, чтобы снизить рутину и риск, а не убрать контроль.',
      },
    ],
    cta: {
      title: 'Не уверены, с чего начать?',
      description: 'Расскажите о процессе: подскажу, где ИИ даст эффект быстрее всего, а где пока лучше обойтись без него.',
      telegram: 'Обсудить задачу в Telegram',
      email: 'Написать на почту',
    },
  },
  casesPage: {
    eyebrow: 'Кейсы',
    title: 'Проекты, где ИИ решает конкретную задачу',
    description: 'Подборка примеров: извлечение данных из документов, контент для e-commerce и работа с проектной документацией. Цифры результатов ориентировочные.',
    allLabel: 'Все',
    industryLabel: 'Индустрия',
    taskTypeLabel: 'Тип задачи',
    clearLabel: 'Сбросить фильтры',
    resetLabel: 'Показать все кейсы',
    emptyTitle: 'По этим фильтрам кейсов нет',
    emptyDescription: 'Уберите один из фильтров.',
    moreLabel: 'Подробнее',
    cta: {
      title: 'Хотите похожий проект?',
      description: 'Опишите задачу и данные, с которыми работаете. Предложу, как подойти к решению и что проверить на первом этапе.',
      telegram: 'Написать в Telegram',
      email: 'Отправить письмо',
    },
  },
  casePage: {
    back: 'Назад к кейсам',
    industryLabel: 'Индустрия',
    taskTypeLabel: 'Тип задачи',
    clientLabel: 'Клиент',
    stackLabel: 'Стек',
    resultsLabel: 'Примерные результаты',
    resultsNote: 'Значения приведены как ориентир по похожим проектам и не являются гарантией результата.',
    cta: {
      title: 'Обсудим ваш сценарий',
      description: 'Расскажите, какие документы, данные или процессы нужно автоматизировать. Предложу план первого этапа.',
      telegram: 'Обсудить в Telegram',
      email: 'Написать на почту',
    },
  },
  articlesPage: {
    eyebrow: 'Статьи',
    title: 'Заметки о разработке и внедрении ИИ',
    description: 'Практика, разборы и инструкции. Без новостного шума.',
    categoriesTitle: 'Категории',
    categories: {
      'all': 'Все',
      'development': 'Разработка',
      'ai-for-business': 'ИИ для бизнеса',
      'case-studies': 'Кейсы и разборы',
      'guides': 'Инструкции',
    },
    emptyTitle: 'В этой категории пока пусто',
    emptyDescription: 'Выберите другую категорию.',
  },
  articlePage: {
    back: 'Назад к статьям',
    categoryLabel: 'Категория',
    related: 'Читать также',
  },
  aboutPage: {
    eyebrow: 'Обо мне',
    title: 'AI-интегратор, который сначала разбирается в процессе',
    description: 'Помогаю бизнесу применять ИИ там, где это действительно экономит время и деньги.',
    headline: 'Меня зовут Глеб Котовский. Я соединяю продуктовую разработку и практическое внедрение ИИ.',
    paragraphs: [
      'Несколько лет делаю веб-продукты и внутренние системы: от интерфейсов и дизайн-систем до интеграций и автоматизации процессов. Этот опыт научил главному: ИИ полезен только тогда, когда он встроен в реальный рабочий сценарий.',
      'Поэтому начинаю не с выбора модели, а с вопроса «где именно теряется время». Дальше проверяю гипотезу на данных, собираю прототип и довожу решение до состояния, в котором им пользуется команда.',
      'Работаю прозрачно: фиксирую этапы, показываю промежуточные результаты и заранее говорю о ограничениях. Если задача решается без ИИ, скажу об этом прямо.',
    ],
    focusTitle: 'На чём фокусируюсь',
    focus: [
      {
        title: 'Документы и данные',
        description: 'Извлечение структурированных данных из PDF, сканов, таблиц и переписок. Проверка качества и ручное подтверждение спорных случаев.',
      },
      {
        title: 'Ассистенты в рабочих системах',
        description: 'RAG по базе знаний, чат-боты в Telegram и CRM, голосовые сценарии. С ограничениями по темам и доступам.',
      },
      {
        title: 'Автоматизация процессов',
        description: 'Связки сервисов на n8n и API: заявки, отчёты, уведомления, подготовка черновиков и маршрутизация задач.',
      },
    ],
    skillsTitle: 'Навыки',
    skillsDescription: 'Технологии, с которыми работаю постоянно.',
    expertiseTitle: 'Экспертиза',
    expertiseDescription: 'Области, где могу помочь на уровне архитектуры и процесса.',
    howTitle: 'Принципы работы',
    howDescription: 'Три правила, которые помогают не превращать ИИ-проект в бесконечный эксперимент.',
    howPoints: [
      'Сначала измеримая задача и данные, потом выбор технологии.',
      'Человек остаётся в контуре там, где цена ошибки высока.',
      'Решение должно быть понятно команде, а не только разработчику.',
    ],
    hireTitle: 'Ищете AI-интегратора в команду?',
    hireDescription: 'Открыт к проектной работе, part-time и постоянным ролям. Подробности на странице найма.',
    hireCta: 'Условия и опыт',
    cta: {
      title: 'Познакомимся?',
      description: 'Напишите пару слов о компании и задаче: отвечу и предложу, с чего начать.',
      telegram: 'Написать в Telegram',
      email: 'Отправить письмо',
    },
  },
  hirePage: {
    eyebrow: 'Найм',
    title: 'AI-интегратор в вашу команду',
    description: 'Помогаю компаниям запускать ИИ-функции и выстраивать процессы вокруг них. Ниже формат работы, ожидания и опыт.',
    offerTitle: 'Что я ищу',
    offerDescription: 'Интересны задачи, где ИИ меняет реальный процесс, а не только демо.',
    offer: [
      { label: 'Роль', value: 'AI-интегратор / AI Engineer / консультант по внедрению ИИ' },
      { label: 'Формат', value: 'Проектная работа, part-time или full-time, удалённо' },
      { label: 'Команда', value: 'Продуктовая или внутренняя команда с доступом к реальным данным и процессам' },
      { label: 'Задачи', value: 'Агенты, RAG, извлечение данных, автоматизация, обучение команды' },
    ],
    lookingTitle: 'Что важно в проекте',
    looking: [
      'Понятная бизнес-цель: что должно ускориться, подешеветь или стать качественнее.',
      'Доступ к данным и людям, которые знают процесс изнутри.',
      'Готовность проверять гипотезы на прототипах, а не обсуждать ИИ в вакууме.',
      'Адекватные ожидания: ИИ снижает рутину, но не отменяет контроль и ответственность.',
    ],
    experienceTitle: 'Опыт работы',
    experienceDescription: 'Только ключевое: компания, роль, период и стек.',
    totalLabel: 'Общий опыт в разработке',
    stackTitle: 'Стек',
    stackDescription: 'Инструменты, которые использую в проектах.',
    stack: [
      { title: 'AI и данные', items: ['OpenAI', 'Anthropic', 'YandexGPT', 'GigaChat', 'Ollama', 'pgvector', 'RAG'] },
      { title: 'Разработка', items: ['TypeScript', 'Python', 'Node.js', 'FastAPI', 'Astro', 'Vue', 'React'] },
      { title: 'Интеграции и автоматизация', items: ['n8n', 'Bitrix24', 'amoCRM', '1С', 'Telegram Bot API', 'Docker'] },
    ],
    cta: {
      title: 'Расскажите о роли',
      description: 'Напишите в Telegram: что за продукт, какая задача и какой формат сотрудничества рассматриваете.',
      telegram: 'Написать в Telegram',
      email: 'Отправить письмо',
      note: 'Отвечаю лично, без HR-воронок.',
    },
  },
  contactPage: {
    eyebrow: 'Контакты',
    title: 'Расскажите о задаче',
    description: 'Выберите удобный канал или заполните короткую форму.',
    intro: 'Помогу понять, нужен ли вам ИИ, какой сценарий проверить первым и сколько времени это займёт. Если задача не моя, подскажу, к кому обратиться.',
    telegramTitle: 'Telegram',
    telegramDescription: 'Самый быстрый способ: коротко опишите задачу и приложите примеры данных, если есть.',
    emailTitle: 'Почта',
    emailDescription: 'Для подробных описаний, документов и официальных запросов.',
    form: {
      title: 'Заявка через почту',
      description: 'Заполните три поля, и откроется почтовый клиент с готовым письмом.',
      name: 'Имя',
      namePlaceholder: 'Как к вам обращаться',
      company: 'Компания',
      companyPlaceholder: 'Название компании или «частное лицо»',
      task: 'Задача',
      taskPlaceholder: 'Что хотите автоматизировать или улучшить? Какие данные и системы уже есть?',
      submit: 'Сформировать письмо',
      hint: 'Ничего не отправляется автоматически. Если почтовый клиент не настроен, напишите напрямую на почту или в Telegram.',
      required: 'Заполните все поля, чтобы продолжить.',
      subjectPrefix: 'Заявка с сайта',
      bodyIntro: 'Новая заявка с сайта kotovsky.',
    },
    note: 'Не передавайте в первом сообщении конфиденциальные данные. Для обсуждения деталей подпишем NDA.',
  },
  policyPage: {
    eyebrow: 'Правовая информация',
    title: 'Политика конфиденциальности',
    description: 'Как обрабатываются персональные данные и данные веб-аналитики на этом сайте.',
    updated: 'Обновлено: 12 ноября 2026 года',
    sections: [
      {
        title: '1. Общие положения',
        paragraphs: [
          'Настоящая политика описывает, какие данные собирает сайт kotovsky (далее — Сайт), как они используются и какие права есть у пользователя. Политика действует в отношении всех страниц Сайта.',
          `Оператор персональных данных — самозанятый ${ENV.legalName}, ИНН ${ENV.taxId}. Контакт для вопросов: terrnit.work@gmail.com.`,
        ],
      },
      {
        title: '2. Какие данные собираются',
        paragraphs: [
          'Данные, которые пользователь сообщает добровольно: имя, компания, описание задачи и контакт для ответа при обращении по почте, в Telegram или через форму заявки.',
          'Обезличенные данные веб-аналитики: страницы посещения, источник перехода, тип устройства и браузера, приблизительный регион. Эти данные не позволяют идентифицировать конкретного человека.',
        ],
      },
      {
        title: '3. Зачем нужны данные',
        paragraphs: [
          'Для ответа на обращение, обсуждения задачи, подготовки предложения и заключения договора. Данные не используются для массовых рассылок без отдельного согласия.',
          'Для улучшения работы Сайта: анализа посещаемости и технических ошибок в обезличенном виде.',
        ],
      },
      {
        title: '4. Cookie и аналитика',
        paragraphs: [
          'Сайт использует cookie для сохранения выбранной темы и языка, а также для работы систем веб-аналитики. Пользователь может отключить cookie в настройках браузера — часть функций при этом может работать иначе.',
          'Для анализа посещаемости используется Яндекс.Метрика. Сервис обрабатывает обезличенные данные в соответствии со своей политикой конфиденциальности. Данные веб-аналитики не используются для идентификации пользователя.',
        ],
      },
      {
        title: '5. Передача данных третьим лицам',
        paragraphs: [
          'Данные не передаются третьим лицам, кроме случаев, необходимых для работы Сайта (хостинг, почтовые и аналитические сервисы), либо когда это требуется по закону.',
          'При использовании внешних ИИ-сервисов в рамках проекта передача данных согласуется отдельно и оформляется договором или NDA.',
        ],
      },
      {
        title: '6. Хранение и защита',
        paragraphs: [
          'Данные хранятся не дольше, чем нужно для цели обработки или чем требует закон. Доступ к ним ограничен. Для защиты применяются организационные и технические меры: разграничение доступов, шифрование каналов связи, резервное копирование.',
        ],
      },
      {
        title: '7. Права пользователя',
        paragraphs: [
          'Пользователь может запросить информацию об обработке своих данных, их уточнение, блокирование или удаление, а также отозвать согласие на обработку. Для этого достаточно написать на terrnit.work@gmail.com.',
          'Запрос рассматривается в разумный срок, установленный применимым законодательством.',
        ],
      },
      {
        title: '8. Изменения политики',
        paragraphs: [
          'Политика может обновляться. Актуальная версия всегда размещена на этой странице с указанием даты обновления.',
        ],
      },
    ],
  },
  legalPage: {
    eyebrow: 'Правовая информация',
    title: 'Реквизиты',
    description: 'Данные самозанятого для договоров и закрывающих документов.',
    updated: 'Обновлено: 12 ноября 2026 года',
    sections: [
      {
        title: 'Исполнитель',
        paragraphs: [
          'Статус: самозанятый (плательщик налога на профессиональный доход).',
          `ФИО: ${ENV.legalName}`,
          `ИНН: ${ENV.taxId}`,
          'Регион постановки на учёт: Свердловская область.',
        ],
      },
      {
        title: 'Контакты',
        paragraphs: [
          'Email: terrnit.work@gmail.com',
          'Telegram: https://t.me/terrnit',
        ],
      },
      {
        title: 'Документы',
        paragraphs: [
          'Работаю по договору оказания услуг. По завершении этапа предоставляю акт и чек, сформированный в приложении «Мой налог».',
          'Формат и состав документов согласуются до начала работ.',
        ],
      },
      {
        title: 'Оплата',
        paragraphs: [
          'Оплата производится по этапам на основании выставленного счёта или по реквизитам, указанным в договоре. Все условия фиксируются письменно до старта проекта.',
        ],
      },
    ],
  },
}

const en: SiteContent = {
  brand: {
    name: 'Kotovsky',
    role: 'AI integrator',
    tagline: 'Putting AI to work in business processes',
    location: 'Yekaterinburg · working remotely',
    availability: 'Open to new projects',
  },
  meta: {
    home: {
      title: 'AI integration for business processes',
      description: 'AI integrator: audits, AI agents, RAG over knowledge bases, chat assistants and workflow automation. I help teams launch AI in their workflow and stay on support.',
    },
    services: {
      title: 'Services',
      description: 'AI audits and strategy, AI agents and integrations with CRM/1C/Telegram, RAG solutions, chat and voice assistants, n8n automation, team training.',
    },
    cases: {
      title: 'Cases',
      description: 'AI project examples: document data extraction, e-commerce product content generation and an assistant for project documentation.',
    },
    articles: {
      title: 'Articles',
      description: 'Notes on applying AI in business, software development and automation tools.',
    },
    about: {
      title: 'About',
      description: 'AI integrator with a product engineering background, helping companies turn routine work into automated processes.',
    },
    hire: {
      title: 'Hire',
      description: 'Looking for projects and teams where AI has to deliver measurable value: roles, working format and experience.',
    },
    contact: {
      title: 'Contact',
      description: 'Tell me about your task on Telegram, by email or through a short form. I will reply with a next step.',
    },
    policy: {
      title: 'Privacy policy',
      description: 'How this site processes personal data, cookies and web analytics.',
    },
    legal: {
      title: 'Legal details',
      description: 'Self-employed contractor details for contracts and invoices.',
    },
  },
  home: {
    hero: {
      eyebrow: 'AI integrator · development and consulting',
      title: 'I put AI into business processes and take an idea through to a working service',
      subtitle: 'I help teams automate routine work, extract data from documents and launch AI assistants that actually save time.',
      description: 'I cover the whole path: understanding the process, checking the data, building a prototype, shipping it to production and staying for support. One prompt will not replace a process.',
      primaryCta: 'Start a project',
      secondaryCta: 'Send an email',
      tertiaryCta: 'See cases',
      note: 'Working as a registered self-employed contractor. Small tasks start within days; full integrations usually take weeks.',
    },
    services: {
      title: 'How I can help',
      description: 'Six areas businesses most often need when starting with AI.',
      link: 'All services',
    },
    cases: {
      title: 'Selected cases',
      description: 'A small selection of projects. Numbers in descriptions are illustrative reference points, not guarantees.',
      link: 'All cases',
    },
    process: {
      title: 'How the work is structured',
      description: 'You always know what is happening and what you are paying for.',
      steps: [
        {
          title: 'Audit and goals',
          description: 'We review the process, data and constraints. We define a measurable outcome and decide where AI is actually needed.',
        },
        {
          title: 'Prototype',
          description: 'I build a minimal working version on real data. We check quality, cost and usage scenarios.',
        },
        {
          title: 'Integration',
          description: 'I connect the solution to your systems and set up monitoring, error handling and access control.',
        },
        {
          title: 'Support',
          description: 'I hand over documentation and train the team. Then I support the solution: model updates, metrics, improvements.',
        },
      ],
    },
    stack: {
      title: 'Stack and tools',
      description: 'Technology follows the task, not the other way around. These are the tools I use most.',
      groups: [
        { title: 'Models and AI', items: ['OpenAI', 'Anthropic', 'YandexGPT', 'GigaChat', 'Ollama', 'Whisper'] },
        { title: 'Orchestration', items: ['n8n', 'LangChain', 'LlamaIndex', 'MCP', 'RAG'] },
        { title: 'Backend and data', items: ['TypeScript', 'Python', 'Node.js', 'FastAPI', 'PostgreSQL', 'pgvector'] },
        { title: 'Integrations and frontend', items: ['Bitrix24', 'amoCRM', '1C', 'Telegram Bot API', 'Astro', 'Vue', 'React'] },
      ],
    },
    articles: {
      title: 'Latest articles',
      description: 'Writing about the practical side of AI adoption and software development.',
      link: 'All articles',
    },
    cta: {
      title: 'Shall we discuss your task?',
      description: 'Describe the process you want to automate. I will suggest a realistic next step and a timeline estimate.',
      telegram: 'Message on Telegram',
      email: 'Send an email',
      note: 'I usually reply within one business day.',
    },
  },
  servicesPage: {
    eyebrow: 'Services',
    title: 'AI that becomes part of the work, not just a slide',
    description: 'I help choose the right task, build the solution and bring it to production. From a short audit to a full end-to-end project.',
    listTitle: 'Areas of work',
    listDescription: 'Start with one service or combine several for your process.',
    faqTitle: 'Frequently asked questions',
    faqDescription: 'The questions I hear most often before a project starts.',
    faq: [
      {
        question: 'Where should we start with AI?',
        answer: 'With a short audit: we look at processes, data and time losses. Then we pick one or two scenarios with measurable impact and validate them in a prototype.',
      },
      {
        question: 'How long does a project take?',
        answer: 'An audit takes a few days. A prototype usually takes 1–3 weeks. A full integration with support can take several weeks to several months depending on data and systems.',
      },
      {
        question: 'How much does it cost?',
        answer: 'The cost depends on data complexity, the number of integrations and reliability requirements. After a short conversation I give a range per stage, with no hidden payments or mid-project surprises.',
      },
      {
        question: 'Can you work with our internal systems?',
        answer: 'Yes. I integrate with CRM, 1C, Bitrix24, amoCRM, Telegram and internal APIs. If there is no ready connector, I build an adapter and document how to maintain it.',
      },
      {
        question: 'What about data security?',
        answer: 'By default: minimal data transfer, access separation, action logging and the option to run the model locally or in your cloud. The exact scheme is agreed before the start.',
      },
      {
        question: 'Do we need to comply with data protection laws?',
        answer: 'If personal data is involved, yes. I build the process around applicable requirements: consent, retention periods, anonymisation and local data storage where required. Legal assessment is best done with your lawyer.',
      },
      {
        question: 'What happens after launch?',
        answer: 'I hand over documentation and train the team. Then we agree on support: quality monitoring, model and prompt updates, improvements for new scenarios.',
      },
      {
        question: 'Can you guarantee AI will never make mistakes?',
        answer: 'No, and nobody can. That is why I design solutions with checks, constraints and a clear human approval step. The goal is to reduce routine and risk, not to remove control.',
      },
    ],
    cta: {
      title: 'Not sure where to start?',
      description: 'Describe your process. I will point out where AI can help fastest and where it is better to skip it for now.',
      telegram: 'Discuss on Telegram',
      email: 'Send an email',
    },
  },
  casesPage: {
    eyebrow: 'Cases',
    title: 'Projects where AI solves a concrete problem',
    description: 'Examples: document data extraction, e-commerce content and project documentation. Result numbers are indicative.',
    allLabel: 'All',
    industryLabel: 'Industry',
    taskTypeLabel: 'Task type',
    clearLabel: 'Clear filters',
    resetLabel: 'Show all cases',
    emptyTitle: 'No cases match these filters',
    emptyDescription: 'Remove one of the filters.',
    moreLabel: 'Read more',
    cta: {
      title: 'Want a similar project?',
      description: 'Describe the task and the data you work with. I will suggest an approach and what to validate first.',
      telegram: 'Message on Telegram',
      email: 'Send an email',
    },
  },
  casePage: {
    back: 'Back to cases',
    industryLabel: 'Industry',
    taskTypeLabel: 'Task type',
    clientLabel: 'Client',
    stackLabel: 'Stack',
    resultsLabel: 'Illustrative results',
    resultsNote: 'Values are reference points from similar projects and are not a guarantee of results.',
    cta: {
      title: 'Let us discuss your scenario',
      description: 'Tell me which documents, data or processes you need to automate, and I will propose a first-stage plan.',
      telegram: 'Discuss on Telegram',
      email: 'Send an email',
    },
  },
  articlesPage: {
    eyebrow: 'Articles',
    title: 'Notes on development and AI adoption',
    description: 'Practice, breakdowns and guides without the news noise.',
    categoriesTitle: 'Categories',
    categories: {
      'all': 'All',
      'development': 'Development',
      'ai-for-business': 'AI for business',
      'case-studies': 'Cases and breakdowns',
      'guides': 'Guides',
    },
    emptyTitle: 'Nothing in this category yet',
    emptyDescription: 'Pick another category.',
  },
  articlePage: {
    back: 'Back to articles',
    categoryLabel: 'Category',
    related: 'Read next',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'An AI integrator who starts with the process',
    description: 'I help businesses apply AI where it actually saves time and money.',
    headline: 'My name is Gleb Kotovsky. I combine product engineering with practical AI adoption.',
    paragraphs: [
      'For several years I have been building web products and internal systems: from interfaces and design systems to integrations and process automation. That experience taught me the main lesson: AI is useful only when it is embedded in a real workflow.',
      'That is why I start not with model selection but with the question “where exactly is time lost”. Then I validate the hypothesis on data, build a prototype and bring it to a state the team actually uses.',
      'I work transparently: fixed stages, visible intermediate results and honest limitations. If a task can be solved without AI, I will say so.',
    ],
    focusTitle: 'Where I focus',
    focus: [
      {
        title: 'Documents and data',
        description: 'Extracting structured data from PDFs, scans, spreadsheets and chats. Quality checks and human confirmation for ambiguous cases.',
      },
      {
        title: 'Assistants inside work systems',
        description: 'RAG over knowledge bases, chatbots in Telegram and CRM, voice scenarios. With topic and access constraints.',
      },
      {
        title: 'Process automation',
        description: 'Connecting services via n8n and APIs: requests, reports, notifications, draft preparation and task routing.',
      },
    ],
    skillsTitle: 'Skills',
    skillsDescription: 'Technologies I work with regularly.',
    expertiseTitle: 'Expertise',
    expertiseDescription: 'Areas where I can help at the level of architecture and process.',
    howTitle: 'Working principles',
    howDescription: 'Three rules that keep an AI project from becoming an endless experiment.',
    howPoints: [
      'A measurable task and data first, technology choice second.',
      'A human stays in the loop where the cost of a mistake is high.',
      'The solution must be understandable to the team, not only to the developer.',
    ],
    hireTitle: 'Looking for an AI integrator?',
    hireDescription: 'Open to project work, part-time and permanent roles. Details are on the hiring page.',
    hireCta: 'Terms and experience',
    cta: {
      title: 'Shall we get acquainted?',
      description: 'Send a few words about your company and task. I will reply and suggest where to start.',
      telegram: 'Message on Telegram',
      email: 'Send an email',
    },
  },
  hirePage: {
    eyebrow: 'Hire',
    title: 'An AI integrator for your team',
    description: 'I help companies launch AI features and build processes around them. The working format, expectations and experience.',
    offerTitle: 'What I am looking for',
    offerDescription: 'I am interested in tasks where AI changes a real process, not just a demo.',
    offer: [
      { label: 'Role', value: 'AI integrator / AI engineer / AI adoption consultant' },
      { label: 'Format', value: 'Project work, part-time or full-time, remote' },
      { label: 'Team', value: 'A product or internal team with access to real data and processes' },
      { label: 'Tasks', value: 'Agents, RAG, data extraction, automation, team training' },
    ],
    lookingTitle: 'What matters in a project',
    looking: [
      'A clear business goal: what should become faster, cheaper or better.',
      'Access to data and to the people who know the process from the inside.',
      'Willingness to validate hypotheses with prototypes instead of discussing AI in a vacuum.',
      'Realistic expectations: AI reduces routine but does not remove control and responsibility.',
    ],
    experienceTitle: 'Work experience',
    experienceDescription: 'Only the essentials: company, role, period and stack.',
    totalLabel: 'Total experience in software development',
    stackTitle: 'Stack',
    stackDescription: 'Tools I use in projects.',
    stack: [
      { title: 'AI and data', items: ['OpenAI', 'Anthropic', 'YandexGPT', 'GigaChat', 'Ollama', 'pgvector', 'RAG'] },
      { title: 'Engineering', items: ['TypeScript', 'Python', 'Node.js', 'FastAPI', 'Astro', 'Vue', 'React'] },
      { title: 'Integrations and automation', items: ['n8n', 'Bitrix24', 'amoCRM', '1C', 'Telegram Bot API', 'Docker'] },
    ],
    cta: {
      title: 'Tell me about the role',
      description: 'Message me on Telegram: what the product is, what the task is and what format of collaboration you have in mind.',
      telegram: 'Message on Telegram',
      email: 'Send an email',
      note: 'I reply personally, no HR funnels.',
    },
  },
  contactPage: {
    eyebrow: 'Contact',
    title: 'Tell me about your task',
    description: 'Choose a convenient channel or fill in a short form.',
    intro: 'I will help you understand whether you need AI, which scenario to validate first and how long it may take. If the task is outside my scope, I will point you to someone who can help.',
    telegramTitle: 'Telegram',
    telegramDescription: 'The fastest way: briefly describe the task and attach data samples if you have them.',
    emailTitle: 'Email',
    emailDescription: 'For detailed descriptions, documents and official requests.',
    form: {
      title: 'Request by email',
      description: 'Fill in three fields and your email client will open with a ready message.',
      name: 'Name',
      namePlaceholder: 'How should I address you',
      company: 'Company',
      companyPlaceholder: 'Company name or “individual”',
      task: 'Task',
      taskPlaceholder: 'What do you want to automate or improve? What data and systems do you already have?',
      submit: 'Compose the email',
      hint: 'Nothing is sent automatically. If your email client is not configured, write by email or on Telegram.',
      required: 'Fill in all fields to continue.',
      subjectPrefix: 'Website request',
      bodyIntro: 'New request from the kotovsky website.',
    },
    note: 'Do not send confidential data in the first message. For details we can sign an NDA.',
  },
  policyPage: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    description: 'How personal data and web analytics data are processed on this site.',
    updated: 'Updated: November 12, 2026',
    sections: [
      {
        title: '1. General provisions',
        paragraphs: [
          'This policy describes what data the kotovsky site (the “Site”) collects, how it is used and what rights the user has. The policy applies to all pages of the Site.',
          `The personal data operator is self-employed ${ENV.legalNameEn}, tax ID ${ENV.taxIdEn}. Contact: terrnit.work@gmail.com.`,
        ],
      },
      {
        title: '2. What data is collected',
        paragraphs: [
          'Data the user provides voluntarily: name, company, task description and contact details when reaching out by email, Telegram or the request form.',
          'Anonymised web analytics data: visited pages, referral source, device and browser type, approximate region. This data does not identify a specific person.',
        ],
      },
      {
        title: '3. Why the data is needed',
        paragraphs: [
          'To reply to an enquiry, discuss the task, prepare a proposal and conclude a contract. The data is not used for mass mailings without separate consent.',
          'To improve the Site: analyse traffic and technical errors in an anonymised form.',
        ],
      },
      {
        title: '4. Cookies and analytics',
        paragraphs: [
          'The Site uses cookies to remember the selected theme and language and to operate web analytics systems. The user can disable cookies in the browser settings; some features may then behave differently.',
          'Yandex.Metrica is used for traffic analysis. The service processes anonymised data in accordance with its own privacy policy. Analytics data is not used to identify the user.',
        ],
      },
      {
        title: '5. Data sharing',
        paragraphs: [
          'Data is not shared with third parties except where necessary for the Site to operate (hosting, email and analytics services) or where required by law.',
          'When external AI services are used within a project, data transfer is agreed separately and formalised in a contract or NDA.',
        ],
      },
      {
        title: '6. Storage and protection',
        paragraphs: [
          'Data is stored no longer than necessary for the processing purpose or than required by law. Access is restricted. Organisational and technical measures are applied: access separation, encrypted communication channels and backups.',
        ],
      },
      {
        title: '7. User rights',
        paragraphs: [
          'The user may request information about the processing of their data, its correction, blocking or deletion, and withdraw consent to processing. To do so, write to terrnit.work@gmail.com.',
          'A request is reviewed within a reasonable period established by applicable law.',
        ],
      },
      {
        title: '8. Policy changes',
        paragraphs: [
          'The policy may be updated. The current version is always available on this page with the update date.',
        ],
      },
    ],
  },
  legalPage: {
    eyebrow: 'Legal',
    title: 'Legal details',
    description: 'Self-employed contractor details for contracts and closing documents.',
    updated: 'Updated: November 12, 2026',
    sections: [
      {
        title: 'Contractor',
        paragraphs: [
          'Status: self-employed (professional income tax payer).',
          `Full name: ${ENV.legalNameEn}`,
          `Tax ID: ${ENV.taxIdEn}`,
          'Registration region: Sverdlovsk Oblast, Russia.',
        ],
      },
      {
        title: 'Contacts',
        paragraphs: [
          'Email: terrnit.work@gmail.com',
          'Telegram: https://t.me/terrnit',
        ],
      },
      {
        title: 'Documents',
        paragraphs: [
          'Work is performed under a service agreement. At the end of a stage I provide an acceptance act and a receipt generated in the “My Tax” app.',
          'The format and composition of documents are agreed before work starts.',
        ],
      },
      {
        title: 'Payment',
        paragraphs: [
          'Payment is made by stages based on an issued invoice or according to the details in the contract. All terms are fixed in writing before the project starts.',
        ],
      },
    ],
  },
}

export const siteContent: Record<SiteLang, SiteContent> = { ru, en }

export function getSiteContent(lang: string = 'ru'): SiteContent {
  return lang === 'en' ? en : ru
}
