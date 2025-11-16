// import { getAirportsByPage } from "@/actions/airports/airports.services";
import { getAirportsByPage } from "@/actions/airports/airports.services";
import { Pagination, SearchBar } from "@/components";
import { AirportGrid } from "@/components/airport/airportGrid/AirportGrid";

interface AirportsPageProps {
  searchParams: {
    page?: string;
    s?: string;
  };
}

export default async function AirportsPage({
  searchParams,
}: AirportsPageProps) {
  const params = await searchParams;
  const page = params.page;
  const searchValue = params.s;

  const selectedPage = page ? parseInt(page) : 1;

  // const { data, totalPages } = await getAirportsByPage({
  //   page: selectedPage,
  //   searchValue,
  // });

  // Inline mock for testing

  const data = [
    {
      id: "5524551",
      gmt: "-10",
      airport_id: "1",
      iata_code: "AAA",
      city_iata_code: "AAA",
      icao_code: "NTGA",
      country_iso2: "PF",
      geoname_id: "6947726",
      latitude: "-17.05",
      longitude: "-145.41667",
      airport_name: "Anaa",
      country_name: "French Polynesia",
      phone_number: null,
      timezone: "Pacific/Tahiti",
    },
    {
      id: "5524552",
      gmt: "-10",
      airport_id: "1",
      iata_code: "AAA",
      city_iata_code: "AAA",
      icao_code: "NTGA",
      country_iso2: "PF",
      geoname_id: "6947726",
      latitude: "-17.05",
      longitude: "-145.41667",
      airport_name: "Anaa",
      country_name: "French Polynesia",
      phone_number: null,
      timezone: "Pacific/Tahiti",
    },
  ];

  const totalPages = 1; // mock pages

  return (
    <section className="main-padding flex min-h-screen items-stretch justify-center pt-20">
      <div className="inner-container flex flex-col gap-11">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <h1 className="text-gradient-sky font-serif text-[50px] font-black">
              SkyConnect Explorer
            </h1>
          </div>
          <SearchBar redirectTo="aeropuertos" direction="row" />
        </div>
        <div className="flex flex-1">
          <AirportGrid airports={data} />
        </div>
        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </div>
    </section>
  );
}
