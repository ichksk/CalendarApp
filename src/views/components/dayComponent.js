import { memo, useCallback, useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics"
import DemoData from "src/demoData.json"

const COLORS = {
    Weekday:"#000000",
    Saturday:"#3268C0",
    Holiday:"#ff0000"
}
const ALPHA = 0.2

const convertToPaleColor = (colorCode, alpha) => {
    const codes = [colorCode.slice(1, 3), colorCode.slice(3, 5), colorCode.slice(5, 7)];
    return "#"+codes.map((code) => {
        const colorCode = parseInt(code, 16) * alpha + 255 * (1 - alpha);
        return Math.floor(colorCode).toString(16)
    }).join("");
}

const getDay = (dateString) => {
    const date = new Date(dateString)
    return date.getDay()
}

const isSaturday = (dateString) => {
    const day = getDay(dateString)
    return day == 6
}

const isHoliday = (dateString) => {
    const day = getDay(dateString)
    if (day == 0) return true
    else return false
}

const getColor = (dateString, state) => {
    let color = COLORS.Weekday
    if(isHoliday(dateString)) color = COLORS.Holiday
    else if(isSaturday(dateString)) color = COLORS.Saturday
    color = state == "disabled" ? convertToPaleColor(color, ALPHA) : color
    return color
}

const __DayComponent = (props) => {
    const { dateString, state, isSelected, setSelected } = props
    const day = dateString.substr(-2)
    const color = getColor(dateString, state)

    useEffect(() =>{
        console.log(props)
    })

    const isToday = () => {
        return state == 'today'
    }

    const onPress = () => {
        setSelected(dateString)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    }

    const onLongPress = ()=> {
        console.log(isSelected, dateString)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }

    return (
        <TouchableOpacity
            style={[styles.container, isSelected ? styles.containerSelected : styles.containerUnselected]}
            // activeOpacity={1}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text
                style={[
                    isToday() ? styles.today(color) : styles.notToday(color),
                    isSelected ? styles.dateSelected : styles.dateUnselected,
                ]}
            >{day}</Text>
        </TouchableOpacity>
    )
}

export const DayComponent = memo(__DayComponent)


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
    },
    notToday: (color) => {return {
        textAlign: "center",
        color: color,
        fontSize:12,
    }},
    today: color => {return {
        textAlign: "center",
        backgroundColor:color,
        color:"white",
        fontSize:12,
    }},

    containerSelected: {
        backgroundColor:"#fee"
    },
    containerUnselected: {
        backgroundColor:"#fff"
    },

    dateSelected: {
        fontWeight:"800"
    },
    dateUnselected: {
        fontWeight:"500",
    },

})