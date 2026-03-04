import Navbar from './components/Navbar.jsx';
import UserCard from './components/UserCard.jsx';
import LoginForm from './components/LoginForm.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
          <h1 className="text-2xl font-semibold text-slate-900 mb-6">
            Panel de usuario
          </h1>

          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <UserCard />
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

