import React from "react";
import HeaderSuppliers from "@components/HeaderSuppliers.jsx";

const LayoutSuppliers = ({ children }) => {
    return(
        <div className="LayoutSuppliers">
            <HeaderSuppliers />
            { children }
        </div>
    );
}

export default LayoutSuppliers;