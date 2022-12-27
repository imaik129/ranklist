import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_RANKLIST_ENDPOINT;

export const getRequests = async () => {
    const query = gql`
    query MyQuery {
      requestsConnection {
        edges {
          node {
            createdAt
            id
            name
            playlistSizeRequest
            publishedAt
            description {
              text
            }
            slug
            answers {
              id
              name
              description
              playlist
              createdAt
              webUser {
                id
                name
              }
            }
            webUser {
              id
              name
            }
          }
        }
      }
    }
    
      
    `;
    const result = await request(graphqlAPI, query);

    return result.requestsConnection.edges;
  };



  
  export const getRequestDetails = async (slug) => {
    const query = gql`
      query GetRequestDetails($slug : String!) {
        request(where: {slug: $slug}) {
          name
          description{
            text
          }
          playlistSizeRequest
          slug
          answers{
            name
            description
            playlist
            slug
            webUser{
              name
            }
            request{
              name
            }
          }
          webUser{
            name
            photo{
              url
            }
          }


        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.request;
  };


  export const submitResponse = async (obj) => {
    const result = await fetch('/api/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    })

    return result.json();
  }


// export const getRequestDetails = async (slug) => {
//   const query = gql`
//   query GetRequestDetails($slug: String!) {
//     requests(where: {slug: String!}){
//           createdAt
//           id
//           name
//           playlistSizeRequest
//           publishedAt
//           description {
//             text
//           }
//           slug
//           answers {
//             id
//             name
//             description
//             playlist
//             createdAt
//             webUser {
//               id
//               name
//             }
//           }
//           webUser {
//             id
//             name
//           }
//           content{
//             raw
//           }
//         }
//       }
  
  
    
//   `;
//   const result = await request(graphqlAPI, query, {slug});

//   return result.requests;
// };


  // export const getRecentRequests = async () => {
  //   const query = gql`
  //   query GetRequestDetails() {
  //     requests(
  //       orderBy: createdAt_ASC
  //       last:3
  //     ){
  //       title
  //       createdAt
  //       slug
  //     }
  //   }
  //   `
  //   const result = await request(graphqlAPI, query);
  //   return result.requests;
  // }

  // export const getSimilarPosts = async () => {
  //   const query = gql`
  //   query GetRequestDetails($slug: String!, $categories: [String!]) {
  //     requests(
  //       where: {slug_not: $slug, AND {categories_som: {slug_in: $categories}}}
  //       last: 3
  //     ){
  //       title
  //       createdAt
  //       slug
  //     }
  //   }
  //   `
  //   const result = await request(graphqlAPI, query);
  //   return result.requests;
  // }


// export const getRequests = async () => {
//     const query = gql`
//     query MyQuery {
//         requestsConnection {
//           edges {
//             node {
//               createdAt
//               id
//               name
//               playlistSizeRequest
//               publishedAt
//               answers {
//                 id
//                 name
//                 description
//                 playlist
//                 createdAt
//                 webUser {
//                   id
//                   name
//                 }
//               }
//             }
//           }
//         }
//       }
        
//     `;
    
//     const result = await request(graphqlAPI, query);
//     return result.postsConnection.edges;
// };