
import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";


function LoginStatus () {

    const {token} = useContext(AuthContext);

    return (
        <div>
            The Token of the user is {token}
        </div>
    )
}

export {LoginStatus};