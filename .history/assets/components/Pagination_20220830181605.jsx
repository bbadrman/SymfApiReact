import React from 'react';

const Paginaion = ({currentPage, itemsPerPage, length, onPageChange}) => {
    return (
    <div>
        <ul className="pagination pagination-sm">
            <li className={"page-item" + (currentPage === 1 && " disabled")}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
            </li>

            {pages.map(page => (  
                <li
                 key={page} className={"page-item" + (currentPage === page && " active")}>
                    < button className="page-link" onClick={() => handlePageChange(page)}>
                    {page}
                </button>
            </li>
            ))}
        <li className={"page-item" + (currentPage === pagesCount && " disabled")}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
        </li>
    </ul>
</div>);
}

export default Paginaion;   