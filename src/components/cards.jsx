// Card.jsx
import React from 'react';
import styled from 'styled-components';

// Import your images
import aiMLmage from '../assets/ai-ml.jpg';
import dsaImage from '../assets/dsa.jpeg';
import eventImage from '../assets/event.jpeg';
import marketingImage from '../assets/marketing.jpeg';
import mediaImage from '../assets/media.jpeg';
import webImage from '../assets/webdev.jpg';
import emerge from '../assets/emergetech.jpg';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="wrapper">
                <div className="inner" style={{ '--quantity': 7 }}>

                    <div className="card" style={{ '--index': 0, '--color-card': '142, 252, 204' }}>
                        <div className="card-header">DSA</div>
                        <div className="img" style={{ backgroundImage: `url(${dsaImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 1, '--color-card': '252, 142, 142' }}>
                        <div className="card-header">Web Dev</div>
                        <div className="img" style={{ backgroundImage: `url(${webImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 2, '--color-card': '252, 252, 142' }}>
                        <div className="card-header">Media</div>
                        <div className="img" style={{ backgroundImage: `url(${mediaImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 3, '--color-card': '142, 252, 157' }}>
                        <div className="card-header">Event Management</div>
                        <div className="img" style={{ backgroundImage: `url(${eventImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 4, '--color-card': '215, 252, 142' }}>
                        <div className="card-header">Marketing</div>
                        <div className="img" style={{ backgroundImage: `url(${marketingImage})` }} />
                    </div>

                    <div className="card" style={{ '--index': 5, '--color-card': '252, 142, 239' }}>
                        <div className="card-header"> Emerging tech</div>
                        <div className="img" style={{ backgroundImage: `url(${emerge})` }} />
                    </div>

                    <div className="card" style={{ '--index': 6, '--color-card': '142, 249, 252' }}>
                        <div className="card-header">AI/ML</div>
                        <div className="img" style={{ backgroundImage: `url(${aiMLmage})` }} />
                    </div>

                    

                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .wrapper {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .inner {
    --w: 100px;
    --h: 160px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: 0deg;
    --perspective: 380px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w)/2) - 2.5px);
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 35s linear infinite;
  }

  @keyframes rotating {
    from { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0); }
    to { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn); }
  }

  .card {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
  }

  .card-header {
    height: 24px;
    background: rgba(var(--color-card), 0.8);
    color: #000;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
    font-size: 0.6rem;
  }

  .img {
    flex: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export default Card;    