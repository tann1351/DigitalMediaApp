import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft, faCartShopping, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

 
const {width: viewportWidth ,height} = Dimensions.get('window');
const buttonTop = (height / 16); // คำนวณค่า top ตรงกลางของหน้าจอ

const ProductImageSlider = ({productData}: any) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({item}: any) => (
    <View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
      <FontAwesomeIcon icon={faAngleLeft} size={16} color="gray" />
      </TouchableOpacity>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton}>
      <FontAwesomeIcon icon={faShareNodes} size={16} color="gray" />
      </TouchableOpacity>

      {/* Cart Button */}
      <TouchableOpacity style={styles.cartButton}>
      <FontAwesomeIcon icon={faCartShopping} size={16} color="gray" />
      </TouchableOpacity>

      <FastImage
        style={styles.image}
        source={{
          uri: item?.image_url,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={productData?.products?.product_image || []}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={productData?.products?.product_image?.length || 0}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'mediumturquoise',
        }}
        inactiveDotStyle={{
          backgroundColor: 'mediumturquoise',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 300,
    position: 'relative',
  },
  image: {
    width: viewportWidth,
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: buttonTop,
    left: 10,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8, 
  },
  shareButton: {
    position: 'absolute',
    top:buttonTop,
    right: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  cartButton: {
    position: 'absolute',
    top: buttonTop,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingBottom: 10,
  },
});

export default ProductImageSlider;
