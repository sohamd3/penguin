
import axios from 'axios'

export function loadData(){
    return (dispatch) => {
        axios.get('https://gist.githubusercontent.com/sohamd3/65322fee6d244913c0abd9ec744f249a/raw/1f3afca82bcf6107500f565b7b94cf8a1f8f5059/init.json')
          .then(function (response) {
            dispatch(setState(response.data))
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export function setState(d){   
    return {
        type: 'init-state',
        payload: d
    }
}
export function setName(name){   
    return {
        type: 'set-name',
        payload: name
    }
}