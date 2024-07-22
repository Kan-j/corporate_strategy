import React from 'react'
import { FaFolderOpen } from 'react-icons/fa'

const FolderItem = ({folderLink, folderName}: any) => {
  return (
    <a href={folderLink} className="">
        <div className="w-full bg-white px-4 py-3 rounded-lg">
        <div className="w-full flex justify-center">
            <FaFolderOpen className="w-full" color="gray" size={110} />
        </div>
        <p className="text-gray-700 hover:underline font-semibold text-center">{folderName}</p>
        </div>
    </a>
  )
}

export default FolderItem