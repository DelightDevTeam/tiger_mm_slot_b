import Tab from 'react-bootstrap/Tab';
import all from '../assets/img/all.png';
import '../assets/css/gameTabs.css'
import { Col, Nav, Row } from 'react-bootstrap';
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL';


function HomeTabs() {
    const { data: gameTypes } = useFetch(BASE_URL + "/gameType");
    const slots = gameTypes[0]?.products;
    const slotCode = gameTypes[0]?.code;
    const casinos = gameTypes[1]?.products;
    const casinoCode = gameTypes[1]?.code;
    const sports = gameTypes[2]?.products;
    const sportCode = gameTypes[2]?.code;
    const fishes = gameTypes[3]?.products;
    const fishCode = gameTypes[3]?.code;

    const lauchGame = (productCode, gameTypeCode) => {
        console.log('productCode', productCode)
        console.log('gameTypeCode', gameTypeCode)
        let gameData = {
            productId: productCode,
            gameType: gameTypeCode
        }
        // console.log(gameData)
        fetch(BASE_URL + "/game/Seamless/LaunchGame", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(gameData)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Launch Game failed");
                }
                console.log("Launch Game success");
                return response.json();
            })
            .then((data) => {
                // console.log(data.data);
                // window.location.href = data.data;
                window.open(data.Url, '_blank');
                console.log(data);
            })
            .catch((error) => {
                console.error("Launch Game error:", error);
            });
    }
    return (
        <div className="mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                <Nav variant="pills"
                    // style={{ background: '#3A2557' }}
                    // style={{
                    //     background: ' linear-gradient(to bottom, #630D93, #3A107D)'
                    // }}
                    className="px-sm-4 mt-2 mt-sm-0
                     d-flex justify-content-start flex-nowrap mb-4  gap-sm-0 gap-lg-4 pt-2 gameTabContainer"  >
                    <Nav.Item key={0} >
                        <Nav.Link eventKey={0} className='gameTab pb-2'>
                            <img src={all} />
                            <p className='p-0 m-0'>{'All Games'}</p>
                        </Nav.Link>
                    </Nav.Item>
                    {gameTypes.map((item) => {
                        return <Nav.Item key={item.id} >
                            <Nav.Link eventKey={item.id} className='gameTab pb-2'>
                                <img src={item.img_url} />
                                <p className='p-0 m-0'>{item.name}</p>
                            </Nav.Link>
                        </Nav.Item>
                    })}
                </Nav>
                <Tab.Content className='px-2 px-md-4'>
                    <Tab.Pane eventKey={0}>
                        <div className='mb-4'>
                            <h3 className='ms-3' >Slots</h3>
                            <div className="mt-2 row px-2">
                                {slots?.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img onClick={() => lauchGame(item.code, slotCode)} className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.imgUrl} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h3 className='ms-2' >Live Casinos</h3>
                            <div className="row px-2">
                                {casinos?.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img onClick={() => lauchGame(item.code, casinoCode)} className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.imgUrl} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h3 className='ms-2' >Sport Book</h3>
                            <div className="row px-2">
                                {sports?.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img onClick={() => lauchGame(item.code, sportCode)} className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.imgUrl} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h3 className='ms-2' >Fishing</h3>
                            <div className="row px-2">
                                {fishes?.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img onClick={() => lauchGame(item.code, fishCode)} className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.imgUrl} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={1}>
                        <div className="row px-2">
                            {slots?.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img onClick={() => lauchGame(item.code, slotCode)} className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.imgUrl} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={2}>
                        <div className="row px-2">
                            {casinos?.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img onClick={() => lauchGame(item.code, casinoCode)} className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.imgUrl} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={3}>
                        <div className="row px-2">
                            {sports?.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img onClick={() => lauchGame(item.code, sportCode)} className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.imgUrl} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={4}>
                        <div className="row px-2">
                            {fishes?.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img onClick={() => lauchGame(item.code, fishCode)} className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.imgUrl} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>

                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default HomeTabs;