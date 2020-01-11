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

Keystore credentials
  keystore password: 047f1282a85648bc9901a54c60aa7ed6
  Key alias: QGpvbmF0YW5mbG92YS9Pbi1teS13YXktUHJvamVjdA==
  Key password: 5f86ffbe63014ea58bfac4f3e3d5547a

  Crear un proyecto de Google Cloud Platform > On My Way
  * ir a > Credenciales
    y crear credenciales > ID de cliente de OAuth [Solicita el consentimiento del usuario para que tu app pueda acceder a sus datos]
    
keytool -list -v -alias QGpvbmF0YW5mbG92YS9Pbi1teS13YXktUHJvamVjdA== -keystore ./On-my-way-Project.jks
Introduzca la contraseña del almacén de claves:  keystore password: 047f1282a85648bc9901a54c60aa7ed6

-- Nombre de Alias: QGpvbmF0YW5mbG92YS9Pbi1teS13YXktUHJvamVjdA==
Fecha de Creación: 29-dic-2019
Tipo de Entrada: PrivateKeyEntry
Longitud de la Cadena de Certificado: 1
Certificado[1]:
Propietario: CN=com.alexcompany.udemyapp, OU=, O=, L=, ST=, C=US
Emisor: CN=com.alexcompany.udemyapp, OU=, O=, L=, ST=, C=US
Número de serie: 1ae59be1
Válido desde: Sun Dec 29 17:56:06 CST 2019 hasta: Thu May 16 18:56:06 CDT 2047
Huellas digitales del certificado:
         MD5: 11:FC:77:7A:B5:CC:4E:78:89:69:D3:82:A0:42:58:66
         SHA1: 8B:53:58:7E:2C:A5:0F:85:A5:1D:56:BE:54:1D:3E:8F:25:0D:61:48
         SHA256: EA:60:C1:8E:CD:CA:00:B5:3B:C1:3E:8C:36:1D:4B:35:7D:77:2D:66:FD:A9:94:27:3D:47:CA:A6:AE:A0:75:55
Nombre del algoritmo de firma: SHA256withRSA
Algoritmo de clave pública de asunto: Clave RSA de 2048 bits
Versión: 3

Extensiones:

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: B5 7B 7F E1 98 F3 06 AA   F9 F2 85 37 C0 E9 94 FE  ...........7....
0010: 37 F2 47 64                                        7.Gd
]
]


Warning:
El almacén de claves JKS utiliza un formato propietario. Se recomienda migrar a PKCS12, que es un formato estándar del sector que utiliza "keytool -importkeystore -srckeystore ./On-my-way-Project.jks -destkeystore ./On-my-way-Project.jks -deststoretype pkcs12
- - - - - -  -- - - - - - - - - - - - - 

ID cliente android:
  788955683394-if2ou64poelcj92bq6kck0g5kiribrg8.apps.googleusercontent.com
  
ID cliente ios:
  788955683394-v1fgh1hvhn1r4deln0tba3equig2qjb3.apps.googleusercontent.com

# Creando App's en Firebase

#  Instalando expo google app auth
-> expo install expo-google-app-auth


#  Instalando Facebook
-> expo install expo-facebook

