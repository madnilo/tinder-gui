import { 
    createSwitchNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import AuthScreen from './AuthScreen';
import DeckScreen from './DeckScreen';
import LikesScreen from './LikesScreen';

const MainRoute = createBottomTabNavigator({
    deck: DeckScreen,
    likes: LikesScreen,
},{
    initialRouteName: 'deck',
    swipeEnabled: false,
    animationEnabled: false,
});
const Routes = createSwitchNavigator({
    auth: AuthScreen,
    main: MainRoute,
},
{
    initialRouteName: 'auth',
    swipeEnabled: false,
    animationEnabled: false,
});


export default Routes;