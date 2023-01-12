import { beforeEach, expect, it } from "vitest";

import { Avatar } from "@components";

import * as helpers from "@test.helpers";

const handle = "handle";
let word: string;
beforeEach(() => {
  word = helpers.faker.word.adjective();
});

it("Renders the <img>", () => {
  helpers.render(<Avatar />);
  expect(helpers.screen.getByRole("img")).toBeInTheDocument();
});
it("Affixes the default className if not specified", () => {
  helpers.render(<Avatar data-testid={handle} />);
  expect(helpers.screen.getByTestId(handle)).toHaveClass("default");
});
it("Affixes the default className if specified", () => {
  helpers.render(<Avatar size="default" data-testid={handle} />);
  expect(helpers.screen.getByTestId(handle)).toHaveClass("default");
});
it("Affixes the custom className", () => {
  helpers.render(<Avatar data-testid={handle} className={word} />);
  expect(helpers.screen.getByTestId(handle)).toHaveClass(word);
});