import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlist from './pages/Userlist'
import Addedituser from './pages/Addedituser'
import Flayout from './layout/Flayout'
// import Header1 from './component/Header'


import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
const Axios1 = () => {
   const toast = useRef(null);
  return (
    <>
    <BrowserRouter>
    <Toast ref={toast} />
   <ConfirmDialog />
    <Routes>
    <Route  element={<Flayout />}>
          <Route path='/' element={<Userlist toast={toast} />} />
          <Route path="add" element={<Addedituser toast={toast} />} />
          <Route path="edit/:id" element={<Addedituser toast={toast} />} />
     </Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Axios1