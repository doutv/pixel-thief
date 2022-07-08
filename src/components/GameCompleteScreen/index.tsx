import { Button } from "../Button";
import { Heading } from "../Heading";
import { MenuScreen } from "../MenuScreen";
import { Image, ImageSizeType } from "../Image";
import treasurePng from "../../images/treasure.png";

interface PropsType {
    onGoHomeButtonClick: () => void;
}
export const GameCompleteScreen = ({ onGoHomeButtonClick }: PropsType) => (
    <MenuScreen>
        <Heading>Quest Complete!</Heading>
        <Image
            src={treasurePng}
            alt="treasure chest"
            size={ImageSizeType.Large}
        />
        <Button onClick={onGoHomeButtonClick}>Go Home</Button>
    </MenuScreen>
);
