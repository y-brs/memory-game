import './index.css'

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/images/cover.png" alt="cover" />
      </div>
    </div>
  )
}
