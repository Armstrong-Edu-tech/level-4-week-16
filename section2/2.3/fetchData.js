const fetchUserCallback = (cb) => {
    setTimeout(() => { cb({ id: 1, name: 'DECI Student' }) }, 1000)
}

const fetchUserPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve({ id: 1, name: 'DECI Student' }) }, 1000)
    })
}

const fetchError = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { reject('Network Error: Failed to connect') }, 1000)
    })
}

module.exports = { fetchUserCallback, fetchUserPromise, fetchError }