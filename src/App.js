import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditUser from "./components/EditUser";

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route exact path='/all' element={<AllUsers />} />
 <Route exact path='/add' element={<AddUser />} />
 <Route exact path='/edit/:id' element={<EditUser />} />
 </Routes>
</BrowserRouter>
  );
}

export default App;
