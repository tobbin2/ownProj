//database
const databaseConstants = {
    lastPosition: "last-position",
    healthy: 0,
    risk: 1,
    infected: 2
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