import React, { useState, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image
} from "react-native";
import { colors, parameters } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

import Swiper from "react-native-swiper";

export default function SiginInWelcomeScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 50
        }}
      >
        <Text
          style={{
            fontSize: 26,
            color: colors.background2,
            fontWeight: "bold"
          }}
        >
          DISCOVER RESTAURANTS
        </Text>
        <Text
          style={{
            fontSize: 26,
            color: colors.background2,
            fontWeight: "bold"
          }}
        >
          IN YOUR AREA
        </Text>
      </View>

      <View style={{ flex: 3, justifyContent: "center" }} />
      <Swiper>
        <View style={styles.slide1}>
          <Image
            source= {{
              uri: "https://media.istockphoto.com/photos/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-and-picture-id1295633127?k=20&m=1295633127&s=612x612&w=0&h=GABMJI8aUddYYDR9C-Ddio05g2B0Sj_WfVcgR6Men20="
            }}
            style = {{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={styles.slide2}>
          <Image
            source= {{
              uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
            }}
            style = {{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={styles.slide3}>
          <Image
            source= {{
              uri: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"
            }}
            style = {{ height: "100%", width: "100%" }}
          />
        </View>

        <View style={styles.slide3}>
          <Image
            source= {{
              uri: "https://thumbs.dreamstime.com/b/healthy-food-selection-healthy-food-selection-fruits-vegetables-seeds-superfood-cereals-gray-background-121936825.jpg"
            }}
            style = {{ height: "100%", width: "100%" }}
          />
        </View>

      </Swiper>

      <View style = {{flex: 4, justifyContent: "flex-end", marginBottom: 20}}>

        <View style = {{ marginHorizontal: 20, marginTop: 30 }}> 
            <Button 
              title = "SIGN IN"
              buttonStyle = {parameters.styledButton}
              titleStyle = {parameters.buttonStyle}
              onPress = {() => {
                navigation.navigate("SignInScreen")
              }}
            />
        </View>

        <View
        style={{ marginHorizontal: 20, marginTop: 30 }}
      >
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAES"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundcolor: "#22BBD9"
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons
  },

  createButtonTitle: {
    alignContent: "center",
    justifyContent: "center",
    color: colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3
  }
});
