import Link from "next/link";

export default function NotFound() {
  return (
    <div className="site">
      <div className="sketch">
        <div className="bee-sketch red"></div>
        <div className="bee-sketch blue"></div>
      </div>
      <Link className="text-3xl font-bold text-white underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
