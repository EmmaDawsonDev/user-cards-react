
import "./card.css"

function Card(props) {
  return (
    <section className="card">
      <section>
      <h1>{props.user.name}</h1>
      <p>{props.user.username}</p>
      <p>{props.user.phone}</p>
      <p>{props.user.email}</p>
      </section>
      <img className="monster-img" src={`https://robohash.org/${props.user.id}?set=set4`} alt="monster"/>
    </section>
  )
}

export default Card