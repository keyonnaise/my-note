import { camelCase, snakeCase } from "es-toolkit";
import { forEach, isEmpty } from "es-toolkit/compat";
import { CollectionReference, DocumentSnapshot } from "firebase-admin/firestore";
import * as admin from "~/lib/firebase/admin";
import { IPost } from "./post.type";
import { SnakeToCamelCaseNested } from "./types";

export const collections = {
  posts: getCollectionWithConverter<IPost>(admin.db.collection("posts")),
};

function getCollectionWithConverter<T extends { [key: string]: any }>(
  collection: CollectionReference,
) {
  const converter = {
    toFirestore(data: SnakeToCamelCaseNested<T>) {
      return snakeCaseKeysDeep(data);
    },

    fromFirestore(documentSnapshot: DocumentSnapshot) {
      return camelCaseKeysDeep(documentSnapshot.data() as T);
    },
  };
  return collection.withConverter<SnakeToCamelCaseNested<T>>(converter);
}

function camelCaseKeysDeep(obj: any): any {
  if (isEmpty(obj)) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((current) => camelCaseKeysDeep(current));
  } else if (typeof obj === "object") {
    const newObj: any = {};

    forEach(obj, (value, key) => {
      newObj[camelCase(key.toString())] = camelCaseKeysDeep(value);
    });

    return newObj;
  }

  return obj;
}

function snakeCaseKeysDeep(obj: any): any {
  if (isEmpty(obj)) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map((current) => snakeCaseKeysDeep(current));
  } else if (typeof obj === "object") {
    const newObj: any = {};

    forEach(obj, (value, key) => {
      newObj[snakeCase(key.toString())] = snakeCaseKeysDeep(value);
    });

    return newObj;
  }

  return obj;
}
