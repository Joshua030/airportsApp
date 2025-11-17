"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="p-6 text-white">
        <h1 className="mb-10 text-4xl font-bold">Error</h1>
        <h2>Tu API key no es válida o alcanzaste el máximo de solicitudes.</h2>
        <p>
          <strong>Error: </strong>
          {error.message}
        </p>
        <button className="cursor-pointer underline" onClick={() => reset()}>
          Intenta de nuevo
        </button>
      </div>
    </div>
  );
}
