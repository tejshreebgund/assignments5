import {useState, useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import styled from "styled-components"


const Navbar = () => {

    const authData = useContext(AuthContext);

    const Wrapper = styled.div`
        width: 100%;
        height: 70px;
        border: 1px solid black;
        background-color: gray;
        color: white;
        font-weight: bolder;
    `
    const Icon = styled.div``
    const Info = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 50%;
    `
    const Button = styled.p`
        padding-left: 100px;
        padding-right: 50px;
    `


    const getLogin = async () => {
        let data = {
            "email" : "eve.holt@reqres.in",
            "password" : "cityslicka"
        }
        let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        });
        let loginData = await res.json();
        // console.log(loginData);
        authData.toggleAuth(loginData.token)
    }
    // getLogin();
    console.log(authData);

    return (
        <div>
        <Wrapper>
            <Icon></Icon>
            <Info>
                <Button>Home</Button>
                <Button>About</Button>
                <Button onClick = {() => {
                   getLogin();
                   
                }}>
                    {
                        authData.isAuth ? "Login" : "logout"
                    }
                </Button>
            </Info>
        </Wrapper>
        </div>
    )
}
export {Navbar};