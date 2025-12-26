export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        {/* Hero component will go here */}
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold">Hero Section</h1>
          <p className="text-muted-foreground mt-4">Interactive image hover reveal</p>
        </div>
      </section>

      {/* The File Section (About) */}
      <section id="file" className="min-h-screen">
        {/* File component will go here */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold">The File</h2>
          <p className="text-muted-foreground mt-4">About section</p>
        </div>
      </section>

      {/* Experiments Section (Projects) */}
      <section id="experiments" className="min-h-screen">
        {/* Experiments component will go here */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold">Experiments</h2>
          <p className="text-muted-foreground mt-4">Projects showcase</p>
        </div>
      </section>

      {/* Abilities Section (Skills) */}
      <section id="abilities" className="min-h-screen">
        {/* Abilities component will go here */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold">Abilities</h2>
          <p className="text-muted-foreground mt-4">Skills section</p>
        </div>
      </section>

      {/* Battles Section (Experience) */}
      <section id="battles" className="min-h-screen">
        {/* Battles component will go here */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold">Battles</h2>
          <p className="text-muted-foreground mt-4">Experience/work history</p>
        </div>
      </section>

      {/* Signal Section (Contact) */}
      <section id="signal" className="min-h-screen">
        {/* Signal component will go here */}
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold">Signal</h2>
          <p className="text-muted-foreground mt-4">Contact form</p>
        </div>
      </section>
    </main>
  );
}
