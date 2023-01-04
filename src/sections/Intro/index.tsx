import classNames from "classnames";

import style from "./style.module.css";

interface Props {
  className?: string;
  "data-testid"?: string;
}

export function Intro(props: Props) {
  const className = classNames("__intro", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <section data-testid={props["data-testid"]} className={className}>
      INTRO
    </section>
  );
}