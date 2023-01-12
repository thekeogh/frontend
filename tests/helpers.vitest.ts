import { faker } from "@faker-js/faker";

/**
 * Exporters
 */
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

/**
 * Export package assets first...
 */
export { faker };
