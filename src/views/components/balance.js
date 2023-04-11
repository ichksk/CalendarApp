import { View, StyleSheet } from 'react-native';
import { Card, } from '@rneui/themed';
import { memo, useEffect } from "react"

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const BalanceCard = memo((props) => {
  const { balance, width } = props
  const unit = "¥"
  useEffect(() => {
    console.log("balance")
  })
  return (
      <Card containerStyle={[styles.container, {width:width}]}>
        <Card.Title style={styles.title}>残高</Card.Title>
        <Card.Title style={styles.balance}>{unit}{numberWithCommas(balance)}</Card.Title>
      </Card>
  )
})

const styles = StyleSheet.create({
  container: {
    borderRadius:16,
    backgroundColor:"black",
    borderColor:"black",
    alignSelf:"center",
  },

  title: {
    fontSize:16,
    color:"white",
    textAlign: "left",
    paddingLeft:"4%",
  },

  balance: {
    fontSize:32,
    color:"white",
  }
})