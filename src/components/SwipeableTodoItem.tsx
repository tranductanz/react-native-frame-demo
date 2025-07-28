import { useHomeViewModel } from '@/src/containers/Home/viewmodal/useHomeViewModel';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_RIGHT_THRESHOLD = -SCREEN_WIDTH * 0.1;
const SWIPE_LEFT_THRESHOLD = SCREEN_WIDTH * 0.1;

type Props = {
    onDismiss: () => void;
    children: React.ReactNode;
    item: any;
};

type BackgroundActionsProps = {
    translateX: Animated.SharedValue<number>;
    item: any;
};

const BackgroundActions = ({ translateX, item = undefined }: BackgroundActionsProps) => {
    const { removeTodoItem, loadTodos } = useHomeViewModel();
    const leftStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(translateX.value, [0, 80], [0, 1], 'clamp'),
            transform: [
                {
                    scale: interpolate(translateX.value, [0, 80], [0.8, 1], 'clamp'),
                },
            ],
        };
    });

    const rightStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(translateX.value, [-80, 0], [1, 0], 'clamp'),
            transform: [
                {
                    scale: interpolate(translateX.value, [-80, 0], [1, 0.8], 'clamp'),
                },
            ],
        };
    });
    return (
        <View style={{
            ...StyleSheet.absoluteFillObject,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            top: 20
        }}>
            <Animated.View style={[styles.leftAction, leftStyle]}>
                <FontAwesome5 name="check" size={24} color="white" />
            </Animated.View>
            <Animated.View style={[styles.rightAction, rightStyle]}>
                <Button onPress={async () => {
                    console.log(item, 'dqwoidjwqoijdoiqwjdoiwqdoqw')
                    await removeTodoItem(item.id);
                    // loadTodos();
                }}>
                    <FontAwesome5 name="trash" size={24} color="white" />
                </Button>
            </Animated.View>
        </View>
    );
};

export const SwipeableTodoItem = ({ onDismiss, children, item }: Props) => {
    const translateX = useSharedValue(0);
    const scrollGesture = Gesture.Native();

    // 👉 Đây là gesture xử lý vuốt ngang
    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            translateX.value = e.translationX;
        })
        .onEnd((e) => {
            if (e.translationX > SWIPE_LEFT_THRESHOLD) {
                translateX.value = withSpring(80)
                runOnJS(onDismiss)(); // xoá thật
            } else if (e.translationX < SWIPE_RIGHT_THRESHOLD) {
                translateX.value = withSpring(-80); // quay lại nếu vuốt chưa đủ
                runOnJS(onDismiss)(); // xoá thật
            }
            else {
                translateX.value = withSpring(0)
            }

        })
        .simultaneousWithExternalGesture(scrollGesture)
        .activeOffsetX([-10, 10]); // chỉ kích hoạt khi vuốt ngang


    // 👉 Style animation áp dụng cho item khi vuốt
    const rStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={{ flex: 1 }}>
            {/* <BackgroundActions translateX={translateX} /> */}
            <BackgroundActions translateX={translateX} item={item} />
            <GestureDetector
                gesture={panGesture}
            // gesture={Gesture.Exclusive(panGesture, scrollGesture)}
            >
                <Animated.View style={[rStyle]}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </View>
    );
};


const styles = StyleSheet.create({

    leftAction: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
    },
    rightAction: {
        backgroundColor: '#F44336',
        padding: 12,
        borderRadius: 8,
    },
});