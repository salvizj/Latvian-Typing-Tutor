import { useEffect, useState } from 'react';
import OptionBox from '../components/utils/OptionBox';
import Lobby from '../components/typingRace/Lobby';
import Keyboard from '../components/keyboard/Keyboard';
import {
    CreateLobbyData,
    EndRaceData,
    JoinLobbyData,
    LobbyStatus,
    Player,
    ProgressData,
    WebSocketMessageType,
} from '../types';
import PlayerProgressBox from '../components/typingRace/PlayerProgressBox';
import { useOptions } from '../context/OptionsContext';
import useAuthStatus from '../hooks/useAuthStatus';
import useLobbyStatusMenagement from '../hooks/useLobbyStatusMenagement';
import useHandleWebSocketMessages from '../hooks/useHandleWebSocketMessages';
import useWebSocketMenagement from '../hooks/useWebSocketMenagement';
import useRaceTimeLeftTracker from '../hooks/useRaceTimeLeftTracker';
import RaceCountdown from '../components/typingRace/RaceCountdown';
import CompletionScreen from '../components/utils/CompletionScreen';
import { useNavigate } from 'react-router-dom';
import TypingStats from '../components/keyboard/TypingStats';
import translate from '../utils/translate';
import { useTyping } from '../context/TypingContext';
import { useLanguage } from '../context/LanguageContext';
import DefaultPanel from '../components/utils/DefaultPanel';

const TypingRacePage = () => {
    const isRace = true;
    const { language } = useLanguage();
    const wsUrl = `ws://localhost:${import.meta.env.VITE_PORT}/ws`;
    const { text, setText, time, setTime, lobbyId, setLobbyId, username, timeLeft, setTimeLeft } = useOptions();
    const { userId } = useAuthStatus();
    const navigate = useNavigate();
    const { isTypingFinished } = useTyping();
    const [playerId, setPlayerId] = useState<string>('');
    const [place, setPlace] = useState<number>(0);
    const [isOptionsSet, setIsOptionsSet] = useState(false);
    const [lobbyStatus, setLobbyStatus] = useState<LobbyStatus>(LobbyStatus.Waiting);
    const [playerData, setPlayerData] = useState<Player[] | null>(null);
    const userIdOrEmpty = userId ? userId : '';
    // connects to ws
    const { lastMessage, messages, sendMessage, isSocketOpen } = useWebSocketMenagement({
        wsUrl,
        isOptionsSet,
    });

    useRaceTimeLeftTracker({ lastMessage });

    // changes lobby status based on recived wsmessages
    useLobbyStatusMenagement({ messages, setLobbyStatus });

    // handle ws messaging
    useHandleWebSocketMessages({
        playerId,
        isTypingFinished,
        isSocketOpen,
        userIdOrEmpty,
        lobbyStatus,
        sendMessage,
        isOptionsSet,
    });

    // handle WebSocket message updates
    useEffect(() => {
        if (!lastMessage) return;

        if (lastMessage.type === WebSocketMessageType.CreateLobby) {
            const data = lastMessage.data as CreateLobbyData;
            setLobbyId(lastMessage.lobbyId);
            setPlayerData(data.players);
            if (data.players[0].playerId) setPlayerId(data.players[0].playerId);
        }

        if (lastMessage.type === WebSocketMessageType.JoinLobby) {
            setLobbyId(lastMessage.lobbyId);
            const data = lastMessage.data as JoinLobbyData;
            setText(data.lobbySettings.text);
            setTime(data.lobbySettings.time);
            setTimeLeft(data.lobbySettings.time);
            setPlayerData(data.players);
            const currentPlayer = data.players.find((player) => player.username === username);
            if (currentPlayer && currentPlayer.playerId && currentPlayer.place) {
                setPlayerId(currentPlayer.playerId);
                setPlace(currentPlayer.place);
            }
        }

        if (lastMessage.type === WebSocketMessageType.Progress && lastMessage.data) {
            const data = lastMessage.data as ProgressData;
            setPlayerData(data.players);
        }
        if (lastMessage.type === WebSocketMessageType.EndRace && lastMessage.data) {
            const data = lastMessage.data as EndRaceData;
            setPlayerData(data.players);
        }
    }, [lastMessage, setLobbyId, setText, setTime, setTimeLeft, text, time, username]);

    if (lobbyStatus === LobbyStatus.Finished) {
        return (
            <CompletionScreen
                title="typing_race_completed"
                showMetrics={true}
                place={place}
                buttons={[
                    {
                        text: 'home',
                        onClick: () => navigate('/'),
                    },
                    {
                        text: 'restart',
                        onClick: () => window.location.reload(),
                    },
                ]}
            />
        );
    }

    if (!isOptionsSet && lobbyStatus === LobbyStatus.Waiting) {
        return (
            <OptionBox
                title="typing_race"
                setIsOptionsSet={setIsOptionsSet}
                startText="go_to_type_racing_lobby"
                isRace={isRace}
            />
        );
    }

    if (lobbyStatus === LobbyStatus.Waiting && isOptionsSet) {
        return (
            <Lobby
                playerData={playerData}
                username={username}
                sendMessage={sendMessage}
                title="typing_race_lobby"
                lobbyId={lobbyId}
            />
        );
    }

    return (
        <>
            {lobbyStatus === LobbyStatus.InProgress && timeLeft != null && time != null && !isTypingFinished && (
                <>
                    <PlayerProgressBox playerData={playerData || []} />
                    <div className="flex flex-col justify-center items-center min-h-screen">
                        <RaceCountdown />
                        <TypingStats start={lobbyStatus === LobbyStatus.InProgress} />
                        <Keyboard />
                    </div>
                </>
            )}
            {isTypingFinished && (
                <>
                    <DefaultPanel>
                        <p className="text-color-primary text-xl">
                            {translate('congratulation_wait_for_others_to_finish', language)}
                        </p>
                    </DefaultPanel>
                </>
            )}
        </>
    );
};

export default TypingRacePage;
