import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React from "react";

const Verification = () => {
    return (
        <SafeAreaView style={{ marginHorizontal: 20, flex: 1 }}>
            <Image source={require("../assets/image/logo/back.png")} />
            <Text style={{ fontSize: 26, fontWeight: "600", marginTop: 65 }}>
                Enter your 4-digit code
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#7c7c7c",
                    marginTop: 27,
                }}
            >
                Code
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
                <TextInput style={{ fontSize: 18 }} placeholder="----" />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: 50,
                    width: "100%",
                }}
            >
                <Text style={{ fontSize: 18, color: "#53B175" }}>
                    Resend Code
                </Text>
                <TouchableOpacity
                    style={{
                        width: 67,
                        height: 67,
                        backgroundColor: "#53B175",
                        borderRadius: 100,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image source={require("../assets/image/logo/next.png")} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Verification;
