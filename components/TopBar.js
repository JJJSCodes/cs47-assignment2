import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { Themes, Icons } from '../assets/Themes';

export default function TopBar() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={Icons.menu.light}
            />
            <Text style={styles.title}>ensom</Text>
            <Image
                style={styles.image}
                source={Icons.sun}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 15,
        height: Platform.OS === 'ios' ? 41 : 54,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 4,
        color: Themes.light.text,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '800',
        fontFamily: 'Sydney-Bold', 
    },  
    image: {
        flex: 1,
        height: 40,
        width: 40,
        resizeMode: 'contain',
    }
  });