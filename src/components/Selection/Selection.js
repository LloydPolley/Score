import classNames from "classnames/bind";
import style from "./Selection.module.scss";

const cx = classNames.bind(style);

function Selection({ selections, activeId, setActiveId }) {
  return (
    <div className={cx("selection")}>
      {selections?.map((item) => {
        const { name, id } = item;
        const isActive = activeId === id;
        const handleClick = () => {
          setActiveId(id);
        };

        return (
          <div
            className={cx("selection__item", isActive && "selection__active")}
            onClick={handleClick}
            key={id}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
}

export default Selection;
