import pic from "../assests/CHIN.jpg";
import ss from "../assests/aa.jpg";
import { Rating } from '@mantine/core';
import "./home1.css";

function Demo() {
  return <Rating defaultValue={5} size="sm" />
}

const CardData =[ 
    {
    img: pic,
    title: "Title",
    description: "Description",
    rating: Demo()
    },  
    {
    img: ss,
    title: "Title",
    description: "Description",
    rating: Demo()
    },
    {
    img: pic,
    title: "Title",
    description: "Description",
    rating: Demo()
    },
    {
    img: pic,
    title: "Title",
    description: "Description",
    rating: Demo()
    },  
];



export default CardData;
