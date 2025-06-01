import Header from "../components/layout/Header";
const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold">Posts Page</h2>
        <p>Here you will find various posts about different topics.</p>
      </main>
    </div>
  );
};

export default Posts;
