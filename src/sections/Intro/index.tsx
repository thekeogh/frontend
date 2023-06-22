import classNames from "classnames";
import { Element, scroller } from "react-scroll";

import { Button } from "@components";

import style from "./style.module.css";

interface Props {
  className?: string;
  "data-testid"?: string;
}

export function Intro(props: Props) {
  const className = classNames("__sections_intro", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <Element name="intro" data-testid={props["data-testid"]} className={className}>
      <div className={style.window}>
        <header className={style.titlebar}>
          <i className={style.blips} />
        </header>
        <main className={style.body}>
          <h1 className="h1">McKeogh<span>.</span></h1>
          <p className="shout">Hello! I’m a Full Stack Staff Software Engineer</p>
          <div className={style.buttons}>
            <Button type="href" size="large" to="#about" onClick={() => scroller.scrollTo("about", { smooth: true })}>Who?</Button>
            <Button type="href" size="large" to="https://cv.stevemckeogh.com">My CV</Button>
          </div>
        </main>
      </div>
    </Element>
  );
}