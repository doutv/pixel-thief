import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines/gameMachine";
import { Button } from "../Button";
import { GameCompleteScreen } from "../GameCompleteScreen";
import { GameOverScreen } from "../GameOverScreen";
import { HomeScreen } from "../HomeScreen";
import { LevelBackgroundImage } from "../LevelBackgroundImage";
import Level1BackgroundPng from "../../images/level1Background.png";
import Level2BackgroundPng from "../../images/level2Background.png";
import Level3BackgroundPng from "../../images/level3Background.png";
import { Grid } from "../Grid";
import { useEffect } from "react";
import { GameEventType } from "../../machines/gameMachine/types";

interface PropsType {
    fastForwardEvents?: GameEventType[];
}

export const Game = ({ fastForwardEvents }: PropsType) => {
    const [state, send] = useMachine(gameMachine);

    useEffect(() => {
        !!fastForwardEvents &&
            fastForwardEvents.forEach((event) => send(event));
    }, [fastForwardEvents, send]);

    if (state.matches("home")) {
        return (
            <HomeScreen
                onStartGameButtonClick={() => send("START_BUTTON_CLICKED")}
            />
        );
    }

    if (state.matches("playing")) {
        if (state.matches("playing.level1")) {
            return (
                <>
                    <p>state: playing.level1</p>
                    <Button onClick={() => send("PLAYER_WALKED_THROUGH_DOOR")}>
                        PLAYER_WALKED_THROUGH_DOOR
                    </Button>
                    <LevelBackgroundImage src={Level1BackgroundPng} alt="" />
                    <Grid />
                </>
            );
        }
        if (state.matches("playing.level2")) {
            return (
                <>
                    <p>state: playing.level2</p>
                    <Button onClick={() => send("PLAYER_WALKED_THROUGH_DOOR")}>
                        PLAYER_WALKED_THROUGH_DOOR
                    </Button>
                    <LevelBackgroundImage src={Level2BackgroundPng} alt="" />
                    <Grid />
                </>
            );
        }
        if (state.matches("playing.level3")) {
            return (
                <>
                    <p>state: playing.level3</p>
                    <Button onClick={() => send("PLAYER_WALKED_THROUGH_DOOR")}>
                        PLAYER_WALKED_THROUGH_DOOR
                    </Button>
                    <LevelBackgroundImage src={Level3BackgroundPng} alt="" />
                    <Grid />
                </>
            );
        }
    }
    if (state.matches("gameOver")) {
        return (
            <GameOverScreen
                onRestartGameButtonClick={() => send("RESTART_BUTTON_CLICKED")}
            />
        );
    }
    if (state.matches("gameComplete")) {
        return (
            <GameCompleteScreen
                onGoHomeButtonClick={() => send("HOME_BUTTON_CLICKED")}
            />
        );
    }

    throw Error(`Invalid state: ${state.value}`);
};
