import classNames from "classnames";
import { Element, scroller } from "react-scroll";

import { Avatar, Navigate } from "@components";

import style from "./style.module.css";

interface Props {
  className?: string;
  "data-testid"?: string;
}

export function About(props: Props) {
  const name = "about";
  const className = classNames("__sections_about", "section", props.className);

  /**
   * Return the component
   */
  return (
    <>
      <a id={name} />
      <Element name={name} data-testid={props["data-testid"]} className={className}>
        <div>
          <h2 className="h2">About Me</h2>
          <div className={style.about}>
            <Avatar />
            <blockquote>
              <p>I am Steve McKeogh, a seasoned Full Stack Staff Software Engineer with extensive expertise spanning over two decades in the industry.</p>
              <p>My primary focus lies in <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a>, <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>, <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a>, <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a>, and <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>, but my skill set extends far beyond these technologies. Feel free to <a href="#skills" onClick={() => scroller.scrollTo("skills", { smooth: true })}>explore my abilities</a> for further details or view my <a href="https://cv.stevemckeogh.com">curriculum vitae</a>.</p>
              <p>My journey began in 1999 as a junior web developer, steadily progressing to my current role as a full stack staff software engineer.</p>
              <p>Presently, I am based in my quaint hometown of London, England. However, I cherished four wonderful years in Asia when I relocated to Bangkok, Thailand, in 2018.</p>
            </blockquote>
          </div>
        </div>
        <Navigate to="skills">My Skills</Navigate>
      </Element>
    </>
  );
}