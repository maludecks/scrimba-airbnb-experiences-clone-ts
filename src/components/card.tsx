export type CardProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  coverImg: string;
  stats: {
    rating: number;
    reviewCount: number;
  };
  location: string;
  openSpots: number;
};

export function Card({ item }: { item: CardProps }) {
  let badgeText;

  if (item.openSpots === 0) {
    badgeText = "Sold out";
  } else if (item.location === "Online") {
    badgeText = item.location;
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--cover" src={item.coverImg} alt={item.title} />
      <div className="card--stats">
        <img src="/images/review-star.png" alt="Star icon" />
        <span className="card--stats-rating">{item.stats.rating}</span>
        <span className="card--stats-count gray">{item.stats.reviewCount}</span>
        <span className="card--location gray">• {item.location}</span>
      </div>
      <h2 className="card--title">{item.title}</h2>
      <p className="card--price">
        <strong>From ${item.price}</strong> / person
      </p>
    </div>
  );
}
