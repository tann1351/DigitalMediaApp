import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker,Circle} from 'react-native-maps';

const MapScreen = () => { 
  const shopMarkers = [
    {latitude: 13.737717, longitude: 100.524186, image: require('../../assets/2.LOGO.png')},
    {latitude: 13.735717, longitude: 100.522186, image: require('../../assets/2.LOGO.png')},
  
  ];

  return (
    <>
 <View>
        <MapView
          style={styles.map}
          
          initialRegion={{
            latitude: 13.736717,
            longitude: 100.523186,
            latitudeDelta: 0.0015,
            longitudeDelta: 0.005,
          }}>

       
          <Marker
            coordinate={{latitude: 13.736717, longitude: 100.523186}}
            title={"Main Location"}
            description={"This is the main marker."}
          />
          <Circle
            center={{latitude: 13.736717, longitude: 100.523186}}
            radius={200}
            strokeColor={'#00A2E8'} 
            fillColor={'rgba(135, 206, 235, 0.5)'}
            strokeWidth={1}   
            lineDashPattern={[4, 3]}
        />

      
          {shopMarkers?.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              title={`Shop ${index + 1}`}
              description={"Shop Description"}>
              <View style={styles.marker}>
                <Image source={marker.image} style={styles.image} /> 
              </View>
            </Marker>
          ))}
        </MapView> 
        </View>
    </>
  );
};

const styles = StyleSheet.create({ 
  
  map: {
    height: '100%',  
  },
  marker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default MapScreen;
