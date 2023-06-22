import classNames from "classnames";
import { Element } from "react-scroll";

import { Navigate, Work } from "@components";

import style from "./style.module.css";

interface Props {
  className?: string;
  "data-testid"?: string;
}

export function Experience(props: Props) {
  const name = "experience";
  const className = classNames("__sections_experience", "section", props.className);

  /**
   * Return the component
   */
  return (
    <>
      <a id={name} />
      <Element name={name} data-testid={props["data-testid"]} className={className}>
        <div>
          <h2 className="h2">Experience <a href="https://cv.stevemckeogh.com" className="tiny regular block link">Find out more on my CV</a></h2>
          <div className={style.grid}>
            <div className={style.column}>
              <Work
                from={new Date("2022-07-20")}
                title="Staff Software Engineer"
                company="ScreenCloud Ltd"
                location="London, UK"
              />
              <Work
                from={new Date("2018-04-17")}
                to={new Date("2022-07-19")}
                title="Staff Software Engineer"
                company="ScreenCloud Ltd"
                location="Bangkok, Thailand"
              />
              <Work
                from={new Date("2016-10-02")}
                to={new Date("2018-04-16")}
                title="Senior Software Engineer"
                company="ScreenCloud Ltd"
                location="London, UK"
              />
              <Work
                from={new Date("2016-03-02")}
                to={new Date("2016-10-01")}
                title="Senior Web Developer"
                company="Thin Martian"
                location="London, UK"
              />
            </div>
            <div className={style.column}>
              <Work
                from={new Date("2005-06-10")}
                to={new Date("2016-03-01")}
                title="Senior Web Developer"
                company="Codegent Ltd"
                location="London, UK"
              />
              <Work
                from={new Date("2000-06-10")}
                to={new Date("2005-06-09")}
                title="Web Developer"
                company="Reading Room Ltd"
                location="London, UK"
              />
              <Work
                from={new Date("1999-05-10")}
                to={new Date("2000-06-09")}
                title="Junior Web Developer"
                company="Datadial Ltd"
                location="London, UK"
              />
            </div>
          </div>
        </div>
        <Navigate to="footer">Goodbye!</Navigate>
      </Element>
    </>
  );
}