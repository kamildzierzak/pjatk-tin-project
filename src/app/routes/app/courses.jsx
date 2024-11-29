export const CoursesRoute = () => {
  const allCourses = [
    {
      id: 1,
      title: "Kurs 1",
      description: "Opis kursu 1",
      students: 10,
      teacher: "Jan Kowalski",
      teacherId: 1,
    },
    {
      id: 2,
      title: "Kurs 2",
      description: "Opis kursu 2",
      students: 20,
      teacher: "Anna Kowalska",
      teacherId: 2,
    },
    {
      id: 3,
      title: "Kurs 3",
      description: "Opis kursu 3",
      students: 30,
      teacher: "Janna Kowalskia",
      teacherId: 3,
    },
    {
      id: 4,
      title: "Kurs 4",
      description: "Opis kursu 4",
      students: 40,
      teacher: "Joanna Kowalska",
      teacherId: 4,
    },
    {
      id: 5,
      title: "Kurs 5",
      description: "Opis kursu 5",
      students: 50,
      teacher: "Janna Kowalskia",
      teacherId: 3,
    },
  ];

  return (
    <div className="p-4">
      <div className="my-4 flex flex-col gap-4 rounded border-4 border-red-500 p-4">
        <p className="flex text-xl font-semibold">
          Lista kursów - access to page: Admin, Teacher, Student
        </p>
        <p>Wyświetlane elementy będą się różnić w zależności od roli:</p>
        <ul>
          <li>
            <b>Admin</b>
            <ul>
              <li>
                Lista wszystkich kursów z opcjami: Dodaj, Edytuj, Usuń kurs
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Nauczyciel</b>
            <ul>
              <li>
                Lista kursów prowadzych przez nauczyciela z pewnymi wybranymi
                opcjami do edycji
              </li>
            </ul>
          </li>
          <br />
          <li>
            <b>Uczeń</b>
            <ul>
              <li>
                Lista kursów na które jest zapisany z możliwością wyświetlenia
                szczegółów oraz postępu w kursie
              </li>
            </ul>
          </li>
        </ul>
        <p className="flex text-xl font-semibold">Poniżej mockup dla admina.</p>
        <p>
          Nie jest to finalny wygląd. Planuje by każdy kurs, uczeń oraz
          nauczyciel mieli własną podstronę więc nie wiem jeszcze czy np. edycja
          kursu jak i szczegóły będą w popupie, wysuwanym sidebarze czy też na
          właśnie stronie dotyczącej danego kursu.
        </p>
      </div>
      <div className="flex gap-4 p-4">
        <input
          type="text"
          className="w-full rounded border-2 border-green-500 p-2"
          placeholder="Wyszukaj kurs"
        />
        <select
          className="rounded border-2 border-green-500 p-2"
          name="filter"
          id="filter"
        >
          <option value="all">Wszystkie</option>
          <option value="personal">Dla 5-6 latków</option>
          <option value="personal">Dla 7-8 latków</option>
          <option value="personal">Dla 9-10 latków</option>
        </select>
        <button className="min-w-fit rounded bg-green-500 p-2 text-white hover:scale-110">
          Dodaj kurs
        </button>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-5 place-items-center items-center gap-2 border-b-2 border-green-500 p-2 font-semibold">
          <span>Tytuł</span>
          <span>Opis</span>
          <span>Liczba uczniów</span>
          <span>Prowadzący</span>
          <span>Akcje</span>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {allCourses.map((course) => (
            <div
              key={course.id}
              className="grid grid-cols-5 place-items-center items-center gap-2 rounded border-2 border-green-500 p-2"
            >
              <span className="font-semibold">
                <a href="#" className="underline">
                  {course.title}
                </a>
              </span>
              <span>{course.description}</span>
              <span>{course.students}</span>
              <span>
                {" "}
                <a href="#" className="underline">
                  {course.teacher}
                </a>
              </span>
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
