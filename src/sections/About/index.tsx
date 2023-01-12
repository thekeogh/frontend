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
              <p>I'm Steve McKeogh, a highly experienced Full Stack Staff Software Engineer with over twenty years experience in the industry.</p>
              <p>I currently specialise in Node.js, TypeScript, PostgreSQL, GraphQL and React but have many more strings to my bow.Check out <a href="#skills" onClick={() => scroller.scrollTo("skills", { smooth: true })}>my skills</a> if you want to know more.</p>
              <p>Starting way back in 1999 as a junior web developer and moving up to a full stack staff software engineer.</p>
              <p>I'm currently based out of my little hometown of London, England, I also spent four happy years in Asia when I relocated to Bangkok, Thailand back in 2018.</p>
            </blockquote>
          </div>
        </div>
        <Navigate to="skills">My Skills</Navigate>
      </Element>
    </>
  );
}