const qs = require('query-string')

function queryString(params) {
    for (let key in params) {
        if (params[key] === '' || params[key] === false) delete params[key]
    }

    let url = `?${qs.stringify(params)}`

    if (history.pushState) {
        try {
            history.pushState({}, '', url)
            return
        } catch (err) {
            console.error('Error in queryString!')
        }
    } else {
        document.location.href = url
    }
}

export default queryString
