import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps79001Navigator from '../features/Maps79001/navigator';
import Add-Item79000Navigator from '../features/Add-Item79000/navigator';
import Maps78996Navigator from '../features/Maps78996/navigator';
import UserProfile78992Navigator from '../features/UserProfile78992/navigator';
import Add-Item8878948Navigator from '../features/Add-Item8878948/navigator';
import CalendarView8978947Navigator from '../features/CalendarView8978947/navigator';
import ArticleList78494Navigator from '../features/ArticleList78494/navigator';
import ArticleList78493Navigator from '../features/ArticleList78493/navigator';
import ArticleList78492Navigator from '../features/ArticleList78492/navigator';
import Maps78446Navigator from '../features/Maps78446/navigator';
import Add-Item78445Navigator from '../features/Add-Item78445/navigator';
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
Maps79001: { screen: Maps79001Navigator },
Add-Item79000: { screen: Add-Item79000Navigator },
Maps78996: { screen: Maps78996Navigator },
UserProfile78992: { screen: UserProfile78992Navigator },
Add-Item8878948: { screen: Add-Item8878948Navigator },
CalendarView8978947: { screen: CalendarView8978947Navigator },
ArticleList78494: { screen: ArticleList78494Navigator },
ArticleList78493: { screen: ArticleList78493Navigator },
ArticleList78492: { screen: ArticleList78492Navigator },
Maps78446: { screen: Maps78446Navigator },
Add-Item78445: { screen: Add-Item78445Navigator },
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
