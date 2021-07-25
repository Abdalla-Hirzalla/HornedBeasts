import React from 'react';

import HornedBeasts from './hornedbeasts';

class Main extends React.Component {

    render() {
        return (
            <main>
                <HornedBeasts
                    title="UniCorn"
                    description="The unicorn is a legendary creature that has been described since antiquity as a beast with a single large, pointed, spiraling horn projecting from its forehead"
                    img="https://static.timesofisrael.com/www/uploads/2020/01/iStock-1130790354-e1580141646848.jpg"
                />
                <HornedBeasts
                    title="Rhinoceros"
                    description="Rhinoceroses are characterized by the possession of one or two horns on the upper surface of the snout"
                    img="https://blog.aci.aero/wp-content/uploads/2019/09/shutterstock_432544738.jpg"
                />
            </main>
        )
    }
}

export default Main;