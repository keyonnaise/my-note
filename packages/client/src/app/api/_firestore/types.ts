type CamelToSnakeCase<C extends string> = C extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : C;
export type CamelToSnakeCaseNested<T> = T extends object
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: CamelToSnakeCaseNested<T[K]>;
    }
  : T;

type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type SnakeToCamelCaseNested<T> = T extends object
  ? {
      [K in keyof T as SnakeToCamelCase<K & string>]: SnakeToCamelCaseNested<T[K]>;
    }
  : T;

export interface IPost {
  id: string;
  title: string;
  body: string;
}
