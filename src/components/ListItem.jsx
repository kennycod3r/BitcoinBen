export default function ListItem({ username, address, handleShowAddy }) {
  return (
    <li onClick={handleShowAddy} className="list-item">
      <p>{username}</p>
      <p className="grey-small">{address}</p>
    </li>
  )
}
