import styles from './Chat.module.css';
import Sidebar from '../../components/SideBar/SideBar';
import TopBar from '../../components/TopBar/TopBar';
import Logo from "../../assets/logo/LogoHeatherAI.svg"
const Chat = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <TopBar />

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>

            {/* Título */}
            <br></br><br></br>
            <img src={Logo} alt="Heather AI Logo" className={styles.logo} />
            <p className={styles.subtitle}>How can I help?</p>

            {/* Chat Area */}
            <div className={styles.chatArea}>

              <div className={styles.userMessage}>
                <p><strong>Usuário:</strong> O que XRP?</p>
              </div>

              <div className={styles.aiMessage}>
                <p><strong>Heather AI:</strong> O XRP (Rapid) é uma moeda digital e um token de blockchain único, criado pela Ripple Labs. É projetado
                  para facilitar transações rápidas e eficientes em todo o mundo, especialmente entre paises com infraestrutura financeira limitada.</p>
                <p>Aqui estão algumas caracteristicas principais do XRP:</p>
                <ol>
                  <li> <strong>Rapidez:</strong> O XRP pode ser transferido instantaneamente, independentemente da distância ou do tempo de processamento</li>
                  <li> <strong>Baixa taxação:</strong> As transações de XRP são geralmente mais baratas do que outras moedas digitais, como Bitcoin.</li>
                  <li> <strong>Falta de mineração:</strong> Não há necessidade de "mineração de XRP, pois é criado através de um processo chamado "emissão".</li>
                  <li> <strong>Customizável:</strong> O XRP pode ser usado para criar tokens personalizados com caracteristicas especificas.</li>
                  <li> <strong>Comunidade ativa:</strong> A comunidade do XRP é conhecida por seu engajamento e participação em projetos e iniciativas.</li>
                </ol>
                <p>XRP tem uma variedade de usos, incluido:</p>
                <ol>
                  <li> <strong>Pagamentos internacionais:</strong> O XRP é ideal para transferências rápidas e baratas entre paises.</li>
                  <li> <strong>Defi (Finanças descentralizadas):</strong> O XRP é usado em várias aplicações DeFi, como préstitos e investimentos.</li>
                  <li> <strong>Cross-border payments:</strong> O XRP pode ser usado para transferir valores entre contas bancárias em diferentes moedas.</li>


                </ol>
                <p>Espero que isso tenha ajudado a entender melhor o que é o XRP: se tiver mais alguma pergunta sinta-se à vontade para perguntar!</p>
              </div>

            </div>

            {/* Input Area */}
            <div className={styles.inputArea}>
              <input
                type="text"
                placeholder="Ask Heather AI about your goals"
                className={styles.input}
              />
              <button className={styles.submitButton}>Ask</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
