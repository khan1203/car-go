import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logout = () =>{
        return logout(auth);
    }

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        });
        return () =>{
            return Unsubscribe();
        }
    },[])



    const authInfo = {
        user,
        setUser,
        loading,
        createUser,
        login,
        logout,
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;