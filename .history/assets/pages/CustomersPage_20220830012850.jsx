import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CustomersPage = (props) => {

    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios
            .get('http://localhost:89/api/customers')
            .then(response => response.data["hydra:member"])
            .then(data => setCustomers(data))
            .catch(error => console.log(error.response));
    }, []);

    const handleDelete = id => {

        const originalCustomer = [...customers];

        // 1. L'approche optimiste
        setCustomers(customers.filter(customer => customer.id !== id))

        // 2. L'approche pessimiste
        axios
            .delete("http://localhost:89/api/customers/" + id)
            .then(response => console.log("ok"))
            .catch(error => {
                setCustomers(originalCustomer);
                console.log(error.response);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const itemsPerPage = 8;
    const pagesCount = Math.ceil(customers.length / itemsPerPage);
    const pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
     // d'ou on part (start ) pendant combien (itemsPerPage) 
     const start = currentPage * itemsPerPage - itemsPerPage;
     //               3    *         10        -   10    = 20 
     const paginatedCustomers = customers.slice(start, start + itemsPerPage);

    console.log(pages);
    return (
        <>
            <h1>Liste des clients</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id.</th>
                        <th>CLient</th>
                        <th>Email</th>
                        <th>Entreprise</th>
                        <th className="text-center">Factures</th>
                        <th className="text-center">Montant total</th>

                    </tr>
                </thead>
                <tbody>
                    {paginatedCustomers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>
                                <a href="#">{customer.firstName} {customer.lastName}</a>

                            </td>
                            <td>{customer.email}</td>
                            <td>{customer.company}</td>
                            <td className="text-center">
                                <span className="btn btn-primary rounded">{customer.invoices.length}</span>
                            </td>
                            <td className="text-center">{customer.totalAmount.toLocaleString()} Dhs</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(customer.id)}
                                    disabled={customer.invoices.length > 0}
                                    className="btn btn-sm btn-danger">Supprimer</button>
                            </td>
                        </tr>))}

                </tbody>
            </table>

            <div>
                <ul className="pagination pagination-sm">
                    <li className={"page-item" + (currentPage === 1 && " disabled")}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</button>
                    </li>

                    {pages.map(page => (  
                        <li key={page} className={"page-item" + (currentPage === page && " active")}>
                            < button className="page-link" onClick={() => handlePageChange(page)}>
                            {page}
                        </button>
                    </li>
                    ))}
                <li className={"page-item" + (currentPage === pagesCount && " disabled")}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</button>
                </li>
            </ul>
        </div>
    </>
    );
}

export default CustomersPage;