import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from '@d11/react-native-fast-image'
import css from '@/styles/GlobalStyle'
import AppText from '../basic/AppText'
import { MaterialCommunityIcons } from '@/constants/vectorIcons'

const HeaderDoctor = ({userInfo}:any) => {
    return (
        <View style={[css.rowBetween, css.aic, css.px10]} >
            <View style={[css.row]} >
                <FastImage
                    source={{ uri: userInfo?.image }}
                    style={styles.userImageStyle}
                    resizeMode={FastImage.resizeMode.cover}
                />
                <View style={[css.ml10]}>
                    <AppText style={[css.fs18, css.fontBold]}>{userInfo?.name}</AppText>
                    <AppText style={[css.fs15, css.fontMedium]}>{userInfo?.specialization}</AppText>
                </View>
            </View>
            <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        </View>
    )
}

export default HeaderDoctor

const styles = StyleSheet.create({
    userImageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

})