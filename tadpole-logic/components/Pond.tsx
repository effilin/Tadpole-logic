import tw from "tailwind-react-native-classnames";
import { View, Image } from "react-native";
import { Screen } from "expo-router/build/views/Screen";


const pond = {uri:'../'}

export default function Pond() {
    return (
        <View style={tw`flex`}>

           <Image
           source={require('../assets/images/pond.png')}
           style={tw`shrink`}
           resizeMode="contain"/>

        </View>
    )

}