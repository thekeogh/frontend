import classNames from "classnames";

import style from "./style.module.css";

interface Props {
  children: React.ReactNode;
  size?: "default" | "large";
  className?: string;
  "data-testid"?: string;
}
interface ButtonProps extends Props {
  type?: "button";
  onClick: () => void;
  to?: never;
  newWindow?: never;
}
interface HrefProps extends Props {
  type: "href";
  to: string;
  newWindow?: boolean;
  onClick?: never;
}

export function Button(props: ButtonProps | HrefProps) {
  const size = props.size || "default";
  const className = classNames("__button", style.container, style[size], props.className);

  /**
   * Return the component
   */
  if (props.type === "href") {
    // <a>
    return (
      <a
        href={props.to}
        data-testid={props["data-testid"]}
        className={className}
        target={props.newWindow ? "_blank" : undefined}
        rel={props.newWindow ? "noreferrer" : undefined}
      >
        <span>
          {props.children}
        </span>
      </a>
    );
  } else {
    // <button>
    return (
      <button
        type="button"
        onClick={props.onClick}
        data-testid={props["data-testid"]}
        className={className}
      >
        <span>
          {props.children}
        </span>
      </button>
    );
  }
}