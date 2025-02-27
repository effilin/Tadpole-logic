import { View } from "react-native"
import tw from "tailwind-react-native-classnames";
import '../globals.css';

type CardProps = {
    title:string;
}

export default function Card({title}: CardProps) {

    return(
        <View style={tw`border-2 border-indigo-200 border-x-indigo-500 rounded-sm`}>
            <h2>{title}</h2>
        </View>

    )
}