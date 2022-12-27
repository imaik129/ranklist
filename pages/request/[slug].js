import React from 'react'

import {getPosts, getPostDetails, getRequestDetails, getRequests} from '../../services';
import {RequestDetail, Author, Answer, CommentsForm} from '../../components'
import postcss from 'postcss';
// import {RequestDetails, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components'

const RequestDetails = ({request}) => {
  return (
    <div className = "container mx-auto px-10 mb-8">
        <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12"> 
            <div className = "col-span-1 lg:col-span-8"> 
                <RequestDetail request = {request}/>
                <Author/>
                {/* <CommentsForm/> */}
                <Answer answer = {request.answer}/>
                <CommentsForm/>
            </div>
            <div classNAme = "col-span-1 lg:col-span-4">
                <div className = "relative lg:sticky top-8">
                    {/* <PostWidget></PostWidget> */}
                </div>
            </div>
        </div>
        {/* RequestDetails */}
    </div>
  )
}


export default RequestDetails;

export async function getStaticProps({params}){
    const data = await getRequestDetails(params.slug)
    return{
      props: {request :data}
    }
  
  }
  

export async function getStaticPaths(){
    const requests = await getRequests();
    return {
        paths: requests.map(({node:{slug}})=> ({params: {slug}})),
        fallback: false,
    }
}