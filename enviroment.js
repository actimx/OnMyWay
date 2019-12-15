import Constants from 'expo-constants';

const PRODUCTION = 'production';
const QA = 'qa';

const ENV = {
    dev: {
        iosClientId: '642684421563-mkgahgluj9dmi968aar8igmmo4f5eiq1.apps.googleusercontent.com',
        androidClientId: '642684421563-0grul2p1r0ndjrilmum1rhrg5hlqumtb.apps.googleusercontent.com',
        iosStandaloneAppClientId: '642684421563-mkgahgluj9dmi968aar8igmmo4f5eiq1.apps.googleusercontent.com',
        androidStandaloneAppClientId: '642684421563-0grul2p1r0ndjrilmum1rhrg5hlqumtb.apps.googleusercontent.com'
    },
    qa: {
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
        return ENV.dev;
    } else if (env === QA) {
        return ENV.qa;
    } else if (env === PRODUCTION) {
        return env.production
    }
}