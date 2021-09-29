import firebase from "firebase/compat";
import { getFirestore, collection, query, where, orderBy, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";

const db = getFirestore();

export const initGet = async(uid) => {
  const q = query(collection(db, "todo"), where("uid", "==", uid), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  let todos = [];
  querySnapshot.forEach((doc) => {
    todos.push({
      id: doc.id,
      content: doc.data().content,
      isComplete: doc.data.isComplete,
    });
  });
  return todos;
}


export const addTodo = (content, uid) => {
  addDoc(collection(db, "todo"), {
    content: content,
    uid: uid,
    isComplete: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export const deleteTodo = (id) => {
  deleteDoc(doc(db, "todo", id));
}
