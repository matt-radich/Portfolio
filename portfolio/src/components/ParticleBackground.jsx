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

  return <div className="particles">
    <Particles 
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}

      options={{
        background: {
          color: "#000000" //background color of canvas
        },
        fps_limit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 2,
              opacity: 0.8,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            grab: {
              distance: 150,
            }
            
    
          },
        },
        particles: {
          color: {
            value: "#04FDFB",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.07,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        
      }}

  />
  </div>
}

export default ParticleBackground
