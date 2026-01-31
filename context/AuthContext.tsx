import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps {
    token: string | null;
    isLoading: boolean;
    name: string | null;
    signIn: (token: string, name: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthProps>({
    token: null,
    isLoading: true,
    name: null,
    signIn: async () => { },
    signOut: async () => { }
})

//Wrap aplication
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    const [name,setName] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //function get token from phone while open aplication
        const loadAuthData = async () => {
            try {
                const [savedToken, savedName] = await Promise.all([
                    SecureStore.getItemAsync('userToken'),
                    SecureStore.getItemAsync('userName')
                ])
                if (savedToken) setToken(savedToken)
                if (savedName) setName(savedName)
                
            } catch (error) {
                console.error("Failled get token", error)
            } finally {
                setIsLoading(false);
            }
        }
        loadAuthData();
    }, [])

    // Function Login
    const signIn = async (newToken: string, newName: string) => {
        setToken(newToken)
        setName(newName)
        await SecureStore.setItemAsync('userToken', newToken)
        await SecureStore.setItemAsync('userName', newName)
    }

    // Function Logout
    const signOut = async () => {
        setToken(null)
        await SecureStore.deleteItemAsync('userToken')
    }

    return (
        <AuthContext.Provider value={{ token, isLoading,name, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)