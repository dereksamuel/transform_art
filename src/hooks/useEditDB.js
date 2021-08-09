import { db } from "../helpers/firebase";

export const useEditDB = ({
  collection,
  docId,
  data = null
}) => {
  if (!docId) return;
  return db
    .collection(collection)
    .doc(docId)
    .update(data);
};

