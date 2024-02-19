import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Student } from "./Student";
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='students'>
          <Route path=':id' element={<Student/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App