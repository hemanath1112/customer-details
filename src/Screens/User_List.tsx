import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Switch,
} from "react-native";

import UserDetails from "./User_Details";

type ItemProps = {
  name: {
    first: string;
  };
  number: number;
  id: number;
  email: string;
};


const UserList = ({ navigation }) => {
  const [data, setData] = useState<ItemProps[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [switchItem, setSwitchItem] = useState<string>("female");
  const [switchValue, setSwitchValue] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event: { nativeEvent: { text: any } }) => {
          filterData(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  const toggleSwitch = () => {
    setSwitchValue((previousState) => !previousState);
    setSwitchItem((prevItem) => (prevItem === "female" ? "male" : "female"));
    setCurrentPage(0);
    setData([]);
  };

  const fetchData = () => {
    axios
      .get(
        `https://randomuser.me/api/?page=${currentPage}&results=20&gender=${switchItem}`
      )
      .then((response) => {
        setTimeout(() => {
          return setData((prevData) => [...prevData, ...response.data.results]);
        },1000);
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const filterData = (searchItem: string) => {
    setData((prevData) =>
      prevData.filter((items) =>
        items.name.first.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setCurrentPage(0);
    setData([]);
    fetchData();
  };

  const renderItem = ({ item }: { item: ItemProps }) => {
    return <UserDetails item={item} />;
  };

  const Loader = () => {
    return refreshing ? null : (
      <View style={styles.Loader}>
        <Text style={styles.LoadingText}>Loading..</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };
  
  const emptyComponent= () => {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.LoadingText}>Loading..</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };

  const EndPage: React.FC = () => {
    return (
      <View>
        <Text style={styles.endofPage}>End of the Page</Text>
      </View>
    );
  };

  const LoadMoreItem = () => {
    if (currentPage < 10) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.Toggle}>
        <Text style={styles.GenderSelection}>Gender</Text>
        <View style={styles.Selection}>
          <Text style={styles.Color}>Female</Text>
          <Switch onChange={toggleSwitch} value={switchValue} />
          <Text style={styles.Color}>Male</Text>
        </View>
      </View>
      <View style={styles.LoadingItem}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListEmptyComponent={emptyComponent}
          ListFooterComponent={  currentPage === 10
            ? EndPage
            : data.length
            ? Loader
            : refreshing
            ? Loader
            : null}
          onEndReached={LoadMoreItem}
          onEndReachedThreshold={0}
        />
      </View>
    </SafeAreaView>
  );
};

export default UserList;

const styles = StyleSheet.create({
  Selection: {
    flexDirection: "row",
    justifyContent: "center",
    color: "white",
    marginBottom: 10,
  },
  Color: {
    color: "white",
    fontSize: 16,
  },
  Toggle: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#e67e22",
  },
  GenderSelection: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  endofPage: {
    marginTop: 10,
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
  },
  NoDatas: {
    textAlign: "center",
    marginTop: 400,
    fontSize: 20,
    fontWeight: "bold",
  },
  Loader: {
    justifyContent:'center',
    alignContent:'center',
    textAlign:'center',
    marginTop:20
  },
  LoadingText:{
    textAlign:'center'
  },
  emptyItem:{
  marginTop:400,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  LoaderItem: {
    marginTop: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  LoadingItem: {
    paddingBottom: 200,
  },
  SWitchItem: {
    textAlign: "center",
  },
});
