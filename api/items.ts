import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import { ModifyExpenseFormData } from "../components/ModifyExpenseForm";

import { FIRESTORE_DB } from "./firebase";

const ITEMS_CONSTANT = "items";

export const itemsRef = collection(FIRESTORE_DB, ITEMS_CONSTANT);

export async function createItem(data: ModifyExpenseFormData) {
  await addDoc(itemsRef, data);
}

export async function deleteItem(id: string) {
  const ref = doc(FIRESTORE_DB, `${ITEMS_CONSTANT}/${id}`);
  await deleteDoc(ref);
}

export async function updateItem(id: string, data: ModifyExpenseFormData) {
  const ref = doc(FIRESTORE_DB, `${ITEMS_CONSTANT}/${id}`);
  await updateDoc(ref, data);
}
