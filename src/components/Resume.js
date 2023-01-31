import React, { useState } from 'react';

const Resume = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const codingLanguages = [    {      name: 'JavaScript',      video: 'www.example.com'    },    {      name: 'Python',      video: 'https://www.youtube.com/embed/sYb0QTQz9eA'    },    {      name: 'Java',      video: 'https://www.youtube.com/embed/q1Btuv8cpxI'    } ,{      name: 'CSS',      video: 'https://www.youtube.com/embed/q1Btuv8cpxI'    } ,{      name: 'HTML',      video: 'https://www.youtube.com/embed/q1Btuv8cpxI'    }, {      name: 'C++',      video: 'https://www.youtube.com/embed/q1Btuv8cpxI'    }  ];

  return (
    <div className='resumeContainer' style={{ display: 'flex' }}>
        <h2 className='portH2'> Resume</h2>
      <ul style={{ listStyleType: 'none', padding: 0, margin:'15px', marginLeft:'35px', border:'solid black 2px', width:'300px' }}>
        <h3 className='resumeH3'> Known Languages </h3>
        {codingLanguages.map((language, index) => (
          <li
            key={index}
            style={{
                fontFamily: 'Takumi',
               
              padding: '10px',
              fontSize: selectedItem === index ? '2.5em' : '2em',
              textShadow: selectedItem === index ? '2px 2px white' : 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setSelectedItem(index)}
            onMouseLeave={() => setSelectedItem(null)}
          >
            {language.name}
          </li>
        ))}
      </ul>
      {selectedItem !== null && (
        <iframe
          title={codingLanguages[selectedItem].name}
          src={codingLanguages[selectedItem].video}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            height: '50%',
            width: '50%',
          
            marginLeft:'25%',
           
            volume: 0.25
          }}
        />
      )}
    </div>
  );
};

export default Resume;
