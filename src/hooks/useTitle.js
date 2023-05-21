import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(() =>{
        document.title = `${title} - Hero's Town`
    },[title])
}

export default useTitle