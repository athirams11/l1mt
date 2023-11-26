import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Placeholder } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../services/countries';
import { ReactComponent as Img } from '../assets/img.svg'
import Header from './Header';
import Footer from './Footer';

function Home() {

    const dispatch = useDispatch()
    const [countries, setCountries] = useState([])
    const [selectedRegion, setSelectedRegion] = useState("All")
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const { status } = useSelector(state => state?.countries)

    useEffect(() => {
        dispatch(getCountries())
            .unwrap()
            .then(data => {
                setCountries(data);
                setFilteredCountries(data)
            })
            .catch(error => console.error(error))
    }, [dispatch])

    const selectRegion = (region) => {
        let countriesValue = [...countries]
        if (region !== 'All') {
            countriesValue = countries.filter(country => country.region === region)
        }
        setSelectedRegion(region)
        setFilteredCountries(countriesValue)
    }

    const CardView = ({ children }) => {
        return (
            <div className='g-2 g-lg-3 col-md-12 col-sm-12 col-lg-6'>
                <Card>
                    <Card.Body>
                        <Row>
                            {children}
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    return (
        <Container>
            <Header selectedRegion={selectedRegion} selectRegion={selectRegion} />
            <Row className='justify-content-between custom-height no-scrollbar mt-3'>
                {filteredCountries.length ? filteredCountries.map(country =>
                    <CardView key={country?.name}>
                        <Col className='col-3 card-sm-pr'>
                            <Card.Img alt={country?.name} src={country?.flag} />
                        </Col>
                        <Col className='col-9 card-sm-pl'>
                            <Card.Title>{country?.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{country?.region}</Card.Subtitle>
                        </Col>
                    </CardView>) :
                    status === 'loading' ?
                        [1, 2].map((val) => (
                            <CardView key={val}>
                                <Col className='col-3'>
                                    <Placeholder animation="glow">
                                        <Img className='card-img' />
                                    </Placeholder>
                                </Col>
                                <Col className='col-9'>
                                    <Placeholder as={Card.Title} animation="glow">
                                        <Placeholder xs={6} />
                                    </Placeholder>
                                    <Placeholder as={Card.Subtitle} animation="glow">
                                        <Placeholder xs={4} />
                                    </Placeholder>
                                </Col>
                            </CardView>
                        )) :
                        <Col>
                            <h5 className='text-center align-items-center'>No Data Found</h5>
                        </Col>
                }
            </Row>
            <Footer />
        </Container>
    );
}

export default Home;