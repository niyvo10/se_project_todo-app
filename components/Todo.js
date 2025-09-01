export default class Todo {
  constructor(data, selector) {
    this._name = data.name;
    this._dueDate = data.dueDate || "";
    this._id = data.id;
    this._selector = selector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
    return template;
  }

  _setEventListeners() {
    this._checkbox.addEventListener("change", () => {
      this._checkboxLabel.classList.toggle("todo__label_completed");
    });

    this._deleteButton.addEventListener("click", () => {
      this._element.remove();
    });
  }

  getView() {
    this._element = this._getTemplate();

    this._checkbox = this._element.querySelector(".todo__checkbox");
    this._checkboxLabel = this._element.querySelector(".todo__label");
    this._title = this._element.querySelector(".todo__title");
    this._due = this._element.querySelector(".todo__date");
    this._deleteButton = this._element.querySelector(".todo__delete");

    this._checkbox.id = `todo-${this._id}`;
    this._checkboxLabel.setAttribute("for", `todo-${this._id}`);
    this._title.textContent = this._name;
    this._due.textContent = this._dueDate;

    this._setEventListeners();

    return this._element;
  }
}