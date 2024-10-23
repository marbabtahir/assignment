import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UilUser } from "@iconscout/react-unicons";

const Appointments = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="md:p-20 p-5 grid md:grid-cols-2 gap-10">
      {/* Left Column: Calendar */}
      <div className=" items-center flex justify-center">
        <Calendar onChange={setDate} value={date} className="rounded-lg" />
      </div>

      {/* Right Column: Banner Cards */}
      <div className="space-y-5">
        <h2 className="text-lg font-semibold">Today's Appointments</h2>
        <div className="bg-gray-800 text-white shadow-md rounded-lg flex items-center p-3">
          <img
            src="menicure.png"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-400">10:30 AM - 11:00 AM</p>
            <h4 className="text-lg font-semibold">Menicure</h4>
            <p className="text-sm text-gray-400 flex">
              <UilUser size="16" className="mr-1" /> Fabiha Arshad
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold">13</h2>
            <p className="text-sm text-gray-400">October</p>
          </div>
        </div>

        <div className="bg-gray-800 text-white shadow-md rounded-lg flex items-center p-3">
          <img
            src="hair.jpg"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-400">10:30 AM - 11:00 AM</p>
            <h4 className="text-lg font-semibold">Hair Dye</h4>
            <p className="text-sm text-gray-400 flex">
              <UilUser size="16" className="mr-1" /> Fabiha Arshad
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold">13</h2>
            <p className="text-sm text-gray-400">October</p>
          </div>
        </div>

        <div className="bg-gray-800 text-white shadow-md rounded-lg flex items-center p-3">
          <img
            src="menicure.png"
            alt="Banner"
            className="w-16 h-16 rounded-md object-cover"
          />
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-400">10:30 AM - 11:00 AM</p>
            <h4 className="text-lg font-semibold">Menicure</h4>
            <p className="text-sm text-gray-400 flex">
              <UilUser size="16" className="mr-1" /> Fabiha Arshad
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-bold">13</h2>
            <p className="text-sm text-gray-400">October</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
