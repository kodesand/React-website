import './style.css'

const Card = ({ classname, children }) => {
  return <article className={`card ${classname}`}>{children}</article>
}

export default Card
