import { Airport } from "@/interfaces";
import { AirportCard } from "../airportCard/AirportCard";

export const AirportGrid = ({ airports }: { airports: Airport[] }) => {
  return (
    <div className="grid w-full items-start gap-10 md:grid-cols-2">
      {airports.map((airport) => (
        <AirportCard key={airport.id} airport={airport} />
      ))}
    </div>
  );
};
