import { useEffect } from "react"
import { getUser } from "../redux/actions/users"
import { useDispatch, useSelector } from "react-redux"

const useInitializer = () => {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    },[])

    console.log(user)
}


export default useInitializer