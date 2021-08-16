import { db } from "../helpers/firebase";

export const useSetDB = ({
  collection,
  docId,
  data = null
}) => {
  return db
    .collection(collection)
    .doc(docId)
    .set(data);
};
