import Aos from "aos"
import { useEffect } from "react"

const useScrollEffect = () => {
     useEffect(()=> {
          Aos.init()
          Aos.refresh()
        },[])
}
export default useScrollEffect