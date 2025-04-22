import React from 'react';
import { uiConstants } from '../constants';

"use strict";

export const LoadingPage = () => {
    return (
        <div className='v-loading-page'>
            { uiConstants.UI_STR_LOADING }
        </div>
    );
};
