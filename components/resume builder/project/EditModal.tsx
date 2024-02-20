import React from "react";
import { IoIosClose } from "react-icons/io";

interface EditModalProps {
  dataObject: {
    year: string;
    school: string;
    degree: string;
    grade: string;
  };
  mainDataArray: Array<any>;
  setShowEditModal: Function;
}

const EditModal: React.FC<EditModalProps> = ({
  dataObject,
  mainDataArray,
  setShowEditModal,
}) => {
  const [year, setYear] = React.useState(dataObject.year);
  const [degree, setDegree] = React.useState(dataObject.degree);
  const [school, setSchool] = React.useState(dataObject.school);
  const [grade, setGrade] = React.useState(dataObject.grade);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    for (var i = 0; i < mainDataArray.length; i++) {
      if (
        mainDataArray[i].year === dataObject.year &&
        mainDataArray[i].degree === dataObject.degree &&
        mainDataArray[i].school === dataObject.school &&
        mainDataArray[i].grade === dataObject.grade
      ) {
        mainDataArray[i] = { year, degree, school, grade };
      }
    }

    setShowEditModal(false); // closing model
  };

  return (
    <div className="fixed w-full h-screen top-0 bottom-0 right-0 left-0 flex z-[1000] bg-[#cccccc89] ">
      <div className="w-[95%] md:w-[60%] lg:w-[30%] m-auto bg-[#000000d9]  rounded-3xl">
        <div className="flex  items-center justify-between p-5  border-b border-gray-800">
          <h6>Update</h6>
          <button className="text-3xl" onClick={() => setShowEditModal(false)}>
            <IoIosClose />
          </button>
        </div>
        <div className="p-7">
          <form onSubmit={handleSubmit}>
            <div className="form flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  Degree
                </label>
                <input
                  required
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  Year{" "}
                </label>
                <input
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  school{" "}
                </label>
                <input
                  required
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  grade{" "}
                </label>
                <input
                  required
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
            </div>

            <div className="py-5 flex justify-end items-center gap-4">
              <button
                className="bg-white text-black rounded-full px-6 py-3"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button className="bg-[#0000ff] rounded-full px-6 py-3">
                Update Details{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
