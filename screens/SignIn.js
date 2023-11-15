import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";

const SignIn = () => {
    return (
        <View>
            <Image source={require("../assets/image/image2.png")} />
            <View style={{ marginHorizontal: 20 }}>
                <Text
                    style={{
                        fontSize: 26,
                        fontWeight: "600",
                        width: 222,
                        marginTop: 40,
                    }}
                >
                    Get your groceries with nectar
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
                    <Text style={{fontSize: 18}}>+84</Text>
                    <TextInput style={{fontSize:18}} placeholder="Phone number" />
                </View>
            </View>
            <Text
                style={{
                    color: "#828282",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: 40,
                }}
            >
                Or connect with social media
            </Text>
            <View style={{ alignItems: "center", gap: 20, marginTop: 37 }}>
                <Pressable
                    style={{
                        width: "85%",
                        backgroundColor: "#5383EC",
                        flexDirection: "row",
                        paddingHorizontal: 35,
                        paddingVertical: 21,
                        gap: 40,
                        alignItems: "center",
                        borderRadius: 19,
                    }}
                >
                    <Image
                        source={require("../assets/image/logo/google.png")}
                    />
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        Continue with Google
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        width: "85%",
                        backgroundColor: "#4A66AC",
                        flexDirection: "row",
                        paddingHorizontal: 35,
                        paddingVertical: 21,
                        gap: 40,
                        alignItems: "center",
                        borderRadius: 19,
                    }}
                >
                    <Image
                        source={require("../assets/image/logo/facebook.png")}
                    />
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        Continue with Facebook
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignIn;
