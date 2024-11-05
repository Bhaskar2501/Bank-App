import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div className="w-[960px] h-[100vh] mx-auto px-6 py-4 text-black">
        <div className="mb-6 text-center">
          <p className="text-[28px]">Account and Services</p>
        </div>

        <div className="flex justify-evenly my-6">
          <div
            id="account"
            className="w-[400px] rounded-md h-[150px] flex flex-col justify-evenly p-4 border border-black"
          >
            <div className="flex justify-center">
              <p className="text-[20px] flex items-center">
                {" "}
                <FontAwesomeIcon icon={faUser} className="mr-4" /> New Account
              </p>
            </div>
            <div className="flex justify-center">
              <p className="py-2 px-6 rounded-md text-center bg-blue-600 w-[55%] text-[16px] text-white cursor-pointer">
                Create New Account
              </p>
            </div>
          </div>
        </div>

        <div className="h-[2rem]"></div>

        <div className="flex justify-around my-5">
          <div
            id="account"
            className="w-[400px] rounded-md h-[150px] flex flex-col justify-evenly p-4 border border-black"
          >
            <div className="flex justify-center">
              <p className="text-[20px] flex items-center">
                {" "}
                <FontAwesomeIcon icon={faMoneyBillTransfer} className="mr-4" />
                Users
              </p>
            </div>
            <div className="flex justify-center">
              <p className="py-2 px-6 rounded-md bg-blue-600 text-center w-[55%] text-[16px] text-white cursor-pointer">
                Get all users
              </p>
            </div>
          </div>

          <div
            id="account"
            className="w-[400px] rounded-md h-[150px] flex flex-col justify-evenly p-4 border border-black "
          >
            <div className="flex justify-center">
              <p className="text-[20px] flex items-center">
                {" "}
                <FontAwesomeIcon icon={faMoneyBillTransfer} className="mr-4" />
                User Details
              </p>
            </div>
            <div className="flex justify-center">
              <p className="py-2 px-6 rounded-md bg-blue-600 text-center w-[75%] text-[16px] text-white cursor-pointer">
                Get User by Account Number
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
