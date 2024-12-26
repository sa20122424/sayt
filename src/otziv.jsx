import React, { useState } from "react";

const Otziv = () => {
    const [imgUrl, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [nick, setNick] = useState('');
    const [Name, setName] = useState('');
  
    const handleSubmit = () => {
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  title, Name ,nick,imgUrl }), 
      }).then((response) => {
        if (response.ok) {
          setImg('');
          setTitle('');
          setName('');
          setNick('')
        }
         else {
          alert('Failed to add product');
        }
      });
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-[400px] bg-slate-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-xl font-semibold mb-4 text-center">
          Форма отзыва
        </h2>
        <div className="flex flex-col gap-4">
          <input
           value={title}
           onChange={(e) => setTitle(e.target.value)}
            placeholder="Введите отзыв"
            type="text"
            className="w-full px-4 py-2 text-sm rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
           value={Name}
           onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            type="text"
            className="w-full px-4 py-2 text-sm rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-4 flex-col">
            <h1 className="text-white text-center" >Необизательно </h1>
            <div className="flex gap-4">
            <input
               value={nick}
               onChange={(e) => setNick(e.target.value)}
              placeholder="от кого"
              type="text"
              className="flex-1 px-4 py-2 text-sm rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={imgUrl}
              onChange={(e) => setImg(e.target.value)}
              placeholder="картинка"
              type="text"
              className="flex-1 w-[100px] px-4 py-2 text-sm rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
           
          </div>
          <button
          onClick={handleSubmit}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Yuklash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otziv;
