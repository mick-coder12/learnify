
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      padding: "14px 20px",
      textAlign: "center",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      marginTop: "40px",
      fontSize: "14px",
      color: "rgba(0,0,0,0.6)",
      background: "transparent"
    }}>
      <div style={{maxWidth: 1100, margin: "0 auto"}}>
        <div>
          <strong>Learnify</strong> — Full-stack LMS • <a href="https://learnify-coral.vercel.app/" target="_blank" rel="noreferrer">Live demo</a>
        </div>
        <div style={{marginTop: 6}}>
          Built by Chirag Gill — <a href="https://github.com/mick-coder12" target="_blank" rel="noreferrer">GitHub</a> • <a href="mailto:chiraggill1994@gmail.com">chiraggill1994@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}
