import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {displayText} = tabDetails
  const onClickTabIem = () => {
    updateActiveTab(tabDetails.tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  console.log(activeTabClassName)
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName} `}
        onClick={onClickTabIem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
