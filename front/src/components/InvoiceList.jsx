import { useEffect, useState } from 'react';
import { deleteInvoice, findAllInvoices } from "../services/invoices.service";
import { Link } from "react-router-dom";

function InvoiceList() {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        fetchAllInvoices()
    }, [])

    const fetchAllInvoices = async () => {
        try {
            const data = await findAllInvoices()
            setInvoices(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        console.log(id)
        try {
            const data = await deleteInvoice(id)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllInvoices()
    }, [handleDelete])


    return (
        <div>
            <Link to="/invoices/create">New Invoice</Link>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Amount</th>
                        <th colSpan="2">Status</th>
                        <th colSpan="2">Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(invoice => (
                        <tr key={invoice.id}>
                            <td colSpan="2">{invoice.amount}</td>
                            <td colSpan="2">{invoice.status}</td>
                            <td colSpan="3">{invoice.customer.companyName}</td>
                            <td><button onClick={() => handleDelete(invoice.id)}>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default InvoiceList