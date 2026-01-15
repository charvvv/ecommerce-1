import { View, Text, ScrollView, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const confirmation = () => {
    const steps = [
        {title: "address", content: "address form"}, 
        {title: "delivery", content: "delivery options"},
        {title: "payment", content: "payment details"},
        {title: "place order", content: "order summary"}, 
    
    ];
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(0);
    const [addresses, setAdressess] = useState([]);
    const {userId, setUserId} = useContext(userType);

  return (
   <ScrollView style={{marginTop: 55}}>
        <View style={{flex: 1, paddingHorizontal: 25, paddingTop: 40}}>
            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20, justifyContent: "space-between"}}>
            {steps?.map((step, index)=>(
                <View style={{justifyContent: "center", alignItems: "center"}}>
                {index > 0 &&(
                    <View style={[{
                        flex: 1, height: 2, backgroundColor: "green"
                    }, 
                index <= currentStep && {backgroundColor: "green"}]}/>
                )}
                <View style={[
                    {width: 30, height: 30, borderRadius: 15, backgroundColor: "#CCC", justifyContent: "center", alignItems: "center"},
                    index < currentStep & {backgroundColor: "green"}
                ]}>
                    {index < currentStep?(
                        <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>✅</Text>
                    ):(
                        <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>{index + 1}</Text>
                    )}

                </View>
                    <Text style={{textAlign: "center", marginTop: 5}}>{step.title}</Text>
                </View>
            ))}
            </View>
        </View>
        {currentStep == 0 && (
            <View style={{marginHorizontal: 20}}>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>Select delivery address</Text>
                <Pressable>
                    {addresses?.map((item, index)=>(
                        <Pressable style={{borderWidth: 1, flexDirection: "row", borderColor: "#D0D0D0", padding: 10, alignItems: "center", gap: 5, paddingBottom: 15, marginVertical: 10, borderRadius: 6}}>
                            {selectAdressess & selectAdressess._id === item?._id?
                            (<FontAwesome5 name="dot-circle" size= {20} color="#008397"/> ): (
                                <Entypo name="circle" size= {20} color="green" onPress={()=>selectAdressess(item)}/>
                            )}
                            <View style={{marginLeft: 6}}>
                                <View style={{flexDirection: "row", alignItems: "center", gap: 3}}>
                                    <Text style={{fontSize: 50, fontWeight: "bold"}}>{item?.name}</Text>
                                    <Entypo name="location-pin" size={24} color= "red" />
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </Pressable>
            </View>
        )}
   </ScrollView>
  )
}

export default confirmation