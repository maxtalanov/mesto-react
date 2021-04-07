import React from "react";

import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from  "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name , setName ] = React.useState('');
  const [description  , setDscription] = React.useState('');
  console.log(name, description);

  function handleNameChange(e){
    setName(e.target.value);
  }
  function handleDscriptionChange(e){
    setDscription(e.target.value);
  }
  return(
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onclose}
    inputBtnSelector="save" inpitValue="Сохранить">

      <fieldset className="form__set form__profile">
        <input className="form__input form__name" id="profile-name" type="text" name="name" placeholder="Введите ваше имя и/или фамилию"
               minLength="2" maxLength="40" autoComplete="off" required value={name} onChange={handleNameChange}/>
        <span className="form__error-span" id="profile-name-error" />

        <input className="form__input form__status" id="profile-status" type="text" name="about" placeholder="Введите ваш статус"
               minLength="2" maxLength="200" autoComplete="off" required value={description} onChange={handleDscriptionChange}/>
        <span className="form__error-span" id="profile-status-error" />
      </fieldset>

    </PopupWithForm>
  )
}

export default EditProfilePopup;
