import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <>
      <div className="w-[960px] h-[100vh] mx-auto px-6 py-4 text-black">
        <div className="mb-6 text-center">
          <p className="text-[28px]">Statements</p>
        </div>

        <div className="flex justify-evenly my-6">
          <div
            id="account"
            className="w-[500px] rounded-md h-[300px] flex flex-col justify-evenly p-4 border border-black"
          >
            <div className="flex justify-center">
              <p className="text-[20px] flex items-center">
                {" "}
                <FontAwesomeIcon icon={faUser} className="mr-4" /> Bank
                Statement
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-center my-5">
                <p>Enter your account Number</p>
                <input
                  type="text"
                  className="border-black border-[1px] px-4 py-2 rounded-sm"
                />
              </div>
              <div className="flex justify-evenly my-3">
                <div>
                  From
                  <input type="date" className="ml-2 border-black border-[1px]" />
                </div>
                <div>
                  To
                  <input type="date" className="ml-2 border-black border-[1px]" />
                </div>
              </div>
              <p className="py-2 px-6 mt-3 mx-auto rounded-md text-center bg-blue-600 w-[55%] text-[16px] text-white cursor-pointer">
                Generate
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Services;
