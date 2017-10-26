// aframe-react
/*import 'aframe';*/
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

//Networking



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <Scene networked-scene>
                <a-assets>
                    <img id="skyTexture" src="img/skyTexture.jpg" alt=""/>
                    <img id="groundTexture" src="img/groundTexture.jpg" alt=""/>
                    <img id="moonTexture" src="img/moonTexture.jpg" alt=""/>
                    <script id="avatar-template" type="text/html">
                        <a-sphere></a-sphere>
                    </script>
                </a-assets>


                {/** Player **/}
                <a-entity id="player" networked="template:#avatar-template;showLocalTemplate:false;" camera wasd-controls look-controls>
                </a-entity>

                <a-entity hand-controls="left"></a-entity>
                <a-entity hand-controls="right"></a-entity>

                {/** Scene **/}
                <Entity primitive="a-light" type="ambient" color="#ffdfbd" intensity="0.4"/>
                <Entity primitive="a-sky" height="12048" radius="300" theta-length="90" width="12048" color="#333"
                        material="src:#skyTexture;"/>
                <Entity id="floor" primitive="a-plane" material="src:#groundTexture; repeat: 25 25" rotation="-90 0 0"
                        height="1000" width="1000"
                />
                <Entity primitive="a-sphere" position="100 260 50" rotation="0 0 82" radius="50" color="#fff" material="src:#moonTexture"/>
                <a-entity light="type: directional; color: #ffdfbd; intensity: 0.4" position="100 260 50"></a-entity>


            </Scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));




