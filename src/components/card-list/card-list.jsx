
import Card from "../card/card"
import "./card-list.css"

function Cardlist(props) {
  return (
    <div className="card-list">
      {props.userList.map(user => {
        return <Card user={user} key={user.id} />
      })

      }
      
    </div>
  )
}

export default Cardlist