import { usePathname, useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import MyButton from "./MyButtons";


const MyHeader = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { width } = useWindowDimensions();

    const titles: Record<string, string> ={
        '/': 'Life Around The Pond',
        '/dashboard': 'Dashboard',
        '/about': 'About',
    };
    
    return (
        <View style={[styles.header, width> 600 ? styles.headerWeb : styles.headerMobile]}>
            { pathname !== '/' && (
                <TouchableOpacity onPress ={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backText}>&larr</Text>
                </TouchableOpacity>
            )}
            <Text style ={styles.title}>{titles[pathname || 'Life Around the Pond '] }</Text>
            <MyButton
                        title = "Menu"
                        onPress ={() =>console.log("pressed")}
                        myBackgroundColor = "#255432"
                        textColor = '#FFF'
                        IconComponent = {Bars3Icon}
                        iconSize = {20}
                        />

        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        padding:16,
        backgroundColor: '#255432',
    },
    headerWeb: {
        justifyContent:'center',
    },
    headerMobile: {
        justifyContent:'space-between',
    },
    backButton: {
        paddingRight:10,
    },
    backText: {
        color: 'white',
        fontSize:18,
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        color: '#FFF'
    }

});

export default MyHeader;