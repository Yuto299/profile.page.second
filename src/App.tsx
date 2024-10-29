import React from 'react';
import './App.css';

const App: React.FC = () => {
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
      <button>いいね！</button>
    </div>
  );
};

export default App;

// reactではなかったらindex.jsでいい
// station5で詰まったらcssをクリアにしよう
// cssは後書きが優先される
