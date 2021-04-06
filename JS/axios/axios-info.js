import axios from "axios";
axios.post('handle.php', JSON.stringify({'method': 'getTimeIntervals'}))
    .then((response) => {

    })