import React from "react";
import { GlobalContext } from "../context/global-context";

export const useGlobal = () => {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};