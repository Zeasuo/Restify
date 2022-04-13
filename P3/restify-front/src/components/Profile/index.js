import { Container } from "react-bootstrap";
import ProfileNavBar from "../ProfileNavBar";

const Profile = () =>{
    return <>
        <Container fluid style={{marginTop: "58px"}}>
            <div className = "row flex-nowrap">
                <div className="col-3 px-sm-2 px-0 bg-light">
                    <ProfileNavBar>
                    </ProfileNavBar>
                </div>
            </div>
        </Container>
    </>
}





export default Profile