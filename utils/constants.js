export const initialTodos = [
  {
    id: "1",
    name: "Buy groceries",
    dueDate: "2025-09-01",
  },
  {
    id: "2",
    name: "Finish project",
    dueDate: "2025-09-03",
  },
  {
    id: "3",
    name: "Call mom",
    dueDate: "2025-09-04",
  },
];

export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
