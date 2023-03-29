import { TouchableOpacity, View, useColorScheme, Dimensions, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get("screen")
import SelectDropdown from 'react-native-select-dropdown'
import { set } from 'react-native-reanimated';
const citys = ["المنصوره", "طنطا", "زفتي", "السنطه"]
const areas = ["المنصوره", "طنطا", "زفتي", "السنطه"]
const neighborhoods = ["المنصوره", "طنطا", "زفتي", "السنطه"]
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Redux/Actions/AddressAction';
export default function app({ navigation }) {
  const dark = useColorScheme() == 'dark' ? "#000" : "#fff"
  const [city, setCity] = useState('w')
  const [area, setArea] = useState('w')
  const [neighborhood, setNeighborhood] = useState('')
  const [address, setAddress] = useState('')
  const [num_arch, setNum_arch] = useState('')
  const [num_rol, setNum_rol] = useState('')
  const [num_flat, setNum_flat] = useState('')
  const dispatch = useDispatch()
  const addresslist = useSelector(state => state.addresslist);
  const add_address = () => {
    let newaddress = {
      city: city,
      area: area,
      neighborhood: neighborhood,
      address: address,
      num_arch: num_arch,
      num_rol: num_rol,
      num_flat: num_flat
    }
    dispatch({
      type: add,
      value: newaddress
    })
    navigation.navigate('LevelLog1')
  }
  return (
    <>
      <View style={{ flex: 1, backgroundColor: dark, padding: 10, alignItems: "center" }}>
        <View style={style.row1}>
          <TouchableOpacity style={style.iconback}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-forward" style={{ fontSize: 20, color: "#1A8575" }}></Ionicons>
          </TouchableOpacity>
          <Text style={style.textheader}> اضافه عنوان جديد</Text>
        </View>
        <SelectDropdown
          data={citys}
          onSelect={(selectedItem, index) => {
            setCity(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          defaultButtonText="اختر المدينة"
          search={true}
          searchPlaceHolder={"زفتي"}
          searchInputTxtColor={"#000"}
          buttonStyle={style.stylebox}
          buttonTextStyle={{ fontSize: 14, fontFamily: "Almarai-Regular", textAlign: "left" }}
          dropdownStyle={{ height: height * .2 }}
          rowTextStyle={{ fontSize: 14, fontFamily: "Almarai-Regular" }}
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={"right"}
        />


        <SelectDropdown
          data={areas}
          onSelect={(selectedItem, index) => {
            setArea(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          defaultButtonText="اختر المنطقة"
          search={true}
          searchPlaceHolder={"زفتي"}
          searchInputTxtColor={"#000"}
          buttonStyle={style.stylebox}
          buttonTextStyle={{ fontSize: 14, fontFamily: "Almarai-Regular", textAlign: "left" }}
          dropdownStyle={{ height: height * .2 }}
          rowTextStyle={{ fontSize: 14, fontFamily: "Almarai-Regular" }}
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={"right"}
        />
        <SelectDropdown
          data={neighborhoods}
          onSelect={(selectedItem, index) => {
            setNeighborhood(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          defaultButtonText="اختر الحي"
          search={true}
          searchPlaceHolder={"زفتي"}
          searchInputTxtColor={"#000"}
          buttonStyle={style.stylebox}
          buttonTextStyle={{ fontSize: 14, fontFamily: "Almarai-Regular", textAlign: "left" }}
          dropdownStyle={{ height: height * .2 }}
          rowTextStyle={{ fontSize: 14, fontFamily: "Almarai-Regular" }}
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          ropdownIconPosition={"right"}
        />
        <TextInput
          style={{ ...style.view, borderWidth: 1, padding: 10 }}
          value={address}
          placeholder="عنوان الشارع"
          fontSize={14}
          fontFamily={"Almarai-Regular"}
          placeholderTextColor={"#000"}
          textAlign={"right"}
          onChangeText={(value) => {
            setAddress(value)
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: width * .9 }}>
          <TextInput
            style={{ ...style.view, borderWidth: 1, padding: 10, width: width * .44 }}
            // value={this.state.details}
            placeholder="رقم العمارة"
            fontSize={14}
            fontFamily={"Almarai-Regular"}
            placeholderTextColor={"#000"}
            keyboardType={"numeric"}
            textAlign={"right"}
            onChangeText={(value) => {
              setNum_arch(value)
            }}
          />
          <TextInput
            style={{ ...style.view, borderWidth: 1, padding: 10, width: width * .44 }}
            // value={this.state.details}
            placeholder="رقم الدور"
            fontSize={14}
            fontFamily={"Almarai-Regular"}
            placeholderTextColor={"#000"}
            keyboardType={"numeric"}
            textAlign={"right"}
            onChangeText={(value) => {
              setNum_flat(value)
            }}
          />
        </View>
        <TextInput
          style={{ ...style.view, borderWidth: 1, padding: 10 }}
          // value={this.state.details}
          placeholder="رقم الشقة"
          fontSize={14}
          fontFamily={"Almarai-Regular"}
          placeholderTextColor={"#000"}
          keyboardType={"numeric"}
          textAlign={"right"}
          onChangeText={(value) => {
            setNum_flat(value)
          }}
        />
        <TouchableOpacity style={{
          height: height * .07,
          width: width * .5,
          backgroundColor: "#1A8575",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30
        }}
          onPress={
            () => {
              add_address()
            }
          }

        >
          <Text style={{ fontSize: 18, fontFamily: "Almarai-Regular", color: "#fff" }}>حفظ العنوان</Text>
        </TouchableOpacity>
      </View>
    </>)
}

const style = StyleSheet.create({
  row1: {
    height: height * .1,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * .01
  },
  iconback: {
    height: height * .1,
    width: width * .12,
    alignItems: "center",
    justifyContent: "center"
  },
  textheader: {
    fontSize: 20,
    color: "#1A8575",
    fontFamily: "Almarai-Bold"
  }, view: {
    height: height * .07,
    width: width * .9,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 8,
  },
  stylebox: {
    height: height * .07,
    width: width * .9,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    marginVertical: 8,
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff"
  }
})

