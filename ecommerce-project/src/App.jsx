import { Routes,Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Test checkout page</div>} />
    </Routes>
  )
}

export default App


// Routes tells React all the pages that are in our website
// To add a page to our website: we use Route, Route = a page
// path tells the url path of the page,url means uniform resource locator 
// element tells = wehich element or component to display
// path="/" means index in shortcut
// of there is anything inside a componenet we can use self closing tag