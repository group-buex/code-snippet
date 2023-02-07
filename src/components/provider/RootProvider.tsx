"use client";

import ThemeProvider from "#/src/components/provider/ThemeProvider";

type RootProvider = {
  children: React.ReactNode;
};

const RootProvider: React.FC<RootProvider> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default RootProvider;
