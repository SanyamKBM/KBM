import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-screen-lg mx-auto p-6">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-3xl text-red-400" />
            <div>
              <h3 className="text-xl font-bold"> K.B.M.Public School</h3>
              <p className="text-gray-300 text-sm">
              Village:- Diyawn, Mirzapur Uttar Pradesh Pin Code - 231314 
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <FaPhoneAlt className="text-3xl text-green-400" />
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-gray-300 text-sm">
                Phone:{" "}
                <a href="tel:+917390852696" className="text-blue-400 hover:underline">
                  +91 7390852696
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                Mob:{" "}
                <a href="tel:+918765028002" className="text-blue-400 hover:underline">
                  +91-8765028002
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <FaEnvelope className="text-3xl text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-300 text-sm">
                <a href="mailto:Kbmpsinfo@gmail.Com" className="text-blue-400 hover:underline">
                Kbmpsinfo@gmail.Com
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                <a href="mailto:kbmps.info2015@gmail.com" className="text-blue-400 hover:underline">
                kbmps.info2015@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-96 border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.884761286982!2d82.76803!3d25.240806100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fcf281abd4b15%3A0x6da7c8c750f895c9!2sK.B.M.PUBLIC%20SCHOOL%20DIYAWN!5e0!3m2!1sen!2sin!4v1742624393456!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


