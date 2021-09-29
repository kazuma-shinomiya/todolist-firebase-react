import firebase from "firebase/compat";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();
export const addTodo = (content, uid) =>{
  addDoc(collection(db, "todo"), {
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}
