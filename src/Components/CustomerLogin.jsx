

const CustomerLogin = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center ">
      <span className="text-[25px] text-bold">For Customer</span>
        <div className="w-[480px] h-[400px] border-[1px] border-black px-4 py-3 flex flex-col justify-around">
          <div className="flex justify-center">
            <span className="text-[28px]">Log In</span>
          </div>
          <div>
            <span>Username</span>
          </div>
          <div>
            <input
              type="email"
              className="w-full p-2 border-[1px] border-black"
            />
          </div>
          <div>
            <span>Password</span>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 border-[1px] border-black"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="h-[20px] w-[20px]" />
            <span className="ml-2">Remember Me</span>
          </div>
          <div className="flex justify-end">
            <button className="py-4 px-6 bg-red-700 hover:scale-105 rounded-md text-white">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerLogin;
