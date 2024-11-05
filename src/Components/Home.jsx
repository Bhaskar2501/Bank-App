import background from "/src/assets/images/home.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div className="w-[1280px] mx-auto flex justify-between">
          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: `cover`,
              backgroundRepeat: `no-repeat`,
            }}
            className="w-[74%] h-[400px] flex items-center px-8"
          >
            <div className="bg-white w-[500px] h-[280px] px-[30px] pb-[30px] flex flex-col justify-around">
              <div>
                <h1 className="text-[38px]">Get 1 of 4 festive gifts</h1>
              </div>
              <div>
                <span className="text-[16px]">
                  Use your credit card to earn an INR 300,000 holiday voucher,
                  iPhone 16 Pro, iPad or INR 10,000 Amazon vouchers.
                </span>
              </div>
              <div>
                <button className="py-3 px-10 flex items-center text-[18px] bg-red-600 text-white">
                  Know More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: `rgb(62, 80, 93)` }}
            className=" w-[24.5%] text-white pt-4 pb-[30px] px-[20px]"
          >
            <div className="class-info flex flex-col">
              <div className="mb-5">
                <span className="text-[28px]">
                  HSBC Live+ Credit Card <span className="white-arrow"></span>
                </span>
                <p className="text-[16px]">
                  Get 4 complimentary domestic airport lounge visits per year.
                </p>
              </div>

              <span className="mt-[30px]"></span>

              <div>
                <span className="text-[28px]">Open NRI account <span className="white-arrow"></span></span>
                <p className="text-[16px]">
                  Open an NRI account in just 4 hours. T&C apply.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[1280px] mx-auto flex flex-col justify-between py-8 items-center">
          <div className="text-[28px] flex w-full my-4">
            <span className="w-[25%]">Premier banking &nbsp;<span className="red-arrow"></span></span>
            <span className="w-[25%]">Credit cards &nbsp;<span className="red-arrow"></span></span>
            <span className="w-[25%]">Home Loans &nbsp;<span className="red-arrow"></span></span>
            <span className="w-[25%]">Investment &nbsp;<span className="red-arrow"></span></span>
          </div>
          <div className="text-[28px] flex w-full my-4">
            <span className="w-[25%] ">NRI Services &nbsp;<span className="red-arrow"></span></span>
            <span className="w-[25%]">Employee Banking Solutions &nbsp;<span className="red-arrow"></span></span>
            <span className="w-[25%]">Personal Loans &nbsp;<span className="red-arrow"></span></span>
            <span className="w-[25%]">Insurance &nbsp;<span className="red-arrow"></span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
