import { StyleSheet, View } from 'react-native';
import ContentCard from './ContentCard';
import AudioCard from './AudioCard';

export default function Content() {
    return (
        <View style={styles.container}>
            <ContentCard />
            <AudioCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'column',
        backgroundColor: '#ede9dd',
        alignItems: 'center',
    },
  });