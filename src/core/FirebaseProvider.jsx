import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";

import { createContext, useContext} from "react"


  const env = import.meta.env

  const firebaseConfig = {
    apiKey:env.VITE_FIREBASE_api_key,
    authDomain:env.VITE_FIREBASE_auth_domain,
    projectId:env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:env.VITE_FIREBASE_APP_ID,
  }

  
  const firebaseApp = initializeApp(firebaseConfig)
  
  const firebaseDB = getFirestore(firebaseApp)

  export const FirebaseContext = createContext(null)




  export const  FirebaseProvider = (props) => {
    return (
      <FirebaseContext.Provider 
          value={{firebaseDB: firebaseDB}}
      >
          {props.children}
      </FirebaseContext.Provider>
    )
  }



export function useConFun(){
  return useContext(FirebaseContext)
}