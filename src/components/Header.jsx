import BulletDot from "../Util/BulletDot";

export default function Header() {
  return (
    <div className="header fsb">
      <ul>
        <li className="flex">
          <BulletDot BulletColor={"pink"} />
          <p>BitcoinBen</p>
        </li>
      </ul>
      <ul className="flex ul--header">
        <li className="flex">
          <BulletDot />
          <p>Home</p>
        </li>
        <li className="flex">
          <BulletDot />
          <p>eth</p>
        </li>
        <li className="flex">
          <BulletDot />
          <p>other</p>
        </li>
      </ul>
    </div>
  );
}
