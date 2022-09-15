import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';

function Feed() {
  return (
    <div className='col-span-7 lg:col-span-5'>

        <div className='flex items-center justify-between'>
            < h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <CachedIcon className="text-twitter 
            mr-5 mt-5 h-8 
            w-8 cursor-pointer
            transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125
            "/>
        </div>
    </div>
  )
}

export default Feed