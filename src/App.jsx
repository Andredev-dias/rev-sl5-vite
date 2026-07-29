import s from './App.module.css'

import bannerPic from '/senaiBG.jpg'
import card01 from '/pic01.jpg'
import card02 from '/pic02.jpg'
import card03 from '/pic03.jpg'
import insta from '/instagram.png'
import face from '/face.png'
import git from '/github.png'


function App() {

  return (
    <>
      <nav>
        <a href="#s1">Home</a>
        <a href="#s2">Sobre</a>
        <a href="#s3">Cards</a>
      </nav>
      <main>

        <section id='s1' className={s.s1}>
        </section>

        <section id='s2'>
          <div className={s.left}>
            <img width={300} src={bannerPic} alt="Banner" />
          </div>
          <div className={s.right}>
            <h2>Subtítulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa repellendus? Voluptates tempore magnam, quam dolores omnis nihil. Magni expedita repellat tempore quisquam dicta porro, assumenda fugiat suscipit minima unde.</p>
          </div>
        </section>

        <section id='s3'>
          <div className={s.card}>
            <img width={300} src={card01} alt="" />
            <div className={s.cardTexts}>
              <h3>Título Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
            </div>
          </div>

          <div className={s.card}>
            <img width={300} src={card02} alt="" />
            <div className={s.cardTexts}>
              <h3>Título Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
            </div>
          </div>

          <div className={s.card}>
            <img width={300} src={card03} alt="" />
            <div className={s.cardTexts}>
              <h3>Título Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href=""><img width={40} src={insta} alt="" /></a>
        <a href=""><img width={40} src={face} alt="" /></a>
        <a href=""><img width={40} src={git} alt="" /></a>
      </footer>
    </>
  )
}

export default App
