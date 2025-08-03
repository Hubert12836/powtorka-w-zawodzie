import Image from 'next/image';

export default function B22Styczen2024() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Powtórka w zawodzie: B22 – styczeń 2024</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Zadanie 6</h2>
        <p>Urządzenie, którego wyświetlacz przedstawiony jest na ilustracji, steruje pracą:</p>

        <div style={{ margin: '1rem 0' }}>
          <Image
            src="/images/b22-2024-01-zad6.png"
            alt="Wyświetlacz urządzenia sterującego"
            width={350}
            height={220}
          />
        </div>

        <ul>
          <li>A. pompy ciepła</li>
          <li>B. instalacji solarnej</li>
          <li><strong>C. instalacji fotowoltaicznej ✅</strong></li>
          <li>D. kotła gazowego na biomasę</li>
        </ul>
      </section>
    </main>
  );
}
