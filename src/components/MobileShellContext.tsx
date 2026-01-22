"use client";

import { createContext, useContext } from "react";

const MobileShellContext = createContext(false);

export function MobileShellProvider({
  enabled,
  children,
}: {
  enabled: boolean;
  children: React.ReactNode;
}) {
  return <MobileShellContext.Provider value={enabled}>{children}</MobileShellContext.Provider>;
}

export function useMobileShell() {
  return useContext(MobileShellContext);
}

