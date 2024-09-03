import React from 'react';
import TodoList from './TodoList';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import image1 from './assets/im.jpg'


let image = 'https://th.bing.com/th/id/OIP.IhiqRWFamp-enjV2csKdzwHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7'

function App() {
  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]
  const handleOnHover = (result) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', color: 'red' }}>java</span>
        <span style={{ display: 'block', color: 'red' }}>javascript</span>
      </>
    )
  }
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }
  return (
    <div className="App">
      <TodoList />
      <ReactSearchAutocomplete
        items={items}
        // onSearch={handleOnSearch}
        onHover={handleOnHover}
        // onSelect={handleOnSelect}
        // onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
      />
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={10}
        totalSlides={3}
        // orientation = 'vertical'
        touchEnabled={true}
        dragEnabled={true}
        infinite={true}
        // hasMasterSpinner={true}
        interval = {1000}
        isPlaying={true}
        playDirection='backward'

      >
        <Slider>
          <Slide index={0}><img src={image1} alt='mkmdks' /></Slide>
          <Slide index={1}><img src={image1} alt='mkmdks' /></Slide>
          <Slide index={2}><img src={image1} alt='mkmdks' /></Slide>
          {/* <Slide index={0}>I am the second Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide> */}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  );
}

export default App;
