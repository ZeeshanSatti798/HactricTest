import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './app/routes/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './app/redux/store'

const App = () => {
  return (
    <Provider store={store} >
      <AppNavigator/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})