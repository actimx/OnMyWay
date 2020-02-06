import { saveItem } from './storage'
import { ACCESS_TOKEN, USER_INFO, HOME } from '../consts'

const aut = {
  register: async (name, email, password, cpassword, navigation) => {
    try {
      const response = await fetch(
        `https://onmyway69.herokuapp.com/api/auth/register?name=${name}&email=${email}&password=${password}&c_password=${cpassword}`, {
          method: 'POST'
        })

      const responseJson = await response.json()
      if (responseJson.access_token) {
        alert('Se registro correctamente')
        const accessToken = responseJson.access_token

        const user = {
          email: email,
          name: name
        }

        const userResult = await saveItem(USER_INFO, JSON.stringify(user))
        const tokenResult = await saveItem(ACCESS_TOKEN, accessToken)

        if (userResult && tokenResult) {
          navigation.navigate(HOME)
        } else {
          alert('Error al realizar registro')
        }
      } else {
        alert(responseJson.errors)
        return false
      }
      return responseJson
    } catch (error) {
      console.error(error)
      return false
    }
  },
  registerWithoutMessages: async (name, email, password, cpassword, navigation) => {
    try {
      const response = await fetch(
        `https://onmyway69.herokuapp.com/api/auth/register?name=${name}&email=${email}&password=${password}&c_password=${cpassword}`, {
          method: 'POST'
        })

      const responseJson = await response.json()
      if (responseJson.access_token) {
        const accessToken = responseJson.access_token
        const user = {
          email: email,
          name: name
        }

        const userResult = await saveItem(USER_INFO, JSON.stringify(user))
        const tokenResult = await saveItem(ACCESS_TOKEN, accessToken)

        if (userResult && tokenResult) {
          navigation.navigate(HOME)
        } else {
          alert('Error al guardar usuario')
        }
      } else {
        if (responseJson.errors === 'The email has already been taken.') {
          navigation.navigate(HOME)
        }
        return false
      }
      return responseJson
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

export default aut
