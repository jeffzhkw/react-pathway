import { useState } from "react";
export default function SplitBillForm({ selectedFriend, onSplitBill }) {

    const [billAmount, setBillAmount] = useState(0)
    const [userExpense, setUserExpense] = useState(0)
    //const [calculatedExpense, setCalculatedExpense] = useState(0)
    const [selectedPayer, setSelectedPayer] = useState("user")

    const friendExpense = billAmount ? billAmount - userExpense : 0

    // useEffect is unnecessary, calculatedExpense can be calculated each time
    // useEffect(() => {
    //     if (!selectedPayer) return

    //     if (selectedPayer === "user") {
    //         setCalculatedExpense(billAmount - userExpense)
    //     }
    //     else if (selectedPayer === "friend") {
    //         setCalculatedExpense(userExpense - billAmount)
    //     }
    // }, [billAmount, userExpense, selectedPayer])

    const handleSplitSubmit = (e) => {
        e.preventDefault();

        if (!billAmount || !userExpense) return;

        // here it should modify data model
        console.log()
        onSplitBill(selectedPayer === "user" ? friendExpense : -userExpense)

        setBillAmount(0)
        setUserExpense(0)

    }

    return (
        <>
            <form>
                <label>
                    Bill amount:
                    <input value={billAmount} onChange={(e) => setBillAmount(Number(e.target.value))} type="text" />
                </label>
                <label>
                    Your expense
                    <input value={userExpense} onChange={(e) => setUserExpense(Number(e.target.value) > billAmount ? billAmount : Number(e.target.value))} type="text" />
                </label>
                <label>
                    {selectedFriend.name}'s expense
                    <input value={(friendExpense)} type="text" disabled />
                </label>
                <label>
                    Who is paying?
                    <select value={selectedPayer} onChange={(e) => { setSelectedPayer(e.target.value) }}>
                        <option value="user">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </label>
                <button onClick={handleSplitSubmit}>Split bill</button>
            </form>
        </>
    );
}