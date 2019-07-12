import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';

// import New from '~/pages/New';
// import Top from '~/pages/Top';

const Routes = createAppContainer(createSwitchNavigator({ Main }));

export default Routes;
