import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function AboutScreen() {
    const [formattedDate, setFormattedDate] = useState('');
    const [previousDayDate, setPreviousDayDate] = useState('');
    const[more, setShowMore] = useState(false);
    const [inputValue, setInputValue] = useState('');  // To hold the input value temporarily
    const [seatNumber, setSeatNumber] = useState('368');

      // Function to handle the submission of the seat number
  const handleSubmit = () => {
    setSeatNumber(inputValue);  // Set the seat number after submission
    setInputValue('');  // Clear the input field after submission
  };


     // Function to format the date
  const getFormattedDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' }); // Get month abbreviation
    const year = today.getFullYear();
    return `${day < 10 ? '0' + day : day}-${month}-${year}`; // Ensures day is always two digits
  };
   // Function to get the previous day's date in the format "Day, DD Month, HH:MM (system time)"
   const getPreviousDayFormatted = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1); // Subtract 1 day from the current date
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
    const year = today.getFullYear();
    const weekday = today.toLocaleString('default', { weekday: 'long' });
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return `${weekday}, ${day < 10 ? '0' + day : day} ${month}, ${formattedTime}`;
  };


    // UseEffect to set the date when the component is loaded
    useEffect(() => {
        const date = getFormattedDate();
        setFormattedDate(date);

        const prevDayDate = getPreviousDayFormatted();
        setPreviousDayDate(prevDayDate);

      }, []);

  return (
    <View style={styles.container}>
    <StatusBar translucent={true} />
    <ScrollView>
    {/* Hotelling, seat has been booked successfully */}
     <View style={{ marginVertical: 15}}> 
      <Text style={{ fontSize: 15 , paddingHorizontal:10 , fontWeight:'bold'}}>Hotelling : Seat has been booked successfully.</Text>
      </View>
      {/* Hotelling avatar */}
      <TouchableOpacity  onPress={()=> setShowMore((prev) => !prev)}> 
        <View style={{flexDirection:'row',  marginTop: 15, height: more ? 150 : 100}}> 
        {/* avatar */}
        <View style={{ left:10}}> 
        <View style={{ backgroundColor:'#ea580c' , width:50 , height:50, borderRadius:50, zIndex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{ zIndex:1 , padding:10, fontSize:16, color:'white'}}>H</Text>
        </View>
        {more && (
        <View style={{ alignItems:'flex-end', paddingTop:10}}> 
        <Text style={{ fontSize:13}}>To</Text>
        </View>
        )}
        </View>
        {/* textContainer */}
        <View style={{ flex:1, paddingTop:5, marginHorizontal:20, paddingLeft:5}}>
        <Text style={{ fontWeight: '500', fontSize:15, color: more ? '#0ea5e9' : 'black'}}>Hotelling</Text>
        <Text style={{ color:'gray', fontSize:12}}>{more ? "Hotelling@infosys.com" : "To You"}</Text>
        {more && (
        <View style={{ marginTop:17}}>
        <Text style={{ color:'#0ea5e9', fontSize:14}}>You <Text style={{ color:'gray', fontSize:11}}> sanjana.chauhan01@infosys.com</Text></Text>
        <View style={{ marginTop:10,}}>
        <Text style={{ color:'gray', fontSize:13}}>{previousDayDate}</Text>
        </View>
        </View>
        )}
        <View>

        </View>
        </View>
        {/* yesterday with dots  */}
        <View style={{ right:10 }}>
            <Text style={{ paddingTop:10 , fontSize:12 , marginBottom:5, color:more ? 'white' : 'gray'}}>Yesterday</Text>
        <Entypo name="dots-three-vertical" size={15} color="gray" style={styles.icon} />
        </View>
        </View>
      </TouchableOpacity>
     

      {/* email body */}
    <View style={{ flex:1, paddingHorizontal:15}}> 
        <View style={{borderWidth: 0.5,borderColor:'#cbd5e1',flexDirection:'row-reverse', width:22, height:22, marginLeft:'95%', alignItems:'center', justifyContent:'center', borderRadius:22}}>
            <FontAwesome6 name="face-smile" size={10} color="gray" />
            </View>
    <View style={{marginBottom:15}}> 
    <Text style={{ fontSize:11}}>Hi <Text style={{ fontWeight:'bold'}}> Sanjana Chauhan ,</Text></Text>
    </View> 

    <Text  style={{ fontSize:11}}>Welcome to campus, you have booked a seat for <Text style={{ fontWeight:'bold' , fontSize:11}}>{formattedDate}</Text> with below details.</Text>
    <View style={{paddingTop:15}}>
    <Text  style={{ fontSize:11}}>Seat ID: <Text style={{ fontWeight:'bold' , fontSize:11}}>MUM02 01 04 A {seatNumber}</Text>   </Text>
    <Text  style={{ fontSize:11}}>City: <Text style={{ fontWeight:'bold' , fontSize:11}}>Mumbai</Text> </Text>
    <Text  style={{ fontSize:11}}>DC: <Text style={{ fontWeight:'bold' , fontSize:11}}>INFOSYS LIMITED STP Unit</Text></Text>
    <Text  style={{ fontSize:11}}>Building: <Text style={{ fontWeight:'bold' , fontSize:11}}>SBD01</Text></Text>
    <Text  style={{ fontSize:11}}>Floor: <Text style={{ fontWeight:'bold' , fontSize:11}}>FLOOR-4</Text></Text>
    <Text  style={{ fontSize:11}}>Wing: <Text style={{ fontWeight:'bold' , fontSize:11}}>A</Text> </Text>
    </View>

    <View style={{paddingTop:15, marginBottom: 15}}>
    <Text style={{ fontWeight:'bold', fontSize:12}}>How to read seat ID ?</Text>
    <Text  style={{ fontSize:11}}>First 3 letters: City </Text>
    <Text  style={{ fontSize:11}}>Next 2 letters: DC code</Text>
    <Text  style={{ fontSize:11}}>Next 2 letters: Building Number</Text>
    <Text  style={{ fontSize:11}}>Next 2 letters: Floor Number </Text>
    <Text  style={{ fontSize:11}}>Next 1 letter: Wing/Zone </Text>
    <Text  style={{ fontSize:11}}>Last 3 letters: cubical number </Text>
    </View>
    <View style={{ paddingTop:10}}>
        <Text  style={{ fontSize:11 }}>
            You can view your cubicle details in Infyme>Work>Work from Office>Book seat.
        </Text>
        <View style={{ marginTop:15
        }}> 
        <Text style={{ fontSize:11}} >
            Regards,
        </Text>
        <Text  style={{ fontSize:11}}>
            System Generated Mail
        </Text>
        </View>
    </View>

      </View>
      
      {/* image of footer */}
      <View style={{width:'100%', paddingHorizontal:10, backgroundColor:'transparent',marginTop:-39, height:240}}>
      <Image source={require('../assets/images/footer2.png')} style={{ width:'100%', position:'absolute', alignSelf:'center'}} resizeMode='contain' />
      <Image source={require('../assets/images/footer1.png')} style={{ width:'100%'}} resizeMode='contain' />
      </View>
      {/* reply section */}
      <View style={{ flexDirection:'row', borderTopColor:'#94a3b8', borderTopWidth:0.2, position:'static', bottom:0, flex:1, height:60,paddingHorizontal:7}}>
        <View style={{ marginTop:10, flexDirection:'row'}}> 
      <Octicons name="reply" size={17} color="#94a3b8" style={{ paddingRight:5}}/>
      <AntDesign name="down" size={15} color="gray" style={{ paddingRight:5, paddingTop:2}}/>
      {/* <Text style={{ color:'gray'}}>Reply</Text> */}
      <TextInput
        style={{
            height: 40,
            width: '80%',
            paddingLeft: 10,
            marginTop:-10
        }}
        placeholder="Reply"
        value={inputValue}
        onChangeText={setInputValue}  // Update the inputValue state as the user types
        keyboardType="numeric"  // Assuming seat number is numeric
        onSubmitEditing={handleSubmit}
      />
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  icon: {
   alignSelf:'center',
   position:'fixed' 
  },
});

