import { CalendarList } from "react-native-calendars";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

import { DayComponent } from "src/views/components/dayComponent2";

const areEqual = () => {
    // return true
}

export const MemoCalendar = memo((props) => {
    const { selected, setSelected } = props

    useEffect(()=>{
        console.log("calendar")
    })
    return (
        <CalendarList
            pagingEnabled
            horizontal
            // dayComponent={}
            onDayPress={({dateString})=>{
                setSelected(dateString)
            }}
            dayComponent={(props) => <DayComponent {...props} selected={selected} setSelected={setSelected}/>}
        />

    )
},
    // areEqual
)