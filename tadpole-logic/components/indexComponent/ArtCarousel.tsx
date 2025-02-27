import { useWindowDimensions, View } from "react-native";

const { width, height} = useWindowDimensions();
const cardData = ['card1', 'card2', 'card3', 'card4'];


export default function ArtCarousel() {

return (
    <View
    id="carousel-component"
    dataSet={{ kind: "basic-layouts", name: "parallax" }}
    >
        <Carousel>

        </Carousel>

    </View>
)
}