const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const CARS = [
    {
        id: 1,
        brand: "Ауди",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        версия: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        версия: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];

const App = <div className="app">
    <h1 className="app__title">Car Specs</h1>
   
    <table className="app__table">
      <tbody>
        {CARS.map( ({id, brand, models}) =>  {
            return(
                <React.Fragment key={id}>
                    <tr className="app__brand">
                        <td colSpan="2">{brand}</td>
                    </tr> 

                    {models.map( ({id, name, collection}) => {
                        return (
                            <tr key={id}>
                                <td className="app__model">{name}</td>
                                <td className="app__info" >
                                    {collection.map( ({id, version, year, horsepower, engine}) => {
                                        return (
                                            <ul key={id}>
                                                <li>Version: {version}</li>
                                                <li>Year: {year}</li>
                                                <li>Horsepower: {horsepower}</li>
                                                <li>Engine: {engine}</li>
                                            </ul>
                                        )
                                    })}
                                </td>
                            </tr>
                        )
                    } )}
                </React.Fragment> 
            )
        }
        )}
      </tbody>
    </table>
</div>

root.render(App);