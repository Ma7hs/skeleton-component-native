import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Skeleton } from '@rneui/themed';
import LinearGradient from 'react-native-web-linear-gradient'

export default function App() {  

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#EDF3F6', width: 300, height: 120, justifyContent: 'center', borderRadius: 15}}>
        <View style={{width: 300, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <View style={{gap: 5}}>
            <Skeleton style={{width: 130, height: 7, marginBottom: 12}} animation='wave' LinearGradientComponent={LinearGradient}/>
           <View style={{gap: 5}}>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
           </View>
          </View>
          <View>
            <Skeleton style={{width: 50, height: 50}} animation='wave' LinearGradientComponent={LinearGradient}/>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#EDF3F6', width: 300, height: 120, justifyContent: 'center', borderRadius: 15}}>
        <View style={{width: 300, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <View style={{gap: 5}}>
            <Skeleton style={{width: 130, height: 7, marginBottom: 12}} animation='wave' LinearGradientComponent={LinearGradient}/>
           <View style={{gap: 5}}>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
           </View>
          </View>
          <View>
            <Skeleton style={{width: 50, height: 50}} animation='wave' LinearGradientComponent={LinearGradient}/>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#EDF3F6', width: 300, height: 120, justifyContent: 'center', borderRadius: 15}}>
        <View style={{width: 300, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <View style={{gap: 5}}>
            <Skeleton style={{width: 130, height: 7, marginBottom: 12}} animation='wave' LinearGradientComponent={LinearGradient}/>
           <View style={{gap: 5}}>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
           </View>
          </View>
          <View>
            <Skeleton style={{width: 50, height: 50}} animation='wave' LinearGradientComponent={LinearGradient}/>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: '#EDF3F6', width: 300, height: 120, justifyContent: 'center', borderRadius: 15}}>
        <View style={{width: 300, height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <View style={{gap: 5}}>
            <Skeleton style={{width: 130, height: 7, marginBottom: 12}} animation='wave' LinearGradientComponent={LinearGradient}/>
           <View style={{gap: 5}}>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
              <Skeleton style={{width: 170, height: 4}} animation='wave' LinearGradientComponent={LinearGradient}/>
           </View>
          </View>
          <View>
            <Skeleton style={{width: 50, height: 50}} animation='wave' LinearGradientComponent={LinearGradient}/>
          </View>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
});
