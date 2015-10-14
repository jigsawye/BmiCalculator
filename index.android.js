/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} = React;

class BmiCalculator extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      weight: 0,
    };
  }

  containerTouched(e) {
    this.refs.height.blur();
    this.refs.weight.blur();
    return false;
  }

  calcBmi(e) {
    var { height, weight } = this.state;
    var h = height.trim() / 100;

    var bmi = (weight / ( h * h)).toFixed(2);
    var result = `Your BMI = ${bmi}`;

    this.setState({result});
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
      >
        <Text style={styles.title}>
          BmiCalculator
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Height:
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(height) => this.setState({height})}
            value={this.state.height}
            ref="height"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Weight:
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(weight) => this.setState({weight})}
            value={this.state.weight}
            ref="weight"
          />
        </View>
        <Button
          style={styles.calcButton}
          onPress={this.calcBmi.bind(this)}
        >
          Press me to calculate your BMI
        </Button>
        <Text style={styles.textResult}>
          {this.state.result}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
  },
  textLabel: {
    fontSize: 20,
  },
  textResult: {
    paddingTop: 20,
    fontSize: 20,
  },
  calcButton: {
    marginTop: 20,
  },
  textInput: {
    marginLeft: 10,
    padding: 5,
    height: 30,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('BmiCalculator', () => BmiCalculator);
