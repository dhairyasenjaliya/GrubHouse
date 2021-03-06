import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Counter from "react-native-counters";

const DATA = {
  food: [
    {
      id: "1",
      restaurant_name: "Farm Aloo Tikki Burger",
      address: "Aloo patty lovers!! Dive into our hot ao patty served ",
      amount: "£ 2.50",

      image:
        "data:image/jpeg;base64,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"
    },
    {
      id: "2",
      amount: "£ 4.25",

      restaurant_name: "Unique Caterers (7 No. Choraha)",
      address: "Healthy Food, Indian, Sweets, Thalis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMuSCk8JCIohZ8x58llYSqs7Cl5--tXCYnPplwbU6rWpZdszM&s"
    },
    {
      id: "3",
      amount: "£ 4.50",
      restaurant_name: "Burger King",
      address: "American, Fast Food",
      image:
        "https://media.istockphoto.com/photos/healthy-vegan-burger-with-grilled-tofu-cheese-and-vegetables-on-white-picture-id1141364254"
    },
    {
      id: "4",
      amount: "£ 3",
      restaurant_name: "Burger Singh (Big Punjabi Burgers)",
      address: "Snacks, Fast Food, Indian, American",
      image:
        "https://previews.123rf.com/images/warat42/warat421410/warat42141000037/32552840-stir-fried-noodles-on-white-background-chinese-food.jpg"
    },
    {
      id: "5",
      amount: "£ 3.50",
      restaurant_name: "Burger Singh (Big Punjabi Burgers)",
      address: "Snacks, Fast Food, Indian, American",
      image:
        "https://www.colourbox.com/preview/1992085-healthy-breakfast-corn-flakes-and-berries-in-bowl-isolated-on-white-background.jpg"
    }
  ]
};

const BASE_URL = "https://www.grubhouse.co.uk/upload/";
export default class dishScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
      cuisine: []
    };
  }
  componentDidMount(){
    console.log(this.props.navigation.state.params.searchResult.cuisine, "in dishscreen")
  }
  onChange(number, type) {
    console.log(number, type); // 1, + or -
  }
  render() {
    return (
      // background container
      <View style={styles.bgContainer}>
        {/* flatlist */}
        <View style={styles.flatlist}>
          <FlatList
            // horizontal
            showsVerticalScrollIndicator={false}
            data={this.props.navigation.state.params.searchResult.cuisine}
            renderItem={({ item: d }) => (
              <TouchableWithoutFeedback style={styles.horizontalFlatlist}>
                {/* image container */}
                <View style={styles.imageContainer}>
                  <View>
                    <Image source={{ uri: BASE_URL+d.featured_image }} style={styles.image} />
                  </View>
                  {/* restaurant container */}
                  <View style={styles.restaurantContainer}>
                    <View
                      style={{ flexDirection: "row", justifyContent: "center" }}
                    >
                      <View>
                        <Text style={styles.nameText} numberOfLines={1}>
                          {d.cuisine_name}
                        </Text>
                        {/* <Text>{d.amount}</Text> */}
                      </View>
                      <View>
                        <Counter
                          start={0}
                          onChange={this.onChange.bind(this)}
                        />
                      </View>
                    </View>
{/* 
                    <Text style={styles.addressText} numberOfLines={2}>
                      {d.address}
                    </Text> */}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    backgroundColor: "#fff"
  },
  horizontalFlatlist: {
    borderBottomWidth: 0.5,
    borderBottomColor: "gray"
    // flexDirection: "column",
    // justifyContent: "flex-start"
  },
  image: {
    height: 90,
    width: 90,
    resizeMode: "cover",
    margin: 10,
    borderRadius: 5
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10
  },
  nameText: {
    fontSize: 14,
    fontWeight: "bold",
    width: 160,
    marginVertical: 4
  },
  addressText: {
    fontSize: 14,
    color: "gray",
    width: 220
  },
  restaurantContainer: {
    justifyContent: "center"
  },
  addContainer: {
    borderColor: "gray",
    borderWidth: 1,
    height: 30,
    width: 60,
    alignItems: "center",
    marginHorizontal: 5
  },
  addText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 3
  }
});
