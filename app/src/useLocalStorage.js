import React, { useState } from 'react';

// check localStorage for key
// return value to determine if darkMode is enabled or not

// initialValue is a BOOLEAN
export const useLocalStorage = ( key, initialValue ) => {
    const [ value, setValue ] = useState(() => {
        // check if key exists in local storage
        // if not, set value to initialValue
        let item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    // custom updater function to update value 
    // (associated with this key) in app and localStorage
    const setStoredValue = ( mode ) => {
        setValue(mode);
        window.localStorage.setItem(key, JSON.stringify(mode))
    }

    return [ value, setStoredValue ];
}