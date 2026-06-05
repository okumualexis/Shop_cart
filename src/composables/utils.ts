import { db } from "./firebase"
import { 
   getDocs,
   addDoc,
   doc,
   collection,
   onSnapshot,
   deleteDoc,
   serverTimestamp,
   increment,
   updateDoc
   
} from "firebase/firestore";

 const colRef = collection(db, "items")

 // get snapsho5s

 export const allItems = (cart) => {
 
  	
       
      onSnapshot(colRef, (snapshot) => {
      
       const items = []
           
 	    	snapshot.forEach(item => {
 			 items.push({ ...item.data(), id: item.id })
 		})

 		cart.value = items;
 	})


 }


export const addItem = async(newItem) => {

  const newAddedItem = newItem.trim().toLowerCase()

  if(!newAddedItem) return;
  

  const cart = []
  
  try {
 
    const querySnapshot = await getDocs(colRef)
    
   	  querySnapshot.forEach(item => {
   	  	cart.push({ ...item.data(), id: item.id})
   	  })

   	//check duplicate entries

   	const existingItem = cart.find(item => item.cartItem.toLowerCase() === newAddedItem)

   	if(!existingItem) {
   		await addDoc(colRef, {
   			cartItem: newItem,
   			quantity: 1,
   			created_at: serverTimestamp()
   		})
   		
   	} else {
   		const docRef = doc(db, "items", existingItem.id)

   		await updateDoc(docRef, {
   			quantity: increment(1)
   		})
   	}

    } catch(err) {
    	alert(err.message)
    }
    	
    
}



export const editOrdelete = () => {
	//handle sweet2 alert with delete or edit
}
