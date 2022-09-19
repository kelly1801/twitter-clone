import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='my-2 px-2 col-span-2 hidden md:inline'>
      
<div className="flex  items-center space-x-2 mb-2 bg-gray-100 rounded-full ">
    <SearchIcon className="h-5 w-5 p-3 text-gray-400"/>
    <input type="text" 
    placeholder="Search Twitter"
    className='bg-transparent flex-1 outline-none'
    />
</div>

<TwitterTimelineEmbed
  sourceType="profile"
  screenName="KellyChara3"
  options={{height: 800}}
/>

    </div>
  )
}

export default Widgets