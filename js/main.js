const weeks = [
  {
    title: "Начало кондитерского пути и создание первого торта",
    practice: "Испечёшь морковный торт с солёной карамелью",
    teory: [
      "Организация рабочего места",
      "Подготовка необходимого инвентаря",
      "Выбор необходимых продуктов",
      "Советы по закупке необходимых продуктов и инвентаря",
      "Обзор хранения и заготовки сырья",
    ],
  },
  {
    title: "Медовик и капкейки",
    practice:
      "Испечёшь капкейки, приготовишь крем и конфи, а также сделаешь своё первое пирожное — медовик",
    teory: [
      "Приготовление и украшение капкейков",
      "Изготовление крема и конфи",
      "Приготовление медовых коржей для торта",
      "Пропитка коржей и сборка торта",
    ],
  },
  {
    title: "Песочное тесто и чизкейк",
    practice:
      "Приготовишь меренги, сделаешь заварной крем для тарталеток и испечёшь свой первый чизкейк",
    teory: [
      "Приготовление песочного теста",
      "Тонкости в приготовлении меренги",
      "Изготовление заварного крема",
      "Выпечка тарталеток",
      "Приготовление нежного чизкейка",
    ],
  },
  {
    title: "Бисквиты",
    practice: "Отработаешь выпечку трёх бисквитов для будущих тортов",
    teory: [
      "Тонкости выпечки бисквитов",
      "Приготовление ванильного бисквита",
      "Приготовление фисташкового бисквита",
      "Приготовление шоколадного бисквита",
    ],
  },
  {
    title: "Дрожжевое тесто",
    practice: "Приготовишь заготовку для торта",
    teory: [
      "Технология приготовления дрожжевого теста: тонкости и советы",
      "Приготовление песочного теста",
      "Рецептурные нюансы",
    ],
  },
  {
    title: "Работа с кремами",
    practice: "Приготовишь профитроли и несколько видов кремов",
    teory: [
      "Приготовление кремов: ганаши, кремю",
      "Создание заварного теста",
      "Приготовление профитролей и нескольких видов кремов",
    ],
  },
  {
    title: "Mille-feuille, или Наполеон",
    practice:
      "Испечёте торт «Наполеон» и приготовите необычный морковный десерт",
    teory: [
      "Приготовление слоёного теста",
      "Рецептура и создание крема дипломат",
      "Приготовление французского морковного десерта",
    ],
  },
  {
    title: "Завершение курса",
    practice: "Самостоятельно, без наставника испечёте торт на ваш выбор",
    teory: [
      "Работа кондитера на заказ",
      "Применение знаний о технологии выпечки к другим рецептам",
      "Разработка собственных рецептов",
    ],
  },
];

// console.log(weeks[0].teory.length)
const burgerNav = document.querySelector(".header-top-list ");
const btns = document.querySelector(".training-row-btns");
const btnWeeks = document.querySelectorAll(".training-row-btn");
const btnAccordeonOne = document.querySelector(".accordeon-1");
const btnAccordeonTwo = document.querySelector(".accordeon-2");
const titleAccordeonOne = document.querySelector(".accordeon-title-1");
const titleAccordeonTwo = document.querySelector(".accordeon-title-2");
const practiceTextOne = document.querySelector(".practice-1");
const practiceTextTwo = document.querySelector(".practice-2");
const AccordeonListOne = document.querySelector(".accordeon-list-1");
const AccordeonListTwo = document.querySelector(".accordeon-list-2");
const btnModal = document.querySelector(".school-inner-present-link");
const closeBtn = document.querySelector(".popup-btn-img");
const shadow = document.querySelector(".shadow");

let filterClass;

btns.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return false;

  filterClass = event.target.dataset["f"];
  if (filterClass == "week-1") {
    RemoveList();
    titleAccordeonOne.textContent = weeks[0].title;
    titleAccordeonTwo.textContent = weeks[1].title;
    practiceTextOne.textContent = weeks[0].practice;
    practiceTextTwo.textContent = weeks[1].practice;
    CreateTeoryListOne(0);
    CreateTeoryListTwo(1);
  } else if (filterClass == "week-2") {
    RemoveList();
    titleAccordeonOne.textContent = weeks[2].title;
    titleAccordeonTwo.textContent = weeks[3].title;
    practiceTextOne.textContent = weeks[2].practice;
    practiceTextTwo.textContent = weeks[3].practice;
    CreateTeoryListOne(2);
    CreateTeoryListTwo(3);
  } else if (filterClass == "week-3") {
    RemoveList();

    titleAccordeonOne.textContent = weeks[4].title;
    titleAccordeonTwo.textContent = weeks[5].title;
    practiceTextOne.textContent = weeks[4].practice;
    practiceTextTwo.textContent = weeks[5].practice;
    CreateTeoryListOne(4);
    CreateTeoryListTwo(5);
  } else {
    RemoveList();
    titleAccordeonOne.textContent = weeks[6].title;
    titleAccordeonTwo.textContent = weeks[7].title;
    practiceTextOne.textContent = weeks[6].practice;
    practiceTextTwo.textContent = weeks[7].practice;
    CreateTeoryListOne(6);
    CreateTeoryListTwo(7);
  }
  if (event.target.dataset["f"] == filterClass) {
    for (let i = 0; i < btnWeeks.length; i++) {
      btnWeeks[i].classList.remove("btn--active");
    }
    event.target.classList.add("btn--active");
  } else {
    event.target.classList.remove("btn--active");
  }
});

btnAccordeonOne.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".wrapper-1").classList.toggle("wrapper--open");
  document.querySelector(".button-link-1").classList.toggle("arrow--open");
  document.querySelector(".svg-link-1").classList.toggle("svg--open");
});
btnAccordeonTwo.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".wrapper-2").classList.toggle("wrapper--open");
  document.querySelector(".button-link-2").classList.toggle("arrow--open");
  document.querySelector(".svg-link-2").classList.toggle("svg--open");
});

function CreateTeoryListOne(id) {
  for (let i = 0; i < weeks[id].teory.length; i++) {
    let item = document.createElement("li");
    item.classList.add("training-accordeon-teory-item");
    item.textContent = weeks[id].teory[i];
    AccordeonListOne.append(item);
  }
}
function CreateTeoryListTwo(id) {
  for (let i = 0; i < weeks[id].teory.length; i++) {
    let item = document.createElement("li");
    item.classList.add("training-accordeon-teory-item");
    item.textContent = weeks[id].teory[i];
    AccordeonListTwo.append(item);
  }
}

function RemoveList() {
  let listItem = document.querySelectorAll(".training-accordeon-teory-item");
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].remove();
  }
}

// --------------------Popup----------------------

btnModal.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".popup").classList.add("popup--open");
  shadow.classList.add("shadow--open");
  document.body.classList.add("wrapper-scrool");
});

closeBtn.addEventListener("click", closePopup);
shadow.addEventListener("click", closePopup);

function closePopup(e) {
  e.preventDefault();
  document.querySelector(".popup").classList.remove("popup--open");
  shadow.classList.remove("shadow--open");
  document.body.classList.remove("wrapper-scrool");
  document
    .querySelector(".header-top-list")
    .classList.remove("header-top-list--active");
}

document.querySelector(".popup-form-btn").addEventListener("click", (e) => {
  if (document.querySelector(".popup-email").value !== "") {
    e.preventDefault();
    document.querySelector(".popup").classList.remove("popup--open");
    shadow.classList.remove("shadow--open");
    document.body.classList.remove("wrapper-scrool");
  }
});

// -------------------------Swiper-gallery---------------------

const swiper = new Swiper(".gallery-swiper", {
  // Optional parameters
  slidesPerView: 1.5,
  spaceBetween: 32,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
  // If we need pagination
  pagination: {
    el: ".gallery-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
});

// -------------------Reviews-slider---------------

const swiper2 = new Swiper(".reviews-slider", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1.6,
    },
    1150: {
      slidesPerView: 2.1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-next",
    prevEl: ".reviews-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".reviews-scrollbar",
  },
});

// ---------------------Burger--------------------------

document.querySelector(".header-top-burger").addEventListener("click", () => {
  burgerNav.classList.add("header-top-list--active");
  shadow.classList.add("shadow--open");
});

burgerNav.addEventListener("click", () => {
  shadow.classList.remove("shadow--open");
  burgerNav.classList.remove("header-top-list--active");
});
