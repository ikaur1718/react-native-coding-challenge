/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// import React, {
//   AppRegistry,
//   Component,
//   Navigator
// } from 'react-native';
// import App from './app/App';
// import ViewImages from './app/ViewImages';


// class ImageSearchApp extends Component {
// renderScene (route, navigator) {
//     if (route.name === 'App') {
//       return <App navigator={navigator} {...route.passProps} />
//     }
//     if (route.name === 'ViewImages') {
//       return <ViewImages navigator={navigator} {...route.passProps} />
//     }
//   }
// configureScene (route) {
//   return Navigator.SceneConfigs.FloatFromBottom
// }
// render () {
//     return (
//       <Navigator
//         configureScene={this.configureScene.bind(this)}
//         style={{ flex: 1, backgroundColor: 'white' }}
//         initialRoute={{ name: 'App' }}
//         renderScene={this.renderScene.bind(this)} />
//     )
//   }
// }
// AppRegistry.registerComponent('ImageSearchApp', () => ImageSearchApp);