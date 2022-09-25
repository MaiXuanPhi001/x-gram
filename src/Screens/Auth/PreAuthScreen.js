import { ChevronDownSvg, ChevronRightSvg } from '@/Assets/Svg'
import { AppButton, AppText, Container, Obx, Padding, Row } from '@/Components'
import { PageName } from '@/Config'
import { useAppTheme } from '@/Hooks'
import { navigate } from '@/Navigators'
import { appStore } from '@/Stores'
import { Colors, screenWidth, XStyleSheet } from '@/Theme'
import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, StatusBar, TouchableOpacity, View } from 'react-native'

const PreAuthScreen = () => {
  const { Images } = useAppTheme()
  const { t } = useTranslation()
  console.log(appStore.currentLanguage)
  return (
    <Container
      disableBottom
      disableTop
      statusBarProps={{
        barStyle: 'dark-content',
      }}
      style={styles.rootView}
    >
      <TouchableOpacity style={styles.languagePicker}>
        <Row>
          <Obx>
            {() =>
              appStore.currentLanguage && (
                <AppText color={Colors.black}>
                  {appStore.currentLanguage.name}
                </AppText>
              )
            }
          </Obx>
          <ChevronDownSvg />
        </Row>
      </TouchableOpacity>
      <Image source={Images.jumpMan} style={styles.bgImg} />
      {/* <BlurView blurType="light" style={styles.blurView}>
        <Image source={Images.blueBlur} style={styles.blueBlur} />
      </BlurView> */}
      <View style={styles.bottomView}>
        <Row justify="center">
          <AppButton
            onPress={() => navigate(PageName.LoginScreen)}
            textProps={{ fontWeight: 700 }}
            radius={99}
            text={t('auth.signIn')}
          />
          <Padding left={16} />
          <AppButton
            onPress={() => navigate(PageName.RegisterScreen)}
            textProps={{ fontWeight: 700 }}
            radius={99}
            backgroundColor={Colors.white}
            textColor={Colors.primary}
            text={t('auth.register')}
          />
        </Row>
        <TouchableOpacity>
          <Padding top={30} />
          <Row justify="center">
            <AppText
              fontSize={14}
              fontWeight={700}
              lineHeight={14}
              color={Colors.primary}
            >
              {t('skip')}
            </AppText>
            <ChevronRightSvg size={14} color={Colors.primary} />
          </Row>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

export default PreAuthScreen

const styles = XStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  bgImg: {
    ...XStyleSheet.absoluteFillObject,
    width: screenWidth,
    aspectRatio: 474 / 886,
    height: undefined,
    skipResponsive: true,
  },
  blurView: {
    ...XStyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  blueBlur: {
    bottom: 0,
    right: 0,
    zIndex: -2,
  },
  bottomView: {
    position: 'absolute',
    zIndex: 10,
    bottom: 86,
    left: 0,
    right: 0,
  },
  languagePicker: {
    position: 'absolute',
    zIndex: 99,
    right: 12,
    top: StatusBar.currentHeight,
  },
})
