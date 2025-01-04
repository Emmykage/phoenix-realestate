import { useEffect } from "react"
import { getUser } from "../redux/actions/users"
import { useDispatch } from "react-redux"

const useInitializer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    },[])

}


export default useInitializer