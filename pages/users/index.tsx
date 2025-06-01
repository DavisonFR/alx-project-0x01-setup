import UserCard from "@/components/common/UserCard";
import HeaderComponent from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Users List</h1>
        <div className="grid grid-cols-3 gap-2">
          {users?.map(({ id, name, username, email, phone, website, company }: UserProps) => (
            <UserCard
              key={id}
              name={name}
              username={username}
              email={email}
              phone={phone}
              website={website}
              company={company}
            />
          ))}
        </div>
      </main>
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
