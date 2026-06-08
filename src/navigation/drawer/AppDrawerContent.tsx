import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import AppText from '../../components/basic/AppText';
import { Colors } from '@/constants/colors';
import FONTS from '@/constants/fonts';
import { MaterialCommunityIcons } from '@/constants/vectorIcons';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/useRedux';
import { logout } from '@/store/slices/authSlice';
import { useAppInsets } from '@/utils/insets';

export type DrawerMenuItem = {
  label: string;
  routeName: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  params?: Record<string, unknown>;
};

type AppDrawerContentProps = DrawerContentComponentProps & {
  menuItems: DrawerMenuItem[];
};

const AppDrawerContent = ({
  state,
  navigation,
  menuItems,
}: AppDrawerContentProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(store => store.auth.user);
  const insets = useAppInsets();

  const handleLogout = React.useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 12 },
        ]}
      >
        <View style={styles.profileWrap}>
          <View style={styles.avatar}>
            <AppText style={styles.avatarText}>
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </AppText>
          </View>
          <AppText style={styles.userName}>{user?.name || 'User'}</AppText>
          <AppText style={styles.userRole}>{user?.role || ''}</AppText>
        </View>

        <View style={styles.menuWrap}>
          {menuItems.map(item => {
            const isActive = state.routeNames[state.index] === item.routeName;

            return (
              <Pressable
                key={item.routeName}
                style={[styles.menuItem, isActive && styles.activeMenuItem]}
                onPress={() => navigation.navigate(item.routeName, item.params)}
              >
                <MaterialCommunityIcons
                  name={item.icon}
                  size={22}
                  color={isActive ? '#075E54' : '#5F6368'}
                />
                <AppText
                  style={[
                    styles.menuText,
                    isActive ? styles.activeMenuText : {},
                  ]}
                >
                  {item.label}
                </AppText>
              </Pressable>
            );
          })}
        </View>
      </DrawerContentScrollView>

      <Pressable
        style={[styles.logoutButton, { marginBottom: insets.bottom + 12 }]}
        onPress={handleLogout}
      >
        <MaterialCommunityIcons name="logout" size={22} color={Colors.error} />
        <AppText style={styles.logoutText}>Logout</AppText>
      </Pressable>
    </View>
  );
};

export default AppDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingTop: 20,
  },
  profileWrap: {
    paddingHorizontal: 20,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF0F3',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#E7FAF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 24,
    fontFamily: FONTS.bold,
    color: '#075E54',
  },
  userName: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: Colors.black,
  },
  userRole: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: '#5F6368',
    textTransform: 'capitalize',
  },
  menuWrap: {
    paddingTop: 14,
    paddingHorizontal: 12,
  },
  menuItem: {
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  activeMenuItem: {
    backgroundColor: '#E7FAF6',
  },
  menuText: {
    marginLeft: 12,
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: '#5F6368',
  },
  activeMenuText: {
    color: '#075E54',
    fontFamily: FONTS.bold,
  },
  logoutButton: {
    height: 54,
    marginHorizontal: 12,
    marginBottom: 18,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutText: {
    marginLeft: 12,
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: Colors.error,
  },
});
