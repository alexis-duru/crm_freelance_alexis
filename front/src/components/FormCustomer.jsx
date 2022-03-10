import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../services/customers.service"

const FormCustomer = () => {
    const [credentials, setCredentials] = useState ({})
    const navigate = useNavigate();

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const data = await createCustomer(credentials)
           navigate('/customers')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" name="email" onChange={handleChange} />
            <input type="text" placeholder="company Name" name="companyName" onChange={handleChange} />
            <input type="submit"></input>
        </form>
    )
}

export default FormCustomer