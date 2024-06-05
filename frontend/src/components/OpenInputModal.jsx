import { jwtDecode } from "jwt-decode";
import { useState } from "react";

function OpenInputModal({onClose, onSave }) {
  const [folderName, setFolderName] = useState('');

  const handleInputChange = (e) => {
    setFolderName(e.target.value)
  }

  const handleSaveClicked = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const token = jwtDecode(user.token);
    onSave(folderName, token.id);
  }
  
  return (
    <>
      <div id="myModal" className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur-sm">
        <div className="modal-content relative bg-white p-6 rounded-lg shadow-lg">
          <button className="absolute right-6 top-1 text-2xl close cursor-pointer text-gray-500 hover:text-gray-700"
           onClick={() => onClose(false)}>&times;</button>
      
            <label htmlFor="inputBox" className="block text-gray-700">Folder Name:</label>
            
            <input 
              type="text" 
              id="inputBox" 
              name="inputBox" 
              className="w-full p-2 text-black mt-2 border border-gray-300 rounded" 
              value={folderName}
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
        </div>
      </div>
    </>
  )
}

export default OpenInputModal;
