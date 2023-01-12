import classNames from "classnames";
import { Element } from "react-scroll";

import style from "./style.module.css";

interface Props {
  className?: string;
  "data-testid"?: string;
}

export function Footer(props: Props) {
  const className = classNames("__sections_footer", "section", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <Element name="footer" data-testid={props["data-testid"]} className={className}>
      <p className="h1">McKeogh<span>.</span></p>
      <p className="shout">Full Stack Staff Software Engineer</p>
      <p className={style.social}>
        <a href="https://github.com/thekeogh" className={style.github}>
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/thekeogh/" className={style.linkedin}>
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="https://stackoverflow.com/users/1780733/keogh" className={style.stackoverflow}>
          <i className="fa-brands fa-stack-overflow" />
        </a>
      </p>
    </Element>
  );
}


/*  */