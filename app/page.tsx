import Card from "./components/Card";
import TikTakIcon from "./components/icons/TikTakIcon";
import CoinIcon from "./components/icons/CoinIcon";

export default function Home() {

  
  return (
    <main className="grid grid-cols-3 gap-4">
                  
        <Card name="TikTak Toe" link="/tiktaktoe" icon={TikTakIcon}/>
        <Card name="Flip Coin" link="/flipcoin" icon={CoinIcon}/>
        <Card name="Problemas de lógica" link="/logicgame" icon={'/assets/logicgame/brainIcon.svg'}/>
        
    </main>
  );
}
