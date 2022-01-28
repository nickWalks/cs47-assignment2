import { StyleSheet, Text, View, Image } from 'react-native';
import { Icons } from '../assets/Themes';

export default function NavBar() {
    return (
        <View style={styles.actionItemSection}>
            <View style={styles.actionIcon}>
                <Image style={styles.actionImage} resizeMode='contain' source={Icons.menu.dark} />
            </View>

            <View style={styles.actionIcon}>
                <Text style={styles.navItemText}>ensom</Text>
            </View>

            <View style={styles.actionIcon}>
                <Image style={styles.actionImage} resizeMode='contain' source={Icons.moon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    actionItemSection: {
        padding: 5,
        height: (Platform.OS === 'ios') ? 41 : 54,
        width: '100%',
        flex: 1,
        backgroundColor: Themes.dark.bg,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    navItemText: {
        fontSize: 32,
        fontFamily: 'Sydney-Bold',
        color: 'white',
    }
});
