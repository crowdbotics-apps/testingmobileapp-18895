import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps78441Navigator from '../features/Maps78441/navigator';
import UserProfile78437Navigator from '../features/UserProfile78437/navigator';
import ArticleList78398Navigator from '../features/ArticleList78398/navigator';
import ArticleList78397Navigator from '../features/ArticleList78397/navigator';
import ArticleList78396Navigator from '../features/ArticleList78396/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps78441: { screen: Maps78441Navigator },
UserProfile78437: { screen: UserProfile78437Navigator },
ArticleList78398: { screen: ArticleList78398Navigator },
ArticleList78397: { screen: ArticleList78397Navigator },
ArticleList78396: { screen: ArticleList78396Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
