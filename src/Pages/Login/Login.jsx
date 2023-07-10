import React, { useEffect, useState } from "react";
import LoginModuleStyles from './Login.module.css';
import Navbar from "../../Components/NavbarFiles/Navbar";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isLoggedIn, setLogin] = useState(false);
    useEffect(() => {

    })
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };
    const handleContactNumberChange = (e) => {
        setContactNumber(e.target.value)

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    }
    const handleSubmitClick = async () => {
        console.log(contactNumber);
        console.log(password);
        const response = await fetch('http://localhost:5050/findUser/', {
            method: 'POST',
            body: JSON.stringify({
                contact_number: contactNumber,
                password: password
            }),
            headers: {
                'Content-type': 'application/json',
             },
        });
            const result = await response.json();
            console.log(result);
            if(result == "200")
            {
                navigate("/");
            }



    }
    return (
        <>
            <div className={LoginModuleStyles.page}>
                <Navbar></Navbar>
                <div className={LoginModuleStyles.loginCard}>
                    <h2 style={{ left: "140px", position: "relative", top: "15px" }}>{`Login`}</h2>
                    <TextField
                        id="user-name"
                        label="User name"
                        onChange={handleContactNumberChange}
                        sx={{ left: '70px', top: "50px" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />





                    <FormControl sx={{ m: 1, width: '25ch', top: "100px", left: "70px" }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handlePasswordChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button variant="outlined" sx={{ left: "-90px", top: "250px", color: "#00917C" }}

                        onClick={handleSubmitClick}
                    >Submit </Button>
                    <h5
                        style={{ position: "relative", left: "100px", top: "250px" }}

                    >Don't have account ?

                        <Link to='/signUp'>
                            {` Sign up`}
                        </Link>
                    </h5>
                </div>
                <h1
                    style={{ position: "relative", left: "900px", top: "-250px" }}
                >Homify</h1>
                <h2
                    style={{ position: "relative", left: "900px", top: "-250px" }}
                >This is a Lores Ipsum</h2>

            </div>
        </>

    );
}
export default Login;