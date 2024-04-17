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
      <section className='flex container gap-5 m-auto'>
        <Cards title='Survive' image='https://projectzomboid.com/blog/content/uploads/2022/01/Survive.jpg' content='Surviving isn’t just about blowing zombie heads off. Depression, starvation, loneliness, infection... Just some of the things to deal with...' />
        <Cards title='Survive' image='https://projectzomboid.com/blog/content/uploads/2022/01/Survive.jpg' content='Surviving isn’t just about blowing zombie heads off. Depression, starvation, loneliness, infection... Just some of the things to deal with...' />
        <Cards title='Survive' image='https://projectzomboid.com/blog/content/uploads/2022/01/Survive.jpg' content='Surviving isn’t just about blowing zombie heads off. Depression, starvation, loneliness, infection... Just some of the things to deal with...' />

      </section>
      <section>
        <Socials title='Join other survivors in our' subtitle='Forum' hasSocials={false} color='#'/>
      </section>
    </div>
  )
}



export default App
