import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";

const Splash = () => {
    return (
        <View
            style={{
                backgroundColor: "#53B175",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
                <Image source={require("../assets/image/logo/carrot.png")} />
                <View>
                    <Text style={{ fontSize: 70, color: "#fff" }}>nectar</Text>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 14,
                            letterSpacing: 5.5,
                        }}
                    >
                        online groceriet
                    </Text>
                </View>
            </View>
            <StatusBar barStyle={"light-content"} />
        </View>
    );
};

export default Splash;
