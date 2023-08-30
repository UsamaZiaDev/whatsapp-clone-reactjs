import {initializeApp} from "firebase/app"
import { createContext, useContext} from "react"

const firebaseConfig = {
    apiKey: "AIzaSyBgGlfIotZmqgCIPwNBMwmDumzV5373pb0",
    authDomain: "whatsapp-clone-139ec.firebaseapp.com",
    projectId: "whatsapp-clone-139ec",
    storageBucket: "whatsapp-clone-139ec.appspot.com",
    messagingSenderId: "259335070042",
    appId: "1:259335070042:web:476536a8e4806cd3c19363"
  };

  // const firebaseApp = initializeApp(firebaseConfig)

export const FirebaseContext = createContext(null)



export const  FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider 
        value={{name:"usamazia", fatherName:"zia ullah"}}
    >
        {props.children}
    </FirebaseContext.Provider>
  )
}



export function useConFun(){
  return useContext(FirebaseContext)
}