//-  Створити функцію конструктор для об'єкту який описує теги
//Властивості
//-назва тегу
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru

//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select
//Приклад результату
//{
  //  titleOfTag: 'area',
 //       action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
 //   attrs: [
  //  {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
 //   {/*some props and values*/},
  //  {/*...*/},
  //  {/*...*/},
//]

//}
//==============================================h1
//



    function Tags(titleoftag, action, attrs) {
    this.titleoftag = titleoftag;
    this.action = action;
    this.attrs = attrs;

 }
    let type1 = '<a>';
    let action1 = 'Тег <a> предназначен для создания ссылок';
    let attrs1 = [
        {titleofattr: 'accesskey', actionofattr: 'Активация ссылки с помощью комбинации клавиш'},
        {titleofattr: 'coords', actionofattr: 'Устанавливает координаты активной области' },
        {titleofattr: 'download', actionofattr: 'Предлагает скачать указанный по ссылке файл' }];

        let taga = new Tags(type1,action1,attrs1);
        console.log(taga);

let type2 = '<div>';
let action2 = '<div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
let attrs2 = [
    {titleofattr: 'align', actionofattr: 'Задает выравнивание содержимого тега <div>.'},
    {titleofattr: 'title', actionofattr: 'Добавляет всплывающую подсказку к содержимому.' },
    {titleofattr: 'accesskey', actionofattr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.' }];

let tagdiv = new Tags(type2,action2,attrs2);
console.log(tagdiv);

let type3 = '<h1>';
let action3 = 'тег <h1> представляет собой наиболее важный заголовок первого уровня,';
let attrs3 = [
    {titleofattr: 'align', actionofattr: 'Определяет выравнивание заголовка.'},
    {titleofattr: 'accesskey', actionofattr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш' },
    {titleofattr: 'class', actionofattr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' }];

let tagh1 = new Tags(type3,action3,attrs3);
console.log(tagh1);

let type4 = '<span>';
let action4 = 'Тег <span> предназначен для определения строчных элементов документа';
let attrs4 = [
    {titleofattr: 'accesskey', actionofattr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleofattr: 'class', actionofattr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлени' },
    {titleofattr: 'dir', actionofattr: 'Задает направление и отображение текста' }];

let tagspan = new Tags(type4,action4,attrs4);
console.log(tagspan);

let type5 = '<input>';
let action5 = ' позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
let attrs5 = [
    {titleofattr: 'accept', actionofattr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleofattr: 'accesskey', actionofattr: 'Переход к элементу с помощью комбинации клавиш.' },
    {titleofattr: 'alt', actionofattr: 'Альтернативный текст для кнопки с изображением' }];

let taginput = new Tags(type5,action5,attrs5);
console.log(taginput);

let type6 = '<form>';
let action6 = 'Тег <form> устанавливает форму на веб-странице';
let attrs6 = [
    {titleofattr: 'accept-charset', actionofattr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
    {titleofattr: 'action', actionofattr: 'Адрес программы или документа, который обрабатывает данные формы.' },
    {titleofattr: 'enctype', actionofattr: 'Способ кодирования данных формы.' }];

let tagform = new Tags(type6,action6,attrs6);
console.log(tagform);

let type7 = '<option>';
let action7 = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
let attrs7 = [
    {titleofattr: 'disabled', actionofattr: 'Заблокировать для доступа элемент списка'},
    {titleofattr: 'label', actionofattr: 'Указание метки пункта списка' },
    {titleofattr: 'selected', actionofattr: 'Заранее устанавливает определенный пункт списка выделенным' }];

let tagoption = new Tags(type7,action7,attrs7);
console.log(tagoption);

let type8 = '<select>';
let action8 = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка';
let attrs8 = [
    {titleofattr: 'accesskey', actionofattr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
    {titleofattr: 'autofocus', actionofattr: 'Устанавливает, что список получает фокус после загрузки страницы' },
    {titleofattr: 'form', actionofattr: 'Связывает список с формой.' }];

let tagselect = new Tags(type1,action1,attrs1);
console.log(tagselect);

//-  Створити класс  для об'єкту який описує теги
//Властивості
//-назва тегу
//- опис його дій
//- масив з атрибутами (2-3 атрибути максимум)
//Кожен атрибут описати як окремий який буде містити
//-назву атрибуту
//-опис дії атрибуту
//інформацію брати з htmlbook.ru

//Таким чином описати теги
//-a
//-div
//-h1
//-span
//-input
//-form
//-option
//-select
//Приклад результату
//{
   // titleOfTag: 'area',
    //    action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
  //  attrs: [
    //{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
   // {/*some props and values*/},
 //   {/*...*/},
   // {/*...*/},
//]

//}

 class Tag {
     constructor(titleoftag, action, attrs) {
         this.titleoftag = titleoftag;
         this.action = action;
         this.attrs = attrs;
     }
 }



let typea = '<a>';
let actiona = 'Тег <a> предназначен для создания ссылок';
let attrsa = [
    {titleofattr: 'accesskey', actionofattr: 'Активация ссылки с помощью комбинации клавиш'},
    {titleofattr: 'coords', actionofattr: 'Устанавливает координаты активной области' },
    {titleofattr: 'download', actionofattr: 'Предлагает скачать указанный по ссылке файл' }];

let tagA = new Tags(typea,actiona,attrsa);
console.log(tagA);

let typediv = '<div>';
let actiondiv = '<div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
let attrsdiv = [
    {titleofattr: 'align', actionofattr: 'Задает выравнивание содержимого тега <div>.'},
    {titleofattr: 'title', actionofattr: 'Добавляет всплывающую подсказку к содержимому.' },
    {titleofattr: 'accesskey', actionofattr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.' }];

let tagDiv = new Tags(typediv,actiondiv,attrsdiv);
console.log(tagDiv);

let typeh1 = '<h1>';
let actionh1 = 'тег <h1> представляет собой наиболее важный заголовок первого уровня,';
let attrsh1 = [
    {titleofattr: 'align', actionofattr: 'Определяет выравнивание заголовка.'},
    {titleofattr: 'accesskey', actionofattr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш' },
    {titleofattr: 'class', actionofattr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' }];

let tagH1 = new Tags(typeh1,actionh1,attrsh1);
console.log(tagH1);

let typespan = '<span>';
let actionspan = 'Тег <span> предназначен для определения строчных элементов документа';
let attrsspan = [
    {titleofattr: 'accesskey', actionofattr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
    {titleofattr: 'class', actionofattr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлени' },
    {titleofattr: 'dir', actionofattr: 'Задает направление и отображение текста' }];

let tagSpan = new Tags(typespan,actionspan,attrsspan);
console.log(tagSpan);

let typeinput = '<input>';
let actioninput = ' позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
let attrsinput = [
    {titleofattr: 'accept', actionofattr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    {titleofattr: 'accesskey', actionofattr: 'Переход к элементу с помощью комбинации клавиш.' },
    {titleofattr: 'alt', actionofattr: 'Альтернативный текст для кнопки с изображением' }];

let tagInput = new Tags(typeinput,actioninput,attrsinput);
console.log(tagInput);

let typeform = '<form>';
let actionform = 'Тег <form> устанавливает форму на веб-странице';
let attrsform = [
    {titleofattr: 'accept-charset', actionofattr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
    {titleofattr: 'action', actionofattr: 'Адрес программы или документа, который обрабатывает данные формы.' },
    {titleofattr: 'enctype', actionofattr: 'Способ кодирования данных формы.' }];

let tagForm = new Tags(typeform,actionform,attrsform);
console.log(tagForm);

let typeoption = '<option>';
let actionoption = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
let attrsopnion = [
    {titleofattr: 'disabled', actionofattr: 'Заблокировать для доступа элемент списка'},
    {titleofattr: 'label', actionofattr: 'Указание метки пункта списка' },
    {titleofattr: 'selected', actionofattr: 'Заранее устанавливает определенный пункт списка выделенным' }];

let tagOption = new Tags(typeoption,actionoption,attrsopnion);
console.log(tagOption);

let typeselect = '<select>';
let actionselect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка';
let attrsselect = [
    {titleofattr: 'accesskey', actionofattr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
    {titleofattr: 'autofocus', actionofattr: 'Устанавливает, что список получает фокус после загрузки страницы' },
    {titleofattr: 'form', actionofattr: 'Связывает список с формой.' }];

let tagSelect = new Tags(typeselect,actionselect,attrsselect);
console.log(tagSelect);

//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


let car = {
    model: 'Ka',
    manufacturer: 'Ford',
    year: 2020,
    maxSpeed: 180,
    engine: 1.5,
    driver: 'Alex',


    drive: function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },
    info: function() {
    console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxspeed: ${this.maxSpeed}, engine: ${this.engine}, driverman: ${this.driver.name}`);
    },
    increaseMaxSpeed: function(newSpeed) {
        this.maxSpeed += newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function(driver) {
       this.driver = driver;
    }
};

    let man = {name: 'Alex', age: 33};
    car.increaseMaxSpeed(40);
    car.drive();
    car.addDriver(man);
    car.changeYear(2018);
    car.info();


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model,
    this.manufacturer = manufacturer,
    this.year = year,
    this.maxSpeed = maxSpeed,
    this.engine = engine,
    this.driver = 'Max' ,

        this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    },
    this.info = function() {
        console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxspeed: ${this.maxSpeed}, engine: ${this.engine}, driverman: ${this.driver.name}`);
    },
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    },
    this.changeYear = function (newValue) {
        this.year = newValue;
    },
    this.addDriver =  function(driver) {
        this.driver = driver;
    }
};

let carOne = new Car('Kuga', 'Ford', 2015, 170, 1.4)
let mandriver = {name: 'Alex', age: 33};
carOne.increaseMaxSpeed(30);
carOne.addDriver(mandriver);
carOne.changeYear(2018);
carOne.info();


//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class CAR {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.driver = 'Max';
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    };

    info() {
        console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxspeed: ${this.maxSpeed}, engine: ${this.engine}, driverman: ${this.driver.name}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    }
};

let carTwo = new CAR('Mondeo', 'Ford', 2005, 140, 1.4);
let pilot = {name: 'Alex', age: 33};
carTwo.increaseMaxSpeed(30);
carTwo.addDriver(pilot);
carTwo.changeYear(2008);
carTwo.info();




//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella  {
  constructor(name,age,footsize) {
      this.name = name;
      this.age = age;
      this.footsize = footsize;
  }
};

let CinderellaOne = new Cinderella('Lara', 18, 37);
let CinderellaTwo = new Cinderella('Lana', 19, 38);
let CinderellaThree = new Cinderella('Hanna', 18, 35);
let CinderellaFour = new Cinderella('Tea',20, 36);
let CinderellaFive = new Cinderella('Monika', 21, 39);
let CinderellaSix = new Cinderella('Militsa', 19, 37);
let CinderellaSeven = new Cinderella('Sofia', 23, 38);
let CinderellaEight = new Cinderella('Angela', 22, 36);
let CinderellaNine = new Cinderella('Lina', 19, 35.5);
let CinderellaTen = new Cinderella('Dara', 25, 34);

let newArray = [CinderellaOne,CinderellaTwo,CinderellaThree,CinderellaFour,CinderellaFive,CinderellaSix,CinderellaSeven,CinderellaEight,CinderellaNine, CinderellaTen];
  class Princ {
      constructor(name, age, findsize) {
          this.name = name;
          this.age = age;
          this.findsize = findsize;
      }
      findCinderella(array){
          let find = null;
          for (const item of array) {
              if (item.footsize === this.findsize){
                  find=item;
                  console.log('I find my Cinderella! Her name is ' + find.name)
              }
          }
      }

  };

  let PrincCharming = new Princ('Rayan', 28, 34);
  PrincCharming.findCinderella(newArray);


//створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


 function Sinderella(name,age,footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }

let Cinderella1 = new Sinderella('Lara', 18, 37);
let Cinderella2 = new Sinderella('Lana', 19, 38);
let Cinderella3 = new Sinderella('Hanna', 18, 35);
let Cinderella4 = new Sinderella('Tea',20, 36);
let Cinderella5 = new Sinderella('Monika', 21, 39);
let Cinderella6 = new Sinderella('Militsa', 19, 37);
let Cinderella7 = new Sinderella('Sofia', 23, 38);
let Cinderella8 = new Sinderella('Angela', 22, 36);
let Cinderella9 = new Sinderella('Lina', 19, 35.5);
let Cinderella10 = new Sinderella('Dara', 25, 34);

let newArray1 = [Cinderella1,Cinderella2,Cinderella3,Cinderella4,Cinderella5,Cinderella6,Cinderella7,Cinderella8,Cinderella9, Cinderella10];
function Princ1 (name, age, findsize) {
        this.name = name;
        this.age = age;
        this.findsize = findsize;
    };
let princ = new Princ1('Haris', 28, 35.5);
    const result = newArray1.find(cinderella => cinderella.footsize === 35.5);
     console.log(result);


