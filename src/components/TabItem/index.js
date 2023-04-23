import './index.css'

// Write your code here
const TabItem = props => {
  const {item, updateButton, selectedTabID} = props

  const selectThis = () => {
    updateButton(item.tabId)
  }

  const selectedTabClass = selectedTabID === item.tabId ? 'selected-tab' : ''

  return (
    <li key={item.tabId}>
      <button
        type="button"
        className={`tab ${selectedTabClass}`}
        onClick={selectThis}
      >
        {item.displayText}
      </button>
    </li>
  )
}

export default TabItem
