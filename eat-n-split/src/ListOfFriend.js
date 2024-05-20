

export default function ListOfFriend({ friendList, selectedFriend, onSelectedFriend }) {


    return (
        <div>
            <h1>Friends List</h1>
            <p>Negative means you owe that amount of money</p>
            <p>Positive means the friend owe you that amount of moeny</p>
            <ul>
                {friendList.map((friend) => (
                    <li key={friend.id}>
                        <h2>{friend.name}</h2>
                        {friend.balance < 0 ? (
                            <p style={{ color: "red" }}>Balance: {friend.balance}</p>
                        ) : (
                            <p>Balance: {friend.balance}</p>
                        )}
                        <button onClick={() => {
                            // optimization: this logic can pass into onSelecteFriend
                            onSelectedFriend(friend)
                            // here use optional chaining to prevent error rather than using `selectedFriend && ....`
                        }}>{selectedFriend?.id === friend.id ? "Close" : "Select"}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}