import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { CalendarList, LocaleConfig, } from 'react-native-calendars';
import { StyleSheet, Text, View  } from 'react-native';
import { DayComponent } from './dayComponent';

LocaleConfig.locales['ja'] = {
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', ],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土', ],
};
LocaleConfig.defaultLocale = 'ja';

const theme = {
    'stylesheet.calendar.main': {
        monthView: {
            flex: 1,
            height: '100%',
            padding:0,
            justifyContent: 'space-around',
        },
        week: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        dayContainer: {
            flex:1,
        },
    },
    "stylesheet.calendar.header": {
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal:0,
            alignItems: 'center',
        },
        headerContainer: {
            flexDirection: 'row',
            paddingHorizontal:0,
        }
    }
}


export const ResizableCalendar = (props) => {
    const {width, height} = props
    const [ selected, setSelected ] = useState("test")

    return (
            <View style={{
                width:width,
                // height:"auto",
                height:"75%",
                marginBottom:16,
            }}>
                    <CalendarList
                        headerStyle={styles.calendarHeaderStyle}
                        style={{
                            width: width,
                            borderRadius:16,
                        }}
                        staticHeader
                        hideArrows
                        showSixWeeks
                        horizontal
                        pagingEnabled
                        hideExtraDays={false}
                        calendarWidth={width}
                        calendarHeight="100%"
                        theme={theme}
                        dayComponent={
                            (props) => {
                                const { date, state } = props
                                const { dateString } = date
                                return <DayComponent dateString={dateString} state={state} isSelected={dateString==selected} setSelected={setSelected}/>
                            }
                        }
                        />
            </View>
    );
}

const styles = StyleSheet.create({
    calendarHeaderStyle: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
})