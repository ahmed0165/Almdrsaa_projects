const modal = document.querySelector(".AddPageModal");
const openModal = document.querySelector(".Add__button");
const addButtonBody = document.querySelector(".add__button__body");
const closeModal = document.querySelector(".close");
const acrchive = document.querySelector(".acrchive");
const body = document.querySelector(".body");
const menuSide = document.querySelector(".menu-side");
const noteButton = document.querySelector(".note__button");
const addNote = document.querySelector(".addNote");
const addPinnedNote = document.querySelector(".addPinnedNote");
const titleInput = document.querySelector(".title");
const authorInput = document.querySelector(".author");
const notes = document.querySelector(".notes");
const pinnedNotes = document.querySelector(".pinnedNotes");
const noteInput = document.querySelector(".note__input");
const noteHeader = document.querySelector(".note__header");
const menu = document.querySelector(".menu");
const menu__buttons = document.querySelectorAll(".menu__button");
const deleteButtons = document.querySelectorAll(".delete");
const noteElements = document.querySelectorAll(".note");
const noteContainer = document.querySelector(".notes");
const container = document.querySelector(".container");
const searchBar = document.querySelector(".search__bar");
const arrowButton = document.querySelector(".arrow__button");
const arrowMenuButton = document.querySelector(".arrow__button__menu");
const MenuButton = document.querySelector(".menu__img");
const searchImg = document.querySelector(".search__img");
const logo = document.querySelector(".logo");
const mobileMediaQuery = window.matchMedia("(max-width:700px)");

const showModal = () => {
  modal.style.display = "block";
  acrchive.style.display = "none";
  body.style.display = "none";
};

const hideModal = () => {
  modal.style.display = "none";
  acrchive.style.display = "block";
  body.style.display = "block";
};

openModal.onclick = function () {
  showModal();
};

const handleStatusButtonStyle = (e) => {
  // const statusButtons = document.querySelectorAll(".status__buttons button");
  menu__buttons.forEach((button) => {
    button.classList.remove("menu__header");
  });

  e.target.classList.add("menu__header");
};

menu__buttons.forEach((button) => {
  button.addEventListener("click", handleStatusButtonStyle);
});

addButtonBody.addEventListener("click", () => {
  showModal();
  noteButton.classList.remove("menu__header");
  openModal.classList.add("menu__header");
});

noteButton.addEventListener("click", () => {
  hideModal();
  body.style.display = "flex";
});

addNote.addEventListener("click", () => {
  const generatedMarkup = `<div class="note">
  <div class="note__content">
    <h1 class="note__content__header">
      ${titleInput.value}
    </h1>
    <p class="note__content__p">
      ${noteInput.value}
    </p>
    <span class="autor__value">${authorInput.value}</span>
    <div class="note__footer">
      <span class="date">Feb 8, 2021</span>
      <button class="delete">Delete</button>
    </div>
  </div>
  </div>`;
  notes.insertAdjacentHTML("beforeend", generatedMarkup);
  hideModal();
  noteInput.value = "";
  titleInput.value = "";
  authorInput.value = "";
  noteButton.classList.add("menu__header");
  openModal.classList.remove("menu__header");
  body.style.display = "flex";
  saveNotesToLocalStorage();
});

addPinnedNote.addEventListener("click", () => {
  const generatedMarkup = `<div class="note pinnedNote">
  <div class="note__content">
    <h1 class="note__content__header">
      ${titleInput.value}
    </h1>
    <p class="note__content__p">
      ${noteInput.value}
    </p>
    <span class="autor__value">${authorInput.value}</span>
    <div class="note__footer">
      <span class="date">Feb 8, 2021</span>
      <button class="delete">Delete</button>
    </div>
  </div>
  </div>`;
  pinnedNotes.insertAdjacentHTML("beforeend", generatedMarkup);
  hideModal();
  titleInput.value = "";
  noteInput.value = "";
  authorInput.value = "";
  noteButton.classList.add("menu__header");
  openModal.classList.remove("menu__header");
  body.style.display = "flex";
  saveNotesToLocalStorage();
});

container.addEventListener("click", (e) => {
  const noteElement = e.target.closest(".note");
  const noteContent = e.target.closest(".note__content");
  const addButtonBody = document.querySelector(".add__button__body");
  if (e.target.classList.contains("delete")) {
    const noteElements = document.querySelectorAll(".note");
    const deleteNote = confirm("are you sure ?");

    noteElements.forEach((note) => {
      if (
        note.children[0].children[0].innerText ==
          noteContent.firstChild.nextElementSibling.innerText &&
        deleteNote &&
        noteContent
      ) {
        note.childNodes[1].childNodes[1].childNodes[0].parentElement.parentElement.parentElement.remove();
        noteContent.remove();
        saveNotesToLocalStorage();
      }
    });

    if (deleteNote && noteElement) {
      noteElement.remove();
      body.innerHTML = "";
      saveNotesToLocalStorage();
      // } else if (deleteNote && noteContent) {
      //   noteContent.remove();
      // } else {
      return;
    }
  } else if (noteElement) {
    body.innerHTML =
      noteElement.firstChild.nextElementSibling.childNodes[1].innerHTML;
    body.innerHTML += `<span class="date">Feb 8, 2021/By ${noteElement.firstChild.nextElementSibling.childNodes[5].innerText}</span>`;
    body.innerHTML +=
      noteElement.firstChild.nextElementSibling.childNodes[3].innerHTML;
    body.innerHTML += `<button class="add__button__body">+</button>`;

    if (mobileMediaQuery.matches) {
      acrchive.style.display = "none";
    }
  }
  addButtonBody.addEventListener("click", () => {
    showModal();
    noteButton.classList.remove("menu__header");
    openModal.classList.add("menu__header");
  });
});

searchBar.addEventListener("keyup", (e) => {
  const noteElements = document.querySelectorAll(".note");

  noteElements.forEach((note) => {
    if (
      note.childNodes[1].childNodes[1].childNodes[0].textContent.includes(
        searchBar.value
      ) &&
      searchBar.value
    ) {
      note.style.backgroundColor = "#F6F6F6";
    } else {
      note.style.backgroundColor = "white";
    }
  });
});

arrowButton.addEventListener("click", () => {
  acrchive.style.display = "none";
  arrowMenuButton.style.display = "block";
});

arrowMenuButton.addEventListener("click", () => {
  acrchive.style.display = "block";
  arrowMenuButton.style.display = "none";
});

if (mobileMediaQuery.matches) {
  menu.style.display = "none";

  MenuButton.addEventListener("click", () => {
    if (!menu.classList.contains("hide")) {
      const element = document.createElement("img");
      element.src = "./images/Menu.png";
      MenuButton.appendChild(element);
      MenuButton.style.background = 'url("./images/Vector.png';
      MenuButton.style.width = "100%";
      MenuButton.style.display = "flex";
      MenuButton.style.justifyContent = "right";
      MenuButton.style.backgroundRepeat = "no-repeat";
      menu.style.display = "flex";
      menu.style.flexDirection = "column";
      container.style.flexDirection = "row";
      menuSide.style.flexDirection = "column";
      menuSide.style.flex = "1";
      menuSide.style.justifyContent = "flex-start";
      menuSide.style.alignItems = "flex-start";
      body.style.display = "none";
      logo.style.display = "none";
      menu.classList.add("hide");
      searchImg.style.display = "none";
    } else if (menu.classList.contains("hide")) {
      MenuButton.style.background = 'url("./images/Menu.png';
      MenuButton.style.backgroundRepeat = "no-repeat";
      menu.classList.remove("hide");
      menu.style.display = "none";
      acrchive.style.display = "block";
      body.style.display = "block";
      searchImg.style.display = "block";
      logo.style.display = "block";
      container.style.flexDirection = "column";
      menuSide.style.flexDirection = "row";
      menuSide.style.flex = "0";
      menuSide.style.justifyContent = "space-between";
      menuSide.style.alignItems = "center";
      hideModal();
      MenuButton.children[0].remove();
      MenuButton.style.width = "20px";
    }
  });

  searchImg.addEventListener("click", () => {
    if (!menu.classList.contains("hide")) {
      searchImg.style.background = 'url("./images/Vector.png';
      menu.classList.add("hide");
      searchBar.style.display = "block";
      searchBar.style.width = "100%";
      searchBar.style.marginTop = "20px";
      menuSide.style.flexWrap = "wrap";
    } else if (menu.classList.contains("hide")) {
      searchImg.style.background = 'url("./images/Frame.png';
      menu.classList.remove("hide");
      searchBar.style.display = "none";
    }
  });

  openModal.addEventListener("click", () => {
    const input = document.querySelector(".AddPage .page__Form input");
    menu.style.display = "none";
    modal.style.left = "-15%";
    input.style.width = "150%";
    noteInput.style.width = "150%";
  });
}

const saveNotesToLocalStorage = () => {
  const notes = [];

  const noteElements = document.querySelectorAll(".note");
  noteElements.forEach((noteElement) => {
    const titleInputValue = noteElement.querySelector(
      ".note__content__header"
    ).innerText;
    const noteInputValue =
      noteElement.querySelector(".note__content__p").innerText;

    const authorInputValue =
      noteElement.querySelector(".autor__value").innerText;

    notes.push({
      title: titleInputValue,
      note: noteInputValue,
      author: authorInputValue,
      pinnedNote: noteElement.classList.contains("pinnedNote"),
    });
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};

const loadNotesFromLocalStorage = () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note) => {
    if (note.pinnedNote) {
      const markUp = `<div class="note pinnedNote">
      <div class="note__content">
        <h1 class="note__content__header">
          ${note.title}
        </h1>
        <p class="note__content__p">
          ${note.note}
        </p>
        <span class="autor__value">${note.author}</span>
        <div class="note__footer">
          <span class="date">Feb 8, 2021</span>
          <button class="delete">Delete</button>
        </div>
      </div>
    </div>`;
      pinnedNotes.insertAdjacentHTML("afterbegin", markUp);
    } else {
      const markUp = `<div class="note">
        <div class="note__content">
          <h1 class="note__content__header">
            ${note.title}
          </h1>
          <p class="note__content__p">
            ${note.note}
          </p>
          <span class="autor__value">${note.author}</span>  
          <div class="note__footer">
            <span class="date">Feb 8, 2021</span>
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>`;
      noteContainer.insertAdjacentHTML("afterbegin", markUp);
    }
  });
};

loadNotesFromLocalStorage();
