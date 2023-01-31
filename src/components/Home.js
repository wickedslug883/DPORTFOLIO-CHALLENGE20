
import React, { useEffect, useState } from 'react';

function Home() {
    const [counter, setCounter] = useState(0);
    const pics = [
      'selfie1.jpg',
      ' selfie2.jpg'
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter(prevCounter => (prevCounter + 1) % pics.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }, [pics.length]);
    return (
       <div className='homeContainer'> 
       <h2 className='homeH2'> Home</h2>
       <div className='homeJam'> <h3>About Me</h3> <p className='homeJammie'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada ligula ut odio venenatis, pretium sagittis odio tristique. Vestibulum ac ultricies justo. Nam velit nulla, malesuada in justo ac, condimentum eleifend libero. Donec odio magna, faucibus ut ullamcorper nec, feugiat at metus. Cras magna enim, ultrices eget sem tincidunt, imperdiet interdum justo. Proin eu libero ante. Maecenas ut quam dignissim elit tincidunt rutrum. Donec nec magna ut lectus aliquet posuere eget eget nibh. Pellentesque eu nunc tortor. Nam felis erat, tincidunt ut sagittis in, fringilla quis ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam suscipit elementum erat malesuada sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse ut justo nisl. Duis et maximus ex, et condimentum quam.</p></div>
       <div id='about2' className='homeJam'><h3>  My Passions</h3> <p className='homeJammie'> Fusce convallis scelerisque nisl in ullamcorper. Suspendisse facilisis rhoncus purus id lacinia. Vivamus vehicula fermentum nulla ut condimentum. Maecenas lacinia vestibulum neque id interdum. Sed lacinia sed urna id dignissim. Fusce quis felis mollis, bibendum ante sed, dapibus erat. Proin porta elementum sem, eget sollicitudin lorem posuere in. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p></div>
       <div style={{  display: 'flex', position:'relative'}}>
      {pics.map((pic, index) => (
        <img
        className='homePic'
          key={pic}
          src={pic} 
          alt='selfies'
          style={{
            border: 'solid black 5px',
            display: 'flex',
            position: 'absolute',
            bottom: '10%',
            left: 0,
            marginLeft:'55px',
            width:'325px',
            height:'400px',
            opacity: index === counter ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      ))}
    </div>
       <div id='about3'className='homeJam'> <h3>My Goals  </h3><p className='homeJammie'>Phasellus fringilla eget ex et suscipit. Integer eu tellus erat. Nullam porttitor erat eget venenatis vehicula. Vivamus venenatis augue a libero condimentum volutpat. Aenean porttitor, arcu ut fringilla egestas, dui ex vulputate justo, ut lacinia libero purus sed nisl. Pellentesque sodales interdum tellus, et dapibus quam aliquam id. Nam non convallis elit. Praesent sodales vitae dolor nec congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

</p></div>
       
       </div>
    );
}
export default Home;