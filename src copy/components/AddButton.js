

// import React, { Component } from 'react';
// import 
// { Animated, 
//   Easing, 
//   StyleSheet, 
//   View, 
//   TouchableOpacity, 
//   toggleOpened, 
//   Image
// } from 'react-native';

// const Dim = 60;
// const goldColor = 'rgb(255, 215, 0)'; // Gold color

// export default class Loader5 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.animation = new Animated.Value(0);
//   }

//   componentDidMount = () => {
//     Animated.loop(
//       Animated.timing(this.animation, {
//         toValue: 1,
//         duration: 3000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();
//   };

//   render() {
//     const angleInterpolations = Array.from({ length: 36 }, (_, index) =>
//       this.animation.interpolate({
//         inputRange: [0, 0.5, 1],
//         outputRange: ['0deg', `${index * 5 + 250}deg`, '360deg'],
//       })
//     );

//     const outerAngle = this.animation.interpolate({
//       inputRange: [0, 1],
//       outputRange: ['0deg', '720deg'],
//     });

//     return (
//       <View style={styles.container}>
        
//         <Animated.View
//           style={{
//             width: Dim,
//             height: Dim,
//             transform: [{ rotate: outerAngle }],
//           }}
//         >
//           {angleInterpolations.map((angle, index) => (
            
//             <Animated.View
//               key={index}
//               style={{
//                 ...styles.item,
//                 transform: [{ rotate: angle }],
//               }}
//             >
              
//               <Animated.View
//                 style={{
//                   ...styles.innerItem,
//                   backgroundColor: goldColor,
//                   opacity: this.animation.interpolate({
//                     inputRange: [0, 0.5, 1],
//                     outputRange: [0, 1, 1],
//                   }),
//                 }}
//               ></Animated.View>
              
//             </Animated.View>
//           ))}
//         </Animated.View>
//       </View>
//     );
//   }
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     width: Dim,
//     height: Dim,
//     borderWidth: 0,
//     backgroundColor: 'transparent',
//     position: 'absolute',
//     justifyContent: 'center',
//   },
//   innerItem: {
//     height: 5,
//     width: 5,
//     borderRadius: 10,
//   },
//   addButton: {
//     shadowColor: COLORS.dark,
//     shadowOpacity: 0.3,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//   },
// });

import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, View, TouchableOpacity, Image, toggleOpened } from 'react-native';
import {COLORS} from "../theme/theme";

const Dim = 70;
const goldColor = 'rgb(206,174,123)'; // Gold color

export default class Loader5 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.animation = new Animated.Value(0);
  }

  componentDidMount = () => {
    Animated.loop(
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  render() {
    const angleInterpolations = Array.from({ length: 50 }, (_, index) =>
      this.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0deg', `${index * 3 + 250}deg`, '360deg'],
      })
    );

    const outerAngle = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleOpened} style={styles.addButton}>
          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: this.animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require('../../assets/xdeal.png')}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
          </Animated.View>
        </TouchableOpacity>
        <Animated.View
          style={{
            width: Dim,
            height: Dim,
            transform: [{ rotate: outerAngle }],
          }}>
          {angleInterpolations.map((angle, index) => (
            <Animated.View
              key={index}
              style={{
                ...styles.item,
                transform: [{ rotate: angle }],
              }}>
              <Animated.View
                style={{
                  ...styles.innerItem,
                  backgroundColor: goldColor,
                  opacity: this.animation.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 1, 1],
                  }),
                }}
              ></Animated.View>
            </Animated.View>
          ))}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  box: {
    position: "relative",
    width: 60,
    height: 60,
    marginTop: -30,
  },
  item: {
    width: Dim,
    height: Dim,
    borderWidth: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
    top:0,
    borderWidth: 0.5,
    borderColor: 'red'
  },
  innerItem: {
    height: 3.5,
    width: 3.5,
    borderRadius: 10,
  },
  addButton: {
    shadowColor: COLORS.dark,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: 'absolute', // Position the button at the bottom
    bottom: 0, // Adjust the desired distance from the bottom
    zIndex: 0, // Ensure the button is above other content
  },
  // addButtonInner: {
  //   backgroundColor: 'white',
  //   padding: 10,
  //   borderRadius: 50,
  // },
  addButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    width: 70,
    height: 70,
    borderRadius: 40,
    elevation: 5,
  },
  addButtonIcon: {
    width: 40,
    height: 40,
  },
});
