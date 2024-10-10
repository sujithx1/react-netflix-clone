import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDWxzn3IaannF_hGt7ss39lW4F3URLMU4I",
  authDomain: "netflix-clone-68a60.firebaseapp.com",
  projectId: "netflix-clone-68a60",
  storageBucket: "netflix-clone-68a60.appspot.com",
  messagingSenderId: "700955122045",
  appId: "1:700955122045:web:3fe9a82f74e997d4d35414",
  measurementId: "G-V6NR19NXDP"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app)

const signUp=async (name:string,email:string,password:string) => {
    try {
        const res= await createUserWithEmailAndPassword(auth,email,password);
        const user=(await res).user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:'local',
            email

        })
        
    } catch (error) {
        console.log(error);
        if (error instanceof Error) {
            
            let extractedMessage = error.message.split('/')[1];

            // Step 2: Replace unwanted characters (comma, parentheses)
            extractedMessage = extractedMessage.replace(/,/g, '').replace(/\)/g, '');
    
            // Display the formatted error message
            toast.error(extractedMessage);
        }
        
    }
    
}

const login=async (email :string , password :string) => {

    try {
        await signInWithEmailAndPassword(auth,email,password)

        
    } catch (error) {
        // console.log(error);
    
        if (error instanceof Error) {
            let extractedMessage = error.message.split('/')[1];

            // Step 2: Replace unwanted characters (comma, parentheses)
            extractedMessage = extractedMessage.replace(/,/g, '').replace(/\)/g, '');
    
            // Display the formatted error message
            toast.error(extractedMessage);
            // toast.error(error.message.split('/')[1].split('-').join())
        }
     
         
        
    }

    
}
const Logout=()=>{
    signOut(auth)
    

}
export {auth,db,login,Logout,signUp}



