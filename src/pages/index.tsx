import Head from 'next/head';
import { GetServerSideProps } from 'next'
import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider> 
  )
}


// A criação dessa função garante informar quais os dados que serão passados da camada do NextJS para a camada React
// A diferença entre fazer a chamada à algum serviço externo dessa maneira é justamente o fluxo descrito abaixo,
// se fazemos uma chamada assíncrona direto no componente React, a engine do Google, por exemplo, não terá acesso
// pois essa chamada será efetuada após a passagem pelo Next, só quando a interface já estará criada.
// Já se fizermos essa chamada via getServerSideProps, faremos a chamada antes de carregar a interface,
// ele fará a chamada API, pegará os dados, passará para nosso componente React os dados já prontos para que o componente mostre os dados em tela.
// Então, tudo que for passado via getServerSideProps
export const getServerSideProps: GetServerSideProps = async(ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

// Back-end(Ruby)
// NextJs (NodeJS) - Primeira camada que bato quando acesso uma aplicação, que é a que constrói a interface a partir da camada React, buscando os dados lá no back-end.
// Quando estou na camada do Next, estou em uma camada back-end, então nela eu tenho acesso a poder fazer qualquer coisa que eu faria no back-end tradicional.
// É claro que não é recomendado fazer coisas como acesso ao banco de dados, envio de e-mail, acesso a serviços externos...
// Mas
// Front-end (React)