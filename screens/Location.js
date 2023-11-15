import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const Location = () => {
    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <Image source={require("../assets/image/logo/back.png")} />
            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Image source={require("../assets/image/logo/location.png")} />
                <Text
                    style={{ marginTop: 40, fontSize: 26, fontWeight: "600" }}
                >
                    Select Your Location
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 16,
                        color: "#7c7c7c",
                        marginTop: 15,
                        width: "85%",
                    }}
                >
                    Swithch on your location to stay in tune with what’s
                    happening in your area
                </Text>
            </View>
            <View style={{ marginTop: 90 }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#7c7c7c",
                    }}
                >
                    Your Zone
                </Text>
                <TextInput
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#e2e2e2",
                        paddingVertical: 10,
                        fontSize: 18,
                    }}
                />
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#7c7c7c",
                        marginTop: 30,
                    }}
                >
                    Your Area
                </Text>
                <TextInput
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#e2e2e2",
                        paddingVertical: 10,
                        fontSize: 18,
                    }}
                    placeholder="Types of your area"
                />
            </View>
            <Pressable
                style={{
                    backgroundColor: "#53B175",
                    paddingVertical: 24,
                    alignItems: "center",
                    borderRadius: 19,
                    marginTop: 40,
                }}
            >
                <Text
                    style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}
                >
                    Submit
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Location;
