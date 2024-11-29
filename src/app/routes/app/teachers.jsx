export const TeachersRoute = () => {
  const teachers = [
    {
      id: 1,
      name: "Jan Kowalski",
      courses: [
        { id: 1, title: "Kurs 1", description: "Opis kursu 1", students: 10 },
      ],
      totalStudents: 10,
      attendance: 0.9,
    },
    {
      id: 2,
      name: "Anna Kowalska",
      courses: [
        { id: 2, title: "Kurs 2", description: "Opis kursu 2", students: 20 },
      ],
      totalStudents: 20,
      attendance: 0.8,
    },
    {
      id: 3,
      name: "Janna Kowalskia",
      courses: [
        {
          id: 3,
          title: "Kurs 3",
          description: "Opis kursu 3",
          students: 30,
        },
        { id: 5, title: "Kurs 5", description: "Opis kursu 5", students: 50 },
      ],
      totalStudents: 80,
      attendance: 0.7,
    },
    {
      id: 4,
      name: "Joanna Kowalska",
      courses: [
        { id: 4, title: "Kurs 4", description: "Opis kursu 4", students: 40 },
      ],
      totalStudents: 40,
      attendance: 0.8,
    },
  ];

  return (
    <div className="p-4">
      <div className="my-4 flex flex-col gap-4 rounded border-4 border-red-500 p-4">
        <p className="flex text-xl font-semibold">
          Lista wszystkich nauczycieli - access to page: Admin
        </p>
        <p>Wyświetlane elementy będą się różnić w zależności od roli:</p>
        <ul>
          <li>
            <b>Admin</b>
            <ul>
              <li>
                Lista wszystkich nauczycieli z opcjami: Dodaj, Edytuj, Usuń
                nauczyciela.
              </li>
              <li>
                Statystkyki pracy naczyciela: Kursy które prwoadzi, Liczba
                uczniów na kursach, frekwencja na kursach
              </li>
            </ul>
          </li>
        </ul>
        <p className="flex text-xl font-semibold">Poniżej mockup dla admina.</p>
      </div>
      <div className="flex gap-4 p-4">
        <input
          type="text"
          className="w-full rounded border-2 border-green-500 p-2"
          placeholder="Wyszukaj nauczyciela"
        />
        <select
          className="rounded border-2 border-green-500 p-2"
          name="filter"
          id="filter"
        >
          <option value="all">Wszystkie</option>
          <option value="active">Aktywni</option>
          <option value="inactive">Nieaktywni</option>
          <option value="new">...</option>
        </select>
        <button className="min-w-fit rounded bg-green-500 p-2 text-white hover:scale-110">
          Dodaj nauczyciela
        </button>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-5 place-items-center items-center gap-2 border-b-2 border-green-500 p-2 font-semibold">
          <span>Imię i nazwisko</span>
          <span>Liczba kursów</span>
          <span>Liczba uczniów</span>
          <span>Frekwencja</span>
          <span>Opcje</span>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="grid grid-cols-5 place-items-center items-center gap-2 rounded border-2 border-green-500 p-2"
            >
              <span>{teacher.name}</span>
              <span>{teacher.courses.length}</span>
              <span>{teacher.totalStudents}</span>
              <span>{teacher.attendance}</span>
              <div className="flex gap-2">
                <button className="rounded bg-blue-500 p-2 text-white hover:scale-110">
                  Edytuj
                </button>
                <button className="rounded bg-red-500 p-2 text-white hover:scale-110">
                  Usuń
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-4 p-4">
          <button className="rounded bg-green-500 p-2 text-white hover:scale-110">
            Poprzednia strona
          </button>
          <span>1</span>
          <span className="font-bold">2</span>
          <span>3</span>
          <span>...</span>
          <button className="rounded bg-green-500 p-2 text-white hover:scale-110">
            Następna strona
          </button>
        </div>
      </div>
    </div>
  );
};
