import { db } from "../helpers/firebase";

export const useCreateDB = ({
  collection,
  data = null
}) => {
  console.log(collection, data);
  return db
    .collection(collection)
    .add(data);
};
