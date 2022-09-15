import React, { SVGProps } from 'react'


interface Props{
    Icon : SVGProps
      
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex group max-w-fit items-center space-x-2 px-4 py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-all'>
<Icon className='h-6 w-6'
 />
<p className='group-hover:text-twitter'>{title}</p>

    </div>
  )
}

export default SidebarRow