import React, {useRef, useState, useEffect} from 'react'

import {submitResponse} from '../services'; 

const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const answerTitleEl = useRef();
  const playlistLinkEl = useRef();
  const answerEl = useRef();
  const storeDataEl = useRef();

  const handleResponse = () => {
    setError(false);

    const {value: responseTitle} = answerTitleEl.current;
    const {value: response} = answerEl.current;
    const {value: playlistLink} = playlistLinkEl.current;

    if(!responseTitle || !response || !playlistLink){
      setError(true)
      return;
    }

    const responseObj = {
      responseTitle, response, playlistLink, slug
    };

    submitResponse(responseObj).then((res)=> {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    })

  }
 
  return (
    <div className = "bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className = "text-xl mb-8 font-seimibold border-b pb-4"> Submit Playlist</h3> 
      <div className = "gird grid-cols-1 gap-4 mb-4">
        <input ref ={answerTitleEl} className = "p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder = "Header"
        name ="Request"
        />
      </div>

      <div className = "grid grid-cols-1 gap-4 mb-4">
        <textarea ref ={answerEl} className = "p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder = "Describe your playlist"
        name ="Description"
        />
      </div>

      <div className = "grid grid-cols-1 gap-4 mb-4"> 
        <input ref={playlistLinkEl} type="url" className = "py-2 p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
              placeholder ="Spotify Playlist Link" name = "Link"/>
      </div>

      {error && <p className = "text-xs test-red-500 "> All fields are required</p>}

      <div className = "mt-8 "> 
        <button type ="button" 
        onClick ={handleResponse}
        className = "transition duration-500 ease hover:bg-indigo-900 incline-block bg-rose-900 rounded-full text-lg text-white px-8 py-3 cursor-pointer" > 
         Submit Playlist</button> 

         {showSuccessMessage && <span className = "text-xl float-right font-semibold mt-3 text-green-500"> Playlist Submitted Successfully</span>}
       
      </div>

    </div>

  ) 
}

export default CommentsForm