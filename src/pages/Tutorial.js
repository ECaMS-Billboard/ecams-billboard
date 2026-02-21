import React from "react";

function Tutorial() {
  const steps = [
    {
      title: "View Posters",
      description:
        "Navigate to the Slides page to view the current poster slideshow displayed on the campus kiosk.",
    },
    {
      title: "Upload a Poster",
      description:
        "Go to the Upload page to submit your academic or event poster for review and display.",
    },
    {
      title: "Explore Resources",
      description:
        "Visit the Resources page to access important academic and campus support services.",
    },
    {
      title: "Find Faculty Information",
      description:
        "Use the Professor List page to view faculty contact details and office hours.",
    },
    {
      title: "Capstone Projects",
      description:
        "View other projects from the software systems capstone project.",
    },
    {
      title: "Find Link to Everyday App",
      description:
        "Use the app to stay connected with campus dining.",
    },
    {
      title: "Lewis Events",
      description:
        "Find a link to view the weekly events at Lewis.",
    },
  ];

  const styles = {
    container: {
      minHeight: "80vh",
      padding: "50px 20px",
      background: "linear-gradient(120deg, #1a1a1a, #111)",
      color: "#fff",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#ff4d4d",
      fontSize: "2.5rem",
      marginBottom: "50px",
    },
    steps: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    step: {
      padding: "25px",
      backgroundColor: "#1f1f1f",
      borderLeft: "6px solid #ff4d4d",
      borderRadius: "8px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
    },
    stepHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(255,77,77,0.3)",
    },
    stepContentTitle: {
      color: "#ff4d4d",
      marginBottom: "8px",
      fontSize: "1.5rem",
    },
    stepContentText: {
      color: "#ddd",
      lineHeight: 1.6,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>How to Use ECaMS Billboard</h1>
      <div style={styles.steps}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={styles.step}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, styles.stepHover)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, styles.step)
            }
          >
            <h2 style={styles.stepContentTitle}>{step.title}</h2>
            <p style={styles.stepContentText}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tutorial;
