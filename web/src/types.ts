export enum Finger {
    Pinky = 'pinky',
    Ring = 'ring',
    Middle = 'middle',
    Index = 'index',
    Thumb = 'thumb',
}

export enum KeyboardLayouts {
    Qwerty = 'qwerty',
    Dvorak = 'dvorak',
}

export enum Hand {
    Left = 'left',
    Right = 'right',
    Both = 'both',
}

export type KeyObj = {
    key: string;
    label: string;
    width: string;
    hand?: Hand;
    finger?: Finger;
    altKey?: string;
    altLabel?: string;
};

export enum LessonDifficulty {
    Beginner = 'beginner',
    Intermediate = 'intermediate',
    Advanced = 'advanced',
    Expert = 'expert',
}

export type Lesson = {
    lessonId: number;
    lessonDifficulty: LessonDifficulty;
    lessonText: string;
};

export type LessonCompletion = {
    userId: string;
    lessonId: number[];
};

export type HandFingerInfoObj = {
    hand: Hand;
    finger: Finger;
    isShift: boolean;
    isAlt: boolean;
};

export type PoetText = {
    poetTextId: number;
    poetAuthor: string;
    poetFragmentName: string;
    poetText: string;
};

export type LatvianWord = {
    latvinWordId: number;
    latvianWord: string;
};

export type TestCompletionObj = {
    wpm: number;
    mistakeCount: number;
    text: string;
    time: number;
    completedDate: Date;
};

export type Lobby = {
    lobbyId: string;
    lobbySettings: LobbySettings;
    players: Player[];
    lobbyStatus: LobbyStatus;
};

export type LobbySettings = {
    text: string;
    time: number;
    maxPlayerCount: number;
};

export type Player = {
    username: string;
    playerId: string;
    userId?: string;
    role?: PlayerRole;
    place?: number;
    mistakeCount?: number;
    wpm?: number;
    procentsOfTextTyped?: number;
};

export enum PlayerRole {
    Player = 'player',
    Leader = 'leader',
}

export enum LobbyStatus {
    Waiting = 'waiting',
    InProgress = 'in-progress',
    Finished = 'finished',
}

export type WebSocketMessage<WebSocketMessageData> = {
    type: WebSocketMessageType;
    lobbyId: string;
    lobbyStatus?: LobbyStatus;
    data: WebSocketMessageData;
};

export type WebSocketMessageData =
    | CreateLobbyData
    | JoinLobbyData
    | StartRaceData
    | EndRaceData
    | ErrorData
    | ProgressData;

export type CreateLobbyData = {
    lobbySettings: LobbySettings;
    players: Player[];
};

export type JoinLobbyData = {
    lobbySettings: LobbySettings;
    players: Player[];
};
export type ProgressData = {
    players: Player[];
};

export type StartRaceData = object;

export type EndRaceData = object;

export type ErrorData = {
    message: string;
};
export enum WebSocketMessageType {
    CreateLobby = 'createLobby',
    JoinLobby = 'joinLobby',
    Progress = 'progress',
    StartRace = 'startRace',
    EndRace = 'endRace',
    Error = 'error',
}

export type ValidationErrors = {
    customText?: string;
    lobbyId?: string;
    username?: string;
    selectedText?: string;
    time?: string;
    maxPlayerCount?: string;
};

export enum GameOption {
    HideWords = 'hide_words',
}

export enum HistoryTypes {
    TypingRace = 'typingRace',
    TypingTest = 'typingTest',
}

export type TypingTest = {
    typingTestId?: number;
    userId: string;
    typingTestSettingsId: number | null;
    wpm: number;
    mistakeCount: number;
    date: string;
};

export type TypingTestSettings = {
    typingTestSettingsId: null | number;
    textType: 'poet' | 'custom';
    textId: number | null;
    customText: string | null;
    time: number;
};

export type TypingRace = {
    typingRaceId: string;
    typingRaceSettingsId: number;
    date: string;
};

export type TypingRaceSettings = {
    typingRaceSettingsId: number;
    textType: string;
    textId?: number;
    customText?: string;
    maxPlayerCount: number;
    time: number;
};

export type TypingRacePlayer = {
    typingRacePlayerId: number;
    typingRaceId: string;
    username: string;
    userId: string;
    role: string;
    place: number;
    mistakeCount: number;
    wpm: number;
    typingRaceSettingsId: number;
};

export type TypingTestOrRaceData =
    | { type: HistoryTypes.TypingTest; tests: TypingTest[]; settings: TypingTestSettings[] }
    | {
          type: HistoryTypes.TypingRace;
          players: TypingRacePlayer[];
          settings: TypingRaceSettings[];
          races: TypingRace[];
      };
