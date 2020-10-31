export const config = {
  sous: {
    domain: 'http://127.0.0.1:3000',
    apiUrl: process.env.NODE_ENV === 'production' ? 'https://sous-chef.herokuapp.com/api/v1/' : 'http://127.0.0.1:8080/api/v1/',
  },
}