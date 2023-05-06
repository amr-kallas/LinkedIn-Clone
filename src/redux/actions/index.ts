import { auth, db, provider, storage } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "./Action";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
// export function signIn() {
//     return (dispatch) => {
//       signInWithPopup(auth, provider)
//         .then((payload) => {
//           dispatch(actions.user(payload.user));
//         })
//         .catch((error) => alert(error.message));
//     };
//   }
