import React from 'react';
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription , setUserDescription ] = React.useState();
  const [userAvatar , setUserAvatar ] = React.useState();
  const [cards , setCards ] = React.useState([]);

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

    //запрос за пользователем
    api.getInfoUser()
      .then(userInfo => {
          setUserAvatar(userInfo.avatar);
          setUserName(userInfo.name);
          setUserDescription(userInfo.about);
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
          <img className="profile__avatar profile__btn-avtar-edit hover-opacity" src={userAvatar} alt="Аватар" />
        </a>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button hover-opacity" type="button" onClick={props.profileEditOnClick} />
          <p className="profile__status">{userDescription}</p>
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
            onClickCard={props.onCardClick}
          />)
        }
      </section>
    </main>
  );
}

export default Main;
