import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function LoginPage() {

    const [id, setId] = useState('')
    const navigate = useNavigate()


    useEffect(() => {

        fetch('http://localhost:3000/login')
            .then(res => res.json())
            .catch(err => console.log(err))
    }, [])

    return (
        <>

            <label htmlFor=""><input type="text" onChange={(e) => {
                setId(e.target.value)
            }} /></label>
            <button
                onClick={() => {
                    navigate(`/login/${id}`)
                }}
            >Перенаправити</button>




        </>
    )
}