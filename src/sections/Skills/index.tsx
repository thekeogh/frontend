import classNames from "classnames";
import { Element } from "react-scroll";

import { Navigate } from "@components";

import style from "./style.module.css";

interface Props {
  className?: string;
  "data-testid"?: string;
}

export function Skills(props: Props) {
  const className = classNames("__sections_skills", "section", style.container, props.className);

  /**
   * Return the component
   */
  return (
    <Element name="skills" data-testid={props["data-testid"]} className={className}>
      <div>
        <h2 className="h2">My Skills</h2>
        <ul className={style.skills}>
          <li className={style.green}>Node.js</li>
          <li className={style.green}>TypeScript</li>
          <li className={style.green}>GraphQL</li>
          <li className={style.green}>PostGraphile</li>
          <li className={classNames(style.green, style.legacy)}>PHP</li>
          <li className={classNames(style.green, style.legacy)}>Laravel</li>
          <li className={classNames(style.green, style.legacy)}>ColdFusion</li>
        </ul>
        <ul className={style.skills}>
          <li className={style.blue}>React</li>
          <li className={style.blue}>Vue.js</li>
          <li className={style.blue}>JavaScript</li>
          <li className={style.blue}>HTML</li>
          <li className={style.blue}>CSS</li>
          <li className={style.blue}>Sass</li>
          <li className={style.blue}>Stylus</li>
          <li className={style.blue}>Less</li>
          <li className={classNames(style.blue, style.legacy)}>Redux</li>
        </ul>
        <ul className={style.skills}>
          <li className={style.purple}>PostgreSQL</li>
          <li className={style.purple}>MySQL</li>
          <li className={style.purple}>MariaDB</li>
          <li className={style.purple}>Oracle</li>
        </ul>
        <ul className={style.skills}>
          <li className={style.orange}>Vitest</li>
          <li className={style.orange}>Jest</li>
          <li className={classNames(style.orange, style.legacy)}>Mocha</li>
          <li className={classNames(style.orange, style.legacy)}>Chai</li>
          <li className={classNames(style.orange, style.legacy)}>PHPUnit</li>
          <li className={classNames(style.orange, style.legacy)}>PHPSpec</li>
        </ul>
      </div>
      <Navigate to="experience">Experience</Navigate>
    </Element>
  );
}