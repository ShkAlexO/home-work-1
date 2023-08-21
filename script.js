var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
    id: 1,
    brand: "Ауди",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            версия: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            версия: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var App = React.createElement(
    "div",
    { className: "app" },
    React.createElement(
        "h1",
        { className: "app__title" },
        "Car Specs"
    ),
    React.createElement(
        "table",
        { className: "app__table" },
        React.createElement(
            "tbody",
            null,
            CARS.map(function (_ref) {
                var id = _ref.id,
                    brand = _ref.brand,
                    models = _ref.models;

                return React.createElement(
                    React.Fragment,
                    { key: id },
                    React.createElement(
                        "tr",
                        { className: "app__brand" },
                        React.createElement(
                            "td",
                            { colSpan: "2" },
                            brand
                        )
                    ),
                    models.map(function (_ref2) {
                        var id = _ref2.id,
                            name = _ref2.name,
                            collection = _ref2.collection;

                        return React.createElement(
                            "tr",
                            { key: id },
                            React.createElement(
                                "td",
                                { className: "app__model" },
                                name
                            ),
                            React.createElement(
                                "td",
                                { className: "app__info" },
                                collection.map(function (_ref3) {
                                    var id = _ref3.id,
                                        version = _ref3.version,
                                        year = _ref3.year,
                                        horsepower = _ref3.horsepower,
                                        engine = _ref3.engine;

                                    return React.createElement(
                                        "ul",
                                        { key: id },
                                        React.createElement(
                                            "li",
                                            null,
                                            "Version: ",
                                            version
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            "Year: ",
                                            year
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            "Horsepower: ",
                                            horsepower
                                        ),
                                        React.createElement(
                                            "li",
                                            null,
                                            "Engine: ",
                                            engine
                                        )
                                    );
                                })
                            )
                        );
                    })
                );
            })
        )
    )
);

root.render(App);