import { useContext } from "react";
import UiContext from "../../store/ui";
import CustomizedSnackbar from "../CustomizedSnackbar";

export const Layout: React.FC = ({ children}) => {
  const uiContext = useContext(UiContext);

  return (
    <>
      <CustomizedSnackbar
        variant={uiContext.variant}
        message={uiContext.message}
        resetAction={uiContext.resetAction}
      />
      {children}
    </>
  );
};
