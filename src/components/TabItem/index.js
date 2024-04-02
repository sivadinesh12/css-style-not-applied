// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {tabId, displayText} = tabDetails
  const activeClassName = isActive ? 'actiive-btn' : ''
  const onChangeTab = () => {
    clickTabItem(tabId)
  }
  return (
    <li className="tab-item">
      <button
        type="button"
        className={`btn ${activeClassName}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
