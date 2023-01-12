import { beforeEach, expect, it } from "vitest";

import { Work } from "@components";

import * as helpers from "@test.helpers";

const handle = "handle";
let word: string;
let dateFrom: Date;
let dateTo: Date;
let title: string;
let company: string;
let location: string;
beforeEach(() => {
  word = helpers.faker.word.adjective();
  dateFrom = helpers.faker.date.past(10, "2005-01-01T00:00:00.000Z");
  dateTo = helpers.faker.date.recent();
  title = helpers.faker.name.jobTitle();
  company = helpers.faker.company.name();
  location = helpers.faker.address.city();
});

it("Affixes the custom className", () => {
  helpers.render(<Work
    data-testid={handle}
    from={dateFrom}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.getByTestId(handle)).toHaveClass(word);
});
it("Renders the word 'Present' if `to` date is missing", () => {
  helpers.render(<Work
    from={dateFrom}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.getByText("Present")).toBeInTheDocument();
});
it("Renders the `to` year if a date sent in", () => {
  helpers.render(<Work
    from={dateFrom}
    to={dateTo}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.getByText(dateTo.getFullYear())).toBeInTheDocument();
  expect(helpers.screen.queryByText("Present")).not.toBeInTheDocument();
});
it("Renders the `-` if the `to` year rendered", () => {
  helpers.render(<Work
    from={dateFrom}
    to={dateTo}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.queryByText("-")).toBeInTheDocument();
});
it("Does not render the `to` year if the year matches the `from` date", async () => {
  helpers.render(<Work
    from={dateTo}
    to={dateTo}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(await helpers.screen.findAllByText(dateTo.getFullYear())).toHaveLength(1);
  expect(helpers.screen.queryByText("Present")).not.toBeInTheDocument();
});
it("Does not render the `-` if not to year rendered", () => {
  helpers.render(<Work
    from={dateTo}
    to={dateTo}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.queryByText("-")).not.toBeInTheDocument();
  expect(helpers.screen.queryByText("Present")).not.toBeInTheDocument();
});
it("Renders the `from` year", () => {
  helpers.render(<Work
    from={dateFrom}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.getByText(dateFrom.getFullYear())).toBeInTheDocument();
});
it("Renders full date string if all present", () => {
  helpers.render(<Work
    from={dateFrom}
    to={dateTo}
    title={title}
    company={company}
    location={location}
    className={word}
  />);
  expect(helpers.screen.getByText(dateFrom.getFullYear())).toBeInTheDocument();
  expect(helpers.screen.queryByText("-")).toBeInTheDocument();
  expect(helpers.screen.getByText(dateTo.getFullYear())).toBeInTheDocument();
  expect(helpers.screen.queryByText("Present")).not.toBeInTheDocument();
});
it("Renders the title", () => {
  helpers.render(<Work
    data-testid={handle}
    from={dateFrom}
    title={title}
    company={company}
    location={location}
  />);
  expect(helpers.screen.queryByText(title)).toBeInTheDocument();
});
it("Renders the company", () => {
  helpers.render(<Work
    data-testid={handle}
    from={dateFrom}
    title={title}
    company={company}
    location={location}
  />);
  expect(helpers.screen.queryByText(company)).toBeInTheDocument();
});
it("Renders the location", () => {
  helpers.render(<Work
    data-testid={handle}
    from={dateFrom}
    title={title}
    company={company}
    location={location}
  />);
  expect(helpers.screen.queryByText(location)).toBeInTheDocument();
});