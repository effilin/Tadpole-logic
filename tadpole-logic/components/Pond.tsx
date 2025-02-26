import tw from "tailwind-react-native-classnames";
import { View, Image, StyleSheet } from "react-native";


export default function Pond() {
    return (
        <View 
        style={tw`p-2 h-full`}
        >
           <Image
           source={require('../assets/images/pond.png')}
           style={tw`w-full h-64`}
           resizeMode="contain"
           />
        </View>
    )

}

const styles = StyleSheet.create({
    pondBox: {  
        
    },
    pond: {
       
    }
})