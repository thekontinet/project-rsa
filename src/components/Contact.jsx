import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import Input from "./Input";

function Contact({ id }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [errors, setErrors] = useState({
    field: "",
    message: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };

  // const handleError = () => {
  //   form.name === '' ? setErrors({...errors, name: 'name field is required!'}) : ''
  //   form.name.length > 200 ? setErrors({...errors, name:})
  // }

  const onSubmit = (e) => {
    e.preventDefault();

    return toast("Email sent successfully!");
  };

  return (
    <section ref={id} className="py-10 mx-7 md:mx-20 relative">
      <h1 className="text-center pt-9 text-orange-500 font-alfa tracking-widest">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-16 font-bold">
        <div className="flex flex-col order-2 md:order-1 max-w-md space-y-5">
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
          onSubmit={onSubmit}
          className="max-w-lg mx-auto w-full flex flex-col order-1 md:order-2 space-y-6"
        >
          <Input
            type="text"
            value={form.name}
            onChange={handleChange}
            name="name"
            label='name'
            placeholder="Your Name"
          />
          <Input
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            label='email'
            placeholder="Your Email"
          />
          <div>
            <label className="sr-only">message</label>
            <textarea
              maxLength={200}
              name="text"
              value={form.text}
              onChange={handleChange}
              placeholder="Write your message"
              className="placeholder:capitalize placeholder:font-light font-normal tracking-wider border border-gray-400 rounded w-full resize-none h-44 p-3 outline-none"
            ></textarea>
            <p className="text-lg">
              <span>{200 - form.text.length}</span> characters left
            </p>
          </div>
          <button className="rounded py-3 text-white text-lg text-center w-full bg-primary-500 hover:bg-primary-600 tracking-widest capitalize shadow">
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
