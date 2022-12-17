import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Text, Grid } from '@nextui-org/react';
import { LoadingComponent } from './components';
import { getKittensThunk } from './store/slices';

export const KittensApp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, isLoading } = useSelector(state => state.kitten)

    useEffect(() => {
        dispatch(getKittensThunk())
    }, [])


    return (
        <div>
            {
                (isLoading) ?
                    <LoadingComponent />
                    :
                    <Grid.Container gap={2} justify="flex-start" >
                        {
                            data.map((kitten, i) => (
                                <Grid xs={6} md={4} xl={3} key={i}>
                                    <Card
                                        isHoverable
                                        isPressable
                                        onClick={() => navigate(`/kitten/${kitten.id}`)}
                                    >
                                        <Card.Body>
                                            <Card.Image
                                                src={`http://localhost:4000/api/${kitten.imageFileName}`}
                                                alt={kitten.name}
                                                width="100%"
                                                height={140}
                                            />
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row justify='center'>
                                                <Text h4 transform="capitalize">{kitten.name}</Text>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid.Container>
            }
        </div>
    )
}
