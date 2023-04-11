import { ResizableCalendar} from "src/views/components/calendar";
import { MemoCalendar } from "src/views/components/calendar2";
import { View, SafeAreaView, StyleSheet, Text, Dimensions } from "react-native";
import { BalanceCard } from "src/views/components/balance";
import { useState, useCallback, memo, useEffect } from "react";
import { Modal } from 'src/views/components/modal';
import { Button } from "@rneui/themed";

const {width, height} = Dimensions.get("window")
const RATIO = 0.97
const CALENDAR_W = Math.floor(width*RATIO)
const CALENDAR_H = "auto"

export const HomeView = ({navigation}) => {
    const [ balance, setBalance ] = useState(20001)
    const [ selected, setSelected ] = useState("2023-04-11")
    useEffect(() =>{
        // console.log("HOME VIEW")
    })
    return (
        <View style={styles.container}>
            <BalanceCard balance={balance} width={CALENDAR_W}/>
            {/* <MemoCalendar selected={selected} setSelected={setSelected}/> */}

            <ResizableCalendar width={CALENDAR_W} height={CALENDAR_H}/>
        </View>
    )
}

const Component = (props) => {
    const { selected, setSelected } = props
    useEffect(() => {
        // console.log("RERENDER MYCOMPO")
    })
    return <Button title={selected} onPress={()=>setSelected("2023-05-09")}/>

};
const MemoComponent = memo(Component)


const styles = StyleSheet.create({
    container: {
        flex:1,
        // display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
})