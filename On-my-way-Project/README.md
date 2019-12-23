# CREACION DEL PROYECTO 20/12/2019
expo init nombre-de-proyecto

# CREACION DE LAS ESTRUCTURAS DE CARPETAS
# UBICACIÓN crear carpeta -> src...
src -> components
src -> consts
src -> redux
src -> routes
src -> styles
src -> utils
src -> views
src -> index.js : [Extraer-codigo-de-src]

# CREACIÓN DE VISTAS PRINCIPALES
views   -> LoadingPage
        -> index.js, style.js
views   -> Login
        -> index.js, style.js
views   -> Home
        -> index.js, style.js
views   -> Profile
        -> index.js, style.js
views   -> Results
        -> index.js, style.js

# React Navigation
CMD:ruta -> expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens

# Métodos para aplicar un ruteo
# createStackNavigation
npm add react-navigation-stack

# 
src -> routes -> index.js [Rutas-del-proyecto]
# Optimizar el codigo router
src -> consts -> index.js

# Conectando rutas

# REDUX
src -> redux

npm i -S redux react-redux redux-saga

# Implementando estructura redux en nuestro proyecto

src -> redux -> actions
src -> redux -> api
src -> redux -> reducers
src -> redux -> sagas
src -> redux -> store
                -> index.js
 
# Configurando store en proyecto
src -> redux -> store
                -> index.js

# Creando reducers en el proyecto
src -> redux -> reducers
                -> index.js

# Creando sagas en el proyecto
src -> redux -> sagas
                -> index.js

# Conectando redux al proyecto

# Intalando Native Base
npm i -S native-base

# Agregando componentes esenciales a Login, expo-constants
proporciona información del sistema que permanece constante durante la vida útil de la instalación de su aplicación
expo install expo-constants

# Expo Google App auth
## Generando keystore en android
- Documentación: https://docs.expo.io/versions/latest/distribution/building-standalone-apps/
1._ Configurar json de la app
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname"
    },
    "android": {
      "package": "com.yourcompany.yourappname"
    }
2._ RUN
    expo build:android  -> expo genere el keystore
3._Genera una URL
    https://expo.io/builds/302ec33f-4759-49f2-80d1-b87de498a17e
4._ RUN
    expo fetch:android:keystore  -> Provee info de la keystore