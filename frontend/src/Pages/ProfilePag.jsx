
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




export default function ProfilePage() {



    const { id } = useParams()


    const [user, setUser] = useState(null)

    useEffect(() => {

        fetch(`http://localhost:3000/login/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err))
    }, [id])

    if (!user) {
        return <div>Завантаження...</div>
    }




    return (
        <div style={{ color: "white", padding: "20px" }}>
            <h1>Профіль користувача</h1>
            <p>ID: {user.id}</p>
            <p>Ім'я: {user.name}</p>
        </div>
    )
}