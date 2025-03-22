import React, { useState } from "react";

// Images
import Dummy from "../../../src/assets/teacher.png";

const staffMembers = [
  { id: 2, name: "Rakesh Kumar Gautam", qualification: "LLB, B.Ed., BTC", image: Dummy },
  { id: 1, name: "Yogesh Kumar", qualification: "M.Sc. (Math)", image: Dummy },
  { id: 3, name: "Usha Patel", qualification: "M.A.", image: Dummy },
  { id: 4, name: "Manish Upadhyay", qualification: "LLB, B.Ed.", image: Dummy },
  { id: 5, name: "Venkatesh Kumar", qualification: "M.A.", image: Dummy },
  { id: 6, name: "Jetendra Kumar", qualification: "B.Sc.", image: Dummy },
  { id: 7, name: "Anshika Tiwari", qualification: "B.A.", image: Dummy },
  { id: 8, name: "Diksha Devi", qualification: "B.A. (English)", image: Dummy },
  { id: 9, name: "Pratibha Devi", qualification: "M.A.", image: Dummy }
];


export default function Staff() {
  const [viewMode, setViewMode] = useState("table"); // Default view
  const [selectedImage, setSelectedImage] = useState(null); // Lightbox state

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Staff</h2>

      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          style={{ background: "#0D0C22" }}
          onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Switch to {viewMode === "table" ? "Card View" : "Table View"}
        </button>
      </div>

      {/* Table View */}
      {viewMode === "table" ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead className="bg-gray-700 text-white">
              <tr className="uppercase text-sm font-semibold">
                <th className="py-3 px-4 border">Sr No</th>
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Qualification</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff, index) => (
                <tr
                  key={staff.id}
                  className="text-gray-900 text-center border-b even:bg-gray-100 hover:bg-gray-200"
                >
                  <td className="py-3 px-4 border">{index + 1}</td>
                  <td className="py-3 px-4 border">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-12 h-12 rounded-full mx-auto cursor-pointer hover:scale-110 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                      onClick={() => setSelectedImage(staff.image)}
                    />
                  </td>
                  <td className="py-3 px-4 border">{staff.name}</td>
                  <td className="py-3 px-4 border">{staff.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card View (With Hover Effect)
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={staff.image}
                alt={staff.name}
                className="w-44 h-44 rounded-full mx-auto mb-4 cursor-pointer hover:scale-110 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                onClick={() => setSelectedImage(staff.image)}
              />
              <h3 className="text-2xl font-bold text-gray-900">{staff.name}</h3>
              <p className="text-gray-800 text-xl mt-2">{staff.qualification}</p>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 text-lg"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="Staff" className="w-[400px] h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
