import Pond from "@/components/Pond"
import tw from "tailwind-react-native-classnames";
import { Link } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"


export default function HomePage() {
    return (
    <View style={{maxWidth: 100,}}>
        <Pond />
        <View style={tw`flex max-w-1/2`}>
            <Text>Hello World</Text>
            <Link href={"/about"}>
               <Button title="About Page"/>
            </Link>
        </View>
     </View>
    )
}

const styles = StyleSheet.create({
    pond:{
        borderColor: "hsla(114, 50.50%, 80.20%, 0.49)",
        width: 99,
        borderRadius: 5,
    }

})