import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
    token: string | null;
    isLoading: boolean;
    signIn: (token: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthProps>({
    token: null,
    isLoading: true,
    signIn: async () => { },
    signOut: async () => { }
})

//Wrap aplication
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //function get token from phone while open aplication
        const loadToken = async () => {
            try {
                const savedToken = await SecureStore.getItemAsync('userToken')
                if (savedToken) {
                    setToken(savedToken)
                }
            } catch (error) {
                console.error("Failled get token", error)
            } finally {
                setIsLoading(false);
            }
        }
        loadToken();
    }, [])

    // Function Login
    const signIn = async (newToken: string) => {
        setToken(newToken)
        await SecureStore.setItemAsync('userToken', newToken)
    }

    // Function Logout
    const signOut = async () => {
        setToken(null)
        await SecureStore.deleteItemAsync('userToken')
    }

    return (
        <AuthContext.Provider value={{ token, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)