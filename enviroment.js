/* global __DEV__ */

import Constants from 'expo-constants'

const PRODUCTION = 'production'
const STAGING = 'staging'

const ENV = {
  dev: {
    iosClientId: '788955683394-v1fgh1hvhn1r4deln0tba3equig2qjb3.apps.googleusercontent.com',
    androidClientId: '788955683394-if2ou64poelcj92bq6kck0g5kiribrg8.apps.googleusercontent.com',
    iosStandaloneAppClientId: '788955683394-2fg3s79tdpppgs4cgj22pgii9t0mm0ib.apps.googleusercontent.com',
    androidStandaloneAppClientId: '788955683394-dv5r31bqojjhtugq8kgofqjsrorug2t5.apps.googleusercontent.com'
  },
  staging: {
    iosClientId: null,
    androidClientId: null,
    iosStandaloneAppClientId: null,
    androidStandaloneAppClientId: null
  },
  production: {
    iosClientId: null,
    androidClientId: null,
    iosStandaloneAppClientId: null,
    androidStandaloneAppClientId: null
  }
}

export default (env = Constants.manifest.releaseChannel) => {
  if (__DEV__) {
    return ENV.dev
  } else if (env === STAGING) {
    return ENV.staging
  } else if (env === PRODUCTION) {
    return ENV.production
  }
}
