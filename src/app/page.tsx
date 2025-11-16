import { SearchBar } from "@/components";
import { SearchHistoryPanel } from "@/components/ui/searchHistoryPanel/SearchHistoryPanel";

export default function Home() {
  return (
    <section className="main-padding flex min-h-screen justify-center pt-14 pb-10 sm:pt-40">
      <div className="inner-container flex flex-col items-center gap-10 sm:gap-30">
        <h1
          className="text-gradient-sky text-center font-serif text-4xl font-black sm:text-[89px]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          SkyConnect Explorer
        </h1>
        <div className="w-full" data-aos="fade-up" data-aos-delay="400">
          <SearchBar redirectTo="aeropuertos" />
          <div className="mx-auto mt-10 max-w-[780px]">
            <SearchHistoryPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
