import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

import deriva from './deriva.json';

export default function Derivavid(){
  return(
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie resizeMode='contain' autoSize source={deriva}  autoPlay loop={false}/>
    </SafeAreaView>
  );
}
