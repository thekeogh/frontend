import classNames from "classnames";

import style from "./style.module.css";

interface Props {
  from: Date;
  to?: Date;
  title: string;
  company: string;
  location: string;
  className?: string;
  "data-testid"?: string;
}

export function Work(props: Props) {
  const fromYear = props.from.getFullYear();
  const toYear = props.to ? props.to.getFullYear() : "Present";
  const className = classNames("__work", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <article data-testid={props["data-testid"]} className={className}>
      <div className={style.dates}>
        <time className={style.from} dateTime={props.from.toISOString().split("T")[0]}>{fromYear}</time>
        {fromYear !== toYear && <span>-</span>}
        <time className={style.to} dateTime={props.to && props.to.toISOString().split("T")[0]}>{fromYear === toYear ? "" : toYear}</time>
      </div>
      <h3>{props.title}</h3>
      <h4>{props.company}</h4>
      <address>{props.location}</address>
    </article>
  );
}