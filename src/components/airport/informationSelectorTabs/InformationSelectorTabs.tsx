"use client";

import Link from "next/link";
import clsx from "clsx";

type TabItem = {
  id: string;
  label: string;
};

type Props = {
  items: TabItem[];
  activeId: string;
  basePath: string;
};

export const InformationSelectorTabs = ({
  items,
  activeId,
  basePath,
}: Props) => {
  return (
    <ul className="grid grid-flow-col rounded-lg bg-[#3F495F] p-1 text-center text-gray-500">
      {items.map((item) => {
        const isActive = item.id === activeId;

        return (
          <li key={item.id}>
            <Link
              href={`${basePath}?tab=${item.id}`}
              scroll={false}
              className={clsx(
                "flex justify-center rounded-lg py-4 text-[22px] font-semibold transition-colors duration-300",
                isActive
                  ? "bg-pagination-blue text-white shadow"
                  : "text-[#A2A2A2] hover:text-white",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
