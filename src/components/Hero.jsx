import React from "react";
import RevenueGraph from "./RevenueGraph";
import {
  UilCalendarAlt,
  UilArrowGrowth,
  UilChartDown,
  UilUsdCircle,
  UilUsersAlt,
} from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between md:p-20 p-10">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl py-2  leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Good Morning, <span className="font-bold">Bella Famina</span>
          </h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-sm"
            >
              <UilCalendarAlt className="text-lg mr-3" /> New Appointment
            </button>
          </span>
        </div>
      </div>

      <div className="bg-white md:px-20 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs shadow-md p-5 rounded w-full flex-col gap-y-4">
              <div className="text-2xl font-semibold flex text-gray-700">
                <UilUsdCircle size="40" className="text-lg" />{" "}
                <h2 className="ml-auto text-green-700">$1,682</h2>
              </div>
              <div className="text-lg mt-4 font-semibold flex text-gray-800">
                <h2>Total Revenue</h2>{" "}
                <UilArrowGrowth
                  size="40"
                  className="text-lg ml-auto text-green-700"
                />
              </div>
            </div>

            <div className="mx-auto flex max-w-xs shadow-md p-5 rounded w-full flex-col gap-y-4">
              <div className="text-2xl font-semibold flex text-gray-700">
                <UilUsersAlt size="40" className="text-lg" />{" "}
                <h2 className="ml-auto text-green-700">60</h2>
              </div>
              <div className="text-lg mt-4 font-semibold flex text-gray-800">
                <h2>Total Customers</h2>{" "}
                <UilArrowGrowth
                  size="40"
                  className="text-lg ml-auto text-green-700"
                />
              </div>
            </div>

            <div className="mx-auto flex max-w-xs shadow-md p-5 rounded w-full flex-col gap-y-4">
              <div className="text-2xl font-semibold flex text-gray-700">
                <UilCalendarAlt size="40" className="text-lg" />{" "}
                <h2 className="ml-auto text-red-700">78</h2>
              </div>
              <div className="text-lg mt-4 font-semibold flex text-gray-800">
                <h2>Total Appointments</h2>{" "}
                <UilChartDown
                  size="40"
                  className="text-lg ml-auto text-red-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20 p-3">
        <RevenueGraph />
      </div>
    </>
  );
};

export default Hero;
