import React, { createContext, ReactNode, useContext, useState } from "react";
import { IImageConfig } from "../types";

type Config = {
  images: IImageConfig;
  isLoading: boolean;
};

// Define type for the context
type ConfigContextType = {
  config: Config | null;
  setConfig: (data: Config) => void;
};

// Create a context with initial values
const DataContext = createContext<ConfigContextType>({
  config: null,
  setConfig: () => {},
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<Config | null>(null);

  return (
    <DataContext.Provider value={{ config, setConfig }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useConfigContext = (): ConfigContextType =>
  useContext(DataContext);
