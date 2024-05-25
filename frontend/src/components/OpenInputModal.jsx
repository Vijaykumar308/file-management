import { useState } from "react";

function OpenInputModal({onClose, onSave }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSaveClicked = () => {
    onSave(inputValue);
  }
  
  return (
    <>
      <div id="myModal" className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-sm">
        <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
          <button className="close cursor-pointer text-gray-500 hover:text-gray-700"
           onClick={() => onClose(false)}>&times;</button>
          <form id="modalForm" className="mt-4">
            <label htmlFor="inputBox" className="block text-gray-700">Folder Name:</label>

            <input 
              type="text" 
              id="inputBox" 
              name="inputBox" 
              className="w-full p-2 text-black mt-2 border border-gray-300 rounded" 
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
              />

            <button 
              onClick={handleSaveClicked}
              type="button" 
              id="saveBtn" 
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save
              </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default OpenInputModal;
