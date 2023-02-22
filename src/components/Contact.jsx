import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import Input from "./Input";
import { useForm } from "react-hook-form";
import classNames from "classnames";

function Contact({ id }) {
  const {handleSubmit, register, formState:{errors}} = useForm();
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  
  const onSubmit = () => {
    toast("Email sent successfully!");

    return setForm({
      name: '',
      email: '',
      msg: ''
    })
  };

  return (
    <section ref={id} className="pb-10 mx-7 md:mx-20 relative">
      <h1 className="text-center pt-9 text-orange-500 font-alfa tracking-widest">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-2 lg:gap-10 mt-16 font-bold">
        <div className="flex flex-col order-2 md:order-1 lg:max-w-md space-y-5">
          <p className="flex items-center gap-2">
            <span className="text-white p-2 rounded-full bg-primary-600">
              <FaMapMarkerAlt className="w-4 h-4" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            vestibulum ante
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white p-2 rounded-full bg-primary-600">
              <FaMobileAlt className="w-4 h-4" />
            </span>
            <div>
              <p>+234 xxx xxx xxx</p>
              <p>+234 xxx xxx xxx</p>
              <p>+234 xxx xxx xxx</p>
            </div>
          </div>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto w-full flex flex-col order-1 md:order-2 space-y-6"
        >
          <Input
            type="text"
            name="name"
            {...register('name', {
              required: 'This field is required!'
            })}
            error={errors?.name? errors?.name?.message : ''}
            value={form.name}
            onChange={handleChange}
            maxLength={200}
            label='name'
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
            label='email'
            placeholder="Your Email"
          />
          <div>
            <label className="sr-only">message</label>
            <span className="text-red-500 tracking-widest">{errors.msg? errors?.msg?.message : ''}</span>
            <textarea
              maxLength={200}
              name="msg"
              {...register('msg', {
                required: 'This field is required!'
              })}
              value={form.msg}
              onChange={handleChange}
              placeholder="Write your message"
              className={classNames('placeholder:capitalize placeholder:font-light font-normal tracking-wider border border-gray-400 rounded w-full resize-none h-44 p-3 outline-none', {
                'border-red-500 border-2': errors?.msg == true
              })}
            ></textarea>
            <p className="text-lg">
              <span>{form.msg? (200 - form.msg.length) : 200}</span> characters left.
            </p>
          </div>
          <button className="rounded py-3 transition-all duration-500 ease-in-out text-white text-lg text-center w-full bg-primary-500 hover:bg-primary-600 tracking-widest capitalize shadow">
            send
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default Contact;
