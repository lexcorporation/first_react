interface Props {
  body: string;
}

function Card(CardProps: Props) {
  const { body } = CardProps;

  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere F
      </a>
    </>
  );
}

export default Card;
