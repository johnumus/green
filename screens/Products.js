import React from 'react';
import {StyleSheet,View,Text,Image,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {ViewBlock} from '../components';

const {width, height} = Dimensions.get('window');



export const Products = () => {
  const renderHeader = () => (
    <ViewBlock flex={1} > 
      <TouchableOpacity>
        <Ionicons name="md-menu" size={40} color="#BFAC5C" 
          style={{marginTop: 55, marginLeft: 35}}
        />
      </TouchableOpacity>
      <ViewBlock row justify='space-between' >
        <ViewBlock>
          <Text style={styles.headerGreeting}>
            Super Leaf{'\n'}
            Powder
          </Text>
          <Text style={styles.headerText}>
            Order your own raw{'\n'}
            superfood packed with nutrients
          </Text>
        </ViewBlock>
        <Image
          style={styles.headerImage}
          source={require('../assets/images/murungai-leaf-powder.png')}
        />
      </ViewBlock>
    </ViewBlock>
  );

  const renderProducts = () => {
    const products = [
      {
        thumb: require('../assets/images/what_leaf.png'),
        name: 'Green\nOat Ear',
        price: '3.50',
      },
      {
        thumb: require('../assets/images/banana_leaf.png'),
        name: 'Banana\nTree',
        price: '4.75',
      },
      {
        thumb: require('../assets/images/olive_branch.png'),
        name: 'Olive\nBranch',
        price: '5.25',
      },
    ];

    return (
      <ViewBlock flex={1} row justify='space-around' align='center'
        style={{marginLeft: 35}}
      >
        {products.map((product, idx) => (
          <ViewBlock key={idx}>
            <Image
              style={styles.productThumb}
              source={product.thumb}
            />
            <View style={styles.productBackground} >
              <Text style={styles.productName} >
                {product.name}
              </Text>
              <Text style={styles.productPrice} >
                $ {product.price}
              </Text>
            </View>
            <View style={styles.productBtnBlock}>
              <TouchableOpacity style={styles.productBtn}>
                <Text style={styles.productPlusSign}>+</Text>
              </TouchableOpacity>
            </View>
          </ViewBlock>
        ))}
      </ViewBlock>
    );
  };

  const renderSpecialMix = () => {
    const specialMix = {
      thumb: require('../assets/images/powder_pack.png'),
      name: 'Special Mix',
      desc: 'This powder is high in protein amino acids.',
      price: '3.50'
    };

    return (
      <ViewBlock flex={0.55} row 
        style={styles.mixBlock}
      >
        <ViewBlock flex={1}>
          <Image
            style={styles.mixThumb}
            source={specialMix.thumb}
          />
          <View style={styles.mixBackground} />
        </ViewBlock>
        {/* == Description block == */}
        <ViewBlock flex={2}>
          <Text style={[styles.mixTitle]} >
            {specialMix.name}
          </Text>
          <Text style={[styles.mixDesc]} >
            {specialMix.desc}
          </Text>
        </ViewBlock>
        {/* == Price block == */}
        <ViewBlock flex={1} justify='space-between' align='center' >
          <Text style={styles.mixPrice} >
            $ {specialMix.price}
          </Text>
          <TouchableOpacity style={[styles.productBtn, styles.mixButton]}>
            <Text style={styles.productPlusSign}>+</Text>
          </TouchableOpacity>
        </ViewBlock>
      </ViewBlock>
    );
  };


  return (
    <View style={styles.wrapper}>
      {renderHeader()}
      {renderProducts()}
      {renderSpecialMix()}
    </View>
  );
};

Products.navigationOptions = {
  header: null
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  // Header ---------------------------
  headerGreeting: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 30,
    marginTop: 15,
    marginLeft: 35,
  },
  headerText: {
    color: '#b0b099',
    fontSize: 15.5,
    marginTop: 15,
    marginLeft: 35
  },
  headerImage: {
    width: 150, height: 150,
    resizeMode: 'contain',
    marginRight: -15,
    // position: 'absolute',
    // right: 0,
  },

  // Products ---------------------------
  productThumb: {
    width: 75,
    height: 140,
    resizeMode: 'contain',
    position: 'absolute',
    top: -35,
    left: 30,
    zIndex: 1,
  },
  productBackground: {
    borderRadius: 1,
    width: 90,
    height: 180,
    backgroundColor: '#f1f1e4',
    borderRadius: 35,
    justifyContent: 'flex-end',
  },
  productName: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 16.5,
    marginLeft: 15,
    marginBottom: 5,
  },
  productPrice: {
    color: '#BFAC5C',
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 15
  },
  // Product Button
  productBtnBlock: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  productBtn: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productPlusSign: {
    color: '#BFAC5C',
    fontWeight: 'bold',
  },

  // Special Mix ------------------------------------------------------------
  mixBlock: {
    marginLeft: 35,
    borderTopColor: '#eee',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  // Special Mix__Pack
  mixThumb: {
    width: 45,
    height: 90,
    resizeMode: 'contain',
  },
  mixBackground: {
    width: 60,
    height: 60,
    backgroundColor: '#f1f1e4',
    borderRadius: 50,
    position: 'absolute',
    zIndex: -1,
    top: 30,
    left: 5,
  },
  // Special Mix__Description
  mixTitle: {
    fontFamily: 'inria-serif-regular',
    color: '#546a46',
    fontSize: 17,
  },
  mixDesc: {
    color: '#b0b099',
    fontSize: 15.5,
  },
  // Special Mix__Price
  mixPrice: {
    color: '#BFAC5C',
    fontSize: 14,
    marginBottom: 5,
  },
  mixButton: {
    borderWidth: 1,
    borderColor: '#BFAC5C',
    marginTop: 10,
  }
});
