import { useState } from 'react';
import Toast from '../Toast';
import { Container } from './styles';

const ToastContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <button type='button' onClick={() => setIsVisible(true)}>
        Mostrar
      </button>

      {isVisible && (
        <Toast
          message={{
            title: 'Login realizado com sucesso',
            description: 'Você será redirecionado para dashboard',
          }}
          setIsVisible={setIsVisible}
        />
      )}
    </Container>
  );
};

export default ToastContainer;
