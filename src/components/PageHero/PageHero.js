import classNames from "classnames/bind";
import style from "./PageHero.module.scss";

const cx = classNames.bind(style);

const selections = [
  { league: "Premier League", id: 39 },
  { league: "La Liga", id: 140 },
];

function PageHero({ title }) {
  return (
    <>
      <div className={cx("page-hero")}>
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default PageHero;
