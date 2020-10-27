const logError = async (code, message, err) => {
  console.info({
    statusCode: err.status,
    code: code,
    message: message,
    err: err,
  })
}

const endpointError = (res, statusCode, code, message) => {
  return res.status(statusCode).json({
    errors: [
      {
        code: code,
        message: message,
      },
    ],
  })
}
const standardErrorResponse = (res, err) => {
  switch(err.code) {
    case 401:
      return res.status(401).json({
        errors: [
          {
            code: 'not-authorized',
            message: 'You must authenticate before performing this action.',
          },
        ],
      })
    case 403:
      return res.status(403).json({
        errors: [
          {
            code: 'not-authorized',
            message: 'You are not allowed to perform this action.',
          },
        ],
      })
    default:
      return res.status(500).json({
        errors: [
          {
            code: 'unknown-error',
            message: 'Something went wrong on the server and the requested action could not be performed. Please try again or contact the administrator to solve this problem.',
          },
        ],
      })
  }
}
module.exports = {logError, endpointError, standardErrorResponse}