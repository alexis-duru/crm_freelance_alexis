import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createInvoice } from "../services/invoices.service"



const FormInvoice = () => {
    const [credentials, setCredentials] = useState({})
    const navigate = useNavigate();

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await createInvoice(credentials)
            navigate('/invoices')
        } catch (error) {
            console.log(error)
        }

        return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="amount" name="amount" onChange={handleChange} />
                <input type="text" placeholder="status" name="status" onChange={handleChange} />
                <input type="text" placeholder="company name" name="company name" onChange={handleChange} />
                <input type="submit"></input>
            </form>
        )
    }
}

export default FormInvoice