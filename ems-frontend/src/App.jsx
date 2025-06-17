
import './App.css'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeCompnonet from './Component/EmployeeCompnonet'

function App() {



  return (

    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />}></Route>
        <Route path="/employees" element={<ListEmployeeComponent />}></Route>
        <Route path="/add-employee" element={<EmployeeCompnonet />}></Route>
        {/* http://localhost:5174/edit-employee/:id*/}
        <Route path='/edit-employee/:id' element={<EmployeeCompnonet />}></Route>
      </Routes>

      <FooterComponent />
    </BrowserRouter>


  )
}

export default App
