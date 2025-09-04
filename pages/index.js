import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import { validationConfig, initialTodos } from "../utils/constants.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const openPopupBtn = document.querySelector(".open-popup-button");
const closePopupBtn = document.querySelector(".form__close");
const modal = document.querySelector(".modal");
const todoContainer = document.querySelector(".todo-list");
const formElement = document.querySelector(".form");
const inputTitle = formElement.querySelector("#todo-title");
const inputDue = formElement.querySelector("#todo-due");

const formValidator = new FormValidator(validationConfig, formElement);
formValidator.enableValidation();

initialTodos.forEach((data) => {
  const todo = new Todo(data, "#todo-template");
  todoContainer.append(todo.getView());
});

openPopupBtn.addEventListener("click", () =>
  modal.classList.add("modal_opened")
);
closePopupBtn.addEventListener("click", () =>
  modal.classList.remove("modal_opened")
);

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    id: uuidv4(),
    name: inputTitle.value,
    due: inputDue.value,
    done: false,
  };
  const todo = new Todo(newTodo, "#todo-template");
  todoContainer.prepend(todo.getView());
  formValidator.resetValidation();
  modal.classList.remove("modal_opened");
});
