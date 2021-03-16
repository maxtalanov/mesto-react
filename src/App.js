function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="header__logo" src="<%=require('./images/logo__header.svg')%>" alt="Логотип" />
      </header>

      <main className="content">
        <section className="profile">
          <a className="profile__img-box">
            <img className="profile__avatar profile__btn-avtar-edit hover-opacity" src="#" alt="Аватар" />
          </a>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-button hover-opacity" type="button"></button>
            <p className="profile__status"></p>
          </div>
          <button className="profile__add-button hover-opacity" type="button"></button>
        </section>
        <section className="photo-card">
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
      </footer>

      <section className="popup popup_type_profile">
        <form className="form form-profile" action="#" name="profile">
          <h2 className="form__title">Редактировать профиль</h2>
          <fieldset className="form__set form__profile">
            <input className="form__input form__name" id="profile-name" type="text" name="name" placeholder="Введите ваше имя и/или фамилию"
            minLength="2" maxLength="40" autoComplete="off" required />
            <span className="form__error-span" id="profile-name-error"></span>

            <input className="form__input form__status" id="profile-status" type="text" name="about" placeholder="Введите ваш статус"
            minLength="2" maxLength="200" autoComplete="off" required />
            <span className="form__error-span" id="profile-status-error"></span>
          </fieldset>
          <button className="form__btn-exit popup__btn-exit hover-opacity" type="reset"></button>
          <input className="form__btn-input form__btn-save" type="submit" value="Сохранить" />
        </form>
    </section>

      <section className="popup popup_type_card">
        <form className="form form-card" action="#" name="card">
          <h2 className="form__title">Новое место</h2>
          <fieldset className="form__set">
            <input className="form__input form__in-name" id="card-name" type="text" name="name" placeholder="Название"
            minLength="2" maxLength="30" autoComplete="off" required />
            <span className="form__error-span" id="card-name-error"></span>

            <input className="form__input form__in-link" id="card-link" type="url" name="link"
            placeholder="Ссылка на картинку" required />
            <span className="form__error-span" id="card-link-error"></span>
          </fieldset>
          <button className="form__btn-exit popup__btn-exit hover-opacity" type="reset"></button>
          <input className="form__btn-input form__btn-create" type="submit" value="Создать" />
        </form>
      </section>

      <section className="popup popup_type_avatar">
        <form className="form form-avatar" action="#" name="avatar">
          <h2 className="form__title">Обновить аватар</h2>
          <fieldset className="form__set">
            <input className="form__input form__in-link" id="avatar-link" type="url" name="avatar"
            placeholder="Ссылка на картинку" required />
              <span className="form__error-span" id="avatar-link-error"></span>
          </fieldset>
          <button className="form__btn-exit popup__btn-exit hover-opacity" type="reset"></button>
          <input className="form__btn-input form__btn-save" type="submit" value="Сохранить" />
        </form>
      </section>

      <section className="popup popup_type_img">
        <figure className="show-img">
          <button className="show-img__btn-exit popup__btn-exit hover-opacity" type="reset"></button>
          <img className="show-img__img" src="#" alt="#" />
            <figcaption className="show-img__text-box">
              <p className="show-img__text">текс</p>
            </figcaption>
        </figure>
      </section>

      <section className="popup popup_type_delet">
        <div className="form form-delete">
          <h2 className="form__title popup__title">Вы уверены?</h2>
          <button className="form__btn-exit popup__btn-exit hover-opacity" type="reset"></button>
          <input className="form__btn-input form__btn-create" type="submit" value="Да" />
        </div>
    </section>

      <template className="template-card">
        <figure className="card">
          <button className="trash hover-opacity"></button>
          <img className="card__img" src="#" alt="#" />
          <figcaption className="card__bottom">
            <div className="card__text">
              <p className="card__title"></p>
              <div className="card__like-box">
                <button className="card__btn-like hover-opacity" type="button"></button>
                <p className="card__like-text"></p>
              </div>
            </div>
          </figcaption>
        </figure>
      </template>
    </div>
  );
}

export default App;
