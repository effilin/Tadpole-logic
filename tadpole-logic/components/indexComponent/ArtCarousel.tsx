import { useWindowDimensions, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import Card from "../Card";
import tw from "tailwind-react-native-classnames";
import '../../globals.css'
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const { width, height} = useWindowDimensions();
const cardData = ['card1', 'card2', 'card3', 'card4'];


export default function ArtCarousel() {

    const progress = useSharedValue<number>(0);

    const fadeCarousel = useAnimatedStyle(() => {
        return {
        opacity: interpolate(progress.value, [0,1], [0.5,1])
    }});

return (
    <View
    id="carousel-component"
    >
        <Carousel
        autoPlayInterval={2000}
        data={cardData}
        height={height / 2 }
        loop={true}
        pagingEnabled={true}
		snapEnabled={true}
        width={width /4}
        style={{}}
        mode="parallax"
		modeConfig={{
			parallaxScrollingScale: 0.9,
			parallaxScrollingOffset: 50,
		}}
        onProgressChange={(offset) =>{
            progress.value = offset
        }}
		renderItem={({item}) =>
            <Animated.View style={[tw`border-2 border-indigo-200 border-x-indigo-500 rounded-sm`, fadeCarousel]}>
                <h2>{item}</h2>
            </Animated.View>
        }
        />

        

    </View>
)
}