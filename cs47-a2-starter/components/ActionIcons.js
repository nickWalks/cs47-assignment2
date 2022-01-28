import { StyleSheet, Text, View, Image } from 'react-native';
import { Icons } from '../assets/Themes';

export default function ActionIcons() {
    return (
        <View style={styles.actionItemSection}>
            <View style={styles.actionIcon}>
                <Image style={styles.actionImage} resizeMode='contain' source={Icons.discover.dark} />
                <Text style={styles.actionIconText}>Discover</Text>
            </View>

            <View style={styles.actionIcon}>
                <Image style={styles.actionImage} resizeMode='contain' source={Icons.heart.dark} />
                <Text style={styles.actionIconText}>Matches</Text>
            </View>

            <View style={styles.actionIcon}>
                <Image style={styles.actionImage} resizeMode='contain' source={Icons.messages.dark} />
                <Text style={styles.actionIconText}>DMs</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actionItemSection: {
        width: '100%',
        height: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    actionIcon: {
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionImage: {
        width: '100%',
        height: '100%'
    },
    actionIconText: {
        fontSize: 18,
        fontFamily: 'Sydney',
        marginTop: 5
    }
});
