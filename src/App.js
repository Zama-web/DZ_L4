import './App.css';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import PostPage from './pages/postPage/PostPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className="App">
      <PostPage />  {/* function */}

      ---------------------------------------

      <PortfolioPage />  {/* class */}
      
      ---------------------------------------

      <UsersPage/>
    </div>
  );
}

export default App;
