import React from "react";

function PopupWithForm({ name, onClose, title, children, isLoading, buttonIsLoading, button, onSubmit, isOpen }) {
  return (
    <div
      className={`popup popup-${name} ${
        isOpen ? "popup_opened" : ""
      }`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`${name}`}
          onSubmit={onSubmit}
        >
          <fieldset className="popup__fieldset">{children}</fieldset>
          <button className="popup__button" type="submit">
            {isLoading ? buttonIsLoading : button}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
