"use client";

import Link from "next/link";

type TabItem = {
  id: string;
  label: string;
};

type Props = {
  items: TabItem[];
  activeId: string;
  basePath: string; // e.g. `/airports/BCN`
};

export const InformationSelectorTabs = ({
  items,
  activeId,
  basePath,
}: Props) => {
  return (
    <ul className="grid grid-flow-col rounded-lg bg-gray-100 p-1 text-center text-gray-500">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <li key={item.id}>
            <Link
              href={`${basePath}?tab=${item.id}`}
              scroll={false}
              className={[
                "flex justify-center rounded-lg py-4",
                isActive
                  ? "bg-white text-indigo-900 shadow"
                  : "text-gray-500 hover:text-indigo-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
