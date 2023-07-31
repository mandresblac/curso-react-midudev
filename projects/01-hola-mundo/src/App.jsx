import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  
  return(
    <section className='App'>
      <TwitterFollowCard 
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran" />

      <TwitterFollowCard
        isFollowing={false}
        userName="pheralb"
        name="Pablo Hernandez" />

      <TwitterFollowCard
        isFollowing 
        userName="elonmusk"
        name="Elon Musk" />

      <TwitterFollowCard
        isFollowing
        userName="vxndez"
        name="Vanderhart" />
        
    </section>
  )
}