import React from 'react';
// import PropTypes from 'prop-types';


export default Context = React.createContext({
  data:[],
  handleChange: () => {}
});
// const GlobalContext = React.createContext({images:[]});


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
