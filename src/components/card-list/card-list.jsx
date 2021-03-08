
import Card from "../card/card"
import "./card-list.css"

function Cardlist(props) {
  return (
    <div class="card-list">
      {props.userList.map(user => {
        return <Card user={user} key={user.id} />
      })

      }
      
    </div>
  )
}

export default Cardlist