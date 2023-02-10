"use client";

import { ToastContainer } from "react-toastify";
import ThemeProvider from "#/src/components/provider/ThemeProvider";
import "react-toastify/dist/ReactToastify.css";

type RootProvider = {
  children: React.ReactNode;
};

const RootProvider: React.FC<RootProvider> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      <ToastContainer position="bottom-right" />
    </ThemeProvider>
  );
};

export default RootProvider;
