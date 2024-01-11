import { useCallback, useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

const DOTS = '...'

type UsePaginationParamType = {
  count: number
  onChange: (pageNumber: number) => void
  page: number
  siblings?: number
}

type PaginationRange = ('...' | number)[]

export const usePagination = ({ count, onChange, page, siblings = 1 }: UsePaginationParamType) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblings + 5

    if (totalPageNumbers >= count) {
      return range(1, count)
    }

    const leftSiblingIndex = Math.max(page - siblings, 1)
    const rightSiblingIndex = Math.min(page + siblings, count)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < count - 2

    const firstPageIndex = 1
    const lastPageIndex = count

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblings
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, count]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblings
      const rightRange = range(count - rightItemCount + 1, count)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [siblings, page, count]) as PaginationRange

  const lastPage = paginationRange.at(-1)

  const isFirstPage = page === 1
  const isLastPage = page === lastPage

  const handleNextPageClicked = useCallback(() => {
    onChange(page + 1)
  }, [page, onChange])

  const handlePreviousPageClicked = useCallback(() => {
    onChange(page - 1)
  }, [page, onChange])

  function handleMainPageClicked(pageNumber: number) {
    return () => onChange(pageNumber)
  }

  return {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  }
}
