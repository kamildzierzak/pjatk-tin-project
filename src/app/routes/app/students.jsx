export const StudentsRoute = () => {
  return (
    <div className="p-4">
      <div className="my-4 flex flex-col gap-4 rounded border-4 border-red-500 p-4">
        <p className="flex text-xl font-semibold">
          Lista wszystkich uczniów - access to page: Admin, Teacher
        </p>
        <p>Wyświetlane elementy będą się różnić w zależności od roli:</p>
        <ul>
          <li>
            <b>Admin</b>
            <ul>
              <li>
                Lista wszystkich uczniów z opcjami: Dodaj, Edytuj, Usuń ucznia.
                Przeglądaj postępy ucznia, do jakich kursów uczęszcza, wszystkie
                dane ucznia, od kiedy uczęszcza na kursy w szkole
              </li>
              <li>
                Statystkyki pracy naczyciela: Liczba uczniów na kursach,
                frekwencja na kursach
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Nauczyciel</b>
            <ul>
              <li>
                Lista uczniów uczęszczających na kurs prowadzony przez
                nauczyciela
              </li>
              <li>
                Statystyki ucznia: Postępy ucznia, frekwencja ucznia na kursie
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
