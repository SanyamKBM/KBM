import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Import SweetAlert2
import Reg from "../../../public/MsgDesk/10368828.jpg";
import BgImage from "../../assets/bgforProfile.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .send(
      "service_0hvi3hi", // Replace with your actual Service ID
      "template_txkrd3b", // Replace with your actual Template ID
      formData,
      "B71uOnVb89ijdHKsb" // Replace with your actual Public Key
    )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          // Show Success Alert
          Swal.fire({
            title: "Registration Successful!",
            text: "Your details have been submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Reset Form
          setFormData({ name: "", email: "", phone: "", dob: "" });
        },
        (error) => {
          console.log("FAILED...", error);

          // Show Error Alert
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={Reg} alt="Registration" className="w-full h-[40vh] md:h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Register Now</h2>
          <p className="text-center text-gray-500 mb-6">Join our school today</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaUser className="text-blue-800 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaEnvelope className="text-blue-800 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Email"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaPhone className="text-blue-800 mr-3" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaCalendar className="text-blue-800 mr-3" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
