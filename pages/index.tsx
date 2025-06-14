import HeaderComponent from "@/components/layout/Header"; // UPDATED IMPORT

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent />  {/* UPDATED COMPONENT NAME */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">      
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            <a href="/users">Get Started</a>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
