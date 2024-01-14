import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Breadcrumbs } from "@mui/material";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiStore2Line } from "react-icons/ri";
import IncomeAreaChart from "../components/Dashboard/IncomeAreaChart";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";

import DefaultTable from "../components/common/DefaultTable";

import userData from "../constants/Data/dashboardData";

import StoreCard from "../components/common/StoreCard";
import { earnings, months } from "../constants/Data/constantsData";
import { topUserHeader } from "../constants/TableColumns/headings";
import { getCurrentMonth } from "../utils/CommonFunction";
import { CommonSelect } from "../components/common/ui";

const Dashboard = () => {
  const currentMonth = getCurrentMonth();
  const [earning, setEarnings] = useState("week");
  const [selectedOption, setSelectedOption] = useState(currentMonth);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  return (
    <Fragment>
      <div className=" ">
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <AiOutlineAppstore
                  size={23}
                  className="min-w-max text-gray-700"
                />
                <span className="text-gray-700 ">&nbsp; Dashboard </span>
              </Box>
            </Link>
            {/* <Typography color="grey">sdfgh</Typography> */}
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 pb-10">
          <div className="p-4 flex border border-orange-300 rounded-xl space-x-4 bg-white">
            <div className="p-3 border border-orange-400 shadow-md rounded-xl">
              <RiStore2Line size={28} className="text-orange-400" />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold font-sans">257</h2>
              <p className="text-sm text-gray-300">Total Store registered</p>
            </div>
          </div>
          <div className="p-4 flex border border-[#4fd0d9] rounded-xl space-x-4 bg-white">
            <div className="p-3 border border-[#a1e6eb] shadow-md rounded-xl">
              <PiUsersThreeLight size={28} className="text-[#3da9b1]" />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold font-sans">2345</h2>
              <p className="text-sm text-gray-300">Total Users</p>
            </div>
          </div>
          <div className="p-4 flex border border-[#ef779d] rounded-xl space-x-4 bg-white">
            <div className="p-3 border border-[#fab9ce] shadow-md rounded-xl">
              <MdOutlinePayments size={28} className="text-[#ee80a3]" />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold font-sans">$45,678.00</h2>
              <p className="text-sm text-gray-300">Total Earnings</p>
            </div>
          </div>
          <div className="p-4 flex border border-[#37CF02] rounded-xl space-x-4 bg-white">
            <div className="p-3 border border-[#90f06d] shadow-md rounded-xl">
              <FiCheckCircle size={28} className="text-[#37CF02]" />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold font-sans">180</h2>
              <p className="text-sm text-gray-300">Active Rent Store</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="lg:col-span-8 col-span-12 border border-primary  p-5 rounded-lg ">
            <div className="flex justify-between">
              <p className="text-[16px] font-bold font-sans">Earnings</p>
              <Box sx={{ minWidth: 120 }}>
                <CommonSelect
                  labelId={"earning-label"}
                  id={"earning-label-id"}
                  options={earnings}
                  value={earning}
                  setSelect={setEarnings}
                />
              </Box>
            </div>
            <div className="h-full">
              <IncomeAreaChart slot={earning} height={340} />
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12">
            <div className="flex justify-between space-x-5 bg-white border-secondary  border border-b-0 rounded-t-lg p-2">
              <div className="p-1 text-lg font-semibold font-sanse">
                Top Users
              </div>
              <div className="p-1">
                <CommonSelect
                  labelId={"months-select"}
                  id={"months-select-id"}
                  options={months}
                  value={selectedOption}
                  setSelect={setSelectedOption}
                />
              </div>
            </div>
            <div className="min-h-80  border border-secondary">
              <DefaultTable
                isLoading={false}
                headings={topUserHeader}
                data={userData?.topUser}
                disablePagination={true}
                size={size}
                setSize={setSize}
                page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </div>

        <div className="py-5 ">
          <h4 className="text-xl font-semibold font-sans mb-5">Top Stores </h4>
          <div className="grid lg:grid-cols-3 xs:grid-cols-1  gap-6">
            <StoreCard />
            <StoreCard />
            <StoreCard />
          </div>
        </div>

        {/* <div className="xl:px-12  rounded-lg bg-white mb-10 border-2 xs:pb-5">
          <div className=" overflow-hidden h-full w-full">
            <div className="flex-col lg:flex-row flex xs:flex-col lg:justify-between xs:justify-center justify-center items-center md:px-16 h-full w-full">
              <div className="lg:w-[450px] lg:h-full xs:w-[300px] w-full flex justify-center ml-28 sm:ml-12 xs:ml-12 h-[300px] lg:px-0 px-4 md:px-10  md:mb-10  py-5">
                <img
                  src={hero}
                  alt="hero"
                  className="w-full h-full rounded-lg pt-4"
                />
              </div>
              <div className="lg:w-1/2 xs:w-full w-full flex justify-center items-center ">
                <div className="w-full flex flex-col h-full items-center text-center ">
                  <span className="pt-10 px-5 lg:text-[30px] xs:text-[25px] md:text-[35px] sm:text-[30px] text-center pb-2 md:pb-5 font-sans font-bold inline-block bg-gradient-to-r from-purple-400 to-emerald-700 text-transparent bg-clip-text">
                    {control
                      ? control[0]?.title
                      : "Making Your MRCS Journey Easiest"}
                  </span>
                  <span className="text-center pt-4 px-5 lg:text-[25px] xs:text-[20px] text-[30px]   xs:pl-0 md:pl-8 items-center font-sans font-semibold inline-block bg-gradient-to-r from-emerald-500 to-[#4D317D] text-transparent bg-clip-text">
                    {control
                      ? control[0]?.subtitle
                      : "If you never try, You will never win"}
                  </span>
                  <br />
                  <Link to="/allquiz">
                    <button className="py-3 rounded-full px-16  bg-gradient-to-r from-emerald-500 to-indigo-400 text-lg font-bold text-white ">
                      Start
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Dashboard;
