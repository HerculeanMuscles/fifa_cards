import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Player(props) {
	return (
		<>
			<Card className="player-card" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.imageUrl} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<div className="row-badge">
						<Row>
							<Col>
								<Card.Text>{props.team}</Card.Text>
							</Col>
							<Col>
								<Image src={props.teamBadge} className="w-25" />
							</Col>
						</Row>
					</div>
					<div className="row-badge">
						<Row>
							<Col>
								<Card.Text>{props.nationality}</Card.Text>
							</Col>
							<Col>
								<Image src={props.nationBadge} className="w-25" />
							</Col>
						</Row>
					</div>
					<Card.Text>Number : {props.jerseyNumber}</Card.Text>
					<Card.Text>Age : {props.age}</Card.Text>
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
