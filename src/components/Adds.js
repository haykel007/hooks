import React ,{useState} from 'react'
import { Modal , Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


function Adds(props) {
  const [show, setShow] = useState(false);
  const cc = (e) => {
    props.addMovie(newMovie)
    setShow(false)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setnewMovie] = useState({id: uuidv4() , Title:"",Poster:"",Year:"",imdbID:0,Type:"",Reating:""});
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header >
          <Modal.Title>Movie add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Poster" value={newMovie.Poster}   onChange={(e) => {
          setnewMovie({...newMovie, Poster:e.target.value});
        }}
        required/>
          <input type="text" placeholder="Title" value={newMovie.Title}  onChange={(e) => {
          setnewMovie({...newMovie, Title:e.target.value});
        }}
        required/>
          <input type="text" placeholder="Year"  value={newMovie.Year} onChange={(e) => {
          setnewMovie({...newMovie, Year:e.target.value});
        }}
        required />
          <input type="text" placeholder="imdbID" value={newMovie.imdbID}  onChange={(e) => {
          setnewMovie({...newMovie, imdbID:e.target.value});
        }}
        required/>
          <input type="text" placeholder="Type" value={newMovie.Type}  onChange={(e) => {
          setnewMovie({...newMovie, Type:e.target.value});
        }}
        required />
          <input type="number" placeholder="Reating" value={newMovie.Reating}   onChange={(e) => {
          setnewMovie({...newMovie, Reating:e.target.value})
        }}
        required/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={cc}>
           Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 export default Adds
