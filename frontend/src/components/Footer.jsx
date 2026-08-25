// import React from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
        
//         {/* Left Side: Copyright Notice */}
//         <div style={styles.copyrightSection}>
//           <span style={styles.title}>Smart Exam Portal</span>
//           <span style={styles.separator}>|</span>
//           <span style={styles.text}>&copy; {currentYear} All Rights Reserved.</span>
//         </div>

//         {/* Center: Quick Policy Links rendered in a single horizontal row */}
//         <div style={styles.linksSection}>
//           <a href="#" style={styles.link}>Copyright Policy</a>
//           <span style={styles.dot}>•</span>
//           <a href="#" style={styles.link}>Privacy Policy</a>
//           <span style={styles.dot}>•</span>
//           <a href="#" style={styles.link}>Legal Disclaimer</a>
//           <span style={styles.dot}>•</span>
//           <a href="#" style={styles.link}>Terms & Conditions</a>
//         </div>

//         {/* Right Side: Support Info */}
//         <div style={styles.supportSection}>
//           <span style={styles.text}>Support: support@examportal.com</span>
//         </div>

//       </div>
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: '#1f2937',
//     color: '#f3f4f6',
//     padding: '8px 20px', // Ultra-thin vertical padding
//     fontFamily: 'Arial, sans-serif',
//     marginTop: 'auto',
//     width: '100%',
//     boxSizing: 'border-box',
//     borderTop: '1px solid #374151',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center', // Aligns everything strictly onto a single vertical axis point
//     maxWidth: '1400px',
//     margin: '0 auto',
//     flexWrap: 'nowrap', // Overrides and completely blocks vertical wrapping behavior
//   },
//   copyrightSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   title: {
//     color: '#f60808',
//     fontWeight: 'bold',
//     fontSize: '13px',
//   },
//   separator: {
//     color: '#4b5563',
//     fontSize: '12px',
//   },
//   text: {
//     fontSize: '12px',
//     color: '#ffffff',
//   },
//   linksSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   link: {
//     color: '#ffffff',
//     textDecoration: 'none',
//     fontSize: '12px',
//     transition: 'color 0.2s',
//   },
//   dot: {
//     color: '#4b5563',
//     fontSize: '10px',
//   },
//   supportSection: {
//     display: 'flex',
//     alignItems: 'center',
//   }
// };

// export default Footer;
//2
// import React, { useState } from 'react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // 1. State hook trackers to handle the active showing memo data window
//   const [activeMemo, setActiveMemo] = useState(null);

//   // Sample official memo texts matching your policy links
//   const policyContent = {
//     copyright: {
//       title: "MEMORANDUM: COPYRIGHT POLICY & INFRINGEMENT COMPLIANCE",
//       memoNo: "MEMO NO: SEC-EP/2026/CR-0892",
//       date: `Dated: 12th March, 2026`,
//       text: "All examination resources, question banks, processing algorithms, and analytics metrics deployed within the Smart Exam Portal are protected under the intellectual property frameworks. Unauthorized duplication, extraction via web-scraping agents, or redistribution of automated assessment structures is strictly prohibited."
//     },
//     privacy: {
//       title: "NOTIFICATION: DATA PRIVACY & EXAM TELEMETRY STANDARD",
//       memoNo: "MEMO NO: WB-EXAM/eGov/2026-P2",
//       date: `Dated: 15th April, 2026`,
//       text: "In accordance with strict verification and privacy disciplines, student profiles, responses, and real-time exam tracking metrics are stored securely using encrypted MongoDB collections. Telemetry metrics are tracked solely to assess performance validity and check core exam consistency."
//     },
//     legal: {
//       title: "ORDER: LEGAL DISCLAIMER ON EVALUATION FRAMEWORKS",
//       memoNo: "ORDER NO: DM-KOL/ASSESS-01A",
//       date: `Dated: 22nd May, 2026`,
//       text: "The AI-assisted grading services operating within this architecture function under strict maker-checker constraints. Evaluation metrics generated are advisory records. Final verification or overrides on student submissions are preserved by the designated system examiners or departmental controllers."
//     },
//     terms: {
//       title: "MEMORANDUM: PORTAL CONSTRAINTS & CODE OF CONDUCT",
//       memoNo: "MEMO NO: CIRCULAR/HE-WB/2026/04",
//       date: `Dated: 3rd June, 2026`,
//       text: "Users logging into the assessment hub must adhere to secure testing compliance. Any attempts to manipulate local window focuses, trigger background scripts, or exploit routing points will result in immediate system monitoring blocks and automated cancellation of active exam sheets."
//     }
//   };

//   const openMemo = (e, key) => {
//     e.preventDefault(); // Blocks default navigation reloads
//     setActiveMemo(policyContent[key]);
//   };

//   const closeMemo = () => {
//     setActiveMemo(null);
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
        
//         {/* Left Side */}
//         <div style={styles.copyrightSection}>
//           <span style={styles.title}>Smart Exam Portal</span>
//           <span style={styles.separator}>|</span>
//           <span style={styles.text}>&copy; {currentYear} All Rights Reserved.</span>
//         </div>

//         {/* Center: Live trigger links */}
//         <div style={styles.linksSection}>
//           <a href="#" onClick={(e) => openMemo(e, 'copyright')} style={styles.link}>Copyright Policy</a>
//           <span style={styles.dot}>•</span>
//           <a href="#" onClick={(e) => openMemo(e, 'privacy')} style={styles.link}>Privacy Policy</a>
//           <span style={styles.dot}>•</span>
//           <a href="#" onClick={(e) => openMemo(e, 'legal')} style={styles.link}>Legal Disclaimer</a>
//           <span style={styles.dot}>•</span>
//           <a href="#" onClick={(e) => openMemo(e, 'terms')} style={styles.link}>Terms & Conditions</a>
//         </div>

//         {/* Right Side */}
//         <div style={styles.supportSection}>
//           <span style={styles.text}>Support: support@examportal.com</span>
//         </div>
//       </div>

//       {/* 2. THE LIVE GOVT-STYLE MEMO DISPLAY CONTAINER */}
//       {activeMemo && (
//         <div style={styles.overlay} onClick={closeMemo}>
//           <div style={styles.memoCard} onClick={(e) => e.stopPropagation()}>
            
//             {/* Top Close bar */}
//             <button style={styles.closeBtn} onClick={closeMemo}>&times; Close Document</button>
            
//             {/* Official Memo Document Frame */}
//             <div style={styles.memoHeader}>
//               <h2 style={styles.memoGovTitle}>GOVERNMENT OF WEST BENGAL</h2>
//               <h4 style={styles.memoDeptTitle}>FINANCE (E-GOVERNANCE) DEPARTMENT</h4>
//               <p style={styles.memoLocation}>NABANNA, HOWRAH - 711102</p>
//             </div>

//             <div style={styles.memoSubHeader}>
//               <span>{activeMemo.memoNo}</span>
//               <span>{activeMemo.date}</span>
//             </div>

//             <hr style={styles.memoLine} />

//             <div style={styles.memoBody}>
//               <h3 style={styles.memoSubject}>{activeMemo.title}</h3>
//               <p style={styles.memoText}>{activeMemo.text}</p>
//             </div>

//             <div style={styles.memoFooter}>
//               <p style={styles.signBlock}><strong>By Order of the Governor,</strong></p>
//               <p style={styles.signDesignation}>Additional Chief Secretary to the<br />Government of West Bengal</p>
//             </div>

//           </div>
//         </div>
//       )}
//     </footer>
//   );
// };

// const styles = {
//   footer: {
//     backgroundColor: '#1f2937',
//     color: '#f3f4f6',
//     padding: '8px 20px',
//     fontFamily: 'Arial, sans-serif',
//     marginTop: 'auto',
//     width: '100%',
//     boxSizing: 'border-box',
//     borderTop: '1px solid #374151',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     maxWidth: '1400px',
//     margin: '0 auto',
//     flexWrap: 'nowrap',
//   },
//   copyrightSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//   },
//   title: {
//     color: '#3b82f6',
//     fontWeight: 'bold',
//     fontSize: '13px',
//   },
//   separator: {
//     color: '#4b5563',
//     fontSize: '12px',
//   },
//   text: {
//     fontSize: '12px',
//     color: '#9ca3af',
//   },
//   linksSection: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//   },
//   link: {
//     color: '#9ca3af',
//     textDecoration: 'none',
//     fontSize: '12px',
//     cursor: 'pointer',
//     transition: 'color 0.2s',
//   },
//   dot: {
//     color: '#4b5563',
//     fontSize: '10px',
//   },
//   supportSection: {
//     display: 'flex',
//     alignItems: 'center',
//   },

//   /* MEMO MODAL OVERLAY INLINE LAYOUTS */
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.65)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 9999, // Floating absolute priority layer
//     padding: '20px',
//   },
//   memoCard: {
//     backgroundColor: '#ffffff',
//     color: '#111827',
//     width: '100%',
//     maxWidth: '650px',
//     padding: '40px',
//     borderRadius: '4px',
//     boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
//     fontFamily: '"Times New Roman", Times, serif', // Authentic official order serif typeface
//     position: 'relative',
//     maxHeight: '90vh',
//     overflowY: 'auto',
//     border: '1px solid #d1d5db',
//   },
//   closeBtn: {
//     position: 'absolute',
//     top: '12px',
//     right: '15px',
//     backgroundColor: '#ef4444',
//     color: '#ffffff',
//     border: 'none',
//     padding: '4px 10px',
//     fontSize: '12px',
//     fontFamily: 'sans-serif',
//     cursor: 'pointer',
//     borderRadius: '3px',
//   },
//   memoHeader: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   memoGovTitle: {
//     fontSize: '18px',
//     fontWeight: 'bold',
//     letterSpacing: '0.5px',
//     margin: '0 0 4px 0',
//   },
//   memoDeptTitle: {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     margin: '0 0 2px 0',
//   },
//   memoLocation: {
//     fontSize: '12px',
//     margin: 0,
//     color: '#4b5563',
//   },
//   memoSubHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     fontSize: '13px',
//     marginTop: '25px',
//     fontWeight: '500',
//   },
//   memoLine: {
//     border: 'none',
//     borderTop: '1px solid #111827',
//     margin: '8px 0 20px 0',
//   },
//   memoBody: {
//     lineHeight: '1.6',
//     fontSize: '14px',
//     textAlign: 'justify',
//   },
//   memoSubject: {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     textDecoration: 'underline',
//     marginBottom: '15px',
//     textAlign: 'center',
//   },
//   memoText: {
//     textIndent: '40px', // Matches standardized administrative letter spacing styles
//     margin: 0,
//   },
//   memoFooter: {
//     marginTop: '40px',
//     float: 'right',
//     textAlign: 'center',
//     paddingRight: '10px',
//   },
//   signBlock: {
//     margin: '0 0 4px 0',
//     fontSize: '14px',
//   },
//   signDesignation: {
//     fontSize: '13px',
//     lineHeight: '1.3',
//     margin: 0,
//   },
// };

// export default Footer;
//3
import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null);

  // Exact data mapping extracted from the official application reference portals
  const modalContent = {
    copyright: {
      title: "Copyright Policy",
      text: "The contents, source code, question frameworks, evaluation blueprints, and automated grading schema available on this application may not be reproduced partially or fully, without duly & prominently acknowledging the source. The contents of this portal cannot be used in any misleading or objectionable context or derogatory manner. However, the permission to reproduce the material available on the Online Examination and Assessment Portal shall not extend to any question banks, third-party certification frameworks, or test cases which are identified as being copyright of a third party. Authorization to reproduce such material must be obtained from the academic departments, controller of examinations, or copyright holders concerned."
    },
    privacy: {
      title: "Privacy Policy",
      text: "Though all efforts have been made to ensure the accuracy of the contents, grading workflows, and test execution parameters on this application, the same should not be construed as a statement of law or used for any legal purposes. The Examination Core accepts no responsibility in relation to the accuracy, completeness, usefulness or otherwise, of the evaluation metrics. Users are advised to verify/check any score card data, and to obtain appropriate departmental confirmation before acting on the information provided on this application. The Online Examination and Assessment Portal does not automatically capture any specific personal information from any user (like name, phone no. or e-mail address) that allows the portal administration to identify any user individually when users visit the site outside a valid proctored login session. Users can generally visit the landing index without revealing Personal Information, unless users choose to provide authentication credentials."
    },
    legal: {
      title: "Legal Disclaimer",
      text: "All efforts have been made to make the examination evaluation algorithms, question distribution indices, and academic performance telemetry as accurate as possible. The Portal Administration will not be responsible for any loss to any person caused by structural inaccuracy, network latency during submissions, or server-side synchronization anomalies available on this Website. Any discrepancy found in marks, registration profiles, or test constraints may be brought to the notice of the Controller of Examinations (CoE). The structural evaluation content / information / data is owned & maintained by the portal administration framework."
    },
    terms: {
      title: "Terms & Condition",
      text: "In case of any variance between what is stated in this examination console and that contained in the relevant institutional Acts, Academic Rules, Board Regulations, Evaluation Policy, or official marks distribution Statements, etc, the latter shall prevail. Under no circumstances will the Examination Portal Administration be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any system disruption, loss of exam sheets, or corruption of submission data whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this software. These assessment terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of India. The evaluation data, recommended study streams, or pointers posted on this website are designed solely for student information and convenience. This portal application is designed, developed, and architected by Administrator and content provided by the Portal Board cannot authorize the use of copyrighted assessment materials contained in external linked systems. Users are advised to request such authorization directly from the system administrators. The portal administration neither endorses in any way nor offers any judgment or warranty and accepts no responsibility or liability for the authenticity of third-party verification credentials, or any direct or consequential system disruption incurred by attempting unauthorized requests on this terminal."
    }
  };

  const handleOpen = (e, key) => {
    e.preventDefault();
    setActiveModal(modalContent[key]);
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left Section */}
        <div style={styles.leftSection}>
          <span style={styles.brandText}>Smart Exam Portal</span>
          <span style={styles.pipe}>|</span>
          <span style={styles.infoText}>&copy; {currentYear} All Rights Reserved.</span>
        </div>

        {/* Center Live Trigger Policy Navigation */}
        <div style={styles.linkWrapper}>
          <a href="#" onClick={(e) => handleOpen(e, 'copyright')} style={styles.anchor}>Copyright Policy</a>
          <span style={styles.bullet}>•</span>
          <a href="#" onClick={(e) => handleOpen(e, 'privacy')} style={styles.anchor}>Privacy Policy</a>
          <span style={styles.bullet}>•</span>
          <a href="#" onClick={(e) => handleOpen(e, 'legal')} style={styles.anchor}>Legal Disclaimer</a>
          <span style={styles.bullet}>•</span>
          <a href="#" onClick={(e) => handleOpen(e, 'terms')} style={styles.anchor}>Terms & Conditions</a>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          <span style={styles.infoText}>Contact Us:
            {/* <a href="mailto:support@examportal.com" style={styles.contactLink}> support@examportal.com</a> */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@examportal.com" target="_blank" rel="noopener noreferrer" style={styles.contactLink}> support@examportal.com</a>
          </span>
        </div>
      </div>

      {/* MODAL STRUCTURAL ARCHITECTURE */}
      {activeModal && (
        <div style={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Top Floating Bar Components */}
            <div style={styles.modalHeader}>
              <div>
                <div style={styles.govLabel}></div>
                <h2 style={styles.modalTitle}>{activeModal.title}</h2>
              </div>
              <button style={styles.dismissBtn} onClick={() => setActiveModal(null)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <hr style={styles.dividerLine} />

            {/* Modal Scroll Content Area */}
            <div style={styles.modalBody}>
              <p style={styles.bodyParagraph}>{activeModal.text}</p>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

// Precise styling metrics to match screenshot design parameters
const styles = {
  footer: {
    backgroundColor: '#777676',
    color: '#f3f4f6',
    padding: '8px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    marginTop: 'auto',
    width: '100%',
    boxSizing: 'border-box',
    borderTop: '1px solid #374151',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
    flexWrap: 'nowrap',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  brandText: {
    color: '#ff0000',
    fontWeight: '700',
    fontSize: '13px',
  },
  pipe: {
    color: '#ffffff',
    fontSize: '12px',
  },
  infoText: {
    fontSize: '12px',
    color: '#ffffff',
  },
  contactLink: {
    color: '#00f7ff',
    textDecoration: 'none',
  },
  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  anchor: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '12px',
    cursor: 'pointer',
    transition: 'color 0.15s ease',
  },
  bullet: {
    color: '#ffffff',
    fontSize: '10px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },

  /* MODAL DISPLAY DESIGN SPECIFICATIONS */
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dim background visibility tracking
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
    padding: '24px',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    color: '#1f2937',
    width: '100%',
    maxWidth: '680px',
    borderRadius: '16px', // Smooth rounding bounds
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '85vh',
    animation: 'fadeIn 0.2s ease-out',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '24px 28px 16px 28px',
  },
  govLabel: {
    fontSize: '11px',
    fontWeight: '800',
    color: '#86868b',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '4px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1d1d1f',
    margin: 0,
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif', // Exact matching heading serif font
  },
  dismissBtn: {
    backgroundColor: '#efefe1', // Matching tinted circle background block
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    padding: 0,
    marginTop: '2px',
  },
  dividerLine: {
    border: 'none',
    borderTop: '1px solid #e5e7eb', // Subtle layout horizontal dividing rule
    margin: 0,
    width: '100%',
  },
  modalBody: {
    padding: '24px 28px 32px 28px',
    overflowY: 'auto',
  },
  bodyParagraph: {
    fontSize: '14.5px',
    lineHeight: '1.65',
    color: '#4b5563',
    margin: 0,
    textAlign: 'justify',
    fontFamily: 'system-ui, -apple-system, sans-serif', // Clean sans-serif rendering text block
  }
};

export default Footer;