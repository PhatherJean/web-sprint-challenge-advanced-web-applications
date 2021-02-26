import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const getColorMock = jest.fn();

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

const colors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
];
test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  const { rerender } = render(<BubblePage colorList={[]} />);
  expect(screen.getByText(/colors/i)).toBeVisible();
  expect(screen.getByText(/bubbles/i)).toBeVisible();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
