import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axiox";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userschema } from "../validations/userschema";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Addedituser = ({toast}) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userschema),
  });

  const onsubmit = async (data) => {
    if(id){
          await api.put(`/users/${id}`, data);
           toast.current.show({ severity: 'success', summary: 'update', detail: 'User update successfully', life: 3000 });
    }else{
      await api.post("/users", data);
      toast.current.show({ severity: 'success', summary: 'Added', detail: 'User added successfully', life: 3000 });
    }
    // console.log(data);
    
    navigate("/");
  };

  useEffect(() => {
    api.get(`users/${id}`).then((res) =>{ 
      Object.keys(res.data).forEach(key =>{
        setValue(key,res.data[key])
      })
    });
  }, [id]);
  return (
    <>
      <div className="px-4">
        <h1 className=" p-4 mx-auto uppercase ">
          {id ? "edit user" : "add user"}
        </h1>
      </div>
      <form action="" className="p-fluid" onSubmit={handleSubmit(onsubmit)}>
        <div className="field">
          <label>Name</label>
          <InputText {...register("name")} />
          <small className="p-error">{errors.name?.message}</small>
        </div>
        <div className="field">
          <label>User Name</label>
          <InputText {...register("username")} />
          <small className="p-error">{errors.username?.message}</small>
        </div>
        <div className="field">
          <label>Email</label>
          <InputText {...register("email")} />
          <small className="p-error">{errors.email?.message}</small>
        </div>
        <div className="field">
          <label>Age</label>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <InputNumber
                value={field.value}
                onValueChange={(e) => field.onChange(e.value)}
              />
            )}
          />

          <small className="p-error">{errors.age?.message}</small>
        </div>
        <Button label="save" />
      </form>
    </>
  );
};

export default Addedituser;
