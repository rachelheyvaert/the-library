import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const UserPage = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)

  const params = useParams()
  const {id} = params

  useEffect(()=>{
    fetch(`/users/${id}`)
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                setUser(user)
                setLoading(false)
            })
        }else {
            res.json().then(data => setErrors(data.error))
        }
    })
   
},[])

if(loading) return <h1>Loading</h1>
if(errors) return <h1>{errors}</h1>

  return (
    <div><h1>{user.username}</h1>
    <h3>Reviews</h3>
    <ul>
        {user.reviews.map(review => (
        <li>
            <h2>{review.book.title}</h2>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review_body}</p>
        </li>
        ))}
    </ul></div>
  )
}

export default UserPage