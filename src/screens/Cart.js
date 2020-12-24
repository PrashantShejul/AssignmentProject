import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Alert
} from 'react-native';
import { Button, Card, Container, Icon,Badge } from 'native-base';
import { connect } from 'react-redux';
import HeaderCart from '../component/HeaderCart';
import { removefromcart } from '../action/Act_RemoveCart';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartdata: [],
      total: 0
    }
  }

  componentDidMount() {
    this.setState({
      cartdata: this.props.cartdata
    });
  }

  handleRemoveCart=(item)=>{
    var data = item ;
    data.check = true ;
    this.props.removefromcart(data);

  }
  

  render() {
    return (
      <Container>
        <HeaderCart title="Cart" navigation={this.props.navigation} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
         
          <View>
          <Text style={{fontSize:30,marginLeft:'10%', marginTop:'5%'}}>
           {this.props.cartdata.length}  Added</Text>
            {this.props.cartdata.map(item => {
              return (
                <View>
                   
                  <Card style={styles.card}>
                    <View style={{ margin: '2%', display: 'flex', flexDirection: 'row' }}>
                      <View style={styles.marginside, { width: '32%' }}>
                        <Image
                          style={styles.image}
                          source={{
                            uri: item.imgUrl
                          }}
                        />
                      </View>
                      <View style={styles.marginside, { width: '36%' }}>
                        <Text>{item.name}</Text>
                        <Text>{"Author: "}{item.author}</Text>
                        
                      </View>
                      <View></View>

                      <View style={{  display:'flex', flexDirection:'row'}}>
                        
                          <Icon style={{ fontSize: 30 ,marginLeft:'44%' }} name="remove-circle-outline"
                          onPress={() => this.handleRemoveCart(item)}/>
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
};

const mapDispatchToProps = dispatch => {
  return {
    removefromcart: data => {
      dispatch(removefromcart(data))
    }
  }
}

const mapStateToProps = state => {
  let data = state.selected.map(item => { return item });
  return {
    cartdata: data,
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  card: {
    width: '96%',
    marginLeft: '3%'
  },
  image: {
    width: 110,
    height: 160
  },
  marginside: {
    margin: '2%'
  },
  button: {
    margin: '3%',
    backgroundColor: 'cyan'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);