"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ParamsLoadingContext = createContext(null);
export default function ParamsLoadingProvider({ children, data }) {
  const [paramsLoading, setParamsLoading] = useState(false);
  useEffect(() => {
    setParamsLoading(false);
  }, [data]);
  return (
    <ParamsLoadingContext.Provider value={{ paramsLoading, setParamsLoading }}>
      <AnimatePresence>
        {paramsLoading && (
          <motion.div
            className={"bg-blue-500   "}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "4px",
              zIndex: 9999,
            }}
            initial={{ width: 0 }}
            animate={[
              { width: "75%", transition: { duration: 1, ease: "easeIn" } },
              { width: "95%", transition: { duration: 2, ease: "easeOut" } },
            ]}
            exit={{
              width: "100%",
              transition: { duration: 0.3, ease: "linear" },
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </ParamsLoadingContext.Provider>
  );
}

export const useParamsContext = () => {
  const context = useContext(ParamsLoadingContext);

  return context;
};
