import './ScrM.css';

interface StartScreenProps {
    onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => (
    <div className="marauders-container">
        <div className="main-container">
            <h1 className="start-text">Harry Potter Guessing Game</h1>
            <h2>Guess the mystery character in 5 tries!</h2>
            <button className='play-button' onClick={onStart}>Play</button>
        </div>
    </div>
)

export default StartScreen;