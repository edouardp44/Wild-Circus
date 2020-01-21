const routes = require('../../public/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
Routing.setRoutingData(routes);
document
    .getElementById('animal-list')
    .addEventListener('click', (event) => {
        fetch(Routing.generate('animals_detail', {id : event.target.id}))
            .then(function (response) {
                return response.json()
            })
            .then(function (result) {
                var element1 = document.getElementById("animals-detail");
                element1.innerHTML = result;
                var element2 = document.getElementById('element');
                var parentDiv = element2.parentNode;

                parentDiv.replaceChild(element1, element2)
            })
    });