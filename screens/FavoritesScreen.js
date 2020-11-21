import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoriteScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            return navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
