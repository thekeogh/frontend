import { Mock, beforeEach, describe, expect, it } from "vitest";

import { Button } from "@components";

import * as helpers from "@test.helpers";

const handle = "handle";
let word: string;
let url: string;
let onClick: Mock;
beforeEach(() => {
  word = helpers.faker.word.adjective();
  url = helpers.faker.internet.url();
  onClick = vi.fn();
});

//
// button
//
describe("button", () => {
  it("Renders a <button> if not specified", () => {
    helpers.render(<Button onClick={onClick}>{word}</Button>);
    expect(helpers.screen.getByRole("button")).toBeInTheDocument();
  });
  it("Renders a <button> if specified", () => {
    helpers.render(<Button type="button" onClick={onClick}>{word}</Button>);
    expect(helpers.screen.getByRole("button")).toBeInTheDocument();
  });
  it("Calls the click event onClick", async () => {
    helpers.render(<Button data-testid={handle} onClick={onClick}>{word}</Button>);
    expect(onClick).not.toBeCalled();
    await helpers.userEvent.click(helpers.screen.getByTestId(handle));
    expect(onClick).toBeCalledTimes(1);
  });
});

//
// a
//
describe("a", () => {
  it("Renders a <a> if specified", () => {
    helpers.render(<Button type="href" to={url}>{word}</Button>);
    expect(helpers.screen.getByRole("link")).toBeInTheDocument();
  });
  it("Renders the correct href value", () => {
    helpers.render(<Button data-testid={handle} type="href" to={url}>{word}</Button>);
    expect(helpers.screen.getByTestId(handle)).toHaveAttribute("href", url);
  });
  it("Does not add the target or rel attr if newWindow not sent in", () => {
    helpers.render(<Button data-testid={handle} type="href" to={url}>{word}</Button>);
    expect(helpers.screen.getByTestId(handle)).not.toHaveAttribute("target", "_blank");
    expect(helpers.screen.getByTestId(handle)).not.toHaveAttribute("rel", "noreferrer");
  });
  it("Does add the target and rel attr if newWindow is sent in", () => {
    helpers.render(<Button data-testid={handle} type="href" to={url} newWindow>{word}</Button>);
    expect(helpers.screen.getByTestId(handle)).toHaveAttribute("target", "_blank");
    expect(helpers.screen.getByTestId(handle)).toHaveAttribute("rel", "noreferrer");
  });
});

//
// shared
//
it("Affixes the default className if not specified", () => {
  helpers.render(<Button data-testid={handle} onClick={onClick}>{word}</Button>);
  expect(helpers.screen.getByTestId(handle)).toHaveClass("default");
});
it("Affixes the large className if size specified", () => {
  helpers.render(<Button data-testid={handle} size="large" onClick={onClick}>{word}</Button>);
  expect(helpers.screen.getByTestId(handle)).toHaveClass("large");
});
it("Renders the button label", () => {
  helpers.render(<Button data-testid={handle} onClick={onClick}>{word}</Button>);
  expect(helpers.screen.getByText(word)).toBeInTheDocument();
});
it("Affixes the custom className", () => {
  helpers.render(<Button data-testid={handle} onClick={onClick} className={word}>{word}</Button>);
  expect(helpers.screen.getByTestId(handle)).toHaveClass(word);
});