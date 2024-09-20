import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import App from './App.jsx'
import './index.css'
import ReduxToolkit from './component/ReduxToolkit.jsx';
import counterStore from './store/index.js';
import UseContext from './component/UseContext.jsx';
import ContextProvider from './context/AppContext.jsx';
import UseReducer from './component/useReducer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}>
      <ContextProvider>
        <App />
       <ReduxToolkit />
       <UseContext />
       <UseReducer />
      </ContextProvider>
    </Provider>
  </StrictMode>,
)
