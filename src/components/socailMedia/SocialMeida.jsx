import {  FaTwitterSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
const SocialMeida = () => {
    return (
        <div className="app__social">
            <div className="">
                <FaTwitterSquare className="cursor-pointer  my-1 rounded-full " size={20}  />
            </div>
            <div>
                <FaFacebookSquare className="cursor-pointer  my-1 rounded-full " size={20} />
            </div>
            <div>
                <FaInstagramSquare className="cursor-pointer  my-1 rounded-full " size={20} />
            </div>
        </div>
    )
}

export default SocialMeida