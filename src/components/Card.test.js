import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

test("renders the component Card & given props", () => {
  render(<Card el={el} />);

  const img = screen.getByTestId(`img-recipe-${el.id}`);
  const title = screen.getByTestId(`title-recipe-${el.id}`);
  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  const link = screen.getByTestId(`link-recipe-${el.id}`);

  expect(img).toHaveProperty("src", el.image);
  expect(title).toHaveTextContent(el.name);
  expect(rating).toHaveTextContent(el.rating);
  expect(link).toHaveAttribute("href", `https://dummyjson.com/recipes/${el.id}`);
});
