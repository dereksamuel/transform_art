import { db } from "../helpers/firebase";

export const useDeleteDB = ({
  collection,
  docId,
  data = null
}) => {
  if (!docId) return;
  return db
    .collection(collection)
    .doc(docId)
    .delete();
};
