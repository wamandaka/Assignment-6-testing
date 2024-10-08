import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component with NavBar, image banner, and Footer", async () => {
  render(<App />);

  // image banner is rendered
  const banner = screen.getByTestId("image-banner");
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveProperty(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  );

  // footer is rendered
  const footer = screen.getByTestId("footer-text");
  const linkFacebook = screen.getByTestId("link-facebook");
  const linkX = screen.getByTestId("link-x");
  const linkInstagram = screen.getByTestId("link-instagram");

  expect(linkFacebook).toBeInTheDocument();
  expect(linkX).toBeInTheDocument();
  expect(linkInstagram).toBeInTheDocument();
  expect(footer).toBeInTheDocument();

  // navbar is rendered
  const myRecipe = screen.getByTestId("my-recipe");
  const formSearch = screen.getByTestId("form-search");

  expect(myRecipe).toBeInTheDocument();
  expect(formSearch).toBeInTheDocument();
});
