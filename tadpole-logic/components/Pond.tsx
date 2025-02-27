import tw from "tailwind-react-native-classnames";
import '../globals.css'
import { View, Image, StyleSheet } from "react-native";


export default function Pond() {
    return (
        <View 
        style={tw`flex-1 justify-start`}
        >
           <Image
           source={require('../assets/images/pond.png')}
           style={tw`w-full h-full border-4`}
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