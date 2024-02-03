import React, { createContext, useContext, useEffect, useState } from 'react';
import Loader from '../components/_commons/Loader';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await fetch("https://assignment-grading-and-management-system.onrender.com/api/profile", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setUser(data);
                console.log("user:", data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (localStorage.getItem("token")) {
            getUser();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {loading ? children : children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
