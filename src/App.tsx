import React from 'react'
import TopBar from './components/header/TopBar'
import Menu from './components/header/Menu'
import Logo from './components/header/Logo'
import Cards from './components/header/home/Cards'
import Socials from './components/header/home/Socials'
const App = () => {
  return (
    <div>
      <header className='bg-black'>
        <TopBar />
        <div className=" items-center container flex m-auto py-2">
          <div className='flex justify-start'>
            <Logo />
          </div>
          <div className=' flex m-auto'>
            <Menu />
          </div>
        </div>
      </header>
      <section>
        <Socials
          link='/'
          title='join other survivors in our'
          subtitle='forum'
          hasPrice={true}
          price={16.75}
          hasSocials={true}
          socials='https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/platforms.png'
          hasIconLeft={true} iconLeft='https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/steam.svg'
          color='black' />
      </section>

      <section>
        <Socials
          link='/'
          title='buy on gog'
          subtitle=''
          hasPrice={true}
          price={16.75}
          hasSocials={true}
          socials='https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/platforms.png'
          hasIconLeft={true} iconLeft='https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/GOG.com.svg'
          color='black' />
      </section> 
      
      <section>
        <Socials
          link='/'
          title='buy on steam'
          subtitle=''
          hasPrice={true}
          price={16.75}
          hasSocials={true}
          socials='https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/platforms.png'
          hasIconLeft={true} iconLeft='https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/steam.svg'
          color='black' />
      </section>
      
      
      <section className='grid grid-cols-3 gap-3 m-40 align-top	'>
  <Cards 
    title='Survive'
    image='https://projectzomboid.com/blog/content/uploads/2022/01/Survive.jpg'
    content='Surviving isn’t just about blowing zombie heads off. Depression, starvation, loneliness, infection... Just some of the things to deal with...'
  />

  <Cards
    title='Build' 
    image='https://projectzomboid.com/blog/content/uploads/2022/01/build.jpg'
    content='Craft items to help you stay alive. Whether it’s weapons, food or a plank of wood nailed to a door...'
  />

  <Cards
    title='Defend' 
    image='https://projectzomboid.com/blog/content/uploads/2022/01/defend.jpg'
    content='Protect yourself and your allies from the relentless horde with a huge range of weapons and defenses.'
  />
</section>



    </div>
  )
}



export default App
