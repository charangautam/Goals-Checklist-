import React, { createContext, useState } from 'react';

export const FocusContext = createContext();

const FocusContextProvider = (props) => {
    const [focus] = useState([]);

    return(
        <FocusContext.Provider value={{focus}}>
            {props.children}
        </FocusContext.Provider>
    )
}

export default FocusContextProvider;