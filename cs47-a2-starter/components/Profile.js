import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Themes, Icons, Profiles } from '../assets/Themes';

export default function Profile() {
    return (
        <View style={styles.profileSection}>
            <ImageBackground resizeMode="cover" source={Profiles.mtl.image} style={[styles.profilePic, Themes.dark.shadows]}
                imageStyle={[styles.picContainer, Themes.dark.shadows]}>
                <Text style={styles.name}>MTL</Text>
                <Text style={styles.distance}>2 miles away</Text>
            </ImageBackground>

            <View style={[styles.hotTakeSection, Themes.dark.shadows]}>
                <Text style={styles.hottestTakeTitle}>My hottest take</Text>
                <View style={styles.takesContainer}>
                    <Image source={Icons.player.dark} resizeMode="contain" style={styles.playButtonStyle} />
                    <Image source={Icons.audioWave.dark} resizeMode="contain" style={styles.audioWaveStyle} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileSection: {
        width: '100%',
        display: 'flex',
        backgroundColor: Themes.dark.bg,
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    profilePic: {
        color: 'white',
        width: '80%',
        overflow: 'hidden',
        height: '60%',
        position: 'relative'
    },
    picContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    hotTakeSection: {
        width: '80%',
        height: '20%',
        padding: 15,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: Themes.dark.bgSecondary,
        marginTop: 30
    },
    hottestTakeTitle: {
        color: Themes.dark.text,
        fontSize: 24,
        fontFamily: 'Sydney',
    },
    playButtonStyle: {
        flex: 1,
        marginRight: 10
    },
    audioWaveStyle: {
        flex: 5,
    },
    takesContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -55
    },
    name: {
        fontFamily: 'Sydney',
        fontSize: 30,
        position: 'absolute',
        color: 'white',
        top: 5,
        left: 5

    },
    distance: {
        fontFamily: 'Sydney',
        fontSize: 14,
        position: 'absolute',
        color: 'white',
        bottom: 5,
        left: 5

    }
});
