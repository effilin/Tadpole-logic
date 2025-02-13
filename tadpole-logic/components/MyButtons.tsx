import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface MyButtonProps {
    title: string;
    onPress:() => void;
    myBackgroundColor: string;
    textColor: string;
    IconComponent?: React.ElementType;
    iconSize?: number;
}

const MyButton: React.FC<MyButtonProps> = ({
    title,
    onPress,
    myBackgroundColor,
    textColor = '#FFF',
    IconComponent,
    iconSize = 20,
}) => {
    return(
        <View>
           <TouchableOpacity 
           style={[styles.button, {backgroundColor: myBackgroundColor}]}
           onPress={onPress} 
           >
               {IconComponent && <IconComponent height={iconSize} width={iconSize} color={textColor}/>}
               <Text style={[styles.text,{color: textColor}]}>{title}</Text>
           </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        alignItems: 'center',  
        borderRadius: "10px",
        padding: 5,
        paddingRight: 8,
        paddingBottom: 8,
        marginRight: 10
    },
    text:{
        fontSize:20,
        paddingLeft:5
        
    }
})

export default MyButton;