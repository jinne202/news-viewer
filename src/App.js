import React, {useState} from 'react';
import axios from 'axios'

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async() => {
    try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=au&apiKey=c60f3e16e5cb4a18964073ef0b5990d8');
    setData(response.data);
  } catch (e) {
    console.log(e);
  }
};
  return(
    <div>
      <div>
        <button onClick = {onClick}>불러오기</button>
      </div>
      {data && <textarea rows={30} value={JSON.stringify(data, null, 2)}/>}
    </div>
  );
};

export default App;
