import { memo, useEffect,  } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";


const __DayComponent = (props) => {
    const {date, state, isSelected, setSelected} = props
    useEffect(()=>{
        // console.log("RERENDER DAY", date.dateString)
    })
    return (
        <TouchableOpacity
            onPress={()=>{
                setSelected(date.dateString)
            }}
            style={{
                width:"100%",
                height:40,
            }}
            // activeOpacity={1}
        >
            <Text
                style={{
                    textAlign:"center",
                    fontWeight: isSelected? "900" : "500",
                }}
            >{date.day}</Text>
        </TouchableOpacity>
    )
}

const areEqual = (prevProps, nextProps) => {
    isEqual = !prevProps.isSelected && !nextProps.isSelected
    if(!isEqual) {
        console.log(prevProps.date.dateString)
    }

    console.log(isEqual)
    return isEqual
}

export const DayComponent = memo(__DayComponent, areEqual)