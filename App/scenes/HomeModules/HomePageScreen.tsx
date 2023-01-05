import React, { useCallback, FC, memo, useLayoutEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';

const HomePageScreen: FC = () => {
    // ------------------ INNIT PROPS FROM NAVIGATION, REDUX ------------------
    const dispatch = useDispatch();
    const navigation = useNavigation<GenericNavigationProps>();
    const { setOptions } = useNavigation<GenericNavigationProps>();

    // ------------------ INNIT STATE APP ------------------

    const [number, setNumber] = React.useState<number>(0)

    // ------------------ PROCESS LIFECYCLE ------------------

    React.useEffect(() => {
        setNumber(number + 1)
    }, [])

    // ------------------ PROCESS CHILD FUNC ------------------

    const onNavigation = () => {
        navigation.navigate('Account', { screen: 'AccountScreen' })
    }

    // ------------------ RENDER CHILD UI --------------------

    const renderButtonDemo = React.useMemo(() =>{
        return (
            <View style={styles.viewContent}>
                <Text>{`Hi ${number}`}</Text>
            </View>
        )
    }, [number])

    // ------------------ RENDER UI PARENT -------------------

    return (
        <View style={styles.container}>
            {renderButtonDemo}
            <TouchableOpacity
                style={styles.button}
                onPress={onNavigation}
            >
                <Text>{"GO"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(HomePageScreen);


// --------------- create Style UI -------------

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 200,
        height: 60,
        borderRadius: 12,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    viewContent: {
        paddingVertical: 80,
        justifyContent: "center",
        alignItems: "center"
    }
})