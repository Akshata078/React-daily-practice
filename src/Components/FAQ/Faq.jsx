// FAQ - Frequently Asked Questions
import { useState } from 'react';
import './Faq.css';
import { Questions} from "./Faqdata.js";
import Faqitem from './Faqitems.jsx';

function Faq(){
    // const [showAns, setShowAns] = useState(0);
   
    // return(
    //     <div>
    //         <h1 className='heading'>Frequently Asked Questions(FAQ)</h1>
    //         <div className='faq-outer'>
    //             {
    //                 Questions.map((faqitem, i)=>{
    //                     return(
    //                         <div className='faq-items'>
    //                        <h2 onClick={()=>setShowAns(faqitem.id)}>{faqitem.question}</h2>
    //                        <p className={showAns==faqitem.id ? 'active-ans' : ''}>{faqitem.answer}</p>
    //                        </div>
    //                     )
    //                 })
    //             }
                
    //         </div>

    //     </div>

    // )






    // create FAQ with props drilling

    const [currentId, setCurrentId] = useState(0);
    let items = Questions.map((item, i)=>{
        return(
            <Faqitem itemData={item} currentId={currentId} setCurrentId={setCurrentId}/>
        )
        
    })

    return(
        <div>
            <h1> <h1 className='heading'>Frequently Asked Questions(FAQ)</h1></h1>
            <div className='faq-outer'>
               {items}
            </div>
        </div>
    )


}

export default Faq;