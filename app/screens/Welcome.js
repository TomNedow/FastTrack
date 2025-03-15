import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  onPress,
} from "react-native";
import Emoji from "react-native-emoji";

function Welcome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FE3756",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Image
        source={require("../assets/Subtract.png")}
        style={{
          zIndex: 2,
          position: "absolute",
          bottom: -10,
        }}
      />
      <Image
        source={require("../assets/phoneintro.png")}
        style={{
          position: "absolute",
          top: 20,
          width: 530,
          height: 530,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />
      <View
        style={{
          flex: 2,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 3,
          zIndex: 2,
          position: "absolute",
          bottom: 200,
          borderTopLeftRadius: -50,
          borderTopRightRadius: -50,
          width: "90%",
          height: 200,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#000",
            textAlign: "center",
            marginBottom: 20,
            marginTop: 30,
            zIndex: 3,
            lineHeight: 30,
          }}
        >
          Fast Track - Start Your Fasting Journey Today! <Emoji name="muscle" />
        </Text>
        <Text
          style={{
            fontSize: 16,
            zIndex: 3,
            paddingHorizontal: 10,
            textAlign: "center",
            lineHeight: 24,
          }}
        >
          Welcome to Fast Track, your all-in-one solution for intermittent
          fasting success. Let's get started on your journey to better health
          and well-being!
        </Text>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignContent: "center",
          gap: 20,
          zIndex: 5,
        }}
      >
        <Image
          source={require("../assets/layout-horizontal-1.png")}
          style={{
            zIndex: 5,
            position: "absolulte",
            bottom: 40,
            backgroundColor: "#FFF",
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "50px",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Setup")}
            style={{
              backgroundColor: "#FE3756",
              height: 50,
              width: 120,
              borderRadius: 50,
              zIndex: 5,
              bottom: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Welcome;
