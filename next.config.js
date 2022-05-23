/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/list',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/timeline',
]);

module.exports = withTM({
  swcMinify: false,
  trailingSlash: true,
  env: {
    // HOST
    HOST_API_KEY: 'https://minimal-assets-api-dev.vercel.app',
    // MAPBOX
    MAPBOX_API: '',
    // FIREBASE
    FIREBASE_API_KEY: 'AIzaSyDhmcTJmHgUNXDnpoVc47Fx2Mw7XYChLfA',
    FIREBASE_AUTH_DOMAIN: 'pen-x-app.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'pen-x-app',
    FIREBASE_STORAGE_BUCKET: 'pen-x-app.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '716423902758',
    FIREBASE_APPID: '1:716423902758:web:bacd6dcfe9e610a9ced8e7',
    FIREBASE_MEASUREMENT_ID: 'G-9CZGTNLZC6',
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0
    AUTH0_CLIENT_ID: '',
    AUTH0_DOMAIN: 'pen-x-dev.eu.auth0.com',
  },
});
