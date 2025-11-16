import { twMerge } from "tailwind-merge";

export const InfoCircle = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={twMerge("h-auto w-8 md:w-10 lg:w-14", className)}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 38.9583V25.2083"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        cx="2.29167"
        cy="2.29167"
        r="2.29167"
        transform="matrix(1 0 0 -1 25.2085 20.625)"
        fill="white"
      />
      <path
        d="M16.0418 7.64919C19.4126 5.69932 23.326 4.58334 27.5002 4.58334C40.1567 4.58334 50.4168 14.8435 50.4168 27.5C50.4168 40.1565 40.1567 50.4167 27.5002 50.4167C14.8436 50.4167 4.5835 40.1565 4.5835 27.5C4.5835 23.3259 5.69947 19.4124 7.64934 16.0417"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
