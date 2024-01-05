type Props = {
  currentCards: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const PaginationNumber = ({
  currentCards,
  totalPages,
  onPageChange,
}: Props) => {
  const cards = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <div className="pagination">
        {cards.map((page) => (
          <button
            key={page}
            className={currentCards === page ? "active" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationNumber;
