import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCommentDots,faCartShopping} from '@fortawesome/free-solid-svg-icons'; 
const Footer = () => {
  return ( 
    <View style={styles.footer}>
       <View style={{alignItems:'center' ,justifyContent:'center'}}>
            <FontAwesomeIcon icon={faCommentDots} size={16} color="gray" />
            <Text style={styles.likeText}>ถูกใจ (4)</Text>
          </View>
          <View style={{alignItems:'center' ,justifyContent:'center'}}>
            <FontAwesomeIcon icon={faCartShopping} size={16} color="gray" />
            <Text style={styles.likeText}>เพิ่มไปยังรถเข็น</Text>
          </View>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>ซื้อสินค้า</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 100,
    paddingHorizontal: 10,
  },
  chatButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#ff9900',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addToCartText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#ff9900',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buyText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  likeText: {
    marginLeft: 10,
    marginTop:10
  },
});

export default Footer;
