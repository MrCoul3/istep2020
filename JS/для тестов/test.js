let news1 = {text: "1Lorem ipsum dolor...", date: "10.10.2020" };
let news2 = {text: "2Lorem ipsum dolor...", date: "11.12.2020"};
let news3 = {text: "3Lorem ipsum dolor...", date: "12.11.2020"};
let news4 = {text: "4Lorem ipsum dolor...", date: "14.11.2020"};

let newsArray = [
    {text: "1Lorem ipsum dolor...", date: "10.10.2020" },
    {text: "2Lorem ipsum dolor...", date: "11.12.2020"},
    {text: "3Lorem ipsum dolor...", date: "12.11.2020"}
];

function sortNews(newsArray) {
    for (let i = 0; i < newsArray.length; i++) {
       console.log(newsArray[i].date);
    }
}
sortNews(newsArray);