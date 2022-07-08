import { Button } from "../Button";
import { Heading } from "../Heading";
import { MenuScreen } from "../MenuScreen";
import { Image, ImageSizeType } from "../Image";
import skullPng from "../../images/skull.png";

interface PropsType {
    onRestartGameButtonClick: () => void;
}
export const GameOverScreen = ({ onRestartGameButtonClick }: PropsType) => (
    <MenuScreen>
        <Heading>Game Over</Heading>
        <Image src={skullPng} alt="skull" size={ImageSizeType.Large} />
        <Button onClick={onRestartGameButtonClick}>Restart</Button>
    </MenuScreen>
);
