import { AsyncStorage } from "react-native";

class DevicesStorage {
    static get(key) {
        return AsyncStorage.getItem(key).then(res => {
            const jsonValus = JSON.parse(res);
            console.info(jsonValus, ' 2iam')
            return jsonValus
        }).catch(err => {
            console.info(err, 444);
        })
    }

    static set(key, value) {
        console.info(key, value, 666, JSON.stringify(value));
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }
}

export default DevicesStorage;