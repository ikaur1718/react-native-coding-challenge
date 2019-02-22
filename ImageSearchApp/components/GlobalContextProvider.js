// import React from 'react';
// import PropTypes from 'prop-types';

export const {Consumer, Provider} = React.createContext();


// export class GlobalContextProvider extends React.Component {
//   state = {
//     images: [],
//   }

//   changeImages = (images) => {
//     this.setState({images});
//   }

//   render () {
//     return (
//       <GlobalContext.Provider
//         value={{
//           images: this.state.images,
//           changeImages: this.changeImages,
//         }}
//       >
//         {this.props.children}
//       </GlobalContext.Provider>
//     )
//   }
// }

// export const GlobalContextConsumer = GlobalContext.Consumer;
