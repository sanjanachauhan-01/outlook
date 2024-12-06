import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Sample data for the FlatList
  const emailData = [
    {
      letter: 'A',
      emailFrom: 'Alice Johnson',
      emailSubject: 'Team Meeting Agenda',
      emailBody: 'Please review the attached agenda before the meeting...',
      time: '8:10 AM',
    },
    {
      letter: 'B',
      emailFrom: 'Brian Carter',
      emailSubject: 'Project Deadline Extension',
      emailBody: 'The new deadline for the project is set for next week...',
      time: 'Yesterday',
    },
    {
      letter: 'C',
      emailFrom: 'Claire Martin',
      emailSubject: 'Client Feedback Summary',
      emailBody: 'The client provided feedback on the initial draft of...',
      time: '7:45 AM',
    },
    {
      letter: 'D',
      emailFrom: 'Daniel Evans',
      emailSubject: 'Budget Review Meeting',
      emailBody: 'Please confirm your availability for the budget revie...',
      time: '3 hours ago',
    },
    {
      letter: 'E',
      emailFrom: 'Evelyn Harris',
      emailSubject: 'Quarterly Report Submission',
      emailBody: 'Kindly submit the quarterly report by the end of the...',
      time: 'Friday',
    },
    {
      letter: 'F',
      emailFrom: 'Franklin Moore',
      emailSubject: 'Technical Support Issue',
      emailBody: 'We are currently investigating the reported system is...',
      time: '9:15 AM',
    },
    {
      letter: 'G',
      emailFrom: 'Grace Tim',
      emailSubject: 'Holiday Schedule Confirmation',
      emailBody: 'Please update the team calendar with your holiday sc...',
      time: 'Yesterday',
    },
    {
      letter: 'H',
      emailFrom: 'Henry Clark',
      emailSubject: 'Office Renovation Updates',
      emailBody: 'The renovation work in the office is scheduled to st...',
      time: '5:30 PM',
    },
    {
      letter: 'I',
      emailFrom: 'Isabel Lewis',
      emailSubject: 'Employee Training Session',
      emailBody: 'A mandatory training session will be held next Tuesd...',
      time: '10:00 AM',
    },
    {
      letter: 'J',
      emailFrom: 'James Walker',
      emailSubject: 'Weekly Performance Metrics',
      emailBody: 'The performance metrics for the week have been sha.....',
      time: '2 days ago',
    },
    {
      letter: 'H',
      emailFrom: 'Hoteling',
      emailSubject: 'Hoteling : Seat has been booked successful...',
      emailBody: 'Hi Sanjana Chauhan, Your seat with below details ha..',
      time: 'Yesterday',
    },
    {
      letter: 'K',
      emailFrom: 'Karen Scott',
      emailSubject: 'New Employee Onboarding',
      emailBody: 'Welcome the new hires and guide them through the or....',
      time: '4:00 PM',
    },
    {
      letter: 'L',
      emailFrom: 'Louis Young',
      emailSubject: 'Security Policy Update',
      emailBody: 'Please ensure compliance with the updated security p...',
      time: 'Yesterday',
    },
    {
      letter: 'M',
      emailFrom: 'Megan Turner',
      emailSubject: 'Office Supplies Request',
      emailBody: 'Submit your office supplies request by the end of t...',
      time: '8:00 AM',
    },
    {
      letter: 'N',
      emailFrom: 'Nathaniel Adams',
      emailSubject: 'IT Maintenance Schedule',
      emailBody: 'There will be scheduled IT maintenance this weekend...',
      time: '7:30 AM',
    },
    {
      letter: 'O',
      emailFrom: 'Olivia Peterson',
      emailSubject: 'Department Restructuring',
      emailBody: 'We will discuss the upcoming changes to department ...',
      time: 'Yesterday',
    },
  ];
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Link href="/about" style={styles.itemText}>
     <View style={{ flexDirection:'row'}}>
      {/* avatar */}
      <View style={{ left:0, flexDirection:'row'}}> 
        <View style={{ backgroundColor: item.emailFrom === "Hoteling" ? '#ea580c':getRandomColor() , width:50 , height:50, borderRadius:50, zIndex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{ zIndex:1 , padding:10, fontSize:16, color:'white'}}>{item.letter}</Text>
        </View>
        <View style={{width: '90%',paddingLeft:5}}>
       {/* emailinfo with time  will be in row*/}
       <View style={{ flexDirection:'row'}}> 
       <Text style={{ color:'black', fontWeight:'bold', width:100}}>{item.emailFrom}</Text>
       <Text style={{fontSize:10, marginLeft:'46%', color:'#0ea5e9'}}>{item.time}</Text>
       </View>

       <Text style={{ color:'black', fontWeight:'bold'}}>{item.emailSubject}</Text>
     
       <Text style={{ fontSize:12, color:'gray'}}>{item.emailBody}</Text>  
       
      </View>
      {/* <View style={{width:50}}> 
        <Text style={{fontSize:10}}>{item.time}</Text>
      </View> */}
     </View>
     </View>
      </Link>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <StatusBar translucent={true} />
      {/* <Text style={styles.text}>Home screen</Text> */}
      <FlatList
        data={emailData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 10,
    marginHorizontal:5
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    // padding: 20,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    width: '100%',
    // alignItems: 'center',
    height:50,
    paddingBottom:10,
  },
  itemText: {
    fontSize: 18,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
