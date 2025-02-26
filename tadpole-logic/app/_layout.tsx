
import { Stack } from "expo-router";
import { View } from "react-native";
import MyHeader from "@/components/MyHeader";



export default function Layout() {
    return(
        <View >
            <Stack
            screenOptions={{
                header: () => <MyHeader />,
               }}>
                <Stack.Screen name="index" options={{title:"Life Around the Pond"}} />
                <Stack.Screen name="about" options={{title:"Keeping up with the Jones's"}} />
                
            </Stack>
        </View>
    )
}
