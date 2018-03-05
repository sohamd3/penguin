
import axios from 'axios'
import {api_endpoints} from './Const.js'

// Function to load initial data from gists and populate local storage
export function loadData(){
    return (dispatch) => {

        // Creating axios calls
        let axios_calls = []
        api_endpoints.map((node) => {
          return axios_calls.push(axios.get(node.endpoint))
        })

        // Synchronizing axios calls
        axios.all(axios_calls)
        .then(
          axios.spread((...responses) => {
            // Mapping resource to response
            api_endpoints.map((node,i) => {
                var response = responses[i]
                if(!localStorage.getItem(node.storekey)){
                  localStorage.setItem(node.storekey,JSON.stringify(response.data))
                }
                return response.data
            })
            // Both requests are now complete

            // Dispatching the function to send init data to Home component
            dispatch(setState(responses[0].data))

          })
        )
        
    }
}

// Function to set initial state of Home Component
export function setState(d){   
    return {
        type: 'init-state',
        payload: d
    }
}