import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Accout</span>
                    <span className="settingsDeleteTitle">Delete Accout</span>
                </div>
                <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?cs=srgb&dl=pexels-godisable-jacob-718978.jpg&fm=jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                        <i className="settingsProfileIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Pascal" />
                    <label >Email</label>
                    <input type="email" placeholder="Pascalkabika123@gmail.com" />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
                <Sidebar/>
            
        </div>
    )
}
