import React from "react";

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  //console.log('Компонент: AddPlacePopup', props)

  return(
    <PopupWithForm name="card" title="Новое место" isOpen={props.isOpen} onClose={props.onClose}
    inputBtnSelector="create" inpitValue="Создать">

      <fieldset className="form__set">
        <input className="form__input form__in-name" id="card-name" type="text" name="name" placeholder="Название"
               minLength="2" maxLength="30" autoComplete="off" required />
        <span className="form__error-span" id="card-name-error" />

        <input className="form__input form__in-link" id="card-link" type="url" name="link"
               placeholder="Ссылка на картинку" required />
        <span className="form__error-span" id="card-link-error" />
      </fieldset>

    </PopupWithForm>
  )
}

export default AddPlacePopup;
