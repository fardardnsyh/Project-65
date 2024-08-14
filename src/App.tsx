import { Counter } from './components/Counter';
import rocketImg from './assets/img/rocket.png';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

export const App = () => {
  const notify = () =>
    toast.info('Inscrição confirmada com sucesso!', {
      closeButton: false,
      theme: 'colored',
    });

  return (
    <main>
      <div className="container">
        <h1>Pronto para lançar em</h1>

        <Counter />

        <p>Inscreva-se para saber mais sobre o lançamento</p>

        <button onClick={notify}>Inscreva-se</button>

        <ToastContainer
          theme="dark"
          position="top-center"
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
      </div>

      <img src={rocketImg} alt="" width={500} />
    </main>
  );
};
