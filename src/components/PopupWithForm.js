import React from 'react';

import Loading from '../components/Loading';
  //Компонент ф-ый
function PopupWithForm (props) {
  //console.log('Компонент: PopupWithForm', props.isLoading);

  const classOpen = props.isOpen? 'popup_opened':'';

  return (
    <section className={`popup popup_type_${props.name} ${classOpen}`}>
      <form className={`form form-${props.name}`} action="#" name={`${props.name}`} onSubmit={props.onSubmit}>
        <h2 className="form__title">{props.title}</h2>
        {props.children}

        {props.isLoading
          ?
          <Loading inputBtnSelector={props.inputBtnSelector} inputValue={props.inputValue}/>
          :
          <input className={`form__btn-input form__btn-${props.inputBtnSelector}`} type="submit" value={props.inputValue} />
        }
        <button className="form__btn-exit popup__btn-exit hover-opacity" onClick={props.onClose} type="reset" />
      </form>
    </section>
  )
}

export default PopupWithForm;
