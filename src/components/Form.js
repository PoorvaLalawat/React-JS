import React from 'react'
import {useForm} from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/form-module.css";


const Form = () => {

    const {register,handleSubmit,watch,formState:{errors}} =useForm({
        defaultValues:
        {
            firstName: "",
            lastName:"",

        }
    });

    const firstName = watch("firstName");
    console.log(errors);

  return (
    <>
    <div className="form-group">
      
      <form onSubmit={handleSubmit((data)=>{
            console.log(data);
      })}>
    
      <div className="form-group">
      <input {...register("firstName" ,{required : 'First Name is required.'})} placeholder='First Name' className="form-control" /> 
      
      <spin>{errors.firstName?.message}</spin><br/>
      <p> Type : {firstName} </p>

      </div>
    

      <div className="form-group" >
      <input {...register("lastName" , {required : 'This is required.' , minLength:{
          value : 4,
          message:'Length should be greater than 4 letters'
      }})} placeholder='Last Name' className="form-control" /> 
       
       <spin>
         {errors.lastName?.message}
       </spin>
      </div>

      <div className="form-group" >
        <label htmlFor="gender">Gender : </label>

      <select {...register("gender")} >
      <option selected>Choose...</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>

      </div>

      <div className="form-group" >

      <label htmlFor="age">Age : </label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />

      </div> 

      <div className="form-group" >
      <input type="submit" className="btn btn-success"/>
      </div>
      </form>

    </div>
    </>
  )
}

export default Form