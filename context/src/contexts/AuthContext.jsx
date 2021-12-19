import {createContext, useState} from "react";


const  AuthContext = createContext();


const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("")
    const toggleAuth = (data) => {
        setIsAuth(!isAuth);
        if(isAuth) {
            setToken(data);
        } else {
            setToken("");
        }
        // setToken(data);
    }
    return <AuthContext.Provider value = {{isAuth, toggleAuth, token}}>
        {children}
    </AuthContext.Provider>
}

export {AuthContext, AuthContextProvider};
