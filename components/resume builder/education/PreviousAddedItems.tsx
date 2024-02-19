import React from "react";
import { CiEdit } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";

interface PreviousAddedItemsProps {
  data: Array<any>;
}

const PreviousAddedItems: React.FC<PreviousAddedItemsProps> = ({ data }) => {
  return (
    <div>
      {data.map((d) => (
        <div className="bg-[#1A1A1C] p-5 rounded-xl flex gap-5 items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex flex-col ">
              <label className="text-[8px] text-gray-300 uppercase">
                Degree
              </label>
              <h6>{d.degree}</h6>
            </div>
            <div className="flex flex-col">
              <label className="text-[8px] text-gray-300 uppercase">Year</label>
              <h6>{d.year}</h6>
            </div>
            <div className="flex flex-col">
              <label className="text-[8px] text-gray-300 uppercase">
                School
              </label>
              <h6>{d.school}</h6>
            </div>
            <div className="flex flex-col">
              <label className="text-[8px] text-gray-300 uppercase">
                Grade
              </label>
              <h6>{d.grade}</h6>
            </div>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xl rounded-full bg-black p-3">
              <CiEdit />
            </button>
            <button className="text-lg rounded-full bg-black p-3">
              <IoTrashBinOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousAddedItems;
