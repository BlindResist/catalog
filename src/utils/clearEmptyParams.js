const clearEmptyParams = params => {
    let clean = Object.assign({}, params)

    for (let key in clean) {
        if (clean[key] === '' || clean[key] === false) delete clean[key]
    }

    return clean
}

export default clearEmptyParams
