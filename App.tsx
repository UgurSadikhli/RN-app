import BodyNavigation from "./src/navigation/Index";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/AuthContext";
import UserContextProvider from "./src/context/UserContext";
import CartContextProvider from "./src/context/CartContext";

export default function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <NavigationContainer>
            <BodyNavigation />
          </NavigationContainer>
        </CartContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}
