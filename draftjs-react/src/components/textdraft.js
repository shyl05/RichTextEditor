import {useState, useRef, useEffect} from 'react';
import JoditEditor from "jodit-react";
import './textdraft.css';   
import axios from 'axios';

const TextDraft = () => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
    const [result,setResult] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:7000/text')
        .then((data)=>{
            const res = data.data;
            setResult(res)
        })
    },[])

    const handleSubmit = () =>{
        let textdata = {
            textdata :content
        };
        axios.post('http://localhost:7000/text',textdata)
        .then((res)=>{
            console.log('Posted');
            let datares = res.data;
            setResult([...result,datares]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleEdit = (id) =>{
        let textdata = {
            textdata : content
        }
        axios.put('http://localhost:7000/text/:id',textdata)
        .then((res)=>{
            console.log('Updated');
            let datares = res.data;
            setResult([...result,datares]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


	return (
        <div className='editorComponent'>
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onChange={newContent =>setContent(newContent)}
            />
            <h2>{content}</h2>
            <button className='submitbtn' onClick={handleSubmit}>Submit</button>
            {result.map((ele,i)=>{
                return  <div key={i}> 
                            <div dangerouslySetInnerHTML={{__html:ele.textdata}}></div>
                            <button onClick={event => handleEdit(ele._id)}>Edit</button>
                        </div>
            })}
        </div>
    );
}

export default TextDraft;