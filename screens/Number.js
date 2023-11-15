import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Number = () => {
    return (
        <SafeAreaView style={{ marginHorizontal: 20, flex: 1}}>
            <Image source={require("../assets/image/logo/back.png")} />
            <Text style={{ fontSize: 26, fontWeight: "600", marginTop: 65 }}>
                Enter your mobile number
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#7c7c7c",
                    marginTop: 27,
                }}
            >
                Mobile Number
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                    marginTop: 30,
                    borderBottomWidth: 1,
                    borderColor: "#e2e2e2",
                    paddingBottom: 15,
                }}
            >
                <Image
                    source={require("../assets/image/logo/vietnam.png")}
                    style={{ width: 33, height: 23 }}
                />
                <Text style={{ fontSize: 18 }}>+84</Text>
                <TextInput
                    style={{ fontSize: 18 }}
                    placeholder="Phone number"
                />
            </View>
            <TouchableOpacity
                style={{
                    width: 67,
                    height: 67,
                    backgroundColor: "#53B175",
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    position:'absolute',
                    right:0,
                    bottom: 50
                }}
            >
                <Image source={require("../assets/image/logo/next.png")} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Number;
