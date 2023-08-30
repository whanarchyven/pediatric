# Сущности и ручки апи дермотологов

### Сущности

##### 1. [_Юзер / User_](#User)

##### 2. [_Событие / Event (event)_](#Event)

##### 3. [_Статья- публикция / Publication_](#Publication)

##### 4. [_Пост / Post_](#Post)

##### 5. [_Сертификаты (достижения) / Achievement_](#Achievement)

##### 6. [_Образование (диплом) / UserEducation_](#UserEducation)

##### 7. [_Место работы / UserWorkplace_](#UserWorkplace)

##### 8. [_Юнит программы мероприятия / EventProgrammUnit_](#EventProgrammUnit)

##### 9. [_Цена мероприятия / EventPrice_](#EventPrice)

##### 10. [_Оценка публикации / PublicationRating_](#PublicationRating)

# User

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **email\*** - E-Mail адрес пользователя, будет использоваться для регистрации, аутентификации, операций с паролем (забыл пароль и тд.), а также отображается в профиле , **string**
- **phone\*** - номер телефона, используется для аутентификации? отображается в профиле , **string**
- **password\*** - хешированный пароль пользователя, **hash 264 string**

- **name\*** - ФИО пользователя, **string**

- **address\*** - адрес постоянного проживания пользователя, используется для отображения на странице и фильтрации рассылки события по городу проживания участников, **string**

- **gender\*** - гендерная пренадлежность (пол), **string(male | female)**

- **birthdate\*** - дата рождения, может быть использована для рассылок, **dateTime**

- **specialization\*** - специализация пользователя, например "Дерматология", **string**

- **degree** - учёная степень, **string**

- **qualification** - квалификация, учёное звание, **string**

- **workExperience** - опыт работы, в годах, **number**

- **professionalInterests** - профессиональные интересы пользователя, **text**

- **about** - "О себе", биография написанная пользователем, **text**

### Методы

- **базовый CRUD() - 4 эндпоинта, update желательно сделать слегка резиновым, чтобы мог принимать любой соответсвующей модели параметр и его можно было бы обновить**

- **education**(User id)

  - **[userEducation[]](#UserEducation)** - ref на объект модели [**UserEducation**](#UserEducation)
    получить дипломы пользователя, (**array**)

- **career**(User id)

  - **[userWorkPlace[]](#UserWorkPlace)** - ref на объект модели [**UserWorkPlace**](#UserWorkPlace)
    получить места работы пользователя, (**array**)

- **achievements**(User id)

  - **[userAchievement[]](#Achievement)** - ref на объект модели [**Achievement**](#Achievement)
    получить награды, сертификаты, достижения пользователя, (**array**)

- **publications**(User id)

  - **[userPublication[]](#Publication)** - ref на объект модели [**Publication**](#Publication)
    получить публикации, научные работы пользователя, (**array**)

- **login**( password:string )

  - **authToken** - токен для авторизации
    **refreshToken** - токен для повторной авторизации
    авторизоваться на платформе

- **refresh**( refreshToken:string )

  - **authToken** - токен для авторизации
    получить новый токен авторизации (обновить авториз. сессию)

- **remember**( email:string )

  - **void**
    отправить на мыло ссылку для сброса пароля

- **confirmNewPass**( newPassword: string )
  - **void**
    обновить пароль пользователя

# Event

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **type\*** - тип мероприятия, например "Конференция", **string**
- **date\*** - дата проведения мероприятия, также может быть диапазон, например с 11.11 по 13.11, **date/string**
- **time** - время проведения мероприятия, также может быть диапазон, например с 12.30 по 18.30, **time/string**
- **name\*** - наименования мероприятия, **string**
- **address** - адрес проведения мероприятия, **string**
- **format\*** - формат проведения мероприятия, **online | offline | combined**
- **layoutBg** - обложка (картинка) мероприятия, будет отрисована в первом блоке страницы event'a, **image**
- **avatar** - картинка здания, в котором будет прохожить мероприятие, будет отрисована во втором блоке страницы event'a, а также в слайдере мероприятий, **image**
- **anouncement\*** - анонс мероприятия, краткое описание, **text**
- **description\*** - описание мероприятия, подробное, **text**
- **description\*** - описание мероприятия, подробное, **text**

### Методы

- **CRUD**

- **participants()**

  - **[User []](#User)** - ref на объект модели [**User**](#User)
    получить пользователей, зарегистрированных на событие

- **speakers()**
  - **[User []](#User)** - ref на объект модели [**User**](#User)
    получить спикеров мероприятия
- **programm()**
  - **[EventProgrammUnit []](#EventProgrammUnit)** - ref на объект модели [**EventProgrammUnit**](#EventProgrammUnit)
    получить юниты (этапы) программы мероприятия
- **prices()**
  - **[EventPrice []](#EventPrice)** - ref на объект модели [**EventPrice**](#EventPrice)
    получить цены мероприятия

# Publication

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **category\*** - категория (научная область мероприятия), например "Педиатрия", **string**
- **date\*** - дата публикации, **date**
- **views\*** - количество просмотров публикации, **number**
- **title\*** - наименования публикации, **string**
- **file\*** - ссылка на пдф файл публикации, **string**

### Методы

- **CRUD**

- **authors()**

  - **[User []](#User)** - ref на объект модели [**User**](#User)
    получить пользователей, которые причастны к созданию публикации

- **rating()**
  - **rating** - среднее арифметическое всех оценок публикации, **number**
    получить среднее арифметическое значение по пятибильной шкале всех оценок пользователей
- **isLiked**(User id)
  - **isLiked** - boolean, оценил ли пользователь публикацию
    проверяет, на основании поиска по объекта модели [**PublicationRating**](#PublicationRating), оценил ли пользователь эту публикацию

# Post?

# Certificate

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **category\*** - категория (научная область мероприятия), например "Педиатрия", **string**
- **date\*** - дата получения, **date**
- **userId\*** - ref на объект модели [**User**](#User)-получатель сертификата
- **title\*** - наименования сертификата, **string**
- **file\*** - ссылка на пдф файл сертификата, **string**
- **eventId** - ref на объект модели [**Event**](#Event)-мероприятие, на котором сертификат получен

### Методы

- **CRUD**

# Education

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **collegeName\*** - наименование учебного заведения", **string**
- **date\*** - дата окончания учебного заведения, **date**
- **userId\*** - ref на объект модели [**User**](#User)-пользователь, получивший образование
- **specialization\*** - специальность пользователя, **string**
- **file\*** - ссылка на пдф файл диплома, **string**

### Методы

- **CRUD**

# WorkPlace

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **placeName\*** - наименование места работы", **string**
- **dateStart\*** - дата начала труд. деятельности, **date**
- **dateEnd** - дата окончания труд. деятельности, **date**
- **userId\*** - ref на объект модели [**User**](#User)-пользователь, работавший в этом месте
- **post\*** - название должности, **string**

### Методы

- **CRUD**

# EventProgrammUnit

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **eventId\*** - ref на объект модели [**Event**](#Event) - событие, к котрому относится юнит программы
- **eventProgrammUnitId** - ref на объект модели [**EventProgrammUnit**](#EventProgrammUnit) - если юнит программы является подюнитом, и ссылается на юнит выше иераррхией **string**
- **timeStart\*** - время начала юнита программы, **time**
- **timeEnd** - время окончания юнита программы, **time**

### Методы

- **CRUD**
- **speakers()**
  - **[User []](#User)** - ref на объект модели [**User**](#User)
    получить спикеров юнита программы

# EventPrice

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **eventId\*** - ref на объект модели [**Event**](#Event) - событие, к котрому относится цена
- **dateTillEnd\*** - дата, до которой данная цена актуальна, **date**
- **online** - стоимость онлайн участия, **number**
- **offline** - стоимость оффлайн участия, **number**

### Методы

- **CRUD**

# PublicationRating

### Параметры (\* - required, иначе м.б nullable)

- **id\*** - уникальный **primary key**, autoincremental
- **publicationId\*** - ref на объект модели [**Publication**](#Publication) - публикация, к котрой относится рейтинг
- **userId\*** - ref на объект модели [**User**](#User), который выставил оценку
- **rating** - оценка пользователя публикации, **number**

### Методы

- **CRUD**
