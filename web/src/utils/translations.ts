type Translations = {
    [language: string]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        language: 'EN',
        home: 'home',
        login: 'login',
        register: 'register',
        logout: 'logout',
        theme_dark: 'dark',
        theme_light: 'light',
        keyboard_input_label: 'Type the text above',
        lessons: 'lessons',
        lesson: 'lesson',
        completed: 'completed',
        history: 'history',
        appearance_settings: 'appearance settings',
        back_to_lessons: 'back to lessons',
        restart: 'restart',
        typing_race: 'typing race',
        you_have_completed: 'you have completed',
        out_of: 'out of',
        first_completed_lesson: 'first completed lesson:',
        most_recent_completed_lesson: 'most recent completed lesson:',
        start_test: 'start test',
        select_time: 'select time',
        seconds: 'seconds',
        select_text_option: 'select text option',
        pick_text: 'pick text',
        custom_text: 'costume text',
        choose_predefined_text: 'choose perefined text',
        enter_custom_text: 'enter custome text',
        mistakes: 'mistakes',
        wpm: 'words per minute',
        typing_test: 'typing test',
        typing_test_completed: 'typing test completed',
        create: 'create',
        join: 'join',
        enter_lobby_id: 'enter lobby id',
        start_typing_race: 'start typing race',
        go_to_type_racing_lobby: 'go to type racing lobby',
        join_lobby: 'join lobby',
        create_lobby: 'create lobby',
        select_max_player_count: 'select maximum player count',
        max_player_count: 'maximum player count',
        must_enter_costum_text: 'error: enter costum text',
        must_enter_lobby_id: 'error: enter lobby Id',
        typing_race_lobby: 'typing race lobby',
        enter_username: 'enter username',
        must_enter_username: 'error: must enter username',
        must_select_text: 'error: must select text',
        must_enter_custom_text: 'error: must enter custom text',
        custom_text_too_short: 'error: costum text is too  short, needs to be atleast 10 characters',
        inalid_time_small: 'error: invalid time, time can`t be under 10 seconds',
        inalid_time_large: 'error: invalid time, time can`t be over 120 seconds',
        invalid_player_count_large: 'error: invalid player count, maximum player count can`t be over 10',
        invalid_player_count_small: 'error: invalid player count, maximum player count can`t be under than 2',
        current_lobby_id: 'current lobby id',
        custom_text_too_long: 'error: custom text too long (max 1000 characters)',
        players: 'players',
        copied: 'copied',
        copy_to_clipboard: 'copy to clipboard',
        username: 'username',
        role: 'role',
        wait_for_owner_to_start_the_race: 'wait for lobby leader to start the race',
        leader: 'leader',
        player: 'player',
        mistake_count: 'mistake count',
        progress: 'progress',
        latvian_keyboard_typing_Platform: 'latvian keyboard typing platform',
        sign_out: 'log out',
        sign_up: 'sign up',
        sign_in: 'sign in',
        choose_preferable_keyboard_layout: 'choose preferable keyboard layout',
        show_keyboard_layout: 'show keyboard layout',
        show_hands: 'show hands',
        keyboard_settings: 'keyboard settings',
        keyboard_layout: 'keyboard layout',
        not_enough_players_to_start: 'not enough players to start, need atleast 2 players',
        start_game: 'start game',
        games: 'games',
        choose_game: 'choose game',
        hide_words: 'hide words',
        round: 'round',
        type_word_that_shows_above: 'type word that shows above',
        game_over_you_held_up: 'game over you held up',
        rounds: 'raounds',
        we_have_no_words_left: 'we don`t have any more words to give you congratulations',
    },
    lv: {
        login: 'pieslēgties',
        home: 'mājas',
        register: 'reģistrēties',
        logout: 'atslēgties',
        language: 'LV',
        theme_dark: 'tumšs',
        theme_light: 'gaišs',
        keyboard_input_label: 'Raksties tekstu, kas atrodas augstāk',
        lessons: 'nodarbības',
        lesson: 'nodarbība',
        completed: 'pabeigta',
        history: 'vēsture',
        appearance_settings: 'izskata iestatījumi',
        back_to_lessons: 'atpakaļ pie nodarbībām',
        restart: 'atkārtot',
        start_typing_race: 'sākt rakstīšanas sacensības',
        typing_test: 'rakstīšanas tests',
        typing_test_completed: 'rakstīšanas tests pabeigts',
        typing_race: 'rakstīšanas sacensības',
        you_have_completed: 'jūs esat pabeidzis',
        out_of: 'no',
        first_completed_lesson: 'pirmā pabeigtā nodarbība:',
        most_recent_completed_lesson: 'pēdējā pabeigtā nodarbība:',
        start_test: 'sākt testu',
        select_time: 'izvēlities laiku',
        seconds: 'sekundes',
        select_text_option: 'izvelities teksta opciju',
        pick_text: 'izvēlities tekstu',
        custom_text: 'pielāgots teksts',
        choose_predefined_text: 'izvēlieties iepriekš definētu tekstu',
        enter_custom_text: 'ievadiet pielāgotu tekstu',
        mistakes: 'kļūdas',
        wpm: 'vārdu skaits minūtē',
        create: 'izveidot',
        join: 'pievienoties',
        enter_lobby_id: 'ievadiet istabas id',
        go_to_type_racing_lobby: 'iet uz rakstīšanas sacensību istabu',
        join_lobby: 'pievienoties istabai',
        create_lobby: 'izveidot istabu',
        select_max_player_count: 'izvēlities maksimalo spēlētāju skaitu',
        max_player_count: 'maksimālais spēlētāju skaits',
        must_enter_costum_text: 'kļūda: ievadiet pielāgotu tekstu',
        must_enter_lobby_id: 'kļūda: ievadiet istabas Id',
        typing_race_lobby: 'rakstīšanas sacīkšu istaba',
        enter_username: 'ievadiet lietotājvārdu',
        must_enter_username: 'kļūda: jāievada lietotājvārds',
        must_select_text: 'kļūda: jāizvēlas teksts',
        must_enter_custom_text: 'kļūda: jāievade pielāgots teksts',
        custom_text_too_short: 'kļūda: pielāgotais teksts ir pārāk īss, tam jābūt vismaz 10 rakstzīmēm',
        inalid_time_small: 'kļūda: nekorekts laiks, laiks nevar būt zem 10 sekundēm',
        inalid_time_large: 'kļūda: nekorekts laiks, laiks nevar būt lielāks par 120 sekundēm',
        invalid_player_count_large:
            'kļūda:  nekorekts spēlētāju daudzums, maskimālais spēlētāju daudzums nevar pārsniegt 10',
        invalid_player_count_small:
            'kļūda:  nekorekts spēlētāju daudzums, maksimālais spēlētāju dauduzms nevar būt mazāks par 2',
        current_lobby_id: 'pašreizējais istabas id',
        custom_text_too_long: 'kļūda: pielāgotais teksts ir pārāk garšs (maksimums 1000 rakstīzmes)',
        players: 'spelētāji',
        copied: 'nokopēts',
        copy_to_clipboard: 'kopēt uz starpliktuvi',
        username: 'lietotājvārds',
        role: 'loma',
        wait_for_owner_to_start_the_race: 'gaidi, kad istabas līderis sāks sacensības',
        leader: 'līderis',
        player: 'spēlētājs',
        mistake_count: 'kļūdu skaits',
        progress: 'progress',
        latvian_keyboard_typing_Platform: 'latviešu klaviatūras rakstīšanas platforma',
        sign_out: 'izrakstīties',
        sign_up: 'reģistrēties',
        sign_in: 'pieslēgties',
        choose_preferable_keyboard_layout: 'izvēlieties vēlamo klaviatūras izkārtojumu',
        show_keyboard_layout: 'rādīt tastatūras izkārtojumu',
        show_hands: 'rādīt rokas',
        keyboard_settings: 'klaviatūras iestatījumi',
        keyboard_layout: 'klaviatūras izkārtojums',
        not_enough_players_to_start: 'nav pietiekami daudz spēlētāji, lai sāktu, vajadzīgi vismaz 2 spelētaji',
        start_game: 'sākt spēli',
        games: 'spēles',
        choose_game: 'īzvēlieties spēli',
        hide_words: 'palēpt vārdus',
        round: 'raunds',
        type_word_that_shows_above: 'rakstiet vārdu, kas parādās augstāk',
        game_over_you_held_up: 'spele beigusies! Tu izturēji',
        rounds: 'raundus',
        we_have_no_words_left: 'mums vairs nav vārdu, ko tev iedot apsveicu',
    },
};

export default translations;
