import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

export default function HomePage() {
    return (
    <View>
        <Text>Hello World</Text>
        <Link href={"/about"}>
           <Button title="About Page"/>
        </Link>
     </View>
    )
}