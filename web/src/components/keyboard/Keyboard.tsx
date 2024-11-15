import KeyboardInput from "./KeyboardInput"
import TextDisplayBox from "./TextDisplayBox"
import VirtualKeyboard from "./VirtualKeyboard"
import LeftHand from "./Hands/LeftHand"
import RightHand from "./Hands/RightHand"
import { useKeyPressManagement } from "../../hooks/useCharacterManagement"

type KeyboardProps = {
	text: string // The text the user is typing
}

const Keyboard: React.FC<KeyboardProps> = ({ text }) => {
	const {
		handleKeyPress: manageKeyPress,
		expectedCharacter,
		currentCharacterIndex,
		handFingerInfo,
	} = useKeyPressManagement(text)
	// console.log("Triggered rerender in Kayboard component")
	// console.log("Expected caharcter", expectedCharacter)
	// console.log("Current Character index", currentCharacterIndex)
	return (
		<>
			<TextDisplayBox
				text={text}
				currentCorrectTextCharacterIndex={currentCharacterIndex}
			/>

			<KeyboardInput handleKeyPress={manageKeyPress} />

			<div className="flex items-center justify-between">
				<div className="flex-shrink-0">
					<LeftHand handFingerInfo={handFingerInfo} />
				</div>

				<div className="flex-grow mx-4">
					<VirtualKeyboard expectedCharacter={expectedCharacter} />
				</div>

				<div className="flex-shrink-0">
					<RightHand handFingerInfo={handFingerInfo} />
				</div>
			</div>
		</>
	)
}

export default Keyboard
