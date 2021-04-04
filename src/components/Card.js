import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  // console.log(props, 'Компонен: CARD');

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.ownerId === currentUser._id;
  console.log(isOwn);
  //console.log(currentUser, 'Компонен: CARD');
  const cardDeletBtn = (
    `trash ${isOwn ? 'trash_btn_visible' : 'trash_btn_hidden'}`
  );

  function clickImg() {
    props.onClickCard(props);
  }

  return(
    <figure className="card">
      <button className={`${cardDeletBtn} hover-opacity`} />
      <img className="card__img" src={props.src} alt={props.alt} onClick={clickImg}/>
      <figcaption className="card__bottom">
        <div className="card__text">
          <p className="card__title">{props.title}</p>
          <div className="card__like-box">
            <button className="card__btn-like hover-opacity" type="button" />
            <p className="card__like-text">{props.likes.length}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card
