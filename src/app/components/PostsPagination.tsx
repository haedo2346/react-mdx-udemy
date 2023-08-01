import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number;
}

const PostsPagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <div className="flex gap-4">
      <Link
        href={`/page/${currentPage - 1}`}
        className={`${
          currentPage === totalPages
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button disabled={currentPage === index + 1}>
          <Link
            href={`/page/${index + 1}`}
            key={index}
            className={`${
              currentPage === index + 1
                ? "text-gray-600 pointer-events-none"
                : "text-blue-700"
            }`}
          >
            {index + 1}
          </Link>
        </button>
      ))}
      <Link href={`/page/${currentPage + 1}`}>Next</Link>
    </div>
  );
};

export default PostsPagination;
