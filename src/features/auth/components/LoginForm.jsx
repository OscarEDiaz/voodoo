import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { loginConstants, routeConstants } from '../../../shared/constants';
import logo from '../../../assets/images/voodoo.png';
import { useNavigate } from 'react-router-dom';

"use strict";

export const LoginForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [formError, setFormError] = useState("");
    const { login } = useAuth();

    const onSubmit = async (formData) => {
        await login(formData.email, formData.password, setFormError);
        navigate(routeConstants.UI_ROUTE_HOME);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='v-login-form'>
            <img src={logo} className='v-login-form-logo' />
            <input 
                {...register("email")}
                type="email"
                placeholder={ loginConstants.UI_STR_EMAIL }
            />
            <input
                {...register("password")}
                type="password"
                placeholder={ loginConstants.UI_STR_PASSWORD }
            />
            <button type="submit">
                { loginConstants.UI_STR_LOGIN }
            </button>
            <p style={{marginTop: "30px"}}>{formError}</p>
        </form>
    );
};
