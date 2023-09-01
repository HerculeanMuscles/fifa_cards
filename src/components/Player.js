import Card from "react-bootstrap/Card";

function Player(props) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text> {props.nationality}</Card.Text>
				<Card.Text> {props.jerseyNumber}</Card.Text>
				<Card.Text> {props.age}</Card.Text>
				<Card.Text> {props.imageUrl}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Player;
