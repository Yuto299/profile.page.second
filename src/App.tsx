import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/thanks');
  };

  return (
    <div>
      <h1>Self Introduction</h1>
      <h2>Full Name: Yuto Ota</h2>
      <h3>Hometown: Saitama</h3>
      <h3>University: Seijo University</h3>
      <h3>
        GitHub URL:{' '}
        <a href='https://github.com/Yuto299' target='_blank' rel='noopener noreferrer'>
          https://github.com/Yuto299
        </a>
      </h3>
      <h4>Nice to meet you!</h4>
      <button onClick={handleClick}>いいね！</button>
    </div>
  );
};

export default App;

// reactではなかったらindex.jsでいい
// station5で詰まったらcssをクリアにしよう
// cssは後書きが優先される
