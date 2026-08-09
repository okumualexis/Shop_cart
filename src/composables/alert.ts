import Swal from "sweetalert2";
import { db } from "./firebase";
import {
	doc,
	updateDoc,
	getDoc,
	deleteDoc
	
} from "firebase/firestore";

export const editOrDelete = (id:string) => {
	
Swal.fire({
  title: 'Do you want to shop this item or remove from cart?',
  icon: 'question',
  showDenyButton: true,
  confirmButtonText: 'Shop',
  showCancelButton: true,
  denyButtonText: 'Remove'
  
}).then(async (result) => { // 👈 CRITICAL: Add 'async' right here!

    try{
    
      if (result.isConfirmed) {
      
         const docRef = doc(db, "items", id)

    	
 	   
    	const docSnapshot = await getDoc(docRef)
    
   		 if (docSnapshot.exists()) {
      // Now 'await' will work properly without crashing the execution
    		  await updateDoc(docRef, {
       			 status: true
         });

         Swal.fire("Item shopped successfully", "", "success");

        } else {
           Swal.fire("No item found", "", "info");
        }

      } else if (result.isDenied) {
         const docRef = doc(db, "items", id)    

         try {

           await deleteDoc(docRef)
         	
            Swal.fire("Removed","Item successully removed from cart", "info");
            
         } catch(err) {
          if(err instanceof Error){
            Swal.fire("Error", err.message, "error")

          }
          
          Swal.fire("Error", "Unknown error occured", "error")
         }
     }

   } catch(err) {
   	 if(err instanceof Error){
        Swal.fire("Error", err.message, "error")

      }
   }
});

}
