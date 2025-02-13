import tw from "tailwind-react-native-classnames";
import '../assets/stylesheets/global.css'
import { Stack } from "expo-router";
import { Image, View, Text, Button, StyleSheet } from "react-native";
import MyButton from "@/components/MyButtons";
import { Bars3Icon } from "@heroicons/react/24/outline";



export default function Layout() {
    return(
        <View style={tw`flex flex-row justify-center`}>
            <Stack
            screenOptions={{
                headerStyle:{ backgroundColor:  "hsla(114, 15%, 50%, 0.699)"},
                headerTitleAlign: 'center',
                headerTitle: () => (
                    <View className='hero' style={tw`flex-row items-center justify-between flex-1 border border-red-300 rounded-xl`}>
                        <MyButton
                        title = "Menu"
                        onPress ={() =>console.log("pressed")}
                        myBackgroundColor = "#255432"
                        textColor = '#FFF'
                        IconComponent = {Bars3Icon}
                        iconSize = {20}
                        />
                        <Text style={tw`text-white mr-4 text-lg`}>
                            Life Around the Pond
                        </Text>
                        <Image
                        source={require('../assets/images/tadpole.png')}
                        style={tw`ml-2 w-20`}
                        resizeMode="contain"/>
                        
                    </View>
                )}}>
                <Stack.Screen name="index" options={{title:"Life Around the Pond"}} />
                <Stack.Screen name="about" options={{title:"Keeping up with the Jones's"}} />
                
            </Stack>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        borderColor: "hsla(114, 15%, 50%, 0.699)"
    }

})