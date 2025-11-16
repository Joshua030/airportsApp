"use client";

import Link from "next/link";
import clsx from "clsx";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { generatePaginationNumbers } from "@/utils";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`; //   href="/kid";
    }

    if (+pageNumber > totalPages) {
      // Next >
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="mt-10 mb-10 flex justify-center text-center">
      <nav aria-label="Page navigation">
        <ul className="list-style-none flex gap-3">
          <li className="page-item">
            <Link
              className="page-link relative block rounded border-0 bg-blue-600 px-3 py-1.5 text-white transition-all duration-300 outline-none hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              Anterior
            </Link>
          </li>

          {allPages.map((page, index) => (
            <li key={page} className="page-item aspect-square">
              <Link
                className={clsx(
                  "page-link relative block rounded border-0 px-3 py-1.5 transition-all duration-300 outline-none",
                  {
                    "bg-blue-600 text-white hover:bg-gray-200 hover:text-gray-800":
                      page !== currentPage,

                    "bg-gray-200 text-gray-800 shadow-sm hover:bg-blue-700 hover:text-white":
                      page === currentPage,
                  },
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link
              className="page-link relative block rounded border-0 bg-blue-600 px-3 py-1.5 text-white transition-all duration-300 outline-none hover:bg-gray-200 hover:text-gray-800 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
