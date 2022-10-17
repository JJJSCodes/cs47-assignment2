import { StyleSheet, Text, Image, View, StatusBar } from 'react-native';
import { Icons, Themes } from '../assets/Themes';

export default function BottomBar() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
            <View style={styles.section}>
                <Image
                    style={styles.image}
                    source={Icons.discover.light}
                />  
                <Text style={styles.text}>Discover</Text>
            </View>
            <View style={styles.section}>
                <Image
                    style={styles.image}
                    source={Icons.heart.light}
                />
                <Text style={styles.text}>Matches</Text>
            </View>
            <View style={styles.section}>
                <Image
                    style={styles.image}
                    source={Icons.messages.light}
                />
                <Text style={styles.text}>DMs</Text>
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
        width: '100%',
        backgroundColor: Themes.light.navigation,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: '80%',
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image: {
        width: 40,
        height: 40,
        overflow: 'visible',
        marginBottom: 5,
    },
    text: {
        color: Themes.light.textSecondary,
        fontSize: 20,
        fontFamily: 'Sydney',
    }
  });