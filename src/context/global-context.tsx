import React from "react";




interface GlobalContextType {
    cookie: string | null;
    setCookie: React.Dispatch<React.SetStateAction<string | null>>;
}

export const GlobalContext = React.createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

    const [cookie, setCookie] = React.useState<string | null>(null);
    


    return (
        <GlobalContext.Provider value={{ cookie, setCookie }}>
            {children}
        </GlobalContext.Provider>
    )
}


