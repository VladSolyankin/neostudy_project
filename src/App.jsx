import './App.css'
import Catalog from "./pages/Catalog.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import {createContext, useState} from "react";

export const AddNotificationCounter = createContext()

function App() {
    const [notificationCounter, setNotificationCounter] = useState(0)
    const addNotificationCounter = () => {
        setNotificationCounter(notificationCounter => notificationCounter + 1)
    }
    const notificationProvider = {
        notificationCounter,
        addNotificationCounter
    }
    

    return (
      <div className="App">
          <AddNotificationCounter.Provider value={notificationProvider}>
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Catalog />}></Route>
                      <Route path="/cart" element={<Cart />}></Route>
                  </Routes>
              </BrowserRouter>
          </AddNotificationCounter.Provider>
      </div>
    )
}

export default App
