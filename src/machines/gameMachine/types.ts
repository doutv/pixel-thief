export interface StartButtonClickedType {
    type: `START_BUTTON_CLICKED`;
}

export interface PlayerDiedType {
    type: `PLAYER_DIED`;
}

export interface PlayerGotTreasureType {
    type: `PLAYER_GOT_TREASURE`;
}

export interface RestartButtonClickedType {
    type: `RESTART_BUTTON_CLICKED`;
}

export interface HomeButtonClickedType {
    type: `HOME_BUTTON_CLICKED`;
}

export interface PlayerWalkedThroughDoor {
    type: `PLAYER_WALKED_THROUGH_DOOR`;
}

export type GameEventType =
    | StartButtonClickedType
    | PlayerDiedType
    | PlayerGotTreasureType
    | RestartButtonClickedType
    | HomeButtonClickedType
    | PlayerWalkedThroughDoor;

export type GameStateType = {
    context: null;
    value:
        | `home`
        | `playing`
        | `gameOver`
        | `gameComplete`
        | `playing.level1`
        | `playing.level2`
        | `playing.level3`;
};
