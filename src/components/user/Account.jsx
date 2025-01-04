import React from 'react'

const ProfileAccountDisplay = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row  items-center gap-10 p-3 space-y-6 md:space-y-0">
            <div
              className="w-full border  shadow my-4 md:w-1/2 rounded-lg flex justify-between flex-col bg-gray-100 bg-cover bg-top bg-no-repeat">
          
              <div className=" border-black">
                <div className="px-3 py-2">
                  <p class=" text-lg text-gray-900">
                    Profits
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-4xl mt-6 font-semibold text-gray-900">
                    $00.00

                    </span>
                    <span className='text-green-600'>
                    5%

                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full border  shadow my-4 md:w-1/2 rounded-lg flex justify-between flex-col bg-gray-100 bg-cover bg-top bg-no-repeat">
          
              <div className=" border-black">
                <div className="px-3 py-2">
                  <p class=" text-lg text-gray-900">
                    Trading
                  </p>
                  <p className="text-4xl mt-6 font-semibold text-gray-900">
                     $00.00
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default ProfileAccountDisplay