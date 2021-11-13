import { createContext, ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";

export interface ParamsType {
  id: string;
  key: string;
  value: string;
}

interface ContextType {
  queryParams: ParamsType[];
  headerParams: ParamsType[];
  addNewParam: (type: string) => void;
  updateParam: (
    type: string,
    id: string,
    key: string,
    updateVal: "key" | "value"
  ) => void;
  deleteParam: (type: string, id: string) => void;
}

export const AppContext = createContext<ContextType | any>([]);

interface Props {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [queryParams, setQueryParams] = useState<ParamsType[]>([]);
  const [headerParams, setHeaderParams] = useState<ParamsType[]>([]);

  // Add new param
  const addNewParam = (type: string) => {
    const newParam: ParamsType = {
      id: uuid(),
      key: "",
      value: "",
    };
    type === "HEADERPARAMS"
      ? setHeaderParams((headerParams) => [...headerParams, newParam])
      : setQueryParams((queryParams) => [...queryParams, newParam]);
  };

  // Update param
  const updateParam = (
    type: string,
    id: string,
    key: string,
    updateType: "key" | "value"
  ) => {
    if (type === "HEADERPARAMS") {
      const idx = headerParams.findIndex(
        (headerParam) => headerParam.id === id
      );
      if (idx === -1) return;
      const newParam = headerParams[idx];
      newParam[updateType] = key;
      setHeaderParams((headerParams) => [
        ...headerParams.slice(0, idx),
        newParam,
        ...headerParams.slice(idx + 1),
      ]);
    } else {
      const idx = queryParams.findIndex((queryParam) => queryParam.id === id);
      if (idx === -1) return;
      const updatedParam = queryParams[idx];
      updatedParam[updateType] = key;

      setQueryParams((queryParams) => [
        ...queryParams.slice(0, idx),
        updatedParam,
        ...queryParams.slice(idx + 1),
      ]);
    }
  };

  // Delete param
  const deleteParam = (type: string, id: string) => {
    if (type === "HEADERPARAMS")
      return setHeaderParams((headerParams) => [
        ...headerParams.filter((headerParam) => headerParam.id !== id),
      ]);
    return setQueryParams((queryParams) => [
      ...queryParams.filter((queryParam) => queryParam.id !== id),
    ]);
  };

  return (
    <AppContext.Provider
      value={[queryParams, headerParams, addNewParam, updateParam, deleteParam]}
    >
      {children}
    </AppContext.Provider>
  );
};
