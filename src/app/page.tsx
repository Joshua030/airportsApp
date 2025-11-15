import { SearchBar } from "@/components";

export default function Home() {
  return (
    <section className="main-padding flex h-screen justify-center pt-56">
      <div className="inner-container flex flex-col items-center gap-30">
        <h1 className="text-gradient-sky font-serif text-[89px] font-black">
          SkyConnect Explorer
        </h1>
        <div className="w-full max-w-[780px]">
          <SearchBar redirectTo="aeropuertos" />
        </div>
      </div>
    </section>
  );
}
