import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";

const LogIn = () => {
    return (
        <SafeAreaView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Image
                    source={require("../assets/image/logo/carrot-orange.png")}
                />
            </View>
            <View style={{ marginHorizontal: 20, marginTop: 100 }}>
                <Text style={{ fontSize: 26, fontWeight: "600" }}>Login</Text>
                <Text style={{ fontSize: 16, color: "#7c7c7c", marginTop: 10 }}>
                    Enter your emails and password
                </Text>
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
                    <View style={{ marginTop: 20, alignItems: "flex-end" }}>
                        <Text style={{}}>Forgot Password?</Text>
                    </View>
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
                            marginTop: 30,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "600",
                                color: "#fff",
                            }}
                        >
                            Log In
                        </Text>
                    </Pressable>
                    <View style={{flexDirection:'row', marginTop:25, justifyContent:'center'}}>
                        <Text style={{fontWeight:'600',}}>Don’t have an account?</Text>
                        <Text style={{fontWeight:'600', color:'#53B175'}}>Singup</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LogIn;
