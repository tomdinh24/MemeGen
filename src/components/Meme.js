import React, {useEffect, useState} from 'react';
import styled from "styled-components";


export default function Meme() {

    // useState() allows users to change the state within the function
    // [state, function]
    // Currently, within the useState, we set the the condition of topText and bottomText to blank
    const [memeImage, setMemeImage] = useState({
        topText: " ",
        bottomText: " ",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });


    // get all meme image from memesData file and pass it to allMemeImage
    const [allMemeImage, setAllMemeImage] = useState([]);


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(img => setAllMemeImage(img.data.memes))

    }, []);


    // getMemeImage retrieves all the memes from the memesData file
    // randomize the index and output a new meme
    function getMemeImage() {

        // randomize from zero to the size of memesData
        const id = Math.floor(Math.random() * allMemeImage.length);

        // retrieve image based on the randomize id
        const url = allMemeImage[id].url

        // transfer over properties from old meme but change image
        setMemeImage( prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    // handleChange basically update the input value based on name
    function handleChange(event) {
        // get from Input
        const {name,value} = event.target

        // transfer over properties from old meme but display input at position name and it's value
        setMemeImage( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // onChange: once user change the input block the function get activated and the value get change as well
    return (
        <Main>

            <Form>
                <Input name="topText" value={memeImage.topText} onChange={handleChange}  type="text" placeholder='Top Text'/>
                <Input name="bottomText" value={memeImage.bottomText} onChange={handleChange} type="text" placeholder='Bottom Text'/>
                <Button onClick={getMemeImage}>Get a new meme image 🖼</Button>

            </Form>

            <Display>
                <Image src={memeImage.randomImage}/>
                <Meme_Text className='top'>{memeImage.topText}</Meme_Text>
                <Meme_Text className='bottom'>{memeImage.bottomText}</Meme_Text>
                
            </Display>

        </Main>

    );
};



const Main = styled.main`
    padding: 36px;
`;


const Form = styled.div`
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 17px;
`;


const Input = styled.input`
    font-family: "Karla", sans-serif;
    border-radius: 5px;
    border: 1px solid #D5D4D8;
    text-indent: 5px;
`;


const Button = styled.button`
    grid-column: 1 / -1;
    font-family: "Karla", sans-serif;
    border-radius: 5px;
    background: linear-gradient(90.41deg, #711F8D 1.14%, #A818DA 100%);
    color: white;
    border: none;
    cursor: pointer;
`;


const Display = styled.div`
    position: relative;
`;


const Image = styled.img`
    max-width: 100%;
    border-radius: 3px;
`;


const Meme_Text = styled.div`
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow:
        2px 2px 0 #000,
        -2px -2px 0 #000,
        2px -2px 0 #000,
        -2px 2px 0 #000,
        0 2px 0 #000,
        2px 0 0 #000,
        0 -2px 0 #000,
        -2px 0 0 #000,
        2px 2px 5px #000;
`;
