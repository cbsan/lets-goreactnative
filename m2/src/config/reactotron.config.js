import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure({ host: 'rctron' })
  .useReactNative()
  .connect();

console.tron = tron;
