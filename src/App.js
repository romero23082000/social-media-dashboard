import './App.css';
import CardOverview from './components/OverviewCards/CardOverview';
import Header from './components/Header/Header';
import SocialCard from './components/SocialCard/SocialCard';
import { data } from './data'

function App() {
  console.log(data)
  return (
    <div className='container'>
      <div className='divShadow'></div>
      <div className='home'>
        <Header />
        <div className='firstCard'>
          {
            data[0].social.map((item) => {
              return (
                <SocialCard item={item} key={item.id} />
              )
            })
          }
        </div>
        <h1 className='Overview'>Overview - Today</h1>
        <div className='secondCard'>
          {
            data[0].overview.map((item) => {
              return (
                <CardOverview item={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
