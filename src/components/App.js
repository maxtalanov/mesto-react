import React from "react";

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //console.log(props, 'Компонент APP');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [dataImg, setDataImg] = React.useState({})

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
  }

  function handleCardClick(card){
    setSelectedCard(true);
    setDataImg(card);
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

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onClick={handleEditProfileClick}
      inputBtnSelector="save" inpitValue="Сохранить">

        <fieldset className="form__set form__profile">
          <input className="form__input form__name" id="profile-name" type="text" name="name" placeholder="Введите ваше имя и/или фамилию"
          minLength="2" maxLength="40" autoComplete="off" required />
          <span className="form__error-span" id="profile-name-error" />

          <input className="form__input form__status" id="profile-status" type="text" name="about" placeholder="Введите ваш статус"
          minLength="2" maxLength="200" autoComplete="off" required />
          <span className="form__error-span" id="profile-status-error" />
        </fieldset>


      </PopupWithForm>

      <PopupWithForm name="card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onClick={handleAddPlaceClick}
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

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onClick={handleEditAvatarClick}
      inputBtnSelector="save" inpitValue="Сохранить">

        <fieldset className="form__set">
          <input className="form__input form__in-link" id="avatar-link" type="url" name="avatar"
           placeholder="Ссылка на картинку" required />
          <span className="form__error-span" id="avatar-link-error" />
        </fieldset>

      </PopupWithForm>

      <PopupWithForm name="delete" title="Вы уверены?" inputBtnSelector="create" inpitValue="Да">
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        cardData={dataImg}
        onClose={closeAllPopups}
      />


    </div>
  );
}


export default App;
