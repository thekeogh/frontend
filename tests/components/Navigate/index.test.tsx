import { scroller } from "react-scroll";
import { beforeEach, expect, it } from "vitest";

import { Navigate } from "@components";

import * as helpers from "@test.helpers";

vi.mock("react-scroll");

const handle = "handle";
let word: string;
let to: string;
beforeEach(() => {
  word = helpers.faker.word.adjective();
  to = helpers.faker.word.adjective();
});


it("Renders the label", () => {
  helpers.render(<Navigate data-testid={handle} to={to}>{word}</Navigate>);
  expect(helpers.screen.getByText(word)).toBeInTheDocument();
});
it("Affixes the custom className", () => {
  helpers.render(<Navigate data-testid={handle} to={to} className={word}>{word}</Navigate>);
  expect(helpers.screen.getByTestId(handle)).toHaveClass(word);
});
it("Renders the correct href value", () => {
  helpers.render(<Navigate data-testid={handle} to={to}>{word}</Navigate>);
  expect(helpers.screen.getByTestId(handle)).toHaveAttribute("href", `#${to}`);
});