import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CardChange from "../pages/CardChange";
import Profile from "../pages/Profile";
import AddressChange from "../pages/AddressChange";

const ProfileNavigation = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileNavigation.Navigator>
        <ProfileNavigation.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
          name="Profile"
          component={Profile}
        />
        <ProfileNavigation.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
          name="CardChange"
          component={CardChange}
        />
        <ProfileNavigation.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
          name="AddressChange"
          component={AddressChange}
        />
      </ProfileNavigation.Navigator>
    </SafeAreaView>
  );
};

export default ProfileNav;
