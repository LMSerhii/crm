import StatusLabel, { Status } from "./components/status-label";

export default function Home() {
  return (
    <div>
      <main className="">
        <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
        <StatusLabel status={Status.NotActive} disabled={true}>NotActive</StatusLabel>
      </main>
    </div>
  );
}
