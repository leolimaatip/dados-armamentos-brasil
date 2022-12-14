import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  const [number, setNumber] = useState(1);

  var scrollPos = 0;

  const listener = (e: { preventDefault: () => void; }) => window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
      setNumber(400000)
    }
    else if ((document.body.getBoundingClientRect()).top > scrollPos) {
      setNumber(1)
    }
    else {
      setNumber(number + 390)
    }

  });

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <div className={styles.container}>
      <header className={styles.navContainer}>
        <Image src="/images/sbt-news.png" width={150} height={50} alt="SBT News" objectFit={'contain'} />

        <h1>Armas no Brasil em escala real</h1>

        <p className={styles.counter}>
          {number}
        </p>
      </header>

      <main>
        <section className={styles.headerContainer}>
          <p className={styles.headerText}>
            Cada arma contida ao fundo representa uma arma registrada no Brasil
          </p>

          <div>
            <Image src="/images/arrow.png" width={80} height={50} alt="Role para baixo" objectFit={'contain'} />
          </div>
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
              <Image src="/images/amapa.png" width={200} height={120} alt="Bandeira do estado do Amapá" objectFit={'contain'} />

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

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            Temos mais armas de fogo registradas do que habitantes no <strong>Uruguai</strong>
          </p>

          <div className={styles.centralImage}>
            <Image
              src="/images/uruguai.jpg"
              width={400}
              height={300}
              alt="Bandeira do Uruguai"
              objectFit={'contain'}
            />
          </div>

          <p className={styles.defaultText}>
            <strong>3.474</strong> milhões de habitantes
          </p>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            O grupo de <strong>colecionadores de armas, atiradores profissionais e caçadores (CAC’s) </strong>
            cresceu significativamente na gestão do presidente Jair Bolsonaro.
          </p>

          <p className={styles.defaultText}>
            Em meio à política pró-armamento do governo, esse número cresceu 474%:
            passou de 117.467, em 2018, para 673.818 este ano, até 1° de julho
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/pf-registro-cac.png"
                width={1000}
                height={500}
                alt="Gráfico do aumento dos registro de armas de fogo segundo o anuário de segurança pública"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            número de pessoas cadastradas como colecionadores de armas, atiradores profissionais e caçadores (CAC’s)
            é maior do que os <strong>406 mil policiais</strong> militares da ativa que atuam em todo o País.
            Também é maior do que o efetivo de <strong>360 mil homens das Forças Armadas</strong>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/numero-cacs.png"
                width={800}
                height={800}
                alt="Gráfico do aumento dos registro de armas de fogo segundo o anuário de segurança pública"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <b>
              Nos último quatro anos, Brasil importou mais revólveres e pistolas que
              em 21 anos de outros governos
            </b>

            <br /><br />

            Entre 1997 e 2018, foram importados 120,4 mil revólveres e pistolas.
            De janeiro de 2019 a agosto de 2022, foram 441,3 mil
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/importacao-armas.png"
                width={1000}
                height={1000}
                alt="Gráfico do aumento da importação de revólvers"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            Países com maior <b>número de armas em posse de civis.</b>
          </p>

          <div className={styles.centralImage}>
            <figcaption className={styles.caption}>
              *Armas de fogo para cada 100 pessoas.
            </figcaption>

            <figure>
              <Image
                src="/images/posse-civil.png"
                width={900}
                height={700}
                alt="Gráfico número de armas em posse civil"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <strong>Mortes ligadas a arma de fogo</strong> em comparação com <strong>todos os homicídios.</strong>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/mortes.png"
                width={1000}
                height={1000}
                alt="Gráfico número de mortes ligadas a arma de fogo em relação a todos os homicídios"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <strong>Acessibilidade de custo</strong>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/acessibilidade-custo.png"
                width={900}
                height={600}
                alt="Acessibilidade de custos de armas"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            Tipos de <b>arma de fogo</b> usadas em <b>homicídios nos EUA</b>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/tipo-armas-homicidios.png"
                width={900}
                height={600}
                alt="Gráfico tipo de armas em cada homicídio"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            Cerca de <strong>metade de todas as mortes</strong> por arma de fogo são <strong>suicídios</strong>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/mortes-grafico-1.png"
                width={900}
                height={600}
                alt="Gráfico mortes por arma de fogo nos EUA"
                objectFit={'contain'}
              />
            </figure>

            <figure>
              <Image
                src="/images/mortes-grafico-2.png"
                width={900}
                height={600}
                alt="Gráfico mortes por arma de fogo nos EUA parte 2"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <strong>Violência armada</strong>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/violencia-armada.png"
                width={1000}
                height={800}
                alt="Gráfico de aumento da violência armada"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <strong>Tiroteios em escolas dos EUA atingiram um recorde em 2021</strong>
          </p>

          <div className={styles.centralImage}>
            <figcaption>
              *Vítimas por ano.
            </figcaption>

            <figure>
              <Image
                src="/images/vitimas-ano.png"
                width={1500}
                height={800}
                alt="Gráfico de aumento de tiroteios em escolas dos EUA em 2021"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <strong>Em 10 anos EUA</strong> têm <strong>mais mortos em massacres</strong>
            do que em <strong>ataques terroristas</strong>
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/terrorismo.png"
                width={1000}
                height={600}
                alt="Gráfico de quantidade de ataques terroristas"
                objectFit={'contain'}
              />
            </figure>

            <figure>
              <Image
                src="/images/massacres.png"
                width={1000}
                height={800}
                alt="Gráfico qunatidade de ataques a tiros"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            <strong>Japão</strong> tem um dos <strong>menores números</strong> relacionados
            a <strong>violência</strong> com <strong>armas de fogo</strong> no <strong>mundo</strong>
          </p>

          <p className={styles.subTexts}>
            Com leis de controle de armas de fogo, Japão tem uma das menores taxas relacionadas
            a violência causada por uso de armas de fogo no mundo.
          </p>

          <p className={styles.subTexts}>
            Apenas 0.6 pessoas a cada 100 possuem armas de fogo no Japão, comparados com 6.2
            pessoas no Reino Unido e 88.8 pessoas nos Estados Unidos.
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/menor-quantidade-armas-mundo.png"
                width={900}
                height={1400}
                alt="Gráfico japão tem a menor quantidade de armas no mundo"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>

        <section className={styles.defaultContainer}>
          <p className={styles.defaultText}>
            Alguns <strong>dados</strong> sobre a <strong>violência no Brasil</strong>
          </p>

          <p className={styles.subTexts}>
            Anuário Brasileiro de Segurança Pública de 2021 mostra a convivência do Brasileiro
            com a violência e a dificuldade das autoridades em tentar controlá-la
          </p>

          <div className={styles.centralImage}>
            <figure>
              <Image
                src="/images/violencia-brasil.png"
                width={900}
                height={1400}
                alt="Gráfico japão tem a menor quantidade de armas no mundo"
                objectFit={'contain'}
              />
            </figure>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home;
