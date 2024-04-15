import React, { createContext, ReactNode, useContext, useState } from "react";
import { IImageConfig } from "../types";

type Data = {
  images: IImageConfig;
  isLoading: boolean;
};

// Define type for the context
type DataContextType = {
  data: Data | null;
  setData: (data: Data) => void;
};

// Create a context with initial values
const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => {},
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Data | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = (): DataContextType => useContext(DataContext);
