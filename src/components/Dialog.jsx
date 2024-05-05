import userSvg from "../assets/userSvg.png";
import { useState, useRef } from "react";
import { forwardRef } from "react";
import Input from "../Util/Input";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog(
  { addressPara, handleGetAddress, handleClearRefs, openDialog },
  ref
) {
  const [saveName, setSaveName] = useState("");
  const closeDialog = useRef();

  function handleChange(event) {
    setSaveName(event.target.value);
  }

  function handleSave() {
    if (saveName) {
      handleGetAddress();
    }

    handleClearRefs();
    closeDialog.current.close();
    setSaveName("");
  }

  return createPortal(
    <div className={openDialog ? "innerDialogBox" : ""}>
      <dialog ref={closeDialog} open>
        <div className="fc" style={{ flexDirection: "column" }}>
          <div className="circle">
            <img src={userSvg} alt="svg" />
          </div>
          <p>
            <b>{saveName ? saveName : "Name"}</b>
          </p>
          <p>{addressPara}...</p>
          <Input placeholder="enter name" ref={ref} onChange={handleChange} />
          <button onClick={handleSave}>save</button>
        </div>
      </dialog>
    </div>,
    document.getElementById("dialogBox")
  );
});

export default Dialog;
