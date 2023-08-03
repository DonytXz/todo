import React from "react";

const Pagination = (props: any) => {
  let pages: Array<number> = [];

  for (let i = 1; i <= Math.ceil(props.length / props.postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination py-2 mx-auto">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => props.setCurrentPage(page)}
              className={`${
                page == props.currentPage
                  ? "bg-gray-800 text-white font-bold"
                  : "bg-gray-200 text-gray-800"
              } mx-2 rounded-xl px-2 py-1`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Pagination;
