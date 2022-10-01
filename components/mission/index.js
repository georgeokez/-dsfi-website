import Header from "./Header";
import MissionItem from "./MissionItem";

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <Header title="We Are On A Mission To"/>
                <div className="wpo-mission-wrap">
                    <div className="row">
                        <MissionItem 
                            imageUrl="images/mission/icon1.png"
                            content="Generate Awareness"
                        />
                        <MissionItem 
                            imageUrl="images/mission/icon4.png"
                            content="Heal and Transform"
                        />
                        <MissionItem 
                            imageUrl="images/mission/icon3.png"
                            content="Promote Personal Development"
                        />
                        <MissionItem 
                            imageUrl="images/mission/self-love-icon.png"
                            content="Enhance Self-esteem Development"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;