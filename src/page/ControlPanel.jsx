//External Import
import { Box, Breadcrumbs } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

//icons
import { AiOutlineControl } from "react-icons/ai";
import { MdAdd, MdDelete, MdModeEditOutline } from "react-icons/md";

//Internal Imports
import DefaultTable from "../components/common/DefaultTable";
import PackageBreadcrumb from "../components/common/PackageBreadcrumb";
import permissionActions from "../constants/Actions/PermissionsActions";
import {
  Status,
  commisionPercent,
  commisions,
} from "../constants/Data/constantsData";
import userData from "../constants/Data/dashboardData";

//Headings ...
import {
  conditionHeadings,
  permissionHeadings,
} from "../constants/TableColumns/headings";
import { isLargeScreen } from "../utils/CommonFunction";

//ui imports
import { CommonButton, CommonSelect } from "../components/common/ui";

//hooks and API endpoints
import { API } from "../api/endpoints";
import useDelete from "../hooks/useDelete";
import { deleteConfirmation } from "../components/common/Toast/DeleteConfirmation";
import AddCondition from "../components/ControlPanel/AddCondition";

const ControlPanel = () => {
  const [commisionspace, setCommisionSpace] = useState("space-owner");
  const [parcentspace, setCommisionPercent] = useState(1);
  const [commisionrenter, setCommisionRenter] = useState("rental-owner");
  const [parcentrenter, setCommisionPercentRent] = useState(1);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [conditionData, setConditionData] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true); 
  };
  const handleClose = () => {
    setConditionData(""); 
    setOpen(false)
  };

  const PermissionDeleteEndpoint = API.DeleteStorageCondition;

  // get Permission Data ....
  const {
    data: getPermissions = {},
    isLoading: PermissionLoading,
    refetch,
  } = useQuery([API.GetStorageCondition]);


  // Delte Mutation ....
  const deleteMutation = useDelete({
    endpoint: PermissionDeleteEndpoint,
    onSuccess: () => {
      console.log("Delete successful!");
      toast.success("Delete successful! !");
      refetch();
    },
    onError: (error) => {
      console.error("Error deleting entry:", error);
      // Add any other error handling logic
    },
  });

  const handleEdit = (item) => {
    setConditionData(item);
    handleOpen();
  };

  const handleDelete = (item) => {
    if (item?._id) {
      deleteConfirmation().then((result) => {
        if (result.isConfirmed) {
          deleteMutation.mutate(item?._id);
        }
      });
    }
  };

  const conditionActions = [
    {
      icon: <MdModeEditOutline color="white" size={16} />,
      tooltip: "Edit",
      handler: handleEdit,
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-700",
    },
    {
      icon: <MdDelete color="white" size={16} />,
      tooltip: "Delete",
      handler: handleDelete,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-700",
    },
  ];

  return (
    <Fragment>
      <div className=" ">
        <PackageBreadcrumb>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="grey" href="/category">
              <Box sx={{ justifyContent: "center", display: "flex" }}>
                <AiOutlineControl
                  size={23}
                  className="min-w-max text-gray-700"
                />
                <span className="text-gray-700 ">&nbsp; ControlPanel </span>
              </Box>
            </Link>
            {/* <Typography color="grey">sdfgh</Typography> */}
          </Breadcrumbs>
        </PackageBreadcrumb>
        <div className="px-4  ">
          <div className="grid lg:grid-cols-2 gap-6 xs:grid-cols-1">
            <div>
              {/* Commision Setting  ...............*/}

              <div className="border border-primary rounded-lg p-5">
                <div className="flex justify-between ">
                  <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
                    Commission Setting
                  </p>
                  <div className="flex space-x-2">
                    <CommonButton
                      type="reset"
                      text={"Reset"}
                      className="bg-[#E7E9E2] hover:bg-[#eaf9c4]"
                    />
                    <CommonButton
                      type="submit"
                      text={"Save Changes"}
                      className="bg-primary hover:bg-secondary"
                    />
                  </div>
                </div>
                <div className="mt-4  grid lg:grid-cols-2 xs:grid-cols-1 gap-5 ">
                  <CommonSelect
                    width={270}
                    label="Commision for"
                    labelId={"commision-label"}
                    id={"commision-label-id"}
                    options={commisions}
                    value={commisionspace}
                    setSelect={setCommisionSpace}
                  />

                  <CommonSelect
                    width={270}
                    label="Commision %"
                    labelId={"commision-percent-label"}
                    id={"commision-percent-label-id"}
                    options={commisionPercent}
                    value={parcentspace}
                    setSelect={setCommisionPercent}
                  />
                </div>
                <div className="mt-5 mb-5  grid lg:grid-cols-2 xs:grid-cols-1 gap-5 ">
                  <CommonSelect
                    width={270}
                    label="Commision for"
                    labelId={"commision-label"}
                    id={"commision-label-id"}
                    options={commisions}
                    value={commisionrenter}
                    setSelect={setCommisionRenter}
                  />

                  <CommonSelect
                    width={270}
                    label="Commision %"
                    labelId={"commision-label"}
                    id={"commision-label-id"}
                    options={commisionPercent}
                    value={parcentrenter}
                    setSelect={setCommisionPercentRent}
                  />
                </div>
              </div>

              {/* Permission Management .........*/}

              <div className="mt-5 border border-primary rounded-lg p-5 bg-white">
                <div className="flex justify-between ">
                  <p className="text-lg font-semibold ">
                    Permission Management
                  </p>
                </div>
                <div className="mt-4 pb-3 ">
                  <DefaultTable
                    actionLabel={"Permission"}
                    isLoading={false}
                    headings={permissionHeadings}
                    data={userData?.topUser}
                    disablePagination={true}
                    size={size}
                    setSize={setSize}
                    page={page}
                    setPage={setPage}
                    actionIcons={permissionActions}
                  />
                </div>
              </div>
            </div>

            <div className="">
              {/* Condition for renter and space owner  */}
              <div className="border border-primary rounded-lg p-5 bg-white">
                <div className="flex justify-between ">
                  <p className="lg:text-lg md:text-md xs:text-sm font-semibold ">
                    Condition for renter and space owner
                  </p>
                  <CommonButton
                    text="Add"
                    className="bg-primary hover:bg-secondary text-gray-200"
                    icon={<MdAdd />}
                    onClick={handleOpen}
                  />
                </div>
                <div className="mt-4 pb-3 ">
                  <DefaultTable
                    isLoading={PermissionLoading}
                    headings={conditionHeadings}
                    data={getPermissions?.data}
                    disablePagination={true}
                    size={size}
                    setSize={setSize}
                    page={page}
                    setPage={setPage}
                    actionIcons={conditionActions}
                  />
                </div>
              </div>

             
            </div>
          </div>
        </div>
         {/* Add New Condition  */}
         <AddCondition open={open} onClose={handleClose} refetch={refetch} data={conditionData} />
      </div>
    </Fragment>
  );
};

export default ControlPanel;
