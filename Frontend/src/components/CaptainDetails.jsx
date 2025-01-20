import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://scontent.fixc8-4.fna.fbcdn.net/v/t1.6435-9/31959899_536534493461153_2860113581054099456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6qMo94vEhSUQ7kNvgFo5W6J&_nc_zt=23&_nc_ht=scontent.fixc8-4.fna&_nc_gid=APAXpwAfsLhpbtANWccuTKK&oh=00_AYCaTg8pED21c-FpWmkCJGbLIEvkBXhvg41-XE4mTIIBvQ&oe=67B532A3"
              alt=""
            />
            <h4>Harsh Patel</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Rs. 295</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex mt-8 p-3 bg-gray-100 rounded-xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className="text-3xl mb-2 font-extralight ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-extralight ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2 font-extralight ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails