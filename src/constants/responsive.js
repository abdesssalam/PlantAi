import { Dimensions, PixelRatio } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const scale = WINDOW_WIDTH / 320;
export const normalizeFont = (size) => {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
export default {
    WINDOW_HEIGHT: WINDOW_HEIGHT,
    WINDOW_WIDTH: WINDOW_WIDTH
}
