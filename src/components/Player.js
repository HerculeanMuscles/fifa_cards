import Card from "react-bootstrap/Card";

function Player(props) {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.imageUrl} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text> {props.nationality}</Card.Text>
					<Card.Text> {props.jerseyNumber}</Card.Text>
					<Card.Text> {props.age}</Card.Text>
					<Card.Text> </Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}

Player.defaultProps = {
	name: "Unknown Player",
	imageUrl: "https://example.com/default-image.jpg",
	nationality: "Unknown Nationality",
	jerseyNumber: "N/A",
	age: "N/A",
};

export default Player;
