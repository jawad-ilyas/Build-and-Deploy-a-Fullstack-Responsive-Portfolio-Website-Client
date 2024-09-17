import { GoDotFill } from "react-icons/go";


const NavigationDots = ({ active }) => {
    return (
        <div className="app_naviagtion">
            {["home", "about", "work", "skills", "contact"].map((link, index) => (
                <a
                    className='app__navigation-dot flex flex-col space-y-6  ms-2 text-gray-600 uppercase font-semibold keyhover:text-secondaryColor hover:duration-300'
                    key={index + link}
                    href={`#${link}`}
                    style={active === link ? { color: '#313BAC' } : {}}
                >
                    <GoDotFill size={20} />
                </a>
            ))}
        </div>
    )
}

export default NavigationDots