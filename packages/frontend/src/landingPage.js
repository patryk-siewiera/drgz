import droneOperators from "./img/droneOperators.png"

function LandingPage() {
  return (
    <div className="app font-thin text-2xl">
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
      <div className="pt-10 pl-10 pr-10">
        <div className="bg-gradient-to-r from-red-100 to-blue-200 rounded-xl p-8 md:p-20 text-center">
          <p className="text-5xl">
          Dronowa giełda zleceń
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3 md:pt-10 text-center">
          <div className="bg-blue-100 rounded-xl p-5">
            Współpracujemy tylko z najlepszymi
          </div>
          <div className="bg-blue-200 rounded-xl p-5">
            Używamy tylko najlepszego sprzętu
          </div>
          <div className="bg-blue-300 rounded-xl p-5">
            Doświadczenie i renoma
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:p-10">
          <div className="bg-green-100 rounded-md p-7 ">1. Zarejestruj się</div>
          <div className="bg-green-200 rounded-md p-7">
            2. Dodaj zlecenie (inspekcja, raport UDT)
          </div>
          <div className="bg-green-300 rounded-md p-7">
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
