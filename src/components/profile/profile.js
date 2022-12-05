import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";

function Profile(){
    const {login} = useContext(userContext);

    return (
        <div>
        {login ? 'Dados do usuario' : 'Faça o login para ter acesso as informações'}
        </div>
    )
}

export default Profile;