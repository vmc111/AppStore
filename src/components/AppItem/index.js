import './index.css'

const AppItem = props => {
  const {item} = props

  return (
    <li className="app-card" key={item.appId}>
      <img src={item.imageUrl} alt={item.appName} className="logo" />
      <p>{item.appName}</p>
    </li>
  )
}

export default AppItem
