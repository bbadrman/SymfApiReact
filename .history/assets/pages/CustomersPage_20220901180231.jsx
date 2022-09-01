import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import customersAPI from '../services/customersAPI';


const CustomersPage = props => {

    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {

        try {
            const data = await customersAPI.findAll()
            setCustomers(data);
        } catch (error) {
            console.log(error.response)
        }
       customersAPI.findAll()
            .then(data => setCustomers(data))
            .catch(error => );
    }, []);

    const handleDelete = async id => {
        const originalCustomer = [...customers];

        // 1. L'approche optimiste
        setCustomers(customers.filter(customer => customer.id !== id))

        // 2. L'approche pessimiste

        try {
            await customersAPI.delete(id);
        } catch (error) {
            setCustomers(originalCustomer);
        }
    };

    const handlePageChange = page => {
        setCurrentPage(page);

    };

    const handleSearch = event => {
        const value = event.currentTarget.value;
        setSearch(value);
        setCurrentPage(1);

    };
    // changer les nombre customer par page on a 8 
    const itemsPerPage = 8;
    const filteredCustomers = customers.filter(
        c =>
            c.firstName.toLowerCase().includes(search.toLowerCase()) ||
            c.lastName.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase()) ||
            (c.company && c.company.toLowerCase().includes(search.toLowerCase()))
    );

    // d'ou on part (start ) pendant combien (itemsPerPage) 
    const paginatedCustomers = Pagination.getData(
        filteredCustomers,
        currentPage,
        itemsPerPage
    );

    return (
        <>
            <h1>Liste des clients</h1>
            <div className="form-group">
                <input type="text" onChange={handleSearch} value={search} className="form-controle" placeholder="Rechercher.." />
            </div>
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

            {itemsPerPage < filteredCustomers.length && (
                <Pagination
                    currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    length={filteredCustomers.length}
                    onPageChanged={handlePageChange}
                />
            )}
        </>
    );
};

export default CustomersPage;