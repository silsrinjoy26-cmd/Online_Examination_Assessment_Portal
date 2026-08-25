// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div style={{
//       fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
//       color: '#1e293b',
//       backgroundColor: '#f8fafc',
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column'
//     }}>
      
//       {/* PROFESSIONAL NAVBAR */}
//       <header style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '1.2rem 4%',
//         backgroundColor: '#ffffff',
//         boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000
//       }}>
//         {/* Portal Branding */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//           <div style={{
//             backgroundColor: '#2563eb',
//             color: '#ffffff',
//             fontWeight: 'bold',
//             padding: '0.5rem 0.8rem',
//             borderRadius: '8px',
//             fontSize: '1.1rem'
//           }}>
//           </div>
//           <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#0f172a', letterSpacing: '-0.025em' }}>
//             Assessment Portal
//           </span>
//         </div>

//         {/* Small Top Right Corner Login Trigger */}
//         <button 
//           onClick={() => navigate('/login')}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '0.5rem',
//             backgroundColor: 'transparent',
//             border: '1px solid #cbd5e1',
//             padding: '0.5rem 1rem',
//             borderRadius: '20px',
//             cursor: 'pointer',
//             fontSize: '0.9rem',
//             fontWeight: '600',
//             color: '#475569',
//             transition: 'all 0.2s ease',
//             outline: 'none'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.borderColor = '#2563eb';
//             e.currentTarget.style.color = '#2563eb';
//             e.currentTarget.style.backgroundColor = '#f0fdf4';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.borderColor = '#cbd5e1';
//             e.currentTarget.style.color = '#475569';
//             e.currentTarget.style.backgroundColor = 'transparent';
//           }}
//         >
//           {/* Real inline SVG Person / User Icon */}
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//             <circle cx="12" cy="7" r="4"></circle>
//           </svg>
//           Login
//         </button>
//       </header>

//       {/* HERO SECTION */}
//       <main style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
//         <div style={{ maxWidth: '800px' }}>
          
//           <span style={{
//             backgroundColor: '#dbeafe',
//             color: '#1e40af',
//             fontSize: '0.85rem',
//             fontWeight: '700',
//             padding: '0.4rem 1rem',
//             borderRadius: '9999px',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//             marginBottom: '1.5rem',
//             display: 'inline-block'
//           }}>
//             Next-Gen Academic Assessment
//           </span>

//           <h1 style={{
//             fontSize: '3rem',
//             fontWeight: '800',
//             color: '#0f172a',
//             lineHeight: '1.15',
//             letterSpacing: '-0.03em',
//             marginBottom: '1.5rem'
//           }}>
//             Welcome to Online Examination and Assessment Portal
//           </h1>

//           <p style={{
//             fontSize: '1.15rem',
//             color: '#64748b',
//             lineHeight: '1.6',
//             maxWidth: '600px',
//             margin: '0 auto 2.5rem auto'
//           }}>
//             An integrated evaluation workspace powered by the MERN ecosystem. Designed to facilitate structured answer submission tracking, real-time testing windows, and fluid examination pipelines for students and faculty.
//           </p>

//           {/* Call To Actions */}
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
//             <button 
//               onClick={() => navigate('/login')}
//               style={{
//                 backgroundColor: '#2563eb',
//                 color: '#ffffff',
//                 padding: '0.8rem 2rem',
//                 borderRadius: '8px',
//                 fontWeight: '600',
//                 fontSize: '1rem',
//                 border: 'none',
//                 cursor: 'pointer',
//                 boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
//                 transition: 'transform 0.15s ease, background-color 0.2s'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
//               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
//             >
//               Get Started
//             </button>
//             <button 
//               onClick={() => navigate('/register')}
//               style={{
//                 backgroundColor: '#ffffff',
//                 color: '#0f172a',
//                 padding: '0.8rem 2rem',
//                 borderRadius: '8px',
//                 fontWeight: '600',
//                 fontSize: '1rem',
//                 border: '1px solid #e2e8f0',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.2s'
//               }}
//               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
//               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
//             >
//               Create Account
//             </button>
//           </div>

//         </div>

//         {/* SYSTEM HIGHLIGHT CARDS */}
//         <section style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//           gap: '2rem',
//           width: '100%',
//           maxWidth: '1000px',
//           marginTop: '5rem',
//           textAlign: 'left'
//         }}>
//           <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
//             <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>For Students</h3>
//             <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Access designated assessment terminals, launch synchronized active exam papers, and review instant performance evaluation histories.</p>
//           </div>
//           <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
//             <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>For Educators</h3>
//             <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Deploy securely provisioned question structures, curate grading blueprints, and trace batch analytics via administrative metrics dashboards.</p>
//           </div>
//           <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
//             <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>Secure Environment</h3>
//             <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Protected using robust JSON Web Token authorization layers alongside fully encapsulated isolation mechanics during dynamic test runs.</p>
//           </div>
//         </section>
//       </main>
      
//     </div>
//   );
// }

// export default Home;
//2
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      color: '#1e293b',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* PROFESSIONAL NAVBAR WITHOUT CORNER BUTTON */}
      {/* <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 4%',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}> */}
        {/* Portal Branding */}
        {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            fontSize: '1.1rem'
          }}>
            Education
          </div>
          <span style={{ fontWeight: '700', fontSize: '1.2rem', color: '#0f172a', letterSpacing: '-0.025em' }}>
            Assessment Portal
          </span>
        </div>
      </header> */}

      {/* HERO SECTION */}
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '1250px' }}>
          
          {/* <span style={{
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            fontSize: '0.85rem',
            fontWeight: '700',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            display: 'inline-block'
          }}>
            Next-Gen Academic Assessment
          </span> */}

          <h1 style={{
            fontSize: '3rem',
            fontWeight: '800',
            color: '#0f172a',
            lineHeight: '1.15',
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem'
          }}>
            Welcome to Online Examination and Assessment Portal
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: '#64748b',
            lineHeight: '1.6',
            maxWidth: '1000px',
            margin: '0 auto 2.5rem auto'
          }}>
            An integrated evaluation workspace powered by the MERN ecosystem. Designed to facilitate structured answer submission tracking, real-time testing windows, and fluid examination pipelines for students and faculty.
          </p>

          {/* Call To Actions */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => navigate('/login')}
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '0.8rem 2rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)',
                transition: 'transform 0.15s ease, background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              Get Started
            </button>
            <button 
              onClick={() => navigate('/register')}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '0.8rem 2rem',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              Create Account
            </button>
          </div>

        </div>

        {/* SYSTEM HIGHLIGHT CARDS */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1000px',
          marginTop: '5rem',
          textAlign: 'left'
        }}>
          <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>For Students</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Access designated assessment terminals, launch synchronized active exam papers, and review instant performance evaluation histories.</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>For Educators</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Deploy securely provisioned question structures, curate grading blueprints, and trace batch analytics via administrative metrics dashboards.</p>
          </div>
          <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>Secure Environment</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Protected using robust JSON Web Token authorization layers alongside fully encapsulated isolation mechanics during dynamic test runs.</p>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Home;