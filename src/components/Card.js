import React from "react";


function Card(props) {
  // console.log(props, 'Компонен: CARD');

  function clickImg() {
    props.onClickCard(props.title, props.src, props.alt);
  }

  return(
    <figure className="card">
      <button className="trash hover-opacity" />
      <img className="card__img" src={props.scr} alt={props.alt} onClick={clickImg}/>
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
