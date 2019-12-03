import React from 'react';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import gql from "graphql-tag";

import { fetchValuesQuery } from '../queries'


const UPDATE_SUBSCRIPTION = gql`
  subscription {
    valuesUpdated 
  }
`;

export function Home(props) {
    const subscrip = useSubscription(UPDATE_SUBSCRIPTION,  { variables: { } });
    console.log(`subdata ${JSON.stringify(subscrip)}`)
    let query = fetchValuesQuery(props)
    const { loading, data } =  useQuery(query);
    // props.updateData(data);
    
    return (
        <p>
            {JSON.stringify(data)}
        </p>
    )
}