import { useKeyboardSettings } from '../../context/KeyboardSettingsContext';
import { useLanguage } from '../../context/LanguageContext';
import { KeyboardLayouts } from '../../types';
import translate from '../../utils/translate';
import { capitalize } from '../../utils/capitalizeString';
import { MdClose } from 'react-icons/md';
import DefaultPanel from './DefaultPanel';
import { useState } from 'react';
import { FaCog } from 'react-icons/fa';

type KeyboardSettingsProps = {
    isMinimized: boolean;
};

const KeyboardSettings = ({ isMinimized }: KeyboardSettingsProps) => {
    const { setKeyboardLayout, setShowKeyboardLayout, setShowHands, showKeyboardLayout, keyboardLayout, showHands } =
        useKeyboardSettings();
    const { language } = useLanguage();
    const [close, setClose] = useState(true);

    return (
        <>
            {!close && (
                <DefaultPanel>
                    <div className="flex flex-col gap-6 items-center">
                        <h1 className="text-3xl font-bold mb-6 text-center">
                            {capitalize(translate('keyboard_settings', language))}
                        </h1>

                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="keyboardLayout" className="text-primary">
                                {capitalize(translate('keyboard_layout', language))}
                            </label>
                            <select
                                className="w-full p-4 border rounded-md text-color-third bg-color-primary"
                                value={keyboardLayout}
                                onChange={(e) => setKeyboardLayout(e.target.value as KeyboardLayouts)}
                            >
                                <option value="" disabled>
                                    {capitalize(translate('choose_preferable_keyboard_layout', language))}
                                </option>
                                {Object.values(KeyboardLayouts).map((keyboardLayout) => (
                                    <option key={keyboardLayout} value={keyboardLayout}>
                                        {translate(keyboardLayout, language)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    id="showKeyboardLayout"
                                    checked={showKeyboardLayout}
                                    onChange={() => setShowKeyboardLayout(!showKeyboardLayout)}
                                    className="mr-2"
                                />
                                <label htmlFor="showKeyboardLayout" className="text-primary">
                                    {capitalize(translate('show_keyboard_layout', language))}
                                </label>
                            </div>

                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    id="showHands"
                                    checked={showHands}
                                    onChange={() => setShowHands(!showHands)}
                                    className="mr-2"
                                />
                                <label htmlFor="showHands" className="text-primary">
                                    {capitalize(translate('show_hands', language))}
                                </label>
                            </div>
                        </div>

                        <button
                            onClick={() => setClose(true)}
                            className="absolute top-4 right-4 text-3xl hover:text-color-primary-hover-text"
                        >
                            <MdClose />
                        </button>
                    </div>
                </DefaultPanel>
            )}
            <button
                onClick={() => setClose(false)}
                className="text-color-primary flex flex-row-reverse gap-4 justify-end items-center text-lg mt-6 hover:text-color-primary-hover-text"
            >
                {!isMinimized && capitalize(translate('keyboard_settings', language))}
                <FaCog />
            </button>
        </>
    );
};

export default KeyboardSettings;
