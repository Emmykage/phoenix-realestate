import React from 'react'

const Identity = () => {
  return (
    <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Investor Verification</h2>
        <p class="text-sm text-gray-600 mb-8">
            Phoenix Precast has implemented this verification step to remain compliant with
            <span class="font-semibold">KYC/AML (Know Your Customer / Anti-Money Laundering)</span> regulations.
            This helps protect against fraudulent activity. All investors are required to complete this form before
            making any investments through Phoenix Precast.
        </p>
     
        <div className="isolate bg-white px-6 py-2 rounded-md my-6">
            <div className="">
                <h2 className="mt-2 text-lg leading-8 text-gray-600 text-left">CONTACT INFOMATION</h2>
            </div>
            <form action="#" method="POST" className="sm:mt-2">
                <div className="flex gap-x-8 gap-y-6 text-gray-500 text-left">
                    <div className='flex-1'>
                        <label for="first-name" className="text-left block text-sm font-semibold">First name</label>
                        <div className="mt-2.5">
                            <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <label for="middle_name" className="block text-sm font-semibold">Middle name</label>
                        <div className="mt-2.5">
                            <input type="text" name="last_name" id="middle_name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <label for="last-name" className="block text-sm font-semibold">Last name</label>
                        <div className="mt-2.5">
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-8 text-left my-3 text-gray-500'>
                    <div className="flex-1 sm:col-span-2">
                        <label for="company" className="block text-sm font-semibold">Title</label>
                        <div className="mt-1">
                            <input type="text" name="title" id="title" autocomplete="title" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"/>
                        </div>
                    </div>
                    <div className="flex-1 sm:col-span-2">
                        <label for="title" className="block text-sm font-semibold">Phone Number</label>
                        <div className="mt-1">
                            <input type="text" name="phone_no" id="phone_no" autocomplete="phone_no" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                <div className="flex-1 sm:col-span-2">
                    <label for="email" className="block text-sm font-semibold">Date Of Birth</label>
                    <div className="mt-1">
                        <input type="email" name="email" id="email" autocomplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                    </div>
                </div>
            </div>
        <h2 className='mt-2 text-lg leading-8 text-gray-600 text-left'>ENTITY INFORMATION</h2>
        <div className='flex'>
            <div className='flex-1'>
                <label for="entity_Name" className="text-left block text-sm font-semibold">Entity Name</label>
                <div className="mt-2.5">
                    <input type="text" name="entity_Name" id="entity_Name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>         
    
        </div>
        <div className='flex gap-x-8'>
            <div className='flex-1'>
                <label for="address" className="text-left block text-sm font-semibold">Address</label>
                <div className="mt-2.5">
                    <input type="text" placeholder='street Address' name="address" id="address" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>   
            <div className='flex-1'>
                <label for="entity_Name" className="text-left block text-sm font-semibold">Unit</label>
                <div className="mt-2.5">
                    <input type="text" placeholder='Suite/Unit' name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>       
    
        </div>

        <div className='flex gap-x-8'>
            <div className='flex-1'>
                <div className="mt-2.5">
                    <input placeholder='city' type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>   
            <div className='flex-1'>
                <div className="mt-2.5">
                    <input placeholder='State/ Region' type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>  
            <div className='flex-1'>
                {/* <label for="entity_Name" className="text-left block text-sm font-semibold">Entity Name</label> */}
                <div className="mt-2.5">
                    <input placeholder='' type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>       
    
        </div>

        <h3 className='mt-2 text-lg leading-8 text-gray-600 text-left'>IDENTITY VERIFICATION</h3>

        <div className='flex gap-x-8'>
            <div className='flex-1'>
                <label for="entity_Name" className="text-left block text-sm font-semibold">Nationality</label>
                <div className="mt-2.5">
                    <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>   
            <div className='flex-1'>
                <label for="entity_Name" className="text-left block text-sm font-semibold">Country of Residence</label>
                <div className="mt-2.5">
                    <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>  
            <div className='flex-1'>
                <label for="entity_Name" className="text-left block text-sm font-semibold">Identification</label>
                <div className="mt-2.5">
                    <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
                </div>
            </div>     

           
    
        </div>

        <div>
        <div className='my-6'>
                <input type="file" name="identification" id="identification"  className='w-full border '/>
                
            </div>
            
        </div>

    <div className="mt-10">
      <button type="submit" className="block w-max m-auto rounded-md bg-green-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SUBMIT</button>
    </div>
  </form>
</div>
    </div>
  )
}

export default Identity