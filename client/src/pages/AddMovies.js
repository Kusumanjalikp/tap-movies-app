import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddMovie = () => {
    const [formValues, setFormValues] = useState('');
    const history = useHistory();

    const onChangeFormField = (event) => {
        const { value, name, type } = event.target;

        setFormValues({
            ...formValues,
            [name]: type === "number" ? Number(value) : value
        });
    }

    const onClickSubmit = async () => {
        try {
            await axios({
                url: 'http://localhost:4000/api/movies',
                method: 'POST',
                data: formValues
            });
            history.push('/');
        }
        catch (e) {
            alert("Add Movie Failed!")
        }
    }

    return (
        <Card>
            <Card.Header>
                <h4>Add Movie</h4>
            </Card.Header>
            <Card.Body>
                <Form.Group className="mb-3" controlId="moviename">
                    <Form.Label>Moviename</Form.Label>
                    <Form.Control type="text" name="moviename" onChange={onChangeFormField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="actors">
                    <Form.Label>actors</Form.Label>
                    <Form.Control type="text" name="actors" onChange={onChangeFormField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>rating</Form.Label>
                    <Form.Control type="number" name="rating" onChange={onChangeFormField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="year">
                    <Form.Label>year</Form.Label>
                    <Form.Control type="number" name="year" onChange={onChangeFormField} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="language">
                    <Form.Label>language</Form.Label>
                    <Form.Control type="text" name="language" onChange={onChangeFormField} />
                </Form.Group>
                <Button varient="success" type="button" onClick={onClickSubmit}>
                    Submit
                </Button>
            </Card.Body>
        </Card>
    )
        
}
export default AddMovie;