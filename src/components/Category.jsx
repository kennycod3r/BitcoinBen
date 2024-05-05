import { useRef, useState } from "react";
import BulletDot from "../Util/BulletDot";

export default function Category({Subscription, buttonColor, handleClickedSub, index}) {
  const [subscribed, setSubscribed] = useState(false);

  const selectedSub = useRef();

  function handleSubscribed() {
    setSubscribed((prevstate) => !prevstate);
    handleClickedSub(selectedSub.current)
  }
  return (
    <>
      <button ref={selectedSub} className="category-btn fsb" onClick={handleSubscribed} style={{backgroundColor: subscribed ? buttonColor: "black"}}>
        <BulletDot BulletColor={"snow"} fbc={subscribed ? "move-dot" : "fixed-bullet"} /> <p>{Subscription}</p>
      </button>
    </>
  );
}
