import React from 'react'

const Confirmation = ({title, message, onCancel, onConfirm}) => {
  
  return (
     

        <div className="w-full p-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-6 text-center">{message}</p>
          <div className="flex  justify-center gap-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
            >
              Confirm
            </button>
          </div>
        </div>
  )
}

export default Confirmation