import { db } from "../helpers/firebase";

export const useCreateDB = ({
  collection,
  data = null
}) => {
  return db
    .collection(collection)
    .add(data);
};
