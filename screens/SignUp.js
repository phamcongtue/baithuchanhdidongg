import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";

const SignUp = () => {
    return (
        <SafeAreaView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Image
                    source={require("../assets/image/logo/carrot-orange.png")}
                />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 100 }}>
                <Text style={{ fontSize: 26, fontWeight: "600" }}>Sign Up</Text>
                <Text style={{ fontSize: 16, color: "#7c7c7c", marginTop: 10 }}>
                    Enter your credentials to continue
                </Text>
                <View style={{ marginTop: 40 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#7c7c7c",
                        }}
                    >
                        Username
                    </Text>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#e2e2e2",
                            fontSize: 16,
                            paddingVertical: 10,
                        }}
                    />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#7c7c7c",
                        }}
                    >
                        Email
                    </Text>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#e2e2e2",
                            fontSize: 16,
                            paddingVertical: 10,
                        }}
                    />
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#7c7c7c",
                        }}
                    >
                        Password
                    </Text>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: "#e2e2e2",
                            fontSize: 16,
                            paddingVertical: 10,
                        }}
                        secureTextEntry={true}
                    />
                    <Text
                        style={{
                            paddingVertical: 20,
                            lineHeight: 20,
                            letterSpacing: 1.2,
                            fontSize: 14,
                        }}
                    >
                        By continuing you agree to our{" "}
                        <Text style={{ color: "#53b175" }}>
                            Terms of Service
                        </Text>{" "}
                        and
                        <Text style={{ color: "#53b175" }}>
                            {" "}
                            Privacy Policy.
                        </Text>
                    </Text>
                </View>
                <View>
                    <Pressable
                        style={{
                            backgroundColor: "#53B175",
                            paddingVertical: 24,
                            paddingHorizontal: 150,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 19,
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: "#fff",
                            }}
                        >
                            Sign Up
                        </Text>
                    </Pressable>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 25,
                            justifyContent: "center",
                        }}
                    >
                        <Text style={{ fontWeight: "600" }}>
                            Already have an account?{" "}
                            <Text style={{ color: "#53B175" }}>Singup</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
