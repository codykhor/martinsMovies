import Link from "next/link";

export default function Pagination({ page, totalPages, query }: { page: number; totalPages: number; query?: string }) {
    const url = (pg: number) => `/?${query ? `q=${query}&` : ""}page=${pg}`;

    // Generate page numbers to display
    const getVisiblePages = () => {
        const pages = [];
        const maxVisible = 3;

        if (totalPages <= maxVisible) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show current page with context
            let start = Math.max(1, page - 1);  // Changed from page - 2 to page - 1
            let end = Math.min(totalPages, page + 1);  // Changed from page + 2 to page + 1

            // Adjust if we're near the beginning or end
            if (page <= 2) {  // Changed from 3 to 2
                end = Math.min(totalPages, 3);  // Changed from 5 to 3
            }
            if (page >= totalPages - 1) {  // Changed from totalPages - 2 to totalPages - 1
                start = Math.max(1, totalPages - 2);  // Changed from totalPages - 4 to totalPages - 2
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const visiblePages = getVisiblePages();
    const hasPrev = page > 1;
    const hasNext = page < totalPages;

    return (
        <div className="flex justify-center items-center gap-1 my-8">
            {/* Previous Button */}
            {hasPrev ? (
                <Link
                    href={url(page - 1)}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 hover:text-primary transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
            ) : (
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-gray-200 text-gray-400 cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            )}

            {/* Page Numbers */}
            {visiblePages.map((pageNum) => (
                <Link
                    key={pageNum}
                    href={url(pageNum)}
                    className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors ${pageNum === page
                        ? 'bg-primary text-white border-primary shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                        }`}
                >
                    {pageNum}
                </Link>
            ))}

            {/* Next Button */}
            {hasNext ? (
                <Link
                    href={url(page + 1)}
                    className="flex items-center justify-center w-10 h-10 rounded-full  text-gray-600 hover:bg-gray-100  hover:text-primary transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            ) : (
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-200 text-gray-400 cursor-not-allowed">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            )}
        </div>
    );
}
