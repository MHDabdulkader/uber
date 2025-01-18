// import { use } from "react";
import { createContext, useState } from "react";

export const captainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState({
        fullname: {
            firstname: "",
            lastname: "",
        },
        email: "",
        password: "",
        vehicle: {
            color: "",
            capacity: "",
            vehicleType: "",
            plate: "",
        },
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    };

    return (
        <div>
            <captainDataContext.Provider value={value}>
                {children}
            </captainDataContext.Provider>
        </div>
    );
};

export default CaptainContext;
