import google from "../assets/google.png"

function Google(props) {
    return (
        <div onClick={()=> console.log('clicked google icon')} className="hover:cursor-pointer">
            <img src={google} className="w-8" />
        </div>
    );
}

export default Google;

