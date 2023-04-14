import React from "react";

function InfoTooltip({ name, info, img, isOpen, onClose }) {
  return (
    <div
      className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img className="popup__infoTooltip_img" src={img} alt={info} />
        <figcaption className="popup__infoTooltip_caption">{info}</figcaption>
      </div>
    </div>
  );
}

export default InfoTooltip;
