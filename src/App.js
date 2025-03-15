import React from "react";
import BeforeHeader from "./assets/components/BeforeHeader";
import AfterHeader from "./assets/components/AfterHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cut_the_rope from "./assets/pages/Cut_the_rope";
import AfterHome from "./assets/components/AfterHome";
import Footer from "./assets/components/Footer";
import Fireboy_and_watergirl from "./assets/pages/Fireboy_and_watergirl";
import Paper_io from "./assets/pages/Paper_io";
import Hole_io from "./assets/pages/Hole_io";
import Gun_mayhem_2 from "./assets/pages/Gun_mayhem_2";
import Mr_racer from "./assets/pages/Mr_racer";
import Happy_snakes from "./assets/pages/Happy_snakes";
import Action from "./assets/components/Action";
import Get_on_top from "./assets/pages/Get_on_top";
import House_of_Hazards from "./assets/pages/House_of_Hazards";
import Stick_war_infinity_duel from "./assets/pages/Stick_war_infinity_duel";
import Riders_Downhill_Racing from "./assets/pages/Riders_Downhill_Racing";
import Rooftop_snipers from "./assets/pages/Rooftop_snipers";
import Drunken_Table_wars from "./assets/pages/Drunken_Table_wars";
import Two_Punk_Racing2 from "./assets/pages/Two_Punk_Racing2";
import Moon_City_Stunt from "./assets/pages/Moon_City_Stunt";
import Metal_Army_War_Revenge from "./assets/pages/Metal_Army_War_Revenge";
import Boxing_Stars from "./assets/pages/Boxing_Stars";
import Drunken_Tug_War from "./assets/pages/Drunken_Tug_War";
import Shadow_Fights from "./assets/pages/Shadow_Fights";
import Bowman_2 from "./assets/pages/Bowman_2";
import Ultimate_Robo_Duel_3D from "./assets/pages/Ultimate_Robo_Duel_3D";
import Ragdoll_Arena from "./assets/pages/Ragdoll_Arena";
import Offroad_Life_3D from "./assets/pages/Offroad_Life_3D";
import Balanced_Running from "./assets/pages/Balanced_Running";
import Shadow_Fighters_Hero_Duel from "./assets/pages/Shadow_Fighters_Hero_Duel";
import Fish_Stab_Getting_Big from "./assets/pages/Fish_Stab_Getting_Big";
import Paper_Fighter_3D from "./assets/pages/Paper_Fighter_3D";
import Mini_Duels_Battle from "./assets/pages/Mini_Duels_Battle";
import Epic_Battle_Puzzle from "./assets/pages/Epic_Battle_Puzzle";
import Fighter_Legends_Duo from "./assets/pages/Fighter_Legends_Duo";
import Trial_Bike_Racing_Clash from "./assets/pages/Trial_Bike_Racing_Clash";
import Bad_Dolls from "./assets/pages/Bad_Dolls";
import Super_Fighters_Ultimate from "./assets/pages/Super_Fighters_Ultimate";
import Death_Race_Monster_Arena from "./assets/pages/Death_Race_Monster_Arena";
import Zombie_Mission_13 from "./assets/pages/Zombie_Mission_13";
import Mini_Fighters_Strike from "./assets/pages/Mini_Fighters_Strike";
import Adventure from "./assets/components/Adventure";
import Racing from "./assets/components/Racing";
import Shooting from "./assets/components/Shooting";
import SignIn from "./assets/auth/SignIn";
import BeforeHome from "./assets/components/BeforeHome";
import Review from "./assets/components/Review";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><BeforeHeader /><BeforeHome /><Footer /></>} />
      <Route path="/signin" element={<><SignIn /></>} />
      <Route path="/home" element={<><AfterHeader /><AfterHome /><Footer /></>} />
      <Route path="/action" element={<><AfterHeader /><Action /><Footer /></>} />
      <Route path="/adventure" element={<><AfterHeader /><Adventure /><Footer /></>} />
      <Route path="/racing" element={<><AfterHeader /><Racing /><Footer /></>} />
      <Route path="/shooting" element={<><AfterHeader /><Shooting /><Footer /></>} />
      <Route path="/cut_the_rope" element={<><AfterHeader /><Cut_the_rope /><Footer /></>} />
      <Route path="/fireboy_and_watergirl" element={<><AfterHeader /><Fireboy_and_watergirl /><Footer /></>} />
      <Route path="/paper_io" element={<><AfterHeader /><Paper_io /><Footer /></>} />
      <Route path="/hole_io" element={<><AfterHeader /><Hole_io /><Footer /></>} />
      <Route path="/gun_mayhem_2" element={<><AfterHeader /><Gun_mayhem_2 /><Footer /></>} />
      <Route path="/mr_racer" element={<><AfterHeader /><Mr_racer /><Footer /></>} />
      <Route path="/happy_snakes" element={<><AfterHeader /><Happy_snakes /><Footer /></>} />
      <Route path="/get_on_top" element={<><AfterHeader /><Get_on_top /><Footer /></>} />
      <Route path="/house_of_hazards" element={<><AfterHeader /><House_of_Hazards /><Footer /></>} />
      <Route path="/stick_war_infinity_duel" element={<><AfterHeader /><Stick_war_infinity_duel /><Footer /></>} />
      <Route path="/Riders_Downhill_Racing" element={<><AfterHeader /><Riders_Downhill_Racing /><Footer /></>} />
      <Route path="/Rooftop_snipers" element={<><AfterHeader /><Rooftop_snipers /><Footer /></>} />
      <Route path="/Moon_City_Stunt" element={<><AfterHeader /><Moon_City_Stunt /><Footer /></>} />
      <Route path="/Two_Punk_Racing2" element={<><AfterHeader /><Two_Punk_Racing2 /><Footer /></>} />
      <Route path="/Drunken_Table_wars" element={<><AfterHeader /><Drunken_Table_wars /><Footer /></>} />
      <Route path="/Metal_Army_War_Revenge" element={<><AfterHeader /><Metal_Army_War_Revenge/><Footer /></>} />
      <Route path="/Boxing_Stars" element={<><AfterHeader /><Boxing_Stars/><Footer /></>} />
      <Route path="/Drunken_Tug_War" element={<><AfterHeader /><Drunken_Tug_War/><Footer /></>} />
      <Route path="/Shadow_Fights" element={<><AfterHeader /><Shadow_Fights/><Footer /></>} />
      <Route path="/Bowman_2" element={<><AfterHeader /><Bowman_2/><Footer /></>} />
      <Route path="/Offroad_Life_3D" element={<><AfterHeader /><Offroad_Life_3D/><Footer /></>} />
      <Route path="/Ultimate_Robo_Duel_3D" element={<><AfterHeader /><Ultimate_Robo_Duel_3D/><Footer /></>} />
      <Route path="/Ragdoll_Arena" element={<><AfterHeader /><Ragdoll_Arena/><Footer /></>} />
      <Route path="/Balanced_Running" element={<><AfterHeader /><Balanced_Running/><Footer /></>} />
      <Route path="/Shadow_Fighters_Hero_Duel" element={<><AfterHeader /><Shadow_Fighters_Hero_Duel/><Footer /></>} />
      <Route path="/Fish_Stab_Getting_Big" element={<><AfterHeader /><Fish_Stab_Getting_Big/><Footer /></>} />
      <Route path="/Paper_Fighter_3D" element={<><AfterHeader /><Paper_Fighter_3D/><Footer /></>} />
      <Route path="/Mini_Duels_Battle" element={<><AfterHeader /><Mini_Duels_Battle/><Footer /></>} />
      <Route path="/Epic_Battle_Puzzle" element={<><AfterHeader /><Epic_Battle_Puzzle/><Footer /></>} />
      <Route path="/Fighter_Legends_Duo" element={<><AfterHeader /><Fighter_Legends_Duo/><Footer /></>} />
      <Route path="/Trail_Bike_Racing_Clash" element={<><AfterHeader /><Trial_Bike_Racing_Clash/><Footer /></>} />
      <Route path="/Bad_Dolls" element={<><AfterHeader /><Bad_Dolls/><Footer /></>} />
      <Route path="/Zombie_Mission_13" element={<><AfterHeader /><Zombie_Mission_13/><Footer /></>} />
      <Route path="/Super_Fighters_Ultimate" element={<><AfterHeader /><Super_Fighters_Ultimate/><Footer /></>} />
      <Route path="/Death_Race_Monster_Arena" element={<><AfterHeader /><Death_Race_Monster_Arena /><Footer /></>} />
      <Route path="/Mini_Fighters_Strike" element={<><AfterHeader /><Mini_Fighters_Strike /><Footer /></>} />
      <Route path="/review" element={<><Review /></>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App