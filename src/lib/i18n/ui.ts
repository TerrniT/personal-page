export type LanguageLocales = 'en' | 'ru' | 'ko' | 'zh' | 'nl' | 'da'

export const languages: Record<LanguageLocales, string> = {
  en: 'English',
  ru: 'Русский',
  ko: '한국어',
  zh: '简体中文',
  nl: 'Nederlands',
  da: 'Dansk',
} as const

export type Language = keyof typeof languages

export const defaultLang = 'en'

export const ui = {
  en: {
    'date_locale': 'en-US',
    'reading_time': 'min read',

    'home.title': 'Home',
    'home.description':
      'I\'m passionate about bringing ideas to life through code and technology. Whether it\'s building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I\'m equally enthusiastic about teaching and sharing my expertise with others.',

    'home.heading': 'Gleb Kotovsky (燕智, yànzhì)',
    'home.legenda': '燕 (yàn) - \'swallow (bird)\', 智 (zhì) - \'wisdom, knowledge, intelligence\'.',
    'home.paragraph':
      'I\'m passionate about bringing ideas to life through code and technology. Whether it\'s building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I\'m equally enthusiastic about teaching and sharing my expertise with others.',
    'home.cta.explore': 'Explore projects',
    'home.cta.about': 'About me',

    'home.latest_articles.h5': 'Latest posts',
    'home.latest_articles.link': 'See all posts',

    'home.latest_notes.h5': 'Latest notes',
    'home.latest_notes.link': 'See all notes',

    'home.recent_projects.h5': 'Recent projects',
    'home.recent_projects.link': 'See all projects',

    'articles.title': 'Articles',
    'articles.description':
      'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order',

    'articles.heading': 'Articles',
    'articles.paragraph':
      'All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order',

    'articles.back_to': 'Back to articles',
    'articles.author': 'Author',
    'articles.published': 'Published at',

    'about.title': 'About',
    'about.description':
      'I\'m passionate about bringing ideas to life through code and technology. Whether it\'s building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I\'m equally enthusiastic about teaching and sharing my expertise with others.',

    'about.heading': 'About me',
    'about.paragraph':
      'I\'m passionate about bringing ideas to life through code and technology. Whether it\'s building websites, apps, or software, I love the process of creating and sharing knowledge. I enjoy immersing myself in new topics and experiences, and I\'m equally enthusiastic about teaching and sharing my expertise with others.',

    'about.bio.heading': 'Bio',

    'about.experience.heading': 'Experiences',
    'about.experience.total.heading': 'Total experience',

    'about.hard_skills.heading': 'Hard skills',
    'about.hard_skills.paragraph':
      'In my day-to-day work, I\'m using a variety of technologies, including but not limited to the following:',
    'about.expertise.heading': 'Expertise',
    'about.languages.heading': 'Languages',
    'about.languages.paragraph': 'The languages which i love and trying to learn more',

    'projects.title': 'Projects',
    'projects.description': 'Projects that I created or maintaining.',

    'projects.heading': 'Projects',

    'projects.back_to': 'Back to projects',

    'people.title': 'People',
    'people.description': 'Welcome to the vibrant community of friends and colleagues who arean integral part of my journey! Here you can discover a diverse network of connections, each representing unique perspectives, talents, and passions.',

    'people.heading': 'People',
    'people.paragraph': 'Welcome to the vibrant community of friends and colleagues who arean integral part of my journey! Here you can discover a diverse network of connections, each representing unique perspectives, talents, and passions.',

    'people.back_to': 'Back to People',

    'people.cta': 'Would you like to get in here too ? Lets get to know each other, here are my links:',
    'people.cta_link': 'Here',

    'people.notes.h5': 'Notes',
    'people.notes.fallback': 'No notes yet',

    'people.articles.h5': 'Articles',
    'people.articles.fallback': 'No articles yet',

    'people.links.h5': 'Links',

    'contact.title': 'Contact',
    'contact.description': 'Feel free to get in touch with me',

    'contact.heading': 'Let\'s Connect',
    'contact.paragraph': 'If you want to get in touch with me about something or just to say hi, reach out on social media or send me an email.',

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
    '404.paragraph': 'Sorry, that page doesn\'t exist.',

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
    'navigation.people': 'People',
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

    'home.latest_articles.h5': 'Последние посты',
    'home.latest_articles.link': 'Все посты',

    'home.latest_notes.h5': 'Последние заметки',
    'home.latest_notes.link': 'Все заметки',

    'home.recent_projects.h5': 'Последние проекты',
    'home.recent_projects.link': 'Все проекты',

    'articles.title': 'Статьи',
    'articles.description':
      'Все мои размышления об IT, UI, дизайне продуктов и многом другом, собранные в хронологическом порядке',

    'articles.heading': 'Статьи',
    'articles.paragraph':
      'Все мои размышления об IT, UI, дизайне продуктов и многом другом, собранные в хронологическом порядке',

    'articles.back_to': 'Назад к статьям',
    'articles.author': 'Автор',
    'articles.published': 'Опубликовано',

    'about.title': 'Обо мне',
    'about.description':
      'Я страстно люблю воплощать идеи в жизнь с помощью кода и технологий. Будь то создание веб-приложений, дизайна, анимаций или десктопных приложений, я люблю процесс создания и обмена знаниями. Мне нравится погружаться в новые темы и знания, и я с таким же энтузиазмом преподаю и делюсь своими знаниями с другими.',
    'about.heading': 'Обо мне',
    'about.paragraph':
      'Я страстно люблю воплощать идеи в жизнь с помощью кода и технологий. Будь то создание веб-приложений, дизайна, анимаций или десктопных приложений, я люблю процесс создания и обмена знаниями. Мне нравится погружаться в новые темы и знания, и я с таким же энтузиазмом преподаю и делюсь своими знаниями с другими.',

    'about.bio.heading': 'Биография',

    'about.experience.heading': 'Опыт работы',
    'about.experience.total.heading': 'Общий опыт',

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

    'people.title': 'Люди',
    'people.description': 'Добро пожаловать в мое яркое сообщество друзей и коллег, которые являются неотъемлемой частью моего жизненного пути! Здесь вы можете увидеть моих знакомых, каждый из которых представляет собой уникальные перспективы, таланты и увлечения',
    'people.heading': 'Люди',
    'people.paragraph': 'Добро пожаловать в мое яркое сообщество друзей и коллег, которые являются неотъемлемой частью моего жизненного пути! Здесь вы можете увидеть моих знакомых, каждый из которых представляет собой уникальные перспективы, таланты и увлечения',

    'people.back_to': 'Назад к людям',

    'people.cta': 'Вы хотите тоже попасть сюда? Давайте познакомимся поближе, вот мои контакты:',
    'people.cta_link': 'Здесь',

    'people.notes.h5': 'Заметки',
    'people.notes.fallback': 'Пока нет заметок',

    'people.articles.h5': 'Статьи',
    'people.articles.fallback': 'Пока нет статей',

    'people.links.h5': 'Ссылки',

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
    'navigation.people': 'Люди',
    'navigation.photos': 'Галерея',
    'navigation.playlist': 'Плейлист',
    'navigation.uses': 'Мои инструменты',

    'layout.back_to_top': 'Наверх',

    'stack.title': 'Стек',
  },
  ko: {
    'date_locale': 'ko-KR',
    'reading_time': '분 읽기',

    'home.title': '홈',
    'home.description':
      '저는 코드와 기술을 통해 아이디어를 실현하는 것을 열정적으로 추구합니다. 웹사이트, 앱, 소프트웨어를 구축하는 것이든, 저는 창작과 지식 공유의 과정을 사랑합니다. 새로운 주제와 경험에 몰입하는 것을 즐기며, 다른 사람들과 제 전문성을 가르치고 공유하는 것도 열정적으로 추구합니다.',

    'home.heading': '글렙 코토브스키 (燕智, yànzhì)',
    'home.legenda': '燕 (yàn) - \'제비\', 智 (zhì) - \'지혜, 지식, 지능\'.',
    'home.paragraph':
      '저는 코드와 기술을 통해 아이디어를 실현하는 것을 열정적으로 추구합니다. 웹사이트, 앱, 소프트웨어를 구축하는 것이든, 저는 창작과 지식 공유의 과정을 사랑합니다. 새로운 주제와 경험에 몰입하는 것을 즐기며, 다른 사람들과 제 전문성을 가르치고 공유하는 것도 열정적으로 추구합니다.',

    'home.cta.explore': '프로젝트 살펴보기',
    'home.cta.about': '소개',

    'home.latest_articles.h5': '최근 게시물',
    'home.latest_articles.link': '모든 게시물 보기',

    'home.latest_notes.h5': '최근 노트',
    'home.latest_notes.link': '모든 노트 보기',

    'home.recent_projects.h5': '최근 프로젝트',
    'home.recent_projects.link': '모든 프로젝트 보기',

    'articles.title': '게시물',
    'articles.description': '프로그래밍, 사용자 인터페이스, 제품 디자인 등에 대한 제 생각들을 시간순으로 모았습니다',

    'articles.heading': '게시물',
    'articles.paragraph': '프로그래밍, 사용자 인터페이스, 제품 디자인 등에 대한 제 생각들을 시간순으로 모았습니다',

    'articles.back_to': '게시물로 돌아가기',
    'articles.author': '작성자',
    'articles.published': '발행일',

    'about.title': '소개',
    'about.description':
      '저는 코드와 기술을 통해 아이디어를 실현하는 것을 열정적으로 추구합니다. 웹사이트, 앱, 소프트웨어를 구축하는 것이든, 저는 창작과 지식 공유의 과정을 사랑합니다. 새로운 주제와 경험에 몰입하는 것을 즐기며, 다른 사람들과 제 전문성을 가르치고 공유하는 것도 열정적으로 추구합니다.',

    'about.heading': '소개',
    'about.paragraph':
      '저는 코드와 기술을 통해 아이디어를 실현하는 것을 열정적으로 추구합니다. 웹사이트, 앱, 소프트웨어를 구축하는 것이든, 저는 창작과 지식 공유의 과정을 사랑합니다. 새로운 주제와 경험에 몰입하는 것을 즐기며, 다른 사람들과 제 전문성을 가르치고 공유하는 것도 열정적으로 추구합니다.',

    'about.bio.heading': '약력',

    'about.experience.heading': '경력',
    'about.experience.total.heading': '총 경력',

    'about.hard_skills.heading': '하드 스킬',
    'about.hard_skills.paragraph': '일상 업무에서 다음과 같은 다양한 기술을 사용합니다:',
    'about.expertise.heading': '전문 분야',
    'about.languages.heading': '언어',
    'about.languages.paragraph': '제가 사랑하고 더 배우고자 하는 언어들',

    'projects.title': '프로젝트',
    'projects.description': '제가 만들거나 유지보수하는 프로젝트들입니다.',

    'projects.heading': '프로젝트',

    'projects.back_to': '프로젝트로 돌아가기',

    'people.title': '사람들',
    'people.description': '제 여정의 중요한 부분이 되어준 친구들과 동료들의 활기찬 커뮤니티에 오신 것을 환영합니다! 여기서는 각자의 독특한 관점, 재능, 열정을 가진 다양한 네트워크를 발견하실 수 있습니다.',

    'people.heading': '사람들',
    'people.paragraph': '제 여정의 중요한 부분이 되어준 친구들과 동료들의 활기찬 커뮤니티에 오신 것을 환영합니다! 여기서는 각자의 독특한 관점, 재능, 열정을 가진 다양한 네트워크를 발견하실 수 있습니다.',

    'people.back_to': '사람들로 돌아가기',

    'people.cta': '여기에 참여하고 싶으신가요? 서로 알아가봅시다. 제 링크는 다음과 같습니다:',
    'people.cta_link': '여기',

    'people.notes.h5': '노트',
    'people.notes.fallback': '아직 노트가 없습니다',

    'people.articles.h5': '게시물',
    'people.articles.fallback': '아직 게시물이 없습니다',

    'people.links.h5': '링크',

    'contact.title': '연락처',
    'contact.description': '언제든지 연락해 주세요',

    'contact.heading': '연락하기',
    'contact.paragraph': '무언가에 대해 연락하고 싶거나 그냥 인사를 나누고 싶으시다면, 소셜 미디어나 이메일로 연락해 주세요.',

    'uses.title': '사용 도구',
    'uses.description': '제가 사용하는 소프트웨어, 좋아하는 가제트, 그리고 추천하는 다른 것들',

    'uses.heading': '제가 사용하는 도구들',
    'uses.paragraph': '제가 사용하는 소프트웨어, 좋아하는 가제트, 그리고 추천하는 다른 것들',

    'uses.workstation.heading': '작업 환경',
    'uses.devtools.heading': '개발 도구',
    'uses.other_software.heading': '기타 소프트웨어',
    'uses.misc.heading': '기타',

    'uses.back_to': '도구로 돌아가기',

    '404.title': '404',
    '404.description': '페이지를 찾을 수 없습니다',

    '404.heading': '페이지를 찾을 수 없습니다',
    '404.paragraph': '죄송합니다. 해당 페이지가 존재하지 않습니다.',

    '404.back_to': '돌아가기',

    '505.title': '505',
    '505.description': '문제가 발생했습니다((',

    'navigation.elsewhere': '다른 곳',
    'navigation.select_language': '언어 선택',
    'navigation.select_theme': '테마 선택',
    'navigation.theme_light': '라이트',
    'navigation.theme_dark': '다크',
    'navigation.theme_system': '시스템',

    'navigation.home': '홈',
    'navigation.about': '소개',
    'navigation.articles': '게시물',
    'navigation.projects': '프로젝트',
    'navigation.contact': '연락처',
    'navigation.people': '사람들',
    'navigation.photos': '사진',
    'navigation.playlist': '재생목록',
    'navigation.uses': '사용 도구',

    'layout.back_to_top': '맨 위로',

    'stack.title': '기술 스택',
  },
  zh: {
    'date_locale': 'zh-CN',
    'reading_time': '分钟阅读',

    'home.title': '首页',
    'home.description':
      '我热衷于通过代码和技术将想法变为现实。无论是构建网站、应用程序还是软件，我都热爱创造和分享知识的过程。我喜欢沉浸在新主题和体验中，同样热衷于教授和与他人分享我的专业知识。',

    'home.heading': '格列布·科托夫斯基 (燕智, yànzhì)',
    'home.legenda': '燕 (yàn) - \'燕子\', 智 (zhì) - \'智慧、知识、智力\'.',
    'home.paragraph':
      '我热衷于通过代码和技术将想法变为现实。无论是构建网站、应用程序还是软件，我都热爱创造和分享知识的过程。我喜欢沉浸在新主题和体验中，同样热衷于教授和与他人分享我的专业知识。',

    'home.cta.explore': '探索项目',
    'home.cta.about': '关于我',

    'home.latest_articles.h5': '最新文章',
    'home.latest_articles.link': '查看所有文章',

    'home.latest_notes.h5': '最新笔记',
    'home.latest_notes.link': '查看所有笔记',

    'home.recent_projects.h5': '最近项目',
    'home.recent_projects.link': '查看所有项目',

    'articles.title': '文章',
    'articles.description': '我关于编程、用户界面、产品设计等的长篇思考，按时间顺序收集',

    'articles.heading': '文章',
    'articles.paragraph': '我关于编程、用户界面、产品设计等的长篇思考，按时间顺序收集',

    'articles.back_to': '返回文章',
    'articles.author': '作者',
    'articles.published': '发布时间',

    'about.title': '关于',
    'about.description':
      '我热衷于通过代码和技术将想法变为现实。无论是构建网站、应用程序还是软件，我都热爱创造和分享知识的过程。我喜欢沉浸在新主题和体验中，同样热衷于教授和与他人分享我的专业知识。',

    'about.heading': '关于我',
    'about.paragraph':
      '我热衷于通过代码和技术将想法变为现实。无论是构建网站、应用程序还是软件，我都热爱创造和分享知识的过程。我喜欢沉浸在新主题和体验中，同样热衷于教授和与他人分享我的专业知识。',

    'about.bio.heading': '个人简介',

    'about.experience.heading': '工作经验',
    'about.experience.total.heading': '总经验',

    'about.hard_skills.heading': '硬技能',
    'about.hard_skills.paragraph': '在日常工作中，我使用各种技术，包括但不限于以下内容：',
    'about.expertise.heading': '专业领域',
    'about.languages.heading': '语言',
    'about.languages.paragraph': '我热爱并不断学习的语言',

    'projects.title': '项目',
    'projects.description': '我创建或维护的项目。',

    'projects.heading': '项目',

    'projects.back_to': '返回项目',

    'people.title': '人物',
    'people.description': '欢迎来到我充满活力的朋友和同事社区，他们是我旅程中不可或缺的一部分！在这里，您可以发现一个多元化的网络，每个人都代表着独特的视角、才能和热情。',

    'people.heading': '人物',
    'people.paragraph': '欢迎来到我充满活力的朋友和同事社区，他们是我旅程中不可或缺的一部分！在这里，您可以发现一个多元化的网络，每个人都代表着独特的视角、才能和热情。',

    'people.back_to': '返回人物',

    'people.cta': '您也想加入这里吗？让我们互相了解，这是我的链接：',
    'people.cta_link': '这里',

    'people.notes.h5': '笔记',
    'people.notes.fallback': '暂无笔记',

    'people.articles.h5': '文章',
    'people.articles.fallback': '暂无文章',

    'people.links.h5': '链接',

    'contact.title': '联系',
    'contact.description': '随时联系我',

    'contact.heading': '让我们联系',
    'contact.paragraph': '如果您想就某事联系我或只是想打个招呼，请通过社交媒体或发送电子邮件与我联系。',

    'uses.title': '使用工具',
    'uses.description': '我使用的软件、喜爱的设备和其他推荐',

    'uses.heading': '我的使用工具',
    'uses.paragraph': '我使用的软件、喜爱的设备和其他推荐',

    'uses.workstation.heading': '工作站',
    'uses.devtools.heading': '开发工具',
    'uses.other_software.heading': '其他软件',
    'uses.misc.heading': '其他',

    'uses.back_to': '返回工具',

    '404.title': '404',
    '404.description': '页面未找到',

    '404.heading': '页面未找到',
    '404.paragraph': '抱歉，该页面不存在。',

    '404.back_to': '返回',

    '505.title': '505',
    '505.description': '出错了((',

    'navigation.elsewhere': '其他',
    'navigation.select_language': '选择语言',
    'navigation.select_theme': '选择主题',
    'navigation.theme_light': '浅色',
    'navigation.theme_dark': '深色',
    'navigation.theme_system': '系统',

    'navigation.home': '首页',
    'navigation.about': '关于',
    'navigation.articles': '文章',
    'navigation.projects': '项目',
    'navigation.contact': '联系',
    'navigation.people': '人物',
    'navigation.photos': '照片',
    'navigation.playlist': '播放列表',
    'navigation.uses': '使用工具',

    'layout.back_to_top': '返回顶部',

    'stack.title': '技术栈',
  },
  nl: {
    'date_locale': 'nl-NL',
    'reading_time': 'min lezen',

    'home.title': 'Home',
    'home.description':
      'Ik ben gepassioneerd over het tot leven brengen van ideeën door middel van code en technologie. Of het nu gaat om het bouwen van websites, apps of software, ik hou van het proces van creëren en kennis delen. Ik geniet ervan om me onder te dompelen in nieuwe onderwerpen en ervaringen, en ik ben net zo enthousiast over het lesgeven en delen van mijn expertise met anderen.',

    'home.heading': 'Gleb Kotovsky (燕智, yànzhì)',
    'home.legenda': '燕 (yàn) - \'zwaluw (vogel)\', 智 (zhì) - \'wijsheid, kennis, intelligentie\'.',
    'home.paragraph':
      'Ik ben gepassioneerd over het tot leven brengen van ideeën door middel van code en technologie. Of het nu gaat om het bouwen van websites, apps of software, ik hou van het proces van creëren en kennis delen. Ik geniet ervan om me onder te dompelen in nieuwe onderwerpen en ervaringen, en ik ben net zo enthousiast over het lesgeven en delen van mijn expertise met anderen.',

    'home.cta.explore': 'Verken projecten',
    'home.cta.about': 'Over mij',

    'home.latest_articles.h5': 'Laatste berichten',
    'home.latest_articles.link': 'Bekijk alle berichten',

    'home.latest_notes.h5': 'Laatste notities',
    'home.latest_notes.link': 'Bekijk alle notities',

    'home.recent_projects.h5': 'Recente projecten',
    'home.recent_projects.link': 'Bekijk alle projecten',

    'articles.title': 'Artikelen',
    'articles.description': 'Al mijn uitgebreide gedachten over programmeren, gebruikersinterfaces, productontwerp en meer, chronologisch verzameld',

    'articles.heading': 'Artikelen',
    'articles.paragraph': 'Al mijn uitgebreide gedachten over programmeren, gebruikersinterfaces, productontwerp en meer, chronologisch verzameld',

    'articles.back_to': 'Terug naar artikelen',
    'articles.author': 'Auteur',
    'articles.published': 'Gepubliceerd op',

    'about.title': 'Over',
    'about.description':
      'Ik ben gepassioneerd over het tot leven brengen van ideeën door middel van code en technologie. Of het nu gaat om het bouwen van websites, apps of software, ik hou van het proces van creëren en kennis delen. Ik geniet ervan om me onder te dompelen in nieuwe onderwerpen en ervaringen, en ik ben net zo enthousiast over het lesgeven en delen van mijn expertise met anderen.',

    'about.heading': 'Over mij',
    'about.paragraph':
      'Ik ben gepassioneerd over het tot leven brengen van ideeën door middel van code en technologie. Of het nu gaat om het bouwen van websites, apps of software, ik hou van het proces van creëren en kennis delen. Ik geniet ervan om me onder te dompelen in nieuwe onderwerpen en ervaringen, en ik ben net zo enthousiast over het lesgeven en delen van mijn expertise met anderen.',

    'about.bio.heading': 'Biografie',

    'about.experience.heading': 'Ervaring',
    'about.experience.total.heading': 'Totale ervaring',

    'about.hard_skills.heading': 'Hard skills',
    'about.hard_skills.paragraph': 'In mijn dagelijkse werk gebruik ik verschillende technologieën, waaronder men niet beperkt tot:',
    'about.expertise.heading': 'Expertise',
    'about.languages.heading': 'Talen',
    'about.languages.paragraph': 'De talen die ik leuk vind en probeer te leren',

    'projects.title': 'Projecten',
    'projects.description': 'Projecten die ik heb gemaakt of onderhoud.',

    'projects.heading': 'Projecten',

    'projects.back_to': 'Terug naar projecten',

    'people.title': 'Mensen',
    'people.description': 'Welkom in de levendige gemeenschap van vrienden en collega\'s die een integraal onderdeel zijn van mijn reis! Hier kun je een divers netwerk ontdekken, elk met unieke perspectieven, talenter en passies.',

    'people.heading': 'Mensen',
    'people.paragraph': 'Welkom in de levendige gemeenschap van vrienden en collega\'s die een integraal onderdeel zijn van mijn reis! Hier kun je een divers netwerk ontdekken, elk met unieke perspectieven, talenter en passies.',

    'people.back_to': 'Terug naar mensen',

    'people.cta': 'Wil je hier ook bij horen? Laten we elkaar leren kennen, hier zijn mijn links:',
    'people.cta_link': 'Hier',

    'people.notes.h5': 'Notities',
    'people.notes.fallback': 'Nog geen notities',

    'people.articles.h5': 'Artikelen',
    'people.articles.fallback': 'Nog geen artikelen',

    'people.links.h5': 'Links',

    'contact.title': 'Contact',
    'contact.description': 'Neem gerust contact met me op',

    'contact.heading': 'Laten we contact maken',
    'contact.paragraph': 'Als je contact met me wilt opnemen over iets of gewoon hallo wilt zeggen, bereik me via sociale media of stuur me een e-mail.',

    'uses.title': 'Gebruik',
    'uses.description': 'Software die ik gebruik, gadgets waar ik van hou, en andere dingen die ik aanbeveel',

    'uses.heading': 'Mijn gebruik',
    'uses.paragraph': 'Software die ik gebruik, gadgets waar ik van hou, en andere dingen die ik aanbeveel',

    'uses.workstation.heading': 'Werkstation',
    'uses.devtools.heading': 'Ontwikkeltools',
    'uses.other_software.heading': 'Andere software',
    'uses.misc.heading': 'Diversen',

    'uses.back_to': 'Terug naar gebruik',

    '404.title': '404',
    '404.description': 'Pagina niet gevonden',

    '404.heading': 'Pagina niet gevonden',
    '404.paragraph': 'Sorry, deze pagina bestaat niet.',

    '404.back_to': 'Ga terug',

    '505.title': '505',
    '505.description': 'Er is iets misgegaan((',

    'navigation.elsewhere': 'Anders',
    'navigation.select_language': 'Selecteer een taal',
    'navigation.select_theme': 'Selecteer een thema',
    'navigation.theme_light': 'Licht',
    'navigation.theme_dark': 'Donker',
    'navigation.theme_system': 'Systeem',

    'navigation.home': 'Home',
    'navigation.about': 'Over',
    'navigation.articles': 'Artikelen',
    'navigation.projects': 'Projecten',
    'navigation.contact': 'Contact',
    'navigation.people': 'Mensen',
    'navigation.photos': 'Foto\'s',
    'navigation.playlist': 'Afspeellijst',
    'navigation.uses': 'Gebruik',

    'layout.back_to_top': 'Terug naar boven',

    'stack.title': 'Stack',
  },
  da: {
    'date_locale': 'da-DK',
    'reading_time': 'min læsning',

    'home.title': 'Hjem',
    'home.description':
      'Jeg er passioneret om at bringe idéer til live gennem kode og teknologi. Uanset om det er at bygge hjemmesider, apps eller software, elsker jeg processen med at skabe og dele viden. Jeg nyder at fordybe mig i nye emner og oplevelser, og jeg er lige så begejstret for at undervise og dele min ekspertise med andre.',

    'home.heading': 'Gleb Kotovsky (燕智, yànzhì)',
    'home.legenda': '燕 (yàn) - \'svale (fugl)\', 智 (zhì) - \'visdom, viden, intelligens\'.',
    'home.paragraph':
      'Jeg er passioneret om at bringe idéer til live gennem kode og teknologi. Uanset om det er at bygge hjemmesider, apps eller software, elsker jeg processen med at skabe og dele viden. Jeg nyder at fordybe mig i nye emner og oplevelser, og jeg er lige så begejstret for at undervise og dele min ekspertise med andre.',

    'home.cta.explore': 'Udforsk projekter',
    'home.cta.about': 'Om mig',

    'home.latest_articles.h5': 'Seneste indlæg',
    'home.latest_articles.link': 'Se alle indlæg',

    'home.latest_notes.h5': 'Seneste noter',
    'home.latest_notes.link': 'Se alle noter',

    'home.recent_projects.h5': 'Seneste projekter',
    'home.recent_projects.link': 'Se alle projekter',

    'articles.title': 'Artikler',
    'articles.description': 'Alle mine lange tanker om programmering, brugergrænseflader, produktdesign og mere, samlet i kronologisk rækkefølge',

    'articles.heading': 'Artikler',
    'articles.paragraph': 'Alle mine lange tanker om programmering, brugergrænseflader, produktdesign og mere, samlet i kronologisk rækkefølge',

    'articles.back_to': 'Tilbage til artikler',
    'articles.author': 'Forfatter',
    'articles.published': 'Udgivet',

    'about.title': 'Om',
    'about.description':
      'Jeg er passioneret om at bringe idéer til live gennem kode og teknologi. Uanset om det er at bygge hjemmesider, apps eller software, elsker jeg processen med at skabe og dele viden. Jeg nyder at fordybe mig i nye emner og oplevelser, og jeg er lige så begejstret for at undervise og dele min ekspertise med andre.',

    'about.heading': 'Om mig',
    'about.paragraph':
      'Jeg er passioneret om at bringe idéer til live gennem kode og teknologi. Uanset om det er at bygge hjemmesider, apps eller software, elsker jeg processen med at skabe og dele viden. Jeg nyder at fordybe mig i nye emner og oplevelser, og jeg er lige så begejstret for at undervise og dele min ekspertise med andre.',

    'about.bio.heading': 'Biografi',

    'about.experience.heading': 'Erfaring',
    'about.experience.total.heading': 'Samlet erfaring',

    'about.hard_skills.heading': 'Hard skills',
    'about.hard_skills.paragraph': 'I mit daglige arbejde bruger jeg forskellige teknologier, herunder men ikke begrænset til:',
    'about.expertise.heading': 'Expertise',
    'about.languages.heading': 'Sprog',
    'about.languages.paragraph': 'De sprog jeg elsker og forsøger at lære mere om',

    'projects.title': 'Projekter',
    'projects.description': 'Projekter som jeg har skabt eller vedligeholder.',

    'projects.heading': 'Projekter',

    'projects.back_to': 'Tilbage til projekter',

    'people.title': 'Mennesker',
    'people.description': 'Velkommen til det levende fællesskab af venner og kolleger, der er en integreret del af min rejse! Her kan du opdage et mangfoldigt netværk, hver med unikke perspektiver, talenter og passioner.',

    'people.heading': 'Mennesker',
    'people.paragraph': 'Velkommen til det levende fællesskab af venner og kolleger, der er en integreret del af min rejse! Her kan du opdage et mangfoldigt netværk, hver med unikke perspektiver, talenter og passioner.',

    'people.back_to': 'Tilbage til mennesker',

    'people.cta': 'Vil du også være med her? Lad os lære hinanden at kende, her er mine links:',
    'people.cta_link': 'Her',

    'people.notes.h5': 'Noter',
    'people.notes.fallback': 'Ingen noter endnu',

    'people.articles.h5': 'Artikler',
    'people.articles.fallback': 'Ingen artikler endnu',

    'people.links.h5': 'Links',

    'contact.title': 'Kontakt',
    'contact.description': 'Kontakt mig gerne',

    'contact.heading': 'Lad os forbinde',
    'contact.paragraph': 'Hvis du vil kontakte mig om noget eller bare sige hej, så kontakt mig via sociale medier eller send mig en e-mail.',

    'uses.title': 'Bruger',
    'uses.description': 'Software jeg bruger, gadgets jeg elsker, og andre ting jeg anbefaler',

    'uses.heading': 'Mit brug',
    'uses.paragraph': 'Software jeg bruger, gadgets jeg elsker, og andre ting jeg anbefaler',

    'uses.workstation.heading': 'Arbejdsstation',
    'uses.devtools.heading': 'Udviklingsværktøjer',
    'uses.other_software.heading': 'Anden software',
    'uses.misc.heading': 'Diverse',

    'uses.back_to': 'Tilbage til brug',

    '404.title': '404',
    '404.description': 'Side ikke fundet',

    '404.heading': 'Side ikke fundet',
    '404.paragraph': 'Beklager, denne side findes ikke.',

    '404.back_to': 'Gå tilbage',

    '505.title': '505',
    '505.description': 'Noget gik galt((',

    'navigation.elsewhere': 'Andre steder',
    'navigation.select_language': 'Vælg et sprog',
    'navigation.select_theme': 'Vælg et tema',
    'navigation.theme_light': 'Lys',
    'navigation.theme_dark': 'Mørk',
    'navigation.theme_system': 'System',

    'navigation.home': 'Hjem',
    'navigation.about': 'Om',
    'navigation.articles': 'Artikler',
    'navigation.projects': 'Projekter',
    'navigation.contact': 'Kontakt',
    'navigation.people': 'Mennesker',
    'navigation.photos': 'Fotos',
    'navigation.playlist': 'Afspilningsliste',
    'navigation.uses': 'Bruger',

    'layout.back_to_top': 'Tilbage til toppen',

    'stack.title': 'Stack',
  },
} satisfies Record<Language, { [key: string]: string }>

export type UiScheme = keyof (typeof ui)[typeof defaultLang]
