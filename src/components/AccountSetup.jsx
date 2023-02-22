import classNames from "classnames";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Input from "./Input";

function AccountSetup({currentStep, setCurrentStep}) {
  const {handleSubmit, register, formState: {errors}} = useForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });



  const handleChange = (e) => {
    const name = e.target.name;
    setForm({
      ...form,
      [name]: e.target.value,
    });
  };

  const submit = () => {
    console.log(form);
    setForm({
        name: '',
        email: '',
        phone: ''
    })
    setCurrentStep(3)
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={classNames('mb-10 w-full h-full', {
      'hidden': currentStep !== 2
    })}>
    <h5 className="capitalize mb-5 tracking-wide font-semibold text-zinc-600">
            Account Setup
          </h5>
      <div className="w-full flex flex-col space-y-10">
      <Input
        type="text"
        name="name"
        {...register('name', {
          required: 'This field is required!'
        })}
        error={errors?.name? errors?.name?.message : ''}
        value={form.name}
        onChange={handleChange}
        label="name"
        placeholder="Your Name"
      />
      <Input
        type="email"
        name="email"
        {...register('email', {
          required: 'This field is required!',
          pattern:{
            value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
            message: 'Invalid Email!'
          }
        })}
        error={errors?.email? errors?.email?.message : ''}
        value={form.email}
        onChange={handleChange}
        label="email"        
        placeholder="Your Email"
      />
      <Input
        type="tel"
        name="phone"
        {...register('phone', {
          required: 'This field is required!',
          pattern: {
             value: /^\+[0-9]{1,3}[0-9]{4,14}(?:x.+)?$/,
             message: 'Phone number is invalid'
          }
        })}
        error={errors?.phone? errors?.phone?.message : ''}
        value={form.phone}
        onChange={handleChange}
        label="phone"
        placeholder="Your Phone Number"
      />
      <button className="shadow bg-primary-500 hover:bg-primary-600 text-white w-full rounded py-2 tracking-wider capitalize">
        proceed
      </button>
      </div>
    </form>
  );
}

export default AccountSetup;
