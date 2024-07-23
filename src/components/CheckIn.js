import React from 'react';
import styled from 'styled-components'; // Import styled-components
import colorSharp from "../assets/img/color-sharp.png";
import heroImage from "../assets/img/heroImage.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define the styled button
const Button = styled.button`
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 6px 8px; /* Reduced padding */
  background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 16px; /* Reduced font size */
  margin-top: 12px; /* Reduced margin */
  display: inline-block;
  color: #fff;
  cursor: pointer;
  border-radius: 4px; /* Reduced border radius */
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.7) -5.91%, rgba(74, 47, 189, 0.7) 111.58%);
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.9) -5.91%, rgba(74, 47, 189, 0.9) 111.58%);
    transform: scale(1);
  }
`;

// Define the styled image
const StyledImage = styled.img`
  width: 40%; /* Further reduced width */
  max-width: 250px; /* Reduced maximum width */
  height: auto; /* Maintain aspect ratio */
  margin-top: 12px; /* Reduced margin above */
`;

// Define the styled section
const Section = styled.section`
  padding: 20px 0; /* Further reduced padding */
`;

export const CheckIn = () => {
  return (
    <Section className="CheckIn" id="CheckIn">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Mark Attendance</h2>
                        <p>
                          Our face recognition system simplifies the process of marking attendance.<br />
                          With cutting-edge technology, we offer an efficient, secure, and user-friendly solution.
                        </p>
                        <Button>Mark Attendance</Button> {/* Added the button here */}
                        <StyledImage src={heroImage} alt="Attendance System" />
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </Section>
  )
}
 