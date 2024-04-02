import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStore, faStar, faHeart} from '@fortawesome/free-solid-svg-icons';
import {ProductService} from '../../services/index';
import ProductImageSlider from '../../components/ProductImageSlider';
import Footer from './Footer'

interface ProductProp {
  products: Product; 
}

interface Product {
  service_start_day: string; 
  service_expired_day: string;
  store_id: number;
  product_id: number;
  product_type: "Product" | "Service";
  product_title: string;
  product_sku: string;
  product_sold: number;
  product_views: number;
  product_slug: string;
  product_detail: string;
  product_thumbnail_image_url: string | null;
  product_vdo: string;
  product_percentage_discount: number;
  product_normal_price: number;
  product_discounted_price: number;
  product_score: number;
  product_quantity: number;
  product_stock: number;
  product_best_seller: number;
  favorite: number;
  product_tax_invoice_option: number;
  product_warranty_option: number;
  product_warranty_period_option: number;
  product_refund_warranty_condition: string;
  service_type: string | null;
  service_booking_day: number;
  service_cancel_day: number;
  product_image: ProductImage[];
  product_option: ProductOption[];
  coupon_in_product: any[];
}

interface ProductImage {
  sort: number;
  image_url: string;
}

interface ProductOption {
  option_id: number;
  option_title: string;
  option_name: string;
  option_sku: string;
  option_stock: number;
  option_price: number;
  option_discount: number;
  option_image: string | null;
  product_option_sort: number;
  option_child: ProductOptionChild[];
}

interface ProductOptionChild {
  option_id: number;
  option_title: string;
  option_name: string;
  option_sku: string;
  option_stock: number;
  option_price: number;
  option_discount: number;
  option_image: string | null;
  product_option_sort: number;
}

 

const UiScreen = () => {
  const [productData, setProductData] = useState<ProductProp>();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await ProductService.getProduct(98);
      setProductData(response.data);
    };

    fetchProduct();
  }, []);



  return (
    <>
    <ScrollView style={styles.container}>
      <ProductImageSlider productData={productData} />

      <View style={styles.contentContainer}>
        {/* Product Name */}
        <Text style={styles.productName}>
          {productData?.products?.product_title}
        </Text>

        {/* Rating, Sold, and Like Row */}
        <View style={styles.ratingLikeRow}>
          {/* Rating and Sold Section */}
          <View style={styles.ratingSoldContainer}>
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                size={16}
                color="gold"
              />
            ))}
            <Text style={styles.ratingText}>5.0</Text>
            <Text style={styles.soldText}>
              ขายแล้ว <Text style={styles.soldText__number}>{productData?.products?.product_sold}</Text>
            </Text>
          </View>

          {/* Like Section */}
          <View style={styles.likeContainer}>
            <FontAwesomeIcon icon={faHeart} size={16} color="red" />
            <Text style={styles.likeText}>ถูกใจ (4)</Text>
          </View>
        </View>

        {/* Price Section */}
        <View style={styles.priceContainer}>
          <Text style={styles.actualPrice}>
            ฿{productData?.products?.product_discounted_price}
          </Text>
          <Text style={styles.originalPrice}>
            ฿{productData?.products?.product_normal_price}
          </Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{productData?.products?.product_percentage_discount}%</Text>
          </View>
        </View>

        {/* Coupon Section */}
        <View style={styles.couponCon}>
          <Text style={styles.soldText}>คูปองส่วนลด</Text>
        </View>
        <View style={styles.couponContainer}>
          <Text style={styles.couponText}>ส่วนลด</Text>
        </View>

        {/* Product Options */}
        <View style={styles.couponCon}>
          <Text style={styles.soldText}>กลิ่น : มะลิ</Text>
        </View>
        <View style={styles.optionsContainer}>
          {productData?.products?.product_option?.map((_, index) => (
            <Image
              key={index}
              style={styles.optionImage}
              source={{
                uri: 'https://uatseller.petsploy.com/uploads/member/24/store/product/e203ecc0cf1fe2548493ff42ad3500fb.webp',
              }}
            />
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Store Info */}
        <View style={styles.storeInfoContainer}>
          <Image
            style={styles.storeLogo}
            source={{
              uri: 'https://uatseller.petsploy.com/uploads/member/24/store/product/e203ecc0cf1fe2548493ff42ad3500fb.webp',
            }}
          />
          <View style={styles.storeTextContainer}>
            <Text style={styles.storeName}>Jomo Feed Happiness</Text>
            <Text style={styles.soldText}>Active 2 ชั่วโมงที่ผ่านมา</Text>
            <View style={styles.ratingSoldContainer}>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  size={16}
                  color="gold"
                />
              ))}
              <Text style={styles.ratingText}>5.0</Text>
              <Text style={styles.soldText}>
                รายการสินค้า <Text style={styles.soldText__number}>{productData?.products?.product_views}</Text>
              </Text>
            </View>
            <Text style={styles.soldText}>
              เริ่มขาย <Text style={styles.soldText__number}>06 ก.พ. 2563</Text>{' '}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 20, width: '100%'}}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon={faStore} size={16} color="gray" />
            </View>
            <Text style={styles.text}>ดูร้านค้า</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

    <Footer/>
    </> );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
  },
  image: {
    width: '100%', 
    height: 300, 
  },
  contentContainer: {
    paddingHorizontal: 20, 
    alignItems: 'flex-start',
    width: '100%', 
  },
  productName: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
  },
  ratingLikeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: '100%', 
    marginTop: 15,
  },
  ratingSoldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  soldText: {
    marginRight: 10,
    color: 'gray',
    fontFamily: 'sans-serif',
  },
  soldText__number: {
    fontWeight: 'bold',
    color: '#000',
  },
  likeText: {
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  actualPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'mediumturquoise',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginLeft: 10,
    fontSize: 16,
    color: 'gray',
  },
  discountBadge: {
    backgroundColor: 'red',
    paddingHorizontal: 5,
    marginLeft: 10,
    padding: 2,
    borderRadius: 4,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  couponCon: {
    marginTop: 15,
  },
  couponContainer: {
    marginTop: 8,
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignSelf: 'flex-start', 
    borderRadius: 5,
  },
  couponText: {
    color: 'white',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 8,
  },
  optionImage: {
    width: 65,
    height: 70,
    borderRadius: 10,
  },
  divider: {
    height: 2,
    backgroundColor: 'lightgray',
    width: '100%',
    opacity: 0.4,
    marginVertical: 20,
  },
  storeInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  storeLogo: {
    width: '20%',
    aspectRatio: 1, 
    borderRadius: 50, 
  },
  storeTextContainer: {
    marginLeft: 20,
    justifyContent: 'space-around',
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  text: {
    fontFamily: 'Sarabun',
    fontSize: 16,
    color: '#333',
  },
});

export default UiScreen;
