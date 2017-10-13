/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
} from 'react-native';

import PopupDialog, {
  DialogTitle,
  SlideAnimation,
} from 'react-native-popup-dialog';

import Button from '../components/Button';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });

export default class DialogScene extends Component {

  constructor(props) {
    super(props);

    this.showSlideAnimationDialog = this.showSlideAnimationDialog.bind(this);
  }

  showSlideAnimationDialog() {
    this.slideAnimationDialog.show();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          text="Show Dialog"
          onPress={this.showSlideAnimationDialog}
        />

        <PopupDialog
          width = {0.8}
          height = {200}
          dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
          ref={(popupDialog) => {
            this.slideAnimationDialog = popupDialog;
          }}
          dialogAnimation={slideAnimation}
        >
          <View style={styles.dialogContentView}>
            <Text>Slide Animation</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
