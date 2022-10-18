import { StyleSheet, Text, Image, View, PixelRatio, useWindowDimensions } from 'react-native';
import { Icons, Themes } from '../../assets/Themes';

export default function BottomBar() {
    const { width, height } = useWindowDimensions();
    const fontSize = PixelRatio.getFontScale() * height * 0.02
    const imgHeight = height * 0.05
    const imgWidth = width * 0.1
    return (
        <View style={{ ...styles.container, width: width * 1.1 }}>
            <View style={styles.wrapper}>
            <View style={styles.section}>
                <Image
                    style={{ ...styles.image, height: imgHeight, width: imgWidth }}    
                    source={Icons.discover.light}
                />  
                    <Text style={{ ...styles.text, fontSize }}>Discover</Text>
            </View>
            <View style={styles.section}>
                <Image
                    style={{ ...styles.image, height: imgHeight, width: imgWidth }}
                    source={Icons.heart.light}
                />
                <Text style={{ ...styles.text, fontSize }}>Matches</Text>
            </View>
            <View style={styles.section}>
                <Image
                    style={{ ...styles.image, height: imgHeight, width: imgWidth }}
                    source={Icons.messages.light}
                />
                <Text style={{ ...styles.text, fontSize }}>DMs</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.25,
        flexDirection: 'row',
        height: '10%',
        backgroundColor: Themes.light.navigation,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: '70%',
        maxHeight: '30%',
        justifyContent: 'space-between',
    },
    section: {
        flex: 2,
        maxHeight: '50%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        resizeMode: 'contain',
    },
    text: {
        color: Themes.light.textSecondary,
        fontFamily: 'Sydney',
    }
  });