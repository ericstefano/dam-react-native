import { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";

import { itemsRef } from "../api/items";
import { ModifyExpenseFormData } from "../components/ModifyExpenseForm";

type Item = Required<ModifyExpenseFormData> & { id: string };

export function getItems() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const subscriber = onSnapshot(itemsRef, {
      next: (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as Item[];
        setItems(items);
      }
    });
    return () => subscriber();
  }, []);
  return { items };
}
