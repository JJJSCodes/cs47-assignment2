import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ContentCard from './ContentCard';
import AudioCard from './AudioCard';

export default function Content() {
    return (
        <View style={styles.container}>
            <ContentCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 7.5,
        paddingHorizontal: 20,
        maxWidth: '90%',
        flexDirection: 'column',
        backgroundColor: '#ede9dd',
        alignItems: 'center',
    },
  });