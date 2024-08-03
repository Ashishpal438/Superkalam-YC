import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Profile from '../components/Profile';
import Transaction from '../components/Transaction';
import TransactionButton from '../components/TransactionButton';
import Icon from 'react-native-vector-icons/AntDesign';
import {height} from '../utils';
import InputModal from '../components/InputModal';
import Card from '../components/Card';
import {cards} from '../seed/data';
import HeadingText from '../components/HeadingText';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../store/transactionSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {transactions, status} = useSelector(state => state.transactions);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleBottomSheet = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <ScrollView style={{flex: 1, padding: 20}}>
      <Profile />
      <HeadingText text={'Account'} />
      <View
        style={{
          gap: 20,
          marginVertical: 20,
        }}>
        {cards && (
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={cards}
            ItemSeparatorComponent={() => <View style={{marginLeft: 20}} />}
            renderItem={({item}) => {
              return (
                <Card
                  color={item.color}
                  logo={item.logo}
                  company={item.company}
                  balance={item.balance}
                  accountNumber={item.accountNumber}
                  currency={item.currency}
                  valid={item.valid}
                />
              );
            }}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
      {/* Mid Section */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TransactionButton type={'Request'} />
        <TransactionButton
          type={'Transfer'}
          onPress={() => setModalVisible(!modalVisible)}
        />
        <Icon name={'pluscircle'} size={50} color={'black'} />
      </View>
      {/* Transactions */}
      <View>
        {/* Heading */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <HeadingText text={'Transaction'} />
          <Text>View all</Text>
        </View>
        <Text>TODAY</Text>
        <ScrollView style={{flex: 1, marginBottom: 50}}>
          {transactions ? (
            transactions.map((transaction, index) => {
              return (
                <View key={index}>
                  <Transaction
                    destination={transaction.destination}
                    amount={transaction.amount}
                    time={transaction.time}
                    type={transaction.type}
                  />
                </View>
              );
            })
          ) : (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        </ScrollView>
      </View>
      {modalVisible && <InputModal onClose={toggleBottomSheet} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    height: height,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeScreen;
