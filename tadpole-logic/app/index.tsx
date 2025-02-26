import Pond from "@/components/Pond"
import tw from "tailwind-react-native-classnames";

import { Link } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"
import Sky from "@/components/indexComponent/Sky";


export default function HomePage() {
    return (
        <Sky>
            <View style={tw`grid grid-flow-col grid-rows-3 gap-4 `}>
                <View style={tw`row-span-3 border-4 border-indigo-500`}>
                   <Pond />
                </View>
                <Text style={tw`col-span-2`}>Hello World</Text>
                <Link 
                href={"/about"}
                style={tw`col-span-2 row-span-2`}>
                   <h1>About</h1>
                </Link>
            </View>
        </Sky>
    
    )
}

const styles = StyleSheet.create({
    pond:{
        borderColor: "hsla(114, 50.50%, 80.20%, 0.56)",
        width: 99,
        borderRadius: 5,
    }

})