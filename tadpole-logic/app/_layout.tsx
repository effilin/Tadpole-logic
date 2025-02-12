import tw from "tailwind-react-native-classnames";
import { Stack } from "expo-router";
import { Image, View, Text } from "react-native";



export default function Layout() {
    return(
        <View style={tw`flex flex-row justify-center border border-blue-400`}>
            <Stack
            screenOptions={{
                headerStyle:{ backgroundColor:  "hsla(114, 15%, 50%, 0.699)"},
                headerTitle: () => (
                    <View style={tw`flex-row items-center justify-center flex-1 h-fit border border-red-400`}>
                            <Text style={tw`text-white mr-4 text-lg`}>
                                Life Around the Pond
                            </Text>
                            <Image
                            source={require('../assets/images/tadpole.png')}
                            style={tw`ml-2 w-20 h-fit`}
                            resizeMode="contain"/>
                    </View>
                )}}>
                <Stack.Screen name="index" options={{title:"Life Around the Pond"}} />
                <Stack.Screen name="about" options={{title:"Keeping up with the Jones's"}} />
                
            </Stack>
        </View>
    )
}