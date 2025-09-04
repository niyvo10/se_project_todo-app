export default class Todo {
  constructor(data, selector) {
    this._name = data.name;
    this._due = data.due || "";
    this._id = data.id;
    this._done = data.done || false;
    this._selector = selector;
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo-item")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._checkbox.addEventListener("change", () => {
      this._element.classList.toggle("todo_completed", this._checkbox.checked);
    });
    this._deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
  }

  getView() {
    this._element = this._getTemplate();
    this._checkbox = this._element.querySelector(".todo__checkbox");
    this._label = this._element.querySelector(".todo__label");
    this._title = this._element.querySelector(".todo__text");
    this._dueDate = this._element.querySelector(".todo__due");
    this._deleteButton = this._element.querySelector(".todo__delete-button");

    this._checkbox.id = `todo-${this._id}`;
    this._label.setAttribute("for", `todo-${this._id}`);
    this._title.textContent = this._name;
    this._dueDate.textContent = this._due;

    if (this._done) {
      this._checkbox.checked = true;
      this._element.classList.add("todo_completed");
    }

    this._setEventListeners();
    return this._element;
  }
}

export const initialTodos = [
  {
    id: "1",
    name: "Buy groceries",
    due: "2025-09-01",
  },
  {
    id: "2",
    name: "Finish project",
    due: "2025-09-03",
  },
  {
    id: "3",
    name: "Call mom",
    due: "2025-09-04",
  },
];
