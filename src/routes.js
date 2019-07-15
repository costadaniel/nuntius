import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Main from '~/pages/Main';

// import New from '~/pages/New';
// import Top from '~/pages/Top';

const Routes = createAppContainer(createDrawerNavigator({ Main }));

export default Routes;
