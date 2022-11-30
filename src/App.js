import React, {useState} from 'react'
import quotes from './quotes';
import './index.css';

const App = () => {

 const [count,setCount] = useState(0);
 const [text,setText] = useState([]);

 const handleClick = (e) =>{
  e.preventDefault();

  let amount = parseInt(count);

  if(count <= 0){
    amount = 1;
  }
  if(count > quotes.length-1){
    amount = quotes.length;
  }

  setText(quotes.slice(0,amount));
 }


  return (
    <div className='container'>
      

      <section>
     <form onSubmit={handleClick}>
      

      <div className='input-container'>
           
            <input type='number' value={count} onChange={(e)=>setCount(e.target.value)}/>

            <button type='submit'>QUOTE(S)</button>

      </div>
     

     </form>
     {
      text.map((qoute,index)=>{
       return <article key={index}>
        <p><strong>{qoute}</strong></p>
       </article>
      })
     }
    </section>



    </div>
    
  )
}

export default App
