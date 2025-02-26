import Pond from "@/components/Pond"
import tw from "tailwind-react-native-classnames";

import { Link } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"
import Sky from "@/components/indexComponent/Sky";


export default function HomePage() {
    return (
        
        <Sky>
            <View style={tw`flex-1 flex-row`}>
                <View style={tw`w-1/3 flex-1 border`}>
                   <Pond />
                </View>
                <View style={tw`flex flex-col justify-center w-2/3 border border-indigo-500`}>
                    <Text style={tw`border border-indigo-500`}>Hello World</Text>
                    <Link 
                    href={"/about"}
                    style={tw`border border-indigo-500`}>
                       <h1>About</h1>
                    </Link>
                </View>
            </View>
        </Sky>
    
    )
}

const styles = StyleSheet.create({
    pond:{
        borderColor: "hsla(114, 50.50%, 80.20%, 0.56)",
        borderRadius: 5,
    }

})