import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Root from "./Root";

test("expects addContactButton to be in App component", () => {
  const { queryByTestId } = render(<Root />);
  const addContactButton = queryByTestId("add-contact-button");
  expect(addContactButton).toBeInTheDocument();
});

test("expects Drawer component not to be in App component on render", () => {
  const { queryByTestId } = render(<Root />);
  const addContactDrawer = queryByTestId("add-contact-drawer");
  expect(addContactDrawer).not.toBeInTheDocument();
});

test("expects Drawer component to be in App component on click", () => {
  const { queryByTestId } = render(<Root />);

  const addContactButton = queryByTestId("add-contact-button");
  fireEvent.click(addContactButton);

  const addContactDrawer = queryByTestId("add-contact-drawer");
  expect(addContactDrawer).toBeInTheDocument();
});
