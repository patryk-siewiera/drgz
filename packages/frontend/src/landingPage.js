import droneOperators from "./img/droneOperators.png"

function LandingPage() {
  return (
    <div className="app">
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
      <div className="p-10">
        <div className="md:flex bg-gray-300 rounded-xl p-8 md:p-20 ">
          Dronowa giełda zleceń
        </div>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3 md:p-10">
          <div className="bg-blue-200 rounded-xl p-5">
            Współpracujemy tylko z najlepszymi
          </div>
          <div className="bg-blue-200 rounded-xl p-5">
            Używamy tylko najlepszego sprzętu
          </div>
          <div className="bg-blue-200 rounded-xl p-5">
            Doświadczenie i renoma
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:p-10">
          <div className="bg-red-100 rounded-md p-5">1. Zarejestruj się</div>
          <div className="bg-red-100 rounded-md p-5">
            2. Dodaj zlecenie (inspekcja, raport UDT)
          </div>
          <div className="bg-red-100 rounded-md p-5">
            3. Znajdź wykonawcę z odpowiednim dronem w Twoim województwie
          </div>
        </div>
      </div>
      <div className="rounded-md pl-40">
        <img src={droneOperators} />
      </div>
    </div>
  );
}

export default LandingPage;
