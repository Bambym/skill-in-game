import table from "../../img/table.svg"
import hdd from "../../img/hdd.svg"
import controller from "../../img/controller.svg"
import AnnoucementContent from "../SearchContent/announce/AnnoucementContent"
import GameContent from "../SearchContent/game/GameContent"
import ConsoleContent from "../SearchContent/console/ConsoleContent"

export const TabsRoutes = [
    {
        icon : hdd,
        tabTitle : "Jeux",
        component : <GameContent/>
    },
    {
        icon : controller,
        tabTitle : "Console",
        component : <ConsoleContent/>
    },
    {
        icon : table,
        tabTitle : "Annonce",
        component : <AnnoucementContent/>
    }
]