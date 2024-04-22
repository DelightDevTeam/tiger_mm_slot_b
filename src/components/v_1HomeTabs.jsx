import Tab from 'react-bootstrap/Tab';
import all from '../assets/img/all.png';
import '../assets/css/gameTabs.css';
import { Col, Nav, Row } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

function HomeTabs() {
  const { data: gameTypes, loading, error } = useFetch(BASE_URL + '/gameType');

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state or empty response
  if (error || !Array.isArray(gameTypes) || gameTypes.length === 0) {
    return <div>Error loading game types</div>;
  }

  // Access data safely
  const slots = gameTypes[0]?.products ?? [];
  const slotCode = gameTypes[0]?.code;

  const casinos = gameTypes[1]?.products ?? [];
  const casinoCode = gameTypes[1]?.code;

  const sports = gameTypes[2]?.products ?? [];
  const sportCode = gameTypes[2]?.code;

  const fishes = gameTypes[3]?.products ?? [];
  const fishCode = gameTypes[3]?.code;

  const launchGame = (productCode, gameTypeCode) => {
    const gameData = {
      productId: productCode,
      gameType: gameTypeCode,
    };

    fetch(BASE_URL + '/game/Seamless/LaunchGame', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify(gameData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Launch Game failed');
        }
        return response.json();
      })
      .then((data) => {
        window.open(data.Url, '_blank');
      })
      .catch((error) => {
        console.error('Launch Game error:', error);
      });
  };

  return (
    <div className='mb-5'>
      <Tab.Container id='left-tabs-example' defaultActiveKey={0}>
        <Nav
          variant='pills'
          className='px-sm-4 mt-2 mt-sm-0 d-flex justify-content-start flex-nowrap mb-4  gap-sm-0 gap-lg-4 pt-2 gameTabContainer'
        >
          <Nav.Item key={0}>
            <Nav.Link eventKey={0} className='gameTab pb-2'>
              <img src={all} alt='All Games' />
              <p className='p-0 m-0'>All Games</p>
            </Nav.Link>
          </Nav.Item>

          {/* Safe check for gameTypes before mapping */}
          {Array.isArray(gameTypes) &&
            gameTypes.map((item, index) => (
              <Nav.Item key={item.id}>
                <Nav.Link eventKey={index + 1} className='gameTab pb-2'>
                  <img src={item.img_url} alt={item.name} />
                  <p className='p-0 m-0'>{item.name}</p>
                </Nav.Link>
              </Nav.Item>
            ))}
        </Nav>

        <Tab.Content className='px-2 px-md-4'>
          <Tab.Pane eventKey={0}>
            {/* Content with guard clauses */}
            <div className='mb-4'>
              <h3 className='ms-3'>Slots</h3>
              <div className='mt-2 row px-2'>
                {slots.map((item) => (
                  <div
                    key={item.id}
                    className='col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3'
                  >
                    <img
                      onClick={() => launchGame(item.code, slotCode)}
                      className='img-fluid rounded-4 gameCard object-cover'
                      src={item.imgUrl}
                      alt={item.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Tab.Pane>
          {/* Other Tab.Pane content goes here */}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default HomeTabs;
