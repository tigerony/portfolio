import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">William Lei </span>
            from <span className="purple"> New York, US.</span>
            <br />
            <br />I am a highly-skilled{" "}
            <span className="purple">full-stack developer</span> with
            <br />
            over five years of experience in{" "}
            <span className="purple">React development.</span>
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "You’ll never find a rainbow if you’re looking down!"{" "}
          </p>
          <footer className="blockquote-footer">William Lei</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
