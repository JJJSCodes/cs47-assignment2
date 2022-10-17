import { StyleSheet, View, Image, Text } from 'react-native';
import { Themes, Icons, Profiles } from '../assets/Themes';

export default function AudioCard() {
    return (
        <>
            <View style={styles.container}>
                <Text adjustsFontSizeToFit={true} style={styles.text}>My hottest take</Text>
                <View style={styles.row}>
                    <Image style={styles.imageLeft} source={Icons.player.light} />
                    <Image style={styles.imageRight} source={Icons.audioWave.light} />
                 </View>
            </View>
            <View style={styles.filler}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: 20,
        backgroundColor: Themes.light.bg,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flexDirection: 'column',
        alignContent: 'center',
        ...Themes.light.shadows,
    },
    text: {
        // flex: 1,
        marginHorizontal: 25,   
        marginTop: 10,
        fontSize: 25,
        marginBottom: 10,
        fontFamily: 'Sydney',
    },
    row: {
        flex: 2,
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageLeft: {
        flex: 1,
        maxHeight: '100%',
        resizeMode: 'contain',
    },
    imageRight: {
        flex: 5,
        maxHeight: '100%',
        marginLeft: 5,
        resizeMode: 'contain',
    },
    filler: {
        flex: 2,
    }
  });