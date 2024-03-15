import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Categories from "../pages/Categories";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoriesNavigation = createNativeStackNavigator();

function CategoriesNav() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CategoriesNavigation.Navigator>
        <CategoriesNavigation.Screen
          name="Categories"
          component={Categories}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <CategoriesNavigation.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <CategoriesNavigation.Screen
          name="Product"
          component={Product}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
        />
      </CategoriesNavigation.Navigator>
    </SafeAreaView>
  );
}

export default CategoriesNav;
