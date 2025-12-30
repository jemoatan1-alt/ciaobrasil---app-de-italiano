
export default function LandingPage() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial, sans-serif",
                background: "#f5f7fa",
            }}
        >
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                🇮🇹 CiaoBrasil
            </h1>

            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                Impara l’italiano in modo semplice e moderno
            </p>

            <button
                style={{
                    padding: "12px 24px",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    border: "none",
                    background: "#0070f3",
                    color: "white",
                    cursor: "pointer",
                }}
                onClick={() => alert("Prossimo step: lezioni 🚀")}
            >
                Inizia ora
            </button>
        </div>
    );
}