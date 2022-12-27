import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentRequests, getSimilarRequests } from '../services'

const RequestWidget = ({slug}) => {
  const [recentRequests, setRecentRequests] = useState([])

  // useEffect(()=> {
  //   if(slug){
  //     getSimilarRequests( slug).then((result)=> setRelatedPosts(result))
  //   }
  //   else{
  //     getRecentRequests(slug).then((result)=> setRelatedPosts(result))
  //   }
  // }, [slug])

  console.log(recentRequests)
  return (
    <div>requestWidget</div>
  )
}

export default RequestWidget