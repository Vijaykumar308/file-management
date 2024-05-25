import { FolderOpen } from 'lucide-react';

export default function FolderComponent({folderName}) {
  return (
    <>
        <div className="relative rounded-md mt-8">
            <div>
                <FolderOpen className='cursor-pointer' size={128} color="#1f80ff" strokeWidth={1} />
                <span className='text-center inline-block size-full'>{folderName}</span>
            </div>
        </div>
    </>
  )
}
