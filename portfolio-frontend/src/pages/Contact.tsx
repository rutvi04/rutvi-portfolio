import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateFormData, setStatus, resetForm } from "../store/contactSlice";
import axios from "axios";

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const formData = useSelector((state: RootState) => state.contact.formData);
  const status = useSelector((state: RootState) => state.contact.status);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(updateFormData({ field: e.target.name, value: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(setStatus("Sending..."));
      const response = await axios.post("http://localhost:8080/api/contact", formData);
      if (response.status === 200) {
        dispatch(setStatus("Message sent successfully!"));
        dispatch(resetForm());
      } else {
        dispatch(setStatus("Something went wrong. Please try again."));
      }
    } catch (error) {
      console.error(error);
      dispatch(setStatus("An error occurred. Please try again."));
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className={`max-w-xl mx-auto p-6 rounded shadow-md ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                darkMode ? "bg-gray-800 border-gray-600 focus:ring-blue-500" : "bg-white border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                darkMode ? "bg-gray-800 border-gray-600 focus:ring-blue-500" : "bg-white border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                darkMode ? "bg-gray-800 border-gray-600 focus:ring-blue-500" : "bg-white border-gray-300 focus:ring-blue-300"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none"
          >
            Send
          </button>
        </form>
        {status && (
          <p className="text-center mt-4">
            <span className={`${darkMode ? "text-green-400" : "text-green-700"}`}>{status}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
