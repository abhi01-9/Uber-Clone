import React from "react";

const RidePopUp = () => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {}}>
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>

      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-450 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://scontent.fixc8-4.fna.fbcdn.net/v/t1.6435-9/31959899_536534493461153_2860113581054099456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6qMo94vEhSUQ7kNvgFo5W6J&_nc_zt=23&_nc_ht=scontent.fixc8-4.fna&_nc_gid=APAXpwAfsLhpbtANWccuTKK&oh=00_AYCaTg8pED21c-FpWmkCJGbLIEvkBXhvg41-XE4mTIIBvQ&oe=67B532A3"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahamdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahamdabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-money-rupee-circle-line"></i>
            <h3 className="text-lg font-medium">Rs.193.0</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash-Cash</p>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg "
        >
          Confirm
        </button>
        <button className="w-full mt-5 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg ">
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
