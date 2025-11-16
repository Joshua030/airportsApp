import { SearchBar } from "@/components";
import { SearchHistoryPanel } from "@/components/ui/searchHistoryPanel/SearchHistoryPanel";

export default function Home() {
  return (
    <section className="main-padding flex h-screen justify-center pt-56">
      <div className="inner-container flex flex-col items-center gap-30">
        <h1 className="text-gradient-sky font-serif text-[89px] font-black">
          SkyConnect Explorer
        </h1>
        <div className="w-full">
          <SearchBar redirectTo="aeropuertos" />
          <div className="mx-auto mt-4 max-w-[780px]">
            <SearchHistoryPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
