import React from 'react'
import Image from 'next/image'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
function TweetBox() {
    
    const [input, setInput] = useState<string>("")
    
    return ( 
        <div className="flex space-x-2 p-5">
            <img src="https://links.papareact.com/gll" alt="generic user picture" className="h-14 w-14 rounded-full object-cover mt-4"
            />

            <div className="flex flex-1 items-centerpl-2">
                <form className="flex flex-1 flex-col">
                    <input value={input}
                    onChange={(event) => setInput(event.target.value)}
                    type="text" placeholder="What's Happening?"  className="h-24 w-full text-xl outline-none placeholder:text-xl"/>

                    <div className="flex items-center">
                        <div className="flex flex-1 space-x-2 text-twitter">
                            <CameraAltOutlinedIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"  />
                            <SearchOutlinedIcon className="h-5 w-5" />
                            <EmojiEmotionsOutlinedIcon className="h-5 w-5" />
                            <CalendarMonthOutlinedIcon className="h-5 w-5" />
                            <LocationOnOutlinedIcon className="h-5 w-5" />
                        </div>

                        <button disabled={!input} className="
                        disabled:opacity-40 bg-twitter px-5 py-2 font-bold text-white rounded-full">Tweet</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox