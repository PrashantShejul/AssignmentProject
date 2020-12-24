import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Alert
  } from 'react-native';
import { connect } from 'react-redux';
import HeaderHome from '../component/HeaderHome';
import { Card, Container,Icon } from 'native-base';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';
import { addtocart } from '../action/Act_AddToCart';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

  handleAddToCart = (item) => {
   
      var data = item ;
      data.check = true ;
      this.props.addtocart(data);
      Alert.alert(
        "Attention",
        "Book Added To Cart",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    
  }
  
    render() {
        return (
          <Container>
            <HeaderHome navigation={this.props.navigation}/>
            <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            {this.props.bookdata.map( item => {
              return(
                <View>
                <Card style={styles.card}>
                  <View style={{ margin:'2%', display:'flex', flexDirection:'row'}}>
                    <View style={styles.marginside,{ width:'35%'}}>
                      <Image
                      style={styles.image}
                      source={{
                        uri: item.imgUrl
                      }} 
                      />
                    </View>
                    <View style={styles.marginside,{ width:'55%'}}>
                    <Text>{item.name}</Text>
                    <Text>{"Author: "}{item.author}</Text>
                    </View>
                    <View >
                      <View style={{  display:'flex', flexDirection:'row'}}>
                        
                          <Icon style={{ fontSize: 30 }} name="add-circle" 
                          onPress={() => this.handleAddToCart(item)}
                          />
                      </View>
                    </View>
                  </View>
                </Card>
                </View>
              )
            })}
          </View>
        </ScrollView>
        </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addtocart: data => {
        dispatch(addtocart(data))
      }
    }
}

const mapStateToProps = (state) => {
    return {
        bookdata: state.bookdata
    }
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    card: {
      width: '94%',
      marginLeft: '3%'
    },
    image: {
      width:110,
      height:160
    },
    marginside: {
      margin:'2%'
    },
    button: {
      margin:'3%',
      backgroundColor:'cyan'
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);