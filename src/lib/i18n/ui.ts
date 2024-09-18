// | "zh" | "nl" | "ko" | "da"

export type LanguageLocales = 'en' | 'ru'

export const languages: Record<LanguageLocales, string> = {
  en: 'English',
  ru: 'Русский',
//   ko: '한국어',
//   zh: '简体中文',
} as const

export type Language = keyof typeof languages

export const defaultLang = 'en'

export const ui = {
  en: {
	'date_locale': 'en-US',
	'reading_time': 'min read',

    'home.title': 'Home',
    'home.description':
      "I'm passionate about bringing ideas to life through code and technology. Whether it's building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I'm equally enthusiastic about teaching and sharing my expertise with others.",

    'home.heading': 'Gleb Kotovsky (燕智, yànzhì)',
    'home.legenda': "燕 (yàn) - 'swallow (bird)', 智 (zhì) - 'wisdom, knowledge, intelligence'.",
    'home.paragraph':
      "I'm passionate about bringing ideas to life through code and technology. Whether it's building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I'm equally enthusiastic about teaching and sharing my expertise with others.",
    'home.cta.explore': 'Explore projects',
    'home.cta.about': 'About me',

    'home.latest_posts.h5': 'Latest posts',
    'home.latest_posts.link': 'See all posts',

    'home.recent_projects.h5': 'Recent projects',
    'home.recent_projects.link': 'See all projects',

    'articles.title': 'Articles',
    'articles.description':
      'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order',

    'articles.heading': 'Articles',
    'articles.paragraph':
      'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order',

    'articles.back_to': 'Back to articles',

    'about.title': 'About',
    'about.description':
      "I'm passionate about bringing ideas to life through code and technology. Whether it's building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I'm equally enthusiastic about teaching and sharing my expertise with others.",

    'about.heading': 'About me',
    'about.paragraph':
      "I'm passionate about bringing ideas to life through code and technology. Whether it's building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I'm equally enthusiastic about teaching and sharing my expertise with others.",

    'about.bio.heading': 'Bio',

    'about.experience.heading': 'Experiences',

    'about.hard_skills.heading': 'Hard skills',
    'about.hard_skills.paragraph':
      'In my day-to-day work, I’m using a variety of technologies, including but not limited to the following:',
    'about.expertise.heading': 'Expertise',
    'about.languages.heading': 'Languages',
    'about.languages.paragraph': 'The languages which i love and trying to learn more',

    'projects.title': 'Projects',
    'projects.description': 'Projects that I created or maintaining.',

    'projects.heading': 'Projects',

    'projects.back_to': 'Back to projects',

    'contact.title': 'Contact',
    'contact.description': 'Feel free to get in touch with me',

    'contact.heading': "Let's Connect",
    'contact.paragraph':
      'If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.',

    'uses.title': 'Uses',
    'uses.description': 'Software I use, gadgets I love, and other things I recommend',

    'uses.heading': 'My uses',
    'uses.paragraph': 'Software I use, gadgets I love, and other things I recommend',

    'uses.workstation.heading': 'Workstation',
    'uses.devtools.heading': 'Devtools',
    'uses.other_software.heading': 'Other software',
    'uses.misc.heading': 'Misc',

    'uses.back_to': 'Back to uses',

    '404.title': '404',
    '404.description': 'Page not found',

    '404.heading': 'Page not found',
    '404.paragraph': "Sorry, that page doesn't exist.",

    '404.back_to': 'Go back',

    '505.title': '505',
    '505.description': 'Something went wrong((',

    'navigation.elsewhere': 'Elsewhere',
    'navigation.select_language': 'Select a language',
    'navigation.select_theme': 'Select a theme',
    'navigation.theme_light': 'Light',
    'navigation.theme_dark': 'Dark',
    'navigation.theme_system': 'System',

    'navigation.home': 'Home',
    'navigation.about': 'About',
    'navigation.articles': 'Articles',
    'navigation.projects': 'Projects',
    'navigation.contact': 'Contact',
    'navigation.friends': 'Friends',
    'navigation.photos': 'Photos',
    'navigation.playlist': 'Playlist',
    'navigation.uses': 'Uses',

    'layout.back_to_top': 'Back to top',

    'stack.title': 'Stack',
  },
  ru: {
	'date_locale': 'ru-RU',
	'reading_time': 'минут читать',

    'home.title': 'Главная',
    'home.description':
      'Я страстно люблю воплощать идеи в жизнь с помощью кода и технологий. Будь то создание веб-приложений, дизайна, анимаций или десктопных приложений, я люблю процесс создания и обмена знаниями. Мне нравится погружаться в новые темы и знания, и я с таким же энтузиазмом преподаю и делюсь своими знаниями с другими.',

    'home.heading': 'Глеб Котовский (燕智, yànzhì)',
    'home.legenda': '燕 (yàn) - «ласточка (птица)», 智 (zhì) - «мудрость, знание, ум».',
    'home.paragraph':
      'Я страстно люблю воплощать идеи в жизнь с помощью кода и технологий. Будь то создание веб-приложений, дизайна, анимаций или десктопных приложений, я люблю процесс создания и обмена знаниями. Мне нравится погружаться в новые темы и знания, и я с таким же энтузиазмом преподаю и делюсь своими знаниями с другими.',

    'home.cta.explore': 'Больше моих работ',
    'home.cta.about': 'Обо мне',

    'home.latest_posts.h5': 'Последние посты',
    'home.latest_posts.link': 'Все посты',

    'home.recent_projects.h5': 'Последние проекты',
    'home.recent_projects.link': 'Все проекты',

    'articles.title': 'Статьи',
    'articles.description':
      'Все мои размышления об IT, UI, дизайне продуктов и многом другом, собранные в хронологическом порядке',

    'articles.heading': 'Статьи',
    'articles.paragraph':
      'Все мои размышления об IT, UI, дизайне продуктов и многом другом, собранные в хронологическом порядке',

    'articles.back_to': 'Назад к статьям',

    'about.title': 'Обо мне',
    'about.description':
      'Я страстно люблю воплощать идеи в жизнь с помощью кода и технологий. Будь то создание веб-приложений, дизайна, анимаций или десктопных приложений, я люблю процесс создания и обмена знаниями. Мне нравится погружаться в новые темы и знания, и я с таким же энтузиазмом преподаю и делюсь своими знаниями с другими.',
    'about.heading': 'Обо мне',
    'about.paragraph':
      'Я страстно люблю воплощать идеи в жизнь с помощью кода и технологий. Будь то создание веб-приложений, дизайна, анимаций или десктопных приложений, я люблю процесс создания и обмена знаниями. Мне нравится погружаться в новые темы и знания, и я с таким же энтузиазмом преподаю и делюсь своими знаниями с другими.',

    'about.bio.heading': 'Биография',

    'about.experience.heading': 'Опыт работы',

    'about.hard_skills.heading': 'Хард-скиллы',
    'about.hard_skills.paragraph':
      'В своей повседневной работе я использую различные технологии, включая, в частности, следующие:',
    'about.expertise.heading': 'Экспертиза',
    'about.languages.heading': 'Языки',
    'about.languages.paragraph': 'Языки, которые я люблю и хочу познать больше',

    'projects.title': 'Проекты',
    'projects.description': 'Проекты, которые я создал или поддерживаю.',

    'projects.heading': 'Проекты',

    'projects.back_to': 'Назад к проектам',

    'contact.title': 'Контакты',
    'contact.description':
      'Если есть вопросы, предложения, пожелания или просто хотите поговорить, то не стесняйтесь писать мне',

    'contact.heading': 'Контакты',
    'contact.paragraph':
      'Если вы хотите связаться со мной по какому-то вопросу или просто пообщаться, то со мной можно связаться в соц. сетях или по почте.',

    'uses.title': 'Мои инструменты',
    'uses.description': 'Приложухи, которые я использую, гаджеты, которые я люблю, и другие вещи, которые я рекомендую',

    'uses.heading': 'Мои инструменты',
    'uses.paragraph': 'Приложухи, которые я использую, гаджеты, которые я люблю, и другие вещи, которые я рекомендую',

    'uses.workstation.heading': 'Рабочее место',
    'uses.devtools.heading': 'Dev-инструменты',
    'uses.other_software.heading': 'Другие программы',
    'uses.misc.heading': 'Разное',

    'uses.back_to': 'Обратно в инструменты',

    '404.title': '404',
    '404.description': 'Страница не найдена',

    '404.heading': 'Страница не найдена',
    '404.paragraph': 'Кажись такой страницы не существует..',

    '404.back_to': 'Вернутся обратно',

    '505.title': '505',
    '505.description': 'Блен, что то пошло не так((',

    'navigation.elsewhere': 'Другие ссылки',
    'navigation.select_language': 'Выберите язык',
    'navigation.select_theme': 'Выберите тему',
    'navigation.theme_light': 'Светлая',
    'navigation.theme_dark': 'Темная',
    'navigation.theme_system': 'Системная',

    'navigation.home': 'Главная',
    'navigation.about': 'Обо мне',
    'navigation.articles': 'Статьи',
    'navigation.projects': 'Проекты',
    'navigation.contact': 'Контакты',
    'navigation.friends': 'Друзья',
    'navigation.photos': 'Галерея',
    'navigation.playlist': 'Плейлист',
    'navigation.uses': 'Мои инструменты',

    'layout.back_to_top': 'Наверх',

    'stack.title': 'Стек',
  },
//   ko: {
// 	'date_locale': 'ko-KR',
//   },
//   zh: {
// 	'date_locale': 'zh-CN',
//   }
} satisfies Record<Language, { [key: string]: string }>

export type UiScheme = keyof (typeof ui)[typeof defaultLang]
