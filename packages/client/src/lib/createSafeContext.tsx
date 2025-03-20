"use client";

import { createContext, useContext, useMemo } from "react";

export function createSafeContext<T extends object | null>(
  rootComponentName: string,
  defaultValue?: T,
) {
  const Context = createContext<T | undefined>(defaultValue);

  const Provider = ({ children, ...rest }: React.PropsWithChildren<T>) => {
    const value = useMemo(() => rest, Object.values(rest)) as T;
    return <Context value={value}>{children}</Context>;
  };

  const useSafeContext = (consumerName: string) => {
    const ctx = useContext(Context);
    if (ctx === undefined) {
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return ctx;
  };

  Provider.displayName = rootComponentName + "Provider";

  return [Provider, useSafeContext] as const;
}
