package types

type Lesson struct {
	LessonId         int              `json:"lessonId"`
	LessonDifficulty LessonDifficulty `json:"lessonDifficulty"`
	LessonText       string           `json:"lessonText"`
}

type LessonDifficulty string

const (
	Beginner     LessonDifficulty = "beginner"
	Intermediate LessonDifficulty = "intermediate"
	Advanced     LessonDifficulty = "advanced"
	Expert       LessonDifficulty = "expert"
)

type PoetText struct {
	PoetTextId       int    `json:"poetTextId"`
	PoetAuthor       string `json:"poetAuthor"`
	PoetFragmentName string `json:"poetFragment"`
	PoetTextContent  string `json:"poetText"`
}

type LatvianWord struct {
	LatvianWordId int    `json:"latvianWordId"`
	LatvianWord   string `json:"latvianWord"`
}

type Lobby struct {
	LobbyId       string        `json:"lobbyId"`
	LobbySettings LobbySettings `json:"lobbySettings"`
	Players       []Player      `json:"players"`
	LobbyStatus   LobbyStatus   `json:"lobbyStatus"`
}

type LobbySettings struct {
	Text           string `json:"text"`
	Time           int    `json:"time"`
	MaxPlayerCount int    `json:"maxPlayerCount"`
}

type Player struct {
	Username            string     `json:"username"`
	PlayerId            string     `json:"playerId"`
	UserId              string     `json:"userId"`
	Role                PlayerRole `json:"role,omitempty"`
	Place               int        `json:"place,omitempty"`
	ProcentsOfTextTyped int        `json:"procentsOfTextTyped,omitempty"`
	MistakeCount        int        `json:"mistakeCount,omitempty"`
	Wpm                 int        `json:"wpm,omitempty"`
}

type PlayerRole string

const (
	PlayerRolePlayer PlayerRole = "player"
	PlayerRoleLeader PlayerRole = "leader"
)

type LobbyStatus string

const (
	LobbyStatusWaiting    LobbyStatus = "waiting"
	LobbyStatusInProgress LobbyStatus = "in-progress"
	LobbyStatusFinished   LobbyStatus = "finished"
)

type WebSocketMessageTypes string

const (
	CreateLobby WebSocketMessageTypes = "createLobby"
	JoinLobby   WebSocketMessageTypes = "joinLobby"
	Progess     WebSocketMessageTypes = "progress"
	StartRace   WebSocketMessageTypes = "startRace"
	EndRace     WebSocketMessageTypes = "endRace"
	Error       WebSocketMessageTypes = "error"
)

type WebSocketMessage struct {
	Type        WebSocketMessageTypes `json:"type"`
	LobbyId     string                `json:"lobbyId"`
	LobbyStatus LobbyStatus           `json:"lobbyStatus,omitempty"`
	Data        interface{}           `json:"data"`
}

type CreateLobbyData struct {
	LobbySettings LobbySettings `json:"lobbySettings"`
	Players       []Player      `json:"players"`
}

type JoinLobbyData struct {
	LobbySettings LobbySettings `json:"lobbySettings"`
	Players       []Player      `json:"players"`
}

type StartRaceData struct {
}

type EndRaceData struct {
}

type ProgressData struct {
	Players []Player `json:"players"`
}

type ErrorData struct {
	Message string `json:"message"`
}

type TypingTestSettings struct {
	TypingTestSettingsId int    `json:"typingTestSettingsId,omitempty"`
	TextType             string `json:"textType"`
	TextId               int    `json:"textId,omitempty"`
	CustomText           string `json:"customText,omitempty"`
	Time                 int    `json:"time"`
}

type TypingTest struct {
	TypingTestId         int    `json:"typingTestId"`
	UserId               string `json:"userId"`
	TypingTestSettingsId int    `json:"typingTestSettingsId"`
	Wpm                  int    `json:"wpm"`
	MistakeCount         int    `json:"mistakeCount"`
	Date                 string `json:"date"`
}

type TypingRace struct {
	TypingRaceId         string `json:"typingRaceId"`
	TypingRaceSettingsId int    `json:"typingRaceSettingsId"`
	Date                 string `json:"date"`
}

type TypingRaceSettings struct {
	TypingRaceSettingsId int    `json:"typingRaceSettingsId"`
	TextType             string `json:"textType"`
	TextId               int    `json:"textId,omitempty"`
	CustomText           string `json:"customText,omitempty"`
	MaxPlayerCount       int    `json:"maxPlayerCount"`
	Time                 int    `json:"time"`
}

type TypingRacePlayer struct {
	TypingRacePlayerId   int    `json:"typingRacePlayerId"`
	TypingRaceId         string `json:"typingRaceId"`
	Username             string `json:"username"`
	UserId               string `json:"userId"`
	Role                 string `json:"role"`
	Place                int    `json:"place"`
	MistakeCount         int    `json:"mistakeCount"`
	Wpm                  int    `json:"wpm"`
	TypingRaceSettingsId int    `json:"typingRaceSettingsId"`
}

type HistoryType string

const (
	TypingRaceType HistoryType = "typingRace"
	TypingTestType HistoryType = "typingTest"
)
