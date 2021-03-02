import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

//main root
import ProfileScreen from './ProfileScreen';

//submenu in profile screens
import PromoQuestScreen from './PromoQuestScreen';
import SettingScreen from './Setting/SettingScreen';

//subsubmenu in settings
import EditTypeScreen from './Setting/EditTypeScreen';
import EditEmailScreen from './Setting/EditEmailScreen';
import EditNameScreen from './Setting/EditNameScreen';
import EditPhoneScreen from './Setting/EditPhoneScreen';
import EditPinScreen from './Setting/EditPinScreen';

const StackSettings = createStackNavigator(
  {
    Settings: SettingScreen,
    UserType: EditTypeScreen,
    Name: EditNameScreen,
    Email: EditEmailScreen,
    Phone: EditPhoneScreen,
    Pin: EditPinScreen,
  },
  {
    initialRouteName: 'Settings',
    headerMode: 'none',
  },
);

const ProfileRouter = createStackNavigator(
  {
    ProfileScreen,
    Setting: StackSettings,
    Promo: PromoQuestScreen,
  },
  {
    initialRouteName: 'ProfileScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(ProfileRouter);
