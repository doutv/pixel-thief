import { useMachine } from "@xstate/react";
import { gameMachine } from "../../machines/gameMachine";
import { Button } from "../Button";
import { GameCompleteScreen } from "../GameCompleteScreen";
import { GameOverScreen } from "../GameOverScreen";
import { HomeScreen } from "../HomeScreen";

export const Game = () => {
    const [state, send] = useMachine(gameMachine);

    if (state.matches("home")) {
        return (
            <HomeScreen
                onStartGameButtonClick={() => send("START_BUTTON_CLICKED")}
            />
        );
    }

    if (state.matches("playing")) {
        return (
            <>
                <p>state: Playing</p>
                <Button onClick={() => send("PLAYER_DIED")}>PLAYER_DIED</Button>
                <Button onClick={() => send("PLAYER_GOT_TREASURE")}>
                    PLAYER_GOT_TREASURE
                </Button>
            </>
        );
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
