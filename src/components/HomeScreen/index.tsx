import { Button } from "../Button";
import { Heading } from "../Heading";
import { MenuScreen } from "../MenuScreen";
import { Image, ImageSizeType } from "../Image";
import thiefGif from "../../images/thief.gif";

interface PropsType {
    onStartGameButtonClick: () => void;
}
export const HomeScreen = ({ onStartGameButtonClick }: PropsType) => (
    <MenuScreen>
        <Heading>Pixel Thief</Heading>
        <Image src={thiefGif} alt="thief" size={ImageSizeType.Large} />
        <Button onClick={onStartGameButtonClick}>Start Game</Button>
    </MenuScreen>
);
