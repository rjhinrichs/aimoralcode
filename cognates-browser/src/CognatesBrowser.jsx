import { useState, useEffect } from "react";
import WelcomeMessage from "./WelcomeMessage";

export default function CognatesBrowser() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(() => {
  fetch("/cognates.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      return res.json();
    })
    .then((json) => {
      console.log("Cognates loaded:", json.length, "records");
      setData(json);
    })
    .catch((err) => {
      console.error("Error fetching cognates.json:", err);
      setData([]); // triggers welcome fallback
    });
}, []);


  const filtered = data.filter(
    (item) =>
      item.canonical?.toLowerCase().includes(query.toLowerCase()) ||
      item.cognate?.toLowerCase().includes(query.toLowerCase()) ||
      item.tradition?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Cognates Browser</h1>
      <input
        type="text"
        placeholder="Search by Value, Cognate, or Tradition"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "100%",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Canonical Value</th>
            <th>Cognate</th>
            <th>Tradition</th>
            <th>Justification</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5">
                <WelcomeMessage />
              </td>
            </tr>
          ) : (
            filtered.map((row, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{row.canonical}</td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{row.cognate}</td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{row.tradition}</td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{row.justification}</td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>{row.notes || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
