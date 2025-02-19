import tw from "tailwind-react-native-classnames";
import { Stack } from "expo-router";
import { Image, View, Text, Button, StyleSheet } from "react-native";
import MyButton from "@/components/MyButtons";
import { Bars3Icon } from "@heroicons/react/24/outline";



export default function Layout() {
    return(
        <View >
            <Stack
            screenOptions={{
                headerStyle:{
                    backgroundColor: "hsla(114, 12.80%, 55.50%, 0.76)",
                },
                headerTitleAlign: 'center',
                headerTitle: () => (
                    <View style={tw`flex-row flex-1 items-center justify-between px-4 border border-red-300 `}>
                       
                        <MyButton
                        title = "Menu"
                        onPress ={() =>console.log("pressed")}
                        myBackgroundColor = "#255432"
                        textColor = '#FFF'
                        IconComponent = {Bars3Icon}
                        iconSize = {20}
                        />
                        
                        <Text 
                        style={tw`text-white text-lg flex-1 text-center`}>
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
/*
const styles = StyleSheet.create({
    header:{
        borderColor: "hsla(114, 50.50%, 80.20%, 0.49)",
        width: 99%,
        borderRadius: 5px,

    }

})
    */