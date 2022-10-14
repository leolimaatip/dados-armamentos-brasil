import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.headerContainer}>
          <p className={styles.headerText}>
            Cada arma contida ao fundo representa uma arma registrada no Brasil</p>
        </section>

        <section className={styles.quantityContainer}>
          <p className={styles.quantityText}>
            Existem cerca de <strong>4,4 milhões</strong> de armas de fogo registradas no Brasil em 2022
          </p>
        </section>

        <section className={styles.statesContainer}>
          <div>
            <p className={styles.statesText}>
              Temos mais armas de fogo registradas do que habitantes no Tocantins, Acre,
              Amapa e Roraima, somados.
            </p>
          </div>

          <div className={styles.flags}>
            <div className={styles.stateContent}>
              <Image src="/images/tocantins.png" width={200} height={120} alt="Bandeira do estado do Tocantins" objectFit={'contain'} />

              <div>
                <p>Tocantins</p>
                <p> <strong>1.607.363</strong> habitantes</p>
              </div>
            </div>

            <div className={styles.stateContent}>
              <Image src="/images/acre.png" width={200} height={120} alt="Bandeira do estado do Acre" objectFit={'contain'} />

              <div>
                <p>Acre</p>
                <p><strong>906.876</strong> habitantes</p>
              </div>
            </div>

            <div className={styles.stateContent}>
              <Image src="/images/amapa.png" width={200} height={120} alt="Bandeira do estado do Amapá" objectFit={'contain'}/>
              
              <div>
                <p>Amapá</p>
                <p> <strong>877.613</strong> habitantes</p>
              </div>
            </div>

            <div className={styles.stateContent}>
              <Image src="/images/roraima.png" width={200} height={120} alt="Bandeira do estado do Roraima" objectFit={'contain'} />
              
              <div>
                <p>Roraima</p>
                <p> <strong>652.713</strong> habitantes</p>
              </div>
            </div>
          </div>

          <p className={styles.statesTotal}>Total de habitantes somados = <strong>4.044.565</strong></p>
        </section>
      </main>

    </div>
  )
}

export default Home;
