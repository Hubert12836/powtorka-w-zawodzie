// pages/index.tsx

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Powtórka w zawodzie</h1>
      <p>Wybierz kierunek, aby rozpocząć quiz:</p>
      <ul>
        <li>
          <a href="/b22/2024/styczen">B22 – Styczeń 2024</a>
        </li>
        {/* Dodawaj kolejne egzaminy w ten sposób */}
      </ul>
    </main>
  );
}
