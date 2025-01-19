import React from "react";

const LocationSearchPanel = (props) => {
    
    
    // sample array for location
    const locations = [
        "Motilal Nehsru National Institute of Technology Allahabad, Prayagraj,211004",
        "Mahakumbh Prayagraj, Sangam",
        "20B, Near Kapoor's cafe, School of coding, Uttar pradesh",
        "12A, Nehru Place, Ram enclave,"
    ]
  return (
    <div>
        {
            locations.map(function(elem,idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                }} className="flex gap-4 border-gray-50 active:border-black border-2 p-2 rounded-xl my-2 items-center justify-start ">
                <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full ">
                  <i className="ri-map-pin-2-line "></i>
                </h2>
                <h4 className="font-medium">{elem}</h4>
              </div>
            })
        }
        
    </div>
  );
};

export default LocationSearchPanel;
