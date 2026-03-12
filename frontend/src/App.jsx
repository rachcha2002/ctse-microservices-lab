import { useState, useEffect } from "react";

const GATEWAY_URL =
  "https://api-gateway.wittymushroom-369272a1.southeastasia.azurecontainerapps.io";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [statusColor, setStatusColor] = useState("#92400e");

  useEffect(() => {
    fetch(GATEWAY_URL)
      .then(() => {
        setStatus("✅ Gateway is Reachable");
        setStatusColor("#166534");
      })
      .catch(() => {
        setStatus("⚠️ Gateway Unreachable — Backend services may be offline");
        setStatusColor("#92400e");
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a, #1e40af)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "48px",
          maxWidth: "650px",
          width: "90%",
          boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
        }}
      >
        {/* Header */}
        <h1 style={{ color: "#1e3a8a", marginBottom: "4px" }}>
          ☁ CTSE Microservices
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "32px", marginTop: "4px" }}>
          Azure Container Apps Deployment — SE4010 Lab 2026
        </p>

        {/* Gateway Status */}
        <div
          style={{
            background: "#f0f9ff",
            border: "1px solid #bae6fd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <strong style={{ color: "#0369a1" }}>🔀 API Gateway Status</strong>
          <p
            style={{
              margin: "8px 0 4px 0",
              color: statusColor,
              fontWeight: "bold",
            }}
          >
            {status}
          </p>
          <a
            href={GATEWAY_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#2563eb",
              fontSize: "13px",
              wordBreak: "break-all",
            }}
          >
            {GATEWAY_URL}
          </a>
        </div>

        {/* Services */}
        <div
          style={{
            background: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <strong style={{ color: "#166534" }}>📦 Microservices</strong>
          <ul
            style={{
              margin: "8px 0 0 0",
              color: "#374151",
              paddingLeft: "20px",
              lineHeight: "2",
            }}
          >
            <li>Item Service — port 8081</li>
            <li>Order Service — port 8082</li>
            <li>Payment Service — port 8083</li>
          </ul>
        </div>

        {/* Architecture */}
        <div
          style={{
            background: "#faf5ff",
            border: "1px solid #d8b4fe",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "16px",
          }}
        >
          <strong style={{ color: "#5b21b6" }}>🏗 Architecture</strong>
          <p
            style={{ margin: "8px 0 0 0", color: "#374151", fontSize: "14px" }}
          >
            Frontend (Azure Static Web App) → API Gateway (Azure Container App)
            → Backend Services
          </p>
        </div>

        {/* Student Info */}
        <div
          style={{
            background: "#fefce8",
            border: "1px solid #fde68a",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <strong style={{ color: "#92400e" }}>👤 Student Info</strong>
          <p
            style={{ margin: "8px 0 0 0", color: "#374151", lineHeight: "1.8" }}
          >
            ID: IT22107114
            <br />
            Module: SE4010 — Current Trends in Software Engineering
            <br />
            Lab: Azure Microservices Deployment — 2026 Semester 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
