import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import { Image } from "react-native";

const OnBording = () => {
    return (
        <ImageBackground
            source={require("../assets/image/image1.png")}
            style={{ width: "100%", height: "100%"}}
        >
            <View style={{height: '90%', alignItems: "center", justifyContent:'flex-end'}}>
                <Image source={require("../assets/image/logo/carrot.png")} />
                <Text
                    style={{
                        color: "white",
                        fontSize: 48,
                        fontWeight: "600",
                        width: "57%",
                        textAlign: "center",
                        marginTop: 35,
                    }}
                >
                    Welcome to our store
                </Text>
                <Text style={{ fontSize: 16, color: "white", marginTop: 19 }}>
                    Ger your groceries in as fast as one hour
                </Text>
                <Pressable
                    style={{
                        backgroundColor: "#53B175",
                        minWidth: 353,
                        minHeight: 67,
                        borderRadius: 19,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 40,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 18,
                            fontWeight: "600",
                        }}
                    >
                        Get Started
                    </Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default OnBording;
