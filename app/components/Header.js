import { StyleSheet, Text, View, Image, Platform, useWindowDimensions, PixelRatio } from 'react-native';
import { Themes, Icons } from '../../assets/Themes';

export default function Header() {
    const { height, width } = useWindowDimensions();
    return (
        <View style={{ ...styles.container, width: width * 1.1 }}>
            <Image
                style={{ ...styles.image, width: width * 0.1, height: height * 0.1 }}
                source={Icons.menu.light}
            />
            <Text style={{ ...styles.title, fontSize: PixelRatio.getFontScale() * height * 0.05 }}>ensom</Text>
            <Image
                style={{ ...styles.image, width: width * 0.1, height: height * 0.1 }}
                source={Icons.sun}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 41 : 54,
        alignItems: 'center',
        maxWidth: '90%',
        paddingTop: 50,
    },
    title: {
        flex: 4,
        color: Themes.light.text,
        fontSize: 32,
        textAlign: 'center',
        fontFamily: 'SydneyBold', 
    },  
    image: {
        height: 133.4,
        width: 75,
        resizeMode: 'contain',
    }
  });