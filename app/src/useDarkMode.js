import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

// This hook updates CSS to match the light/dark mode setting

// setting is a BOOLEAN (true = darkMode enabled, false = darkMode disabled)
export const useDarkMode = (setting) => {
    const [ darkMode, setDarkMode ] = useLocalStorage("darkMode", setting);
    // update CSS classes based on whether or not darkMode is true
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