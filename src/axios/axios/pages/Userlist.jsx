import React, { useEffect, useState } from "react";
import api from "../api/axiox";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
        
        

const Userlist = ({toast}) => {
  const [user, setUsers] = useState([]);
  const navigate= useNavigate()

  const fetchdata = async () => {
    const res = await api.get("/users");
    // console.log(res);

    setUsers(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const deleteuser =(id)=>{
    confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: async ()=>{
             await api.delete(`/users/${id}`)

              toast.current.show({ severity: 'success', summary: 'deleted', detail: 'User deleted successfully', life: 3000 });
              fetchdata()
            },
           
        });
  }

  const actiontemplate= (rowData)=>(

    <>
   <div className="flex">
     <Button icon='pi pi-pencil' className="p-button-sm p-button-warning m-2" onClick={()=> navigate(`/edit/${rowData.id}`)}/>
    <Button icon='pi pi-trash' className="p-button-sm p-button-warning m-2" onClick={()=>deleteuser(rowData.id)}/>
   </div>
    </>
  )
  return (
    <>
      <div className="flex justify-end align-bottom p-3 ">
        {/* <h1>user list</h1> */}
      <Button label="add user" icon='pi pi-plus' size="small" onClick={()=>navigate('/add')}/>
      </div>
      <DataTable value={user} showGridlines stripedRows paginator rows={5} size="small" filterDisplay="row">
        <Column field="name" header="Name" filter filterPlaceholder="Search" ></Column>
        <Column field="username" header="Username" filter filterPlaceholder="Search" ></Column>
        <Column field="email" header="Email" filter filterPlaceholder="Search" ></Column>
        <Column field="age" header="Age" filter filterPlaceholder="Search" ></Column>
        <Column  header="Action" body={actiontemplate}></Column>
        
      </DataTable>
    </>
  );
};

export default Userlist;
