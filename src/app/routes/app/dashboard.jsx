export const DashboardRoute = () => {
  return (
    <div className="p-4">
      <div className="my-4 flex flex-col gap-4 rounded border-4 border-red-500 p-4">
        <p className="flex text-xl font-semibold">
          Dashboard - access to page: Admin, Teacher, Student
        </p>
        <p>
          W zależności od roli będą tu wyświetlane inne informacje. Nie jestem
          jeszcze pewien jakie 😅
        </p>
      </div>
    </div>
  );
};
