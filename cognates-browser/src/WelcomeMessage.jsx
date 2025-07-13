export default function WelcomeMessage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Georgia, serif", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
      <h2>Welcome to the Cognates Browser</h2>
      <p>
        This tool is built upon a meta-analysis of <strong>291 global documents</strong> related to AI ethics, cybersecurity,
        education, policy, and governance. It surfaces <strong>the most frequently referenced values and their cognates</strong>—
        terms like equity, dignity, integrity, and freedom—that form the moral vocabulary guiding artificial intelligence systems today.
      </p>
      <p>
        Our aim is to build a <strong>linguistic and ethical interface</strong> for students, scientists, and ethical agents like
        Aidan to explore how different values are defined, debated, and applied across domains—from science to sports, from combat to collaboration.
      </p>
      <p>
        Each cognate is mapped to one of <strong>15 Canonical Values</strong> and aligned with the NRBC framework (Normative, Regulatory, Behavioral, Conceptual),
        allowing deeper analysis through the AI Behavioral Quotient (AIBQ) lens.
      </p>
      <p>
        In future releases, this browser will power a simulation engine for moral dilemmas, allowing Aidan to engage users in real-time ethical reasoning
        exercises based on evolving value corpora.
      </p>
      <p>
        Like Hammurabi’s Code, Justinian Law, or the Catholic Catechism, we believe this evolving <strong>AI Moral Code</strong> can
        become a foundational artifact of our time.
      </p>
      <p style={{ fontStyle: "italic", color: "gray" }}>
        If you're seeing this message, the data may still be loading or the value set has not yet populated. Please check back shortly,
        or report a data issue via GitHub.
      </p>
    </div>
  );
}
