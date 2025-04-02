import { useEffect } from "react"
import { getUser } from "../redux/actions/users"
import { useDispatch, useSelector } from "react-redux"
import { userProfile } from "../redux/actions/auth"

const useInitializer = () => {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userProfile())
    },[])
}


export default useInitializer