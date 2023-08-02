import React from "react";

const Pagination = (props: any) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(props.length / props.postsPerPage); i++) {
    pages.push(i);
  }
  // console.log(props.length, "props.length");
  
  console.log(pages, "pages");
  
  return (
    <>
      <div className="pagination py-2">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => props.setCurrentPage(page)}
              className={`${page == props.currentPage ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} mx-2 rounded-xl px-2 py-1`}
            >
              {page}
            </button>
          );
        })}
        {/* h
        {props.currentPage} */}
      </div>
    </>
  );
};

export default Pagination;
