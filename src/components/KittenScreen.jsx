import { useNavigate, useParams } from 'react-router-dom'
import { Button, Grid, Image, Spacer, Text } from '@nextui-org/react'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingComponent } from './LoadingComponent';

export const KittenScreen = () => {
    const [kitty, setKitty] = useState();
    const { id } = useParams();
    const navigate = useNavigate()
    const { data } = useSelector(state => state.kitten);

    useEffect(() => {
        const idKitten = data.find(k => k.id == id)

        if (idKitten) {
            setKitty(idKitten);
            console.log(kitty)
        }
    }, [])




    return (
        <Grid.Container gap={2}>
            <Grid xs={12} md={6} css={{ padding: '0px' }}>
                <Image
                    width={500}
                    height={500}
                    src={`http://localhost:4000/api/${kitty ? kitty.imageFileName : ''}`}
                    alt={kitty ? kitty.name : <LoadingComponent />}
                />
            </Grid>
            <Grid xs={12} md={6} css={{
                display: 'flex',
                flexDirection: 'column',
                "@xs": {
                    jc: 'center',
                    ai: 'center'
                },
                "@lg": {
                    jc: 'center',
                    ai: 'flex-start'
                }
            }} /* css={{ display: 'flex', fd: 'column', jc: 'center', ai: 'center' }} */>
                <Grid css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text h1>N</Text>
                        <Text h2>ame :</Text>
                    </div>
                    <Spacer x={1} />
                    <Text h2>{kitty ? kitty.name : <LoadingComponent />}</Text>
                </Grid>
                <Grid css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text h1>A</Text>
                        <Text h2>ge :</Text>
                    </div>
                    <Spacer x={1} />
                    <Text h2>{kitty ? kitty.age : <LoadingComponent />}</Text>
                </Grid>
                <Grid css={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text h1>G</Text>
                        <Text h2>ender :</Text>
                    </div>
                    <Spacer x={1} />
                    <Text h2>{kitty ? kitty.gender : <LoadingComponent />}</Text>
                </Grid>
                <Grid css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text h1>D</Text>
                        <Text h2>escription:</Text>
                    </div>
                    <Spacer x={1} />
                    <Text h3 css={{ textAlign: 'center' }}>{kitty ? kitty.description : <LoadingComponent />}</Text>
                </Grid>
                <Grid css={{ marginTop: "2rem" }}>
                    <Button
                        size="lg"
                        css={{
                            fontSize: '1.4rem',
                            padding: '1rem'
                        }}
                        onClick={() => navigate('/')}
                    >Back to Kittens!</Button>
                </Grid>

            </Grid>
        </Grid.Container>
    )
}
