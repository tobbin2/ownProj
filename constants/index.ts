//database
const databaseConstants = {
    lastPosition: "last-position"
}

interface IReqResults {
    success?: boolean,
    response?: any,
    error?: any
}

export {
    databaseConstants,
    IReqResults
}