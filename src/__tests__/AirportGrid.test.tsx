// src/__tests__/AirportGrid.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { AirportGrid } from "@/components/airport/airportGrid/AirportGrid";
import { Airport } from "@/interfaces";

//  Mock AirportCard so we don't depend on its internal UI
jest.mock("../components/airport/airportCard/AirportCard", () => ({
  AirportCard: ({ airport }: { airport: Airport }) => (
    <div data-testid="airport-card">{airport.airport_name}</div>
  ),
}));

const mockAirports: Partial<Airport>[] = [
  {
    id: "5524551",
    airport_name: "Anaa 1",
    country_name: "French Polynesia",
  },
  {
    id: "5524552",
    airport_name: "Anaa 2",
    country_name: "French Polynesia",
  },
];

describe("AirportGrid", () => {
  it("renders one AirportCard per airport", () => {
    render(<AirportGrid airports={mockAirports as Airport[]} />);

    const cards = screen.getAllByTestId("airport-card");
    expect(cards).toHaveLength(mockAirports.length);
  });

  it("shows each airport name", () => {
    render(<AirportGrid airports={mockAirports as Airport[]} />);

    expect(screen.getByText("Anaa 1")).toBeInTheDocument();
    expect(screen.getByText("Anaa 2")).toBeInTheDocument();
  });

  it("renders an empty grid when no airports are passed", () => {
    const { container } = render(<AirportGrid airports={[]} />);

    // Check the grid exists
    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();

    // But there are no cards
    expect(screen.queryByTestId("airport-card")).not.toBeInTheDocument();
  });
});
