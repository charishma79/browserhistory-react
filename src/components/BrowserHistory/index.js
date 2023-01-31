import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const deleteItem = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-list">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="logo-container">
        <img src={logoUrl} className="app-logo" alt="domain logo" />
        <div className="items">
          <p className="name">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
      <div className="delete-container">
        <button className="button" type="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
