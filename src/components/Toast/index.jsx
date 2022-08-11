import { useEffect, useState } from 'react';
import { FiInfo, FiXCircle } from 'react-icons/fi';
import { Container } from './styles';

const Toast = ({ message, setIsVisible }) => {
  const [isLeave, setIsLeave] = useState(false);

  useEffect(() => {
    let timer;

    if (isLeave) {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 700);
    } else {
      timer = setTimeout(() => {
        setIsLeave(true);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLeave]);

  return (
    <Container isLeave={isLeave}>
      <FiInfo size={24} />

      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>

      <button type='button' onClick={() => setIsLeave(true)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
