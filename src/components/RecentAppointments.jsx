import React from "react";

const RecentAppointments = () => {
  return (
    <div className="md:px-20 p-5 mt-5">
      <div className="bg-white shadow-md rounded-lg overflow-hidden p-5">
        <h2 className="text-xl font-semibold text-gray-800 p-4">
          Recent Appointments
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full text-gray-500">
                <th className="py-2 px-4 text-left font-normal bg-gray-200 rounded-l-lg">
                  Service
                </th>
                <th className="py-2 px-4 text-left font-normal bg-gray-200">
                  Employee
                </th>
                <th className="py-2 px-2 text-left font-normal bg-gray-200">
                  Sale
                </th>
                <th className="py-2 px-2 text-left font-normal bg-gray-200 rounded-r-lg">
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-b">
                  <td className="flex items-center py-4 px-4">
                    <img
                      src="menicure.png"
                      alt="Service"
                      className="w-10 h-10 rounded mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-700">Manicure</p>
                      <p className="text-sm text-gray-500">9 July, 2022</p>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-gray-700">Irtaza Zaidi</td>
                  <td className="py-2 px-2 text-gray-700">01</td>
                  <td className="py-2 px-2 text-blue-600 font-semibold">
                    <span className="bg-blue-500 bg-opacity-10 p-1.5 rounded-lg">
                      $100.5
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentAppointments;
