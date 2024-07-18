
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddEmp from './pages/addEmp'
import ViewEmp from './pages/viewEmp'

function App() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<AddEmp/>}></Route>
         <Route path='/view' element={<ViewEmp/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
