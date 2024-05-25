import { FolderOpen } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function FolderComponent({folderName,handleFolderClick}) {
  const {setShowFolder} = useContext(AppContext);

  const handleGoInside = () => {
    setShowFolder([{ id: 101, name: "vijay"}]);
    handleFolderClick(folderName)
    console.log('inside folder');
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
