import { useHistory } from "react-router";
import { useEffect } from "react";
import { goToHome, goToRecipesList } from "../routers/cordinator";

const useUnProtectedPage = () => {

    const history = useHistory()
    
    useEffect (() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToHome(history)
        }
    }, [history])
}

export default useUnProtectedPage