import React from "react";
import { Subscription } from "react-apollo";
import gql from "graphql-tag";

import { Home } from './Home';



const valuesUpdated = gql`
  subscription {
    valuesUpdated 
  }
`;

export var Subscriber = () => (
  <Subscription subscription={valuesUpdated}>
    {({ data }) => {
        console.log(data)
      return <h3>update: {!data ? "waiting..." : JSON.stringify(data)}</h3>;
    }}
  </Subscription>
);

// export function Subscriber (){
//     return (

//         <Subscription subscription={valuesUpdated}>
//         {({ data }) => {
//             console.log(data);
//             return <Home page={0}
//                 pagesize={5}
//                 sortby={false}
//                 order={false}
//                 firstvalmin={false}
//                 secondvalmin={false}
//                 summin={false}
//                 mulmin={false}
//                 firstvalmax={false}
//                 secondvalmax={false}
//                 summax={false}
//                 mulmax={false}
//                 lastUpdate={!data ? "none" : data.valuesUpdated}
//                 />
//         }}
//       </Subscription>
//     )
// }

