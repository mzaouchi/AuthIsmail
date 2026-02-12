import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { currentUser } from "../Redux/Actions/UserActions"

const Profil = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(currentUser())
    },[])


  const user = useSelector(state=> state.UserReducer.user)
  return (
    <div>
      <h1>Profil Component</h1>
      <h1>{user.name}</h1>
    </div>
  )
}

export default Profil