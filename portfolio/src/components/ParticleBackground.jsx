import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function ParticleBackground () {
  
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
}

  return <div className="App">
    <Particles 
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}

      options={{
        background: {
          color: "#000000" //background color of canvas
        },
        fps_limit: 60,
        
        interactivity: { //object that contains all options for interactions
          detectsOn: "canvas",
          events: { //when window is resize particles get resized aswel
              onhover: {
              enable: false,
              mode: "grab",
              },
            resize: true,
          },
        },
        modes: {
          grab: {
            distance: 500,
            line_linked: {
              opacity: 0.5,
              distance: 100,
            }
          },
          repulse: {
            distance: 10,
            duration: 0.1,
          }
        
        },
        particles: {
          color: { //color of actual particles
            value: "00ffff" //particles do not require hash for color
          },
          number: {
            density: {//density of particles in canvas area
              enable: false,
              area: 1000,
              value: 40,
            },
            limit: 0,//limits how many particles are on screen at one time, set as 0 so it can go all the way up to value number
            value: 200,//number of particles on screen
          },
          opacity: {//set opacity
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 3,
              sync: false,
            },
            random: {//randomize opacity of particles
              enable: true,
              minimumValue: 0.05,
            },
            value: 1
          },
        
          
          shape: {//shape of individual particles
            type: "polygon", //also has square, triangle etc..
          },
          size: {//size of particles
            random: {//random sized particles
              enable: true,
              minimumValue: 0.2,
            },
            
            value: 4,
          }
        },
        
      }}
  
  
    
  />
</div>
}
export default ParticleBackground
