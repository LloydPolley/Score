import cx from "classnames";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className={cx("nav-container")}>
      <div className={cx("nav")}>
        <div className={cx("nav__name-box")}>
          <p className={cx("nav__name")}>TABLR</p>
        </div>
        <div className={cx("nav__links")}>
          <a href="/">Football</a>
          <a href="/f1">F1</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
