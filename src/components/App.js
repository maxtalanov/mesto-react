import React from "react";

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  //console.log(props, 'Компонент APP');
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);
  const [dataImg, setDataImg] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState('');

    React.useEffect(() => {
    api.getInfoUser(currentUser)
      .then(currentUser => {
        setCurrentUser(currentUser)
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  },[])


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

  function handleUpdateUser(editDataUser) {
      //console.log(editDataUser, '')
    api.editYourProfile(editDataUser)
      .then(newDataUser => {
        setCurrentUser(newDataUser);
        closeAllPopups();
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';
        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  }

  function handleUpdateAvatar(editAvatar) {
      console.log(editAvatar)
    api.upAvatar(editAvatar)
      .then(newDataUser => {
        setCurrentUser(newDataUser);
        closeAllPopups();
      })
      .catch((err) => {
      const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';
      console.log('Код ошибки:', err); // выведем ошибку в консоль
      console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
          <Main
            profileEditOnClick={handleEditProfileClick}
            addPlacrOnClick={handleAddPlaceClick}
            avatarEditOnClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />

        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup  isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

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

        <PopupWithForm name="delete" title="Вы уверены?" inputBtnSelector="create" inpitValue="Да">
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          cardData={dataImg}
          onClose={closeAllPopups}
        />


      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
