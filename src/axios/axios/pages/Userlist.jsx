import React, { useEffect, useState } from "react";
import api from "../api/axiox";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
        

const Userlist = () => {
  const [user, setUsers] = useState([]);
  const navigate= useNavigate()

  const fetchdata = async () => {
    const res = await api.get("/users");
    console.log(res);

    setUsers(res.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const actiontemplate= (rowData)=>(

    <>
   <div className="flex">
     <Button icon='pi pi-pencil' className="p-button-sm p-button-warning m-2" onClick={()=> navigate(`/edit/${rowData.id}`)}/>
    <Button icon='pi pi-trash' className="p-button-sm p-button-warning m-2"/>
   </div>
    </>
  )
  return (
    <>
      <div className="flex justify-between align-bottom p-3 ">
        <h1>user list</h1>
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
