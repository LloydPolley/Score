import classNames from "classnames/bind";
import style from "./Selection.module.scss";

const cx = classNames.bind(style);

const selections = [
  { league: "Premier League", id: 39 },
  { league: "La Liga", id: 140 },
];

function Selection({ activeId = 39, setActiveId }) {
  return (
    <div className={cx("selection")}>
      {selections?.map((item) => {
        const { league, id } = item;
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
            {league}
          </div>
        );
      })}
    </div>
  );
}

export default Selection;
