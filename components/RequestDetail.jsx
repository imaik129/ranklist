import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const RequestDetail = ({request}) => {
  return (

<div> 
    <div className = "bg-white shadow-lg rounded-lg p-0 lg:p-8  mb-5 mt-5 border-200 border-2  border-white">
 

    {/* {request.title} */}
    <h1 className = "transition duration-700 text-left pl-5 mb-2 pt-2 text-2xl font-bold">
      <p> {request.name}</p>
    </h1>



    <div className = "flex content-center space-x-1 items-stretch justify-left px-5 py-4">
      <Link href = {`/request/$`}> 
        <p className = "rounded-xl text-center cursor-pointer bg-rose-400 w-content px-3 text-xs  py-1 space-x-2 font-normal font-black hover:bg-rose-500">
          
          Length: {request.playlistSizeRequest}
        </p>
      </Link>

      <Link href = {`/request/$`}> 
        <p className = "rounded-xl text-center cursor-pointer bg-blue-500 w-content px-3 text-xs py-1 font-normal font-black hover:bg-blue-600">
          English
        </p>
      </Link>
      
    </div>

    <p className = " text-lg px-5 font-thin font-black pb-10">
      {request.description.text}
    </p>

    
    <div className = "flex"> 
      <div className = "flex mx-4 space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/>
        </svg>
          <p className = "mb-2"> 12</p>
      </div>

      <div className = "flex mx-4 space-x-2">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/>
        </svg>
        <p className = "mb-2"> 3</p>
      </div>          

      <div className = "font-thin text-xs pr-8 px-max"> 
        <span> 
          Posted by {request.webUser.name} at {moment(request.createdAt).add(24, 'hours').format('MMM DD, YYYY')}
        </span>           
      </div> 
    </div>


  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg> */}

  </div>

  <div className = "bg-white shadow-lg rounded-lg p-0 lg:p-8  mb-5 mt-5 border-200 border-2  border-white"> 
      {request.answers.name}
  </div>
</div>  
  )
}

export default RequestDetail