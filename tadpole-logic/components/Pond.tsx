import tw from "tailwind-react-native-classnames";
import { View, Image, StyleSheet } from "react-native";


export default function Pond() {
    return (
        <View style={styles.pondBox}>

           <Image
           source={require('../assets/images/pond.png')}
           style={[tw`opacity-75`]}
           resizeMode="contain"/>

        </View>
    )

}

const styles = StyleSheet.create({
    pondBox: {
        height: 100,
        width: 100,
        overflow: 'scroll'

    }
})