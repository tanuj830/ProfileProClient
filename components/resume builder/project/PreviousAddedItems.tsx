import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";
import EditModal from "./EditModal";

interface PreviousAddedItemsProps {
  data: Array<any>;
  setData: Function;
}

const PreviousAddedItems: React.FC<PreviousAddedItemsProps> = ({
  data,
  setData,
}) => {
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [editData, setEditData] = React.useState({} as any);

  const handleDelete = (d: any) => {
    var result = data.filter((item) => item != d);
    setData(result);
  };

  return (
    <div>
      {showEditModal ? (
        <EditModal
          dataObject={editData}
          mainDataArray={data}
          setShowEditModal={setShowEditModal}
        />
      ) : null}
      <div className="flex flex-col gap-4">
        {data.map((d) => (
          <div className="bg-[#1A1A1C] p-5 rounded-xl flex gap-5 items-center justify-between">
            <div className="flex md:items-center  gap-1 md:gap-10 w-[90%] md:w-[80%]">
              <div className="flex flex-col  overflow-ellipsis	w-[25%] ">
                <label className="text-[8px] text-gray-300 uppercase">
                  Degree
                </label>
                <h6 className="text-[12px] md:text-sm">{d.degree}</h6>
              </div>
              <div className="flex flex-col overflow-hidden	w-[25%]">
                <label className="text-[8px] text-gray-300 uppercase">
                  Year
                </label>
                <h6 className="text-[12px] md:text-sm">{d.year}</h6>
              </div>
              <div className="flex flex-col  overflow-hidden	w-[25%]">
                <label className="text-[8px] text-gray-300 uppercase">
                  School
                </label>
                <h6 className="text-[12px] md:text-sm">{d.school}</h6>
              </div>
              <div className="flex flex-col  overflow-hidden	w-[25%]">
                <label className="text-[8px] text-gray-300 uppercase">
                  Grade
                </label>
                <h6 className="text-[12px] md:text-sm">{d.grade}</h6>
              </div>
            </div>
            {/* buttons */}
            <div className="flex items-center flex-col md:flex-row justify-end gap-1 md:gap-2 w-[10%]  md:w-[20%]">
              <button
                className="text-md md:text-xl rounded-full bg-black p-2 md:p-3"
                onClick={() => {
                  setShowEditModal(true);
                  setEditData(d);
                }}
              >
                <CiEdit />
              </button>
              <button
                className="text-md md:text-lg rounded-full bg-black p-2 md:p-3"
                onClick={() => handleDelete(d)}
              >
                <IoTrashBinOutline />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousAddedItems;
