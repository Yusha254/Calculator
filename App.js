import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, Switch, ImageBackground } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [darkMode, setDarkMode] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(require("./assets/jana-fuxen-0FjKt-EFDsU-unsplash.jpg"));

  const handlePress = (value) => {
    setDisplay(display === '0' ? value : display + value);
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  const calculate = () => {
    // Ensure the display is not empty
  if (display.trim() === '') return;

  let result;
  try {
    // Use JavaScript's eval() function to evaluate the expression
    result = eval(display);
    // Check if the result is finite and not NaN
    if (isFinite(result) && !isNaN(result)) {
      // Update the display with the result
      setDisplay(result.toString());
    } else {
      // If the result is not valid, display an error message
      setDisplay('Error');
    }
  } catch (error) {
    // If there's an error during evaluation, display an error message
    setDisplay('Error');
  }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setBackgroundImage(darkMode ? require("./assets/jana-fuxen-0FjKt-EFDsU-unsplash.jpg") : require("./assets/dorrell-tibbs-kaVsb98T4qU-unsplash.jpg"));
  };

  return (
    <ImageBackground
      source = {backgroundImage} 
      style={[styles.container, darkMode ? styles.darkModeContainer : null]}
    >
      <View style={styles.topSection}>
        <Switch
          style={styles.darkModeToggle}
          trackColor={{ false: '#fff', true: '#000' }}
          value={darkMode}
          onValueChange={toggleDarkMode}
        />
        <Text style={[styles.display, darkMode ? styles.darkModeText : null]}>{display}</Text>
      </View>
      <View style={[styles.bottomSection, darkMode ? styles.darkModeBackground : null]}>
        <View style={[styles.row, styles.rowContainer]}>
          <TouchableOpacity onPress={() => clearDisplay()} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText : null]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('%')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>MOD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('%')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('/')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.rowContainer]}>
          <TouchableOpacity onPress={() => handlePress('7')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('8')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('9')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('*')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.rowContainer]}>
          <TouchableOpacity onPress={() => handlePress('4')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('5')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('6')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('-')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.rowContainer]}>
          <TouchableOpacity onPress={() => handlePress('1')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('2')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('3')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('+')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.row, styles.rowContainer]}>
          <TouchableOpacity onPress={() => handlePress('.')} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress('0')} style={[styles.button, styles.button0, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calculate()} style={[styles.button, darkMode ? styles.darkModeButton: null]}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeText: null]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    resizeMode: 'cover',
  },
  darkModeContainer: {
    backgroundColor: '#f162ff',
  },
  darkModeBackground: {
    //backgroundColor: '#81b7d2',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  darkModeToggle: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    marginBottom: 5, // Adjust the spacing between rows as needed
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 0,
  },
  button: {
    marginRight: 5,
    marginLeft: 5,
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(221, 221, 221, 0.7)',
    borderRadius: 15,
  },
  button0: {
    width: '43%',
  },  
  buttonText: {
    fontSize: 24,
  },
  display: {
    fontSize: 36,
  },
  darkModeText: {
    color: '#fff', // Default text color in dark mode
  },
  darkModeButton: {
    backgroundColor: 'rgba(68, 68, 68, 0.7)',
  },
});

