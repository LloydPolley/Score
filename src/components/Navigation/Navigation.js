import cx from "classnames";
import "./Navigation.scss";

function Navigation() {
  return (
    <div className={cx("nav-container")}>
      <div className={cx("nav")}>
        <a className={cx("nav__name")} href="/">
          TABLR
        </a>
      </div>
    </div>
  );
}

export default Navigation;
