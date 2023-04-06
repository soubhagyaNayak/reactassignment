function Template({ userPoints, computerPoints, userChoice, computerChoice }) {
    return (
        <div>

            <h1 className="head">Rock Paper scissors</h1>
            <div className="Point">
                <h1>User Points : {userPoints}</h1>
                <h1>Computer points :{computerPoints}</h1>
            </div>
            <div className="choice">
                <div className="choice-user">
                    <h1>User choice:</h1>
                    <img
                        className="user-hand"
                        src={`./images/${userChoice}.png`}
                        alt=""
                    />
                </div>
                <div className="choice-computer">
                    <h1>Computer choice</h1>
                    <img style={{ backgroundColor: "darkgoldenrod" }}
                        className="computer-hand"
                        src={`./images/${computerChoice}.png`}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )

}
export default Template