import React, { Component, PureComponent } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, SectionList, Image } from 'react-native';

export default class ListScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    getDatasFromApi().then(datas => {
      this.setState({
        data: datas,
      });
    });
  }

  render() {
    if (!this.state.data) {
      return (
        <Text>loading...</Text>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem = { ({item}) => this._renderItem(item) }
          />
        </View>
      );
    }
  }

  _renderItem(item) {
    return (
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: item.picSmall }} />

        <View style={styles.txtBlk}>
          <Text 
            style={styles.title}
            numberOfLines = {1}>
            {item.name}
          </Text>
          <Text 
            numberOfLines = {1}
            style={styles.desc}>
            {item.description}
          </Text>
        </View>

      </View>
    );
  }

}

async function getDatasFromApi() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch('http://www.imooc.com/api/teacher?type=4&num=30');
    let responseJson = await response.json();
    return responseJson.data;
  } catch(error) {
    console.error(error);
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingLeft: 10,
  },

  item: {
    flexDirection: 'row',
    paddingTop: 10,
    fontSize: 18,
    height: 65,
  },

  image: {
    width: 100,
    height: 55,
  },

  txtBlk: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },

  title: {
    fontSize: 15,
    flex: 1,
  },

  desc: {
    fontSize: 14,
    flex: 1,
  },

});