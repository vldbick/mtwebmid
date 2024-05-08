import { fetchAndParse } from "./call.js";
import { allFilling } from "./filling.js";


window.addEventListener('load', () => {
    fetchAndParse('Киев')
        .then(data => {
            allFilling(data)
        }
        ).catch(error => {
            console.error('Помилка:', error);
            alertify.error('ERROR')
        });


    document.querySelector('.b-search').addEventListener('click', (ev) => {
        ev.preventDefault();
        const inp = document.querySelector('.inp-se');
        const val = inp.value;
        fetchAndParse(val)
            .then(data => {
                allFilling(data)
            }
            ).catch(error => {
                console.error('Помилка:', error);
                alertify.error('ERROR')
            });
        inp.value = '';
    })
})


