import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { Icon, View, Button,Text } from "native-base";
import { Title } from "react-native-paper";
import { connect } from 'react-redux';

 class HeaderHome extends Component {
  constructor(props){
    super(props);
  }
    render() {
      console.log('cart data>>>',this.props.cartdata)
      const navigation = this.props.navigation;
        return (
            <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "stretch",
            paddingBottom: 5

          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center",backgroundColor:"#5EAD19", marginLeft:'5%' }}>
            <Title allowFontScaling={false} style={{color:"#fff"}}>
              {"Book Shop"}
              </Title>

          </View>
          <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
           

            <Button
              transparent
              style={{ paddingHorizontal: 0, paddingLeft: 0 }}
              onPress={() => navigation.navigate("Cart")}>
              <Icon name="cart" style={{  color:"#fff" ,marginRight:'1%' }} />
              <View style={{ ...styles.sidebarIconView, backgroundColor: "red"}}>
              <Text allowFontScaling={false} style={{ color: "#fff", textAlign: "center", fontSize:11, marginTop: "-10%",marginLeft:"10%"}}>{this.props.cartdata.length}</Text>
            </View>
            </Button>
            <Button transparent style={{ paddingLeft: 0, marginLeft:"3%" }} />
          </View>
        </View>

      </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get("window").width,
        marginLeft: Platform.OS === "ios" ? undefined : undefined,
        backgroundColor:"#5EAD19"
      },
      sidebarIconView: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        paddingTop: Platform.OS === "android" ? 4 : 0,
        zIndex: 1,
          marginTop: "-9%",
         alignSelf: "flex-start",
         marginLeft: "-1%"
      },
});
const mapDispatchToProps = dispatch => {
  return {
    removefromcart: data => {
      dispatch(removefromcart(data))
    }
  }
}
const mapStateToProps = state => {
  let data = state.selected.map(item => { return item });
  let addres = state.address ;
  return {
    cartdata: data,
    address: addres
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderHome);