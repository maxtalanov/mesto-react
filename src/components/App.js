import React from "react";

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWidthForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App(props) {
  //console.log(props, 'Компонент APP');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [dataImg, setDataImg] = React.useState([])

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
  }

  function handleCardClick({title, src, alt}){
  setDataImg(title, src, alt)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    //document.querySelector('.popup_type_avatar').classList.toggle('popup_opened');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    // document.querySelector('.popup_type_profile').classList.toggle('popup_opened');
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    document.querySelector('.popup_type_card').classList.toggle('popup_opened');
  }

  return (
    <div className="page">
      <Header />
      <Main
        profileEditOnClick={handleEditProfileClick}
        addPlacrOnClick={handleAddPlaceClick}
        avatarEditOnClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWidthForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onClick={handleEditProfileClick}>
        <fieldset className="form__set form__profile">
          <input className="form__input form__name" id="profile-name" type="text" name="name" placeholder="Введите ваше имя и/или фамилию"
          minLength="2" maxLength="40" autoComplete="off" required />
          <span className="form__error-span" id="profile-name-error" />

          <input className="form__input form__status" id="profile-status" type="text" name="about" placeholder="Введите ваш статус"
          minLength="2" maxLength="200" autoComplete="off" required />
          <span className="form__error-span" id="profile-status-error" />
        </fieldset>

        <input className="form__btn-input form__btn-save" type="submit" value="Сохранить" />
      </PopupWidthForm>

      <PopupWidthForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onClick={handleAddPlaceClick}>
        <fieldset className="form__set">
          <input className="form__input form__in-name" id="card-name" type="text" name="name" placeholder="Название"
          minLength="2" maxLength="30" autoComplete="off" required />
          <span className="form__error-span" id="card-name-error" />

          <input className="form__input form__in-link" id="card-link" type="url" name="link"
          placeholder="Ссылка на картинку" required />
          <span className="form__error-span" id="card-link-error" />
        </fieldset>

        <input className="form__btn-input form__btn-create" type="submit" value="Создать" />
      </PopupWidthForm>

      <PopupWidthForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onClick={handleEditAvatarClick}>

        <fieldset className="form__set">
          <input className="form__input form__in-link" id="avatar-link" type="url" name="avatar"
           placeholder="Ссылка на картинку" required />
          <span className="form__error-span" id="avatar-link-error" />
        </fieldset>

        <input className="form__btn-input form__btn-save" type="submit" value="Сохранить" />
      </PopupWidthForm>

      <PopupWidthForm name="delete" title="Вы уверены?">
        <input className="form__btn-input form__btn-create" type="submit" value="Да" />
      </PopupWidthForm>

      <ImagePopup
        card={selectedCard}
        cardData={dataImg}
        onClose={closeAllPopups}
      />


    </div>
  );
}


export default App;
