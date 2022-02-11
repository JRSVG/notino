import React from "react";
import { createContext, useState } from "react";
import { CustomizedSnackbarProps } from "../components/CustomizedSnackbar/CustomizedSnackbar";

export type VariantType = "success" | "warning" | "error" | null;
export type MessageType = string | null;

export type UiContextInterface = {
  variant: VariantType;
  message: MessageType;
  setAction: (
    variant: VariantType,
    message: MessageType
  ) => void;
  resetAction: () => void;
} & CustomizedSnackbarProps;

export const UiContext = createContext<UiContextInterface>({
  variant: 'success',
  message: null,
  setAction: (variant: VariantType, message: MessageType) => {},
  resetAction: () => {},
});

export const UiContextProvider: React.FC = ({ children }) => {
  const [variant, setVariant] = useState<VariantType>(null);
  const [message, setMessage] = useState<MessageType>(null);

  const setActionHandler = (
    variant: VariantType,
    message: MessageType
  ) => {
    setVariant(variant);
    setMessage(message);
  };

  const resetActionHandler = () => {
    setVariant(null);
    setMessage(null);
  };

  const context = {
    variant: variant,
    message: message,
    setAction: setActionHandler,
    resetAction: resetActionHandler,
  };

  return (
    <UiContext.Provider value={context}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContext;
