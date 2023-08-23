import React from "react";

import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity
} from "react-native";
import {COLORS} from "../theme/theme";

const AddButton = ({opened, toggleOpened}) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 350,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Register Item */}
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -80],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -40],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../assets/register.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
            {/* Add Item*/}
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -31],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -90],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../assets/add.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
            {/* Pending */}
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 90],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -40],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../assets/pending.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
            {/* Authenticate */}
        <TouchableWithoutFeedback>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 41],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -90],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../assets/authenticate.png")}
              resizeMode="contain"
              style={styles.itemIcon}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
            {/* Main button */}
        <TouchableOpacity
          onPress={toggleOpened}
          style={styles.addButton}>
          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              },
            ]}>
            <Image
              source={require("../../assets/xdeal.png")}
              resizeMode="contain"
              style={styles.addButtonIcon}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 0,
  },
  box: {
    position: "relative",
    width: 60,
    height: 60,
    marginTop: -30,
  },
  addButton: {
    shadowColor: COLORS.dark,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
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
    tintColor: COLORS.gold,
  },
  item: {
    position: "absolute",
    top: 5,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gold,
    elevation: 5,
  },
});

export default AddButton;
