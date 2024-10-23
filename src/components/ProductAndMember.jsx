import React from "react";

const ProductAndMember = () => {
  return (
    <div className="md:px-20 p-5 grid md:grid-cols-2 gap-10">
      {/* Left Column: Banner Cards */}
      <div className="space-y-5 shadow-md rounded-lg p-5">
        <div className="flex items-center justify-between px-3">
          <h2 className="text-lg font-semibold">Top Products</h2>
          <select className="text-gray-500 border-transparent focus:outline-none">
            <option>This Month</option>
            <option>Last Month</option>
            <option>2 Months Ago</option>
          </select>
        </div>

        <div className="border-b flex items-center p-3">
          <img
            src="menicure.png"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-lg font-semibold">Menicure</h4>
            <p className="text-sm text-gray-400 flex">24 Services</p>
          </div>
        </div>

        <div className="border-b flex items-center p-3">
          <img
            src="menicure.png"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-lg font-semibold">Menicure</h4>
            <p className="text-sm text-gray-400 flex">24 Services</p>
          </div>
        </div>

        <div className="border-b flex items-center p-3">
          <img
            src="menicure.png"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-lg font-semibold">Menicure</h4>
            <p className="text-sm text-gray-400 flex">24 Services</p>
          </div>
        </div>
      </div>

      {/* Right Column: Banner Cards */}
      <div className="space-y-5 shadow-md rounded-lg p-5">
        <div className="flex items-center justify-between px-3">
          <h2 className="text-lg font-semibold">Top Team Members</h2>
          <select className="text-gray-500 border-transparent focus:outline-none">
            <option>This Month</option>
            <option>Last Month</option>
            <option>2 Months Ago</option>
          </select>
        </div>

        <div className="border-b flex items-center p-3">
          <img
            src="female.jpeg"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-lg font-semibold">Alina Arshad</h4>
            <p className="text-sm text-gray-400 flex">24 Appointments</p>
          </div>
        </div>

        <div className="border-b flex items-center p-3">
          <img
            src="male.jpeg"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-lg font-semibold">Irtaza Zaidi</h4>
            <p className="text-sm text-gray-400 flex">20 Appointments</p>
          </div>
        </div>

        <div className="border-b flex items-center p-3">
          <img
            src="male2.jpg"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <h4 className="text-lg font-semibold">Faheem Altaf</h4>
            <p className="text-sm text-gray-400 flex">13 Appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAndMember;
