import { useState } from "react"
import { v4 as uuid } from "uuid";

function randomEmoji() {
    const choices = ["🤗", "😍", "😢", "😡", "🤩", "🥸", "🥳"];
    return choices[Math.floor(Math.random() * choices.length)]
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji() }]);
    
    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, {id: uuid(), emoji: randomEmoji() }]);
    }
    
    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter(e => e.id !== id);
        });
    }

    const makeAllEmojisHearts = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return {...e, emoji: "❤️"}
            });
        });
    }

    return (
        <div>
            {emojis.map((e) => (
                <span 
                    onClick={() => deleteEmoji(e.id)} 
                    key={e.id} 
                    style={{fontSize: "45px"}}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji} style={{display: "block"}}>Add Emoji</button>
            <button onClick={makeAllEmojisHearts}>Make them all hearts</button>
        </div>
    )
}