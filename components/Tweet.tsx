import React from 'react'
import { Tweet } from '../typing'
import TimeAgo from 'react-timeago' ;
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined'; 
interface Props {
    tweet: Tweet
}

function TweetComponent({tweet}: Props) {
  return (
   
   <div className='flex flex-col border-y border-gray-100 p-5 space-x-3'>
<div className='flex space-x-3'>
<figure>
    <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} alt="profile picture"/>
</figure>

<div>
    <div className='flex items-center space-x-1'>
        <p className='mr-1 font-bold'>{tweet.username}</p>
    <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
  
<TimeAgo
className='text-sm text-gray-500'
date={tweet._createdAt}/>
    </div>
    <p className='pt-1'>{tweet.text}</p>


    {tweet.image && <figure> <img src={tweet.image} alt='uploaded image' className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'/> </figure>}
    </div>
    </div>
    <div className='mt-5 flex justify-between'>
        <div className='iconBar'><QuestionAnswerOutlinedIcon className='h-5 w-5'/></div>
        <div className='iconBar'><SwapHorizOutlinedIcon className='h-5 w-5'/></div>
        <div className='iconBar'><FavoriteBorderOutlinedIcon className='h-5 w-5'/></div>
        <div className='iconBar'><UploadOutlinedIcon className='h-5 w-5'/></div>
    </div>
    </div>
  )
}

export default TweetComponent