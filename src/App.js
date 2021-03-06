//This App.js file is the center of the application. 
// Think of App.js as the root component, or the wrapper 
// component that houses all of the other components. To 
// effect any change on the application, we need to either 
// modify this file or add components inside it.
import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/nav';
import Gallery from './components/gallery';
import ContactForm from './components/contact';
function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
       categories={categories}
       setCurrentCategory={setCurrentCategory}
       currentCategory={currentCategory}
       contactSelected={contactSelected}
       setContactSelected={setContactSelected}
      ></Nav>
      <main>
    {/* // this is a "ternary operator" */}
        <div>{!contactSelected ? ( 
          <> {/*Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragmen */}
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : // << this means else 
          ( 
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}


export default App;
