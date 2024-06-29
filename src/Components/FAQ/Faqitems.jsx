function Faqitem(props){
    return(
        <div className='faq-items'>
            <h2 onClick={()=>props.setCurrentId(props.itemData.id)}>{props.itemData.question}</h2>
            <p className={props.currentId===props.itemData.id ? 'active-ans' : ''}>{props.itemData.answer}</p>
        </div>
    )
}
export default Faqitem;