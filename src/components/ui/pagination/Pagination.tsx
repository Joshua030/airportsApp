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

    if (pageNumber === "...") return `${pathname}?${params.toString()}`;

    if (+pageNumber <= 0) return `${pathname}`;

    if (+pageNumber > totalPages) return `${pathname}?${params.toString()}`;

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="mt-10 mb-10 flex justify-center text-center">
      <nav aria-label="Page navigation">
        <ul className="list-style-none flex gap-3">
          {/*  ANTERIOR */}
          <li className="page-item">
            <Link
              href={isFirstPage ? "#" : createPageUrl(currentPage - 1)}
              aria-disabled={isFirstPage}
              className={clsx(
                "page-link relative block rounded border-0 px-3 py-1.5 transition-all duration-300 outline-none",
                isFirstPage
                  ? "curso-notallowed cursor-not-allowed bg-gray-400 text-gray-700"
                  : "bg-blue-600 text-white hover:bg-gray-200 hover:text-gray-800",
              )}
            >
              Anterior
            </Link>
          </li>

          {/* NUMBER PAGES */}
          {allPages.map((page, index) => (
            <li key={`${page}-${index}`} className="page-item aspect-square">
              <Link
                className={clsx(
                  "page-link relative block rounded border-0 px-3 py-1.5 transition-all duration-300 outline-none",
                  page === currentPage
                    ? "bg-gray-200 text-gray-800 shadow-sm hover:bg-blue-700 hover:text-white"
                    : "bg-blue-600 text-white hover:bg-gray-200 hover:text-gray-800",
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          {/*  SIGUIENTE */}
          <li className="page-item">
            <Link
              href={isLastPage ? "#" : createPageUrl(currentPage + 1)}
              aria-disabled={isLastPage}
              className={clsx(
                "page-link relative block rounded border-0 px-3 py-1.5 transition-all duration-300 outline-none",
                isLastPage
                  ? "curso-notallowed cursor-not-allowed bg-gray-400 text-gray-700"
                  : "bg-blue-600 text-white hover:bg-gray-200 hover:text-gray-800",
              )}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
