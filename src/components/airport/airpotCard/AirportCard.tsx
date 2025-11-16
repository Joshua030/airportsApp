import { PlaneIcon } from "@/components/icons/PlaneIcon";
import { Airport } from "@/interfaces";
import Image from "next/image";

export const AirportCard = ({ airport }: { airport: Airport }) => {
  return (
    <article className="relative flex min-h-[230px] overflow-hidden rounded-lg border border-white bg-white/20 py-8 pr-5 pl-10">
      {/* Left: text content */}
      <div className="flex flex-1 flex-col">
        <p className="text-[20px] font-bold text-white">
          {airport.airport_name}
        </p>
        <p className="mt-1 text-[20px] text-white">{airport.country_name}</p>

        <div className="mt-auto">
          <p className="text-gradient-sky inline font-serif text-[42px] font-black">
            {airport.city_iata_code}
          </p>
        </div>
      </div>

      <div className="z-2">
        <span>
          <PlaneIcon />
        </span>
      </div>
      <div className="absolute top-0 right-0 h-full w-[45%] bg-[linear-gradient(90deg,#3F495F_0%,#0E1934_74%)] opacity-90" />

      <div className="absolute top-0 right-0 -z-1 h-full w-[45%]">
        <Image
          src={"/images/plane_bg.webp"}
          alt="Imagen de avion despegando"
          fill
          className="object-cover"
        />
      </div>
    </article>
  );
};

/* patrick-tomasso-GOErUf5yNFA-unsplash 1 */

/* Figma Button */

// /* Rectangle 2010 */

// position: absolute;
// width: 848px;
// height: 233px;
// left: 1px;
// top: 1px;

// background: linear-gradient(90deg, #3F495F 0%, #0E1934 74%);
// border-radius: 7px;

// /* patrick-tomasso-GOErUf5yNFA-unsplash 1 */

// position: absolute;
// width: 398.01px;
// height: 233px;
// left: 451px;
// top: 1px;

// background: url(patrick-tomasso-GOErUf5yNFA-unsplash.jpg);
// border-radius: 7px;

// /* flight_30822 1 */

// position: absolute;
// width: 55px;
// height: 55px;
// left: 774px;
// top: 21px;

// background: url(flight_30822.png);

// /* Text */

// position: absolute;
// width: 353px;
// height: 39px;
// left: 40px;
// top: 30px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 700;
// font-size: 20.5233px;
// line-height: 38px;
// /* identical to box height, or 187% */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* Text */

// position: absolute;
// width: 173px;
// height: 39px;
// left: 40px;
// top: 69px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20.5233px;
// line-height: 38px;
// /* identical to box height, or 187% */
// display: flex;
// align-items: center;

// color: #FFFFFF;

// /* BOG */

// position: absolute;
// width: 99px;
// height: 47px;
// left: calc(50% - 99px/2 - 338.5px);
// top: 143px;

// font-family: 'Gotham Black';
// font-style: normal;
// font-weight: 500;
// font-size: 42.6416px;
// line-height: 47px;

// background: linear-gradient(90deg, #006AFF 0%, #00F9FF 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// background-clip: text;
// text-fill-color: transparent;
