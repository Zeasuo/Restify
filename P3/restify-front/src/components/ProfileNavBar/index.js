import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { House, Award, Bootstrap, PencilSquare} from 'react-bootstrap-icons';


const ProfileNavBar = () => {
    return <>
        <div className="align-items-end align-items-sm-end px-4 pt-5 text-white min-vh-100" style={{marginLeft: "50%", marginTop: "10%"}}> 
            <Navbar bg="light">
                <Container className='fs-4' bg="primary">
                    <Navbar.Brand href='/signUp'> <House className="text-primary"> </House><span className="ms-1 d-none d-sm-inline text-primary"> Home </span> </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar bg="light">
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <Award className="text-primary"> </Award> <span className="ms-1 d-none d-sm-inline text-primary"> My Restaurant </span> </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar bg="light">
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <Bootstrap className="text-primary"></Bootstrap> <span className ="ms-1 d-none d-sm-inline text-primary"> Blogs </span> </Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar bg="light">
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <PencilSquare className="text-primary"></PencilSquare> <span className ="ms-1 d-none d-sm-inline text-primary"> Edit Profile </span></Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar bg="light">
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <PencilSquare className="text-primary"></PencilSquare> <span className ="ms-1 d-none d-sm-inline text-primary"> Add Restaurant </span></Navbar.Brand>
                </Container>
            </Navbar>

            <Navbar bg="light">
                <Container className='fs-4'>
                    <Navbar.Brand href='/signUp'> <PencilSquare className="text-primary"></PencilSquare> <span className ="ms-1 d-none d-sm-inline text-primary">Edit Restaurant </span></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    </>
}


export default ProfileNavBar