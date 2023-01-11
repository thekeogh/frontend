import classNames from "classnames";

import photo from "./photo.jpg";
import style from "./style.module.css";

interface Props {
  size?: "default";
  className?: string;
  "data-testid"?: string;
}

export function Avatar(props: Props) {
  const size = props.size || "default";
  const className = classNames("__avatar", style.container, style[size], props.className);

  /**
   * Return the component
   */
  return <img src={photo} className={className} alt="Photo of Steve McKeogh" title="Photo of Steve McKeogh" />;
}