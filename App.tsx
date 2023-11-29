import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import Child from "./Component/Child";
import api from "./Api/api";

function App(): JSX.Element {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [curentPage, setCurentPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [curentPage]);

  const fetchData = () => {
    axios
      .get(`https://randomuser.me/api/?page=${curentPage}&results=20`)
      .then((response) => {
        setTimeout(() => {
          setData([...data, ...response.data.results]);
          setRefreshing(false);
        }, 3000);
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setRefreshing(false);
      });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setCurentPage(0);
    setData([]);
    fetchData();
  };

  const emptyRefresh = () => {
    return <Text style={styles.NoDatas}>No Userdatas</Text>;
  };

  const renderItem = ({ item }: { item: ItemProps }) => {
    return <Child item={item} />;
  };

  const Loader = () => {
    return (
      <View style={styles.Loader}>
        <Text>Loading..</Text>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  };
  const EndPage = () => {
    return (
      <View>
        <Text style={styles.endofPage}>End of the Page</Text>
      </View>
    );
  };
  const LoadMoreItem = () => {
    if (curentPage < 10) {
      setCurentPage(curentPage + 1);
    }
  };

  type ItemProps = {
    name: string;
    number: number;
    id: number;
    email: string;
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.HeaderContent}>
        <Text style={styles.Title}>Contact List</Text>
        <Text style={styles.Title}>CurentPage: {curentPage}</Text>
      </View>
      <View style={styles.contactList}>
        {refreshing ? (
          <View style={styles.LoaderItem}>
            <Text>Loading..</Text>
            <ActivityIndicator size="large" color="red" />
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.email}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            ListFooterComponent={curentPage == 10 ? EndPage : Loader}
            onEndReached={LoadMoreItem}
            onEndReachedThreshold={0}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
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
  contactList: {
    paddingBottom: 150,
  },
  LoaderItem:{
    marginVertical: 16,
    alignItems: "center",
    marginTop:400,
  },
  Loader: {
    marginVertical: 16,
    alignItems: "center",
    marginTop:400
  },
  HeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});

export default App;
