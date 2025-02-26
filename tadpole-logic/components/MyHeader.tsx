import { usePathname, useRouter } from "expo-router"
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { View, Image } from "react-native";
import MyButton from "./MyButtons";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { red } from "react-native-reanimated/lib/typescript/Colors";



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
            <View style={styles.menu}>
                <MyButton
                title = "Menu"
                onPress ={() =>console.log("pressed")}
                myBackgroundColor = "#255432"
                textColor = '#FFF'
                IconComponent = {Bars3Icon}
                iconSize = {20}
                />

            </View>
            <Text style ={styles.title}>{titles[pathname || 'Life Around the Pond '] }</Text>
            { pathname !== '/' && (
                <TouchableOpacity onPress ={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backText}>&larr</Text>
                </TouchableOpacity>
            )}
             <Image
             source={require('../assets/images/tadpole.png')}
             alt="frog on a reed"
             style={{height: 90, width: 120}}
             resizeMode="cover"
             />

        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '"hsla(114, 12.80%, 55.50%, 0.89)"',
    },
    headerWeb: {
        justifyContent:'space-between',
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
        fontSize:50,
        fontWeight:'bold',
        color: '#FFF'
    },
    menu: {
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        borderColor: 'red'
    }

});

export default MyHeader;