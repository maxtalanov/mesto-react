import React from 'react';
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  //console.log(currentUser, 'Компонен: MAIN');

  const currentUser = React.useContext(CurrentUserContext);
  const [cards , setCards ] = React.useState([]);


  function handleCardLike(card) {
    console.log(card, 'handleCardLike')
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id ? c : ''));
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      });
  }

  React.useEffect(()=> {

    //запрос за карточками
    api.getIntalCards(cards)
      .then(cards =>{
        setCards(cards);
      })
      .catch((err) => {
        const linkError = 'https://yandex.ru/support/webmaster/error-dictionary/http-codes.html';

        console.log('Код ошибки:', err); // выведем ошибку в консоль
        console.log(`Проверьте причину в справочнике по адресу: ${linkError}`)
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <a className="profile__img-box" onClick={props.avatarEditOnClick}>
          <img className="profile__avatar profile__btn-avtar-edit hover-opacity" src={currentUser.avatar} alt="Аватар" />
        </a>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-button hover-opacity" type="button" onClick={props.profileEditOnClick} />
          <p className="profile__status">{currentUser.about}</p>
        </div>
        <button className="profile__add-button hover-opacity" type="button" onClick={props.addPlacrOnClick} />
      </section>

      <section className="photo-card">
        {
          cards.map(item => <Card
            key={item._id}
            title={item.name}
            src={item.link}
            alt={item.name}
            likes={item.likes}
            _id={item._id}
            ownerId={item.owner._id}
            onClickCard={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />)
        }
      </section>
    </main>
  );
}

export default Main;
