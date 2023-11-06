import champer from './assets/they_are_so_ded.mp3'
import { useEffect } from 'react';





export default function Test(){
    useEffect(()=>{
        const playAudio = () => {
          new Audio(champer).play();
        }
       return playAudio()
    })

    return(<>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis odio expedita, cupiditate provident ratione iusto sunt veritatis necessitatibus omnis officia quam dolor? Officia illo magnam autem vitae, tenetur eligendi.
        </>)
}
