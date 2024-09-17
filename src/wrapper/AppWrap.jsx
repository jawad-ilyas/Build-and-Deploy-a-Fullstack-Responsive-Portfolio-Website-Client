import { NavigationDots, SocialMeida } from "../components/index.components.js";

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}  relative`}>
            <div className="absolute bottom-8 left-5">
                <SocialMeida />
            </div>
            <div className="app__wrapper app__flex">
                <Component />
            </div>
            <div className="absolute bottom-2 right-9">
                <div className="copyRight ">
                    <p className="p-text">@Jawad Mughal Dev</p>
                    <p className="p-text">All rights Reserved</p>
                </div>
            </div>
            <div className="absolute  top-[50%] right-[2%]">
                <NavigationDots active={idName} />
            </div>
        </div>
    );
}

export default AppWrap;
