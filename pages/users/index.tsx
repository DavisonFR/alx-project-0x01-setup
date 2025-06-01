import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import HeaderComponent from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setNewUser(user);
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {users?.map(({ id, name, username, email, phone, website, company }: UserProps) => (
            <UserCard key={id} name={name} username={username} email={email} phone={phone} website={website} company={company} />
          ))}
        </div>
      </main>

      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
