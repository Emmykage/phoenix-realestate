import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { userProfile } from "../redux/actions/auth"

const useInitializer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userProfile())
    },[])
}


export default useInitializer