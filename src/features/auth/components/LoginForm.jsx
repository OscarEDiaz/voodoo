import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { loginConstants } from '../../../shared/constants';
import logo from '../../../assets/images/voodoo.png';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../app/routes';


"use strict";

export const LoginForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { error, login } = useAuth();

    const onSubmit = async (formData) => {
        await login(formData.email, formData.password);
        navigate(paths.HOME_PATH);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='v-login-form'>
            <img src={logo} className='v-login-form-logo' />
            <input 
                {...register("email", { required: true })}
                type="email"
                placeholder={ loginConstants.UI_STR_EMAIL }
            />
            <input
                {...register("password", { required: true })}
                type="password"
                placeholder={ loginConstants.UI_STR_PASSWORD }
            />
            <button type="submit">
                { loginConstants.UI_STR_LOGIN }
            </button>
            <p style={{marginTop: "30px"}}>{error}</p>
        </form>
    );
};
