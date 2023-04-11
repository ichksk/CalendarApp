import { Button } from "@rneui/themed"

export const Modal = (props) => {
    const { setModalVisible } = props
    return (
        <Button title="詳細モーダルです。閉じる" onPress={()=>setModalVisible(false)}></Button>
        )
}