// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {GraphQLClient, gql} from "graphql-request"; 
// import { GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_RANKLIST_ENDPOINT
const ranklistToken = process.env.RANKLIST_TOKEN; 

export default async function answers(req,res){
  const {responseTitle, response, playlistLink, slug} = req.body; 
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers:{
      authorization: `Bearer ${ranklistToken}`
    }
  })

  const query = gql`
    mutation  CreateAnswer($responseTitle: String!, $response: String! , $playlistLink: String! ){
      createAnswer(data: {responseTitle: $responseTitle, response: $response, playlistLink: $playlistLink, post: {connect: {slug: $slug}}}){id}
    }
    `
  const  result = await graphQLClient.request(query, req.body)

  return res.status(200).send(result)
}


// type Data = {
//   name: string
// } 

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


