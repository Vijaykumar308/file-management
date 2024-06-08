import { FolderOpen } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function FolderComponent({folderName, folderId, handleFolderClick}) {
  
  const handleGoInside = () => {
    handleFolderClick(folderName, folderId)
  }

  return (
    <>
        <div className="relative rounded-md mt-8">
            <button onClick={handleGoInside}>
                <FolderOpen className='cursor-pointer' size={128} color="#1f80ff" strokeWidth={1} />
                <span className='text-center inline-block size-full'>{folderName}</span>
            </button>
        </div>
    </>
  )
}
