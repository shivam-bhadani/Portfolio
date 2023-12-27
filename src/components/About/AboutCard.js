import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Shivam Bhadani </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />I am a 4th year undergraduate at IIT Kanpur.
            <br />
            <br />
            Some of my competitive programming achievements are:
          </p>
          <ul>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 1766 (Expert) on <a className="purple" style={{ "textDecoration": "none" }} href="https://codeforces.com/profile/_shivam_coder_" target={"_blank"}>Codeforces</a>
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 156 in Codeforces Round 875 (Div. 2)
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 527 in Codeforces Round 865 (Div. 2)
            </li>
            <li className="about-activity">
              <FaStar /> Achieved Highest Rating of 2029 (5 Star) on <a className="purple" style={{ "textDecoration": "none" }} href="https://www.codechef.com/users/shivambhadani" target={"_blank"}>CodeChef</a>
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 617 (India Rank 411) in Google Kickstart Round G 2022
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank 778 (India Rank 512) in Google Kickstart Round F 2022
            </li>
            <li className="about-activity">
              <FaStar />  Guardian (Max Rating 2315) in <a className="purple" style={{ "textDecoration": "none" }} href="https://leetcode.com/shivambhadani/" target={"_blank"}>leetcode</a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
