import { Stack, useNavigation } from 'expo-router';
import { View, StyleSheet, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


export default function RootLayout() {
  const navigation = useNavigation(); // Get the navigation object
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {/* Home Screen */}
        <Stack.Screen
          name="index"
          options={{
            headerStyle: {
              backgroundColor: 'rgba(1,120,212,255)',
            },
            headerTitle: () => <View> <Text style={{ fontSize:21, fontWeight:
              '500', color:'white'}}>Inbox</Text> </View> , // Removes the title
            headerLeft: () => (
              <View style={styles.headerLeft}>
             <View style={{ backgroundColor:'white' , borderRadius:24, height:24, width:24, alignItems:'center', justifyContent:'center',
             marginRight:20 }}> 
          <Entypo name="home" size={18} color='rgba(1,120,212,255)' />
          </View>  
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}> 
              <SimpleLineIcons name="bell" size={18} color="white" style={{ marginHorizontal:25}}/>
              <Feather name="search" size={20} color="white" />
              </View>
            )
          }}
        />

        {/* About Screen */}
        <Stack.Screen
          name="about"
          options={{
            headerStyle: {
              backgroundColor: 'rgba(1,120,212,255)',
            },
            headerTitle: () => null, // Removes the title
            headerTintColor: '#fff', // Ensures the back button is visible
            headerRight: () => (
              <Image
                    source={require('../assets/images/header1.png')}
                    style={{ height:50, width:130, marginLeft:20}}
                    resizeMode='contain'
                  />
            ),
            headerLeft: () => (
              <AntDesign name="arrowleft" size={18} color="white" onPress={()=> navigation.goBack()}/>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
  },
  headerRight: {
    flexDirection: 'row',
    right: -25,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 130,
    height: 30,
    padding: 5,
  },
  icon: {
    marginHorizontal: 8, // Adjusted for a thinner look
  },
});
