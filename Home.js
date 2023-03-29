import * as React from 'react'

import { Text, View, StyleSheet, useColorScheme, Dimensions, Image, TouchableOpacity, map, ScrollView, StatusBar } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';
import Svg, { Use } from 'react-native-svg';
// const isDarkMode = useColorScheme() === 'dark'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("screen")
const state = [
    {
        image: require("../image/medal.png"),
        title: "25",
        text: "مبتدا"
    },
    {
        image: require("../image/recycle2.png"),
        title: "25",
        text: "عدد التدويرات"
    },
    {
        image: require("../image/bitcoin.png"),
        title: "3500",
        text: "النقاط"
    }
]
const state1 = [
    {

        title: "ملابس",

    },
    {
        title: "سلع غذائية",
    },
    {
        title: "مطاعم",
    }, {
        title: "أدوية",
    }
]
const colum1 = [
    {
        image: require("../image/tote-bag.png"),
        title: "شنط",
    },
    {
        image: require("../image/boxers.png"),
        title: "ملابس داخلية",
    }
]
const column2 = [
    {

        image: require("../image/tshirt.png"),
        title: "تيشرتات",

    },
    {
        image: require("../image/recycle1.png"),
        title: "",
    },
    {
        image: require("../image/socks.png"),
        title: "شربات",
    }
]
const column3 = [
    {

        image: require("../image/trousers.png"),
        title: "بناطيل",

    },
    {
        image: require("../image/shirt.png"),
        title: "قمصان",
    }
]
const users = [
    {
        image: require("../image/re.jpeg"),
        name: "ريهام جمال",
        num_medal: 1,
        value_per: 80
    },
    {
        image: require("../image/re1.jpeg"),
        name: "نورهان اسامه",
        num_medal: 2,
        value_per: 50
    }, {
        image: require("../image/re2.jpeg"),
        name: "ميار ماهر",
        num_medal: 3,
        value_per: 70
    }
]
let color_back = ""
export default function app() {
    const dark = useColorScheme() == 'dark' ? "#000" : "#fff"
    color_back = dark
    return (<>
        <StatusBar
            animated={true}
            backgroundColor={dark}

        />
        <View style={{ backgroundColor: dark, flex: 1, padding: 7 }}>

            <ScrollView >
                <View style={style.rowheader}>
                    <TouchableOpacity>
                        <Image style={style.imageprofile}
                            source={require("../image/profile.jpeg")}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ ...style.textwelcome, color: dark == '#000' ? '#fff' : '#000', width: width * .4 }}>
                             مرحبا, <Text style={{ color: "#1A8575" }}>ريهام</Text>
                        </Text>
                        <Text style={{ ...style.textwelcome, color: dark == '#000' ? '#fff' : '#000' }}>طنطا</Text>
                    </View>
                    {/* justifyContent:"flex-end",flexDirection:"row", */}
                    <TouchableOpacity style={style.touchNotific}>
                        <Ionicons name='ios-notifications-outline' style={style.iconNotific} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: height * .15,
                    width: width * .95,
                    borderWidth: 2,
                    borderColor: "#1A8575",
                    borderRadius: 11,
                    flexDirection: "row",
                    padding: 10,
                    alignItems: "center",
                    marginVertical: height * .03

                }}>
                    {
                        state.map((item, index) => (
                            <>
                                <View style={{ flex: 1, alignItems: "center", borderLeftWidth: index ? 2 : 0, borderColor: "#1A8575" }}>
                                    <Image style={{ height: height * .0368, width: width * .0825 }}
                                        source={item.image}
                                    />
                                    <Text style={style.textrow2}>{item.title}</Text>
                                    <Text style={{ ...style.textrow2, fontSize: 11, color: dark == '#000' ? '#fff' : '#000' }}>{item.text}</Text>
                                </View>
                            </>
                        ))
                    }

                </View>
                <View style={{ ...style.rowheader, justifyContent: "space-between", padding: 10 }}>
                    <Text style={{ ...style.textwelcome, fontSize: 22, color: dark == '#000' ? '#fff' : '#000' }}>
                        شركائنا
                    </Text>
                    <TouchableOpacity>
                        <Text style={{ ...style.textwelcome, color: "#1A8575" }}>
                            المزيد
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: height * .1, flexDirection: "row" }}>
                    <ScrollView horizontal={true}>
                        {
                            state1.map((item, index) => (
                                <>
                                    <TouchableOpacity style={style.stylerow3}>
                                        <Text style={{ ...style.textrow2, color: dark == '#000' ? '#fff' : '#000' }}>{item.title}</Text>
                                    </TouchableOpacity>
                                </>
                            ))
                        }
                    </ScrollView>
                </View>

                <View style={{ ...style.rowheader, padding: 10, height: height * .06 }}>
                    <Text style={{ ...style.textwelcome, fontSize: 22, width: width * .5, color: dark == '#000' ? '#fff' : '#000' }}>
                        المخلفات
                    </Text>
                </View>
                <View style={{
                    height: height * .45,
                    width: width * .9,
                    flexDirection: "row",
                    alignSelf: "center"
                }}>
                    <View style={style.styleColum1}>
                        {
                            colum1.map((item, index) => (
                                <TouchableOpacity style={style.stylecircle}>
                                    <Image style={style.styleimage}
                                        source={item.image}
                                    />
                                    <Text>{item.title}</Text>

                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-around" }}>
                        {column2.map((item, index) => (
                            <TouchableOpacity style={{ ...style.stylecircle, backgroundColor: index != 1 ? "#9CDBCE" : "#1A8575" }}>
                                <Image
                                    style={style.styleimage}
                                    source={item.image}
                                />
                                {
                                    index == 1 ? null : <Text>{item.title}</Text>
                                }

                            </TouchableOpacity>
                        ))
                        }
                    </View>
                    <View style={style.styleColum1}>
                        {column3.map((item, index) => (
                            <TouchableOpacity style={style.stylecircle}>
                                <Image style={style.styleimage}
                                    source={item.image}
                                />
                                <Text>{item.title}</Text>

                            </TouchableOpacity>
                        ))
                        }
                    </View>
                </View>

                <View style={{ ...style.rowheader, padding: 10 }}>
                    <Text style={{ ...style.textwelcome, fontSize: 22, width: width * .5, color: dark == '#000' ? '#fff' : '#000' }}>
                        اعلي مستخدم
                    </Text>
                </View>
                <View>
                    {
                        users.map((item, index) => (
                            <>
                                <TouchableOpacity style={style.heigh_use}>
                                    <Image style={style.imageuse}
                                        source={item.image}
                                    />
                                    <View style={style.viewname}>
                                        <Text style={style.textname}>{item.name}</Text>
                                        <Image style={style.imagemodal}
                                            source={require("../image/medal.png")}
                                        />
                                    </View>
                                    <CircularProgress
                                        value={item.value_per}
                                        maxValue={100}
                                        inActiveStrokeColor={'#2ecc71'}
                                        inActiveStrokeOpacity={0.1}
                                        progressValueColor={'#2ecc71'}
                                        valueSuffix={'%'}
                                        radius={25}
                                        activeStrokeWidth={4}
                                        inActiveStrokeWidth={4}
                                    // onAnimationComplete={() => { alert('callback') }}
                                    />
                                </TouchableOpacity>
                            </>
                        ))
                    }
                </View>


            </ScrollView>
        </View>
    </>)
}
const style = StyleSheet.create({
    rowheader: {
        height: height * .1,
        width: width,
        flexDirection: "row",
        alignItems: "center",
        padding: 7
    },
    imageprofile: {
        height: height * .05,
        width: width * .12,
        borderRadius: 5,
        alignSelf: "center",
        marginRight: 5
    },
    textwelcome: {
        width: width * .19,
        fontFamily: "Almarai-Regular",
        color: color_back == '#000' ? '#000' : '#fff',
        fontSize: 15
    },
    touchNotific: {
        alignSelf: "flex-end",
        width: width * .38,
        justifyContent: "center",
        height: height * .05
    },
    iconNotific: {
        fontSize: 25,
        color: "#FFC107"
    },
    textrow2: {
        fontFamily: "Almarai-Regular",
        color: "#000",
        fontSize: 15,
        color: "#1A8575"
    },
    stylerow3: {
        height: height * .07,
        width: width * .3,
        borderWidth: 2,
        borderColor: "#1A8575",
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5
    }, styleColum1: {
        flex: 1,
        justifyContent: "space-around",
        height: height * .302,
        alignSelf: "center"
    },
    stylecircle: {
        height: height * .138,
        width: width * .31,
        borderRadius: 1000,
        backgroundColor: "#9CDBCE",
        alignItems: "center",
        justifyContent: "center"
    },
    styleimage: {
        height: height * .05,
        width: width * .11,
        // resizeMode:"center"
    },
    heigh_use: {
        height: height * .12,
        width: width * .9,
        backgroundColor: "#F3F3F3",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5
    }, imageuse: {
        height: height * .07,
        width: width * .15,
        borderRadius: 200
    }, viewname: {
        height: height * .12,
        width: width * .5,
        justifyContent: "center",
        marginLeft: 5
    }, textname: {
        fontSize: 18,
        fontFamily: "Almarai-Bold",
        marginVertical: 5,
        color: "#000"
    }, imagemodal: {
        height: height * .023,
        width: width * .05
    }
})