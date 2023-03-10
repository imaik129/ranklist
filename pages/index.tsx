import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {RequestCard, Categories, RequestWidget} from '../components';

import {getRequests} from '../services'

const Home: NextPage = ({requests}) => {

  // const requests= [
  //   {title: 'One: React Testing Rquests', description: 'Testing requests feature One'},
  //   {title: 'Two: React Testing Rquests', description: 'Testing requests feature Two'},
  // ];

  return (
    <div className= "container mx-auto px-10 mb-8 bg-gray-100" >
      
      <Head>
        <title>Ranklist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div></div> 
      <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12 "> 
        <div className = "lg:col-span-8 col-span-1"> 
          {requests.map((request)=> (
            <RequestCard request = {request.node} key = {request.title}/>
          ))}
        </div>

        <div className = "lg:col-span-4 col-span-1">
          <div className = "lg:sticky relative top-8">
            <RequestWidget/>
            <Categories/>
          </div>
        </div>
      </div> 





      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const requests = (await getRequests()) || [];
  return{
    props: {requests}
  }

}

export default Home
