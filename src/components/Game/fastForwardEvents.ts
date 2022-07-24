import { GameEventType } from "../../machines/gameMachine/types";

const fastForwardToLevel1Events: GameEventType[] = [
    {
        type: "START_BUTTON_CLICKED",
    },
];

const fastForwardToLevel2Events: GameEventType[] = [
    ...fastForwardToLevel1Events,
    {
        type: "PLAYER_WALKED_THROUGH_DOOR",
    },
];

const fastForwardToLevel3Events: GameEventType[] = [
    ...fastForwardToLevel2Events,
    {
        type: "PLAYER_WALKED_THROUGH_DOOR",
    },
];

const fastForwardToGameCompleteEvents: GameEventType[] = [
    ...fastForwardToLevel3Events,
    {
        type: "PLAYER_GOT_TREASURE",
    },
];

const fastForwardToGameOverEvents: GameEventType[] = [
    ...fastForwardToLevel1Events,
    {
        type: "PLAYER_DIED",
    },
];

export {
    fastForwardToGameCompleteEvents,
    fastForwardToGameOverEvents,
    fastForwardToLevel1Events,
    fastForwardToLevel2Events,
    fastForwardToLevel3Events,
};
