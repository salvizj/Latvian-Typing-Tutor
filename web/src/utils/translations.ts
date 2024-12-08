type Translations = {
    [language: string]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        // Core Navigation & Authentication
        login: 'Login',
        logout: 'Logout',
        sign_in: 'Sign in',
        sign_out: 'Sign out',
        sign_up: 'Sign up',
        home: 'Home',
        profile: 'Profile',

        // User Information
        username: 'Username',
        email: 'Email',
        password: 'Password',
        confirm_password: 'Confirm password',
        user_id: 'User identifier',
        role: 'Role',

        // UI Settings & Appearance
        language: 'EN',
        theme_dark: 'Dark',
        theme_light: 'Light',
        appearance_settings: 'Appearance settings',
        text_settings: 'Text settings',
        text_type: 'Text type',

        // Keyboard Settings
        keyboard_settings: 'Keyboard settings',
        keyboard_layout: 'Keyboard layout',
        choose_preferable_keyboard_layout: 'Choose preferable keyboard layout',
        show_keyboard_layout: 'Show keyboard layout',
        show_hands: 'Show hands',
        keyboard_input_label: 'Type the text above',

        // Lessons & Learning
        lessons: 'Lessons',
        lesson: 'Lesson',
        completed: 'Completed',
        difficulty: 'Difficulty',
        lesson_difficulty: 'Lessons difficulty',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        expert: 'Expert',
        all_difficulty: 'All difficulty',
        back_to_lessons: 'Back to lessons',

        // Typing Test Features
        typing_test: 'Typing test',
        typing_test_completed: 'Typing test completed.',
        start_test: 'Start test',
        select_time: 'Select time.',
        seconds: 'Seconds',
        mistakes: 'Mistakes',
        wpm: 'Words per minute',
        time: 'Time',
        test_id: 'Test identificator',

        // Typing Race Features
        typing_race: 'Typing race',
        typing_race_lobby: 'Typing race lobby.',
        start_typing_race: 'Start typing race',
        create_lobby: 'Create lobby',
        join_lobby: 'Join lobby',
        current_lobby_id: 'Current lobby identifier.',
        enter_lobby_id: 'Enter lobby identifier.',
        place: 'Place',
        race_id: 'Race identificator',
        select_max_player_count: 'Select maximum player count',
        max_player_count: 'Maximum player count',
        go_to_type_racing_lobby: 'Go to type racing lobby',
        enter_username: 'Enter username',

        // Game Settings
        games: 'Games',
        choose_game: 'Choose game',
        start_game: 'Start game',
        round: 'Round',
        rounds: 'Rounds',
        players: 'Players',
        leader: 'Leader',
        player: 'Player',
        progress: 'Progress.',

        // History & Stats
        history: 'History',
        date: 'Date',
        date_from: 'Date from',
        date_till: 'Date till',
        mistake_count: 'Mistake count',
        test_count_0: 'You haven`t done any typing test.',
        race_count_0: 'You haven`t done any typing race.',

        // Text Management
        select_text_option: 'Select text option.',
        pick_text: 'Pick text.',
        custom_text: 'Custom text.',
        enter_custom_text: 'Enter custom text.',
        choose_predefined_text: 'Choose predefined text.',
        hide_words: 'Hide words',

        // UI Actions
        create: 'Create',
        join: 'Join',
        restart: 'Restart',
        cancel: 'Cancel',
        edit: 'Edit',
        save_changes: 'Save changes',
        copied: 'Copied',
        copy_to_clipboard: 'Copy to clipboard',
        loading: 'Loading',
        filter: 'Filter',

        // Stats & Progress Messages
        you_have_completed: 'You have completed',
        out_of: 'Out of',
        first_completed_lesson: 'First completed lesson:',
        most_recent_completed_lesson: 'Most recent completed lesson:',
        latvian_keyboard_typing_Platform: 'Latvian keyboard typing platform.',

        // Error Messages
        error_missing_fields: 'Error: Please fill in all the required fields.',
        error_missing_email: 'Error: Email is required. Please enter a valid email address.',
        error_missing_password: 'Error: Password is required. Please enter a password.',
        error_invalid_email: 'Error: The email address is invalid. Please enter a valid email.',
        error_invalid_credentials: 'Error: Invalid login credentials. Please fill in correct credentials.',
        error_password_must_contain_number: 'Error: Password must contain at least one number.',
        error_password_too_short: 'Error: Password is too short. It must be at least 6 characters.',
        error_confirm_password_and_password_doesnt_match: 'Error: The password and confirm password do not match.',
        error_user_already_registered: 'Error: User already registered.',
        error_sign_out: 'Error: Failed to sign-out. please try again.',
        error_user_not_signed_In: 'Error: You must be signed in to sign out. Please log in first.',
        error_fetching_user: 'Error: Failed to load profile data.',
        error_updading_profile: 'Error: Couldn`t update profile. Please try again later.',
        error_layout_not_found: 'Error: Failed to load keyboard layout.',
        error_expected_character_key_obj_not_found: 'Error: Failed to load expected key object.',
        error_hand_finger_info_not_found: 'Error: Failed to load hand finger info.',
        error_game_not_available: 'Error: Game unavailable. Please try again later!',
        error_lessons_not_available: 'Error: Lessons unavailable. Please try again later!',
        error_failed_to_save_typing_test: 'Error: Failed to save typing test.',
        error_incorrect_date: 'Error: The dates are invalid. The start date cannot be later than the end date.',
        error_incorrect_date_format: 'Error: The dates are invalid. The dates must be in YYYY-MM-DD format.',
        error_incorrect_page: 'Error: The page number is invalid. The page number must be a positive number.',
        error_incorrect_history_type:
            'Error: The history type is invalid. The history type must be "typingTest" or "typingRace".',
        error_failed_to_fetch_typing_and_race_count: 'Error: Failed to fetch typing and race count.',
        error_failed_to_fetch_typing_data: 'Error: Failed to fetch typing data',
        error_fetching_lesson_text: 'Error: Failed to load lesson.  Please try again.',
        error_fetching_poet_text: 'Error: Error loading poet text. Please try again.',
        error_lesson_id_not_provide: 'Error: Lesson ID was not provided. Please select a lesson.',
        error_lesson_id_not_a_number: 'Error: The lesson identifier is not a valid number. Please enter a correct ID.',
        error_no_lessons_found_with_this_difficulty: 'Error: No lessons found with this difficulty level.',
        error_no_lessons_found: 'Error: No lessons found. Please try again.',

        // Validation Messages
        must_enter_username: 'Error: Enter username.',
        must_enter_costum_text: 'Error: Enter custom text.',
        must_enter_lobby_id: 'Error: Enter lobby identifier.',
        must_select_text: 'Error: Must select text.',
        must_select_game: 'Error: Must select game.',
        must_enter_custom_text: 'Error: Must enter custom text.',
        custom_text_too_short: 'Error: Custom text is too short, needs to be at least 10 characters.',
        custom_text_too_long: "Error: Custom text can't be over 1000 characters.",
        inalid_time_small: "Error: Invalid time, time can't be under 10 seconds.",
        inalid_time_large: "Error: Invalid time, time can't be over 120 seconds.",
        invalid_player_count_large: "Error: Invalid player count, maximum player count can't be over 10.",
        invalid_player_count_small: "Error: Invalid player count, maximum player count can't be under 2.",

        // Game Status Messages
        not_enough_players_to_start: 'Not enough players to start, need at least 2 players.',
        wait_for_owner_to_start_the_race: 'Wait for lobby leader to start the race.',
        game_over_you_held_up: 'Game over, you held up.',
        we_have_no_words_left: "We don't have any more words to give you, congratulations.",
        type_word_that_shows_above: 'Type word that shows above.',
    },

    lv: {
        // Core Navigation & Authentication
        login: 'Pieslēgties',
        logout: 'Atslēgties',
        sign_in: 'Pieslēgties',
        sign_out: 'Izrakstīties',
        sign_up: 'Reģistrēties',
        register: 'Reģistrēties',
        home: 'Mājas',
        profile: 'Profils',

        // User Information
        username: 'Lietotājvārds',
        email: 'E-pasts',
        password: 'Parole',
        confirm_password: 'Apstiprinājuma parole',
        user_id: 'Lietotāja identifikators',
        role: 'Loma',

        // UI Settings & Appearance
        language: 'LV',
        theme_dark: 'Tumšs',
        theme_light: 'Gaišs',
        appearance_settings: 'Izskata iestatījumi',
        text_settings: 'Teksta iestatījumi',
        text_type: 'Teksta tips',

        // Keyboard Settings
        keyboard_settings: 'Klaviatūras iestatījumi',
        keyboard_layout: 'Klaviatūras izkārtojums',
        choose_preferable_keyboard_layout: 'Izvēlieties vēlamo klaviatūras izkārtojumu',
        show_keyboard_layout: 'Rādīt klaviatūras izkārtojumu',
        show_hands: 'Rādīt rokas',
        keyboard_input_label: 'Rakstiet tekstu, kas atrodas augstāk',

        // Lessons & Learning
        lessons: 'Nodarbības',
        lesson: 'Nodarbība',
        completed: 'Pabeigta',
        difficulty: 'Grūtība',
        lesson_difficulty: 'Nodarbību grūtība',
        beginner: 'Iesācēja',
        intermediate: 'Vidēja',
        advanced: 'Izaicinoša',
        expert: 'Eksperta',
        all_difficulty: 'Visu grūtību',
        back_to_lessons: 'Atpakaļ pie nodarbībām',

        // Typing Test Features
        typing_test: 'Rakstīšanas tests',
        typing_test_completed: 'Rakstīšanas tests pabeigts',
        start_test: 'Sākt testu',
        select_time: 'Izvēlieties laiku',
        seconds: 'Sekundes',
        mistakes: 'Kļūdas',
        wpm: 'Vārdu skaits minūtē',
        time: 'Laiks',
        test_id: 'Testa identifikators',
        custom: 'Pielagots',
        poet: 'Dzejnieka',

        // Typing Race Features
        typing_race: 'Rakstīšanas sacensības',
        typing_race_lobby: 'Rakstīšanas sacīkšu istaba',
        start_typing_race: 'Sākt rakstīšanas sacensības',
        create_lobby: 'Izveidot istabu',
        join_lobby: 'Pievienoties istabai',
        current_lobby_id: 'Pašreizējais istabas ID',
        enter_lobby_id: 'Ievadiet istabas identifikatoru',
        select_max_player_count: 'Izvēlieties maksimalo spelētaju daudzumu',
        max_player_count: 'Maksimālais spēlētāju daudzums',
        go_to_type_racing_lobby: 'Iet uz rakstīšanas sacensību istabu',
        enter_username: 'Ievadiet lietotajvārdu',

        // Game Settings
        games: 'Spēles',
        choose_game: 'Izvēlieties spēli',
        start_game: 'Sākt spēli',
        round: 'Raunds',
        rounds: 'Raundi',
        players: 'Spēlētāji',
        leader: 'Līderis',
        player: 'Spēlētājs',
        progress: 'Progress',
        place: 'Vieta',
        race_id: 'Sacensību identifikators',

        // History & Stats
        history: 'Vēsture',
        date: 'Datums',
        date_from: 'Datums no',
        date_till: 'Datums līdz',
        mistake_count: 'Kļūdu skaits',
        test_count_0: 'Jums nav veikts neviens rakstīšanas tests',
        race_count_0: 'Jums nav veiktas nevienas rakstīšanas sacensības',

        // Text Management
        select_text_option: 'Izvēlieties teksta opciju',
        pick_text: 'Izvēlieties tekstu',
        custom_text: 'Pielāgots teksts',
        enter_custom_text: 'Ievadiet pielāgotu tekstu',
        hide_words: 'Paslēpt vārdus',

        // UI Actions
        create: 'Izveidot',
        join: 'Pievienoties',
        restart: 'Atkārtot',
        cancel: 'Atcelt',
        edit: 'Rediģēt',
        save_changes: 'Saglabāt izmaiņas',
        copied: 'Nokopēts',
        copy_to_clipboard: 'Kopēt uz starpliktuvi',
        loading: 'Lādējas',

        // Stats & Progress Messages
        you_have_completed: 'Jūs esat pabeidzis',
        out_of: 'No',
        first_completed_lesson: 'Pirmā pabeigtā nodarbība:',
        most_recent_completed_lesson: 'Pēdējā pabeigtā nodarbība:',

        // Error Messages
        error_missing_fields: 'Kļūda: Lūdzu, aizpildiet visus obligātos laukus',
        error_missing_email: 'Kļūda: E-pasts ir obligāts. Lūdzu, ievadiet e-pasta adresi',
        error_missing_password: 'Kļūda: Parole ir obligāta. Lūdzu, ievadiet paroli',
        error_missing_confirm_password:
            'Kļūda: Apstiprinājuma parole ir obligāta. Lūdzu, ievadiet apstiprinājuma paroli',
        error_invalid_email: 'Kļūda: E-pasta adrese ir nederīga. Lūdzu, ievadiet derīgu e-pasta adresi',
        error_invalid_credentials: 'Kļūda: Nederīgi pieslēgšanās dati. Lūdzu, ievadiet korektus datus',
        error_password_must_contain_number: 'Kļūda: Nederīga parole. Parolei jābūt vismaz vienam ciparam',
        error_password_too_short: 'Kļūda: Nederīga parole. Parole ir pārāk īsa. Tai jābūt vismaz 6 rakstzīmēm',
        error_confirm_password_and_password_doesnt_match: 'Kļūda: Parole un apstiprinājuma parole nesakrīt',
        error_user_already_registered: 'Kļūda: Lietotājs jau ir reģistrējies',
        error_sign_out: 'Kļūda: Neizdevās izrakstīties. Lūdzu, mēģiniet vēlreiz',
        error_user_not_signed_In:
            'Kļūda: Vispirms jābūt pieslēgtam, lai varētu izrakstīties. Lūdzu, piesakieties vispirms',
        error_fetching_user: 'Kļūda: Neizdevās ielādēt profila datus',
        error_updading_profile: 'Kļūda: Neizdevās atjaunināt profila datus. Lūdzu, mēģiniet vēlāk',
        error_layout_not_found: 'Radās kļūda. Neizdevās ielādēt klaviatūras izkārtojumu',
        error_expected_character_key_obj_not_found: 'Kļūda: Neizdevās ielādēt sagaidāmo taustiņa objektu',
        error_hand_finger_info_not_found: 'Kļūda: Neizdevās ielādēt rokas pirkstu informāciju',
        error_didint_find_key_obj: 'Kļūda: Neizdevās atrast taustiņa objektu',
        error_game_not_available: 'Kļūda: Spēle nav pieejama. Lūdzu, mēģiniet vēlāk!',
        error_lessons_not_available: 'Kļūda: Nodarbības nav pieejamas. Lūdzu, mēģiniet vēlāk!',
        error_failed_to_save_typing_test: 'Kļūda; neizdevās saglabāt rakstīšanas testu',
        error_incorrect_date: 'Kļūda: Datumi nav derīgi. Sākuma datums nevar būt vēlāks par beigu datumu',
        error_incorrect_date_format: 'Kļūda: Datumi nav derīgi. Datumi ir jābūt YYYY-MM-DD',
        error_incorrect_page: 'Kļūda: Lapas numurs nav derīgs. Lapas numuram ir jābūt pozitīvam skaitlim',
        error_incorrect_history_type:
            'Kļūda: Vēstures tips nav derīgs. Vēstures tipam ir jābūt "typingTest" vai "typingRace"',
        error_failed_to_fetch_typing_and_race_count: 'Kļūda: nevarēja iegūt testu un/vai sacensību skaitu',
        error_failed_to_fetch_typing_data: 'kļūda: nevarēja iegūt rakstīšanas datus',

        // Validation Messages
        must_enter_username: 'Kļūda: Jāievada lietotājvārdu',
        must_enter_costum_text: 'Kļūda: Jāievada pielāgotu tekstu',
        must_enter_lobby_id: 'Kļūda: Jāievada istabas identifikatoru',
        must_select_text: 'Kļūda: Jāizvēlas teksts',
        must_select_game: 'Kļūda: Jāizvēlas spēle',
        must_enter_custom_text: 'Kļūda: Jāievada pielāgots teksts',
        custom_text_too_short: 'Kļūda: Nederīgs pielāgots teksts. Pielāgotam teksam ir jābūt vismaz 10 rakstzīmēm',
        custom_text_too_long:
            'Kļūda: Nederīgs pielāgots teksts. Pielāgotais tekts ir jābūt ne vairāk par 1000 rakstzīmēm',
        inalid_time_small: 'Kļūda: Nederīgs laiks. Laiks nevar būt zem 10 sekundēm',
        inalid_time_large: 'Kļūda: Nederīgs laiks. Laiks nevar būt lielāks par 120 sekundēm',
        invalid_player_count_large:
            'Kļūda: Nederīgs spēlētaju daudzums. Maksimālais spēlētāju daudzums nevar pārsniegt 10',
        invalid_player_count_small:
            'Kļūda: nekorekts spēlētāju daudzums, maksimālais spēlētāju daudzums nevar būt mazāks par 2',

        // Game Status Messages
        not_enough_players_to_start: 'Nav pietiekami daudz spēlētāju, lai sāktu, vajadzīgi vismaz 2 spēlētāji',
        wait_for_owner_to_start_the_race: 'Gaidi, kad istabas līderis sāks sacensības',
        game_over_you_held_up: 'Spēle beigusies! Tu izturēji',
        we_have_no_words_left: 'Mums vairs nav vārdu, ko tev iedot, apsveicu',
    },
};

export default translations;
