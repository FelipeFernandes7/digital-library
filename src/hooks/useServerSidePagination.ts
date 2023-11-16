/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export type PaginationValues = {
  pageIndex: number;
  pageSize: number;
  totalPages: number;
};

type Params = {
  totalPages?: number;
  handleFetchData: (paginationValues: PaginationValues) => Promise<any>;
};

export type ServerSidePaginationHookReturn = {
  registerPerPage: number;
  pageCount: number;
  currentPage: number;
  handlePageChange: (pageIndex: number) => void;
  handlePageSizeChange: (pageSize: number) => void;
  canNextPage: boolean;
  canPreviousPage: boolean;
  values: PaginationValues;
};

export function useServerSidePagination({
  totalPages,
  handleFetchData,
}: Params): ServerSidePaginationHookReturn {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const paginationValues = {
    pageIndex,
    pageSize,
    totalPages: totalPages ?? 1,
  };

  function handlePageChange(pageIndex: number) {
    setPageIndex(pageIndex);
    handleFetchData({ ...paginationValues, pageIndex });
  }

  function handlePageSizeChange(pageSize: number) {
    setPageSize(pageSize);
    setPageIndex(0);
    handleFetchData({ ...paginationValues, pageIndex: 0, pageSize });
  }

  const canNextPage =
    paginationValues.pageIndex + 1 !== paginationValues.totalPages &&
    paginationValues.totalPages !== 0;

  const canPreviousPage = paginationValues.pageIndex > 0;

  const currentPage = paginationValues.pageIndex + 1;

  const pageCount = paginationValues.totalPages;

  const registerPerPage = paginationValues.pageSize;

  return {
    registerPerPage,
    pageCount,
    currentPage,
    handlePageChange,
    handlePageSizeChange,
    canNextPage,
    canPreviousPage,
    values: paginationValues,
  };
}
