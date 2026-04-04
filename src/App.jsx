import { Outlet } from "react-router-dom";
import { useRef } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  const cardsSectionRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFD]">
      <Header cardsSectionRef={cardsSectionRef} />

      <main className="flex-1">
        <Outlet context={{ cardsSectionRef }} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
