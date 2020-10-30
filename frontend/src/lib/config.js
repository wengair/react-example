export const config = {
  sous: {
    domain: 'http://127.0.0.1:3000',
    apiUrl: !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:8080/api/v1/' : 'https://recipe-mern-test.herokuapp.com/api/v1/',
  },
}