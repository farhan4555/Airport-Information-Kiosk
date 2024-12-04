import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LogoButton from '../common/LogoButton';
import BackButton from '../common/BackButton';
import SelectorButton from '../common/SelectorButton';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';

function FlightsScreen() {
  return (
    <Container className="page d-flex flex-column align-items-center">
      <div className='d-flex w-100 justify-content-left mb-4'>
        <BackButton />
      </div>

      <div className='p-2 w-100 '>
        <Table striped bordered hover size='sm' className='p-4'>
          <thead >
            <tr>
              <th>Airline</th>
              <th>Flight</th>
              <th>Dest.</th>
              <th>STD</th>
              <th>ETD</th>
              <th>Gate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AC</td>
              <td>342</td>
              <td>Singapore</td>
              <td>10:20</td>
              <td></td>
              <td>A21</td>
              <td>Boarding</td>
            </tr>
            <tr  >
              <td>AC</td>
              <td>449</td>
              <td>Iraq</td>
              <td>11:30</td>
              <td>14:50</td>
              <td>A23</td>
              <td>Boarding</td>
            </tr>
            <tr>
              <td>AC</td>
              <td>532</td>
              <td>Dallas</td>
              <td>14:40</td>
              <td>12:30</td>
              <td>A24</td>
              <td>Take-Off</td>
            </tr>
            <tr>
              <td>WS</td>
              <td>532</td>
              <td>Dallas</td>
              <td>14:40</td>
              <td>15:40</td>
              <td>B24</td>
              <td>Landing</td>
            </tr>
            <tr>
              <td>AC</td>
              <td>342</td>
              <td>Singapore</td>
              <td>10:20</td>
              <td></td>
              <td>A21</td>
              <td>Boarding</td>
            </tr>
            <tr >
              <td>AC</td>
              <td>449</td>
              <td>Iraq</td>
              <td>11:30</td>
              <td>14:50</td>
              <td>A23</td>
              <td>Boarding</td>
            </tr>
            <tr>
              <td>AC</td>
              <td>532</td>
              <td>Dallas</td>
              <td>14:40</td>
              <td>12:30</td>
              <td>A24</td>
              <td>Take-Off</td>
            </tr>
            <tr  >
              <td>WS</td>
              <td>532</td>
              <td>Dallas</td>
              <td>14:40</td>
              <td>15:40</td>
              <td>B24</td>
              <td>Landing</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>

  );
}
export default FlightsScreen