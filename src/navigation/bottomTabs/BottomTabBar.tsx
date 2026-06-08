import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@/constants/vectorIcons';
import AppText from '@/components/basic/AppText';
import FONTS from '@/constants/fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LiquidGlassView, isLiquidGlassSupported } from '@callstack/liquid-glass';

const ACTIVE_COLOR = '#075E54';
const INACTIVE_COLOR = '#9CA3AF';

// ─── Extracted Tab Item (hooks are safe here) ────────────────────────
type TabItemProps = {
  route: BottomTabBarProps['state']['routes'][number];
  index: number;
  isFocused: boolean;
  options: BottomTabBarProps['descriptors'][string]['options'];
  navigation: BottomTabBarProps['navigation'];
};

const TabItem: React.FC<TabItemProps> = React.memo(
  ({ route, isFocused, options, navigation }) => {
    const label =
      options.tabBarLabel !== undefined
        ? (options.tabBarLabel as string)
        : options.title !== undefined
          ? options.title
          : route.name;

    const iconName =
      (options.tabBarIcon as unknown as string) || 'circle-outline';

    // Scale animation — safe to use hooks here (stable component)
    const scaleAnim = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

    useEffect(() => {
      Animated.spring(scaleAnim, {
        toValue: isFocused ? 1 : 0,
        useNativeDriver: true,
        tension: 80,
        friction: 10,
      }).start();
    }, [isFocused, scaleAnim]);

    const iconScale = scaleAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.15],
    });

    const onPress = useCallback(() => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    }, [isFocused, navigation, route]);

    const onLongPress = useCallback(() => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    }, [navigation, route.key]);

    return (
      <Pressable
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tab}
      >
        <Animated.View
          style={[
            styles.iconContainer,
            { transform: [{ scale: iconScale }] },
          ]}
        >
          <MaterialCommunityIcons
            name={iconName as any}
            size={24}
            color={isFocused ? ACTIVE_COLOR : INACTIVE_COLOR}
          />
        </Animated.View>
        <AppText
          style={[
            styles.label,
            {
              color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR,
              fontFamily: isFocused ? FONTS.semiBold : FONTS.medium,
            },
          ]}
          numberOfLines={1}
        >
          {label}
        </AppText>
      </Pressable>
    );
  },
);

// ─── Bottom Tab Bar ──────────────────────────────────────────────────
const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  const safeBottom = useMemo(() => ({
    bottom: Math.max(insets.bottom + 20, 8)
  }), [insets]);

  const isTransparentEffect = false;

  const glassEffectType = isTransparentEffect ? 'clear' : 'regular'

  const _glassEffect: any = isLiquidGlassSupported ? glassEffectType : 'none';

  return (
    <LiquidGlassView
      effect={_glassEffect}
      style={[styles.containerStyle, safeBottom]}
    >
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TabItem
            key={route.key}
            route={route}
            index={index}
            isFocused={isFocused}
            options={options}
            navigation={navigation}
          />
        );
      })}
    </LiquidGlassView>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 100,
    paddingVertical: 16
  },
  indicator: {
    position: 'absolute',
    top: 0,
    height: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    backgroundColor: ACTIVE_COLOR,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28,
  },
  label: {
    fontSize: 11,
    marginTop: 2,
    letterSpacing: 0.1,
  },
});
