import AddFriendForm from "./AddFriendForm";
import ListOfFriend from "./ListOfFriend";
import { useState } from "react";
import SplitBillForm from "./SplitBillForm";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    balance: 0,
  },
];


function App() {

  const [friendList, setFriendList] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false)

  // showSplitBillForm is unnecessary, selectedFriend is enough
  //const [showSplitBillForm, setShowSplitBillForm] = useState(false)

  const [selectedFriend, setSelectedFriend] = useState(null)

  const onAddFriend = (newFriend) => {
    setFriendList((friendList) => [...friendList, newFriend]);
    setShowAddFriendForm((prev) => !prev)
  }

  // const onSelectedFriend = (currSelected) => {
  //   // Controls the UI and selected friend data model
  //   if (!currSelected) return

  //   if (currSelected === selectedFriend && showSplitBillForm) {
  //     setShowSplitBillForm((prev) => !prev)
  //     setSelectedFriend(null)
  //   }
  //   else if (currSelected === selectedFriend && !showSplitBillForm) {
  //     alert("error should not happen")
  //   }
  //   else if (currSelected !== selectedFriend && showSplitBillForm) {
  //     setSelectedFriend(currSelected)
  //   }
  //   else if (currSelected !== selectedFriend && !showSplitBillForm) {
  //     setShowSplitBillForm((prev) => !prev)
  //     setSelectedFriend(currSelected)
  //   }

  // }

  const onSelectedFriend = (currSelected) => {
    // Controls the UI and selected friend data model

    setSelectedFriend((prevSelected) => {
      return prevSelected?.id === currSelected.id ? null : currSelected
    })

  }

  const onSplitBill = (calculatedExpense) => {
    setFriendList((prev) => {
      return prev.map((friend) => {
        if (friend.id === selectedFriend.id) {
          friend.balance += calculatedExpense
        }
        return friend
      })
    })
    setSelectedFriend(null)
  }



  return <>
    <ListOfFriend friendList={friendList} selectedFriend={selectedFriend} onSelectedFriend={onSelectedFriend} />

    {showAddFriendForm && <AddFriendForm onAddFriend={onAddFriend} friendList={friendList} setFriendList={setFriendList} />}
    <button onClick={() => { setShowAddFriendForm((prev) => !prev) }}>
      {showAddFriendForm ? `Close` : "Add New Friend"}
    </button >

    {selectedFriend && <SplitBillForm key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={onSplitBill} />}
  </>
}

export default App;
