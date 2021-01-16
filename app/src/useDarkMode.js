import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (setting) => {
    const [ darkMode, setDarkMode ] = useLocalStorage("portfolioDarkMode", setting);

    useEffect(() => {
        if (darkMode) {
            document.querySelector('body').classList.add("body-dark");
            document.querySelector('body').classList.remove("body-light");
        } else {
            document.querySelector('body').classList.add("body-light");
            document.querySelector('body').classList.remove("body-dark");
        }
    }, [darkMode])
}