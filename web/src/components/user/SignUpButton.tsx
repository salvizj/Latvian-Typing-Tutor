import { useLanguage } from '../../context/LanguageContext';
import translate from '../../utils/translate';
import { capitalize } from '../../utils/capitalizeString';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // import useNavigate for navigation

type SignUpBtnProps = {
    isMinimized: boolean;
};

export default function SignUpBtn({ isMinimized }: SignUpBtnProps) {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/sign-up');
    };

    return (
        <button
            onClick={handleSignUp}
            className="text-color-primary text-lg hover:text-color-primary-hover-text flex items-center justify-start flex-row gap-4"
        >
            <FaUserPlus />
            {!isMinimized && capitalize(translate('sign_up', language))}
        </button>
    );
}
