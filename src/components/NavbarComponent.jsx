import React from 'react';
import { Navbar, Text, Spacer, Grid, Switch } from '@nextui-org/react';
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setThemeDark, setThemeLight } from '../store/slices';
import { FaCat } from 'react-icons/fa';

export const NavbarComponent = () => {

    const dispatch = useDispatch();
    const { themeDark } = useSelector(state => state.kitten);
    // console.log(themeDark)
    const onChange = () => {
        if (themeDark) {
            dispatch(setThemeLight())
        } else {
            dispatch(setThemeDark())
        }
    }

    return (
        <div style={{ marginBottom: '2rem' }}>
            <Navbar isBordered variant="sticky">
                <Navbar.Brand>
                    <FaCat style={{ width: '50px', height: '50px' }}/>
                    <Spacer x={1}/>
                    <Text h1>K</Text>
                    <Text h2>ittens</Text>
                </Navbar.Brand>
                <Navbar.Content>
                    <Spacer css={{ flex: 1 }} />
                    <Grid>
                        <Switch
                            checked={themeDark}
                            size="xl"
                            iconOn={<BsMoonFill />}
                            iconOff={<BsFillSunFill />}
                            onChange={onChange}
                        />
                    </Grid>
                </Navbar.Content>
            </Navbar>

        </div>
    )
}
