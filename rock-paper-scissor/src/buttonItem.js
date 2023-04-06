function ButtonItem({ gameOver, setUserChoice, setComputerChoice }) {
    const reset = () => {
        window.location.reload();
    };

    const choices = ["rock", "paper", "scissors"];

    const handleClick = (choice) => {
        setUserChoice(choice);
        generateComputerChoice();
    };
    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    };
    return (
        <>
            <div>
                {
                    gameOver ? (<button className="rbtn" onClick={() => reset()}>Restart Game? </button>)
                        : (<div className="main-btn">
                            {choices.map((choice, index) => (
                                <div className="main-btn">

                                    <button
                                        className="btn"
                                        key={index}
                                        onClick={() => handleClick(choice)}
                                    >
                                        {choice}
                                    </button>
                                </div>
                            ))}{" "}
                        </div>)
                }
            </div></>

    )
}

export default ButtonItem