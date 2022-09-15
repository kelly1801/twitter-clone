import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarRow from './SidebarRow';
function Sidebar() {
  return (
    <div className='flex flex-col'>
<TwitterIcon  className='h-10 w-10 text-twitter' />
<SidebarRow Icon={HomeOutlinedIcon} title='Home'/>
<SidebarRow Icon={TagOutlinedIcon} title='Explore'/>
<SidebarRow Icon={NotificationsNoneOutlinedIcon} title='Notificaticons'/>
<SidebarRow Icon={EmailOutlinedIcon} title='Messages'/>
<SidebarRow Icon={BookmarkBorderOutlinedIcon} title='Bookmarks'/>
<SidebarRow Icon={CollectionsOutlinedIcon} title='Links'/>
<SidebarRow Icon={PersonOutlineOutlinedIcon} title='Sign In'/>

<SidebarRow Icon={PendingOutlinedIcon} title='More'/>


    </div>
  )
}

export default Sidebar