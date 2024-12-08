import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import translate from '../../utils/translate';
import DefaultPanel from './DefaultPanel';
import { MdClose } from 'react-icons/md';
import { useTyping } from '../../context/TypingContext';

type ButtonProps = {
    text: string;
    onClick: () => void;
    styleClass?: string;
    customContent?: React.ReactNode;
};

type CompletionScreenProps = {
    title: string;
    buttons: ButtonProps[];
    error?: string | null;
    showMetrics?: boolean;
};

const CompletionScreen: React.FC<CompletionScreenProps> = ({ title, buttons, error, showMetrics }) => {
    const { language } = useLanguage();
    const [close, setClose] = useState(false);
    const { wpm, mistakeCount } = useTyping();
    const [tempWpm, setTempWpm] = useState<number>(0);
    const [tempMistakeCount, setTempMistakeCount] = useState<number>(0);

    useEffect(() => {
        if (!showMetrics) return;

        setTempWpm(wpm);
        setTempMistakeCount(mistakeCount);
    }, [wpm, mistakeCount, showMetrics]);

    return (
        <>
            {!close && (
                <DefaultPanel>
                    <h1 className="text-3xl font-bold mb-8 text-center">{translate(title, language)}</h1>

                    {showMetrics && (
                        <div className="text-center mb-6">
                            {tempWpm && (
                                <p className="text-xl mb-2">
                                    {translate('wpm', language)} {tempWpm}
                                </p>
                            )}
                            {tempMistakeCount && (
                                <p className="text-xl">
                                    {translate('mistakes', language)} {tempMistakeCount}
                                </p>
                            )}
                        </div>
                    )}

                    {error && (
                        <p className="text-sm text-red-500 flex justify-center items-center p-4">
                            {translate(error, language)}
                        </p>
                    )}

                    <div className="flex flex-row gap-4 items-center justify-center">
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                onClick={button.onClick}
                                className={`bg-transparent text-primary py-2 px-4 rounded-md text-center hover:opacity-90 transition-opacity text-base hover:text-color-primary-hover-text border secondary${button.styleClass || ''}`}
                            >
                                {button.customContent || translate(button.text, language)}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setClose(true)}
                        className="absolute top-4 right-4 text-3xl hover:text-color-primary-hover-text"
                    >
                        <MdClose />
                    </button>
                </DefaultPanel>
            )}
        </>
    );
};

export default CompletionScreen;
