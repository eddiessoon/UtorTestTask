import React from 'react';
import style from '../../components/Main/Main.module.scss'
import square from '../../assets/images/square.svg'
import triangle from '../../assets/images/triangle.svg'
import circle from '../../assets/images/circle.svg'
import rectangle from '../../assets/images/rectangle.svg'
import rectnb from '../../assets/images/rectnb.svg'
import circlemini from '../../assets/images/circlemini.svg'
const Main = () => {
  return (
    <>
      <article>
        <p>
          Добрый день, спасибо, что откликнулись на{" "}
          <a href="https://hh.ru/vacancy/73584709">вакансию.</a>
        </p>
        <p> Для начала нам необходимо оценить ваши навыки.</p>
        <p>Просим решить несложную задачу.</p>
      </article>
      <article>
        <p>
          Дано изображение, на котором изображены геометрические фигуры.
          Необходимо его сверстать pixel perfect, используя HTML и CSS.
        </p>
        <p>
          Решение должно находиться в созданном вами репозитории, ссылку на
          который вам необходимо прислать в сообщения на hh.ru
        </p>
      </article>
      <main className="main">
        <div className={style.square}>
          <img src={square} alt="square" />
        </div>
        <div className={style.triangle}>
          <img src={triangle} alt="triangle" />
        </div>
        <div className={style.circle}>
          <img src={circle} alt="circle" />
        </div>
        <div className={style.rectangle}>
          <img src={rectangle} alt="rectangle" />
        </div>
        <div className={style.rectnb}>
          <img src={rectnb} alt="rectnb" />
        </div>
        <div className={style.circlemini}>
          <img src={circlemini} alt="circlemini" />
        </div>
      </main>
      <article>
        <p>Спасибо и удачи!</p>
      </article>
    </>
  );
};

export default Main;