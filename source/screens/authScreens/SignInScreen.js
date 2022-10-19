import React, { useState, useRef } from "react";

import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import { colors, parameters } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

import Header from "../../components/header.js";

export default function SignInScreen() {
  const [textInput2Focussed, setTextInput2Focussed] = useState(false);

  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" />

      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={styles.title}>Sign-In</Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}> Please enter the email and password</Text>
        <Text style={styles.text1}> Register with your account</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <TextInput
          style={styles.TextInput1}
          placeholder="Email"
          ref={textInput1}
        />

        <View style={styles.TextInput2}>
          <Animatable.View>
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{}}
            />
          </Animatable.View>

          <TextInput
            style={{ width: "80%" }}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />

          <Animatable.View
            animation={textInput2Focussed ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Button
          title="SIGN-IN"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          {" "}Forgot password ?{" "}
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <SocialIcon
          title="Sign in with Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <SocialIcon
          title="Sign in with Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ alignItems: "start", marginTop: 25, marginLeft: 20 }}>
        <Text style={styles.text1}> New on XpressFood ? </Text>
      </View>

      <View
        style={{ alignItems: "flex-end", marginHorizontal: 20, marginTop: 20 }}
      >
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: colors.buttons,
    fontSize: 22,
    fontWeight: "bold"
  },
  text1: {
    color: colors.grey3,
    fontSize: 16
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    height: 40
  },
  TextInput2: {
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    height: 40
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 40,
    paddingHorizontal: 20
  },

  createButtonTitle: {
    alignContent: "center",
    justifyContent: "center",
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -3
  }
});
