import { saveItem } from "../utils/storage";
import { ACCESS_TOKEN, USER_INFO, HOME } from '../consts';

const aut = {
    register: async (name, email, password, c_password, navigation) => {
        try {
            let response = await fetch(
                `https://onmyway69.herokuapp.com/api/auth/register?name=${name}&email=${email}&password=${password}&c_password=${c_password}`, {
                method: 'POST'
            });

            let responseJson = await response.json();
            if (responseJson.access_token) {
                alert("Se registro correctamente");
                let access_token = responseJson.access_token;

                let user = {
                    email: email,
                    name: name
                }

                const userResult = await saveItem(USER_INFO, JSON.stringify(user));
                const tokenResult = await saveItem(ACCESS_TOKEN, access_token);

                if (userResult && tokenResult) {
                    navigation.navigate(HOME);
                } else {
                    alert('Error al realizar registro');
                }

            } else {
                alert(responseJson.errors);
                return false;
            }
            return responseJson;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
    registerWithoutMessages: async (name, email, password, c_password, navigation) => {
        try {
            let response = await fetch(
                `https://onmyway69.herokuapp.com/api/auth/register?name=${name}&email=${email}&password=${password}&c_password=${c_password}`, {
                method: 'POST'
            });

            let responseJson = await response.json();
            if (responseJson.access_token) {
                let access_token = responseJson.access_token;
                let user = {
                    email: email,
                    name: name
                }

                const userResult = await saveItem(USER_INFO, JSON.stringify(user));
                const tokenResult = await saveItem(ACCESS_TOKEN, access_token);

                if (userResult && tokenResult) {
                    navigation.navigate(HOME);
                } else {
                    alert('Error al guardar usuario');
                }

            } else {
                if (responseJson.errors == "The email has already been taken.") {
                    navigation.navigate(HOME);
                }
                return false;
            }
            return responseJson;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default aut;