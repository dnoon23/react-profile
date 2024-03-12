import React, { useState } from "react";
import '../output.css';

function Contact() {

  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  
  const handleNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setFormEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setFormMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };



  return (
    <div className="h-screen justify-center bg-red-800">
      <h1 className="text-4xl font-bold py-5 text-center">Contact</h1>
      <p className="text-center pb-5">
        To contact me please e-mail me at <a href='mailto://dnoonan23@yahoo.com' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">dnoonan23@yahoo.com</a>.
      </p>
      <div className="col-md-6 text-center">

        <form onSubmit={handleSubmit} >
          <div>
            <div className="mb-5 mx-20">
              <label>
                Name:
              </label>
              <input
                type="text"
                className="form-control short-input g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                value={formName}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="mb-5 mx-20">
              <label>
                Email:
              </label>
              <input
                type="email"
                className="form-control short-input g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                value={formEmail}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="mb-5 mx-20">
              <label>
                Message:
              </label>
              <textarea
                className="form-control large-input block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Message"
                value={formMessage}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Contact;