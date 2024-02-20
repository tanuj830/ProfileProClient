import React from "react";
import { IoIosClose } from "react-icons/io";

interface EditModalProps {
  dataObject: {
    title: string;
    employer: string;
    startDate: string;
    endDate: string;
    city: string;
    disp: string;
  };
  mainDataArray: Array<any>;
  setShowEditModal: Function;
}

const EditModal: React.FC<EditModalProps> = ({
  dataObject,
  mainDataArray,
  setShowEditModal,
}) => {
  const [title, setTitle] = React.useState(dataObject.title);
  const [employer, setEmployer] = React.useState(dataObject.employer);
  const [startDate, setStartDate] = React.useState(dataObject.startDate);
  const [endDate, setEndDate] = React.useState(dataObject.endDate);
  const [city, setCity] = React.useState(dataObject.city);
  const [disp, setDisp] = React.useState(dataObject.disp);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    for (var i = 0; i < mainDataArray.length; i++) {
      if (
        mainDataArray[i].title === dataObject.title &&
        mainDataArray[i].employer === dataObject.employer &&
        mainDataArray[i].startDate === dataObject.startDate &&
        mainDataArray[i].endDate === dataObject.endDate &&
        mainDataArray[i].city === dataObject.city &&
        mainDataArray[i].disp === dataObject.disp
      ) {
        mainDataArray[i] = { title, employer, startDate, endDate, city, disp };
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
                  title
                </label>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  employer{" "}
                </label>
                <input
                  required
                  value={employer}
                  onChange={(e) => setEmployer(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  start-date{" "}
                </label>
                <input
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  end-date{" "}
                </label>
                <input
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  city{" "}
                </label>
                <input
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-[#1A1A1C] rounded-2xl text-xs outline-none hover:outline-[#0000ff] py-3 px-3 text-gray-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-gray-300 uppercase">
                  disp{" "}
                </label>
                <input
                  required
                  value={disp}
                  onChange={(e) => setDisp(e.target.value)}
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
