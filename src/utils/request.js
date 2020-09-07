import { fetch as fetchPolyfill } from 'whatwg-fetch'

const request = (searchRequest, params, callback) => {
    fetch(searchRequest)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response
            } else {
                let error = new Error(response.statusText)
                error.response = response
                throw error
            }
        })
        .then(response => response.json())
        .then(data => {
            callback(data)
        }).catch(error => {
            console.log(error)
        })
}

export default request
