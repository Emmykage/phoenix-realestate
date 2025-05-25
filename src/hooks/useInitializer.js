import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { userProfile } from "../redux/actions/auth"

const useInitializer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("fetching user data")
        dispatch(userProfile())
    },[])
}


export default useInitializer