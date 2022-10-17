import { StyleSheet, Text, View, Image } from 'react-native';
import { Profiles, Themes } from '../assets/Themes';
import AudioCard from './AudioCard';

export default function ContentCard() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={Profiles.mtl.image}
            />
            <Text style={styles.name}>{Profiles.mtl.name}</Text>
            <Text style={styles.caption}>{Profiles.mtl.caption}</Text>  
            <AudioCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        ...Themes.light.shadows,
    },
    name: {
        color: Themes.light.textSecondary,
        position: 'absolute',
        alignItems: 'center',
        fontSize: 32,
        padding: 10,
        fontFamily: 'Sydney',
    },
    caption: {
        color: Themes.light.textSecondary,
        position: 'absolute',
        fontSize: 18,
        fontFamily: 'Sydney',
        padding: 10,
        bottom: '40%',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '60%',
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
  });