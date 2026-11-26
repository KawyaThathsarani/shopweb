
import { Button } from "@/components/ui/button";

function Pagination({
    currentPage,
    totalPages,
    setCurrentPage
}) {

  // Hide pagination when only one page exists
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="mt-8 flex items-center justify-center gap-3">

        <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() =>
            setCurrentPage(page => page - 1)
            }
        >
        Previous
        </Button>

        <span className="p-2 text-sm font-medium">
            Page {currentPage} of {totalPages}
        </span>

        <Button
            variant="outline"
            disabled={currentPage >= totalPages}
            onClick={() =>
            setCurrentPage(page => page + 1)
            }
        >
        Next
        </Button>

    </div>
    );
}

export default Pagination;
