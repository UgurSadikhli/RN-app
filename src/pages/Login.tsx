import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { useAuth } from "../context/AuthContext";

import Button from "../components/Button";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Title from "../components/Title";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
};

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authData = useAuth();

  const onPressHandler = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter valid email and password");
    } else {
      if (authData.logIn(email, password)) {
        navigation.navigate("Tabs");
      } else {
        alert("Incorrect email or password");
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.loginContainer}>
          <Title title={"Sign In"} />
          <InputField
            placeholder="Email"
            data={email}
            setData={setEmail}
          />
          <PasswordInput
            password={password}
            setPassword={setPassword}
          />
          <Button btnText="Login" onPress={onPressHandler} />
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.text}>Don't have an account?</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "#5DB075",
    textAlign: "center",
    fontSize: 16,
  },
  loginContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
