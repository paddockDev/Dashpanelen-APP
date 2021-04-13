import Issues from '../components/Dashboard/Issues'
import User from '../components/Dashboard/User'
import Statistics from '../components/Dashboard/WakaTime/Statistics'
import Languages from '../components/Dashboard/WakaTime/Languages'

const Home = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto flex">
        <div className="p-6">
          <div className="flex flex-wrap">
            <User/>
            <Issues/>
            <Statistics/>
            <Languages/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
