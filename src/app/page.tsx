import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          marginBottom: "20px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        <h1>Welcome to Santa Hat Crafts</h1>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
            <li style={{ marginRight: "20px" }}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/knit-santa-hat">How to Knit a Santa Hat</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Let’s Craft Something Special!</h2>
        <p>
          Explore the amazing world of crafting and make your own Santa hat this
          holiday season.
        </p>
      </main>
    </div>
  );
}
