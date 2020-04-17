import React from 'react';
import Particles from 'react-particles-js';

const ParticlesContainer = () => {
    return (
        <div>
            

<Particles
style={{
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "100%",
	"height": "100%",
	"z-index": "0"
  }}
    params={{
	    "particles": {
	        "number": {
	            "value": 70,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.07
	        },
	        "move": {
	            // "direction": "right",
				"speed": 1,
				"out_mode": "out"
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1.5,
	                "opacity_min": 0.25
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				}
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
        </div>
    )
}

export default ParticlesContainer;