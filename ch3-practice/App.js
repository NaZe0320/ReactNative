import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = (props) => {
  console.log("props of Header", props);
  return <Text>{props.title}</Text>;
};
const MyProfile = () => {
  return <Profile
    name="나제"
    uri="https://pbs.twimg.com/media/E2aFYlXVkAEQ0v5.jpg:large"
    profileSize={30}/>;
};
const Division = () => {
  return <Text>Division</Text>;
};
const FriendSection = () => {
  return <Text>FriendSection</Text>;
};

const Profile = (props) => {
  return (
    <View style={{flexDirection: "row"}}>
      <Image source={{
        uri: props.uri
        }}
        style = {{
          width:props.profileSize,
          height:props.profileSize,
        }} />
      <Text>{props.name}</Text>
    </View>
  )
};

// class Profile extends React.Component {
//   render() {
//     <View style={{flexDirection: "row"}}>
//     <Image source={{
//       uri: props.uri
//       }}
//       style = {{
//         width:props.profileSize,
//         height:props.profileSize,
//       }} />
//     <Text>{props.name}</Text>
//   </View>
//   }
// }

const FriendList = () => {
  return (
    <View>
      <Profile name="민호" profileSize={20}/>
      <Profile name="지연" profileSize={20}/>
      <Profile name="예지" profileSize={20}/>
      <Profile name="지연" profileSize={20}/>
      <Profile name="세인" profileSize={20}/>
      <Profile name="유림" profileSize={20}/>
      <Profile name="지현" profileSize={20}/>
      <Profile name="현서" profileSize={20}/>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});