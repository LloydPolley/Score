import classNames from "classnames/bind";
import style from "./PageHero.module.scss";

const cx = classNames.bind(style);

function PageHero({ logo, name }) {
  return (
    <>
      <div className={cx("page-hero")}>
        <div className={cx("page-hero__content")}>
          <div className={cx("page-hero__img-box")}>
            <img src={logo} />
          </div>
          <div className={cx("page-hero__text")}>
            <p>Competition</p>
            <h1>{name}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHero;
