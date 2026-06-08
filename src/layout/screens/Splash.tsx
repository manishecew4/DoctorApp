import { ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import FastImage from '@d11/react-native-fast-image'
import { IMAGES } from '@/constants/images'
import AppText from '@/components/basic/AppText'

const Splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={IMAGES.splash}
                style={styles.imageStyle}
                resizeMode="cover"
                blurRadius={30}
            >
                <FastImage
                    source={IMAGES.splash}
                    style={styles.imageStyle}
                    resizeMode="contain"
                >
                    <View style={styles.headingContainerStyle}>

                        <AppText style={styles.headingStyle} >Doctors</AppText>
                        <AppText style={styles.headingStyle} >You can Trust.</AppText>
                    </View>
                </FastImage>
            </ImageBackground>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    headingContainerStyle: {
        position: 'absolute',
        bottom: 100,
        paddingLeft: 20
    },
    headingStyle: {
        fontSize: 44,
        color: '#fff',
        fontWeight: 'bold'
    }
})