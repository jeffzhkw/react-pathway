import { useState } from 'react';

export default function AddFriendForm({ onAddFriend }) {

    const [enteredName, setEnteredName] = useState("")

    const handleAddNewFriendSubmit = (e) => {
        e.preventDefault();

        if (!enteredName) return

        onAddFriend({
            id: crypto.randomUUID(),
            name: enteredName,
            balance: 0,
        });

        setEnteredName("")

    }

    return (
        <>
            <form>
                <label>
                    Name:
                    <input value={enteredName} onChange={(e) => setEnteredName(e.target.value)} type="text" />
                </label>
                <button onClick={handleAddNewFriendSubmit}>Add now</button>
            </form>
        </>
    );
}