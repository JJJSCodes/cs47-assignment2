import { StyleSheet, View, Image, Text, PixelRatio, Platform, useWindowDimensions } from 'react-native';
import { Themes, Icons } from '../../assets/Themes';

export default function AudioCard() {
    const { height, width } = useWindowDimensions(); 
    const phoneWidth = width * 0.1
    const phoneHeight = height * 0.1
    return (
        <View style={{ ...styles.container, height: Platform.isPad ? height * 0.15 : height * 0.15,
            width: Platform.isPad ? width * 0.65 : width * 0.9 }}>
            <Text style={{ ...styles.text, fontSize: PixelRatio.getFontScale() * height * 0.035 }}>My hottest take</Text>
            <View style={{ ...styles.row, width: width * 0.9, height: height * 0.075 }}>
                <Image style={{ ...styles.imageLeft, width: Platform.isPad ? width * 0.1 : width * 0.15, height : Platform.isPad ? height * 0.1 : height * 0.15  }} source={Icons.player.light} />
                <Image style={{ ...styles.imageRight, width: Platform.isPad ? width * 0.5 : width * 0.65, height : Platform.isPad ? height * 0.1 : height * 0.15}} source={Icons.audioWave.light} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.light.bg,
        borderRadius: 25,
        marginTop: 20,
        flexDirection: 'column',
        alignContent: 'flex-start',
        ...Themes.light.shadows,
    },
    text: {
        marginHorizontal: 25,   
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Sydney',
    },
    row: {
        paddingHorizontal: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageLeft: {
        resizeMode: 'contain',
    },
    imageRight: {
        marginLeft: 5,
        resizeMode: 'contain',
    },
  });