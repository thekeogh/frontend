import classNames from "classnames";
import { scroller } from "react-scroll";

import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  to: string;
  className?: string;
  "data-testid"?: string;
}

export function Navigate(props: Props) {
  const className = classNames("__navigate", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <a href={`#${props.to}`} data-testid={props["data-testid"]} className={className} onClick={() => scroller.scrollTo(props.to, { smooth: true })}>
      <span className={style.label}>{props.children}</span>
      <span className={classNames(style.icon, "material-symbols-outlined")}>expand_circle_down</span>
    </a>
  );
}