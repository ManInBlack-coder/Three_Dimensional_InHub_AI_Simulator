import '../../index.css';
import React from 'react';
import { useState } from 'react';
import logo from '../../assets/ConvaiLogo.png';
import ThumbsUp_fill from '../../assets/Thumbsup_fill.png';
import Thumbsdown_fill from '../../assets/Thumbsdown_fill.png';
import Thumbsup_outline from '../../assets/Thumbsup_outline.png';
import Thumbsdownoutline from '../../assets/Thumbsdownoutline.png';

const ChatBubblev1 = (props) => {
  var { userText, npcText, keyPressed } = props;
  const [feedback, setFeedback] = useState(0);

  return (
    <div
  style={{
    position: 'relative', // Võimaldab absoluutselt paigutada seesmised elemendid
    width: '100vw',
    height: '100vh',
  }}
>
  <section
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Keskendab bubble'i horisontaalselt ja vertikaalselt
      width: '92vw',
      maxWidth: '400px',
      height: '120px',
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
    }}
  >
    {keyPressed && (
      <div className="icon">
        <span className="span-prop" />
        <span className="span-prop" />
        <span className="span-prop" />
      </div>
    )}
    {userText === '' ? (
      <p
        style={{
          color: 'rgba(219,168,66,255)',
          textAlign: 'center',
          fontSize: '16px',
        }}
      >
        Press [T] to talk
      </p>
    ) : (
      <div style={{ width: '100%' }}>
        <p
          style={{
            color: '#FFFFFF',
            paddingLeft: '10px',
            fontSize: '14px',
          }}
        >
          {userText}
        </p>
        <p
          style={{
            color: '#39FF14',
            paddingLeft: '10px',
            fontSize: '14px',
          }}
        >
          {npcText}
        </p>
      </div>
    )}
  </section>
</div>

  );
};

export default ChatBubblev1;
