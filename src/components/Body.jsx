// Body.js
import Category from "./Category";
import AddSvg from "../assets/add2.svg";
import { useState, useRef } from "react";
import Dialog from "./Dialog";
import Data from "../Data/Data";
import Input from "../Util/Input";
import DisplayAdd from "./DisplayAdd";
import ListItem from "./ListItem";
import inputStyles from "../Data/styles";

export default function Body() {
  // Main state and refs
  const userAddressRef = useRef();
  const userNameRef = useRef();

  const [address, setAddress] = useState([
    {
      userName: "mary",
      userAddress: "agehgagsvtucducsgcfsdgfus",
      id: Math.random(),
    },
  ]);

  const [showAddandName, setShowAddandName] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [displayObj, setDisplayObj] = useState({
    displayName: "",
    displayAddress: "",
    id: 0,
  });

  // Handlers
  function handleClickedSub(selectedSub) {
    console.log(selectedSub);
  }
  

  function handleOpenDialog() {
    if (userAddressRef.current.value.length < 5)return;
    setOpenDialog((prevState) => !prevState);
  }

  function handleGetAddress() {
    setAddress((prevState) => {
      const newUserData = {
        userName: userNameRef.current.value,
        userAddress: userAddressRef.current.value,
        id: Math.random(),
      };
      return [...prevState, newUserData];
    });
  }

  function handleDelete() {
    setAddress((prevState) =>
      prevState.filter((item) => item.id !== displayObj.id)
    );
    setShowAddandName(false);
  }

  function handleShowAddy(id, userAddress, userName) {
    setShowAddandName((prevState) => !prevState);
    setDisplayObj({ displayName: userName, displayAddress: userAddress, id });
  }

  function handleClearRefs(){
    userAddressRef.current.value = "";
    userNameRef.current.value = "";
    setOpenDialog(false)
  }

  const addLength = address.length;

  return (
    <>
      <div className="category-section">
        {Data.map((item, index) => (
          <Category
            key={index}
            Subscription={item.Subscription}
            buttonColor={item.color}
            handleClickedSub={handleClickedSub}
          />
        ))}
      </div>

      <div className="container userData-section">
        <div className="user-data-box">
          <h2 className="Title">Bitcoin Addresses</h2>
          <ul>
            {addLength >= 1 ? (
              address.map((item) => (
                <ListItem
                  key={item.id}
                  username={item.userName}
                  address={item.userAddress}
                  handleShowAddy={() =>
                    handleShowAddy(item.id, item.userName, item.userAddress)
                  }
                />
              ))
            ) : (
              <li className="no-list">Your list of addresses will show here</li>
            )}
            {addLength > 0 && (
              <li className="no-list">
                You have {addLength} friend's address{addLength > 1 ? "es": ""}
              </li>
            )}
          </ul>
        </div>

        <div>
          {showAddandName ? (
            <DisplayAdd handleDelete={handleDelete} displayObj={displayObj} />
          ) : (
            <>
              <div
                className="user-data-box2"
                style={{ textAlign: "center", flexDirection: "column" }}
              >
                <div className="enter-user">
                  <Input
                    className="gen-input"
                    placeholder="Paste or enter user address"
                    required
                    styles={inputStyles}
                    ref={userAddressRef}
                  />
                  <button onClick={handleOpenDialog}>Save</button>
                </div>
                <div className="add--stuff">
                  <div>
                    <img src={AddSvg} alt="add-address" className="add-svg" />
                  </div>
                  <p>Add new address</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {openDialog && (
        <Dialog
          handleClearRefs={handleClearRefs}
          addressPara={
            addLength >= 1 ? address[0].userAddress.slice(0, 18) : ""
          }
          openDialog={openDialog}
          handleGetAddress={handleGetAddress}
          ref={userNameRef}
        />
      )}
    </>
  );
}
