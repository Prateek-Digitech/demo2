import { createContext } from "react";


export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = 3424234324;
  const name = 'Prateek';

  return <>
    <AppContext.Provider value={{phone, name}}>
      {props.children}
    </AppContext.Provider>
  </>
}

export default ContextProvider;