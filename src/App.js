import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import Apphero from './components/hero';
import Appcounter from './components/counter'
import Appcourses from './components/courses';
import Appinterest from './components/interest';
import Appfooter from './components/footer';
import AppLiveCourses from './components/liveCourses';
import AppReviews from './components/reviews';
import AppBoxes from './components/boxes';
import AppBrands from './components/brands';
// import AppBlogs from './components/blogs'

function App() {
  return (
    <div className="App">
        <header id='header'>
        <AppHeader />
      </header>
      <main>
        <Apphero/>
        <Appcounter/>
        <Appcourses/>
        <Appinterest/>
        <AppLiveCourses/>
        <AppReviews/>
        <AppBoxes/>
        <AppBrands/>
        {/* <AppBlogs/> */}
        
      </main>
      <footer id="footer">
        <Appfooter />
      </footer>
    </div>
  );
}

export default App;
