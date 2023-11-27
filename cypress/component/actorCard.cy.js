import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ActorCard from "./ActorCard";

// Mock the selectFavorite function
const selectFavorite = jest.fn();

const actor = {
  id: 1,
  name: "John Doe",
  profile_path: "/path/to/image.jpg",
};

test("renders actor card with correct data", () => {
  render(<ActorCard actor={actor} selectFavorite={selectFavorite} />);

  const actorNameElement = screen.getByText("John Doe");
  expect(actorNameElement).toBeInTheDocument();

  const moreInfoButton = screen.getByText("More Info ...");
  fireEvent.click(moreInfoButton);

  expect(window.location.pathname).toBe(`/actors/${actor.id}`);

  const addToFavoriteButton = screen.getByRole("button", { name: "Add to Favorite" });
  fireEvent.click(addToFavoriteButton);

  expect(selectFavorite).toHaveBeenCalledWith(actor.id);
});
