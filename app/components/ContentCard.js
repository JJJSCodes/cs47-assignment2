import { StyleSheet, Text, View, ImageBackground, useWindowDimensions, Platform, PixelRatio } from 'react-native';
import { Profiles, Themes } from '../../assets/Themes';

export default function ContentCard() {
    const { height, width } = useWindowDimensions(); 
    const titleSize = PixelRatio.getFontScale() * height * 0.045;
    const captionSize = PixelRatio.getFontScale() * height * 0.025;
    return (
        <View style={styles.container}>
            <ImageBackground
                imageStyle={{ borderRadius: 10 }}
                style={{ ...styles.image, resizeMode:'contain', height: Platform.isPad ? height * 0.5 : height * 0.4, width: Platform.isPad ? width * 0.65 : width * 0.9 }}
                source={Profiles.mtl.image}
            >
                <Text style={{ ...styles.name, fontSize: titleSize }}>{Profiles.mtl.name}</Text>
                <Text style={{ ...styles.caption, fontSize: captionSize }}>{Profiles.mtl.caption}</Text>  
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        position: 'absolute',
        color: Themes.light.textSecondary,
        alignItems: 'center',
        paddingLeft: 20,
        paddingTop: Platform.isPad ? 40: 10,
        fontFamily: 'Sydney',
    },
    caption: {
        position: 'absolute',
        color: Themes.light.textSecondary,
        fontFamily: 'Sydney',
        paddingLeft: 20,
        paddingBottom: Platform.isPad ? 40 : 10,
        bottom: 0,
    },
    image: {
        borderRadius: 10,
        ...Themes.light.shadows,
    }
  });