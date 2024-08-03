import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={styles.header}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profilePicture}
          source={{
            uri: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View>
          <Text>Welcome back,</Text>
          <Text style={{color: 'black'}}>Sarah Muller</Text>
        </View>
      </View>
      <View style={styles.notification}>
        <Icon name={'notifications-outline'} size={20} color={'black'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 50,
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  notification: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    justifySelf: 'flex-end',
  },
});

export default Profile;
