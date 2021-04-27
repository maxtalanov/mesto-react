import React from "react";

function Loading(props) {
  //console.log('Компонент: Loading', props)

  return (
    <input className={`form__btn-input form__btn-${props.inputBtnSelector}`} type="submit" value={`${props.inputValue}...`} disabled={true}/>
  )
}

export default Loading;
