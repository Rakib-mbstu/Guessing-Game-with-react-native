import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameover] = useState(true);
  const [guessesRounds, setGuessesRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
  // })

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameover(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameover(true);
    setGuessesRounds(numberOfRounds)
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessesRounds(0);
  }


  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOver={gameOverHandler} />
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      rounds={guessesRounds}
      onStartNewGame={startNewGameHandler} />
  }


  return (

    <LinearGradient colors={[Colors.primary700, Colors.accentColor]} style={styles.rootContainer}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.25,
  }
});
