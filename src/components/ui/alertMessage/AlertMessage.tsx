import { InfoCircle } from "@/components/icons/InfoCircle";
import { PlaneIcon } from "@/components/icons/PlaneIcon";
import Image from "next/image";

export const AlertMessage = ({
  message = "No se han encontrado coincidencias para su búsqueda.",
}: {
  message?: string;
}) => {
  return (
    <div className="relative flex min-h-[230px] overflow-hidden rounded-lg border border-white bg-white/20 py-8 pr-5 pl-10">
      {/* Left: text content */}
      <div className="flex flex-1 items-center gap-4">
        <span>
          <InfoCircle />
        </span>
        <p className="mt-1 text-[20px] text-white">{message}</p>
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
    </div>
  );
};
