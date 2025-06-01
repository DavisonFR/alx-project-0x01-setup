import Link from "next/link";

const Users: React.FC = () => {
  return (
    <div>
      <users/>
      <main className="p-6">
        <h2 className="text-3xl font-bold">Users Page</h2>
        <p>Here you will find a list of users who are part of this application.</p>
        <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Back to Home
        </Link>
      </main>
    </div>
  );
};

export default Users;
